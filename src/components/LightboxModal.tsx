import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  isOpen: boolean;
  item: GalleryItem | null;
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  item,
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Keyboard navigation: Escape to close, Left/Right for prev/next
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'ArrowRight') {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Focus close button on open
    setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);

    // Prevent body scrolling while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !item) return null;

  return (
    <div
      id="gallery-lightbox-modal"
      role="dialog"
      aria-modal="true"
      aria-label={`Image details: ${item.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-md"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center justify-center"
      >
        {/* Top Control Bar */}
        <div className="w-full flex items-center justify-between pb-3 text-white border-b border-white/10 mb-3">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#E10600] text-white">
              {item.categoryLabel}
            </span>
            <span className="text-xs text-[#BDBDBD]">
              {currentIndex + 1} of {items.length}
            </span>
          </div>

          <button
            ref={closeBtnRef}
            id="lightbox-close-btn"
            onClick={onClose}
            aria-label="Close image preview (Escape)"
            className="p-2 rounded-full bg-[#151515] hover:bg-[#E10600] text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#E10600]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Image with Frame */}
        <div className="relative w-full max-h-[72vh] flex items-center justify-center overflow-hidden rounded-lg bg-[#080808] border border-[#222222]">
          <img
            src={item.imageUrl}
            alt={item.altText}
            className="max-h-[70vh] w-auto max-w-full object-contain rounded select-none"
          />

          {/* Navigation Arrows */}
          <button
            id="lightbox-prev-btn"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#080808]/80 hover:bg-[#E10600] text-white border border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-[#E10600]"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            id="lightbox-next-btn"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#080808]/80 hover:bg-[#E10600] text-white border border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-[#E10600]"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Caption & Image Description */}
        <div className="w-full mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-left">
          <div>
            <h4 className="font-heading font-bold text-lg uppercase tracking-wide text-white">
              {item.title}
            </h4>
            <p className="text-xs text-[#BDBDBD]">
              {item.altText}
            </p>
          </div>

          <div className="text-[11px] text-[#BDBDBD]/80 italic">
            Press Esc to close • Use ← / → keys to navigate
          </div>
        </div>
      </div>
    </div>
  );
};
