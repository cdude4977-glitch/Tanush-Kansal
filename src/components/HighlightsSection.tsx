import React from 'react';
import { FOOTPRINTS_CONFIG } from '../data/footprintsConfig';
import { MessageSquare, TrendingUp, Lightbulb, HeartHandshake, Award, Network } from 'lucide-react';

export const HighlightsSection: React.FC = () => {
  const getIcon = (title: string) => {
    switch (title) {
      case 'Alumni Conversations':
        return <MessageSquare className="w-5 h-5 text-[#C9A227]" />;
      case 'Career Insights':
        return <TrendingUp className="w-5 h-5 text-[#C9A227]" />;
      case 'Mentorship & Guidance':
        return <Lightbulb className="w-5 h-5 text-[#C9A227]" />;
      case 'Shared Experiences':
        return <HeartHandshake className="w-5 h-5 text-[#C9A227]" />;
      case 'Recognition & Prizes':
        return <Award className="w-5 h-5 text-[#C9A227]" />;
      case 'Community Connections':
      default:
        return <Network className="w-5 h-5 text-[#C9A227]" />;
    }
  };

  return (
    <section id="highlights" className="py-24 sm:py-32 bg-[#0E0E10] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-[#C9A227] uppercase block mb-3">
            THE PROGRAMME ARCHITECTURE
          </span>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-white leading-tight mb-4">
            ONE EVENING.{' '}
            <span className="italic text-[#E8D9A8]">COUNTLESS POSSIBILITIES.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1AA] font-light leading-relaxed">
            Engineered to foster genuine human connections, demystify professional paths, and spark ambitions through structured yet unhurried conversations.
          </p>
        </div>

        {/* Visual Banner Strip */}
        <div className="relative rounded-2xl overflow-hidden mb-12 border border-white/10 shadow-2xl">
          <div className="aspect-[21/9] sm:aspect-[24/8] relative bg-[#18181B]">
            <img
              src="/src/assets/images/hero_alumni_gathering_1793290596997.jpg"
              alt="Alumni and student mentorship gathering in glass atrium"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/90 via-[#080808]/50 to-transparent" />
            
            <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 max-w-xl">
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#C9A227] mb-2">
                COLLECTIVE INSPIRATION
              </span>
              <h3 className="font-editorial text-2xl sm:text-4xl text-white font-normal mb-3">
                Where Shared Roots Branch Into Distinct Horizons
              </h3>
              <p className="text-xs sm:text-sm text-[#D4D4D8] font-light leading-relaxed">
                Connect across graduating classes from 2012 to 2024, discovering how values honed at Shalom Hills translate to global excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Asymmetric Bento Grid of 6 Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FOOTPRINTS_CONFIG.highlights.map((highlight) => (
            <div
              key={highlight.title}
              className={`${highlight.span} p-8 rounded-xl bg-[#141416] border border-white/10 hover:border-[#C9A227]/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-black/60`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center group-hover:border-[#C9A227]/40 transition-colors">
                    {getIcon(highlight.title)}
                  </div>
                  <span className="text-[10px] font-mono tracking-wider uppercase text-[#71717A]">
                    {highlight.badge}
                  </span>
                </div>

                <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-white group-hover:text-[#E8D9A8] transition-colors mb-2">
                  {highlight.title}
                </h3>
                <div className="text-xs font-mono text-[#C9A227] tracking-wide mb-3">
                  {highlight.tagline}
                </div>
                <p className="text-sm text-[#A1A1AA] leading-relaxed font-light">
                  {highlight.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-[#71717A]">
                <span>14 November 2026</span>
                <span className="text-[#C9A227] font-mono text-[11px] group-hover:translate-x-1 transition-transform">
                  Explore Session →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
