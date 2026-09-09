import React, { useState } from 'react';
import {
  Scissors,
  Zap,
  Sparkles,
  Crown,
  Flame,
  Wind,
  ShieldCheck,
  Clock,
  ArrowRight,
  Info
} from 'lucide-react';
import { SERVICES_DATA } from '../data/barbershopData';
import { ServiceItem, ThemeMode } from '../types';

interface ServicesProps {
  theme: ThemeMode;
  onSelectServiceForBooking: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({
  theme,
  onSelectServiceForBooking,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Cut' | 'Beard' | 'Combo' | 'Grooming'>('All');
  const isDark = theme === 'dark';

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scissors':
        return <Scissors className="w-6 h-6 text-[#E10600]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#E10600]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#E10600]" />;
      case 'Crown':
        return <Crown className="w-6 h-6 text-[#E10600]" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-[#E10600]" />;
      case 'Wind':
        return <Wind className="w-6 h-6 text-[#E10600]" />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck className="w-6 h-6 text-[#E10600]" />;
    }
  };

  const filteredServices = selectedFilter === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === selectedFilter);

  return (
    <section
      id="services"
      className={`py-20 lg:py-28 relative transition-colors duration-300 ${
        isDark ? 'bg-[#0D0D0D]' : 'bg-[#EFEFEA]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[2px] w-6 bg-[#E10600]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E10600]">
              Barbering & Grooming Menu
            </span>
            <span className="h-[2px] w-6 bg-[#E10600]" />
          </div>

          <h2
            id="services-heading"
            className={`font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight mb-4 ${
              isDark ? 'text-white' : 'text-[#151515]'
            }`}
          >
            SERVICES & CRAFTSMANSHIP
          </h2>

          <p className={`text-base sm:text-lg font-body ${isDark ? 'text-[#BDBDBD]' : 'text-[#666666]'}`}>
            Select any service below to preselect it in your appointment request. High-precision clippers, straight razor finishes, and clean styling.
          </p>

          {/* Pricing transparency note */}
          <div className={`mt-4 inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border ${
            isDark ? 'bg-[#151515] border-[#151515] text-[#C7C7C7]' : 'bg-white border-[#E8E8E8] text-[#666666]'
          }`}>
            <Info className="w-3.5 h-3.5 text-[#E10600]" />
            <span>Pricing confirmed directly upon service consultation and requested cut specifications.</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {(['All', 'Cut', 'Beard', 'Combo', 'Grooming'] as const).map((cat) => {
            const isActive = selectedFilter === cat;
            return (
              <button
                key={cat}
                id={`filter-service-${cat.toLowerCase()}`}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-[#E10600] text-white shadow-md'
                    : isDark
                      ? 'bg-[#151515] text-[#BDBDBD] hover:text-white hover:bg-[#1E1E1E]'
                      : 'bg-white text-[#151515] hover:text-[#E10600] shadow-sm'
                }`}
              >
                {cat === 'All' ? 'All Services' : cat}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service: ServiceItem) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className={`group relative rounded-lg p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between ${
                isDark
                  ? 'bg-[#151515] border-[#222222] hover:border-[#E10600]/80 hover:shadow-[0_4px_25px_rgba(225,6,0,0.15)]'
                  : 'bg-white border-[#E8E8E8] hover:border-[#E10600]/80 hover:shadow-lg'
              }`}
            >
              {/* Card Header & Icon */}
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded bg-[#080808] border border-[#E10600]/30 group-hover:border-[#E10600] flex items-center justify-center shrink-0 transition-colors">
                    {getServiceIcon(service.iconName)}
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    {service.popular && (
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-[#E10600] text-white">
                        Popular
                      </span>
                    )}
                    <span className={`inline-flex items-center gap-1 text-xs font-semibold ${
                      isDark ? 'text-[#BDBDBD]' : 'text-[#666666]'
                    }`}>
                      <Clock className="w-3 h-3 text-[#E10600]" />
                      {service.duration}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3
                  className={`font-heading font-bold text-xl sm:text-2xl uppercase tracking-wide mb-2.5 group-hover:text-[#E10600] transition-colors ${
                    isDark ? 'text-white' : 'text-[#151515]'
                  }`}
                >
                  {service.name}
                </h3>

                {/* Description */}
                <p className={`text-sm leading-relaxed font-body mb-6 ${
                  isDark ? 'text-[#BDBDBD]' : 'text-[#666666]'
                }`}>
                  {service.description}
                </p>
              </div>

              {/* Card Footer: BOOK THIS SERVICE */}
              <div className="pt-4 border-t border-dashed border-white/10">
                <button
                  id={`book-service-${service.id}`}
                  onClick={() => onSelectServiceForBooking(service.id)}
                  className="w-full py-2.5 px-4 rounded font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-between text-[#E10600] bg-[#E10600]/10 hover:bg-[#E10600] hover:text-white transition-all duration-200 active:scale-98"
                >
                  <span>BOOK THIS SERVICE</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
