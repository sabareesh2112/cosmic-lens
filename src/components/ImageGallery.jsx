import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/objects.js';
import { AstronomicalCanvas } from './AstronomicalCanvas.jsx';
import { ImageDetailModal } from './ImageDetailModal.jsx';
import { CosmicButton } from './CosmicButton.jsx';
import { Search, Eye } from 'lucide-react';

export const ImageGallery = ({
  onNavigateToComparison,
  onNavigateToTelescope,
  onNavigateToSketch
}) => {
  const [selectedTelescope, setSelectedTelescope] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedWavelength, setSelectedWavelength] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalImage, setActiveModalImage] = useState(null);

  const filteredImages = GALLERY_IMAGES.filter((img) => {
    if (selectedTelescope !== 'all' && img.telescopeId !== selectedTelescope) {
      return false;
    }
    if (selectedType !== 'all' && img.objectType !== selectedType) {
      return false;
    }
    if (selectedWavelength !== 'all' && img.wavelength !== selectedWavelength) {
      return false;
    }
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const match =
        img.title.toLowerCase().includes(q) ||
        img.objectName.toLowerCase().includes(q) ||
        img.description.toLowerCase().includes(q) ||
        img.telescopeName.toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[rgba(234,145,98,0.20)] pb-6 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#EA9162] uppercase tracking-wider">
            <span>ASTRONOMICAL REPOSITORY</span>
            <span className="text-[#9F8D84]">·</span>
            <span>MULTI-SPECTRAL HIGH-RESOLUTION DATA</span>
          </div>
          <h2 className="text-3xl font-heading font-bold text-[#FFFFFF] mt-1">
            Astronomical Image Gallery
          </h2>
          <p className="text-sm text-[#C7B8B0] mt-1 max-w-2xl">
            High-resolution deep space imagery captured by James Webb and Hubble across the electromagnetic spectrum.
          </p>
        </div>

        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#9F8D84]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search images, nebulae, galaxies..."
            className="w-full bg-[#120D0A] border border-[rgba(234,145,98,0.25)] text-xs font-mono text-[#FFFFFF] placeholder-[#9F8D84] rounded-lg pl-9 pr-3 py-2 focus:outline-none focus:border-[#EA9162] transition-colors shadow-[0_0_10px_rgba(234,145,98,0.08)]"
          />
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-[#0D0A08] border border-[rgba(234,145,98,0.22)] rounded-xl p-4 flex flex-wrap items-center gap-4 text-xs font-mono shadow-sm">
        <div className="flex items-center gap-2">
          <span className="text-[#C7B8B0]">Telescope:</span>
          <select
            value={selectedTelescope}
            onChange={(e) => setSelectedTelescope(e.target.value)}
            className="bg-[#18100C] border border-[rgba(234,145,98,0.30)] text-[#EA9162] rounded px-2.5 py-1.5 focus:outline-none focus:border-[#EA9162]"
          >
            <option value="all">All Telescopes</option>
            <option value="jwst">James Webb (JWST)</option>
            <option value="hubble">Hubble (HST)</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[#C7B8B0]">Object Type:</span>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="bg-[#18100C] border border-[rgba(234,145,98,0.30)] text-[#F2B08E] rounded px-2.5 py-1.5 focus:outline-none focus:border-[#EA9162]"
          >
            <option value="all">All Types</option>
            <option value="galaxy">Galaxies</option>
            <option value="nebula">Nebulae</option>
            <option value="planet">Planets</option>
            <option value="exoplanet">Exoplanets</option>
            <option value="star">Stars</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[#C7B8B0]">Wavelength:</span>
          <select
            value={selectedWavelength}
            onChange={(e) => setSelectedWavelength(e.target.value)}
            className="bg-[#18100C] border border-[rgba(234,145,98,0.30)] text-[#FFFFFF] rounded px-2.5 py-1.5 focus:outline-none focus:border-[#EA9162]"
          >
            <option value="all">All Wavelengths</option>
            <option value="Infrared">Infrared</option>
            <option value="Visible">Visible Light</option>
            <option value="UV">Ultraviolet</option>
          </select>
        </div>

        {(selectedTelescope !== 'all' || selectedType !== 'all' || selectedWavelength !== 'all' || searchQuery !== '') && (
          <button
            onClick={() => {
              setSelectedTelescope('all');
              setSelectedType('all');
              setSelectedWavelength('all');
              setSearchQuery('');
            }}
            className="text-xs text-[#EA9162] hover:text-[#FFD2BE] underline ml-auto cursor-pointer"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Grid */}
      {filteredImages.length === 0 ? (
        <div className="text-center py-16 bg-[#120D0A] border border-[rgba(234,145,98,0.20)] rounded-xl">
          <p className="text-sm text-[#C7B8B0] font-mono">No matching astronomical images found.</p>
          <button
            onClick={() => {
              setSelectedTelescope('all');
              setSelectedType('all');
              setSelectedWavelength('all');
              setSearchQuery('');
            }}
            className="mt-3 px-4 py-1.5 text-xs font-mono text-[#080706] bg-[#EA9162] hover:bg-[#F2B08E] rounded-lg cursor-pointer font-semibold shadow-sm"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              className="bg-[#120D0A] border border-[rgba(234,145,98,0.20)] hover:border-[#EA9162] rounded-xl overflow-hidden transition-all group flex flex-col justify-between shadow-md hover:shadow-[0_0_20px_rgba(234,145,98,0.18)]"
            >
              <div
                onClick={() => setActiveModalImage(img)}
                className="relative h-60 w-full overflow-hidden cursor-pointer bg-[#080706]"
              >
                <AstronomicalCanvas
                  objectId={img.objectId}
                  wavelength={img.wavelength}
                  telescopeId={img.telescopeId}
                  imageSrc={img.image}
                  altText={img.title}
                  className="w-full h-full rounded-none border-none group-hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute top-3 right-3 bg-[#080706]/90 border border-[rgba(234,145,98,0.30)] px-2 py-0.5 rounded text-[11px] font-mono text-[#EA9162]">
                  {img.wavelength}
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#9F8D84]">
                    <span>{img.telescopeName}</span>
                    <span>{img.distance}</span>
                  </div>

                  <h3
                    onClick={() => setActiveModalImage(img)}
                    className="text-base font-semibold text-[#FFFFFF] group-hover:text-[#F2B08E] transition-colors mt-1 cursor-pointer line-clamp-1"
                  >
                    {img.objectName}
                  </h3>

                  <p className="text-xs text-[#C7B8B0] mt-1 line-clamp-2 leading-relaxed">
                    {img.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[rgba(234,145,98,0.18)] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#F2B08E]">
                    {img.instrument.split(' ')[0]}
                  </span>
                  <CosmicButton
                    onClick={() => setActiveModalImage(img)}
                    variant="primary"
                    size="sm"
                    icon={<Eye className="w-3.5 h-3.5" />}
                    iconPosition="left"
                  >
                    View Detail
                  </CosmicButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <ImageDetailModal
        image={activeModalImage}
        onClose={() => setActiveModalImage(null)}
        onCompareWithTelescope={(objId, telId) => onNavigateToComparison(objId, telId)}
        onView3D={(telId) => onNavigateToTelescope(telId)}
        onViewSketch={(telId) => onNavigateToSketch(telId)}
      />
    </div>
  );
};

export default ImageGallery;
