import React, { useState } from 'react';
import { SPACE_OBJECTS } from '../data/objects.js';
import { ObjectCard } from '../components/ObjectCard.jsx';
import { ComparisonViewer } from '../components/ComparisonViewer.jsx';
import { AstronomicalCanvas } from '../components/AstronomicalCanvas.jsx';

export const Objects = ({
  initialObjectId = 'pillars-of-creation',
  initialCategory = 'all',
  onNavigateToTelescope,
  onOpenImageViewer
}) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedObjectId, setSelectedObjectId] = useState(initialObjectId);
  const [activeTab, setActiveTab] = useState('compare');

  const categories = [
    { id: 'all', label: 'All Objects' },
    { id: 'galaxy', label: 'Galaxies' },
    { id: 'nebula', label: 'Nebulae' },
    { id: 'blackhole', label: 'Black Holes' },
    { id: 'planet', label: 'Planets' },
    { id: 'exoplanet', label: 'Exoplanets' },
    { id: 'star', label: 'Stars' }
  ];

  const filteredObjects =
    selectedCategory === 'all'
      ? SPACE_OBJECTS
      : SPACE_OBJECTS.filter((obj) => obj.type === selectedCategory);

  const activeObject =
    SPACE_OBJECTS.find((obj) => obj.id === selectedObjectId) ||
    filteredObjects[0] ||
    SPACE_OBJECTS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[rgba(234,145,98,0.20)] pb-6 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#EA9162] uppercase tracking-wider">
            <span>CELESTIAL CATALOG</span>
            <span className="text-[#9F8D84]">·</span>
            <span>MULTI-WAVELENGTH TARGETS</span>
          </div>
          <h2 className="text-3xl font-heading font-bold text-[#FFFFFF] mt-1">
            Space Objects Explorer
          </h2>
          <p className="text-sm text-[#C7B8B0] mt-1 max-w-2xl leading-relaxed">
            Explore stellar nurseries, spiral galaxies, and exoplanets as observed through different spectral eyes.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#0D0A08] border border-[rgba(234,145,98,0.25)] rounded-xl">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-colors cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#18100C] text-[#EA9162] font-semibold border border-[rgba(234,145,98,0.35)] shadow-[0_0_10px_rgba(234,145,98,0.2)]'
                  : 'text-[#C7B8B0] hover:text-[#FFFFFF]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Object Cards */}
        <div className="lg:col-span-4 space-y-3">
          <div className="text-xs font-mono uppercase text-[#9F8D84] tracking-wider px-2">
            ASTRONOMICAL TARGETS ({filteredObjects.length}):
          </div>
          {filteredObjects.map((obj) => (
            <ObjectCard
              key={obj.id}
              object={obj}
              isSelected={obj.id === activeObject.id}
              onSelect={(id) => setSelectedObjectId(id)}
            />
          ))}
        </div>

        {/* Right Column: Deep-Dive */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-[#0D0A08] border border-[rgba(234,145,98,0.25)] rounded-2xl p-6 sm:p-7 shadow-[0_4px_25px_rgba(8,7,6,0.8)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[rgba(234,145,98,0.20)] gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#EA9162]">
                  <span className="uppercase">{activeObject.typeDisplay}</span>
                  <span className="text-[#9F8D84]">·</span>
                  <span className="text-[#C7B8B0]">{activeObject.constellation}</span>
                </div>
                <h3 className="text-2xl font-heading font-bold text-[#FFFFFF] mt-0.5">
                  {activeObject.name}
                </h3>
                {activeObject.alternateNames && activeObject.alternateNames.length > 0 && (
                  <p className="text-xs font-mono text-[#9F8D84] mt-0.5">
                    Also known as: {activeObject.alternateNames.join(' · ')}
                  </p>
                )}
              </div>

              <div className="flex items-center bg-[#120D0A] border border-[rgba(234,145,98,0.25)] rounded-xl p-1">
                <button
                  onClick={() => setActiveTab('compare')}
                  className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'compare'
                      ? 'bg-[#18100C] text-[#EA9162] font-semibold border border-[rgba(234,145,98,0.30)]'
                      : 'text-[#C7B8B0] hover:text-[#FFFFFF]'
                  }`}
                >
                  Telescope Comparison
                </button>
                <button
                  onClick={() => setActiveTab('observations')}
                  className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'observations'
                      ? 'bg-[#18100C] text-[#EA9162] font-semibold border border-[rgba(234,145,98,0.30)]'
                      : 'text-[#C7B8B0] hover:text-[#FFFFFF]'
                  }`}
                >
                  All Wavelengths
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 text-xs font-mono">
              <div className="p-3 bg-[#120D0A] rounded-xl border border-[rgba(234,145,98,0.20)]">
                <span className="text-[#9F8D84] block">DISTANCE:</span>
                <span className="text-[#FFFFFF] font-semibold mt-0.5 block">
                  {activeObject.distance}
                </span>
              </div>
              <div className="p-3 bg-[#120D0A] rounded-xl border border-[rgba(234,145,98,0.20)]">
                <span className="text-[#9F8D84] block">DIAMETER:</span>
                <span className="text-[#FFFFFF] font-semibold mt-0.5 block">
                  {activeObject.diameter}
                </span>
              </div>
              <div className="p-3 bg-[#120D0A] rounded-xl border border-[rgba(234,145,98,0.20)]">
                <span className="text-[#9F8D84] block">COORDINATES:</span>
                <span className="text-[#F2B08E] mt-0.5 block truncate">
                  RA {activeObject.coordinates?.ra || 'N/A'}
                </span>
              </div>
              <div className="p-3 bg-[#120D0A] rounded-xl border border-[rgba(234,145,98,0.20)]">
                <span className="text-[#9F8D84] block">CONSTELLATION:</span>
                <span className="text-[#FFFFFF] font-semibold mt-0.5 block">
                  {activeObject.constellation}
                </span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-[rgba(234,145,98,0.18)]">
              <span className="text-xs font-mono text-[#EA9162] uppercase font-semibold">
                SCIENTIFIC SIGNIFICANCE & ASTROPHYSICS
              </span>
              <p className="text-xs text-[#F5EDE8] mt-1.5 leading-relaxed">
                {activeObject.scientificSignificance}
              </p>
              <p className="text-xs text-[#C7B8B0] mt-2 leading-relaxed">
                {activeObject.description}
              </p>
            </div>
          </div>

          {activeTab === 'compare' ? (
            <ComparisonViewer
              object={activeObject}
              onSelectTelescope={onNavigateToTelescope}
            />
          ) : (
            <div className="space-y-6">
              {activeObject.observations.map((obs) => (
                <div
                  key={obs.telescopeId}
                  className="bg-[#0D0A08] border border-[rgba(234,145,98,0.22)] rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(8,7,6,0.8)]"
                >
                  <div className="p-4 bg-[#120D0A] border-b border-[rgba(234,145,98,0.20)] flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-[#FFFFFF]">
                        {obs.telescopeName}
                      </span>
                      <span className="text-xs font-mono text-[#EA9162] bg-[#18100C] px-2.5 py-0.5 rounded-full border border-[rgba(234,145,98,0.30)]">
                        {obs.wavelength}
                      </span>
                    </div>
                    <div className="text-xs font-mono text-[#C7B8B0]">
                      {obs.filterOrInstrument}
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="h-64 rounded-xl overflow-hidden border border-[rgba(234,145,98,0.20)]">
                      <AstronomicalCanvas
                        objectId={activeObject.id}
                        wavelength={obs.wavelength}
                        telescopeId={obs.telescopeId}
                        imageSrc={obs.image}
                        altText={`${activeObject.name} by ${obs.telescopeName}`}
                        className="w-full h-full rounded-xl"
                      />
                    </div>

                    <div className="space-y-3 flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-mono text-[#EA9162] uppercase font-semibold">
                          ASTROPHYSICAL EXPLANATION:
                        </span>
                        <p className="text-xs text-[#F5EDE8] mt-1.5 leading-relaxed">
                          {obs.explanation}
                        </p>
                        <div className="mt-3">
                          <span className="text-[11px] font-mono text-[#9F8D84] uppercase">
                            KEY VISUAL ATTRIBUTES:
                          </span>
                          <ul className="mt-1 space-y-1">
                            {obs.visualFeatures.map((feat, idx) => (
                              <li key={idx} className="text-xs text-[#C7B8B0] flex items-start gap-1.5">
                                <span className="text-[#EA9162] font-mono">·</span>
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-[rgba(234,145,98,0.15)] flex items-center justify-between text-xs font-mono text-[#C7B8B0]">
                        <span className="truncate max-w-[280px]">Credit: {obs.credit}</span>
                        <button
                          onClick={() => onNavigateToTelescope(obs.telescopeId)}
                          className="text-[#EA9162] hover:text-[#F2B08E] hover:underline cursor-pointer"
                        >
                          Telescope Specs →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Objects;
