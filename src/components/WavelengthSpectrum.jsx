import React, { useState } from 'react';
import { SPECTRUM_BANDS } from '../data/objects.js';
import { TELESCOPES } from '../data/telescopes.js';
import { Zap, ShieldAlert, Compass } from 'lucide-react';

export const WavelengthSpectrum = ({
  selectedTelescopeId,
  onSelectTelescope
}) => {
  const [activeBandId, setActiveBandId] = useState('infrared');

  const activeBand =
    SPECTRUM_BANDS.find((b) => b.id === activeBandId) || SPECTRUM_BANDS[4];

  const isTelescopeInBand = (telId, bandId) => {
    if (telId === 'jwst') return bandId === 'infrared';
    if (telId === 'hubble') return bandId === 'visible' || bandId === 'uv' || bandId === 'infrared';
    return false;
  };

  return (
    <div className="bg-[#080706] border border-[rgba(234,145,98,0.22)] rounded-xl p-6 shadow-md">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-[rgba(234,145,98,0.20)] gap-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold text-[#EA9162] uppercase tracking-wider">
              ELECTROMAGNETIC SPECTRUM EXPLORER
            </span>
            <span className="text-xs text-[#9F8D84]">·</span>
            <span className="text-xs text-[#C7B8B0]">Astrophysical Spectral Bands</span>
          </div>
          <h3 className="text-lg font-heading font-semibold text-[#FFFFFF] mt-0.5">
            Wavelength Bands & Telescope Sensitivities
          </h3>
        </div>
        <div className="text-xs font-mono text-[#C7B8B0] bg-[#120D0A] px-3 py-1.5 rounded border border-[rgba(234,145,98,0.25)]">
          Energy: High (γ-ray) <span className="text-[#EA9162]">←</span> → Low (Radio)
        </div>
      </div>

      {/* Spectrum Bar */}
      <div className="mt-6">
        <div className="grid grid-cols-7 gap-1 bg-[#120D0A] p-1.5 rounded-lg border border-[rgba(234,145,98,0.25)]">
          {SPECTRUM_BANDS.map((band) => {
            const isSelected = activeBandId === band.id;
            return (
              <button
                key={band.id}
                onClick={() => setActiveBandId(band.id)}
                className={`flex flex-col items-center justify-center py-3 px-1 rounded transition-all text-center cursor-pointer ${
                  isSelected
                    ? 'bg-[#18100C] border border-[#EA9162] shadow-md shadow-[#EA9162]/20'
                    : 'hover:bg-[#18100C]/60 border border-transparent'
                }`}
              >
                <span
                  className="w-full h-1.5 rounded-full mb-2"
                  style={{ backgroundColor: band.colorHex }}
                />
                <span
                  className={`text-xs font-mono font-semibold truncate w-full ${
                    isSelected ? 'text-[#EA9162]' : 'text-[#FFFFFF]'
                  }`}
                >
                  {band.name}
                </span>
                <span className="text-[10px] font-mono text-[#9F8D84] truncate w-full mt-0.5">
                  {band.range}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Telescope Coverage Track */}
      <div className="mt-4 pt-4 border-t border-[rgba(234,145,98,0.18)]">
        <div className="text-xs font-mono text-[#9F8D84] mb-2 uppercase">
          TELESCOPE OBSERVATIONAL WINDOWS:
        </div>
        <div className="flex flex-wrap gap-2">
          {TELESCOPES.map((tel) => {
            const coversActiveBand = isTelescopeInBand(tel.id, activeBandId);
            return (
              <button
                key={tel.id}
                onClick={() => onSelectTelescope && onSelectTelescope(tel.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors border cursor-pointer ${
                  coversActiveBand
                    ? 'bg-[#18100C] text-[#EA9162] border-[#EA9162] shadow-sm'
                    : 'bg-[#120D0A] text-[#C7B8B0] border-[rgba(234,145,98,0.20)] opacity-70 hover:opacity-100'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    coversActiveBand ? 'bg-[#EA9162] animate-pulse shadow-[0_0_6px_#EA9162]' : 'bg-[#9F8D84]'
                  }`}
                />
                <span className="font-semibold">{tel.name}</span>
                <span className="text-[10px] text-[#9F8D84]">({tel.primaryWavelength.split(' ')[0]})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Telemetry Grid */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#120D0A] border border-[rgba(234,145,98,0.20)] rounded-lg p-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#EA9162] mb-2">
            <Zap className="w-3.5 h-3.5" />
            <span>PHYSICAL QUANTUM TELEMETRY</span>
          </div>
          <div className="space-y-2 text-xs font-mono">
            <div className="flex justify-between border-b border-[rgba(234,145,98,0.15)] pb-1">
              <span className="text-[#9F8D84]">Wavelength:</span>
              <span className="text-[#FFFFFF] tabular-nums">{activeBand.range}</span>
            </div>
            <div className="flex justify-between border-b border-[rgba(234,145,98,0.15)] pb-1">
              <span className="text-[#9F8D84]">Frequency:</span>
              <span className="text-[#FFFFFF] tabular-nums">{activeBand.frequencyRange}</span>
            </div>
            <div className="flex justify-between border-b border-[rgba(234,145,98,0.15)] pb-1">
              <span className="text-[#9F8D84]">Photon Energy:</span>
              <span className="text-[#F2B08E] tabular-nums">{activeBand.photonEnergy}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#9F8D84]">Typical Temp:</span>
              <span className="text-[#FFFFFF] tabular-nums">{activeBand.temperatureKelvin}</span>
            </div>
          </div>
        </div>

        <div className="bg-[#120D0A] border border-[rgba(234,145,98,0.20)] rounded-lg p-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#EA9162] mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>WHAT EMITS THIS LIGHT?</span>
          </div>
          <ul className="space-y-1.5 text-xs text-[#FFFFFF]">
            {activeBand.phenomena.map((item, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <span className="text-[#EA9162] font-mono mt-0.5">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#120D0A] border border-[rgba(234,145,98,0.20)] rounded-lg p-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#EA9162] mb-2">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>EARTH ATMOSPHERE TRANSMISSION</span>
          </div>
          <div className="text-xs text-[#C7B8B0] space-y-2">
            <p className="font-mono text-[#FFD2BE]">
              {activeBand.atmosphericPenetration}
            </p>
            <p className="text-xs leading-relaxed text-[#FFFFFF]">
              {activeBand.importanceToAstronomy}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WavelengthSpectrum;
