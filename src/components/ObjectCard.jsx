import React from 'react';
import { ArrowRight, Orbit, Layers } from 'lucide-react';

export const ObjectCard = ({ object, isSelected, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(object.id)}
      className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer group transform hover:-translate-y-0.5 ${
        isSelected
          ? 'bg-[#18100C] border-[#EA9162] shadow-[0_0_20px_rgba(234,145,98,0.25)]'
          : 'bg-[#120D0A] border-[rgba(234,145,98,0.20)] hover:border-[#EA9162] hover:shadow-[0_0_15px_rgba(234,145,98,0.15)]'
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <span className="text-xs font-mono text-[#EA9162] uppercase tracking-wider">
            {object.category || object.type}
          </span>
          <h3 className="text-base font-heading font-bold text-[#FFFFFF] group-hover:text-[#F2B08E] transition-colors mt-0.5">
            {object.name}
          </h3>
        </div>
        <span className="text-xs font-mono text-[#9F8D84]">
          {object.distance}
        </span>
      </div>

      <p className="text-xs text-[#C7B8B0] mt-2 line-clamp-2 leading-relaxed">
        {object.description}
      </p>

      <div className="mt-3 pt-2.5 border-t border-[rgba(234,145,98,0.18)] flex items-center justify-between">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[10px] font-mono text-[#9F8D84]">Observed by:</span>
          {object.observedBy?.map((telId) => (
            <span
              key={telId}
              className="text-[10px] font-mono px-1.5 py-0.5 bg-[#080706] text-[#F2B08E] rounded border border-[rgba(234,145,98,0.25)]"
            >
              {telId.toUpperCase()}
            </span>
          ))}
        </div>
        <ArrowRight
          className={`w-3.5 h-3.5 transition-transform duration-300 ${
            isSelected ? 'text-[#EA9162] translate-x-1' : 'text-[#9F8D84] group-hover:text-[#EA9162] group-hover:translate-x-0.5'
          }`}
        />
      </div>
    </div>
  );
};

export default ObjectCard;
