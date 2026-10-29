import React from 'react';
import { FOOTPRINTS_CONFIG } from '../data/footprintsConfig';
import { ArrowUpRight, Compass, Heart } from 'lucide-react';

interface FooterProps {
  onRegisterClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRegisterClick }) => {
  return (
    <footer className="bg-[#050505] text-[#A1A1AA] pt-20 pb-12 relative overflow-hidden border-t border-white/[0.08]">
      {/* Top thin antique-gold divider */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#C9A227]/70 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/[0.06]">
          
          {/* Brand & Mission (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-2">
              <span className="font-editorial text-2xl sm:text-3xl font-bold tracking-wider text-white">
                SHALOM <span className="text-[#C9A227] italic font-normal">FOOTPRINTS</span>
              </span>
            </div>

            <p className="text-sm text-[#A1A1AA] max-w-sm leading-relaxed font-light">
              An alumni mentorship and guidance initiative hosted by {FOOTPRINTS_CONFIG.brand.school}. Bringing experience and ambition together on 14 November 2026.
            </p>

            <div className="text-xs font-mono text-[#E8D9A8] tracking-wider uppercase pt-2">
              SATURDAY · 14 NOVEMBER 2026 · GURUGRAM
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#FAFAFA]">
              NAVIGATION
            </div>
            <ul className="space-y-2.5 text-sm font-light">
              <li>
                <a href="#story" className="hover:text-[#C9A227] transition-colors">Our Story</a>
              </li>
              <li>
                <a href="#alumni" className="hover:text-[#C9A227] transition-colors">Alumni Mentors</a>
              </li>
              <li>
                <a href="#mentorship" className="hover:text-[#C9A227] transition-colors">Mentorship Pillars</a>
              </li>
              <li>
                <a href="#highlights" className="hover:text-[#C9A227] transition-colors">Highlights & Bento</a>
              </li>
              <li>
                <a href="#details" className="hover:text-[#C9A227] transition-colors">Event Details & Agenda</a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-[#C9A227] transition-colors">Frequently Asked Questions</a>
              </li>
            </ul>
          </div>

          {/* Direct Actions (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#FAFAFA]">
              ATTENDANCE & CONTACT
            </div>
            <p className="text-xs text-[#A1A1AA] leading-relaxed font-light">
              Registration is required for delegate credentials and seat confirmation across auditorium sessions.
            </p>
            <div className="pt-1 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onRegisterClick}
                className="font-btn px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#080808] bg-[#C9A227] hover:bg-[#E8D9A8] rounded transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>REGISTER NOW</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <a
                href={`mailto:${FOOTPRINTS_CONFIG.urls.emailContact}`}
                className="font-btn px-4 py-2.5 text-xs font-medium uppercase tracking-wider text-white hover:text-[#C9A227] bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 rounded transition-all text-center"
              >
                CONTACT US
              </a>
            </div>
            <div className="text-xs text-[#71717A] font-mono pt-2">
              VENUE: Sushant Lok Phase I, Sector 43, Gurugram
            </div>
          </div>

        </div>

        {/* Editorial Closing Line Quote */}
        <div className="py-10 text-center">
          <p className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#FAFAFA] italic tracking-wide font-light">
            “Your journey is your own.{' '}
            <span className="text-[#E8D9A8]">You don’t have to walk it alone.”</span>
          </p>
        </div>

        {/* Bottom Bar: Copyright, Created by tag, & School Notice */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="text-[#71717A]">
            © 2026 {FOOTPRINTS_CONFIG.brand.school}. All rights reserved.
          </div>

          {/* Created by tag */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-[#C9A227]/30 text-xs text-[#A1A1AA] hover:border-[#C9A227]/60 transition-colors">
            <span className="text-[#71717A]">Created by ·</span>
            <span className="text-[#E8D9A8] font-medium tracking-wide">Made by Tanush Kansal</span>
          </div>

          <div className="flex items-center gap-4 text-[#71717A]">
            <a href={FOOTPRINTS_CONFIG.urls.schoolWebsite} target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A227] transition-colors">
              Official School Website
            </a>
            <span>·</span>
            <span>Shalom Footprints 2026</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
