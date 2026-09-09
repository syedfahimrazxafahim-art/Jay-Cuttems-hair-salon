import React from 'react';
import {
  Scissors,
  Sparkles,
  HeartHandshake,
  Building2,
  BadgePercent,
  ShieldCheck
} from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data/barbershopData';
import { ThemeMode } from '../types';

interface WhyChooseUsProps {
  theme: ThemeMode;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ theme }) => {
  const isDark = theme === 'dark';

  const getWhyIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Scissors':
        return <Scissors className="w-5 h-5 text-[#E10600]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#E10600]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#E10600]" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-[#E10600]" />;
      case 'BadgePercent':
        return <BadgePercent className="w-5 h-5 text-[#E10600]" />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck className="w-5 h-5 text-[#E10600]" />;
    }
  };

  return (
    <section
      id="why-choose"
      className={`py-20 lg:py-28 relative transition-colors duration-300 ${
        isDark ? 'bg-[#0D0D0D]' : 'bg-[#EFEFEA]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Large Typography */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-[2px] w-6 bg-[#E10600]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E10600]">
              The Standard
            </span>
          </div>

          <h2
            id="why-choose-heading"
            className={`font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-none mb-4 ${
              isDark ? 'text-white' : 'text-[#151515]'
            }`}
          >
            WHY CHOOSE <span className="text-[#E10600]">JAY CUT’EM’S</span>
          </h2>

          <div className="w-24 h-[3px] bg-[#E10600] my-4" />

          <p className={`text-base sm:text-lg font-body ${isDark ? 'text-[#BDBDBD]' : 'text-[#666666]'}`}>
            A dedicated Houston barbershop where personal style, sharp execution, and respectful service define every cut.
          </p>
        </div>

        {/* 6 Benefit Blocks with Simple Icons & Subtle Red Accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_ITEMS.map((item) => (
            <div
              key={item.id}
              id={`why-item-${item.id}`}
              className={`relative rounded-lg p-6 sm:p-7 border transition-all duration-300 group ${
                isDark
                  ? 'bg-[#151515] border-[#222222] hover:border-[#E10600]/80 hover:shadow-[0_0_20px_rgba(225,6,0,0.18)]'
                  : 'bg-white border-[#E8E8E8] hover:border-[#E10600]/80 hover:shadow-lg'
              }`}
            >
              {/* Icon with Subtle Red Accent Frame */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="w-11 h-11 rounded-lg bg-[#080808] border border-[#E10600]/40 flex items-center justify-center shrink-0 group-hover:border-[#E10600] group-hover:shadow-[0_0_10px_rgba(225,6,0,0.3)] transition-all">
                  {getWhyIcon(item.iconName)}
                </div>
                <span className={`text-[10px] uppercase font-bold tracking-widest ${
                  isDark ? 'text-[#888888]' : 'text-[#888888]'
                }`}>
                  {item.tagline}
                </span>
              </div>

              {/* Title with Bold Typography */}
              <h3
                className={`font-heading font-extrabold text-xl sm:text-2xl uppercase tracking-wide mb-2.5 group-hover:text-[#E10600] transition-colors ${
                  isDark ? 'text-white' : 'text-[#151515]'
                }`}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className={`text-sm font-body leading-relaxed ${
                  isDark ? 'text-[#BDBDBD]' : 'text-[#666666]'
                }`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
