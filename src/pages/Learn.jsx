import React, { useState } from 'react';
import { EDUCATIONAL_ARTICLES } from '../data/objects.js';
import { WavelengthSpectrum } from '../components/WavelengthSpectrum.jsx';
import { CosmicButton } from '../components/CosmicButton.jsx';
import { ChevronRight } from 'lucide-react';

export const Learn = ({
  onNavigateToComparison,
  onNavigateToTelescopes
}) => {
  const [selectedArticleId, setSelectedArticleId] = useState(
    EDUCATIONAL_ARTICLES[0].id
  );

  const activeArticle =
    EDUCATIONAL_ARTICLES.find((a) => a.id === selectedArticleId) ||
    EDUCATIONAL_ARTICLES[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[rgba(234,145,98,0.20)] pb-6 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#EA9162] uppercase tracking-wider">
            <span>ASTROPHYSICS & OPTICAL SCIENCE</span>
            <span className="text-[#9F8D84]">·</span>
            <span>EDUCATIONAL HUB</span>
          </div>
          <h2 className="text-3xl font-heading font-bold text-[#FFFFFF] mt-1">
            Understanding the Multi-Wavelength Universe
          </h2>
          <p className="text-sm text-[#C7B8B0] mt-1 max-w-2xl leading-relaxed">
            Explore the physics of electromagnetic radiation, atmospheric absorption windows, and why space observatories are essential to modern cosmology.
          </p>
        </div>

        <CosmicButton
          onClick={onNavigateToComparison}
          variant="primary"
          size="sm"
          icon={<ChevronRight className="w-3.5 h-3.5" />}
          iconPosition="right"
        >
          Test In Comparison Engine
        </CosmicButton>
      </div>

      <WavelengthSpectrum onSelectTelescope={onNavigateToTelescopes} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4 space-y-3">
          <div className="text-xs font-mono uppercase text-[#9F8D84] tracking-wider px-2">
            CHAPTERS & ESSAYS:
          </div>
          {EDUCATIONAL_ARTICLES.map((article, idx) => {
            const isSelected = article.id === activeArticle.id;
            return (
              <div
                key={article.id}
                onClick={() => setSelectedArticleId(article.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer group ${
                  isSelected
                    ? 'bg-[#18100C] border-[#EA9162] shadow-[0_0_15px_rgba(234,145,98,0.20)]'
                    : 'bg-[#0D0A08] border-[rgba(234,145,98,0.20)] hover:border-[rgba(234,145,98,0.40)]'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#EA9162]">
                  <span>0{idx + 1}. {article.category}</span>
                  <span className="text-[#9F8D84]">{article.readTime}</span>
                </div>
                <h3 className="text-sm font-semibold text-[#FFFFFF] group-hover:text-[#FFD2BE] transition-colors mt-1">
                  {article.title}
                </h3>
                <p className="text-xs text-[#C7B8B0] mt-1 line-clamp-2">
                  {article.summary}
                </p>
              </div>
            );
          })}
        </div>

        <div className="lg:col-span-8 bg-[#0D0A08] border border-[rgba(234,145,98,0.25)] rounded-2xl p-6 sm:p-8 space-y-6 shadow-[0_4px_25px_rgba(8,7,6,0.8)]">
          <div className="border-b border-[rgba(234,145,98,0.20)] pb-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#EA9162] uppercase">
              <span>{activeArticle.category}</span>
              <span className="text-[#9F8D84]">·</span>
              <span className="text-[#C7B8B0]">{activeArticle.readTime}</span>
            </div>
            <h3 className="text-2xl font-heading font-bold text-[#FFFFFF] mt-1">
              {activeArticle.title}
            </h3>
            <p className="text-sm font-mono text-[#F2B08E] mt-1">
              {activeArticle.subtitle}
            </p>
          </div>

          <div className="p-4 bg-[#120D0A] border border-[rgba(234,145,98,0.20)] rounded-xl space-y-2">
            <span className="text-xs font-mono font-semibold text-[#EA9162] uppercase">
              KEY PHYSICAL CONCEPTS:
            </span>
            <ul className="space-y-1.5 mt-2">
              {activeArticle.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-[#F5EDE8]">
                  <span className="text-[#EA9162] font-mono mt-0.5">·</span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-sm text-[#F5EDE8] leading-relaxed space-y-4 whitespace-pre-line font-normal">
            {activeArticle.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
