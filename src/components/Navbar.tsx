import React, { useState, useEffect } from 'react';
import { FOOTPRINTS_CONFIG } from '../data/footprintsConfig';
import { Menu, X, ArrowUpRight, Calendar } from 'lucide-react';

interface NavbarProps {
  onRegisterClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRegisterClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Story', href: '#story' },
    { label: 'Alumni', href: '#alumni' },
    { label: 'Mentorship', href: '#mentorship' },
    { label: 'Highlights', href: '#highlights' },
    { label: 'Event Details', href: '#details' },
    { label: 'FAQs', href: '#faqs' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080808]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-white tracking-tight shrink-0 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227]"
        >
          <span className="font-editorial text-2xl font-bold tracking-wider text-white group-hover:text-[#E8D9A8] transition-colors">
            SHALOM <span className="text-[#C9A227] italic font-normal">FOOTPRINTS</span>
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#A1A1AA]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="whitespace-nowrap shrink-0 hover:text-[#FAFAFA] transition-colors duration-200 relative py-1 focus:outline-none focus-visible:text-[#C9A227]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <div className="hidden xl:flex items-center gap-1.5 text-xs text-[#A1A1AA] font-mono tabular-nums">
            <Calendar className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>14 NOV 2026</span>
          </div>
          <button
            onClick={onRegisterClick}
            className="font-btn px-5 py-2 text-xs font-semibold tracking-wider uppercase text-[#080808] bg-[#C9A227] hover:bg-[#E8D9A8] active:bg-[#B38D1B] rounded transition-all duration-200 whitespace-nowrap shrink-0 shadow-sm hover:shadow-[0_0_15px_rgba(201,162,39,0.35)] flex items-center gap-1.5 cursor-pointer"
          >
            <span>REGISTER NOW</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-3">
          <button
            onClick={onRegisterClick}
            className="font-btn px-3 py-1.5 text-xs font-semibold tracking-wide uppercase text-[#080808] bg-[#C9A227] rounded"
          >
            REGISTER
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#A1A1AA] hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227]"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0F0F11]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#D4D4D8]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#C9A227] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
              <span className="text-xs text-[#71717A] font-mono">EVENT DATE: 14 NOVEMBER 2026</span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRegisterClick();
                }}
                className="w-full font-btn py-3 text-center text-xs font-semibold tracking-wider uppercase text-[#080808] bg-[#C9A227] rounded shadow-md"
              >
                REGISTER FOR EVENT
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
