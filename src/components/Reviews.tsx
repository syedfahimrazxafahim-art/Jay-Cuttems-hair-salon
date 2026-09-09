import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Quote,
  AlertCircle,
  Star
} from 'lucide-react';
import { REVIEWS_DATA } from '../data/barbershopData';
import { ThemeMode } from '../types';

interface ReviewsProps {
  theme: ThemeMode;
}

export const Reviews: React.FC<ReviewsProps> = ({ theme }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const isDark = theme === 'dark';
  const totalReviews = REVIEWS_DATA.length;

  // Responsiveness: compute visible cards (mobile=1, tablet=2, desktop=3)
  const [cardsPerView, setCardsPerView] = useState<number>(3);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };
    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const maxIndex = Math.max(0, totalReviews - cardsPerView);

  const nextReview = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevReview = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Autoplay with pause conditions:
  // - User paused via toggle
  // - Mouse hover
  // - Focus inside
  // - Tab hidden (document.hidden)
  // - prefers-reduced-motion
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !isPlaying || isHovered) return;

    let intervalId: ReturnType<typeof setInterval> | null = null;

    const handleVisibilityChange = () => {
      if (document.hidden && intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      } else if (!document.hidden && isPlaying && !isHovered) {
        intervalId = setInterval(nextReview, 5000);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    if (!document.hidden) {
      intervalId = setInterval(nextReview, 5000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isPlaying, isHovered, nextReview]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) {
      nextReview();
    } else if (diff < -50) {
      prevReview();
    }
    setTouchStart(null);
  };

  return (
    <section
      id="reviews"
      className={`py-20 lg:py-28 relative transition-colors duration-300 ${
        isDark ? 'bg-[#0D0D0D]' : 'bg-[#EFEFEA]'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[2px] w-6 bg-[#E10600]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E10600]">
                Client Experience
              </span>
            </div>

            <h2
              id="reviews-heading"
              className={`font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight ${
                isDark ? 'text-white' : 'text-[#151515]'
              }`}
            >
              CLIENT FEEDBACK & REVIEWS
            </h2>

            {/* Mandatory Sample Content Disclaimer */}
            <div className="mt-3 flex items-center gap-2 text-xs text-[#E10600] font-semibold tracking-wider">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>SAMPLE REVIEW — PREVIEW CONTENT (Ready for verified client testimonials)</span>
            </div>
          </div>

          {/* Carousel Controls (Prev, Next, Play/Pause) */}
          <div className="flex items-center gap-3">
            {/* Play/Pause Toggle */}
            <button
              id="review-autoplay-toggle"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Pause review autoplay' : 'Play review autoplay'}
              className={`p-2.5 rounded-full border transition-colors flex items-center justify-center ${
                isDark
                  ? 'border-[#222222] bg-[#151515] text-[#C7C7C7] hover:text-white hover:border-[#E10600]'
                  : 'border-[#E8E8E8] bg-white text-[#151515] hover:text-[#E10600] shadow-sm'
              }`}
            >
              {isPlaying ? <Pause className="w-4 h-4 text-[#E10600]" /> : <Play className="w-4 h-4 text-[#E10600]" />}
            </button>

            {/* Prev Button */}
            <button
              id="review-prev-btn"
              onClick={prevReview}
              aria-label="Previous review"
              className={`p-2.5 rounded-full border transition-colors ${
                isDark
                  ? 'border-[#222222] bg-[#151515] text-white hover:border-[#E10600]'
                  : 'border-[#E8E8E8] bg-white text-[#151515] hover:border-[#E10600] shadow-sm'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next Button */}
            <button
              id="review-next-btn"
              onClick={nextReview}
              aria-label="Next review"
              className={`p-2.5 rounded-full border transition-colors ${
                isDark
                  ? 'border-[#222222] bg-[#151515] text-white hover:border-[#E10600]'
                  : 'border-[#E8E8E8] bg-white text-[#151515] hover:border-[#E10600] shadow-sm'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Reviews Track / Slider with Touch Swipe */}
        <div
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {REVIEWS_DATA.map((review) => (
              <div
                key={review.id}
                id={`review-card-${review.id}`}
                className="px-3 shrink-0"
                style={{ width: `${100 / cardsPerView}%` }}
              >
                <div
                  className={`h-full p-6 sm:p-7 rounded-lg border flex flex-col justify-between transition-all ${
                    isDark
                      ? 'bg-[#151515] border-[#222222] hover:border-[#E10600]/60'
                      : 'bg-white border-[#E8E8E8] hover:border-[#E10600]/60 shadow-md'
                  }`}
                >
                  <div>
                    {/* Quotation & Sample Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <Quote className="w-8 h-8 text-[#E10600] shrink-0" />
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="w-4 h-4 fill-[#E10600] text-[#E10600]"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Review Text */}
                    <p
                      className={`text-sm sm:text-base font-body leading-relaxed mb-6 italic ${
                        isDark ? 'text-[#C7C7C7]' : 'text-[#151515]'
                      }`}
                    >
                      “{review.reviewText}”
                    </p>
                  </div>

                  {/* Reviewer Details with Red Accent Line */}
                  <div className="pt-4 border-t border-[#E10600]/20 flex items-center justify-between">
                    <div>
                      <h4
                        className={`font-heading font-bold text-sm uppercase tracking-wide ${
                          isDark ? 'text-white' : 'text-[#151515]'
                        }`}
                      >
                        {review.clientInitials}
                      </h4>
                      <p className="text-xs text-[#E10600] font-semibold">
                        {review.serviceMentioned}
                      </p>
                    </div>

                    <span className="text-[10px] uppercase tracking-wider text-[#BDBDBD]">
                      {review.dateTag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? 'w-8 bg-[#E10600]'
                  : isDark
                    ? 'w-2 bg-[#222222] hover:bg-[#E10600]/50'
                    : 'w-2 bg-[#D1D1D1] hover:bg-[#E10600]/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
