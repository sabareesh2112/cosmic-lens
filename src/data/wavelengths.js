/**
 * Wavelength and Electromagnetic Spectrum Data
 * Pure frontend static scientific data (Warm Stellar Palette: #EA9162, #F2B08E, #FFD2BE, White)
 * NO BLUE, NO PURPLE.
 */

export const spectrumBands = [
  {
    id: 'gamma',
    name: 'Gamma Ray',
    shortName: 'γ-Ray',
    range: '< 0.01 nm',
    wavelengthUnit: 'picometers (< 10 pm)',
    frequencyRange: '> 30 EHz (> 3 × 10¹⁹ Hz)',
    photonEnergy: '> 100 keV – GeV / TeV',
    temperatureKelvin: '> 10,000,000 K',
    colorHex: '#FF9E6C',
    textColor: '#FFD2BE',
    phenomena: ['Supernova core collapse', 'Pulsar wind nebulae', 'Gamma-ray bursts (GRBs)', 'Active galactic nuclei relativistic jets'],
    observatories: ['High-Energy Space Observatories'],
    atmosphericPenetration: '0% (Completely blocked by atmospheric nitrogen and oxygen)',
    importanceToAstronomy: 'Reveals the most violent energetic explosions in the universe and matter-antimatter annihilation.'
  },
  {
    id: 'xray',
    name: 'X-Ray',
    shortName: 'X-Ray',
    range: '0.01 – 10 nm',
    wavelengthUnit: '0.1 – 100 Ångströms',
    frequencyRange: '30 PHz – 30 EHz',
    photonEnergy: '100 eV – 100 keV',
    temperatureKelvin: '1,000,000 – 100,000,000 K',
    colorHex: '#F2B08E',
    textColor: '#FFFFFF',
    phenomena: ['Black hole accretion discs', 'Neutron star surfaces', 'Colliding galaxy cluster halos', 'Supernova shock fronts'],
    observatories: ['High-Energy Space Observatories (X-Ray Astrophysics)'],
    atmosphericPenetration: '0% (Completely absorbed by upper atmosphere)',
    importanceToAstronomy: 'Pinpoints extreme gravity, magnetic flares, and gas heated to millions of degrees where optical light cannot form.'
  },
  {
    id: 'uv',
    name: 'Ultraviolet',
    shortName: 'UV',
    range: '10 – 400 nm',
    wavelengthUnit: 'nanometers (10 – 400 nm)',
    frequencyRange: '750 THz – 30 PHz',
    photonEnergy: '3.1 – 124 eV',
    temperatureKelvin: '10,000 – 1,000,000 K',
    colorHex: '#FFB84D',
    textColor: '#FFFFFF',
    phenomena: ['Very hot young O and B stars', 'Interstellar gas ionization fronts', 'Planetary auroras', 'Quasar accretion discs'],
    observatories: ['Hubble Space Telescope'],
    atmosphericPenetration: '< 5% (Ozone layer absorbs nearly all UV-C and UV-B)',
    importanceToAstronomy: 'Maps the birthplaces of massive stars and tracks ionizing radiation across cosmic web filaments.'
  },
  {
    id: 'visible',
    name: 'Visible Light',
    shortName: 'Optical',
    range: '400 – 700 nm',
    wavelengthUnit: 'nanometers (400 – 700 nm)',
    frequencyRange: '430 – 750 THz',
    photonEnergy: '1.8 – 3.1 eV',
    temperatureKelvin: '4,000 – 10,000 K',
    colorHex: '#FFD2BE',
    textColor: '#FFFFFF',
    phenomena: ['Normal stellar photospheres (Sun-like stars)', 'Galactic star clusters', 'Planetary atmospheres and rings', 'Emission nebulae H-alpha & [O III]'],
    observatories: ['Hubble Space Telescope'],
    atmosphericPenetration: '95% (Visible Optical Atmospheric Window)',
    importanceToAstronomy: 'The primary optical reference window where human eyes and silicon CCDs measure true color and morphological structures.'
  },
  {
    id: 'infrared',
    name: 'Infrared',
    shortName: 'IR',
    range: '700 nm – 1 mm',
    wavelengthUnit: 'micrometers (0.7 – 1,000 μm)',
    frequencyRange: '300 GHz – 430 THz',
    photonEnergy: '1.24 meV – 1.7 eV',
    temperatureKelvin: '10 – 4,000 K',
    colorHex: '#EA9162',
    textColor: '#FFFFFF',
    phenomena: ['High-redshift Cosmic Dawn galaxies', 'Stellar nurseries inside dust columns', 'Exoplanet atmospheres & water vapor', 'Protoplanetary debris disks', 'Cool brown dwarfs'],
    observatories: ['James Webb Space Telescope (JWST)'],
    atmosphericPenetration: '< 20% (Severe water vapor and CO2 absorption in atmosphere)',
    importanceToAstronomy: 'Pierces dust clouds that block visible light, and captures light from the earliest galaxies stretched by cosmic expansion (redshift).'
  },
  {
    id: 'microwave',
    name: 'Microwave',
    shortName: 'MW',
    range: '1 mm – 1 m',
    wavelengthUnit: 'millimeters to centimeters',
    frequencyRange: '300 MHz – 300 GHz',
    photonEnergy: '1.24 μeV – 1.24 meV',
    temperatureKelvin: '2.7 – 50 K',
    colorHex: '#D47A4A',
    textColor: '#FFD2BE',
    phenomena: ['Cosmic Microwave Background (CMB)', 'Cold interstellar molecular clouds (CO, HCN)', 'Protoplanetary dust grains'],
    observatories: ['Cosmic Microwave Background Observatories'],
    atmosphericPenetration: 'Partial (Specific submillimeter dry high-altitude windows)',
    importanceToAstronomy: 'Preserves the baby picture of the universe: the afterglow of the Big Bang emitted 380,000 years after creation.'
  },
  {
    id: 'radio',
    name: 'Radio Waves',
    shortName: 'Radio',
    range: '> 1 m',
    wavelengthUnit: 'meters to kilometers',
    frequencyRange: '< 300 MHz',
    photonEnergy: '< 1.24 μeV',
    temperatureKelvin: '< 10 K',
    colorHex: '#A85A32',
    textColor: '#F2B08E',
    phenomena: ['21 cm Neutral Hydrogen line (H I)', 'Pulsar radio beacons', 'Supermassive black hole relativistic radio lobes', 'Magnetic fields in galaxies'],
    observatories: ['Radio Observatories & Arrays'],
    atmosphericPenetration: '100% (Broad Radio Atmospheric Window)',
    importanceToAstronomy: 'Maps the neutral hydrogen gas that makes up the bulk of baryonic matter in galaxies and traces synchrotron radiation.'
  }
];

export const wavelengths = spectrumBands;
export const SPECTRUM_BANDS = spectrumBands;

export const educationalArticles = [
  {
    id: 'multi-wavelength-astronomy',
    title: 'Why Do Telescopes See Different Things?',
    subtitle: 'The Multi-Wavelength Revolution in Modern Astrophysics',
    readTime: '6 min read',
    category: 'Physics & Optics',
    summary: 'Cosmic objects emit light across the entire electromagnetic spectrum. Observing only in visible light is like listening to a symphony orchestra with only the flute section audible.',
    keyPoints: [
      'Different astrophysical processes emit photons at drastically different energy levels.',
      'Cold interstellar dust absorbs high-frequency visible light but is transparent to low-frequency infrared light.',
      'Young hot stars emit intensely in ultraviolet, while older populations shine in optical and near-infrared.',
      'Combining multiple telescopes produces multi-spectral composite views that reveal the complete physical narrative.'
    ],
    content: `For centuries, human astronomy was restricted to the narrow slice of light visible to the human eye—wavelengths between 400 and 700 nanometers. But visible light accounts for less than one-billionth of the total electromagnetic spectrum.

When we observe a star-forming nebula like the **Pillars of Creation**:
1. **In Visible Light (Hubble)**: Sub-micron interstellar dust grains scatter optical photons, creating opaque, dark silhouettes. We see the outer boundaries of the gas, but cannot see what is happening inside.
2. **In Near-Infrared (JWST)**: Infrared waves are longer than the dust particles. Photons pass through with minimal scattering, unveiling thousands of embryonic stars actively growing within the pillars.

By combining Hubble visible light and Webb infrared data into dual-perspective observations, astronomers map the complete lifecycle: the outer gas boundaries, the emerging stars, and stellar radiation shaping the galaxy.`
  },
  {
    id: 'why-space-telescopes',
    title: 'Why Put Telescopes in Space?',
    subtitle: 'Overcoming Atmospheric Blurring, Absorption, and Thermal Noise',
    readTime: '5 min read',
    category: 'Engineering & Spacecraft',
    summary: 'Building and launching telescopes into deep space costs billions of dollars, but Earth’s atmosphere creates insurmountable physical obstacles for precision science.',
    keyPoints: [
      'Atmospheric Turbulence: Moving pockets of warm and cold air constantly refract incoming light rays, causing ground stars to twinkle and blurring angular resolution.',
      'Atmospheric Absorption: Water vapor, ozone, carbon dioxide, and nitrogen completely absorb high-energy radiation and most infrared wavelengths.',
      'Thermal Background Glow: Earth and its atmosphere glow in infrared wavelengths, blinding ground telescopes trying to see faint cosmic infrared signals.',
      'Continuous Deep Field Observations: Spacecraft in orbits like Sun-Earth L2 have uninterrupted 24/7 dark sky sightlines free from day-night cycles and weather.'
    ],
    content: `Earth’s atmosphere is a protective blanket for biological life, shielding us from harmful ionizing radiation like solar X-rays and cosmic rays. But to an astronomer, the atmosphere is a turbulent window.

### 1. The Atmospheric Windows
Only two main "windows" reach sea level with high transparency:
- The **Optical Window** (visible light and a sliver of near-UV/near-IR).
- The **Radio Window** (millimeter to multi-meter radio waves).

To study cosmic dawn and distant baby stars, space telescopes are indispensable.

### 2. The Cryogenic Challenge of Infrared
Every warm object glows in infrared light. A telescope sitting on Earth at room temperature (+20°C / 68°F) glows blindingly bright in the infrared, drowning out faint photons from distant galaxies.

By placing the James Webb Space Telescope 1.5 million kilometers away at **Lagrange Point 2 (L2)** and shielding it with a 5-layer tennis-court-sized sunshield, Webb cools passively to -233°C (40 Kelvin). This allows it to detect the whisper of infrared light that has been traveling across space for over 13.5 billion years.`
  },
  {
    id: 'redshift-and-cosmic-dawn',
    title: 'Cosmic Redshift: Why Webb Needed Infrared',
    subtitle: 'How the Expansion of the Universe Stretches Ancient Light',
    readTime: '7 min read',
    category: 'Cosmology',
    summary: 'Why is the premier telescope to observe the earliest stars an infrared telescope, rather than an optical telescope like Hubble? The answer lies in cosmic redshift.',
    keyPoints: [
      'As light travels across expanding space, its wavelength is stretched toward the red and infrared portion of the spectrum.',
      'The farther away an object is, the longer its light has been traveling, and the greater its cosmological redshift (z).',
      'Visible and ultraviolet light emitted by the first stars 13.5 billion years ago has been stretched into infrared wavelengths by the time it reaches Earth.',
      'Webb was specifically engineered with gold mirrors and infrared detectors to capture this redshifted Cosmic Dawn light.'
    ],
    content: `When astronomers look out into deep space, they are looking back in time. Light travels at 300,000 kilometers per second; observing a galaxy 10 billion light-years away means seeing it as it appeared 10 billion years ago.

The first stars and galaxies ignited roughly 200 to 400 million years after the Big Bang, during an era known as **Cosmic Dawn**. These primordial stars were massive and intensely hot, emitting torrents of high-energy ultraviolet and visible light.

However, during the 13.5 billion years that light spent traveling toward us, the fabric of spacetime itself expanded. As space stretched, the light traveling through it was stretched as well:
- A 121 nm ultraviolet photon emitted by neutral hydrogen (Lyman-alpha) in a z = 14 galaxy is stretched by a factor of 15!
- That 121 nm UV photon arrives at Webb as a **1,815 nm near-infrared photon**.

Hubble’s optical detectors could never detect this light because it has shifted out of the visible band entirely. Webb was explicitly built with gold-plated mirrors—gold being the most reflective element for infrared radiation—and cryogenic infrared cameras to capture this ancient, redshifted light.`
  }
];

export const EDUCATIONAL_ARTICLES = educationalArticles;
export default spectrumBands;
