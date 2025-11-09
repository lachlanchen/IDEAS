# Molecularly Programmed Metasurfaces: Gaussian + Multiwfn + S4 Workflow

Absolutely—pairing **Gaussian** + **Multiwfn** (molecular optics) with **S4** (metasurface RCWA) is not only feasible, it’s a sharp way to design *molecularly programmed* metasurfaces that do real optical work. Below I’ll give you: (i) concrete project ideas, (ii) a physics‑tight workflow that glues the tools together, and (iii) ready‑to‑run code that converts TD‑DFT outputs into **n(λ), k(λ)** you can feed into S4.

---

## What you can do that’s interesting, feasible, and meaningful

### 1) Molecularly tuned perfect absorber (critical coupling)

Design a guided‑mode resonance (or lamellar grating) metasurface whose linewidth and center frequency are matched to a dye’s excitonic line so that **all incident light is dissipated in the dye layer** at the target wavelength (e.g., visible red).
*Impact:* ultrathin sensors, display pixels, or quenchers for fluorescence backgrounds.
*Method:* TD‑DFT (Gaussian) → oscillator strengths → effective medium via Clausius–Mossotti/Lorentz–Lorenz → **S4** for R/T/A spectra and field confinement. S4 is an RCWA solver specifically for layered periodic structures with a Lua interface. ([Stanford University][1])

### 2) All‑optical switch with photochromes (e.g., azobenzene/spiropyran)

Compute two states (trans/cis) to get two dispersion models, then simulate a metasurface operating at a **high phase‑sensitivity point**. You’ll see a large spectral/phase shift on UV/blue pumping.
*Impact:* low‑energy, reversible pixel‑level modulators.

### 3) Protein/DNA overlayer index engineering

A 5–20 nm biomolecular overlayer (protein monolayer, DNA brush) measurably shifts a narrow metasurface resonance. Compute its *complex* refractive index from polarizability; predict **limits of detection** for biosensing.
*Impact:* immediately testable with standard surface functionalization protocols; simple wet lab.

### 4) Excitonic anisotropy & orientation control

Many dyes are dipolar. If you align them (spin‑coat in E‑field, stretch film, or brush on SAMs), you get anisotropic ε. Compute direction‑dependent polarizability and simulate **polarization‑dependent metasurface phase**.

> Why this pairing works: S4 handles the **electromagnetic lattice response**; Gaussian/Multiwfn give you the **molecular resonances and oscillator strengths**; Clausius–Mossotti/Lorentz–Lorenz turns the microscopic polarizability into a **macroscopic ε(ω)** that you can pass to S4 wavelength‑by‑wavelength. ([Stanford University][1])

---

## End‑to‑end workflow (physics + tools)

**A. Quantum chemistry (Gaussian)**

1. Optimize geometry (ground state).
2. TD‑DFT for excited states (choose range‑separated hybrid if CT character is expected; e.g., CAM‑B3LYP/ωB97X‑D).
3. (Optional) Solvent or host environment via PCM to capture spectral shifts.
   Gaussian prints lines like:
   `Excited State   1:  Singlet-A  2.35 eV  527.5 nm  f=0.51  <S**2>=0.0000`
   You need the **excitation energies** (Ej) and **oscillator strengths** (fj). ([Gaussian][2])

**B. Extract & sanity‑check (Multiwfn)**
Open the Gaussian log/fchk in Multiwfn → Spectrum/Excitations module → export **discrete lines** (Ej, fj). Multiwfn’s manual documents the spectrum utilities and exports. ([SoberEva][3])

**C. From molecules to materials (physics bridge)**
Use the Lorentz model for the *molecular polarizability*
[
\alpha_\text{mol}(\omega);=;\sum_j \frac{e^2}{m_e},\frac{f_j}{\omega_j^2-\omega^2-i\gamma_j\omega},
]
then mix to a bulk film through **Clausius–Mossotti / Lorentz–Lorenz**
[
\frac{\varepsilon_r-1}{\varepsilon_r+2}=\frac{N\alpha_\text{mol}}{3\varepsilon_0}\quad\Rightarrow\quad \varepsilon_r(\omega)=\frac{1+2X}{1-X},;X=\frac{N\alpha_\text{mol}}{3\varepsilon_0}.
]
Here (N) is molecular number density (from wt% and film density). From (\varepsilon_r) you get **n(ω), k(ω)**. This relation is standard and also written as Lorentz–Lorenz for refractive index. ([Wikipedia][4])

**D. Electromagnetics (S4)**
Define a periodic stack (e.g., air / patterned dielectric / dye film / substrate). For each wavelength λ:

1. load (n(\lambda), k(\lambda)) for the dye‑doped layer,
2. set plane‑wave incidence and polarization,
3. compute R, T, A and near fields,
4. sweep geometry to hit **critical coupling** or maximize phase slope.
   S4 is an RCWA/Fourier‑modal solver designed for these 2D‑periodic layered structures. ([Stanford University][1])

> Practical tip: for a host polymer (e.g., PMMA, PVA), convert its known (n_\text{host}) to a host polarizability term and *add it* in the Lorentz–Lorenz mixing (X_\text{total}=X_\text{host}+X_\text{dye}) before inverting to (\varepsilon_r). ([Wikipedia][4])

---

## Ready‑to‑run code: TD‑DFT → (n(\lambda),k(\lambda))

The script below parses a **Gaussian TD‑DFT** log, builds a Lorentz‑oscillator polarizability from ((E_j,f_j)), mixes it to a bulk film via **Clausius–Mossotti**, and writes a CSV of (\lambda), (n), (k). It assumes:

* damping (\gamma_j) supplied as a single FWHM‑like parameter in eV (you can refine per line if you have linewidths),
* a **host refractive index** (optional) added via Lorentz–Lorenz,
* a **wt%** and **film density** to compute molecule density (N).

> You can feed the CSV into S4 by updating the material each wavelength step.

```python
#!/usr/bin/env python3
# gaussian_to_nk.py
# Convert Gaussian TD-DFT excited states (Ej, fj) to dispersive n(λ), k(λ)
# using Lorentz oscillators + Clausius–Mossotti / Lorentz–Lorenz mixing.

import re
import math
import csv
import argparse
from typing import List, Tuple

# Physical constants (SI)
EPS0 = 8.8541878128e-12      # F/m
QE   = 1.602176634e-19       # C
ME   = 9.1093837015e-31      # kg
HBAR = 1.054571817e-34       # J*s
C0   = 299792458.0           # m/s
NA   = 6.02214076e23         # 1/mol
EV_TO_J = QE                 # 1 eV = q_e Joules

EXCITED_STATE_RE = re.compile(
    r"Excited State\s+\d+:\s+.*?([\d\.]+)\s+eV\s+[\d\.]+\s+nm\s+f=([\d\.]+)",
    re.IGNORECASE
)

def parse_gaussian_td_log(path: str) -> List[Tuple[float, float]]:
    """Return list of (E_eV, f) from a Gaussian TD-DFT log file."""
    E_f = []
    with open(path, 'r', errors='ignore') as fh:
        for line in fh:
            m = EXCITED_STATE_RE.search(line)
            if m:
                E_eV = float(m.group(1))
                f    = float(m.group(2))
                E_f.append((E_eV, f))
    if not E_f:
        raise RuntimeError("No excited states found. Check your Gaussian log.")
    return E_f

def eV_to_omega(E_eV: float) -> float:
    """Convert energy in eV to angular frequency (rad/s)."""
    return (E_eV * EV_TO_J) / HBAR

def eV_to_gamma_radps(gamma_eV: float) -> float:
    return (gamma_eV * EV_TO_J) / HBAR

def lorentz_alpha_mol(omega: float, lines: List[Tuple[float, float]], gamma_eV: float) -> complex:
    """Molecular polarizability α_mol(ω) from oscillator strengths (SI units: C^2 m^2 / J)."""
    alpha = 0+0j
    gamma = eV_to_gamma_radps(gamma_eV)
    pref  = (QE**2) / ME
    for E_eV, f in lines:
        wj = eV_to_omega(E_eV)
        denom = (wj**2 - omega**2) - 1j*gamma*omega
        alpha += pref * f / denom
    return alpha  # SI units

def lorentz_lorenz_X_from_n(n: float) -> float:
    """X = (n^2 - 1)/(n^2 + 2) (dimensionless)."""
    return (n*n - 1.0) / (n*n + 2.0)

def epsilon_from_X(X: complex) -> complex:
    """Invert X = (ε_r - 1)/(ε_r + 2) to get ε_r."""
    return (1 + 2*X) / (1 - X)

def nk_from_eps(eps_r: complex) -> Tuple[float, float]:
    """Return (n,k) from complex ε_r = (n+ik)^2 (non-magnetic)."""
    # Convert to complex refractive index
    nr = complex(eps_r)**0.5
    return (nr.real, nr.imag if nr.imag >= 0 else -nr.imag)

def number_density_from_wt_fraction(wt_frac: float, density_g_cm3: float, molar_mass_g_mol: float) -> float:
    """
    wt_frac: mass fraction of dye (0..1)
    density_g_cm3: bulk film density
    molar_mass_g_mol: dye molar mass
    Returns N in 1/m^3
    """
    rho = density_g_cm3 * 1000.0  # g/cm3 -> kg/m3 (since 1 g/cm3 = 1000 kg/m3)
    M   = molar_mass_g_mol / 1000.0  # g/mol -> kg/mol
    c_mol_m3 = (wt_frac * rho) / M   # mol/m^3
    return c_mol_m3 * NA            # 1/m^3

def build_dispersion(
    lines: List[Tuple[float, float]],
    gamma_eV: float,
    N_m3: float,
    lambdas_nm: List[float],
    n_host: float = None
) -> List[Tuple[float, float, float]]:
    """
    Returns list of (lambda_nm, n, k)
    """
    X_host = lorentz_lorenz_X_from_n(n_host) if n_host is not None else 0.0
    out = []
    for lam_nm in lambdas_nm:
        lam_m = lam_nm * 1e-9
        omega = 2*math.pi*C0/lam_m
        alpha = lorentz_alpha_mol(omega, lines, gamma_eV)  # SI
        X_dye = (N_m3 * alpha) / (3.0 * EPS0)             # dimensionless (complex)
        X_tot = X_host + X_dye
        eps_r = epsilon_from_X(X_tot)
        n, k = nk_from_eps(eps_r)
        out.append((lam_nm, n, k))
    return out

def main():
    p = argparse.ArgumentParser(description="Convert Gaussian TD-DFT excitations to n(λ),k(λ) via Lorentz–Lorenz mixing.")
    p.add_argument("--log", required=True, help="Gaussian TD-DFT log file")
    p.add_argument("--gamma_eV", type=float, default=0.10, help="Homogeneous linewidth γ in eV (default 0.10 eV)")
    p.add_argument("--wt_percent", type=float, default=1.0, help="Dye weight percent in film (default 1.0)")
    p.add_argument("--density_g_cm3", type=float, default=1.20, help="Film density g/cm^3 (default 1.20)")
    p.add_argument("--molar_mass_g_mol", type=float, required=True, help="Dye molar mass g/mol")
    p.add_argument("--lambda_min_nm", type=float, default=400.0)
    p.add_argument("--lambda_max_nm", type=float, default=800.0)
    p.add_argument("--lambda_step_nm", type=float, default=1.0)
    p.add_argument("--host_n", type=float, default=None, help="Host refractive index (optional)")
    p.add_argument("--out_csv", default="nk.csv", help="Output CSV (lambda_nm,n,k)")
    args = p.parse_args()

    lines = parse_gaussian_td_log(args.log)
    wt_frac = args.wt_percent/100.0
    N = number_density_from_wt_fraction(wt_frac, args.density_g_cm3, args.molar_mass_g_mol)

    lambdas = []
    L = args.lambda_min_nm
    while L <= args.lambda_max_nm + 1e-9:
        lambdas.append(L)
        L += args.lambda_step_nm

    table = build_dispersion(
        lines=lines,
        gamma_eV=args.gamma_eV,
        N_m3=N,
        lambdas_nm=lambdas,
        n_host=args.host_n
    )

    with open(args.out_csv, "w", newline="") as fh:
        w = csv.writer(fh)
        w.writerow(["lambda_nm", "n", "k"])
        for row in table:
            w.writerow(row)

    # Simple sanity notes
    max_k = max(x[2] for x in table)
    if max_k < 1e-4:
        print("Note: k is very small across the band. If you expect absorption, increase wt% or gamma_eV or check fj.")
    if wt_frac > 0.2:
        print("Warning: wt% > 20% may be unphysical for many dyes; Lorentz–Lorenz mixing may break down.")

if __name__ == "__main__":
    main()
```

**How to use**

1. Run Gaussian TD‑DFT (example routes below).
2. Export excitations with Multiwfn (energies & oscillator strengths).
3. Run:

```bash
python3 gaussian_to_nk.py \
  --log your_td.log \
  --molar_mass_g_mol 534.6 \
  --wt_percent 1.0 \
  --density_g_cm3 1.20 \
  --host_n 1.49 \
  --gamma_eV 0.12 \
  --lambda_min_nm 450 --lambda_max_nm 750 --lambda_step_nm 1 \
  --out_csv dye_in_PMMA_nk.csv
```

This produces **dye_in_PMMA_nk.csv** with λ, n, k.

> **Notes on accuracy.** TD‑DFT oscillator strengths are generally decent but not perfect; benchmarking shows functional dependence—so it’s wise to calibrate γ and any small energy shifts to experimental spectra when you have them. ([Pfloos][5])

---

## Example Gaussian inputs (complete)

**Geometry optimization**

```
%chk=dye_opt.chk
#p B3LYP/6-31G(d) Opt

Title: Optimize dye geometry
0 1
<XYZ coordinates>
```

**TD‑DFT (20 states) with PCM (e.g., chloroform)**

```
%chk=dye_opt.chk
#p TD(NStates=20) CAM-B3LYP/6-31+G(d,p) Geom=AllCheck Guess=Read SCRF=(PCM,Solvent=Chloroform)

Title: TD-DFT excited states
```

This will print the **Excited State** lines (energies in eV, oscillator strengths f) that the script parses. ([Gaussian][2])

---

## Driving S4 with your dispersion

S4 expects you to define materials and layers, then sweep wavelength. A standard loop is:

1. **Add materials & layers** (air / patterned dielectric / your **dye film with n,k(λ)** / substrate).
2. For each λ, **update the dye film material** with the corresponding n,k (from CSV) and evaluate R/T/A + fields.
3. **Sweep geometry** (period, fill factor, thickness) to hit critical coupling or to maximize phase slope (for modulators).

S4 is an RCWA/Fourier‑modal solver purpose‑built for bi‑periodic layered structures with a Lua scripting interface; see the original code paper for model details and performance characteristics. ([Stanford University][1])

---

## Practical design checklist

* **Convergence in RCWA:** increase Fourier orders until R+T+A stabilizes; metal gratings need more orders. S4’s paper discusses stability and performance. ([Stanford University][1])
* **Linewidths:** your γ (meV–100 meV) sets absorption strength; start modest (50–120 meV) then adjust.
* **Host mixing:** use **Lorentz–Lorenz** to combine host and dye; don’t just add ε. ([Wikipedia][4])
* **Orientation:** if molecules align, you’ll need tensor ε; start isotropic, then extend.
* **Validation:** compare the **uniform film** (no pattern) absorbance from S4 with Kramers–Kronig‑consistent (n,k) to confirm your physics pipeline before adding a grating.

---

## Why this is publishable sooner rather than later

* The **toolchain is mature**: Gaussian TD/TD‑DFT and Multiwfn’s spectrum utilities are standard; S4 is a widely used RCWA code for metasurfaces. ([SoberEva][3])
* The **theory bridge is classical** and robust (Lorentz–Lorenz / Clausius–Mossotti). ([Wikipedia][4])
* The **experiments are accessible**: spin‑coat a dye‑doped polymer on a nanoimprinted/interference‑lithography grating; or functionalize a commercial grating with a photochrome SAM—both routine in typical EEE/biomed labs.

---

## If you want a first target this week

1. Pick a visible dye with a strong S1←S0 (absorption peak ~550–650 nm).
2. Run the TD‑DFT → export Ej,fj → generate **n,k** with the script.
3. In S4, design a **1D lamellar grating** (period ~( \lambda/n ), thickness ~100–300 nm) on glass; place a 30–60 nm dye‑doped film atop.
4. Optimize fill factor and film thickness to minimize R and T at λ0 (maximize A).
5. Verify sensitivity: vary wt% (e.g., 0.2–2%) and observe the R/T/A change.

---

### References & pointers

* **S4 (RCWA/FMM) solver**: official paper detailing method and Lua scripting interface. ([Stanford University][1])
* **S4 repository page** (for building and examples). ([GitHub][6])
* **Gaussian TD‑DFT** overview and output structure (excited states & oscillator strengths). ([Gaussian][2])
* **Clausius–Mossotti / Lorentz–Lorenz** relations for mixing microscopic polarizability to macroscopic ε or n. ([Wikipedia][4])
* **On oscillator‑strength accuracy in TD‑DFT** (why calibration to experiment is wise). ([Pfloos][5])

---

If you’d like, I can adapt the script to **tensor anisotropy** (for oriented dyes), or sketch a **Lua driver** that ingests the CSV and sweeps a grating geometry in S4.

[1]: https://web.stanford.edu/group/fan/publication/Liu_ComputerPhysicsCommunications_183_2233_2012.pdf?utm_source=chatgpt.com "A free electromagnetic solver for layered periodic structures"
[2]: https://gaussian.com/td/?utm_source=chatgpt.com "TD"
[3]: https://sobereva.com/multiwfn/misc/Multiwfn_3.8_dev.pdf?utm_source=chatgpt.com "Multiwfn manual"
[4]: https://en.wikipedia.org/wiki/Clausius%E2%80%93Mossotti_relation?utm_source=chatgpt.com "Clausius–Mossotti relation"
[5]: https://pfloos.github.io/WEB_LOOS/pub/97.pdf?utm_source=chatgpt.com "Benchmarking TD-DFT and Wave Function Methods for ..."
[6]: https://github.com/victorliu/S4?utm_source=chatgpt.com "victorliu/S4: Stanford Stratified Structure Solver"

