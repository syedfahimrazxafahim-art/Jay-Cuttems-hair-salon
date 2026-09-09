import React from 'react';
import { Calendar, Scissors, Sparkles } from 'lucide-react';
import { BARBERS_DATA } from '../data/barbershopData';
import { BarberItem, ThemeMode } from '../types';

interface BarbersProps {
  theme: ThemeMode;
  onSelectBarberForBooking: (barberId: string) => void;
}

export const Barbers: React.FC<BarbersProps> = ({
  theme,
  onSelectBarberForBooking,
}) => {
  const isDark = theme === 'dark';

  return (
    <section
      id="barbers"
      className={`py-20 lg:py-28 relative transition-colors duration-300 ${
        isDark ? 'bg-[#080808]' : 'bg-[#F7F7F5]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[2px] w-6 bg-[#E10600]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E10600]">
              Houston Craftsmen
            </span>
            <span className="h-[2px] w-6 bg-[#E10600]" />
          </div>

          <h2
            id="barbers-heading"
            className={`font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight mb-4 ${
              isDark ? 'text-white' : 'text-[#151515]'
            }`}
          >
            MEET OUR BARBERS
          </h2>

          <p className={`text-base sm:text-lg font-body ${isDark ? 'text-[#BDBDBD]' : 'text-[#666666]'}`}>
            Select a specialist below to reserve your chair directly. Every barber delivers uncompromised precision, clean lineups, and tailored grooming.
          </p>

          {/* Configurable Notice Badge */}
          <div className={`mt-4 inline-flex items-center gap-2 text-xs px-3.5 py-1.5 rounded-full border ${
            isDark ? 'bg-[#151515] border-[#151515] text-[#C7C7C7]' : 'bg-white border-[#E8E8E8] text-[#666666]'
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-[#E10600]" />
            <span>Configurable roster ready to link exact Jay Cut’em’s barbers, individual specialties, and chair schedules.</span>
          </div>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {BARBERS_DATA.map((barber: BarberItem) => (
            <div
              key={barber.id}
              id={`barber-card-${barber.id}`}
              className={`group relative rounded-lg overflow-hidden border transition-all duration-300 flex flex-col justify-between ${
                isDark
                  ? 'bg-[#151515] border-[#222222] hover:border-[#E10600] hover:shadow-[0_0_25px_rgba(225,6,0,0.35)]'
                  : 'bg-white border-[#E8E8E8] hover:border-[#E10600] hover:shadow-[0_10px_25px_rgba(225,6,0,0.2)]'
              }`}
            >
              {/* Image Container with Slow Cinematic Zoom on Hover */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#0D0D0D]">
                <img
                  src={barber.imageUrl}
                  alt={`Barber portrait of ${barber.name}`}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-[#151515]/30 to-transparent opacity-85 group-hover:opacity-60 transition-opacity duration-300" />

                {/* Barber Chair Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#080808]/90 border border-[#E10600]/50 backdrop-blur-sm shadow-md">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white flex items-center gap-1">
                    <Scissors className="w-3 h-3 text-[#E10600]" />
                    Houston Station
                  </span>
                </div>
              </div>

              {/* Barber Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className={`font-heading font-bold text-lg uppercase tracking-wide mb-1 transition-colors group-hover:text-[#E10600] ${
                      isDark ? 'text-white' : 'text-[#151515]'
                    }`}
                  >
                    {barber.name}
                  </h3>

                  {/* Red Specialty */}
                  <p className="text-xs font-bold uppercase tracking-wider text-[#E10600] mb-2.5">
                    {barber.specialty}
                  </p>

                  {/* Soft Gray Bio */}
                  <p className={`text-xs leading-relaxed font-body mb-5 line-clamp-3 ${
                    isDark ? 'text-[#BDBDBD]' : 'text-[#666666]'
                  }`}>
                    {barber.bio}
                  </p>
                </div>

                {/* Red CTA: BOOK WITH THIS BARBER */}
                <button
                  id={`book-with-barber-${barber.id}`}
                  onClick={() => onSelectBarberForBooking(barber.id)}
                  className="w-full py-2.5 px-3 rounded font-heading font-bold text-xs uppercase tracking-wider text-white bg-[#E10600] hover:bg-[#FF2B20] transition-all duration-200 shadow-sm hover:shadow-[0_0_15px_rgba(225,6,0,0.5)] flex items-center justify-center gap-1.5 active:scale-95"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span className="truncate">BOOK WITH THIS BARBER</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
