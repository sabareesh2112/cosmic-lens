import React, { useState, useRef } from 'react';
import { AstronomicalCanvas } from './AstronomicalCanvas.jsx';
import { Columns, Grid, Info, SlidersHorizontal, ArrowLeftRight } from 'lucide-react';

export const ComparisonViewer = ({
  object,
  onSelectTelescope
}) => {
  const [viewMode, setViewMode] = useState('split');
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const availableObs = object.observations || [];
  const [telescopeAId, setTelescopeAId] = useState(
    availableObs[0]?.telescopeId || 'hubble'
  );
  const [telescopeBId, setTelescopeBId] = useState(
    availableObs[1]?.telescopeId || availableObs[0]?.telescopeId || 'jwst'
  );

  const obsA = availableObs.find((o) => o.telescopeId === telescopeAId) || availableObs[0];
  const obsB = availableObs.find((o) => o.telescopeId === telescopeBId) || availableObs[1] || availableObs[0];

  const handleMouseDown = () => setIsDragging(true);

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  const handleTouchMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  const handleMouseUp = () => setIsDragging(false);

  const activeComparisonNote = (object.comparisons || []).find(
    (c) =>
      (c.telescopeA === telescopeAId && c.telescopeB === telescopeBId) ||
      (c.telescopeA === telescopeBId && c.telescopeB === telescopeAId)
  );

  return (
    <div className="bg-[#080706] border border-[rgba(234,145,98,0.22)] rounded-xl overflow-hidden shadow-xl">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-[#0D0A08] border-b border-[rgba(234,145,98,0.20)] gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold text-[#EA9162] uppercase tracking-wider">
              MULTI-WAVELENGTH COMPARISON ENGINE
            </span>
            <span className="text-xs text-[#9F8D84]">·</span>
            <span className="text-xs text-[#FFFFFF] font-medium">{object.name}</span>
          </div>
          <p className="text-xs text-[#C7B8B0] mt-0.5">
            Compare how different space telescopes observe the identical celestial coordinates.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {viewMode === 'split' && (
            <div className="flex items-center gap-2 text-xs font-mono">
              <select
                value={telescopeAId}
                onChange={(e) => setTelescopeAId(e.target.value)}
                className="bg-[#18100C] border border-[rgba(234,145,98,0.30)] text-[#EA9162] rounded px-2.5 py-1.5 focus:outline-none focus:border-[#EA9162]"
              >
                {availableObs.map((obs) => (
                  <option key={obs.telescopeId} value={obs.telescopeId} disabled={obs.telescopeId === telescopeBId}>
                    {obs.telescopeName} ({obs.wavelength})
                  </option>
                ))}
              </select>

              <ArrowLeftRight className="w-3.5 h-3.5 text-[#9F8D84]" />

              <select
                value={telescopeBId}
                onChange={(e) => setTelescopeBId(e.target.value)}
                className="bg-[#18100C] border border-[rgba(234,145,98,0.30)] text-[#F2B08E] rounded px-2.5 py-1.5 focus:outline-none focus:border-[#EA9162]"
              >
                {availableObs.map((obs) => (
                  <option key={obs.telescopeId} value={obs.telescopeId} disabled={obs.telescopeId === telescopeAId}>
                    {obs.telescopeName} ({obs.wavelength})
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="flex items-center bg-[#120D0A] border border-[rgba(234,145,98,0.25)] rounded-lg p-0.5 ml-auto">
            <button
              onClick={() => setViewMode('split')}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs font-mono rounded transition-colors cursor-pointer ${
                viewMode === 'split'
                  ? 'bg-[#18100C] text-[#EA9162] font-semibold border border-[#EA9162]/40'
                  : 'text-[#C7B8B0] hover:text-[#FFFFFF]'
              }`}
            >
              <Columns className="w-3.5 h-3.5" /> Split Slider
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs font-mono rounded transition-colors cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-[#18100C] text-[#EA9162] font-semibold border border-[#EA9162]/40'
                  : 'text-[#C7B8B0] hover:text-[#FFFFFF]'
              }`}
            >
              <Grid className="w-3.5 h-3.5" /> 2-Tile Grid
            </button>
          </div>
        </div>
      </div>

      {viewMode === 'split' ? (
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
          className="relative w-full h-[460px] overflow-hidden select-none bg-[#080706]"
        >
          {/* Layer B (Underneath / Right) */}
          <div className="absolute inset-0">
            <AstronomicalCanvas
              objectId={object.id}
              wavelength={obsB.wavelength}
              telescopeId={obsB.telescopeId}
              imageSrc={obsB.image}
              altText={`${object.name} - ${obsB.telescopeName}`}
              className="w-full h-full rounded-none border-none"
            />
            <div className="absolute top-4 right-4 bg-[#080706]/90 border border-[rgba(234,145,98,0.30)] rounded px-3 py-1.5 text-xs font-mono z-10 pointer-events-none shadow-md">
              <span className="text-[#F2B08E] font-semibold">{obsB.telescopeName}</span>
              <span className="text-[#C7B8B0] ml-1.5">[{obsB.wavelength}]</span>
            </div>
          </div>

          {/* Layer A (Top / Left Clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <div
              className="w-full h-full"
              style={{ width: containerRef.current?.clientWidth || '100%' }}
            >
              <AstronomicalCanvas
                objectId={object.id}
                wavelength={obsA.wavelength}
                telescopeId={obsA.telescopeId}
                imageSrc={obsA.image}
                altText={`${object.name} - ${obsA.telescopeName}`}
                className="w-full h-full rounded-none border-none"
              />
            </div>
            <div className="absolute top-4 left-4 bg-[#080706]/90 border border-[rgba(234,145,98,0.30)] rounded px-3 py-1.5 text-xs font-mono z-10 pointer-events-none shadow-md">
              <span className="text-[#EA9162] font-semibold">{obsA.telescopeName}</span>
              <span className="text-[#C7B8B0] ml-1.5">[{obsA.wavelength}]</span>
            </div>
          </div>

          {/* Divider Line in Star Burst Orange */}
          <div
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
            style={{ left: `${sliderPosition}%` }}
            className="absolute top-0 bottom-0 w-1 bg-[#EA9162] cursor-ew-resize z-20 shadow-lg shadow-[#EA9162]/50 flex items-center justify-center"
          >
            <div className="w-8 h-8 rounded-full bg-[#120D0A] border-2 border-[#EA9162] flex items-center justify-center text-[#EA9162] shadow-[0_0_12px_rgba(234,145,98,0.5)]">
              <SlidersHorizontal className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(234,145,98,0.20)]">
          {availableObs.map((obs) => (
            <div key={obs.telescopeId} className="bg-[#080706] p-3 flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-[#FFFFFF]">{obs.telescopeName}</span>
                  <span className="text-[11px] font-mono text-[#EA9162] bg-[#18100C] px-2 py-0.5 rounded border border-[rgba(234,145,98,0.30)]">
                    {obs.wavelength}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#9F8D84]">{obs.spectralRange}</span>
              </div>
              <div className="h-64 rounded-lg overflow-hidden border border-[rgba(234,145,98,0.20)]">
                <AstronomicalCanvas
                  objectId={object.id}
                  wavelength={obs.wavelength}
                  telescopeId={obs.telescopeId}
                  imageSrc={obs.image}
                  altText={`${object.name} - ${obs.telescopeName}`}
                  className="w-full h-full rounded-lg"
                />
              </div>
              <p className="text-xs text-[#C7B8B0] mt-2 line-clamp-2 leading-relaxed">
                {obs.explanation}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Explanation Box */}
      <div className="p-6 bg-[#0D0A08] border-t border-[rgba(234,145,98,0.20)]">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-[#18100C] border border-[rgba(234,145,98,0.30)] rounded-lg text-[#EA9162] mt-0.5">
            <Info className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-heading font-semibold text-[#FFFFFF]">
              WHY DO THESE IMAGES LOOK DIFFERENT?
            </h4>
            <p className="text-xs text-[#C7B8B0] mt-1 leading-relaxed">
              Because each telescope observes completely different wavelengths of electromagnetic radiation.
              Interstellar dust blocks high-frequency visible light (<span className="text-[#F2B08E]">Hubble</span>), but low-frequency infrared light (<span className="text-[#EA9162]">James Webb</span>) passes right through the dust grains to reveal newborn stars and the deep thermal universe.
            </p>

            {activeComparisonNote && (
              <div className="mt-4 pt-3 border-t border-[rgba(234,145,98,0.18)]">
                <span className="text-xs font-mono font-semibold text-[#FFD2BE]">
                  KEY EMPIRICAL DIFFERENCES:
                </span>
                <ul className="mt-2 space-y-1.5">
                  {activeComparisonNote.keyDifferences.map((diff, idx) => (
                    <li key={idx} className="text-xs text-[#FFFFFF] flex items-start gap-2">
                      <span className="text-[#EA9162] font-mono mt-0.5">·</span>
                      <span>{diff}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonViewer;
