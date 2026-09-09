import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, ChevronRight, Phone, MapPin, Sparkles, Clock } from 'lucide-react';
import { BUSINESS_INFO, OFFICIAL_LOGO_URL } from '../data/barbershopData';
import { ThemeMode } from '../types';

interface HeroProps {
  theme: ThemeMode;
  onBookClick: () => void;
  onViewServicesClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  theme,
  onBookClick,
  onViewServicesClick,
}) => {
  const isDark = theme === 'dark';
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.22);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[94vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Image with Dark Cinematic Barber Overlay and Subtle Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          style={{ transform: `translate3d(0, ${offsetY}px, 0) scale(1.05)` }}
          className="w-full h-full will-change-transform"
        >
          <img
            src="https://res.cloudinary.com/fzobzdco/image/upload/v1788991863/fsfewfwefsssss.jpg"
            alt="Jay Cut'em's barbershop interior atmosphere and styling chairs in Houston"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Cinematic dark multi-stop gradient overlay for crisp legibility */}
        <div
          className={`absolute inset-0 transition-colors duration-500 ${
            isDark
              ? 'bg-gradient-to-t from-[#080808] via-[#080808]/88 to-[#080808]/75'
              : 'bg-gradient-to-t from-[#F7F7F5] via-[#080808]/80 to-[#080808]/75'
          }`}
        />

        {/* Subtle red ambient glow accents */}
        <div className="absolute -top-10 -right-10 w-96 h-96 rounded-full bg-[#E10600]/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-[#E10600]/10 blur-3xl pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
      >
        {/* Official Jay Cut'em's Logo & Distinction Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#151515]/95 border border-[#E10600]/50 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(225,6,0,0.25)] hover:border-[#E10600] transition-all">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-[#E10600]/70 shrink-0">
            <img
              src={OFFICIAL_LOGO_URL}
              alt="Jay Cut'em's Logo"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex items-center gap-2 text-left">
            <MapPin className="w-3.5 h-3.5 text-[#E10600]" />
            <span className="text-xs sm:text-sm font-heading font-bold tracking-widest uppercase text-white">
              {BUSINESS_INFO.locationFull}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#BDBDBD]">
              {BUSINESS_INFO.primaryService}
            </span>
          </div>
        </div>

        {/* Hero Headline: YOUR STYLE. YOUR CUT. YOUR CONFIDENCE. */}
        <h1
          id="hero-headline"
          className="font-heading font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.92] text-white max-w-4xl"
        >
          YOUR STYLE. <br />
          <span className="text-[#E10600] drop-shadow-[0_0_30px_rgba(225,6,0,0.55)]">
            YOUR CUT.
          </span>{' '}
          <br className="sm:hidden" />
          YOUR CONFIDENCE.
        </h1>

        {/* Signature Barber-Shop Inspired Animated Red Accent Divider */}
        <div className="flex items-center justify-center gap-3 my-6 w-full max-w-xs">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-[#E10600]" />
          <div className="w-2.5 h-2.5 rotate-45 bg-[#E10600] shadow-[0_0_8px_#E10600]" />
          <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-[#E10600]" />
        </div>

        {/* Supporting Text */}
        <p
          id="hero-subheadline"
          className="text-base sm:text-lg md:text-xl text-[#D1D1D1] font-body max-w-2xl font-normal leading-relaxed text-balance mb-8"
        >
          {BUSINESS_INFO.heroSubheadline}
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
          {/* Primary CTA: BOOK NOW */}
          <button
            id="hero-book-now-cta"
            onClick={onBookClick}
            className="w-full sm:w-auto px-8 py-4 rounded font-heading font-bold text-lg tracking-wider uppercase text-white bg-[#E10600] hover:bg-[#FF2B20] transition-all duration-300 shadow-[0_0_24px_rgba(225,6,0,0.5)] hover:shadow-[0_0_35px_rgba(225,6,0,0.8)] hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 group"
          >
            <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>BOOK NOW</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary CTA: OUR SERVICES */}
          <button
            id="hero-view-services-cta"
            onClick={onViewServicesClick}
            className="w-full sm:w-auto px-8 py-4 rounded font-heading font-bold text-lg tracking-wider uppercase text-white border-2 border-white/80 hover:border-[#E10600] hover:text-[#E10600] bg-black/40 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
          >
            <span>OUR SERVICES</span>
          </button>
        </div>

        {/* Quick Contact & Shop Feature Bar */}
        <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left w-full max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#151515] border border-[#E10600]/40 flex items-center justify-center shrink-0 shadow-sm">
              <Phone className="w-4 h-4 text-[#E10600]" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#BDBDBD] font-semibold">
                Direct Line
              </p>
              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="text-xs sm:text-sm font-bold text-white hover:text-[#E10600] transition-colors"
              >
                {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#151515] border border-[#E10600]/40 flex items-center justify-center shrink-0 shadow-sm">
              <Clock className="w-4 h-4 text-[#E10600]" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#BDBDBD] font-semibold">
                Business Hours
              </p>
              <p className="text-xs sm:text-sm font-bold text-white">
                Mon - Sat: 9AM - 7PM
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#151515] border border-[#E10600]/40 flex items-center justify-center shrink-0 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#E10600]" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#BDBDBD] font-semibold">
                Craftsmanship
              </p>
              <p className="text-xs sm:text-sm font-bold text-white">
                Master Urban Cuts
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
