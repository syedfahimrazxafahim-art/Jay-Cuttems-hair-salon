import React from 'react';
import { BrandLogo } from './BrandLogo';
import { Phone, Instagram, Facebook, MapPin, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barbershopData';
import { ThemeMode } from '../types';

interface FooterProps {
  theme: ThemeMode;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ theme, onNavigate }) => {
  const isDark = theme === 'dark';
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className={`border-t transition-colors duration-300 ${
        isDark
          ? 'bg-[#080808] border-[#151515] text-[#BDBDBD]'
          : 'bg-[#F7F7F5] border-[#E8E8E8] text-[#666666]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo isLightMode={!isDark} />
            <p className="text-xs sm:text-sm font-body leading-relaxed max-w-sm">
              Modern urban premium barbershop based in <strong className={isDark ? 'text-white' : 'text-[#151515]'}>Houston, Texas</strong>. Delivering clean craftsmanship, precision skin fades, and tailored grooming.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#E10600]">
              <MapPin className="w-3.5 h-3.5" />
              <span>{BUSINESS_INFO.locationFull}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-4 space-y-3">
            <p className={`text-xs uppercase font-bold tracking-widest ${
              isDark ? 'text-white' : 'text-[#151515]'
            }`}>
              Quick Navigation
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs uppercase font-semibold">
              <button
                onClick={() => onNavigate('home')}
                className="text-left py-1 hover:text-[#E10600] transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="text-left py-1 hover:text-[#E10600] transition-colors"
              >
                About
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="text-left py-1 hover:text-[#E10600] transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => onNavigate('barbers')}
                className="text-left py-1 hover:text-[#E10600] transition-colors"
              >
                Barbers
              </button>
              <button
                onClick={() => onNavigate('gallery')}
                className="text-left py-1 hover:text-[#E10600] transition-colors"
              >
                Gallery
              </button>
              <button
                onClick={() => onNavigate('reviews')}
                className="text-left py-1 hover:text-[#E10600] transition-colors"
              >
                Reviews
              </button>
              <button
                onClick={() => onNavigate('locations')}
                className="text-left py-1 hover:text-[#E10600] transition-colors"
              >
                Locations
              </button>
              <button
                onClick={() => onNavigate('booking')}
                className="text-left py-1 text-[#E10600] hover:underline transition-colors font-bold"
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Contact & Socials */}
          <div className="lg:col-span-3 space-y-4">
            <p className={`text-xs uppercase font-bold tracking-widest ${
              isDark ? 'text-white' : 'text-[#151515]'
            }`}>
              Contact & Social
            </p>

            <div className="space-y-2 text-xs">
              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="flex items-center gap-2 font-bold hover:text-[#E10600] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#E10600]" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Jay Cut'em's on Instagram"
                  className={`w-9 h-9 rounded flex items-center justify-center border transition-colors ${
                    isDark
                      ? 'bg-[#151515] border-[#222222] hover:border-[#E10600] text-white hover:text-[#E10600]'
                      : 'bg-white border-[#E8E8E8] hover:border-[#E10600] text-[#151515] hover:text-[#E10600] shadow-sm'
                  }`}
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href={BUSINESS_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Jay Cut'em's on Facebook"
                  className={`w-9 h-9 rounded flex items-center justify-center border transition-colors ${
                    isDark
                      ? 'bg-[#151515] border-[#222222] hover:border-[#E10600] text-white hover:text-[#E10600]'
                      : 'bg-white border-[#E8E8E8] hover:border-[#E10600] text-[#151515] hover:text-[#E10600] shadow-sm'
                  }`}
                >
                  <Facebook className="w-4 h-4" />
                </a>

                <button
                  onClick={scrollToTop}
                  aria-label="Scroll back to top"
                  className={`w-9 h-9 rounded ml-auto flex items-center justify-center border transition-colors ${
                    isDark
                      ? 'bg-[#151515] border-[#222222] hover:border-[#E10600] text-white'
                      : 'bg-white border-[#E8E8E8] hover:border-[#E10600] text-[#151515] shadow-sm'
                  }`}
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Verification Line */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>© {currentYear} {BUSINESS_INFO.name}. All rights reserved.</p>
          <p className="text-[#BDBDBD]/70">
            {BUSINESS_INFO.locationFull} • Official Barbershop Web Experience
          </p>
        </div>
      </div>
    </footer>
  );
};
