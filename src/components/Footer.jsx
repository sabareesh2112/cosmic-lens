import React from 'react';

export const Footer = ({ onNavigate }) => {
  return (
    <footer className="bg-[#080706] border-t border-[rgba(234,145,98,0.20)] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-lg font-heading font-bold text-[#FFFFFF]">
                COSMIC LENS
              </span>
              <span className="text-xs font-mono text-[#EA9162] px-2 py-0.5 bg-[#120D0A] rounded border border-[rgba(234,145,98,0.30)]">
                v1.0
              </span>
            </div>
            <p className="text-xs text-[#C7B8B0] max-w-sm leading-relaxed">
              Interactive space exploration platform illustrating how different space telescopes observe identical astronomical objects across multi-wavelength electromagnetic spectra.
            </p>
            <div className="text-[11px] font-mono text-[#9F8D84]">
              Data sources: NASA, ESA, CSA, and STScI.
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono font-semibold text-[#EA9162] uppercase tracking-wider block">
              OBSERVATORIES
            </span>
            <ul className="space-y-1.5 text-xs text-[#C7B8B0]">
              <li>
                <button
                  onClick={() => onNavigate('telescopes')}
                  className="hover:text-[#FFFFFF] transition-colors cursor-pointer"
                >
                  James Webb Space Telescope (JWST)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('telescopes')}
                  className="hover:text-[#FFFFFF] transition-colors cursor-pointer"
                >
                  Hubble Space Telescope (HST)
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono font-semibold text-[#EA9162] uppercase tracking-wider block">
              EXPLORATION
            </span>
            <ul className="space-y-1.5 text-xs text-[#C7B8B0]">
              <li>
                <button
                  onClick={() => onNavigate('comparison')}
                  className="hover:text-[#FFFFFF] transition-colors cursor-pointer"
                >
                  Telescope Comparison Engine
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('objects')}
                  className="hover:text-[#FFFFFF] transition-colors cursor-pointer"
                >
                  Space Objects Catalog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-[#FFFFFF] transition-colors cursor-pointer"
                >
                  Astronomical Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('3d-explorer')}
                  className="hover:text-[#FFFFFF] transition-colors cursor-pointer"
                >
                  3D Spatial Workspace
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('learn')}
                  className="hover:text-[#FFFFFF] transition-colors cursor-pointer"
                >
                  Electromagnetic Physics
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[rgba(234,145,98,0.15)] flex flex-col sm:flex-row items-center justify-between text-xs text-[#C7B8B0] font-mono gap-4">
          <div>
            © {new Date().getFullYear()} COSMIC LENS — See the Universe Through Different Eyes.
          </div>
          <div className="text-[11px] text-[#9F8D84]">
            NASA / ESA / CSA Public Domain Scientific Astrophotography
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
