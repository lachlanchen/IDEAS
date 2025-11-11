# Optical Metasurfaces and Biofabrication: A Feasibility Analysis
Author: LazyingArt

## Introduction
Optical metasurfaces are a cutting-edge technology in photonics, consisting of ultrathin, nanoscale-patterned surfaces that can manipulate light in extraordinary ways. Traditional fabrication of metasurfaces relies on top-down nanofabrication (e.g. electron-beam lithography), which provides precise control but is expensive, slow, and limited in area coverage. This report explores an alternative vision: using biological and biochemical assembly methods – such as DNA nanotechnology, protein scaffolds, and sequence-programmed synthesis – to build or template metasurfaces. We examine what metasurfaces are and how they control light, then assess whether mature biotech tools (from DNA origami to protein self-assembly) could be repurposed for metasurface fabrication. We consider the maturity and accessibility of these methods in a typical biomedical lab, review theoretical and experimental evidence across disciplines (nanophotonics, synthetic biology, materials science), and highlight examples of research merging biomolecules with metasurface design. The goal is to evaluate the theoretical feasibility and current progress toward bio-fabricated metasurfaces, which could potentially democratize and enrich the metasurface toolkit.

## What Are Optical Metasurfaces?
Metasurfaces are artificially engineered two-dimensional arrays of subwavelength “meta-atoms” (nano-resonators) that collectively control electromagnetic waves at an interface
en.wikipedia.org
. In essence, a metasurface can impose abrupt, space-varying changes to light’s phase, amplitude, or polarization as light passes through or reflects off the surface. Owing to their ultrathin, planar form factor, metasurfaces can replicate the functions of bulky optical components (like lenses, prisms, or polarizers) in a single compact layer
en.wikipedia.org
. By patterning thousands or millions of nanoscale optical scatterers, metasurfaces achieve phenomena such as flat lensing, beam steering, holographic projection, polarization conversion, and more, all with a device only a few hundred nanometers thick. For example, arrays of nanorods or nanopillars made of high-index dielectrics can act as a “metalens” focusing light, while carefully oriented plasmonic antennas can create holograms or vortex beams. Because each meta-atom can be designed to impart a desired phase delay to incident light, metasurfaces allow fine tailoring of wavefronts beyond the constraints of natural materials
en.wikipedia.org
. This powerful light control has enabled ultra-compact lenses, achromatic optics, holographic displays, and exotic effects like generalized refraction and optical cloaking in research settings. In summary, metasurfaces are a nanoscale optical platform to manipulate light with high resolution, traditionally realized through precise nanofabrication.

## Biological Routes to Metasurface Fabrication
Can the assembly tools of biology – DNA, proteins, and other biomolecules – be harnessed to create metasurfaces? The premise is that DNA or protein nanostructures could serve as scaffolds or templates to position the necessary subwavelength optical elements (e.g. metal nanoparticles, dielectric nanostructures) in the right arrangement. Unlike top-down lithography, these bio-inspired methods work bottom-up, using chemical self-assembly to organize components with nanometer precision over potentially large areas. Below we explore several biotechnologies and how they might contribute to metasurface design.

### DNA Nanotechnology (Origami and Tiles) for Metasurfaces
DNA origami – the folding of a long single DNA strand into a designed shape via short staple strands – has matured over the past 15 years into a versatile platform for arranging nanoscale objects. DNA origami can create 2D and 3D shapes with ≈5–10 nm feature resolution, which makes it a candidate for arranging meta-atoms in metasurfaces. Researchers have indeed started to use DNA origami as a metamaterial building-block. A recent example (2024) demonstrated a chiral plasmonic metasurface assembled via DNA origami: a DNA-based “tripod” structure of gold nanorods was designed as a chiral meta-molecule, and then many such tripod meta-molecules were organized into a 2D lattice using a rectangular DNA origami scaffold
pubmed.ncbi.nlm.nih.gov
. Simulations showed strong chiral optical responses from a single monolayer of these DNA-assembled meta-atoms, and the authors even fabricated test devices to prove experimental feasibility
pubmed.ncbi.nlm.nih.gov
. This illustrates how DNA nanostructures can serve both as a template and as a part of the metasurface, enabling bottom-up fabrication of complex optical metasurfaces.

DNA origami offers several roles in metasurface construction. First, a DNA origami sheet can act as a nano-breadboard to precisely arrange inorganic nanostructures. Many studies have used DNA origami to organize metal nanoparticles (gold or silver) into specific geometries (lines, clusters, even helical arrays) with nanometer accuracy
nanoconvergencejournal.springeropen.com
nanoconvergencejournal.springeropen.com
. These DNA-programmed assemblies have been shown to function as plasmonic metamaterials – for instance, gold nanoparticles placed in a nanoscale helix via DNA origami exhibit strong chiroptical activity tunable by design, something very hard to achieve by top-down methods
nanoconvergencejournal.springeropen.com
. By changing the DNA scaffold’s layout or sequence, one can tune the relative placement of meta-atoms, thereby tuning optical response (e.g. handedness of chirality, resonance wavelength) via purely chemical programming
nanoconvergencejournal.springeropen.com
.

Second, DNA origami can organize patterns over large areas by self-assembly. Unlike e-beam lithography which writes serially, DNA origami units can crystallize into centimeter-scale monolayer films in solution. Scientists have proposed using DNA origami lattices to cover vast areas with periodic nano-patterns – an approach that could produce meter-scale metasurface films if the origami crystallization is well-controlled
ashwingopinath.com
ashwingopinath.com
. This idea targets applications like smart windows, coatings or solar panels that need cheap fabrication over large dimensions. Ashwin Gopinath and colleagues, for example, outlined a framework where DNA origami tiles form periodic or aperiodic patterns over a surface (by methods like surface crystallization or programmable binding), and then these DNA patterns are converted into actual optical structures
ashwingopinath.com
ashwingopinath.com
. The conversion (“pattern transfer”) can be done by attaching the desired nanoparticles to the DNA, by chemical deposition (e.g. growing silica or metal on the DNA shape), or by using the DNA origami as an etch mask to sculpt the underlying substrate
ashwingopinath.com
ashwingopinath.com
. Such a two-step process – DNA patterning followed by material deposition/etching – mirrors traditional lithography but replaces the expensive lithographic step with self-assembly. A key challenge here is that DNA itself is tiny (2 nm thick) and not robust under fabrication conditions, so methods to thicken or mineralize the DNA template have been developed (e.g. coating origami with silica, polymer, or metal)
ashwingopinath.com
ashwingopinath.com
. Encouragingly, the biotemplated lithography approach has been demonstrated in initial experiments: for instance, DNA origami shapes have been used as resist masks to fabricate metal nanostructures on silicon with good fidelity
mdpi.com
mdpi.com
. Another study in 2024 showed DNA origami can direct the placement of gold nanospheres into designed metasurface patterns on a chip, by combining DNA self-assembly with electron-beam defined binding sites
biorxiv.org
advanced.onlinelibrary.wiley.com
. All these advances indicate that DNA nanotechnology can achieve the core requirement of metasurfaces: positioning subwavelength optical elements in a designed 2D array.

Beyond origami, other DNA-based techniques also hold promise. DNA tile self-assembly uses short strands to form periodic lattices (like DNA crystals) that could serve as large-area scaffolds. DNA-coated colloids, known as spherical nucleic acids (SNAs), can crystallize into 3D and 2D arrangements of nanoparticles with programmable lattice constants
mdpi.com
. Mirkin and others have shown that DNA-linker systems allow nanoparticles to form not only simple crystals but also arbitrary lattice symmetries by encoding information in DNA sequences
mdpi.com
. In essence, DNA acts as a programmable “mortar” holding nano-“bricks” (particles) in place, analogous to meta-atoms arranged in a crystal. Such DNA-guided colloidal crystals have already achieved optical metamaterial effects; for example, DNA-assembled silver nanoparticle superlattices have exhibited an epsilon-near-zero optical response, a hallmark of metamaterials where the effective dielectric permittivity is near zero
nanoconvergencejournal.springeropen.com
. Likewise, a DNA-assembled network of gold nanoparticle clusters displayed artificial magnetism (e.g. magnetic polaritons and Fano resonances) at visible frequencies
nanoconvergencejournal.springeropen.com
. These results from nanophotonics confirm that bottom-up assembly can produce genuine metamaterial behavior. The theoretical framework for metasurfaces (which often treats arrays of discrete scatterers) remains valid whether those scatterers were placed by a lithography machine or by DNA; thus from a physics perspective, as long as DNA assembly achieves the correct geometry and composition, the optical functionality should follow. In summary, DNA nanotechnology – especially DNA origami – is a mature and accessible method now being actively explored to template metasurfaces. It offers nanoscale precision, massive parallelism, and chemical programmability that complements traditional fabrication.

### Protein Scaffolds and Biomolecular Self-Assembly for Metasurfaces
Nature provides an array of protein-based nanostructures that could be adapted for organizing optical elements. Proteins can self-assemble into cages, filaments, sheets, and crystals with characteristic dimensions in the nanometer to micrometer range, all under mild conditions (aqueous, ambient temperature). This makes them attractive as dynamic, reconfigurable scaffolds for metasurfaces. Unlike inorganic materials, biomolecules are soft and stimulus-responsive; proteins, in particular, can undergo conformational changes or assemble/disassemble in response to environmental cues (pH, ions, light, etc.). A recent review highlighted that proteins offer inherent structural and functional complexity unmatched by synthetic materials, and their dynamic behavior and higher-order assembly could enable new “smart” optical surfaces that change properties on demand
mdpi.com
. For example, by integrating protein-based components into metasurfaces, one might achieve biologically tunable optics – surfaces that alter their color or focusing properties in response to a biochemical signal or a mechanical stress (much like an iris or a skin of a cephalopod). Indeed, biologically derived optical effects like the vivid iridescence of butterfly wings or the tunable reflectors in squid skin are essentially “natural metasurfaces” built from proteins and other biomolecules. The butterfly wing’s structural color arises from chitin and protein nanostructures forming a diffraction grating, and squid skin cells use the protein reflectin to assemble and reconfigure Bragg reflectors. Inspired by this, researchers are investigating reflectin proteins as tunable refractive index materials for adaptive photonic devices
mdpi.com
. These examples underscore that protein assemblies can interact with light (via interference, diffraction, scattering) and can be dynamically controlled, offering a rich design space for metasurface innovation.

Several protein-based scaffolding strategies are theoretically feasible for metasurface fabrication:
2D Protein Crystals and Arrays: Some proteins naturally form two-dimensional lattices. For instance, bacterial S-layer proteins self-assemble into crystalline sheets with unit-cell spacings on the order of tens of nanometers. One could envision functionalizing an S-layer or engineered protein lattice with metallic nanoparticles at each lattice site, creating a periodic metasurface. Synthetic biology advances now allow design of novel protein lattices; a 2021 study demonstrated an engineered 2D protein array with custom nanometer spacings, essentially building a protein crystal to specification
nature.com
. Such protein lattices could act as a template to organize plasmonic particles or high-index dielectric nanospheres into a metasurface pattern. Attaching inorganic nano-objects to proteins is common in biochemistry (e.g. streptavidin binding to biotinylated nanoparticles), so a protein lattice with specific binding sites can serve as a nanoscopic pegboard for meta-atom placement.
Viral Capsid Scaffolds: Virus particles are monodisperse protein assemblies (typically 20–200 nm in size) that can be genetically and chemically modified. For example, the icosahedral Cowpea Mosaic Virus (CPMV) has been used as a nanoplatform in materials science. By engineering cysteine residues at symmetric positions on the virus surface, one can attach metallic nanodots or other functional groups in a well-defined geometric arrangement
opg.optica.org
opg.optica.org
. In principle, viruses themselves could act as meta-atoms (due to their high index contrast in certain frequency regimes), or more likely as organizing hubs to cluster smaller plasmonic particles. A conceptual study describes “metamolecules” composed of CPMV viruses functionalized with gold nanospheres – these bio-assembled clusters could then be deposited into periodic arrays to form a metasurface. The appeal of using viruses is that they self-assemble in high yield (billions of identical copies from simple plant or bacterial cultures) and can present multiple attachment points with exact geometry (due to symmetric protein arrangement). This gives a level of nano-architectural control through genetic sequence: by editing the virus gene, you effectively encode the spatial pattern of binding sites for meta-atoms. While still a nascent idea, virus-templated metamaterials illustrate the synergy of virology and photonics, and early experiments have shown that virus-based assemblies can organize plasmonic nanoparticles in 3D chiral arrangements
nanoconvergencejournal.springeropen.com
.
Protein Fiber and Fibril Templates: Some proteins form one-dimensional or network structures that can guide optical element placement. Amyloid fibrils (formed by denaturing proteins or peptides) are nanoscale filaments that can reach micron lengths. They have been used as biotemplates to line up metal nanoparticles in chains or networks
mdpi.com
. For instance, gold nanorods have been attached along protein fibrils to create linear plasmonic chains. If such fibrils are aligned or arranged in parallel, they could act as a metasurface with grating-like periodicity. Another example is the protein apoferritin (a hollow sphere) which can linearize into fibrils; gold nanostructures conjugated to apoferritin fibers exhibited plasmonic properties and could be used as imaging enhancers
mdpi.com
. This suggests that protein fibers could organize plasmonic particles into patterns supporting, say, surface plasmon polaritons or other collective modes relevant to metasurfaces.
Bulk Protein Films and Patterning: Some laboratories have directly nano-patterned bulk protein materials. Silk fibroin, a protein from silkworm silk, can be processed into a transparent film and then patterned by nanoimprinting or lithography. A 2009 study created a periodic 2D nanograting in a pure silk film using e-beam lithography on a hard mask and achieved diffractive coloration – the silk film scattered visible light into different colors depending on lattice spacing and viewing angle
mdpi.com
. The interesting twist was that the silk retained bioactivity (enzymes embedded in it remained functional), pointing to biosensing applications
mdpi.com
. In a different approach, researchers have synthesized metal nanoparticles in situ within silk by soaking silk in gold salt – the gold spontaneously formed nanoparticles throughout the silk, turning the material into a plasmonic composite with tunable color and localized field enhancement
mdpi.com
. While these are not fully fledged metasurfaces, they demonstrate that protein-based materials can be nanostructured and doped with optically active components to yield controllable optical effects. Silk is just one example; other structural proteins like collagen or elastin could potentially be patterned or assembled for optical functions, benefiting from their mechanical flexibility and biocompatibility.

Overall, protein scaffolds are attractive because they are biologically derived (and thus potentially low-cost at scale), self-organizing, and stimuli-responsive. Proteins can also be produced or modified in standard biochemistry labs through recombinant DNA (genetic sequence dictates the protein’s assembly behavior). This means a biomedical lab with molecular biology expertise could, for example, express a designer protein that assembles into a nanostructure, and use it as a metamaterial template without needing a cleanroom. That said, the field of protein-based metasurfaces is still emerging. There are conceptual designs and initial demonstrations (like the silk lattice and virus assemblies), but fewer examples compared to DNA-based approaches. Challenges include achieving the required nanoscale precision (proteins are larger and more structurally complex than DNA, which can make positioning less predictable) and ensuring optical stability (many proteins are sensitive to environment and might require crosslinking or embedding to function in a device). However, progress in computational protein design is rapidly enabling tailor-made protein assemblies (including 2D arrays and cages), so we can expect more developments where metasurface “blueprints” are encoded in amino-acid sequences.

### Base-by-Base Synthesis and Genetic Programming of Nanostructures
A key advantage of using DNA or protein is that they are sequence-programmable polymers – effectively, one can “code” the nanoscale structure by writing a specific sequence of nucleotides or amino acids. This base-by-base (or residue-by-residue) synthesis is routine in biotech: DNA strands are synthesized base-by-base with precise sequences (using automated synthesizers or PCR), and arbitrary genes can be cloned to produce custom proteins in cells. This means the design of a metasurface could be approached like programming a molecular sequence, which folds or self-assembles to the desired pattern. For DNA origami, one literally designs a sequence for each staple strand to fold the scaffold into the target shape
mdpi.com
. For proteins, one can design peptide sequences that, for example, polymerize into a certain lattice or bind specific nanoparticles. The “maturity” of this approach is evidenced by DNA origami’s success in creating hundreds of distinct shapes for various applications (drug delivery, biosensing, nanophotonics)
mdpi.com
, and by synthetic biology efforts that have created novel protein nanostructures (like cage complexes or enzyme grids).

One can also hybridize these approaches: DNA can be combined with peptides – e.g. DNA-peptide conjugates that assemble into hybrid structures, or DNA frameworks that arrange enzyme proteins. An interesting demonstration involved amino acid sequences that direct nanoparticle growth into chiral shapes: certain chiral peptides, when used as capping agents in gold nanoparticle synthesis, induce the formation of twisted or helical gold nanostructures
nanoconvergencejournal.springeropen.com
. These intrinsically chiral metal shapes can exhibit plasmonic circular dichroism. Such peptide-driven synthesis is akin to a “genetic approach” to fabricate meta-atoms with designed shape from the bottom up, exploiting the molecular recognition and binding properties of sequences. In principle, a library of peptide sequences could be developed to nucleate or bind to various crystallographic facets, offering a form of bio-directed nano-manufacturing of metamaterial components.

In summary, genetic sequence-based fabrication refers to leveraging the informational aspect of biomolecules. DNA base sequences and protein amino-acid sequences carry the instructions for how a structure assembles. This is powerful for metasurfaces because one could distribute the design complexity into many molecules that self-sort into the right architecture, rather than having to sculpt each nano-feature externally. The feasibility of this is supported by the successes in DNA origami positioning meta-atoms with <2 nm precision
nanoconvergencejournal.springeropen.com
 and in the general notion that DNA-mediated assembly is “programmable and high-resolution” for metamaterials
nanoconvergencejournal.springeropen.com
. We are essentially treating biomolecules as a form of nanoscale programmable matter, which is an active interdisciplinary area connecting physics (to predict optical function), chemistry (to realize the structures), and biology (to produce the components).

## Maturity and Accessibility of Biotech Methods in a Lab Setting
One of the motivations for exploring bio-fabrication of metasurfaces is accessibility. Standard metasurface fabrication needs expensive equipment (cleanrooms, lithography systems, deposition tools) often only found in specialized facilities. In contrast, many biotech approaches can be carried out in a common lab environment with relatively low-cost instruments (like PCR machines, centrifuges, incubators) and commercially available materials (DNA oligonucleotides, enzymes, cell cultures). Here we evaluate how mature and accessible the DNA/protein-based techniques are:

DNA Origami and DNA Self-Assembly: DNA origami is a well-established method; protocols and kits are available, and many research labs (even those focused on biology/chemistry) have adopted it. Designing a DNA origami structure has been greatly simplified by software tools, and ordering the DNA strands is straightforward from commercial suppliers. Assembly is done by a simple thermal annealing in a test tube. The cost of a DNA origami (thousands of staples + scaffold strand) is on the order of a few hundred dollars or less, and yields trillions of copies of the designed shape in one go. This puts it within reach of a typical bio or bioengineering lab. Furthermore, DNA is readily available and low-cost as a material: it can be extracted in bulk (fish sperm is a common source of raw DNA) or synthesized enzymatically/in vitro
mdpi.com
. As noted in one review, DNA and other nucleic acids are considered ubiquitous, renewable biomacromolecules, available at reasonable cost and with a rich chemistry for modification
mdpi.com
. This means scaling up DNA-based fabrication (grams of DNA) is not unthinkable – it could even leverage biotechnology production pipelines (bacterial fermentation, etc.). Additionally, the functionalization of DNA with inorganic components (like gold) is routine in nanomedicine (e.g. gold nanoparticle-DNA conjugates are widely used in diagnostics). So a biomedical lab is likely already familiar with handling DNA-nanoparticle conjugates. The learning curve and resource barrier for DNA-based metasurface assembly is relatively low compared to nanofabrication. As evidence of maturity, DNA-directed assembly has been used to create centimeter-scale ordered nanoparticle films and even 3D crystals
nanoconvergencejournal.springeropen.com
nanoconvergencejournal.springeropen.com
, showing that the method can address macroscale quantities. Moreover, hybrid techniques like DNA-assisted lithography (where DNA patterns are converted to silicon or metal structures) mean that a bio-lab can prototype nano-patterns and then collaborate with or send samples to a materials lab for final pattern transfer – thereby avoiding doing lithography in-house.

Protein Scaffolds and Biochemical Assembly: Working with proteins is second nature in biomedical labs. Expressing a custom protein (with desired sequence) in bacteria or yeast is routine, and there are well-established protocols for purifying and handling proteins. Many self-assembling protein systems are well studied: for example, the tobacco mosaic virus rod and the M13 bacteriophage are used in nanotechnology as filamentous scaffolds (the Belcher group at MIT famously used M13 viruses to assemble nanowires for batteries). These virus particles can be amplified easily in host organisms, providing gram-scale quantities of uniform nanoscale building blocks. Similarly, S-layer proteins can be isolated from bacteria in large amounts and will form lattices on surfaces by simply adsorption under the right conditions. The accessibility of protein assemblies does vary – it’s often necessary to fine-tune buffer conditions to get good order – but the know-how is common in biochemistry. Additionally, chemical crosslinkers and surface coupling chemistries for proteins are widely available, which can help integrate protein structures with inorganic materials or substrates. The concept of using protein affinity interactions (like biotin-streptavidin, antigen-antibody pairs) to drive assembly is highly developed in bio-sensing. In fact, one can buy ready-made protein-nanoparticle conjugates (e.g. gold nanoparticles coated with protein A, etc.) and DNA-protein conjugates. This means a bio-lab could mix and match these components to self-assemble metamolecules in solution. A 2022 review pointed out that “biomaterials from proteins and DNA represent a low-cost alternative” for nano-structured materials, with high yields and malleability
mdpi.com
. It also noted that many patterning methods (microcontact printing, inkjet, lithography) have been developed to arrange proteins on surfaces
mdpi.com
 – so even if self-assembly alone is insufficient to achieve a pattern, a bio-lab could use a benchtop micro-printing device to create a microscale template that then guides protein or DNA assembly at the nanoscale.

Safety, Robustness, and Scalability: DNA and proteins are generally non-toxic and safe to handle (especially DNA, which is biologically inert without a host). This is a stark contrast to, say, using e-beam lithography resists and etchants, which involve toxic chemicals. Thus, the barrier to entry for experimenting with bio-assembled nanostructures is lower in terms of safety regulations. When it comes to device robustness, one concern is that biomolecular structures might be too fragile or degrade over time. However, strategies exist to convert the bio-template into a durable inorganic structure (such as silica replication of DNA origami
ashwingopinath.com
 or making solvent-free protein liquids that behave like stable resins
mdpi.com
mdpi.com
). These techniques effectively “mineralize” or polymerize the scaffold, fixing the assembled pattern in a solid matrix that can survive in an optical device. As for scalability, biology is unparalleled – fermentation can produce kilograms of protein, and amplification methods can replicate DNA exponentially. Soft-material fabrication methods (like spin-coating a DNA origami film or dipping a substrate in a viral solution) are easily scalable to large substrates and irregular shapes. One forward-looking possibility is to literally “grow” metasurfaces in a beaker, using self-assembling biomolecules to do the nanostructuring across wafer-scale areas at once. This bottom-up scalability is a primary reason bio-assembly is being pursued: one paper noted that soft self-assembly methods are simpler, low-cost, and easily scaled, unlike the complex, high-temperature processes of traditional nanofabrication
nanoconvergencejournal.springeropen.com
nanoconvergencejournal.springeropen.com
.

In summary, the technologies from biomedical labs are sufficiently mature to attempt metasurface fabrication in theory. DNA origami and assembly techniques are well-proven for organizing nano-objects with programmable geometry, and they are accessible to nonspecialists. Protein-based assembly is catching up, with many natural systems available to exploit and growing expertise in custom design. The marriage of these with photonics is still in early stages, but the groundwork in each component technology is solid. The accessibility means that a lab equipped for molecular biology could start prototyping metamaterial designs without needing a traditional nanofab, which is a tantalizing prospect for accelerating innovation and interdisciplinary research.

## Supporting Evidence from Physics and Materials Science
From a theoretical standpoint, using biomolecular self-assembly for metasurfaces is supported by the fundamental requirements of optical metasurface function. A metasurface needs an arrangement of meta-atoms with the right size, shape, spacing, and material properties to achieve a target optical response. None of these requirements inherently demand a specific fabrication method – they only demand geometric and material control. Physics simulations have shown that even a single layer of appropriately arranged scatterers can produce significant optical effects (e.g. phase gradients for lensing, or strong chiral dichroism)
pubmed.ncbi.nlm.nih.gov
. Thus, if DNA or protein methods can arrange scatterers in that required pattern, the metasurface should work. The challenge is mostly one of precision and defect tolerance. Interestingly, metasurfaces for many applications (like large-area lenses or coatings) can tolerate some randomness or defects; they don’t always need the perfection of a semiconductor chip. As Gopinath noted, applications like solar panels or windows could use metasurfaces covering vast areas with some defect tolerance, where current top-down methods are impractical
ashwingopinath.com
ashwingopinath.com
. Biological assembly thrives in precisely this regime – making huge numbers of units cheaply, with statistical but not perfect order. For example, a DNA origami lattice might have some missing or misaligned origami, but over centimeters, the average pattern is maintained. This is analogous to a polycrystalline film vs. a single crystal; many optical surfaces (antireflection coatings, diffusers) are polycrystalline or random yet functional. Recent theoretical work has even explored random metasurfaces that still perform a desired optical function on average, which could align well with assembly approaches that naturally introduce slight randomness
nature.com
.

Nanophotonic theory also suggests some advantages of bio-assembled metastructures: they can be inherently 3D or reconfigurable, which is hard for planar lithography. DNA and protein scaffolds can create complex 3D arrangements of particles (e.g. stacked layers, finite clusters with height) that a planar process would struggle with. This opens possibilities for volumetric metasurfaces or thick metamaterials (e.g. for broadband absorption or nonlinear responses) assembled in solution. Additionally, because biomolecules respond to stimuli, one can incorporate active control. For instance, one DNA-based chiral metamaterial was designed to switch its optical chirality when specific DNA strands were added or removed, effectively reconfiguring the structure in real time
nanoconvergencejournal.springeropen.com
nanoconvergencejournal.springeropen.com
. The ability to alter metasurface properties post-fabrication by biochemical triggers (like adding a strand to change DNA shape, or using a ligand to induce protein assembly) is a novel paradigm not easily achieved in traditional metasurfaces (which typically rely on electro-optical or thermally active materials). This intersects with the concept of programmable or intelligent metasurfaces, where the “program” could be written in DNA sequences rather than in transistor circuits.

From a materials science perspective, one concern is whether bio-assembled metasurfaces can achieve the material optical properties needed (high refractive index contrast, low loss metals, etc.). The bio-scaffolds themselves (DNA, proteins) have refractive indices around 1.3–1.5 and moderate optical transparency, which is not sufficient alone to produce strong optical phase shifts in visible light (compared to, say, TiO<sub>2</sub> with index >2). However, the bio scaffold is mainly a means to position high-performing optical materials: for example, arranging metal nanoparticles (which provide plasmonic response), or positioning high-index colloidal particles like silicon or titanium oxide. As long as those functional components are integrated, the performance can match conventional metasurfaces. And indeed, demonstrations like the DNA-assembled plasmonic structures showed optical activity orders of magnitude larger than natural chiral media
pubmed.ncbi.nlm.nih.gov
, confirming that with proper arrangement, the optical effects are significant. The field of colloidal synthesis offers many ready-made meta-atom materials (colloidal quantum dots, high-index nanospheres, plasmonic nanorods, etc.) that can be attached to biomolecules. So the materials palette is rich. Furthermore, coating techniques (like electroless plating, ALD, or mineralization) can convert a biomolecular pattern into a truly inorganic structure – for instance, the BLIN (biotemplated lithography of inorganic nanostructures) method grew metal on DNA to create continuous metallic nanoshapes
mdpi.com
, and DNA-assisted deposition created silicon dioxide masks for pattern transfer
mdpi.com
. Such hybrid approaches mean the final metasurface could be entirely inorganic (hence stable and high-index) even though it was initially assembled by biomolecules.

Finally, it’s worth noting that using bio-assembly aligns with the trend of green and sustainable nanotechnology. These processes often occur in water at room temperature, use non-toxic reactants, and generate little waste, unlike semiconductor fabrication which can be environmentally harsh. DNA, for example, can be sourced from renewable biomass and is biodegradable
mdpi.com
. As metasurfaces start to be considered for consumer products, having an eco-friendly fabrication route could be beneficial.

## Examples and Emerging Research
To illustrate the current state of this interdisciplinary approach, we highlight a few pioneering examples and research groups working at the intersection of metasurfaces and biomolecular assembly:

Chiral Meta-Molecules via DNA Origami (Karlsruhe & Dortmund, 2024): Gieseler et al. (Optics Express, 2024)
pubmed.ncbi.nlm.nih.gov
 created a chiral metasurface using DNA origami. Their team (including Christof Niemeyer, a chemist, and Carsten Rockstuhl, a physicist) designed a DNA-origami tripod structure that held three gold nanorods in a chiral arrangement. By crystallizing these origami on a surface, they formed a 2D array of chiral plasmonic meta-atoms. This work provided both simulation and experimental fabrication of the DNA-assembled metasurface, demonstrating circular dichroism from a single monolayer of meta-molecules
pubmed.ncbi.nlm.nih.gov
pubmed.ncbi.nlm.nih.gov
. It stands as a strong proof-of-concept that bottom-up DNA assembly can yield functional optical metasurfaces.

Large-Area DNA-Assembled Metasurfaces (MIT/Caltech): Ashwin Gopinath and Paul Rothemund’s groups have been developing techniques to use DNA origami in device fabrication. In Science 2018, they showed precise positioning of origami on lithographic substrates (to within 20 nm) which is important for integrating DNA assembly with electronics
ashwingopinath.com
. On Gopinath’s website, he outlines the vision of manufacturing large-area metasurfaces with DNA origami: first assemble DNA origami into periodic patterns (via surface crystallization or directed deposition), then transfer the pattern into inorganic structures by attaching nanoparticles or via selective material growth
ashwingopinath.com
ashwingopinath.com
. Although a fully functional optical device using this method is still forthcoming, they have demonstrated key steps, like using DNA origami as a mask to etch nanometer-scale features into silicon
mdpi.com
 and organizing metallic nanoparticles with DNA on surfaces. This group exemplifies the fusion of DNA nanotech expertise with metasurface design goals.

Plasmonic Superlattices and Meta-Fluids (Oleg Gang at Columbia/Brookhaven): Oleg Gang’s research involves DNA-programmable nanoparticle assembly. They have made 3D lattices of gold nanoparticles with DNA linkers that exhibit metamaterial behaviors (e.g., an isotropic magnetic response from a DNA-linked nanoparticle network, which they term a “meta-fluid”)
mdpi.com
. One of their achievements is a micron-scale honeycomb lattice of nanoparticles assembled by DNA origami as a template
nanoconvergencejournal.springeropen.com
, which can act as a 2D metamaterial platform. The precision (<2 nm) and scalability (micron-sized domains) of these assemblies show that DNA can bridge the gap from molecular self-assembly to optical-length-scale devices. Their work also includes reconfigurable structures – for instance, switching a lattice from one configuration to another by DNA strand displacement, effectively creating a responsive metamaterial.

Protein-Based Metamaterials and Metafluids (Torres-Huerta et al., 2022): A team in Mexico (Torres-Huerta and colleagues) published a comprehensive review on biomolecule-based optical metamaterials
pubmed.ncbi.nlm.nih.gov
. They discuss various protein systems (silk, reflectin, collagen, ferritin) and their potential in optics. One intriguing example is a solvent-free protein liquid made of ferritin protein that exhibits liquid-crystalline behavior and might serve as a reconfigurable optical medium
mdpi.com
. They also describe an experiment where silver nanoparticles were linked into clusters by protein interactions to form a bulk “metafluid” with a negative refractive index in the visible range
mdpi.com
. This is essentially a bulk metamaterial assembled through biomolecular affinity (biotin-streptavidin links connecting nanoparticles). It hints that not only surfaces but also volumetric metamaterials can be achieved with biomolecules as glue. The review underscores growing interest in all-organic or bio-hybrid metamaterials that could interface better with biological systems (for biosensing, bio-integrated optics)
mdpi.com
mdpi.com
. Groups working on silk and reflectin (e.g. Fiorenzo Omenetto for silk photonics, Alon Gorodetsky for reflectin) are part of this trend, bringing materials science and bioengineering together.

Dynamic DNA Metasurface Sensors (Tiffany Liu et al., 2020): A concept realized by Chen, Wong, and others
nanoconvergencejournal.springeropen.com
nanoconvergencejournal.springeropen.com
 involves using DNA to make plasmonic structures that can detect biomolecules via changes in chiral optical response. They built a DNA-origami-based plasmonic helix that changed its conformation when specific DNA strands (analogs of microRNA biomarkers) bound to it, thus switching the metasurface’s optical signal. This is a clever merger of DNA computing/sensing with meta-optics: the device’s state (and output color) is programmed by a DNA sequence. It showcases how synthetic biology logic (DNA strand displacement) might be used to actuate metasurfaces, something traditional fabrication cannot easily emulate.

These examples are just the start. The convergence of metasurface technology with biotechnology is accelerating. We see funding and interest from agencies in “programmable matter” and “biomimetic metamaterials”. The theoretical groundwork from physics assures that if we can achieve the geometry, the exotic optical effects will come. On the other hand, the practical knowledge from bio-nanotechnology provides a rich toolbox to try assembling those geometries. The feasibility is supported by initial successes – small-scale metasurface patches have been assembled with DNA, and optical activity measured; proteins have been patterned into diffractive optics; hybrid methods have replicated DNA patterns into durable inorganic nanostructures. Each year, the size and complexity of bio-assembled structures increase, suggesting that fully functional optical metasurfaces assembled in a petri dish could become a reality in the foreseeable future.

## Conclusion
In this deep analysis, we have found that designing optical metasurfaces using DNA, protein self-assembly, and related biomolecular techniques is not only theoretically feasible but already under active investigation. Metasurfaces, as ultrathin light-controlling interfaces, impose demanding nanoscale design requirements – requirements that DNA nanotechnology in particular is well-suited to meet, given its proven ability to organize matter with nanoscale precision and massive parallelism. DNA origami and DNA-based assembly have emerged as leading candidates for bottom-up metasurface fabrication, with demonstrations of 2D nanoparticle arrays and even functional chiral metasurfaces
pubmed.ncbi.nlm.nih.gov
nanoconvergencejournal.springeropen.com
. Protein scaffolds offer complementary advantages, especially in achieving dynamic or stimuli-responsive metasurfaces, and the building blocks for this (viruses, silk, S-layers, designed proteins) are increasingly accessible to researchers. The biotechnologies required – from base-by-base DNA synthesis to gene-driven protein production – are mature and routinely used in biomedical labs, meaning that the barrier to entry is low. A lab equipped for molecular biology can, in principle, prototype nanoscale optical components without a cleanroom, using test tubes and sequencing as their “fabrication line.”

Interdisciplinary evidence reinforces the promise of this approach: nanophotonics experiments show that bio-assembled structures can achieve high-performance optical behavior (e.g. large optical rotation, ENZ response)
nanoconvergencejournal.springeropen.com
nanoconvergencejournal.springeropen.com
, and materials science advances have converted fragile biomolecular templates into stable inorganic patterns
mdpi.com
. The synergy between synthetic biology and metasurface engineering could unlock novel devices – for example, metasurfaces that reconfigure in response to biochemical signals or that self-heal or self-replicate using biological processes. While challenges remain (ensuring structural fidelity over large areas, integrating soft molecules with hard optics, scaling up without defects), the progress to date is encouraging. We now have a toolbox of bio-inspired fabrication methods to tackle these challenges: DNA scaffolds for precision, protein assemblies for functionality, and biochemical processing for pattern transfer.

In conclusion, the theoretical feasibility of bio-fabricated optical metasurfaces is strongly supported by current knowledge and initial experiments. This approach stands at the intersection of physics, biology, and nanotechnology, offering a new paradigm for nano-optics. It leverages the “bottom-up” mastery of biology – the ability to build complex structures from molecular codes – to complement the “top-down” mastery of nanophotonics. As research continues, we can expect increasingly complex and practical metasurfaces to emerge from test tubes and petri dishes, potentially making advanced photonic devices as easy to “grow” as a culture of cells. The marriage of metasurfaces with DNA and protein technology could thus herald an era of biologically assembled metamaterials, expanding the reach of flat optics into realms of scalability, adaptivity, and bio-integration that were previously unattainable.

## References
Gieseler, N. et al. (2024). "Chiral plasmonic metasurface assembled by DNA origami." Opt. Express, 32(9), 16040-16051
pubmed.ncbi.nlm.nih.gov
pubmed.ncbi.nlm.nih.gov
.
Gopinath, A. (2017). "Large area metasurfaces via DNA origami patterning" – concept post on Ashwin Gopinath’s website
ashwingopinath.com
ashwingopinath.com
.
Chen, Y., Ai, B., & Wong, Z. J. (2020). "Soft optical metamaterials" Nano Convergence, 7, 18 – discusses DNA-assembled plasmonic metamaterials and reconfigurability
nanoconvergencejournal.springeropen.com
nanoconvergencejournal.springeropen.com
.
Torres-Huerta, A. L. et al. (2022). "Biomolecule-Based Optical Metamaterials: Design and Applications." Biosensors, 12(11), 962 – a review covering protein metasurfaces and bio-templating
mdpi.com
mdpi.com
.
Wikipedia – "Electromagnetic metasurface." (accessed 2025) – definition and overview of metasurface principles
en.wikipedia.org
en.wikipedia.org
.
Kuzyk, A. et al. (2012). "DNA-based self-assembly of chiral plasmonic nanostructures with tailored optical response." Nature, 483(7389), 311-314 – (demonstrating DNA-origami helix of gold nanorods)
nanoconvergencejournal.springeropen.com
.
Ashwin Gopinath et al. (2018). "Absolute and arbitrary orientation of single-molecule shapes through DNA origami fabrication." Science, 359(6373), eaao5986 – (placement of DNA origami on substrates for device integration)
ashwingopinath.com
mdpi.com
.
Zhang, S. et al. (2021). "Metasurfaces for biomedical applications: Imaging and sensing from a nanophotonics perspective." Nanophotonics, 10(1), 259–293 – (cited in MDPI review)
mdpi.com
.
Liu, N. et al. (2016). "Three-dimensional photonic metamaterials at the small-scale limit." Nature Materials, 15(8), 894–902 – (DNA assembly mentioned for 3D metamaterials)
nanoconvergencejournal.springeropen.com
nanoconvergencejournal.springeropen.com
.
Amsden, J. J. et al. (2009). "Rapid nanoimprinting of silk fibroin films for biophotonic applications." Advanced Materials, 22(15), 1746–1749 – (nanopatterned silk yielding structural color)
mdpi.com
.
Zhao, Y. et al. (2012). "Active reflectin-based electro-optical devices with tunable transparency and reflectivity." Proc. Natl. Acad. Sci. USA, 109(27), 10798–10803 – (cephalopod protein reflectin in tunable optics)
mdpi.com
.
Sarikaya, M. et al. (2003). "Molecular biomimetics: Nanotechnology through biology." Nature Materials, 2(9), 577–585 – (on peptide-mediated material synthesis, chiral NP growth)
nanoconvergencejournal.springeropen.com
.
(Additional references embedded in text as per numbered citations.)
