/**
 * Re-export hub for astronomy data
 * Directs to modular static files: spaceObjects.js, images.js, wavelengths.js
 */

export { spaceObjects, SPACE_OBJECTS } from './spaceObjects.js';
export { images, galleryImages, GALLERY_IMAGES } from './images.js';
export { wavelengths, spectrumBands, SPECTRUM_BANDS, educationalArticles, EDUCATIONAL_ARTICLES } from './wavelengths.js';
export { telescopes, TELESCOPES } from './telescopes.js';

import { spaceObjects } from './spaceObjects.js';
export default spaceObjects;
