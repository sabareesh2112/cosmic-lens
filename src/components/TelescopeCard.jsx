import React from 'react';
import { CosmicButton } from './CosmicButton.jsx';
import { Orbit, ArrowRight, Eye } from 'lucide-react';

export const TelescopeCard = ({ telescope, isSelected, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(telescope.id)}
      className={`relative w-full rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden group transform hover:-translate-y-1 ${
        isSelected
          ? 'bg-[#18100C] border-[#EA9162] shadow-[0_0_25px_rgba(234,145,98,0.30)]'
          : 'bg-[#120D0A] border-[rgba(234,145,98,0.22)] hover:border-[#EA9162] hover:shadow-[0_0_20px_rgba(234,145,98,0.18)]'
      }`}
    >
      {/* Telescope Header Graphic / Image Banner */}
      <div className="relative h-28 w-full bg-[#080706] overflow-hidden border-b border-[rgba(234,145,98,0.20)]">
        {/* Abstract Technical Blueprint / Space Pattern */}
        <div
          className="absolute inset-0 opacity-40 group-hover:opacity-75 group-hover:scale-110 transition-all duration-500 ease-out"
          style={{
            backgroundImage:
              'radial-gradient(circle at 70% 30%, rgba(234, 145, 98, 0.3) 0%, rgba(18, 13, 10, 0.8) 60%), linear-gradient(to right, rgba(8, 7, 6, 0.95), rgba(18, 13, 10, 0.6))',
          }}
        />

        {/* Orbit Line decoration in Orange */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <svg className="w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
            <path
              d="M -20 80 Q 100 20 220 50"
              fill="none"
              stroke="#EA9162"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
          </svg>
        </div>

        {/* Status Pill & Agency */}
        <div className="absolute top-2.5 left-3 right-3 flex items-center justify-between z-10">
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#080706]/90 border border-[rgba(234,145,98,0.30)] text-[#F2B08E]">
            {telescope.agency}
          </span>
          <span
            className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
              telescope.status === 'Active'
                ? 'text-[#FFD2BE] border-[rgba(234,145,98,0.40)] bg-[#EA9162]/15'
                : 'text-[#9F8D84] border-[rgba(234,145,98,0.20)] bg-[#080706]'
            }`}
          >
            {telescope.status}
          </span>
        </div>

        {/* Wavelength Badge */}
        <div className="absolute bottom-2.5 left-3 z-10">
          <span className="text-xs font-mono text-[#FFFFFF] font-semibold bg-[#18100C]/90 px-2 py-0.5 rounded border border-[rgba(234,145,98,0.40)] flex items-center gap-1 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EA9162] animate-pulse shadow-[0_0_6px_#EA9162]" />
            {telescope.wavelength || telescope.primaryWavelength.split(' ')[0]}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 space-y-2">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-[11px] font-mono text-[#EA9162] uppercase tracking-wider block">
              {telescope.shortName}
            </span>
            <h3 className="text-base font-heading font-bold text-[#FFFFFF] group-hover:text-[#F2B08E] transition-colors mt-0.5">
              {telescope.name}
            </h3>
          </div>
          <span className="text-xs font-mono text-[#9F8D84]">
            {telescope.launchYear}
          </span>
        </div>

        <p className="text-xs text-[#C7B8B0] line-clamp-2 leading-relaxed">
          {telescope.description}
        </p>

        {/* Mission Specs row */}
        <div className="pt-2 border-t border-[rgba(234,145,98,0.18)] flex items-center justify-between text-[11px] font-mono text-[#C7B8B0]">
          <span>Mirror: <strong className="text-[#FFFFFF]">{telescope.mirrorSize?.split(' ')[0] || 'Aperture'}</strong></span>
          <span className="truncate max-w-[120px]">{telescope.location?.split('(')[0] || 'Orbit'}</span>
        </div>

        {/* Explore Button */}
        <div className="pt-2 flex items-center justify-between">
          <CosmicButton
            onClick={(e) => {
              e.stopPropagation();
              onSelect(telescope.id);
            }}
            variant={isSelected ? 'primary' : 'outline'}
            size="sm"
            icon={<ArrowRight className="w-3.5 h-3.5" />}
            iconPosition="right"
            className="w-full text-xs"
          >
            Explore {telescope.shortName}
          </CosmicButton>
        </div>
      </div>
    </div>
  );
};

export default TelescopeCard;
