import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export const ScientificSketch = ({ telescope }) => {
  const [activeNode, setActiveNode] = useState('primary');

  return (
    <div className="bg-[#080706] border border-[rgba(234,145,98,0.22)] rounded-xl p-6 shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-[rgba(234,145,98,0.20)]">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#EA9162] tracking-wider uppercase">
              2D OPTICAL SCHEMATIC & RAY TRACE
            </span>
            <span className="text-[#9F8D84]">·</span>
            <span className="text-[#C7B8B0]">{telescope.name}</span>
          </div>
          <h3 className="text-lg font-heading font-semibold text-[#FFFFFF] mt-0.5">
            Scientific Ray Path & Structural Architecture
          </h3>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#C7B8B0]">
          <span className="inline-block w-2.5 h-0.5 bg-[#EA9162]" /> Orange: Optical Light Path
          <span className="inline-block w-2.5 h-0.5 bg-[#FFFFFF] ml-2" /> White: Mechanical Structure
        </div>
      </div>

      {/* Interactive Blueprint Vector Diagram */}
      <div className="relative mt-6 w-full flex flex-col lg:flex-row gap-6 items-center justify-between">
        <div className="w-full lg:w-2/3 bg-[#0D0A08] border border-[rgba(234,145,98,0.25)] rounded-lg p-4 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, #EA9162 1px, transparent 1px), linear-gradient(to bottom, #EA9162 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />

          {telescope.id === 'jwst' ? (
            <svg
              viewBox="0 0 760 380"
              className="w-full h-auto select-none"
              style={{ maxHeight: '380px' }}
            >
              <defs>
                <marker id="orange-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L6,3 z" fill="#EA9162" />
                </marker>
              </defs>

              <g stroke="#EA9162" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.85">
                <line x1="40" y1="90" x2="340" y2="130" markerEnd="url(#orange-arrow)" />
                <line x1="40" y1="270" x2="340" y2="230" markerEnd="url(#orange-arrow)" />
                <text x="60" y="75" fill="#F2B08E" fontSize="12" fontFamily="JetBrains Mono">
                  INCOMING INFRARED RADIATION (0.6 - 28.5 μm)
                </text>
              </g>

              {/* Sunshield */}
              <g
                onClick={() => setActiveNode('sunshield')}
                className="cursor-pointer group"
              >
                <path
                  d="M 120 340 L 420 310 L 680 340 L 420 360 Z"
                  fill="rgba(58, 28, 14, 0.45)"
                  stroke={activeNode === 'sunshield' ? '#FFD2BE' : '#EA9162'}
                  strokeWidth={activeNode === 'sunshield' ? '2.5' : '1.5'}
                />
                <line x1="120" y1="345" x2="680" y2="345" stroke="#C7B8B0" strokeWidth="1" />
                <line x1="120" y1="350" x2="680" y2="350" stroke="#C7B8B0" strokeWidth="1" />
                <text x="420" y="375" fill="#C7B8B0" fontSize="11" textAnchor="middle" fontFamily="JetBrains Mono">
                  5-LAYER KAPTON SUNSHIELD (ΔT ~300°C)
                </text>
              </g>

              {/* Primary Mirror */}
              <g
                onClick={() => setActiveNode('primary')}
                className="cursor-pointer group"
              >
                <path
                  d="M 370 70 Q 350 180 370 290"
                  fill="none"
                  stroke={activeNode === 'primary' ? '#FFD2BE' : '#EA9162'}
                  strokeWidth={activeNode === 'primary' ? '4' : '2.5'}
                />
                <circle cx="360" cy="180" r="14" fill="#18100C" stroke="#EA9162" strokeWidth="1.5" />
                <text x="385" y="100" fill="#FFD2BE" fontSize="12" fontWeight="600" fontFamily="JetBrains Mono">
                  PRIMARY MIRROR (M1) · 6.5 m
                </text>
                <text x="385" y="118" fill="#C7B8B0" fontSize="11" fontFamily="JetBrains Mono">
                  18 Beryllium Hexagons coated in Gold
                </text>
              </g>

              {/* Secondary Mirror */}
              <g
                onClick={() => setActiveNode('secondary')}
                className="cursor-pointer group"
              >
                <line x1="360" y1="80" x2="160" y2="180" stroke="#F5EDE8" strokeWidth="1.5" />
                <line x1="360" y1="280" x2="160" y2="180" stroke="#F5EDE8" strokeWidth="1.5" />
                <circle
                  cx="160"
                  cy="180"
                  r="12"
                  fill="#18100C"
                  stroke={activeNode === 'secondary' ? '#FFD2BE' : '#EA9162'}
                  strokeWidth="2.5"
                />
                <text x="70" y="170" fill="#F2B08E" fontSize="12" fontFamily="JetBrains Mono">
                  SECONDARY MIRROR (M2)
                </text>
                <text x="85" y="188" fill="#C7B8B0" fontSize="10" fontFamily="JetBrains Mono">
                  0.74 m Convex
                </text>
              </g>

              {/* Reflected rays */}
              <g stroke="#EA9162" strokeWidth="1.5">
                <line x1="360" y1="120" x2="160" y2="180" />
                <line x1="360" y1="240" x2="160" y2="180" />
                <line x1="160" y1="180" x2="440" y2="180" strokeDasharray="3 3" markerEnd="url(#orange-arrow)" />
              </g>

              {/* ISIM Instruments */}
              <g
                onClick={() => setActiveNode('instruments')}
                className="cursor-pointer group"
              >
                <rect
                  x="430"
                  y="130"
                  width="110"
                  height="100"
                  fill="#120D0A"
                  stroke={activeNode === 'instruments' ? '#FFD2BE' : 'rgba(234,145,98,0.30)'}
                  strokeWidth="2"
                  rx="6"
                />
                <text x="485" y="160" fill="#FFFFFF" fontSize="12" fontWeight="600" textAnchor="middle" fontFamily="JetBrains Mono">
                  ISIM MODULE
                </text>
                <text x="485" y="180" fill="#EA9162" fontSize="11" textAnchor="middle" fontFamily="JetBrains Mono">
                  NIRCam · MIRI
                </text>
                <text x="485" y="198" fill="#C7B8B0" fontSize="10" textAnchor="middle" fontFamily="JetBrains Mono">
                  NIRSpec · FGS
                </text>
              </g>

              <line x1="420" y1="20" x2="420" y2="300" stroke="#EA9162" strokeWidth="1" strokeDasharray="6 4" opacity="0.4" />
              <text x="440" y="45" fill="#F2B08E" fontSize="11" fontFamily="JetBrains Mono">
                COLD CRYOGENIC ZONE (&lt; 40 K / -233°C)
              </text>
              <text x="140" y="325" fill="#FFD2BE" fontSize="11" fontFamily="JetBrains Mono">
                WARM SUN-FACING ZONE (+85°C)
              </text>
            </svg>
          ) : (
            <svg
              viewBox="0 0 760 360"
              className="w-full h-auto select-none"
              style={{ maxHeight: '360px' }}
            >
              <defs>
                <marker id="orange-arrow-2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L6,3 z" fill="#EA9162" />
                </marker>
              </defs>

              <rect x="180" y="80" width="380" height="200" fill="none" stroke="#F5EDE8" strokeWidth="2" rx="8" />
              <line x1="180" y1="80" x2="140" y2="60" stroke="#EA9162" strokeWidth="2" />
              <text x="200" y="70" fill="#F2B08E" fontSize="12" fontFamily="JetBrains Mono">
                FORWARD BAFFLE & LIGHT SHIELD
              </text>

              <g stroke="#EA9162" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.8">
                <line x1="60" y1="110" x2="520" y2="110" markerEnd="url(#orange-arrow-2)" />
                <line x1="60" y1="250" x2="520" y2="250" markerEnd="url(#orange-arrow-2)" />
              </g>

              <g onClick={() => setActiveNode('primary')} className="cursor-pointer">
                <path
                  d="M 520 90 Q 500 180 520 270"
                  fill="none"
                  stroke={activeNode === 'primary' ? '#FFD2BE' : '#EA9162'}
                  strokeWidth="4"
                />
                <circle cx="510" cy="180" r="14" fill="#18100C" stroke="#EA9162" strokeWidth="1.5" />
                <text x="440" y="65" fill="#EA9162" fontSize="12" fontFamily="JetBrains Mono">
                  2.4 m PRIMARY MIRROR (f/24)
                </text>
              </g>

              <g onClick={() => setActiveNode('secondary')} className="cursor-pointer">
                <circle cx="240" cy="180" r="12" fill="#18100C" stroke="#F2B08E" strokeWidth="2" />
                <text x="210" y="150" fill="#F2B08E" fontSize="11" fontFamily="JetBrains Mono">
                  SECONDARY (0.3 m)
                </text>
              </g>

              <line x1="520" y1="110" x2="240" y2="180" stroke="#EA9162" strokeWidth="1.5" />
              <line x1="520" y1="250" x2="240" y2="180" stroke="#EA9162" strokeWidth="1.5" />
              <line x1="240" y1="180" x2="600" y2="180" stroke="#EA9162" strokeWidth="1.5" strokeDasharray="2 2" />

              <g onClick={() => setActiveNode('instruments')} className="cursor-pointer">
                <rect x="560" y="110" width="120" height="140" fill="#18100C" stroke="rgba(234,145,98,0.30)" strokeWidth="2" rx="4" />
                <text x="620" y="140" fill="#FFFFFF" fontSize="12" textAnchor="middle" fontFamily="JetBrains Mono">
                  AFT SHROUD
                </text>
                <text x="620" y="165" fill="#EA9162" fontSize="11" textAnchor="middle" fontFamily="JetBrains Mono">
                  WFC3 · ACS
                </text>
                <text x="620" y="185" fill="#C7B8B0" fontSize="10" textAnchor="middle" fontFamily="JetBrains Mono">
                  COS · STIS
                </text>
              </g>
            </svg>
          )}
        </div>

        {/* Technical Explanatory Callout Column */}
        <div className="w-full lg:w-1/3 flex flex-col gap-3">
          <div className="text-xs font-mono text-[#9F8D84] uppercase tracking-wider mb-1">
            OPTICAL TRAIN EXPLANATION
          </div>

          <div
            onClick={() => setActiveNode('primary')}
            className={`p-3.5 rounded-lg border transition-colors cursor-pointer ${
              activeNode === 'primary'
                ? 'bg-[#18100C] border-[#EA9162] shadow-md shadow-[#EA9162]/20'
                : 'bg-[#120D0A] border-[rgba(234,145,98,0.20)] hover:border-[#EA9162]/50'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-[#EA9162]">01. PRIMARY MIRROR (M1)</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C7B8B0]" />
            </div>
            <p className="text-xs text-[#C7B8B0] mt-1.5 leading-relaxed">
              Captures faint photons across the collecting aperture ({telescope.mirrorSize}) and concentrates them toward the secondary mirror.
            </p>
          </div>

          <div
            onClick={() => setActiveNode('secondary')}
            className={`p-3.5 rounded-lg border transition-colors cursor-pointer ${
              activeNode === 'secondary'
                ? 'bg-[#18100C] border-[#EA9162] shadow-md shadow-[#EA9162]/20'
                : 'bg-[#120D0A] border-[rgba(234,145,98,0.20)] hover:border-[#EA9162]/50'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-[#EA9162]">02. SECONDARY REFLECTOR (M2)</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C7B8B0]" />
            </div>
            <p className="text-xs text-[#C7B8B0] mt-1.5 leading-relaxed">
              Convex reflector at the tripod apex folds the optical beam, extending the effective focal length and directing light back through the central aperture.
            </p>
          </div>

          <div
            onClick={() => setActiveNode('instruments')}
            className={`p-3.5 rounded-lg border transition-colors cursor-pointer ${
              activeNode === 'instruments'
                ? 'bg-[#18100C] border-[#EA9162] shadow-md shadow-[#EA9162]/20'
                : 'bg-[#120D0A] border-[rgba(234,145,98,0.20)] hover:border-[#EA9162]/50'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-[#EA9162]">03. FOCAL PLANE & SENSORS</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C7B8B0]" />
            </div>
            <p className="text-xs text-[#C7B8B0] mt-1.5 leading-relaxed">
              Fine steering mirrors deliver focused wavefronts to the science instruments ({telescope.instruments.map(i => i.name).join(', ')}) for imaging and high-resolution spectroscopy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScientificSketch;
