import React from 'react';
import { AstronomicalCanvas } from './AstronomicalCanvas.jsx';
import { CosmicButton } from './CosmicButton.jsx';
import { X, Orbit, Layers, ArrowLeftRight } from 'lucide-react';

export const ImageDetailModal = ({
  image,
  onClose,
  onCompareWithTelescope,
  onView3D,
  onViewSketch
}) => {
  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080706]/90 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#0D0A08] border border-[rgba(234,145,98,0.30)] rounded-2xl shadow-2xl overflow-hidden my-8 animate-fadeIn shadow-[0_0_50px_rgba(234,145,98,0.15)]">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 bg-[#120D0A] border-b border-[rgba(234,145,98,0.25)]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#EA9162] uppercase">
              <span>{image.objectType}</span>
              <span className="text-[#9F8D84]">·</span>
              <span>{image.telescopeName}</span>
              <span className="text-[#9F8D84]">·</span>
              <span className="text-[#F2B08E]">{image.wavelengthDetail}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#FFFFFF] mt-0.5">
              {image.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#C7B8B0] hover:text-[#FFFFFF] hover:bg-[#18100C] rounded-lg transition-colors cursor-pointer"
            aria-label="Close image details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-6 space-y-6">
          <div className="h-[380px] sm:h-[460px] w-full rounded-xl overflow-hidden border border-[rgba(234,145,98,0.25)] bg-[#080706]">
            <AstronomicalCanvas
              objectId={image.objectId}
              wavelength={image.wavelength}
              telescopeId={image.telescopeId}
              imageSrc={image.image}
              altText={image.title}
              className="w-full h-full rounded-xl"
            />
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
            <div className="p-3 bg-[#120D0A] rounded-lg border border-[rgba(234,145,98,0.20)]">
              <span className="text-[#9F8D84] block">TARGET OBJECT:</span>
              <span className="text-[#FFFFFF] font-semibold mt-0.5 block">{image.objectName}</span>
            </div>
            <div className="p-3 bg-[#120D0A] rounded-lg border border-[rgba(234,145,98,0.20)]">
              <span className="text-[#9F8D84] block">INSTRUMENT:</span>
              <span className="text-[#EA9162] font-semibold mt-0.5 block truncate">{image.instrument}</span>
            </div>
            <div className="p-3 bg-[#120D0A] rounded-lg border border-[rgba(234,145,98,0.20)]">
              <span className="text-[#9F8D84] block">DISTANCE:</span>
              <span className="text-[#FFFFFF] font-semibold mt-0.5 block">{image.distance}</span>
            </div>
            <div className="p-3 bg-[#120D0A] rounded-lg border border-[rgba(234,145,98,0.20)]">
              <span className="text-[#9F8D84] block">DATE OBSERVED:</span>
              <span className="text-[#F2B08E] font-semibold mt-0.5 block">{image.observationDate}</span>
            </div>
          </div>

          {/* Detailed Explanations */}
          <div className="space-y-5 text-xs leading-relaxed">
            <div className="p-4 bg-[#120D0A] border border-[rgba(234,145,98,0.25)] rounded-xl">
              <h4 className="text-xs font-mono font-semibold text-[#EA9162] uppercase tracking-wider mb-1.5">
                WHAT ARE WE SEEING?
              </h4>
              <p className="text-[#FFFFFF] leading-relaxed">
                {image.scientificExplanation}
              </p>
            </div>

            <div className="p-4 bg-[#120D0A] border border-[rgba(234,145,98,0.25)] rounded-xl">
              <h4 className="text-xs font-mono font-semibold text-[#EA9162] uppercase tracking-wider mb-1.5">
                WHY DOES IT LOOK THIS WAY?
              </h4>
              <p className="text-[#FFFFFF] leading-relaxed">
                {image.whyItLooksThisWay}
              </p>
            </div>

            <div className="p-4 bg-[#120D0A] border border-[rgba(234,145,98,0.25)] rounded-xl">
              <h4 className="text-xs font-mono font-semibold text-[#EA9162] uppercase tracking-wider mb-1.5">
                TELESCOPE & INSTRUMENT CONTEXT
              </h4>
              <p className="text-[#C7B8B0] leading-relaxed">
                {image.telescopeContext}
              </p>
              <div className="mt-2 pt-2 border-t border-[rgba(234,145,98,0.18)] text-[11px] font-mono text-[#9F8D84]">
                Attribution & Credit: {image.credit}
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-2 border-t border-[rgba(234,145,98,0.20)] flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <CosmicButton
                onClick={() => {
                  onClose();
                  onCompareWithTelescope(image.objectId, image.telescopeId);
                }}
                variant="primary"
                size="sm"
                icon={<ArrowLeftRight className="w-3.5 h-3.5" />}
                iconPosition="left"
              >
                Compare Telescopes
              </CosmicButton>

              <CosmicButton
                onClick={() => {
                  onClose();
                  onView3D(image.telescopeId);
                }}
                variant="secondary"
                size="sm"
                icon={<Orbit className="w-3.5 h-3.5" />}
                iconPosition="left"
              >
                View 3D Telescope
              </CosmicButton>

              <CosmicButton
                onClick={() => {
                  onClose();
                  onViewSketch(image.telescopeId);
                }}
                variant="secondary"
                size="sm"
                icon={<Layers className="w-3.5 h-3.5" />}
                iconPosition="left"
              >
                View Scientific Sketch
              </CosmicButton>
            </div>

            <span className="text-[11px] font-mono text-[#9F8D84]">
              Full Res: {image.resolution}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDetailModal;
