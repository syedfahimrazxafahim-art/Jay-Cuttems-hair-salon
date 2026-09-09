import React, { useState } from 'react';
import { Maximize2, Sparkles, Filter } from 'lucide-react';
import { GALLERY_DATA } from '../data/barbershopData';
import { GalleryItem, ThemeMode } from '../types';
import { LightboxModal } from './LightboxModal';

interface GalleryProps {
  theme: ThemeMode;
}

export const Gallery: React.FC<GalleryProps> = ({ theme }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const isDark = theme === 'dark';

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'cuts', label: 'Fresh Haircuts' },
    { id: 'beards', label: 'Beard Transformations' },
    { id: 'fades', label: 'Barber Work & Fades' },
    { id: 'studio', label: 'Shop Interior & Tools' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => {
        if (activeCategory === 'cuts') return item.category === 'cuts';
        if (activeCategory === 'beards') return item.category === 'beards';
        if (activeCategory === 'fades') return item.category === 'fades';
        if (activeCategory === 'studio') return item.category === 'studio';
        return true;
      });

  const handleOpenLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = () => {
    setSelectedImageIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <section
      id="gallery"
      className={`py-20 lg:py-28 relative transition-colors duration-300 ${
        isDark ? 'bg-[#080808]' : 'bg-[#F7F7F5]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[2px] w-6 bg-[#E10600]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E10600]">
              Visual Showcase
            </span>
            <span className="h-[2px] w-6 bg-[#E10600]" />
          </div>

          <h2
            id="gallery-heading"
            className={`font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight mb-4 ${
              isDark ? 'text-white' : 'text-[#151515]'
            }`}
          >
            PRECISION CRAFT GALLERY
          </h2>

          <p className={`text-base sm:text-lg font-body ${isDark ? 'text-[#BDBDBD]' : 'text-[#666666]'}`}>
            A visual showcase of contemporary barbering: fresh skin fades, crisp lineups, beard architecture, and studio craftsmanship.
          </p>

          {/* Configurable Showcase Transparency Notice */}
          <div className={`mt-4 inline-flex items-center gap-2 text-xs px-3.5 py-1.5 rounded-full border ${
            isDark ? 'bg-[#151515] border-[#151515] text-[#C7C7C7]' : 'bg-white border-[#E8E8E8] text-[#666666]'
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-[#E10600]" />
            <span>Curated gallery structure configurable to feature Jay Cut’em’s client cuts and studio photography.</span>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`gallery-filter-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-[#E10600] text-white shadow-md'
                    : isDark
                      ? 'bg-[#151515] text-[#BDBDBD] hover:text-white hover:bg-[#1E1E1E]'
                      : 'bg-white text-[#151515] hover:text-[#E10600] shadow-sm'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Editorial Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredItems.map((item: GalleryItem, index: number) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => handleOpenLightbox(index)}
              className={`group relative rounded-lg overflow-hidden border cursor-pointer transition-all duration-300 ${
                isDark
                  ? 'bg-[#151515] border-[#222222] hover:border-[#E10600]'
                  : 'bg-white border-[#E8E8E8] hover:border-[#E10600] shadow-md'
              }`}
            >
              {/* Image with Gentle Zoom */}
              <div className="relative aspect-square sm:aspect-[4/5] overflow-hidden bg-[#0D0D0D]">
                <img
                  src={item.imageUrl}
                  alt={item.altText}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Gradient and Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                {/* Expand Icon */}
                <div className="absolute top-3 right-3 p-2 rounded bg-black/60 border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-1 group-hover:translate-y-0">
                  <Maximize2 className="w-4 h-4 text-[#E10600]" />
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  <span className="inline-block px-2 py-0.5 rounded text-[9px] font-extrabold uppercase tracking-widest bg-[#E10600] text-white mb-1.5">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-heading font-bold text-base uppercase text-white tracking-wide leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        item={filteredItems[selectedImageIndex] || null}
        items={filteredItems}
        currentIndex={selectedImageIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};
