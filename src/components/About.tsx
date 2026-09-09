import React from 'react';
import { Scissors, CheckCircle, ShieldCheck, Sparkles, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barbershopData';
import { ThemeMode } from '../types';

interface AboutProps {
  theme: ThemeMode;
  onBookClick: () => void;
}

export const About: React.FC<AboutProps> = ({ theme, onBookClick }) => {
  const isDark = theme === 'dark';

  return (
    <section
      id="about"
      className={`py-20 lg:py-28 relative transition-colors duration-300 ${
        isDark ? 'bg-[#080808]' : 'bg-[#F7F7F5]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle Section Label */}
        <div className="flex items-center gap-2 mb-3">
          <span className="h-[2px] w-6 bg-[#E10600]" />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E10600]">
            The Barber Craft
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Dark Editorial Barber Imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-lg overflow-hidden border border-[#E10600]/20 shadow-2xl group">
              <img
                src="https://res.cloudinary.com/fzobzdco/image/upload/v1788991861/1111111111111111111.jpg"
                alt="Jay Cut'em's master barber precision styling in Houston"
                className="w-full h-[420px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-black/30 to-transparent" />

              {/* Floating accent badge on the image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded bg-[#151515]/95 border border-[#E10600]/40 backdrop-blur-md shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden border border-[#E10600] shrink-0 bg-black">
                    <img
                      src="https://res.cloudinary.com/fzobzdco/image/upload/v1788991862/ffffffffbbbbbbbbbbbbbbbbbbbbbssssssssssssssss.jpg"
                      alt="Jay Cut'em's Logo"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <p className="font-heading uppercase text-sm font-bold text-white tracking-wider">
                      {BUSINESS_INFO.name}
                    </p>
                    <p className="text-xs text-[#BDBDBD]">
                      Houston, Texas • Premium Grooming Experience
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle decorative background frame */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-full h-full border border-[#E10600]/25 rounded-lg -z-10" />
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6">
            <h2
              id="about-heading"
              className={`font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight leading-none mb-6 ${
                isDark ? 'text-white' : 'text-[#151515]'
              }`}
            >
              {BUSINESS_INFO.aboutHeading}
            </h2>

            {/* Subtle Red Divider */}
            <div className="w-20 h-[3px] bg-[#E10600] mb-8" />

            {/* Editorial Brand Narrative */}
            <div className="space-y-5 text-base sm:text-lg leading-relaxed font-body">
              <p className={isDark ? 'text-[#C7C7C7]' : 'text-[#666666]'}>
                Located in <strong className={isDark ? 'text-white' : 'text-[#151515]'}>Houston, Texas</strong>,{' '}
                <span className="text-[#E10600] font-semibold">{BUSINESS_INFO.name}</span> is an energetic urban barbershop where modern craft meets timeless barbering standards.
              </p>

              <p className={isDark ? 'text-[#BDBDBD]' : 'text-[#666666]'}>
                We prioritize sharp execution, clean presentation, and a comfortable atmosphere. Whether you need a razor-sharp skin fade, detailed beard sculpting, or a classic hot towel shave, every service is tailored to elevate your personal style.
              </p>
            </div>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              <div
                className={`p-4 rounded border transition-colors ${
                  isDark
                    ? 'bg-[#151515] border-[#151515] hover:border-[#E10600]/40'
                    : 'bg-white border-[#E8E8E8] hover:border-[#E10600]/40 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle className="w-4 h-4 text-[#E10600]" />
                  <h3 className={`font-heading text-sm font-bold tracking-wider uppercase ${
                    isDark ? 'text-white' : 'text-[#151515]'
                  }`}>
                    Clean Craftsmanship
                  </h3>
                </div>
                <p className={`text-xs ${isDark ? 'text-[#BDBDBD]' : 'text-[#666666]'}`}>
                  Clean stations, sanitized tools, and sharp line work on every cut.
                </p>
              </div>

              <div
                className={`p-4 rounded border transition-colors ${
                  isDark
                    ? 'bg-[#151515] border-[#151515] hover:border-[#E10600]/40'
                    : 'bg-white border-[#E8E8E8] hover:border-[#E10600]/40 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#E10600]" />
                  <h3 className={`font-heading text-sm font-bold tracking-wider uppercase ${
                    isDark ? 'text-white' : 'text-[#151515]'
                  }`}>
                    Tailored Style
                  </h3>
                </div>
                <p className={`text-xs ${isDark ? 'text-[#BDBDBD]' : 'text-[#666666]'}`}>
                  Cuts configured around your facial contours and personal preference.
                </p>
              </div>
            </div>

            {/* About CTA */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="about-book-btn"
                onClick={onBookClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded font-heading font-bold text-sm tracking-wider uppercase text-white bg-[#E10600] hover:bg-[#FF2B20] transition-colors shadow-md active:scale-95"
              >
                <span>BOOK YOUR VISIT</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded font-heading font-bold text-sm tracking-wider uppercase border transition-colors ${
                  isDark
                    ? 'border-[#151515] text-[#C7C7C7] hover:text-white hover:border-[#E10600] bg-[#151515]'
                    : 'border-[#E8E8E8] text-[#151515] hover:text-[#E10600] hover:border-[#E10600] bg-white'
                }`}
              >
                <span>FOLLOW @JAYCUTTEMSBARBERSHOP</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
