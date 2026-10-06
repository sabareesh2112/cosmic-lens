import React, { useState } from 'react';
import { telescopes } from '../data/telescopes.js';
import { spaceObjects } from '../data/spaceObjects.js';
import { ComparisonViewer } from '../components/ComparisonViewer.jsx';
import { WavelengthSpectrum } from '../components/WavelengthSpectrum.jsx';
import { CosmicButton } from '../components/CosmicButton.jsx';
import { Orbit, SlidersHorizontal, CheckCircle2 } from 'lucide-react';

export const Compare = ({
  initialObjectId = 'pillars-of-creation',
  initialTelescopes = ['jwst', 'hubble'],
  onNavigateToTelescope,
  onNavigateToObjects
}) => {
  const [activeTab, setActiveTab] = useState('telescopes'); // 'telescopes' | 'objects'
  const [selectedTelescopeIds, setSelectedTelescopeIds] = useState(initialTelescopes);
  const [selectedObjectId, setSelectedObjectId] = useState(initialObjectId);

  const comparedTelescopes = telescopes.filter((t) =>
    selectedTelescopeIds.includes(t.id)
  );

  const activeObject =
    spaceObjects.find((o) => o.id === selectedObjectId) || spaceObjects[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header in Warm Stellar Space Theme */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[rgba(234,145,98,0.20)] pb-6 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#EA9162] uppercase tracking-wider">
            <span>MULTI-SPECTRAL OBSERVATORY</span>
            <span className="text-[#9F8D84]">·</span>
            <span>SIDE-BY-SIDE SCIENTIFIC ANALYSIS</span>
          </div>
          <h2 className="text-3xl font-heading font-bold text-[#FFFFFF] mt-1">
            Cosmic Comparison System
          </h2>
          <p className="text-sm text-[#C7B8B0] mt-1 max-w-2xl leading-relaxed">
            Compare astronomical telescopes side-by-side or examine how the identical celestial object appears through different spectral eyes.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex items-center bg-[#0D0A08] border border-[rgba(234,145,98,0.25)] rounded-full p-1 shadow-[0_0_15px_rgba(234,145,98,0.1)]">
          <button
            onClick={() => setActiveTab('telescopes')}
            className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-mono rounded-full transition-all cursor-pointer ${
              activeTab === 'telescopes'
                ? 'bg-[#18100C] text-[#EA9162] font-semibold border border-[rgba(234,145,98,0.35)] shadow-sm'
                : 'text-[#C7B8B0] hover:text-[#FFFFFF]'
            }`}
          >
            <Orbit className="w-3.5 h-3.5" />
            <span>Compare Telescopes</span>
          </button>
          <button
            onClick={() => setActiveTab('objects')}
            className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-mono rounded-full transition-all cursor-pointer ${
              activeTab === 'objects'
                ? 'bg-[#18100C] text-[#EA9162] font-semibold border border-[rgba(234,145,98,0.35)] shadow-sm'
                : 'text-[#C7B8B0] hover:text-[#FFFFFF]'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Compare Astronomical Objects</span>
          </button>
        </div>
      </div>

      {/* Mode 1: Compare Telescopes */}
      {activeTab === 'telescopes' && (
        <div className="space-y-6">
          {/* Selector Strip */}
          <div className="p-4 bg-[#0D0A08] border border-[rgba(234,145,98,0.20)] rounded-2xl space-y-3 shadow-[0_4px_20px_rgba(8,7,6,0.8)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs font-mono text-[#EA9162] uppercase tracking-wider font-semibold">
                COMPARING OBSERVATORIES:
              </span>
              <span className="text-xs font-mono text-[#C7B8B0]">
                James Webb Space Telescope (JWST) vs Hubble Space Telescope (HST)
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {telescopes.map((tel) => (
                <div
                  key={tel.id}
                  className="p-3.5 rounded-xl border text-left transition-all flex items-center justify-between bg-[#120D0A] border-[rgba(234,145,98,0.35)] shadow-[0_0_15px_rgba(234,145,98,0.15)]"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono uppercase text-[#EA9162] font-semibold">
                        {tel.shortName}
                      </span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#EA9162]" />
                    </div>
                    <h4 className="text-sm font-semibold text-[#FFFFFF] mt-0.5">
                      {tel.name}
                    </h4>
                    <span className="text-[11px] font-mono text-[#F2B08E] mt-1 block">
                      {tel.wavelength} ({tel.wavelengthRange})
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Side-by-Side Comparison Matrix */}
          <div className="bg-[#080706] border border-[rgba(234,145,98,0.25)] rounded-2xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="bg-[#0D0A08] border-b border-[rgba(234,145,98,0.20)]">
                    <th className="p-4 w-44 text-[#9F8D84] uppercase tracking-wider font-semibold">
                      Specification
                    </th>
                    {comparedTelescopes.map((tel) => (
                      <th
                        key={tel.id}
                        className="p-4 min-w-[260px] text-[#FFFFFF] font-sans"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-base font-heading font-bold text-[#EA9162]">
                            {tel.shortName}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-[rgba(234,145,98,0.25)] bg-[#120D0A] text-[#F2B08E]">
                            {tel.agency}
                          </span>
                        </div>
                        <span className="text-xs text-[#F5EDE8] font-medium block">
                          {tel.name}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="divide-y divide-[rgba(234,145,98,0.15)]">
                  {/* Primary Wavelength */}
                  <tr className="hover:bg-[#0D0A08]/50 transition-colors">
                    <td className="p-4 text-[#EA9162] font-semibold bg-[#0D0A08]/40">
                      WAVELENGTH
                    </td>
                    {comparedTelescopes.map((tel) => (
                      <td key={tel.id} className="p-4">
                        <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-[#120D0A] border border-[rgba(234,145,98,0.35)] text-[#F2B08E]">
                          {tel.wavelength}
                        </span>
                        <span className="text-[11px] text-[#C7B8B0] block mt-1">
                          {tel.wavelengthRange}
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* Launch Year */}
                  <tr className="hover:bg-[#0D0A08]/50 transition-colors">
                    <td className="p-4 text-[#9F8D84] uppercase bg-[#0D0A08]/40">
                      LAUNCH YEAR
                    </td>
                    {comparedTelescopes.map((tel) => (
                      <td key={tel.id} className="p-4 text-[#FFFFFF] text-sm font-semibold">
                        {tel.launchYear}
                        <span className="text-[11px] text-[#C7B8B0] block font-normal">
                          {tel.launchDate}
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* Primary Aperture / Mirror */}
                  <tr className="hover:bg-[#0D0A08]/50 transition-colors">
                    <td className="p-4 text-[#9F8D84] uppercase bg-[#0D0A08]/40">
                      APERTURE SIZE
                    </td>
                    {comparedTelescopes.map((tel) => (
                      <td key={tel.id} className="p-4 text-[#FFFFFF]">
                        <span className="font-semibold text-sm text-[#EA9162]">
                          {tel.mirrorSize}
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* Orbit Location */}
                  <tr className="hover:bg-[#0D0A08]/50 transition-colors">
                    <td className="p-4 text-[#9F8D84] uppercase bg-[#0D0A08]/40">
                      ORBIT LOCATION
                    </td>
                    {comparedTelescopes.map((tel) => (
                      <td key={tel.id} className="p-4 text-[#F5EDE8]">
                        <span className="font-semibold block">{tel.location}</span>
                        <span className="text-[11px] text-[#C7B8B0] block mt-0.5">
                          {tel.orbitAltitude}
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* Main Mission Focus */}
                  <tr className="hover:bg-[#0D0A08]/50 transition-colors">
                    <td className="p-4 text-[#9F8D84] uppercase bg-[#0D0A08]/40">
                      MAIN FOCUS
                    </td>
                    {comparedTelescopes.map((tel) => (
                      <td key={tel.id} className="p-4 text-[#C7B8B0] font-sans text-xs leading-relaxed">
                        {tel.mainPurpose || tel.primaryGoal}
                      </td>
                    ))}
                  </tr>

                  {/* Scientific Instruments */}
                  <tr className="hover:bg-[#0D0A08]/50 transition-colors">
                    <td className="p-4 text-[#9F8D84] uppercase bg-[#0D0A08]/40">
                      KEY INSTRUMENTS
                    </td>
                    {comparedTelescopes.map((tel) => (
                      <td key={tel.id} className="p-4 space-y-1">
                        {tel.instruments.map((inst, i) => (
                          <div key={i} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#EA9162]" />
                            <strong className="text-[#FFFFFF]">{inst.name}:</strong>
                            <span className="text-[#C7B8B0] text-[11px] truncate max-w-[180px]">
                              {inst.purpose}
                            </span>
                          </div>
                        ))}
                      </td>
                    ))}
                  </tr>

                  {/* Top Discoveries */}
                  <tr className="hover:bg-[#0D0A08]/50 transition-colors">
                    <td className="p-4 text-[#9F8D84] uppercase bg-[#0D0A08]/40">
                      KEY DISCOVERY
                    </td>
                    {comparedTelescopes.map((tel) => (
                      <td key={tel.id} className="p-4 text-xs font-sans text-[#F5EDE8] leading-relaxed">
                        {tel.keyDiscoveries?.[0] || 'Unprecedented observational discoveries'}
                      </td>
                    ))}
                  </tr>

                  {/* 3D Model & Interactive Action */}
                  <tr className="bg-[#0D0A08]/30">
                    <td className="p-4 text-[#9F8D84] uppercase bg-[#0D0A08]/40">
                      EXPLORE IN 3D
                    </td>
                    {comparedTelescopes.map((tel) => (
                      <td key={tel.id} className="p-4">
                        <CosmicButton
                          onClick={() => onNavigateToTelescope && onNavigateToTelescope(tel.id)}
                          variant="primary"
                          size="sm"
                          icon={<Orbit className="w-3.5 h-3.5" />}
                          iconPosition="left"
                        >
                          View {tel.shortName} in 3D
                        </CosmicButton>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Mode 2: Compare Celestial Objects */}
      {activeTab === 'objects' && (
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase text-[#9F8D84] tracking-wider px-1">
              CHOOSE ASTRONOMICAL TARGET:
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {spaceObjects.map((obj) => {
                const isSelected = obj.id === activeObject.id;
                return (
                  <button
                    key={obj.id}
                    onClick={() => setSelectedObjectId(obj.id)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#18100C] border-[#EA9162] shadow-[0_0_15px_rgba(234,145,98,0.25)]'
                        : 'bg-[#0D0A08] border-[rgba(234,145,98,0.20)] hover:border-[rgba(234,145,98,0.45)]'
                    }`}
                  >
                    <span className="text-[10px] font-mono text-[#EA9162] uppercase block">
                      {obj.typeDisplay ? obj.typeDisplay.split(' ')[0] : obj.type}
                    </span>
                    <span className="text-xs font-semibold text-[#FFFFFF] block truncate mt-0.5">
                      {obj.name}
                    </span>
                    <span className="text-[11px] font-mono text-[#C7B8B0] block mt-1">
                      {obj.observations ? `${obj.observations.length} Telescopes` : 'Multi-wavelength'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <ComparisonViewer
            object={activeObject}
            onSelectTelescope={onNavigateToTelescope}
          />
        </div>
      )}

      {/* Electromagnetic Spectrum Visualization */}
      <div className="mt-8">
        <WavelengthSpectrum onSelectTelescope={onNavigateToTelescope} />
      </div>
    </div>
  );
};

export default Compare;
