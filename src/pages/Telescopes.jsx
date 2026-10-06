import React, { useState } from 'react';
import { TELESCOPES } from '../data/telescopes.js';
import { TelescopeCard } from '../components/TelescopeCard.jsx';
import { Telescope3DViewer } from '../components/Telescope3DViewer.jsx';
import { ScientificSketch } from '../components/ScientificSketch.jsx';
import { WavelengthSpectrum } from '../components/WavelengthSpectrum.jsx';
import { CosmicButton } from '../components/CosmicButton.jsx';
import { Box, Layers } from 'lucide-react';

export const Telescopes = ({
  initialTelescopeId = 'jwst',
  onNavigateToObjects,
  onNavigateToComparison,
  onNavigateToDetails
}) => {
  const [selectedTelescopeId, setSelectedTelescopeId] = useState(initialTelescopeId);
  const [viewMode, setViewMode] = useState('3d');
  const [selectedPartId, setSelectedPartId] = useState(null);

  const activeTelescope =
    TELESCOPES.find((t) => t.id === selectedTelescopeId) || TELESCOPES[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[rgba(234,145,98,0.20)] pb-6 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#EA9162] uppercase tracking-wider">
            <span>OBSERVATORY ARSENAL</span>
            <span className="text-[#9F8D84]">·</span>
            <span>SPACE EXPLORATION ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl font-heading font-bold text-[#FFFFFF] mt-1">
            Space Telescopes Fleet
          </h2>
          <p className="text-sm text-[#C7B8B0] mt-1 max-w-2xl">
            Humanity's greatest observatories in space. Explore their optical architectures, cryogenic cooling systems, and physical dimensions in 3D and 2D blueprints.
          </p>
        </div>

        <div className="flex items-center bg-[#120D0A] border border-[rgba(234,145,98,0.25)] rounded-lg p-1">
          <button
            onClick={() => setViewMode('3d')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-md transition-colors cursor-pointer ${
              viewMode === '3d'
                ? 'bg-[#18100C] text-[#EA9162] font-semibold border border-[#EA9162]/40'
                : 'text-[#C7B8B0] hover:text-[#FFFFFF]'
            }`}
          >
            <Box className="w-3.5 h-3.5" /> 3D Spatial Model
          </button>
          <button
            onClick={() => setViewMode('2d')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-md transition-colors cursor-pointer ${
              viewMode === '2d'
                ? 'bg-[#18100C] text-[#EA9162] font-semibold border border-[#EA9162]/40'
                : 'text-[#C7B8B0] hover:text-[#FFFFFF]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" /> 2D Scientific Blueprint
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Telescope Cards */}
        <div className="lg:col-span-3 space-y-2">
          <div className="text-xs font-mono uppercase text-[#9F8D84] tracking-wider px-2 mb-2">
            SELECT TELESCOPE:
          </div>
          {TELESCOPES.map((tel) => (
            <TelescopeCard
              key={tel.id}
              telescope={tel}
              isSelected={tel.id === activeTelescope.id}
              onSelect={(id) => {
                setSelectedTelescopeId(id);
                setSelectedPartId(null);
              }}
            />
          ))}

          <div className="p-4 bg-[#120D0A] border border-[rgba(234,145,98,0.20)] rounded-xl text-xs space-y-2 mt-6">
            <span className="font-mono text-[#EA9162] uppercase font-semibold block">
              3D MODEL DROPZONE
            </span>
            <p className="text-[#C7B8B0] leading-relaxed">
              Have your own telescope 3D file (.glb / .gltf)? Click "Import Model" in the 3D viewer to test it live!
            </p>
          </div>
        </div>

        {/* Right Main Stage */}
        <div className="lg:col-span-9 space-y-6">
          {viewMode === '3d' ? (
            <Telescope3DViewer
              telescopeId={activeTelescope.id}
              telescopeName={activeTelescope.name}
              modelUrl={activeTelescope.modelFile}
              parts={activeTelescope.parts}
              selectedPartId={selectedPartId}
              onSelectPart={setSelectedPartId}
            />
          ) : (
            <ScientificSketch telescope={activeTelescope} />
          )}

          {/* Specifications Dashboard */}
          <div className="bg-[#0D0A08] border border-[rgba(234,145,98,0.22)] rounded-xl p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[rgba(234,145,98,0.20)] gap-2">
              <div>
                <span className="text-xs font-mono text-[#EA9162] uppercase">
                  MISSION ARCHITECTURE SPECIFICATIONS
                </span>
                <h3 className="text-xl font-heading font-bold text-[#FFFFFF]">
                  {activeTelescope.fullName}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <CosmicButton
                  onClick={() => onNavigateToObjects(activeTelescope.id)}
                  variant="primary"
                  size="sm"
                >
                  View Observed Objects
                </CosmicButton>
                <CosmicButton
                  onClick={() => onNavigateToComparison(activeTelescope.id)}
                  variant="secondary"
                  size="sm"
                >
                  Compare Images
                </CosmicButton>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              <div className="bg-[#120D0A] border border-[rgba(234,145,98,0.20)] p-3.5 rounded-lg">
                <span className="text-[11px] font-mono text-[#9F8D84] uppercase block">
                  PRIMARY APERTURE
                </span>
                <span className="text-base font-semibold text-[#FFFFFF] font-mono mt-0.5 block">
                  {activeTelescope.mirrorSize}
                </span>
                <span className="text-xs text-[#F2B08E] mt-1 block">
                  Collecting Area
                </span>
              </div>

              <div className="bg-[#120D0A] border border-[rgba(234,145,98,0.20)] p-3.5 rounded-lg">
                <span className="text-[11px] font-mono text-[#9F8D84] uppercase block">
                  ORBITAL POSITION
                </span>
                <span className="text-base font-semibold text-[#FFFFFF] mt-0.5 block">
                  {activeTelescope.location}
                </span>
                <span className="text-xs text-[#C7B8B0] mt-1 block font-mono">
                  {activeTelescope.orbitAltitude}
                </span>
              </div>

              <div className="bg-[#120D0A] border border-[rgba(234,145,98,0.20)] p-3.5 rounded-lg">
                <span className="text-[11px] font-mono text-[#9F8D84] uppercase block">
                  PRIMARY WAVELENGTH
                </span>
                <span className="text-base font-semibold text-[#EA9162] mt-0.5 block">
                  {activeTelescope.primaryWavelength}
                </span>
                <span className="text-xs text-[#C7B8B0] mt-1 block font-mono">
                  {activeTelescope.wavelengthRange}
                </span>
              </div>

              <div className="bg-[#120D0A] border border-[rgba(234,145,98,0.20)] p-3.5 rounded-lg">
                <span className="text-[11px] font-mono text-[#9F8D84] uppercase block">
                  LAUNCH DATE & LIFETIME
                </span>
                <span className="text-base font-semibold text-[#FFFFFF] mt-0.5 block">
                  {activeTelescope.launchDate}
                </span>
                <span className="text-xs text-[#C7B8B0] mt-1 block">
                  {activeTelescope.missionDuration}
                </span>
              </div>

              <div className="bg-[#120D0A] border border-[rgba(234,145,98,0.20)] p-3.5 rounded-lg">
                <span className="text-[11px] font-mono text-[#9F8D84] uppercase block">
                  LEAD AGENCY & PARTNERS
                </span>
                <span className="text-base font-semibold text-[#FFFFFF] mt-0.5 block">
                  {activeTelescope.agency}
                </span>
                <span className="text-xs text-[#C7B8B0] mt-1 block">
                  International Collaboration
                </span>
              </div>

              <div className="bg-[#120D0A] border border-[rgba(234,145,98,0.20)] p-3.5 rounded-lg">
                <span className="text-[11px] font-mono text-[#9F8D84] uppercase block">
                  PRIMARY MISSION OBJECTIVE
                </span>
                <span className="text-xs text-[#FFFFFF] mt-1 block leading-relaxed line-clamp-3">
                  {activeTelescope.primaryGoal}
                </span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[rgba(234,145,98,0.18)]">
              <span className="text-xs font-mono text-[#EA9162] uppercase font-semibold">
                MISSION OVERVIEW
              </span>
              <p className="text-sm text-[#C7B8B0] mt-2 leading-relaxed">
                {activeTelescope.description}
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-[rgba(234,145,98,0.18)]">
              <span className="text-xs font-mono text-[#EA9162] uppercase font-semibold">
                ONBOARD SCIENTIFIC INSTRUMENTATION
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                {activeTelescope.instruments.map((inst, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-[#120D0A] border border-[rgba(234,145,98,0.20)] rounded-lg"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#FFFFFF]">
                        {inst.name}
                      </span>
                      <span className="text-[11px] font-mono text-[#EA9162]">
                        {inst.wavelength}
                      </span>
                    </div>
                    <div className="text-xs text-[#F2B08E] font-medium mt-0.5">
                      {inst.fullName}
                    </div>
                    <p className="text-xs text-[#C7B8B0] mt-1.5 leading-relaxed">
                      {inst.purpose}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[rgba(234,145,98,0.18)]">
              <span className="text-xs font-mono text-[#EA9162] uppercase font-semibold">
                KEY HISTORIC DISCOVERIES & CONTRIBUTIONS
              </span>
              <ul className="mt-3 space-y-2">
                {activeTelescope.keyDiscoveries.map((disc, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#FFFFFF]">
                    <span className="text-[#EA9162] font-mono font-bold mt-0.5">0{idx + 1}.</span>
                    <span className="leading-relaxed">{disc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <WavelengthSpectrum
            selectedTelescopeId={activeTelescope.id}
            onSelectTelescope={(id) => setSelectedTelescopeId(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default Telescopes;
