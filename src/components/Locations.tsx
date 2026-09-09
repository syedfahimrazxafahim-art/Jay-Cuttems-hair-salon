import React from 'react';
import { MapPin, Phone, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, LOCATIONS_DATA } from '../data/barbershopData';
import { ThemeMode } from '../types';

interface LocationsProps {
  theme: ThemeMode;
  onBookClick: () => void;
}

export const Locations: React.FC<LocationsProps> = ({ theme, onBookClick }) => {
  const isDark = theme === 'dark';

  return (
    <section
      id="locations"
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
              Barbershop Headquarters
            </span>
            <span className="h-[2px] w-6 bg-[#E10600]" />
          </div>

          <h2
            id="locations-heading"
            className={`font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight mb-4 ${
              isDark ? 'text-white' : 'text-[#151515]'
            }`}
          >
            OUR LOCATIONS
          </h2>

          <p className={`text-base sm:text-lg font-body ${isDark ? 'text-[#BDBDBD]' : 'text-[#666666]'}`}>
            Serving clients throughout the Houston metropolitan area. Contact or book directly for your next visit.
          </p>
        </div>

        {/* Location Card Grid (Structured for Future Expansion Without Redesign) */}
        <div className="max-w-3xl mx-auto">
          {LOCATIONS_DATA.map((loc) => (
            <div
              key={loc.id}
              id={`location-card-${loc.id}`}
              className={`rounded-xl p-8 sm:p-10 border transition-all duration-300 ${
                isDark
                  ? 'bg-[#151515] border-[#222222] hover:border-[#E10600]/80 shadow-2xl'
                  : 'bg-white border-[#E8E8E8] hover:border-[#E10600]/80 shadow-xl'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#080808] border border-[#E10600] flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[#E10600]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#E10600] text-white">
                        Primary Location
                      </span>
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-[#BDBDBD]">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#E10600]" /> Confirmed
                      </span>
                    </div>
                    <h3
                      className={`font-heading font-extrabold text-2xl sm:text-3xl uppercase tracking-wide ${
                        isDark ? 'text-white' : 'text-[#151515]'
                      }`}
                    >
                      {BUSINESS_INFO.name} — {loc.city}, {loc.state}
                    </h3>
                    <p className={`text-xs mt-1 font-body ${isDark ? 'text-[#BDBDBD]' : 'text-[#666666]'}`}>
                      {loc.regionDescription}
                    </p>
                  </div>
                </div>

                {/* Primary Call Action */}
                <a
                  id="locations-call-btn"
                  href={`tel:${BUSINESS_INFO.phoneTel}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded font-heading font-bold text-sm tracking-wider uppercase text-white bg-[#E10600] hover:bg-[#FF2B20] transition-all shadow-md active:scale-95 shrink-0"
                >
                  <Phone className="w-4 h-4" />
                  <span>CALL {loc.phone}</span>
                </a>
              </div>

              {/* Location Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 text-sm font-body">
                <div>
                  <h4 className={`text-xs uppercase font-bold tracking-wider mb-1 ${
                    isDark ? 'text-[#BDBDBD]' : 'text-[#666666]'
                  }`}>
                    Service Category
                  </h4>
                  <p className={`font-semibold ${isDark ? 'text-white' : 'text-[#151515]'}`}>
                    {BUSINESS_INFO.primaryService} & Modern Grooming Studio
                  </p>
                </div>

                <div>
                  <h4 className={`text-xs uppercase font-bold tracking-wider mb-1 ${
                    isDark ? 'text-[#BDBDBD]' : 'text-[#666666]'
                  }`}>
                    Booking & Availability
                  </h4>
                  <p className={`font-semibold ${isDark ? 'text-white' : 'text-[#151515]'}`}>
                    Online Appointment Requests & Phone Reservations
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 pt-6 border-t border-white/10">
                <button
                  id="locations-book-appointment-btn"
                  onClick={onBookClick}
                  className="w-full sm:w-auto px-6 py-3 rounded font-heading font-bold text-xs uppercase tracking-wider text-white bg-[#E10600] hover:bg-[#FF2B20] transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>REQUEST APPOINTMENT AT THIS LOCATION</span>
                </button>

                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full sm:w-auto px-5 py-3 rounded font-heading font-bold text-xs uppercase tracking-wider border transition-colors flex items-center justify-center gap-2 ${
                    isDark
                      ? 'border-[#222222] text-[#BDBDBD] hover:text-white hover:border-[#E10600] bg-[#080808]'
                      : 'border-[#E8E8E8] text-[#151515] hover:text-[#E10600] hover:border-[#E10600] bg-white'
                  }`}
                >
                  <span>VIEW UPDATES ON INSTAGRAM</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}

          {/* Future expansion notice */}
          <div className="mt-6 text-center text-xs text-[#BDBDBD]">
            <p>Future locations and studio branches in the Greater Houston region will be announced via official channels.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
