import React, { useState } from 'react';
import { OFFICIAL_LOGO_URL } from '../data/barbershopData';

interface BrandLogoProps {
  className?: string;
  isLightMode?: boolean;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "h-10",
  isLightMode = false,
  size = 'md',
  showText = true,
}) => {
  const [imgError, setImgError] = useState(false);

  const dimensionClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14'
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Jay Cut'em's Logo Emblem */}
      <div className={`relative flex items-center justify-center ${dimensionClasses} rounded-lg overflow-hidden bg-[#151515] border border-[#E10600]/40 shadow-sm shrink-0 group-hover:border-[#E10600] group-hover:shadow-[0_0_12px_rgba(225,6,0,0.4)] transition-all duration-300`}>
        {!imgError ? (
          <img
            src={OFFICIAL_LOGO_URL}
            alt="Jay Cut'em's Barbershop Official Logo"
            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            onError={() => setImgError(true)}
            referrerPolicy="no-referrer"
          />
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-[#E10600]"
            aria-hidden="true"
          >
            <path d="M4 4l16 16" />
            <path d="M14 4l6 6" />
            <path d="M4 14l6 6" />
            <circle cx="6" cy="18" r="2" />
            <circle cx="18" cy="6" r="2" />
          </svg>
        )}
        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#E10600] shadow-[0_0_6px_#E10600]" />
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1">
            <span
              className={`font-heading ${
                size === 'lg' ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
              } font-extrabold tracking-wider leading-none uppercase ${
                isLightMode ? 'text-[#151515]' : 'text-white'
              }`}
            >
              JAY CUT’EM’S
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-[10px] tracking-[0.25em] font-bold text-[#E10600] uppercase leading-none">
              BARBERSHOP
            </span>
            <span className="w-1 h-1 rounded-full bg-[#E10600]" />
            <span
              className={`text-[9px] tracking-[0.15em] uppercase font-semibold leading-none ${
                isLightMode ? 'text-[#666666]' : 'text-[#BDBDBD]'
              }`}
            >
              HOUSTON, TX
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

