import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Sun, Moon, Menu, X, Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barbershopData';
import { ThemeMode } from '../types';

interface NavbarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  onBookClick: () => void;
  activeSection: string;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'barbers', label: 'Barbers' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'locations', label: 'Locations' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  onBookClick,
  activeSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isDark
            ? scrolled
              ? 'bg-[#080808]/95 backdrop-blur-md border-b border-[#151515]/90 shadow-2xl'
              : 'bg-[#080808] border-b border-[#151515]/50'
            : scrolled
              ? 'bg-[#F7F7F5]/95 backdrop-blur-md border-b border-[#E8E8E8] shadow-md'
              : 'bg-[#F7F7F5] border-b border-[#E8E8E8]/70'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              id="navbar-brand-button"
              onClick={() => scrollToSection('home')}
              className="flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E10600] rounded py-1 group"
              aria-label="Jay Cut'em's Barbershop Home"
            >
              <BrandLogo isLightMode={!isDark} />
            </button>

            {/* Desktop Navigation Links */}
            <nav id="desktop-nav" aria-label="Main Navigation" className="hidden xl:flex items-center space-x-1 lg:space-x-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-link-${item.id}`}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-3 py-2 text-xs 2xl:text-sm font-semibold uppercase tracking-wider transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E10600] rounded ${
                      isActive
                        ? 'text-[#E10600]'
                        : isDark
                          ? 'text-[#BDBDBD] hover:text-[#E10600]'
                          : 'text-[#151515] hover:text-[#E10600]'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#E10600] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Action CTAs + Theme Toggle */}
            <div className="hidden md:flex items-center space-x-3">
              {/* Quick Call */}
              <a
                id="navbar-call-btn"
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className={`flex items-center gap-1.5 px-3 py-2 rounded text-xs font-semibold tracking-wide border transition-all ${
                  isDark
                    ? 'border-[#151515] hover:border-[#E10600]/60 text-[#BDBDBD] hover:text-white bg-[#151515]/60'
                    : 'border-[#E8E8E8] hover:border-[#E10600]/60 text-[#151515] hover:text-[#E10600] bg-white'
                }`}
                title="Call Jay Cut'em's Barbershop"
              >
                <Phone className="w-3.5 h-3.5 text-[#E10600]" />
                <span className="hidden lg:inline">{BUSINESS_INFO.phoneDisplay}</span>
                <span className="lg:hidden">Call</span>
              </a>

              {/* BOOK NOW CTA */}
              <button
                id="navbar-book-now-cta"
                onClick={onBookClick}
                className="relative inline-flex items-center justify-center px-5 py-2.5 rounded font-heading font-bold text-sm tracking-wider uppercase text-white bg-[#E10600] hover:bg-[#FF2B20] transition-all duration-200 shadow-[0_0_15px_rgba(225,6,0,0.35)] hover:shadow-[0_0_22px_rgba(225,6,0,0.6)] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E10600]"
              >
                <Calendar className="w-4 h-4 mr-1.5" />
                BOOK NOW
              </button>

              {/* Theme Toggle Button */}
              <button
                id="theme-toggle-desktop"
                onClick={onToggleTheme}
                aria-label={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
                title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
                className={`p-2.5 rounded-md border transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E10600] ${
                  isDark
                    ? 'border-[#151515] text-[#C7C7C7] hover:text-white hover:border-[#E10600] bg-[#151515]'
                    : 'border-[#E8E8E8] text-[#151515] hover:text-[#E10600] hover:border-[#E10600] bg-white shadow-sm'
                }`}
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-[#FF2B20]" aria-hidden="true" />
                ) : (
                  <Moon className="w-4 h-4 text-[#151515]" aria-hidden="true" />
                )}
              </button>
            </div>

            {/* Mobile Menu & Theme Toggle Trigger */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                id="theme-toggle-mobile-header"
                onClick={onToggleTheme}
                aria-label={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
                className={`p-2 rounded border focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E10600] ${
                  isDark
                    ? 'border-[#151515] text-[#C7C7C7] bg-[#151515]'
                    : 'border-[#E8E8E8] text-[#151515] bg-white'
                }`}
              >
                {isDark ? <Sun className="w-4 h-4 text-[#FF2B20]" /> : <Moon className="w-4 h-4 text-[#151515]" />}
              </button>

              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
                className={`p-2.5 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E10600] ${
                  isDark
                    ? 'bg-[#151515] text-white border border-[#151515]'
                    : 'bg-white text-[#151515] border border-[#E8E8E8]'
                }`}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full Screen Navigation Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-overlay"
          className={`fixed inset-0 z-40 pt-24 pb-8 px-6 flex flex-col justify-between overflow-y-auto transition-all ${
            isDark ? 'bg-[#080808]/98 text-white' : 'bg-[#F7F7F5]/98 text-[#151515]'
          }`}
        >
          <div className="space-y-3">
            <div className="pb-4 border-b border-[#E10600]/20">
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#E10600]">
                Navigation Menu
              </p>
            </div>

            <div className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-${item.id}`}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left py-3 px-3 rounded font-heading text-xl font-bold tracking-wider uppercase transition-colors flex items-center justify-between ${
                      isActive
                        ? 'text-[#E10600] bg-[#E10600]/10'
                        : isDark
                          ? 'text-white hover:text-[#E10600]'
                          : 'text-[#151515] hover:text-[#E10600]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#E10600]" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-[#E10600]/20 space-y-3">
            <button
              id="mobile-nav-book-cta"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-3.5 rounded font-heading font-bold text-base tracking-wider uppercase text-white bg-[#E10600] shadow-[0_0_15px_rgba(225,6,0,0.5)] flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              BOOK NOW
            </button>

            <a
              id="mobile-nav-call-btn"
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              className={`w-full py-3 rounded font-semibold text-sm tracking-wider uppercase flex items-center justify-center gap-2 border ${
                isDark
                  ? 'border-[#151515] bg-[#151515] text-white hover:border-[#E10600]'
                  : 'border-[#E8E8E8] bg-white text-[#151515] hover:border-[#E10600]'
              }`}
            >
              <Phone className="w-4 h-4 text-[#E10600]" />
              CALL {BUSINESS_INFO.phoneDisplay}
            </a>

            <div className="flex items-center justify-between pt-2 px-1 text-xs">
              <span className={isDark ? 'text-[#BDBDBD]' : 'text-[#666666]'}>
                Theme Preference:
              </span>
              <button
                id="mobile-theme-toggle-footer"
                onClick={onToggleTheme}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#E10600]/40 font-semibold uppercase tracking-wider text-xs text-[#E10600]"
              >
                {isDark ? (
                  <>
                    <Sun className="w-3.5 h-3.5" /> Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5" /> Dark Mode
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
