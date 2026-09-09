import React, { useState } from 'react';
import {
  Phone,
  Instagram,
  Facebook,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/barbershopData';
import { ThemeMode } from '../types';

interface ContactProps {
  theme: ThemeMode;
}

export const Contact: React.FC<ContactProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const [quickMsg, setQuickMsg] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickMsg.name || !quickMsg.phone) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setQuickMsg({ name: '', phone: '', message: '' });
    }, 4000);
  };

  return (
    <section
      id="contact"
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
              Get in Touch
            </span>
            <span className="h-[2px] w-6 bg-[#E10600]" />
          </div>

          <h2
            id="contact-heading"
            className={`font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight mb-4 ${
              isDark ? 'text-white' : 'text-[#151515]'
            }`}
          >
            CONTACT & SOCIAL MEDIA
          </h2>

          <p className={`text-base sm:text-lg font-body ${isDark ? 'text-[#BDBDBD]' : 'text-[#666666]'}`}>
            Reach out directly by phone or follow our official social channels for cuts, announcements, and urban barber culture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          {/* Business Info Column */}
          <div className="lg:col-span-6 space-y-6">
            <div
              className={`p-8 rounded-xl border transition-all ${
                isDark
                  ? 'bg-[#151515] border-[#222222] shadow-xl'
                  : 'bg-white border-[#E8E8E8] shadow-md'
              }`}
            >
              <h3
                className={`font-heading font-extrabold text-2xl uppercase tracking-wide mb-1 ${
                  isDark ? 'text-white' : 'text-[#151515]'
                }`}
              >
                {BUSINESS_INFO.name}
              </h3>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E10600] mb-6">
                <MapPin className="w-4 h-4" />
                <span>{BUSINESS_INFO.locationFull}</span>
              </div>

              {/* Direct Phone Block */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <div>
                  <p className={`text-xs uppercase font-bold tracking-wider mb-1 ${
                    isDark ? 'text-[#BDBDBD]' : 'text-[#666666]'
                  }`}>
                    Direct Phone Line
                  </p>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneTel}`}
                    className="font-heading font-extrabold text-2xl text-[#E10600] hover:text-[#FF2B20] transition-colors block"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                </div>

                <div className="pt-2">
                  <a
                    id="contact-call-now-btn"
                    href={`tel:${BUSINESS_INFO.phoneTel}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded font-heading font-bold text-sm tracking-wider uppercase text-white bg-[#E10600] hover:bg-[#FF2B20] transition-all shadow-[0_0_15px_rgba(225,6,0,0.4)] active:scale-95"
                  >
                    <Phone className="w-4 h-4" />
                    <span>CALL NOW</span>
                  </a>
                </div>
              </div>

              {/* Social Media Links & Buttons */}
              <div className="pt-8 mt-8 border-t border-white/10 space-y-4">
                <p className={`text-xs uppercase font-bold tracking-wider ${
                  isDark ? 'text-[#BDBDBD]' : 'text-[#666666]'
                }`}>
                  Official Social Channels
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  {/* Instagram Button */}
                  <a
                    id="contact-instagram-btn"
                    href={BUSINESS_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 py-3 px-4 rounded font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border transition-all ${
                      isDark
                        ? 'bg-[#080808] border-[#222222] text-white hover:border-[#E10600] hover:text-[#E10600]'
                        : 'bg-[#F7F7F5] border-[#E8E8E8] text-[#151515] hover:border-[#E10600] hover:text-[#E10600]'
                    }`}
                  >
                    <Instagram className="w-4 h-4 text-[#E10600]" />
                    <span>FOLLOW ON INSTAGRAM</span>
                    <ExternalLink className="w-3 h-3 text-[#BDBDBD]" />
                  </a>

                  {/* Facebook Button */}
                  <a
                    id="contact-facebook-btn"
                    href={BUSINESS_INFO.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 py-3 px-4 rounded font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border transition-all ${
                      isDark
                        ? 'bg-[#080808] border-[#222222] text-white hover:border-[#E10600] hover:text-[#E10600]'
                        : 'bg-[#F7F7F5] border-[#E8E8E8] text-[#151515] hover:border-[#E10600] hover:text-[#E10600]'
                    }`}
                  >
                    <Facebook className="w-4 h-4 text-[#E10600]" />
                    <span>VISIT FACEBOOK</span>
                    <ExternalLink className="w-3 h-3 text-[#BDBDBD]" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Direct Inquiry Column */}
          <div className="lg:col-span-6">
            <div
              className={`p-8 rounded-xl border transition-all ${
                isDark
                  ? 'bg-[#151515] border-[#222222] shadow-xl'
                  : 'bg-white border-[#E8E8E8] shadow-md'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-5 h-5 text-[#E10600]" />
                <h3
                  className={`font-heading font-bold text-xl uppercase tracking-wide ${
                    isDark ? 'text-white' : 'text-[#151515]'
                  }`}
                >
                  Quick Message / Inquiry
                </h3>
              </div>
              <p className={`text-xs font-body mb-6 ${isDark ? 'text-[#BDBDBD]' : 'text-[#666666]'}`}>
                Have a question about a cut or scheduling? Send a direct message and our barbershop will respond via phone or text.
              </p>

              {sent ? (
                <div className="p-6 rounded bg-[#E10600]/10 border border-[#E10600] text-center space-y-2">
                  <CheckCircle className="w-8 h-8 text-[#E10600] mx-auto" />
                  <h4 className="font-heading font-bold text-lg uppercase text-white">
                    Message Sent!
                  </h4>
                  <p className="text-xs text-[#BDBDBD]">
                    Thanks! We have received your inquiry and will connect with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleMessageSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="quick-name"
                      className={`block text-xs uppercase font-bold tracking-wider mb-1.5 ${
                        isDark ? 'text-[#BDBDBD]' : 'text-[#151515]'
                      }`}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="quick-name"
                      value={quickMsg.name}
                      onChange={(e) => setQuickMsg({ ...quickMsg, name: e.target.value })}
                      required
                      placeholder="Enter your name"
                      className={`w-full px-4 py-2.5 rounded text-sm border font-body transition-colors focus:outline-none focus:ring-2 focus:ring-[#E10600] ${
                        isDark
                          ? 'bg-[#080808] border-[#222222] text-white placeholder-[#666666]'
                          : 'bg-[#F7F7F5] border-[#D1D1D1] text-[#151515] placeholder-[#999999]'
                      }`}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="quick-phone"
                      className={`block text-xs uppercase font-bold tracking-wider mb-1.5 ${
                        isDark ? 'text-[#BDBDBD]' : 'text-[#151515]'
                      }`}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="quick-phone"
                      value={quickMsg.phone}
                      onChange={(e) => setQuickMsg({ ...quickMsg, phone: e.target.value })}
                      required
                      placeholder="e.g. 713-555-0199"
                      className={`w-full px-4 py-2.5 rounded text-sm border font-body transition-colors focus:outline-none focus:ring-2 focus:ring-[#E10600] ${
                        isDark
                          ? 'bg-[#080808] border-[#222222] text-white placeholder-[#666666]'
                          : 'bg-[#F7F7F5] border-[#D1D1D1] text-[#151515] placeholder-[#999999]'
                      }`}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="quick-message"
                      className={`block text-xs uppercase font-bold tracking-wider mb-1.5 ${
                        isDark ? 'text-[#BDBDBD]' : 'text-[#151515]'
                      }`}
                    >
                      Message or Question
                    </label>
                    <textarea
                      id="quick-message"
                      rows={3}
                      value={quickMsg.message}
                      onChange={(e) => setQuickMsg({ ...quickMsg, message: e.target.value })}
                      placeholder="Ask about cuts, group bookings, or special accommodations..."
                      className={`w-full px-4 py-2.5 rounded text-sm border font-body transition-colors focus:outline-none focus:ring-2 focus:ring-[#E10600] resize-none ${
                        isDark
                          ? 'bg-[#080808] border-[#222222] text-white placeholder-[#666666]'
                          : 'bg-[#F7F7F5] border-[#D1D1D1] text-[#151515] placeholder-[#999999]'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-send-inquiry-btn"
                    className="w-full py-3 rounded font-heading font-bold text-xs uppercase tracking-wider text-white bg-[#E10600] hover:bg-[#FF2B20] transition-colors flex items-center justify-center gap-2 active:scale-95"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>SEND INQUIRY</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
