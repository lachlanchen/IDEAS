# Feasible Biomolecular Imaging Metasurfaces with AlphaFold

Author: Lachlan Chen, AgInTiFlow
Affiliation: AgInTi Lab, LazyingArt LLC

## Thesis

The feasible idea is a hybrid imaging metasurface where biomolecules control nanoscale geometry and inorganic or dye cargo supplies optical contrast. Pure protein or DNA is usually too weak optically to be the resonator. A practical system uses ferritin, DNA origami, or protein cages to place Au/Ag particles, iron oxide, quantum dots, or dense fluorophore clusters into a periodic or quasi-periodic optical surface.

AlphaFold should be used as a molecular-geometry engine, not as the metasurface solver. It can test whether a protein cage closes, whether protein handles remain exposed, and whether a protein-DNA orientation lock is plausible. RCWA or FDTD then predicts the imaging/metasurface response.

## Most Feasible Candidate

The best first candidate is a human ferritin H-chain 24-mer nanocage array.

Ferritin is attractive because it is already a symmetric protein nanocage, not a design fantasy. Maxi-ferritins form 24-subunit hollow cages with an outer diameter near 12 nm and an inner cavity near 8 nm. Ferritin nanocages have been used as nanoreactors and carriers for iron oxide, gold, near-infrared dyes, and multimodal imaging probes. That makes them a credible bridge between molecular biology and optical imaging.

The device concept is:

1. Assemble or express human ferritin H-chain cages.
2. Load the cage with optically useful cargo: iron oxide, Au, ICG/Cy5.5, quantum dots, or mixed cargo.
3. Immobilize cages as a 2D array on a transparent substrate.
4. Tune lattice pitch and cargo size for dark-field scattering, fluorescence enhancement, photothermal contrast, optoacoustic contrast, or magneto-optic sensing.
5. Use AlphaFold models to validate cage geometry and engineered tag placement before wet-lab production.

## AlphaFold Calculation

A first AlphaFold Server calculation has been submitted in the ProteinStructure workspace:

```text
Job: 12_ferritin_h_24mer_metasurface_nanocage
Input: references/alphafold_server_jobs/12_ferritin_h_24mer_metasurface_nanocage.fasta
Protein: human ferritin heavy chain FTH1, UniProt P02794
Copies: 24
Tokens: 183 x 24 = 4392
Status: submitted; waiting for completed result
```

Submission command:

```bash
python scripts/alphafold_server/submit_jobs.py \
  references/alphafold_server_jobs/12_ferritin_h_24mer_metasurface_nanocage.fasta
```

Download command after completion:

```bash
python scripts/alphafold_server/poll_and_download.py \
  --only 12_ferritin_h_24mer_metasurface_nanocage \
  --download
```

This calculation is meaningful because it tests the exact biological object we want as the metasurface building block: a closed 24-copy cage. A good result should show a symmetric cage, confident chain folds, coherent inter-chain interfaces, and no severe clashes. If it fails, the next feasible backup is Dps dodecamer, a smaller 12-copy protein cage.

Additional DNA/RNA/protein jobs were then submitted:

```text
11_gcn4_bzip_ap1_dna_metasurface_lock
  2 x GCN4 bZIP protein + AP-1 dsDNA
  Result: complete and downloaded

13_ms2_coat_rna_hairpin_imaging_adapter
  2 x MS2 coat protein + MS2 RNA hairpin
  Result: complete and downloaded

14_dps_dodecamer_dna_nanocage_array_seed
  12 x E. coli Dps + short dsDNA
  Result: submitted; pending
```

The first completed mixed result is encouraging. The GCN4-DNA model has model 0 ranking score 1.09, ipTM 0.77, pTM 0.77, and no clash. Protein-DNA pair ipTM values are 0.73-0.74, and minimum protein-DNA PAE values are around 1.08-1.14 A. The design interpretation is direct: a short AP-1 DNA site can serve as a molecular orientation lock for a bZIP protein handle on DNA origami or DNA-patterned imaging metasurfaces.

The second completed mixed result is stronger. The MS2 coat protein-RNA hairpin model has model 0 ranking score 0.98, ipTM 0.90, pTM 0.90, and no clash. The protein-RNA pair ipTM is 0.86 with minimum PAE about 1.17-1.29 A. This makes MS2 a realistic RNA-addressable adapter for imaging surfaces, especially if the protein is fused to a fluorescent protein, enzyme tag, SpyTag, or nanoparticle-binding peptide.

## Candidate Roadmap

### Candidate 1: Ferritin-Loaded Imaging Metasurface

Use ferritin as a monodisperse 12 nm cage and array it into a surface. The lowest-risk optical experiments are dark-field scattering with gold-loaded cages, fluorescence enhancement with dye-labeled cages near plasmonic particles, and photothermal/optoacoustic readout with absorbing cargo. This is the most practical path because it starts from a known protein assembly and requires only modest sequence edits for immobilization.

Useful next variants:

- N-terminal His-tag for Ni-NTA glass binding.
- N-terminal cysteine for gold or maleimide chemistry.
- N-terminal SpyTag or biotin acceptor peptide for programmable arraying.
- Internal mineralization peptide if cargo nucleation needs stronger control.

### Candidate 2: DNA-Origami Plasmonic Meta-Pixel

DNA origami is better than protein for precise addressability. It can place gold nanorods, silver particles, dyes, and quantum dots with nanometer-scale control. The optical literature already supports DNA-origami nanoantennas, nanorulers, optoacoustic gold-nanorod hybrids, and planar optical metasurface concepts.

The feasible version is not to predict a whole DNA origami with AlphaFold. Instead, use AlphaFold to model protein-DNA locks, such as a bZIP dimer bound to a short AP-1 DNA site. The DNA tile handles large-scale layout; the protein lock controls orientation or biochemical switching.

### Candidate 3: Dps 12-mer Hybrid Cage

Dps is a smaller ferritin-like dodecamer. It may be better for dense arrays, shorter AlphaFold jobs, and DNA-associated assembly. It is a good fallback if the 24-copy ferritin prediction is slow or ambiguous.

### Candidate 4: Designed Protein-Cage Lattices

Protein nanocages can be redesigned into 1D, 2D, and 3D arrays. This is more publishable if successful, but it is less immediate because it needs new protein-interface engineering. It should follow after ferritin array measurements establish the optical workflow.

## Why This Can Work

The biological side is mature enough: ferritin self-assembly, ferritin cargo loading, DNA origami nanoparticle placement, and protein-cage modification are all established. The optical side is also clear: metasurface behavior comes from periodic high-contrast scatterers and near-field coupling, not from the protein shell alone. The useful novelty is to make the optical surface molecularly programmable, biocompatible, and compatible with imaging probes.

The best first paper-shaped result would be a "protein-nanocage imaging metasurface" where AlphaFold-guided ferritin engineering produces a clean cage, the wet-lab assembly creates a monolayer, and optical measurements show a measurable scattering, fluorescence, photothermal, or resonance-shift signal. The deeper second paper is a programmable DNA/protein metasurface where protein-DNA locks switch particle orientation or chiral response.

## References

- EMBL-EBI AlphaFold Server guide: https://www.ebi.ac.uk/training/online/courses/alphafold/alphafold-3-and-alphafold-server/alphafold-server-your-gateway-to-alphafold-3/
- Google DeepMind AlphaFold 3 input documentation: https://github.com/google-deepmind/alphafold3/blob/main/docs/input.md
- Zhang and Orner, "Self-Assembly in the Ferritin Nano-Cage Protein Superfamily", Int. J. Mol. Sci. 2011: https://www.mdpi.com/1422-0067/12/8/5406
- Mainini et al., "Protein-Based Nanoparticles for the Imaging and Treatment of Solid Tumors: The Case of Ferritin Nanocages", Pharmaceutics 2021: https://www.mdpi.com/1999-4923/13/12/2000
- Lv et al., "Redesign of protein nanocages: the way from 0D, 1D, 2D to 3D assembly", Chem. Soc. Rev. 2021: https://pubs.rsc.org/en/content/articlelanding/2021/cs/d0cs01349h
- Torres-Huerta et al., "Biomolecule-Based Optical Metamaterials: Design and Applications", Biosensors 2022: https://www.mdpi.com/2079-6374/12/11/962
- Chen, Ai, and Wong, "Soft optical metamaterials", Nano Convergence 2020: https://nanoconvergencejournal.springeropen.com/articles/10.1186/s40580-020-00226-7
