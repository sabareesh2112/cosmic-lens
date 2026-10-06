import React, { useState } from 'react';
import { TELESCOPES } from '../data/telescopes.js';
import { Telescope3DViewer } from '../components/Telescope3DViewer.jsx';
import { ScientificSketch } from '../components/ScientificSketch.jsx';
import { CosmicButton } from '../components/CosmicButton.jsx';
import { ArrowLeft, Box, Layers } from 'lucide-react';

export const TelescopeDetails = ({
  telescopeId = 'jwst',
  onBack,
  onNavigateToObjects,
  onNavigateToComparison
}) => {
  const [viewMode, setViewMode] = useState('3d');
  const [selectedPartId, setSelectedPartId] = useState(null);

  const telescope =
    TELESCOPES.find((t) => t.id === telescopeId) || TELESCOPES[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="flex items-center justify-between border-b border-[rgba(234,145,98,0.20)] pb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-mono text-[#EA9162] hover:text-[#F2B08E] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Telescope Fleet</span>
        </button>

        <div className="flex items-center bg-[#0D0A08] border border-[rgba(234,145,98,0.25)] rounded-xl p-1">
          <button
            onClick={() => setViewMode('3d')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono rounded-lg transition-colors cursor-pointer ${
              viewMode === '3d'
                ? 'bg-[#18100C] text-[#EA9162] font-semibold border border-[rgba(234,145,98,0.30)] shadow-[0_0_10px_rgba(234,145,98,0.2)]'
                : 'text-[#C7B8B0] hover:text-white'
            }`}
          >
            <Box className="w-3.5 h-3.5" /> 3D Model
          </button>
          <button
            onClick={() => setViewMode('2d')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono rounded-lg transition-colors cursor-pointer ${
              viewMode === '2d'
                ? 'bg-[#18100C] text-[#EA9162] font-semibold border border-[rgba(234,145,98,0.30)] shadow-[0_0_10px_rgba(234,145,98,0.2)]'
                : 'text-[#C7B8B0] hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" /> 2D Blueprint
          </button>
        </div>
      </div>

      {viewMode === '3d' ? (
        <Telescope3DViewer
          telescopeId={telescope.id}
          telescopeName={telescope.name}
          modelUrl={telescope.modelFile}
          parts={telescope.parts}
          selectedPartId={selectedPartId}
          onSelectPart={setSelectedPartId}
        />
      ) : (
        <ScientificSketch telescope={telescope} />
      )}

      {/* Specifications */}
      <div className="bg-[#0D0A08] border border-[rgba(234,145,98,0.25)] rounded-2xl p-6 sm:p-8 space-y-6 shadow-[0_4px_25px_rgba(8,7,6,0.8)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[rgba(234,145,98,0.20)] gap-4">
          <div>
            <span className="text-xs font-mono text-[#EA9162] uppercase tracking-wider font-semibold">
              {telescope.agency}
            </span>
            <h2 className="text-2xl font-heading font-bold text-[#FFFFFF] mt-0.5">
              {telescope.fullName}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <CosmicButton
              onClick={() => onNavigateToObjects(telescope.id)}
              variant="primary"
              size="sm"
            >
              Observed Objects
            </CosmicButton>
            <CosmicButton
              onClick={() => onNavigateToComparison(telescope.id)}
              variant="secondary"
              size="sm"
            >
              Compare
            </CosmicButton>
          </div>
        </div>

        <p className="text-sm text-[#C7B8B0] leading-relaxed">
          {telescope.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-[#120D0A] border border-[rgba(234,145,98,0.20)] rounded-xl">
            <span className="text-[11px] font-mono text-[#9F8D84] uppercase block">Aperture Size</span>
            <span className="text-sm font-semibold text-[#FFFFFF] font-mono block mt-1">{telescope.mirrorSize}</span>
          </div>
          <div className="p-4 bg-[#120D0A] border border-[rgba(234,145,98,0.20)] rounded-xl">
            <span className="text-[11px] font-mono text-[#9F8D84] uppercase block">Orbit Location</span>
            <span className="text-sm font-semibold text-[#FFFFFF] block mt-1">{telescope.location}</span>
          </div>
          <div className="p-4 bg-[#120D0A] border border-[rgba(234,145,98,0.20)] rounded-xl">
            <span className="text-[11px] font-mono text-[#9F8D84] uppercase block">Spectral Coverage</span>
            <span className="text-sm font-semibold text-[#EA9162] block mt-1">{telescope.primaryWavelength}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelescopeDetails;
