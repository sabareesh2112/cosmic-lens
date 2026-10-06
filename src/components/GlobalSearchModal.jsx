import React, { useState, useEffect, useRef } from 'react';
import { TELESCOPES } from '../data/telescopes.js';
import { SPACE_OBJECTS, GALLERY_IMAGES, EDUCATIONAL_ARTICLES } from '../data/objects.js';
import { Search, X, Telescope, Compass, Image, BookOpen, ArrowRight } from 'lucide-react';

export const GlobalSearchModal = ({
  isOpen,
  onClose,
  onNavigateToResult
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();
  const results = [];

  if (q.length > 0) {
    TELESCOPES.forEach((tel) => {
      if (
        tel.name.toLowerCase().includes(q) ||
        tel.fullName.toLowerCase().includes(q) ||
        tel.primaryWavelength.toLowerCase().includes(q) ||
        tel.description.toLowerCase().includes(q)
      ) {
        results.push({
          id: tel.id,
          type: 'telescope',
          title: tel.fullName,
          subtitle: `${tel.primaryWavelength} · Orbit: ${tel.location}`,
          description: tel.primaryGoal,
          category: 'Space Telescope',
          linkTarget: { page: 'telescopes', id: tel.id }
        });
      }
    });

    SPACE_OBJECTS.forEach((obj) => {
      if (
        obj.name.toLowerCase().includes(q) ||
        obj.typeDisplay.toLowerCase().includes(q) ||
        obj.description.toLowerCase().includes(q)
      ) {
        results.push({
          id: obj.id,
          type: 'object',
          title: obj.name,
          subtitle: `${obj.typeDisplay} · Distance: ${obj.distance}`,
          description: obj.description,
          category: 'Celestial Object',
          linkTarget: { page: 'objects', id: obj.id }
        });
      }
    });

    GALLERY_IMAGES.forEach((img) => {
      if (
        img.title.toLowerCase().includes(q) ||
        img.objectName.toLowerCase().includes(q) ||
        img.telescopeName.toLowerCase().includes(q) ||
        img.wavelengthDetail.toLowerCase().includes(q)
      ) {
        results.push({
          id: img.id,
          type: 'image',
          title: img.title,
          subtitle: `${img.telescopeName} · ${img.wavelengthDetail}`,
          description: img.whyItLooksThisWay,
          category: 'Observational Image',
          linkTarget: { page: 'gallery', id: img.id }
        });
      }
    });

    EDUCATIONAL_ARTICLES.forEach((art) => {
      if (
        art.title.toLowerCase().includes(q) ||
        art.subtitle.toLowerCase().includes(q) ||
        art.summary.toLowerCase().includes(q)
      ) {
        results.push({
          id: art.id,
          type: 'article',
          title: art.title,
          subtitle: art.subtitle,
          description: art.summary,
          category: 'Science Essay',
          linkTarget: { page: 'learn', id: art.id }
        });
      }
    });
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case 'telescope':
        return <Telescope className="w-4 h-4 text-[#EA9162]" />;
      case 'object':
        return <Compass className="w-4 h-4 text-[#F2B08E]" />;
      case 'image':
        return <Image className="w-4 h-4 text-[#FFD2BE]" />;
      case 'article':
        return <BookOpen className="w-4 h-4 text-[#EA9162]" />;
      default:
        return <Search className="w-4 h-4 text-[#C7B8B0]" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-20 bg-[#080706]/88 backdrop-blur-md">
      <div className="w-full max-w-2xl bg-[#0D0A08] border border-[rgba(234,145,98,0.30)] rounded-2xl shadow-2xl overflow-hidden animate-fadeIn shadow-[0_0_50px_rgba(234,145,98,0.15)]">
        <div className="flex items-center px-4 py-3.5 bg-[#120D0A] border-b border-[rgba(234,145,98,0.25)] gap-3">
          <Search className="w-5 h-5 text-[#EA9162]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search JWST, Hubble, galaxies, nebulae, infrared, visible..."
            className="flex-1 bg-transparent text-sm text-[#FFFFFF] placeholder-[#9F8D84] focus:outline-none font-mono"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-[#C7B8B0] hover:text-[#FFFFFF] text-xs font-mono cursor-pointer"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 text-[#C7B8B0] hover:text-[#FFFFFF] rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-[460px] overflow-y-auto p-4 space-y-2">
          {q.length === 0 ? (
            <div className="py-6 text-center space-y-3">
              <span className="text-xs font-mono text-[#9F8D84] uppercase tracking-wider block">
                POPULAR SEARCH TOPICS
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {['James Webb', 'Hubble', 'Pillars of Creation', 'Andromeda Galaxy', 'Whirlpool M51', 'Carina Nebula', 'Jupiter Auroras', 'Infrared', 'WASP-96b'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 text-xs font-mono text-[#F2B08E] bg-[#120D0A] hover:bg-[#18100C] border border-[rgba(234,145,98,0.25)] hover:border-[#EA9162] rounded-lg transition-colors cursor-pointer shadow-[0_0_10px_rgba(234,145,98,0.08)]"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center text-xs font-mono text-[#9F8D84]">
              No astronomical entities matched "{query}".
            </div>
          ) : (
            results.map((res) => (
              <div
                key={`${res.type}-${res.id}`}
                onClick={() => {
                  onClose();
                  onNavigateToResult(res.linkTarget.page, res.linkTarget.id);
                }}
                className="p-3 bg-[#120D0A] hover:bg-[#18100C] border border-[rgba(234,145,98,0.20)] hover:border-[#EA9162] rounded-xl transition-all cursor-pointer group flex items-start justify-between gap-3 shadow-sm hover:shadow-[0_0_15px_rgba(234,145,98,0.15)]"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#0D0A08] rounded-lg border border-[rgba(234,145,98,0.25)] mt-0.5">
                    {getTypeIcon(res.type)}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#EA9162] uppercase">
                      {res.category}
                    </span>
                    <h4 className="text-sm font-semibold text-[#FFFFFF] group-hover:text-[#F2B08E] transition-colors">
                      {res.title}
                    </h4>
                    <p className="text-xs font-mono text-[#C7B8B0] mt-0.5">
                      {res.subtitle}
                    </p>
                    <p className="text-xs text-[#9F8D84] mt-1 line-clamp-1">
                      {res.description}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#9F8D84] group-hover:text-[#EA9162] group-hover:translate-x-1 transition-all mt-3 shrink-0" />
              </div>
            ))
          )}
        </div>

        <div className="px-4 py-2.5 bg-[#120D0A]/80 border-t border-[rgba(234,145,98,0.20)] text-[11px] font-mono text-[#9F8D84] flex items-center justify-between">
          <span>Search spans Telescopes, Objects, Images & Articles</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
};

export default GlobalSearchModal;
