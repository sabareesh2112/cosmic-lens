/**
 * Static Space Objects Catalog
 * Pure frontend static astronomical data (JWST + Hubble ONLY)
 * Star Burst warm theme styling (#EA9162, #080706, etc.)
 */

export const spaceObjects = [
  {
    id: 'pillars-of-creation',
    name: 'Pillars of Creation',
    shortName: 'Pillars',
    category: 'nebula',
    type: 'nebula',
    typeDisplay: 'Star-Forming Emission Nebula & Dark Dust Columns',
    distance: '6,500 light-years',
    size: '~4 to 5 light-years in height',
    diameter: '~4 to 5 light-years in height',
    temperature: '10 K (-263°C) in cold dust cores to 10,000 K in ionized gas borders',
    constellation: 'Serpens Cauda',
    coordinates: {
      ra: '18h 18m 48s',
      dec: "-13° 49' 00\""
    },
    apparentMagnitude: '+6.0',
    description: 'The iconic Pillars of Creation are colossal elephant-trunk columns of cool interstellar molecular hydrogen gas and dust inside the Eagle Nebula (Messier 16). The pillars are shaped, compressed, and slowly eroded by intense ultraviolet radiation and high-velocity stellar winds from a nearby cluster of massive, hot young stars.',
    scientificSignificance: 'One of the most valuable cosmic laboratories for studying star formation. The tips of the finger-like projections contain Evaporating Gaseous Globules (EGGs) harboring infant protostars.',
    observedBy: ['hubble', 'jwst'],
    wavelength: 'Visible & Infrared',
    model: '/models/pillars.glb',
    scientificSketch: '/sketches/pillars_schematic.svg',
    sketchType: 'nebula_pillars',
    interestingFacts: [
      'The largest pillar is roughly four light-years tall from base to tip—roughly the distance between our Sun and Proxima Centauri.',
      'In visible light (Hubble), the dust columns appear opaque and pitch-black, but Webb’s infrared vision penetrates right through them.',
      'Supersonic protostellar jets shoot out from baby stars at several hundred kilometers per second, creating fiery crimson bow shocks.'
    ],
    observations: [
      {
        telescopeId: 'hubble',
        telescopeName: 'Hubble Space Telescope',
        wavelength: 'Visible',
        filterOrInstrument: 'WFC3 ([O III] 502nm, H-alpha 656nm, [S II] 673nm)',
        spectralRange: '0.4 – 0.7 μm (Visible Light)',
        image: '/images/nebulae/pillars_hubble_vis.jpg',
        credit: 'NASA, ESA, and the Hubble Heritage Team (STScI/AURA)',
        explanation: 'In visible light, the pillars appear as monolithic, dark, opaque silhouettes of cold dense gas and cosmic dust standing tall against a glowing backdrop of ionized interstellar hydrogen. The dense dust completely blocks our view of the star formation occurring deep inside the trunks.',
        visualFeatures: [
          'Sharp, defined physical edges eroded by ultraviolet photoevaporation',
          'Deep brown-black opaque dust ridges that absorb optical photons',
          'Glowing ionized oxygen gas outlining the evaporating edges',
          'Fingertip protostellar globules where new stars are forming'
        ],
        astrophysicalMeaning: 'Visible photons are scattered and absorbed by sub-micron carbon and silicate dust grains, making the internal star nurseries invisible in optical wavelengths.'
      },
      {
        telescopeId: 'jwst',
        telescopeName: 'James Webb Space Telescope',
        wavelength: 'Infrared',
        filterOrInstrument: 'NIRCam (Near-Infrared Camera, F090W, F187N, F200W, F335M, F444W, F470N)',
        spectralRange: '0.9 – 4.7 μm (Near-Infrared)',
        image: '/images/nebulae/pillars_jwst_ir.jpg',
        credit: 'NASA, ESA, CSA, STScI; Joseph DePasquale, Anton M. Koekemoer, Alyssa Pagan',
        explanation: 'Webb’s near-infrared vision penetrates straight through the murky dust columns! The once-dark pillars become semi-translucent gossamer veils, revealing thousands of brilliant newborn stars glowing with characteristic eight-pointed diffraction spikes and fiery energetic supersonic protostellar jets.',
        visualFeatures: [
          'Semi-transparent, ethereal dusty columns allowing background light to shine through',
          'Thousands of previously hidden young stars glowing with bright diffraction spikes',
          'Fiery amber knots at the tips representing bow shocks from supersonic protostellar jets',
          'Glowing polycyclic aromatic hydrocarbon (PAH) dust molecules'
        ],
        astrophysicalMeaning: 'Infrared photons have wavelengths longer than the dust grain diameters, allowing them to pass through interstellar dust with minimal scattering, unmasking protostars.'
      }
    ],
    comparisons: [
      {
        telescopeA: 'hubble',
        telescopeB: 'jwst',
        keyDifferences: [
          'Dust opacity: Hubble sees dark, totally opaque solid columns; Webb sees translucent, ethereal ghost-like veils.',
          'Star density: Webb reveals thousands of embedded stars that are completely hidden in Hubble optical frames.',
          'Protostellar jets: Webb detects supersonic molecular hydrogen jets (amber tips) invisible to Hubble.',
          'Background universe: Webb’s infrared sensitivity reveals distant background galaxies directly through the pillars.'
        ]
      }
    ]
  },
  {
    id: 'andromeda-galaxy',
    name: 'Andromeda Galaxy (M31)',
    shortName: 'Andromeda',
    category: 'galaxy',
    type: 'galaxy',
    typeDisplay: 'Major Barred Spiral Galaxy (Local Group)',
    distance: '2.537 million light-years',
    size: '220,000 light-years in diameter',
    diameter: '220,000 light-years in diameter',
    temperature: '10 K in outer cold dust rings to millions of K at core',
    constellation: 'Andromeda',
    coordinates: {
      ra: '00h 42m 44.3s',
      dec: "+41° 16' 09\""
    },
    apparentMagnitude: '+3.44',
    description: 'The Andromeda Galaxy is the closest major spiral galaxy to our own Milky Way and the largest member of our Local Group, containing roughly one trillion stars. It is currently hurtling toward our Milky Way at 110 kilometers per second and will merge with us in roughly 4.5 billion years.',
    scientificSignificance: 'A cornerstone for extragalactic distance scales (via Cepheid variables) and dark matter velocity rotation curves.',
    observedBy: ['hubble', 'jwst'],
    wavelength: 'Visible & Infrared',
    model: '/models/galaxy.glb',
    scientificSketch: '/sketches/andromeda_schematic.svg',
    sketchType: 'spiral_galaxy',
    interestingFacts: [
      'Andromeda contains roughly one trillion stars—more than double the estimated stars in the Milky Way.',
      'It is approaching our Milky Way at approximately 110 kilometers per second.',
      'Hubble resolved over 100 million individual stars in Andromeda, while Webb uncovers warm dust forming future solar systems.'
    ],
    observations: [
      {
        telescopeId: 'hubble',
        telescopeName: 'Hubble Space Telescope',
        wavelength: 'Visible',
        filterOrInstrument: 'ACS / WFC3 (PHAT Mosaic Survey)',
        spectralRange: '0.3 – 0.8 μm (Optical & UV)',
        image: '/images/galaxies/andromeda_hubble_vis.jpg',
        credit: 'NASA, ESA, J. Dalcanton, B. F. Williams, L. C. Johnson (U. Washington), PHAT team',
        explanation: 'Hubble resolves individual stars across Andromeda’s spiral disc—over 100 million distinct stars cataloged! Visible bands reveal brilliant star clusters in the outer spiral arms and dark silhouette lanes of dust wrapping around the central galactic bulge.',
        visualFeatures: [
          'Resolves over 100 million individual star points across a 61,000-light-year strip',
          'Vibrant clusters of massive, young, short-lived stars',
          'Dark dust filaments weaving through the disc, shadowing the stars behind them',
          'Dense central core populated by older stellar generations'
        ],
        astrophysicalMeaning: 'Optical light traces the stellar mass distribution of mature Sun-like stars and hot young star-forming associations across the disk.'
      },
      {
        telescopeId: 'jwst',
        telescopeName: 'James Webb Space Telescope',
        wavelength: 'Infrared',
        filterOrInstrument: 'NIRCam / MIRI Composite',
        spectralRange: '1.5 – 15.0 μm (Near & Mid-Infrared)',
        image: '/images/galaxies/andromeda_jwst_ir.jpg',
        credit: 'NASA, ESA, CSA, STScI; Processing: Cosmic Lens Observational Archive',
        explanation: 'In infrared, the dark dust lanes of Hubble turn into blazing, glowing highways of interstellar polycyclic aromatic hydrocarbons and cold carbon dust! Webb highlights exactly where new star birth is ignited along the spiral arms.',
        visualFeatures: [
          'The dark silhouette dust lanes of optical light are converted into glowing, radiant infrared filaments',
          'Bulge stars become semi-transparent, allowing scientists to probe stellar motions near the supermassive black hole',
          'Unprecedented resolution of protoplanetary disks and stellar wind bubbles'
        ],
        astrophysicalMeaning: 'Mid-infrared light directly traces the cold molecular interstellar medium (dust and complex carbon chemistry) that will collapse into future solar systems.'
      }
    ],
    comparisons: [
      {
        telescopeA: 'hubble',
        telescopeB: 'jwst',
        keyDifferences: [
          'Dust opacity: Hubble dark dust absorbs starlight; Webb turns those exact lanes into glowing thermal emission.',
          'Starlight vs gas: Hubble maps mature stars; Webb maps the raw materials from which future stars form.',
          'Resolution: Hubble resolves the optical surface; Webb cuts through to the central core.'
        ]
      }
    ]
  },
  {
    id: 'whirlpool-galaxy',
    name: 'Whirlpool Galaxy (M51)',
    shortName: 'Whirlpool M51',
    category: 'galaxy',
    type: 'galaxy',
    typeDisplay: 'Grand-Design Spiral Galaxy interacting with NGC 5195',
    distance: '31 million light-years',
    size: '76,000 light-years across',
    diameter: '76,000 light-years across',
    temperature: '15 K in outer spiral dust to millions of K at core',
    constellation: 'Canes Venatici',
    coordinates: {
      ra: '13h 29m 52.7s',
      dec: "+47° 11' 43\""
    },
    apparentMagnitude: '+8.4',
    description: 'The Whirlpool Galaxy (Messier 51 / NGC 5194) is the textbook archetype of a grand-design spiral galaxy. Its graceful, majestic spiral arms are gravitational density waves triggered by close tidal interaction with its dwarf companion galaxy, NGC 5195.',
    scientificSignificance: 'The premier cosmic testbed for galactic density wave theory and gravitational interaction mechanics.',
    observedBy: ['hubble', 'jwst'],
    wavelength: 'Visible & Infrared',
    model: '/models/galaxy.glb',
    scientificSketch: '/sketches/m51_schematic.svg',
    sketchType: 'spiral_galaxy',
    interestingFacts: [
      'The companion dwarf galaxy NGC 5195 is passing behind M51, dragging tidal star streams in its wake.',
      'The majestic spiral pattern is a gravitational compression wave—like a highway traffic jam.',
      'JWST MIRI revealed thousands of star-forming cavity bubbles carved out by young stellar winds.'
    ],
    observations: [
      {
        telescopeId: 'hubble',
        telescopeName: 'Hubble Space Telescope',
        wavelength: 'Visible',
        filterOrInstrument: 'ACS (Advanced Camera for Surveys, B, V, I & H-alpha)',
        spectralRange: '0.4 – 0.65 μm',
        image: '/images/galaxies/m51_hubble_vis.jpg',
        credit: 'NASA, ESA, S. Beckwith (STScI), and the Hubble Heritage Team',
        explanation: 'Hubble delivers the iconic textbook visual of M51: curved lanes of dark absorbing dust winding alongside brilliant clusters of hot newborn stars and pink emission nebulae excited by ionizing ultraviolet photons.',
        visualFeatures: [
          'High-contrast curving dark dust lanes hugging the inner edges of the spiral arms',
          'Vibrant emission knots representing hydrogen-alpha ionization regions',
          'Tidal bridge connecting M51 to the companion galaxy NGC 5195'
        ],
        astrophysicalMeaning: 'Density waves compress the interstellar medium as gas enters the arm, triggering rapid cloud collapse and burst of star formation.'
      },
      {
        telescopeId: 'jwst',
        telescopeName: 'James Webb Space Telescope',
        wavelength: 'Infrared',
        filterOrInstrument: 'MIRI / NIRCam FEAST Collaboration',
        spectralRange: '2.0 – 21.0 μm (Infrared)',
        image: '/images/galaxies/m51_jwst_ir.jpg',
        credit: 'ESA/Webb, NASA & CSA, A. Adamo (Stockholm University) and FEAST team',
        explanation: 'Webb strips away the familiar starlight to expose the skeletal, intricate web of cosmic dust and gas! Glowing filaments of warm dust trace empty cavities carved by newborn stars and energetic supernovae.',
        visualFeatures: [
          'Complex porous web of intricate filaments and empty cavernous bubbles',
          'Glowing polycyclic aromatic hydrocarbons trace dark lanes in brilliant infrared light',
          'Bright starburst clusters embedded deep within previously opaque dust cores'
        ],
        astrophysicalMeaning: 'MIRI isolates infrared emission from warm dust grains, mapping feedback mechanisms where stellar winds shape the future star-forming efficiency of the galaxy.'
      }
    ],
    comparisons: [
      {
        telescopeA: 'hubble',
        telescopeB: 'jwst',
        keyDifferences: [
          'Starlight vs Dust Medium: Hubble shows where the stars are shining; Webb shows the skeleton of dust that created them.',
          'Bubble structures: Webb reveals massive hollow cavernous bubbles carved by stellar winds that are invisible to Hubble.',
          'Companion galaxy: NGC 5195 looks like a smooth ball in Hubble, but shows intricate dust filaments in Webb.'
        ]
      }
    ]
  },
  {
    id: 'carina-nebula',
    name: 'Carina Nebula (NGC 3372)',
    shortName: 'Carina Nebula',
    category: 'nebula',
    type: 'nebula',
    typeDisplay: 'Colossal Giant Diffuse Starburst Nebula & Cosmic Cliffs',
    distance: '7,500 light-years',
    size: '~300 light-years across',
    diameter: '~300 light-years across',
    temperature: '10,000 K in H-II region to millions of K around massive stars',
    constellation: 'Carina',
    coordinates: {
      ra: '10h 45m 08.5s',
      dec: "-59° 52' 04\""
    },
    apparentMagnitude: '+1.0',
    description: 'The Carina Nebula is one of the largest and most volatile star-forming complexes in our galaxy—four times larger and significantly brighter than the Orion Nebula. It harbors hypermassive stars that violently sculpt their birth clouds.',
    scientificSignificance: 'The ultimate laboratory for studying how massive stars violently disrupt their birth clouds.',
    observedBy: ['hubble', 'jwst'],
    wavelength: 'Visible & Infrared',
    model: '/models/nebula.glb',
    scientificSketch: '/sketches/carina_schematic.svg',
    sketchType: 'nebula_pillars',
    interestingFacts: [
      'The "Cosmic Cliffs" imaged by JWST are towering peaks of dust and gas roughly 7 light-years tall.',
      'Eta Carinae underwent the "Great Eruption" in 1843, becoming the second-brightest star in the night sky.',
      'Ultraviolet radiation from newborn massive stars is slowly carving away the molecular cloud like a hot blowtorch.'
    ],
    observations: [
      {
        telescopeId: 'hubble',
        telescopeName: 'Hubble Space Telescope',
        wavelength: 'Visible',
        filterOrInstrument: 'ACS (H-alpha, [O III], [S II])',
        spectralRange: '0.4 – 0.7 μm',
        image: '/images/nebulae/carina_hubble_vis.jpg',
        credit: 'NASA, ESA, N. Smith (Univ. of California, Berkeley), and the Hubble Heritage Team',
        explanation: 'Hubble’s visible mosaic shows dramatic towering pillars of dense dust resisting the hurricane of stellar radiation from young massive stars. Dark silhouette dust knots look like jagged mountains against a sea of glowing gas.',
        visualFeatures: [
          'Opaque dark dust spires resembling mountains against an illuminated background',
          'Intense glowing ionization fronts',
          'Shock fronts from young stellar outflows'
        ],
        astrophysicalMeaning: 'Photoevaporation: high-energy UV photons boil away low-density outer gas, leaving behind dense erosion-resistant trunks.'
      },
      {
        telescopeId: 'jwst',
        telescopeName: 'James Webb Space Telescope',
        wavelength: 'Infrared',
        filterOrInstrument: 'NIRCam / MIRI (Cosmic Cliffs First Images)',
        spectralRange: '0.9 – 18.0 μm',
        image: '/images/nebulae/carina_jwst_ir.jpg',
        credit: 'NASA, ESA, CSA, and STScI',
        explanation: 'Webb’s iconic Cosmic Cliffs show the edge of a gigantic gaseous cavity carved by intense UV radiation. Infrared reveals hundreds of newly formed stars and protostellar jets never before seen.',
        visualFeatures: [
          'Golden jagged ridge illuminated by intense UV radiation from massive stars above',
          'Hot ionized steam and cosmic dust boiling off the cliff edge into space',
          'Hundreds of embedded young stars glowing with bright diffraction spikes'
        ],
        astrophysicalMeaning: 'Near-infrared waves pierce the dust veil, enabling astronomers to measure the initial mass function (IMF) of star formation down to brown dwarf limits.'
      }
    ],
    comparisons: [
      {
        telescopeA: 'hubble',
        telescopeB: 'jwst',
        keyDifferences: [
          'Penetration: Hubble sees the opaque boundary wall; Webb sees through the cliff into the interior stellar incubator.',
          'Infrared Steam: Webb detects ionized molecular hydrogen gas actively boiling off the top of the cliff.',
          'Point source resolution: Webb uncovers faint infant stars completely obscured by foreground dust in Hubble images.'
        ]
      }
    ]
  },
  {
    id: 'jupiter',
    name: 'Jupiter & Auroras',
    shortName: 'Jupiter',
    category: 'planet',
    type: 'planet',
    typeDisplay: 'Gas Giant Planet & Planetary Magnetosphere',
    distance: '365 to 601 million km (4.2 AU)',
    size: '139,820 km diameter (11 Earths)',
    diameter: '139,820 km diameter (11 Earths)',
    temperature: '165 K (-108°C) in cloud tops to 24,000 K in dense core',
    constellation: 'Varies along Ecliptic',
    coordinates: {
      ra: 'Dynamic Orbital Path',
      dec: 'Dynamic Orbital Path'
    },
    apparentMagnitude: '-2.94',
    description: 'Jupiter is the colossus of the solar system, with more than twice the mass of all other planets combined. Beneath its turbulent swirling ammonia-cloud belts lies the largest planetary magnetic field in our solar system, driving permanent ultra-powerful polar auroras.',
    scientificSignificance: 'Understanding giant gas planet atmospheric dynamics and magnetospheric particle acceleration.',
    observedBy: ['hubble', 'jwst'],
    wavelength: 'Visible & Infrared',
    model: '/models/jupiter.glb',
    scientificSketch: '/sketches/jupiter_schematic.svg',
    sketchType: 'planet',
    interestingFacts: [
      'Jupiter’s Great Red Spot is an anticyclonic storm larger than the entire planet Earth.',
      'Jupiter’s magnetic field is 20,000 times stronger than Earth’s.',
      'Webb captured Jupiter’s faint microscopic dust rings and glowing polar auroras in near-infrared.'
    ],
    observations: [
      {
        telescopeId: 'hubble',
        telescopeName: 'Hubble Space Telescope',
        wavelength: 'Visible',
        filterOrInstrument: 'WFC3 / UVIS (Outer Planet Atmospheres Legacy / OPAL)',
        spectralRange: '0.2 – 0.9 μm',
        image: '/images/planets/jupiter_hubble_vis.jpg',
        credit: 'NASA, ESA, A. Simon (GSFC), M. H. Wong (UC Berkeley)',
        explanation: 'Hubble tracks visible atmospheric weather: parallel alternating belts and zones driven by jet streams over 500 km/h, swirling anticyclonic white ovals, and the iconic Great Red Spot.',
        visualFeatures: [
          'High-contrast cloud bands of ammonia ice crystals and sulfur compounds',
          'Turbulent wake eddies trailing behind the Great Red Spot',
          'Shadow transits of Galilean moons'
        ],
        astrophysicalMeaning: 'Optical reflection measures solar photons scattered off the highest cloud layers of ammonia ice and photochemical tholins.'
      },
      {
        telescopeId: 'jwst',
        telescopeName: 'James Webb Space Telescope',
        wavelength: 'Infrared',
        filterOrInstrument: 'NIRCam (F150W2, F212N, F360M filters)',
        spectralRange: '1.5 – 3.6 μm',
        image: '/images/planets/jupiter_jwst_ir.jpg',
        credit: 'NASA, ESA, CSA, Jupiter ERS Team; Ricardo Hueso & Imke de Pater',
        explanation: 'Webb’s infrared camera reveals Jupiter in stunning new light: brilliant polar auroras shining in glowing light, faint high-altitude haze layers, and Jupiter’s faint dust rings visible with pinpoint sharpness.',
        visualFeatures: [
          'Blazing polar auroras glowing at both the north and south poles',
          'The Great Red Spot appears glowing white because it reflects large amounts of sunlight at high altitudes',
          'Jupiter’s ultra-faint microscopic dust rings visible alongside tiny inner moons'
        ],
        astrophysicalMeaning: 'Methane absorbs infrared sunlight in the lower atmosphere, making deep clouds dark while high-altitude hazes, auroral ions, and rings glow brightly.'
      }
    ],
    comparisons: [
      {
        telescopeA: 'hubble',
        telescopeB: 'jwst',
        keyDifferences: [
          'Color inversion: The Great Red Spot is reddish-brown in Hubble, but glows radiant white in Webb infrared.',
          'Auroral visibility: Jupiter’s auroras require UV filters on Hubble, but glow vividly in near-infrared on Webb.',
          'Rings and Moons: Webb clearly captures Jupiter’s faint dust ring system in the same exposure as the planetary disk.'
        ]
      }
    ]
  },
  {
    id: 'wasp-96b',
    name: 'WASP-96 b (Exoplanet)',
    shortName: 'WASP-96 b',
    category: 'exoplanet',
    type: 'exoplanet',
    typeDisplay: 'Hot Gas Giant Exoplanet (Atmospheric Transmission Spectrum)',
    distance: '1,150 light-years',
    size: '1.2 Jupiter radii (0.48 Jupiter masses)',
    diameter: '1.2 Jupiter radii (0.48 Jupiter masses)',
    temperature: '1,300 K (1,027°C / 1,880°F)',
    constellation: 'Phoenix',
    coordinates: {
      ra: '00h 04m 11.1s',
      dec: "-47° 21' 38\""
    },
    apparentMagnitude: '+12.2',
    description: 'WASP-96 b is a "hot gas giant" exoplanet orbiting extremely close to a Sun-like star every 3.4 days. Because of its bloated atmosphere, it is an ideal target for transmission spectroscopy: measuring the tiny fraction of starlight filtered through the planet’s atmosphere during transit.',
    scientificSignificance: 'The definitive proof of atmospheric water vapor, clouds, and hazes on an exoplanet using space transmission spectroscopy.',
    observedBy: ['hubble', 'jwst'],
    wavelength: 'Infrared & Visible',
    model: '/models/exoplanet.glb',
    scientificSketch: '/sketches/wasp96b_schematic.svg',
    sketchType: 'exoplanet',
    interestingFacts: [
      'WASP-96 b orbits its host star at just one-ninth the distance between Mercury and the Sun.',
      'Webb detected the unmistakable chemical fingerprint of water vapor (H2O) in its atmosphere.',
      'A year on WASP-96 b lasts just 3.4 Earth days.'
    ],
    observations: [
      {
        telescopeId: 'jwst',
        telescopeName: 'James Webb Space Telescope',
        wavelength: 'Infrared',
        filterOrInstrument: 'NIRISS (Single-Object Slitless Spectroscopy / SOSS)',
        spectralRange: '0.6 – 2.8 μm (Transmission Spectrum)',
        image: '/images/planets/wasp96b_spectrum_jwst.jpg',
        credit: 'NASA, ESA, CSA, and STScI',
        explanation: 'Webb captured the most detailed near-infrared transmission spectrum of an exoplanet atmosphere ever recorded! The spectrum shows clear repeating peaks and valleys corresponding to water vapor absorption, along with evidence of hazes and clouds.',
        visualFeatures: [
          'Transmission spectrum curve displaying clear molecular absorption peaks at 1.1, 1.4, and 1.9 microns',
          'Slightly muted peak heights indicating the presence of high-altitude clouds and hazes',
          'Precision of less than 1,000 parts per million across hundreds of individual wavelength channels'
        ],
        astrophysicalMeaning: 'Water molecules in the planet’s atmosphere absorb specific infrared wavelengths of starlight, making the planet appear slightly larger and blocking more light at those exact bands.'
      }
    ],
    comparisons: []
  }
];

export const SPACE_OBJECTS = spaceObjects;
export default spaceObjects;
