import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Barbers } from './components/Barbers';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { Locations } from './components/Locations';
import { Booking } from './components/Booking';
import { Contact } from './components/Contact';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ThemeMode } from './types';

export default function App() {
  // Theme state: default to 'dark' as strictly instructed
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('jaycuttems_theme');
      if (saved === 'light' || saved === 'dark') return saved;
    }
    return 'dark';
  });

  const [activeSection, setActiveSection] = useState<string>('home');
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>();
  const [preselectedBarberId, setPreselectedBarberId] = useState<string | undefined>();

  // Synchronize <html> element class and persistence with 0.3-0.5s transition
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    localStorage.setItem('jaycuttems_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Scroll spy to update active section in navbar
  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'services',
      'barbers',
      'gallery',
      'reviews',
      'locations',
      'booking',
      'contact'
    ];

    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      const navOffset = 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop - navOffset;
          if (scrollY >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
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

  const handleBookNowClick = () => {
    scrollToSection('booking');
  };

  const handleViewServicesClick = () => {
    scrollToSection('services');
  };

  const handleSelectServiceForBooking = (serviceId: string) => {
    setPreselectedServiceId(serviceId);
    scrollToSection('booking');
  };

  const handleSelectBarberForBooking = (barberId: string) => {
    setPreselectedBarberId(barberId);
    scrollToSection('booking');
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === 'dark' ? 'bg-[#080808] text-white' : 'bg-[#F7F7F5] text-[#151515]'
      }`}
    >
      {/* Sticky Top Navbar */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onBookClick={handleBookNowClick}
        activeSection={activeSection}
      />

      {/* Main Page Landmark */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero
          theme={theme}
          onBookClick={handleBookNowClick}
          onViewServicesClick={handleViewServicesClick}
        />

        {/* About Section */}
        <About
          theme={theme}
          onBookClick={handleBookNowClick}
        />

        {/* Services & Pricing Section */}
        <Services
          theme={theme}
          onSelectServiceForBooking={handleSelectServiceForBooking}
        />

        {/* Barbers Team Section */}
        <Barbers
          theme={theme}
          onSelectBarberForBooking={handleSelectBarberForBooking}
        />

        {/* Why Choose Us Section */}
        <WhyChooseUs
          theme={theme}
        />

        {/* Gallery Section with Lightbox */}
        <Gallery
          theme={theme}
        />

        {/* Reviews Section with Slider */}
        <Reviews
          theme={theme}
        />

        {/* Locations Section */}
        <Locations
          theme={theme}
          onBookClick={handleBookNowClick}
        />

        {/* Appointment Booking Section */}
        <Booking
          theme={theme}
          preselectedServiceId={preselectedServiceId}
          preselectedBarberId={preselectedBarberId}
        />

        {/* Contact & Social Section */}
        <Contact
          theme={theme}
        />

        {/* Final Booking CTA */}
        <FinalCTA
          theme={theme}
          onBookClick={handleBookNowClick}
        />
      </main>

      {/* Footer */}
      <Footer
        theme={theme}
        onNavigate={scrollToSection}
      />
    </div>
  );
}
