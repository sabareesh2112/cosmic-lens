/**
 * Static Telescopes Catalog
 * Pure frontend static astronomical data (JWST + Hubble ONLY)
 * Styled in the Star Burst warm stellar theme (#EA9162 / Dark Space)
 */

export const telescopes = [
  {
    id: 'jwst',
    name: 'James Webb Space Telescope',
    shortName: 'JWST',
    fullName: 'James Webb Space Telescope (JWST)',
    agency: 'NASA / ESA / CSA',
    launchYear: 2021,
    launchDate: 'December 25, 2021',
    status: 'Active',
    missionDuration: 'Primary mission 10–20+ years',
    location: 'Sun-Earth Lagrange Point 2 (L2)',
    orbitType: 'Halo Orbit around L2',
    orbitAltitude: '~1,500,000 km (930,000 miles) from Earth',
    mirrorSize: '6.5 m (21.3 ft) Aperture',
    primaryWavelength: 'Infrared (Near & Mid-Infrared)',
    wavelength: 'Infrared',
    wavelengthBands: ['Infrared'],
    wavelengthRange: '0.6 μm to 28.5 μm',
    primaryGoal: 'Observe the earliest galaxies, study stellar nurseries through cosmic dust, and characterize exoplanet atmospheres.',
    mainPurpose: 'Peer through cosmic dust to observe the earliest stars, newborn galaxies, and exoplanet atmospheres.',
    description: 'The James Webb Space Telescope is the premier space observatory of the 21st century. Equipped with an innovative 18-segment gold-coated beryllium primary mirror and a tennis-court-sized 5-layer Kapton sunshield, Webb penetrates through dense obscuring cosmic dust clouds to see the very first stars and galaxies formed after the Big Bang.',
    image: '/images/telescopes/jwst.jpg',
    model: '/models/jwst.glb',
    modelFile: '/models/jwst.glb',
    interestingFacts: [
      'Its 6.5-meter mirror is coated with a microscopic layer of pure gold just 100 nanometers thick (about a golf ball’s worth of gold total).',
      'The 5-layer Kapton sunshield creates a 300°C temperature difference between the sunward and science sides.',
      'Webb orbits at Lagrange Point 2, 1.5 million kilometers from Earth—beyond the reach of human astronauts to service.'
    ],
    instruments: [
      {
        name: 'NIRCam',
        fullName: 'Near-Infrared Camera',
        wavelength: '0.6 – 5.0 μm',
        purpose: 'Deep field imaging of infant galaxies, star clusters, and stellar nurseries with high angular resolution.'
      },
      {
        name: 'MIRI',
        fullName: 'Mid-Infrared Instrument',
        wavelength: '4.9 – 28.8 μm',
        purpose: 'Cooled to 7 Kelvin via helium cryocooler; reveals cool cosmic dust, polycyclic aromatic hydrocarbons, and planetary disks.'
      },
      {
        name: 'NIRSpec',
        fullName: 'Near-Infrared Spectrograph',
        wavelength: '0.6 – 5.3 μm',
        purpose: 'Microshutter array capable of simultaneously measuring spectra of up to 100 astronomical targets.'
      },
      {
        name: 'NIRISS / FGS',
        fullName: 'Near-Infrared Imager & Slitless Spectrograph',
        wavelength: '0.8 – 5.0 μm',
        purpose: 'Fine guidance sensing and high-contrast exoplanet transit spectroscopy.'
      }
    ],
    parts: [
      {
        id: 'primary-mirror',
        name: 'Primary Mirror (18 Segments)',
        description: 'Hexagonal honeycomb array made of ultralight beryllium, vapor-deposited with 100 nm of pure gold for maximum infrared reflectivity and capped with protective silicon dioxide.',
        technicalSpecs: '6.5 m aperture diameter; 25.4 m² collecting area; 18 individual hex segments with nano-actuator positioners.',
        materials: 'Beryllium substrate, vapor-deposited gold, SiO2 protective coating'
      },
      {
        id: 'secondary-mirror',
        name: 'Secondary Mirror & Support Tripod',
        description: 'Circular convex mirror mounted at the apex of three deployable graphite-composite tubular tripod struts, directing focused infrared light back through the center of the primary mirror into the aft optics subsystem.',
        technicalSpecs: '0.74 m diameter; focal ratio f/20; active 6-degree-of-freedom positioning mechanism.',
        materials: 'Gold-coated beryllium on carbon-fiber composite struts'
      },
      {
        id: 'sunshield',
        name: '5-Layer Deployable Kapton Sunshield',
        description: 'A five-layer tennis-court-sized kite shield that attenuates over 200 kW of solar thermal radiation to a mere fraction of a watt, maintaining the telescope at cryogenic temperatures below 40 Kelvin (-233°C).',
        technicalSpecs: '21.2 m × 14.2 m (tennis court footprint); 5 vacuum-spaced membranes with aluminum and doped-silicon coatings.',
        materials: 'Kapton E polyimide film (25 to 50 μm thick)'
      },
      {
        id: 'isim',
        name: 'Integrated Science Instrument Module (ISIM)',
        description: 'The cryogenically cooled structural chassis housing NIRCam, NIRSpec, MIRI, and FGS/NIRISS, shielded behind the primary mirror assembly.',
        technicalSpecs: 'Operating temperature < 40 K (-233°C); composite carbon-fiber truss frame with near-zero thermal expansion.',
        materials: 'Graphite-epoxy composite'
      },
      {
        id: 'spacecraft-bus',
        name: 'Spacecraft Bus & Solar Array',
        description: 'The warm-side core providing electrical power, attitude determination and control, propellant storage, high-gain Ka-band communications with the Deep Space Network, and star trackers.',
        technicalSpecs: '2 kW gallium-arsenide solar array; 3-axis stabilized reaction wheels and monopropellant hydrazine thrusters.',
        materials: 'Aerospace aluminum honeycomb with composite panels'
      }
    ],
    keyDiscoveries: [
      'Discovery of JADES-GS-z14-0, the most distant known galaxy observed just 290 million years after the Big Bang.',
      'First unambiguous atmospheric detection of carbon dioxide (CO2) and water vapor in exoplanet atmospheres.',
      'Revealed intricate dusty skeletons of star-forming spiral arms in nearby galaxies through MIRI mid-infrared mapping.'
    ],
    scientificContribution: 'Revolutionized observational cosmology by pushing the observable frontier back to Cosmic Dawn and peeling back dust veils that blinded visible-light telescopes.'
  },
  {
    id: 'hubble',
    name: 'Hubble Space Telescope',
    shortName: 'Hubble',
    fullName: 'Hubble Space Telescope (HST)',
    agency: 'NASA / ESA',
    launchYear: 1990,
    launchDate: 'April 24, 1990',
    status: 'Active',
    missionDuration: '34+ years operational',
    location: 'Low Earth Orbit (LEO)',
    orbitType: 'Circular Low Earth Orbit',
    orbitAltitude: '~540 km (335 miles) above Earth surface; 28.5° inclination',
    mirrorSize: '2.4 m (7.9 ft) Monolithic Mirror',
    primaryWavelength: 'Visible Light, Ultraviolet & Near-Infrared',
    wavelength: 'Visible',
    wavelengthBands: ['UV', 'Visible', 'Infrared'],
    wavelengthRange: '115 nm to 2.5 μm',
    primaryGoal: 'Measure the expansion rate of the universe, resolve stellar populations, and image deep cosmic fields free of atmospheric distortion.',
    mainPurpose: 'Provide ultra-sharp optical and UV astronomy above atmospheric distortion.',
    description: 'Launched aboard Space Shuttle Discovery in 1990, the Hubble Space Telescope has fundamentally altered humanity’s understanding of the cosmos. By rising above Earth’s turbulent atmosphere, Hubble delivered unprecedented sharp optical views of planetary systems, colliding galaxies, and the distant edges of observable space.',
    image: '/images/telescopes/hubble.jpg',
    model: '/models/hubble.glb',
    modelFile: '/models/hubble.glb',
    interestingFacts: [
      'Hubble has completed over 1.5 million observations and traveled more than 4 billion miles in low Earth orbit.',
      'It was serviced by astronaut spacewalks five times via the Space Shuttle fleet.',
      'Its deep field observations revealed thousands of galaxies in a tiny patch of sky the size of a grain of sand held at arm’s length.'
    ],
    instruments: [
      {
        name: 'WFC3',
        fullName: 'Wide Field Camera 3',
        wavelength: '200 – 1,700 nm',
        purpose: 'Pan-chromatic wide-field imaging across UV, visible, and near-infrared bands.'
      },
      {
        name: 'COS',
        fullName: 'Cosmic Origins Spectrograph',
        wavelength: '115 – 320 nm',
        purpose: 'High-sensitivity ultraviolet spectroscopy tracking cosmic web structure and intergalactic gas.'
      },
      {
        name: 'ACS',
        fullName: 'Advanced Camera for Surveys',
        wavelength: '350 – 1,100 nm',
        purpose: 'High-resolution optical mapping of galaxy clusters, gravitational lenses, and cosmological deep fields.'
      },
      {
        name: 'STIS',
        fullName: 'Space Telescope Imaging Spectrograph',
        wavelength: '115 – 1,000 nm',
        purpose: 'Spatially resolved spectroscopy confirming supermassive black holes in galactic nuclei.'
      }
    ],
    parts: [
      {
        id: 'primary-mirror',
        name: '2.4m Ritchey-Chrétien Primary Mirror',
        description: 'Single-piece ultralow-expansion glass mirror polished to an accuracy of 1/65th of a wavelength of red light, aluminized with magnesium fluoride coating.',
        technicalSpecs: '2.4 m diameter, 828 kg mass, focal length 57.6 m (effective f/24 system).',
        materials: 'Corning ULE (Ultra-Low Expansion) glass, aluminum reflective layer, MgF2 overcoat'
      },
      {
        id: 'aperture-door',
        name: 'Aperture Door & Baffle Tube',
        description: 'Motorized protective sun-shade door that shields the sensitive optics from direct sunlight, earthlight, and micrometeoroids.',
        technicalSpecs: '3.0 m diameter barrel with internal serrated light-absorbing knife-edge baffles.',
        materials: 'Multi-layer graphite-epoxy composites with thermal multilayer insulation'
      },
      {
        id: 'solar-panels',
        name: 'Gallium-Arsenide Rigid Solar Arrays',
        description: 'Two deployable solar wings installed during Servicing Mission 3B that power all avionics, reaction wheels, and science payloads.',
        technicalSpecs: 'Generates ~5.5 kW of peak electrical power in full solar illumination.',
        materials: 'Gallium arsenide photovoltaic cells on rigid honeycomb panels'
      },
      {
        id: 'equipment-bay',
        name: 'Aft Shroud & Radial Science Bays',
        description: 'The modular rear compartment that allowed Space Shuttle astronauts to slide old science instruments out and install modern upgraded instruments.',
        technicalSpecs: 'Houses 4 axial instrument bays and 1 radial instrument bay with orbital replacement units.',
        materials: 'Aerospace structural titanium and aluminum framework'
      }
    ],
    keyDiscoveries: [
      'Accurate calibration of the Hubble Constant (H0) via Cepheid variable star distance ladders.',
      'Discovery of the accelerating expansion of the universe driven by Dark Energy (1998).',
      'Hubble Deep Field (HDF) and Ultra Deep Field (UDF), revealing over 10,000 infant galaxies in a seemingly empty patch of sky.'
    ],
    scientificContribution: 'Proved the existence of supermassive black holes at the centers of nearly all large galaxies and determined the precise 13.8-billion-year age of the universe.'
  }
];

export const TELESCOPES = telescopes;
export default telescopes;
