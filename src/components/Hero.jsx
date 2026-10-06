import React from 'react';
import { ArrowRight, Orbit, Compass, Eye } from 'lucide-react';
import { CosmicButton } from './CosmicButton.jsx';
import { StarBurst } from './StarBurst.jsx';

export const Hero = ({
  onExplore,
  onExploreTelescopes,
  onExploreComparison
}) => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-[#080706]">
      {/* Background Star Burst Component with EXACT requested parameters */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <StarBurst
          speed={2.1}
          density={1.2000000000000002}
          starCount={190}
          color="#ea9162"
          centerY={0.45}
          brightness={2}
          flowerIntensity={0.4}
          twinkleSpeed={0.5}
          innerLayerIntensity={2.5}
          fadeHeight={2.8000000000000003}
        />
        {/* Subtle Dark Radial Vignette for Content Readability */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#080706]/40 to-[#080706]/90 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#EA9162] uppercase bg-[#18100C]/90 border border-[rgba(234,145,98,0.30)] px-3.5 py-1.5 rounded-full backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(234,145,98,0.15)]">
          <span>STATIC REACT SPACE OBSERVATORY</span>
          <span className="text-[#9F8D84]">·</span>
          <span>MULTI-WAVELENGTH ASTROPHYSICS</span>
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-heading font-extrabold text-[#FFFFFF] tracking-tight leading-none max-w-4xl text-balance drop-shadow-[0_2px_15px_rgba(234,145,98,0.2)]">
          COSMIC LENS
        </h1>

        <h3 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-heading font-semibold text-[#EA9162] tracking-tight">
          See the Universe Through Different Eyes.
        </h3>

        <p className="mt-4 text-base sm:text-lg text-[#C7B8B0] max-w-2xl leading-relaxed text-balance">
          Explore how James Webb and Hubble observe identical astronomical targets across Infrared, Visible, and Ultraviolet spectra.
        </p>

        {/* Galaxy CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <CosmicButton
            onClick={onExploreComparison}
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
          >
            EXPLORE THE UNIVERSE
          </CosmicButton>

          <CosmicButton
            onClick={onExploreTelescopes}
            variant="secondary"
            size="lg"
            icon={<Orbit className="w-4 h-4" />}
            iconPosition="left"
          >
            EXPLORE TELESCOPES
          </CosmicButton>
        </div>

        {/* Discovery Cards in Star Burst Warm Space Theme */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl text-left">
          <div
            onClick={onExploreComparison}
            className="p-4 bg-[#120D0A]/85 backdrop-blur-md border border-[rgba(234,145,98,0.25)] hover:border-[#EA9162] hover:shadow-[0_0_20px_rgba(234,145,98,0.20)] rounded-xl transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between text-xs font-mono text-[#EA9162] mb-2">
              <span>01. COMPARISON</span>
              <Eye className="w-3.5 h-3.5 text-[#9F8D84] group-hover:text-[#EA9162] transition-colors" />
            </div>
            <h4 className="text-sm font-semibold text-[#F5EDE8] group-hover:text-[#FFD2BE] transition-colors">
              Same Object, Different Eyes
            </h4>
            <p className="text-xs text-[#C7B8B0] mt-1 line-clamp-2">
              Side-by-side split comparison of Hubble visible light vs Webb infrared view.
            </p>
          </div>

          <div
            onClick={onExploreTelescopes}
            className="p-4 bg-[#120D0A]/85 backdrop-blur-md border border-[rgba(234,145,98,0.25)] hover:border-[#EA9162] hover:shadow-[0_0_20px_rgba(234,145,98,0.20)] rounded-xl transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between text-xs font-mono text-[#EA9162] mb-2">
              <span>02. 3D MODELS</span>
              <Orbit className="w-3.5 h-3.5 text-[#9F8D84] group-hover:text-[#EA9162] transition-colors" />
            </div>
            <h4 className="text-sm font-semibold text-[#F5EDE8] group-hover:text-[#FFD2BE] transition-colors">
              3D Telescopes & Custom Models
            </h4>
            <p className="text-xs text-[#C7B8B0] mt-1 line-clamp-2">
              Inspect optics in 3D with interactive parts mode and drop in your own GLB/GLTF models.
            </p>
          </div>

          <div
            onClick={onExplore}
            className="p-4 bg-[#120D0A]/85 backdrop-blur-md border border-[rgba(234,145,98,0.25)] hover:border-[#EA9162] hover:shadow-[0_0_20px_rgba(234,145,98,0.20)] rounded-xl transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between text-xs font-mono text-[#EA9162] mb-2">
              <span>03. SCIENTIFIC DATA</span>
              <Compass className="w-3.5 h-3.5 text-[#9F8D84] group-hover:text-[#EA9162] transition-colors" />
            </div>
            <h4 className="text-sm font-semibold text-[#F5EDE8] group-hover:text-[#FFD2BE] transition-colors">
              Electromagnetic Spectrum
            </h4>
            <p className="text-xs text-[#C7B8B0] mt-1 line-clamp-2">
              Explore photon energies, atmospheric transparency, and astrophysical emission mechanisms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
