import React, { useState, useEffect } from 'react';
import { FOOTPRINTS_CONFIG } from '../data/footprintsConfig';
import { ArrowDown, ArrowUpRight, Compass, Sparkles } from 'lucide-react';

interface HeroProps {
  onRegisterClick: () => void;
  onExploreAlumni: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRegisterClick, onExploreAlumni }) => {
  // Countdown to 14 November 2026 17:00 IST
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(FOOTPRINTS_CONFIG.brand.isoEventDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-gradient-to-b from-[#080808] via-[#0E0E10] to-[#080808]">
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft radial gold spotlight representing the distant horizon / future */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#C9A227]/12 to-transparent rounded-full blur-[130px]" />
        
        {/* Horizon light source */}
        <div className="absolute top-[42%] left-1/2 -translate-x-1/2 w-48 h-48 bg-[#FFF7E6]/10 rounded-full blur-3xl animate-pulse" />

        {/* Animated Perspective Golden Trail & Footsteps Path */}
        <svg
          className="absolute inset-0 w-full h-full opacity-40"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 900"
        >
          <defs>
            <linearGradient id="goldGradientTrail" x1="50%" y1="100%" x2="50%" y2="40%">
              <stop offset="0%" stopColor="#C9A227" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#E8D9A8" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FFF7E6" stopOpacity="0.0" />
            </linearGradient>
            <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#E8D9A8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#C9A227" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Converging pathway guides */}
          <line x1="280" y1="900" x2="720" y2="410" stroke="url(#goldGradientTrail)" strokeWidth="1.2" strokeDasharray="6 8" />
          <line x1="1160" y1="900" x2="720" y2="410" stroke="url(#goldGradientTrail)" strokeWidth="1.2" strokeDasharray="6 8" />
          
          {/* Central sinuous golden trail */}
          <path
            d="M720 410 Q715 540 735 630 T710 750 T720 900"
            fill="none"
            stroke="url(#goldGradientTrail)"
            strokeWidth="2.2"
            className="animate-gold-trail"
          />

          {/* Stepping stone / footprint markers along the path */}
          <ellipse cx="720" cy="850" rx="14" ry="5" fill="url(#nodeGlow)" />
          <ellipse cx="712" cy="740" rx="11" ry="4" fill="url(#nodeGlow)" />
          <ellipse cx="732" cy="650" rx="8" ry="3" fill="url(#nodeGlow)" />
          <ellipse cx="718" cy="570" rx="6" ry="2.5" fill="url(#nodeGlow)" />
          <ellipse cx="720" cy="500" rx="4" ry="2" fill="url(#nodeGlow)" />
          <circle cx="720" cy="415" r="2.5" fill="#FFF7E6" />
        </svg>

        {/* Ambient floating gold particles */}
        <div className="absolute top-[30%] left-[25%] w-1.5 h-1.5 bg-[#E8D9A8] rounded-full blur-[0.5px] animate-particle" style={{ animationDelay: '0s' }} />
        <div className="absolute top-[45%] right-[28%] w-1.5 h-1.5 bg-[#C9A227] rounded-full blur-[0.5px] animate-particle" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[60%] left-[38%] w-1 h-1 bg-[#FFF7E6] rounded-full blur-[0.5px] animate-particle" style={{ animationDelay: '3.5s' }} />
        <div className="absolute top-[35%] right-[35%] w-1 h-1 bg-[#E8D9A8] rounded-full blur-[0.5px] animate-particle" style={{ animationDelay: '1.2s' }} />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto flex flex-col items-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-[#C9A227]/30 bg-[#111111]/80 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
          <span className="text-[11px] sm:text-xs font-medium tracking-[0.2em] text-[#E8D9A8] uppercase">
            SHALOM HILLS INTERNATIONAL SCHOOL PRESENTS
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-editorial text-[50px] sm:text-[84px] md:text-[104px] lg:text-[116px] leading-[0.92] tracking-tight font-normal text-white uppercase mb-5 select-none">
          SHALOM
          <span className="block italic font-light text-[#E8D9A8] drop-shadow-[0_0_35px_rgba(201,162,39,0.3)]">
            FOOTPRINTS
          </span>
        </h1>

        {/* Supporting Headline */}
        <p className="font-editorial text-xl sm:text-2xl md:text-3xl text-[#FAFAFA] font-normal tracking-wide max-w-2xl mx-auto leading-snug mb-4">
          They’ve Walked the Path.{' '}
          <span className="text-[#C9A227] italic">Now, They’ll Help You Find Yours.</span>
        </p>

        {/* Editorial Description */}
        <p className="text-sm sm:text-base md:text-lg text-[#A1A1AA] max-w-xl mx-auto font-light leading-relaxed mb-8">
          {FOOTPRINTS_CONFIG.brand.description}
        </p>

        {/* Event Date Trust Marker */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-9 text-xs sm:text-sm text-[#D4D4D8]">
          <span className="font-mono tracking-widest text-[#E8D9A8] uppercase font-semibold">
            14 NOVEMBER 2026
          </span>
          <span className="text-[#71717A]">·</span>
          <span>Shalom Hills Campus, Gurugram</span>
          <span className="text-[#71717A]">·</span>
          <span className="text-[#A1A1AA]">Alumni Mentorship & Guidance</span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mb-12">
          <button
            onClick={onRegisterClick}
            className="w-full sm:w-auto font-btn px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#080808] bg-[#C9A227] hover:bg-[#E8D9A8] active:bg-[#B38D1B] rounded transition-all duration-200 shadow-lg shadow-[#C9A227]/20 hover:shadow-[#C9A227]/40 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>REGISTER NOW</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={onExploreAlumni}
            className="w-full sm:w-auto font-btn px-7 py-3.5 text-xs sm:text-sm font-medium tracking-wider uppercase text-[#FAFAFA] hover:text-[#E8D9A8] bg-[#18181B]/80 hover:bg-[#27272A] border border-white/10 hover:border-[#C9A227]/50 rounded transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#C9A227]" />
            <span>MEET THE ALUMNI</span>
          </button>
        </div>

        {/* Live Event Countdown */}
        <div className="w-full max-w-xl mx-auto p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
          <div className="text-[11px] font-mono tracking-widest uppercase text-[#A1A1AA] mb-3">
            COUNTDOWN TO 14 NOVEMBER 2026
          </div>
          <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
            <div className="p-2 sm:p-2.5 rounded-lg bg-black/40 border border-white/5">
              <span className="block font-mono text-xl sm:text-3xl font-semibold text-white tabular-nums">
                {timeLeft.days}
              </span>
              <span className="text-[10px] sm:text-xs text-[#71717A] tracking-wider uppercase">DAYS</span>
            </div>
            <div className="p-2 sm:p-2.5 rounded-lg bg-black/40 border border-white/5">
              <span className="block font-mono text-xl sm:text-3xl font-semibold text-white tabular-nums">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-[#71717A] tracking-wider uppercase">HOURS</span>
            </div>
            <div className="p-2 sm:p-2.5 rounded-lg bg-black/40 border border-white/5">
              <span className="block font-mono text-xl sm:text-3xl font-semibold text-white tabular-nums">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-[#71717A] tracking-wider uppercase">MINS</span>
            </div>
            <div className="p-2 sm:p-2.5 rounded-lg bg-black/40 border border-white/5">
              <span className="block font-mono text-xl sm:text-3xl font-semibold text-[#C9A227] tabular-nums">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-[#71717A] tracking-wider uppercase">SECS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-6 text-center text-[#71717A]">
        <a
          href="#story"
          className="inline-flex flex-col items-center gap-1.5 text-xs text-[#A1A1AA] hover:text-[#C9A227] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A227]"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase">DISCOVER THE STORY</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#C9A227]" />
        </a>
      </div>
    </section>
  );
};
