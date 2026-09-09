import React from 'react';
import { Calendar, PhoneCall, ChevronRight, Scissors } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barbershopData';
import { ThemeMode } from '../types';

interface FinalCTAProps {
  theme: ThemeMode;
  onBookClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onBookClick }) => {
  return (
    <section
      id="final-cta"
      className="relative py-24 sm:py-32 overflow-hidden bg-[#080808]"
    >
      {/* Dark Cinematic Barber Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/fzobzdco/image/upload/v1788991866/wdqwdqdscefgrewy46yutrhjrhytuytu.jpg"
          alt="Jay Cut'em's precision cuts and barber atmosphere in Houston"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Deep Black Overlays for High Legibility */}
        <div className="absolute inset-0 bg-[#080808]/88 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]" />
        {/* Controlled Red Glow */}
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#E10600]/15 blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Subtle Barber Icon Badge */}
        <div className="w-12 h-12 rounded-full bg-[#151515] border border-[#E10600]/50 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(225,6,0,0.3)]">
          <Scissors className="w-6 h-6 text-[#E10600]" />
        </div>

        {/* Headline */}
        <h2
          id="final-cta-headline"
          className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-none mb-6"
        >
          {BUSINESS_INFO.finalCtaHeadline}
        </h2>

        {/* Supporting Text */}
        <p
          id="final-cta-subheadline"
          className="text-base sm:text-lg md:text-xl text-[#BDBDBD] font-body max-w-2xl leading-relaxed mb-10 text-balance"
        >
          {BUSINESS_INFO.finalCtaSubheadline}
        </p>

        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
          <button
            id="final-cta-book-btn"
            onClick={onBookClick}
            className="w-full sm:w-auto px-8 py-4 rounded font-heading font-bold text-lg tracking-wider uppercase text-white bg-[#E10600] hover:bg-[#FF2B20] transition-all duration-200 shadow-[0_0_25px_rgba(225,6,0,0.5)] hover:shadow-[0_0_35px_rgba(225,6,0,0.7)] active:scale-95 flex items-center justify-center gap-2 group"
          >
            <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>BOOK YOUR APPOINTMENT</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            id="final-cta-call-btn"
            href={`tel:${BUSINESS_INFO.phoneTel}`}
            className="w-full sm:w-auto px-6 py-4 rounded font-heading font-bold text-base tracking-wider uppercase text-white border border-[#222222] bg-[#151515]/90 hover:border-[#E10600] hover:text-[#E10600] transition-all flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-[#E10600]" />
            <span>CALL {BUSINESS_INFO.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
