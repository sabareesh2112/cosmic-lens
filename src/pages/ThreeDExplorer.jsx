import React, { useState } from 'react';
import { TELESCOPES } from '../data/telescopes.js';
import { SPACE_OBJECTS } from '../data/objects.js';
import { Telescope3DViewer } from '../components/Telescope3DViewer.jsx';
import { ScientificSketch } from '../components/ScientificSketch.jsx';
import { Box, Layers, Upload, Compass } from 'lucide-react';

export const ThreeDExplorer = ({
  onNavigateToComparison
}) => {
  const [targetType, setTargetType] = useState('telescope');
  const [selectedId, setSelectedId] = useState('jwst');
  const [viewMode, setViewMode] = useState('3d');
  const [selectedPartId, setSelectedPartId] = useState(null);

  const activeTelescope =
    TELESCOPES.find((t) => t.id === selectedId) || TELESCOPES[0];

  const activeObject =
    SPACE_OBJECTS.find((o) => o.id === selectedId) || SPACE_OBJECTS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[rgba(234,145,98,0.20)] pb-6 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#EA9162] uppercase tracking-wider">
            <span>INTERACTIVE 3D CAD & SPATIAL STAGE</span>
            <span className="text-[#9F8D84]">·</span>
            <span>THREE.JS & REACT THREE FIBER</span>
          </div>
          <h2 className="text-3xl font-heading font-bold text-[#FFFFFF] mt-1">
            3D Spatial Explorer
          </h2>
          <p className="text-sm text-[#C7B8B0] mt-1 max-w-2xl leading-relaxed">
            Inspect astronomical telescopes and structures with full 360° orbital navigation, multi-source studio illumination, parts inspection mode, and custom GLB model import.
          </p>
        </div>

        <div className="flex items-center bg-[#0D0A08] border border-[rgba(234,145,98,0.25)] rounded-xl p-1">
          <button
            onClick={() => setViewMode('3d')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono rounded-lg transition-colors cursor-pointer ${
              viewMode === '3d'
                ? 'bg-[#18100C] text-[#EA9162] font-semibold border border-[rgba(234,145,98,0.35)] shadow-[0_0_10px_rgba(234,145,98,0.2)]'
                : 'text-[#C7B8B0] hover:text-white'
            }`}
          >
            <Box className="w-3.5 h-3.5" /> 3D Viewport
          </button>
          <button
            onClick={() => setViewMode('2d')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono rounded-lg transition-colors cursor-pointer ${
              viewMode === '2d'
                ? 'bg-[#18100C] text-[#EA9162] font-semibold border border-[rgba(234,145,98,0.35)] shadow-[0_0_10px_rgba(234,145,98,0.2)]'
                : 'text-[#C7B8B0] hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" /> 2D Scientific Blueprint
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 bg-[#0D0A08] border border-[rgba(234,145,98,0.20)] p-3.5 rounded-2xl shadow-[0_4px_20px_rgba(8,7,6,0.8)]">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-[#9F8D84] uppercase">MODEL TYPE:</span>
          <div className="flex items-center bg-[#120D0A] border border-[rgba(234,145,98,0.25)] rounded-xl p-0.5">
            <button
              onClick={() => {
                setTargetType('telescope');
                setSelectedId('jwst');
              }}
              className={`px-3 py-1 text-xs font-mono rounded-lg transition-colors cursor-pointer ${
                targetType === 'telescope'
                  ? 'bg-[#18100C] text-[#EA9162] font-semibold border border-[rgba(234,145,98,0.30)]'
                  : 'text-[#C7B8B0] hover:text-white'
              }`}
            >
              Space Telescopes
            </button>
            <button
              onClick={() => {
                setTargetType('object');
                setSelectedId('pillars-of-creation');
              }}
              className={`px-3 py-1 text-xs font-mono rounded-lg transition-colors cursor-pointer ${
                targetType === 'object'
                  ? 'bg-[#18100C] text-[#EA9162] font-semibold border border-[rgba(234,145,98,0.30)]'
                  : 'text-[#C7B8B0] hover:text-white'
              }`}
            >
              Space Objects
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-[#9F8D84] uppercase">TARGET:</span>
          {targetType === 'telescope' ? (
            <select
              value={selectedId}
              onChange={(e) => {
                setSelectedId(e.target.value);
                setSelectedPartId(null);
              }}
              className="bg-[#120D0A] border border-[rgba(234,145,98,0.30)] text-xs font-mono text-[#EA9162] rounded-xl px-3 py-1.5 focus:outline-none focus:border-[#EA9162]"
            >
              {TELESCOPES.map((t) => (
                <option key={t.id} value={t.id} className="bg-[#0D0A08] text-[#F5EDE8]">
                  {t.fullName}
                </option>
              ))}
            </select>
          ) : (
            <select
              value={selectedId}
              onChange={(e) => setSelectedId(e.target.value)}
              className="bg-[#120D0A] border border-[rgba(234,145,98,0.30)] text-xs font-mono text-[#F2B08E] rounded-xl px-3 py-1.5 focus:outline-none focus:border-[#EA9162]"
            >
              {SPACE_OBJECTS.map((o) => (
                <option key={o.id} value={o.id} className="bg-[#0D0A08] text-[#F5EDE8]">
                  {o.name} ({o.typeDisplay.split(' ')[0]})
                </option>
              ))}
            </select>
          )}
        </div>
      </div>

      {viewMode === '3d' ? (
        <Telescope3DViewer
          telescopeId={activeTelescope.id}
          telescopeName={targetType === 'telescope' ? activeTelescope.name : activeObject.name}
          modelUrl={activeTelescope.modelFile}
          parts={targetType === 'telescope' ? activeTelescope.parts : []}
          selectedPartId={selectedPartId}
          onSelectPart={setSelectedPartId}
        />
      ) : (
        <ScientificSketch telescope={activeTelescope} />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#0D0A08] border border-[rgba(234,145,98,0.25)] rounded-2xl p-6 shadow-[0_4px_20px_rgba(8,7,6,0.8)]">
          <div className="flex items-center gap-2 text-xs font-mono text-[#EA9162] uppercase font-semibold">
            <Upload className="w-4 h-4" />
            <span>HOW TO LOAD YOUR 3D MODELS</span>
          </div>
          <p className="text-xs text-[#F5EDE8] mt-2 leading-relaxed">
            The Cosmic Lens 3D Engine accepts standard <strong>GLB</strong> and <strong>GLTF</strong> model files.
          </p>
          <div className="mt-3 space-y-2.5 text-xs text-[#C7B8B0] font-mono">
            <div className="p-3 bg-[#120D0A] rounded-xl border border-[rgba(234,145,98,0.20)]">
              <strong className="text-[#EA9162]">Method 1: Interactive Upload</strong>
              <p className="text-[11px] text-[#C7B8B0] mt-0.5">Click the "Import Model" button in the 3D Viewer header bar to load any GLB/GLTF file directly into memory.</p>
            </div>
            <div className="p-3 bg-[#120D0A] rounded-xl border border-[rgba(234,145,98,0.20)]">
              <strong className="text-[#EA9162]">Method 2: Drop into File Tree</strong>
              <p className="text-[11px] text-[#C7B8B0] mt-0.5">Place your files into <code className="text-[#EA9162]">public/models/</code> with filenames matching <code className="text-[#EA9162]">jwst.glb</code> or <code className="text-[#EA9162]">hubble.glb</code>.</p>
            </div>
          </div>
        </div>

        <div className="bg-[#0D0A08] border border-[rgba(234,145,98,0.25)] rounded-2xl p-6 shadow-[0_4px_20px_rgba(8,7,6,0.8)]">
          <div className="flex items-center gap-2 text-xs font-mono text-[#EA9162] uppercase font-semibold">
            <Compass className="w-4 h-4" />
            <span>3D NAVIGATION SHORTCUTS</span>
          </div>
          <div className="mt-3 space-y-2 text-xs font-mono text-[#C7B8B0]">
            <div className="flex justify-between border-b border-[rgba(234,145,98,0.15)] pb-1.5">
              <span>Left Click + Drag:</span>
              <span className="text-[#FFFFFF]">Orbit / Rotate Angle</span>
            </div>
            <div className="flex justify-between border-b border-[rgba(234,145,98,0.15)] pb-1.5">
              <span>Scroll Wheel / Pinch:</span>
              <span className="text-[#FFFFFF]">Smooth Optical Zoom</span>
            </div>
            <div className="flex justify-between border-b border-[rgba(234,145,98,0.15)] pb-1.5">
              <span>Right Click + Drag:</span>
              <span className="text-[#FFFFFF]">Camera Pan</span>
            </div>
            <div className="flex justify-between">
              <span>Lighting Presets:</span>
              <span className="text-[#F2B08E]">Studio · Sunlit · Wireframe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeDExplorer;
