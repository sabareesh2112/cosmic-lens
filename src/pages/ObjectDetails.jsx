import React from 'react';
import { SPACE_OBJECTS } from '../data/objects.js';
import { ComparisonViewer } from '../components/ComparisonViewer.jsx';
import { ArrowLeft } from 'lucide-react';

export const ObjectDetails = ({
  objectId = 'pillars-of-creation',
  onBack,
  onNavigateToTelescope
}) => {
  const object =
    SPACE_OBJECTS.find((o) => o.id === objectId) || SPACE_OBJECTS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-xs font-mono text-[#EA9162] hover:text-[#F2B08E] transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Objects Catalog</span>
      </button>

      <div className="bg-[#0D0A08] border border-[rgba(234,145,98,0.25)] rounded-2xl p-6 sm:p-7 shadow-[0_4px_25px_rgba(8,7,6,0.8)]">
        <span className="text-xs font-mono text-[#EA9162] uppercase tracking-wider font-semibold">
          {object.typeDisplay} · {object.constellation}
        </span>
        <h2 className="text-2xl font-heading font-bold text-[#FFFFFF] mt-0.5">
          {object.name}
        </h2>
        <p className="text-sm text-[#C7B8B0] mt-2 leading-relaxed">
          {object.description}
        </p>
      </div>

      <ComparisonViewer
        object={object}
        onSelectTelescope={onNavigateToTelescope}
      />
    </div>
  );
};

export default ObjectDetails;
