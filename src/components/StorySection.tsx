import React from 'react';
import { FOOTPRINTS_CONFIG } from '../data/footprintsConfig';
import { Sparkles, Compass, MapPin } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="relative py-24 sm:py-32 bg-[#080808] border-t border-white/[0.06] overflow-hidden">
      {/* Subtle gold trajectory line across background */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1200 800">
          <path
            d="M-50 400 C 300 250, 700 600, 1250 350"
            fill="none"
            stroke="#C9A227"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Asymmetric 2-column editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Editorial Text (7 columns) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-mono tracking-[0.25em] text-[#C9A227] uppercase block mb-3">
                {FOOTPRINTS_CONFIG.story.eyebrow}
              </span>
              <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-white leading-[1.08] tracking-tight">
                Every Journey Leaves <br />
                <span className="italic text-[#E8D9A8]">Something Behind.</span>
              </h2>
            </div>

            <div className="space-y-6 text-base sm:text-lg text-[#A1A1AA] leading-relaxed font-light">
              <p>
                {FOOTPRINTS_CONFIG.story.bodyFirst}
              </p>
              <p>
                {FOOTPRINTS_CONFIG.story.bodySecond}
              </p>
            </div>

            {/* Restrained Gold Typography Highlights: Experience. Guidance. Possibility. */}
            <div className="pt-4 border-t border-white/10">
              <div className="text-xs font-mono tracking-widest text-[#71717A] uppercase mb-4">
                THE THREE CORNERSTONES
              </div>
              <div className="flex flex-wrap items-center gap-6 sm:gap-10">
                {FOOTPRINTS_CONFIG.story.keyWords.map((word) => (
                  <div key={word} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                    <span className="font-editorial text-2xl sm:text-3xl text-[#E8D9A8] font-normal tracking-wide">
                      {word}.
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote attribution block */}
            <div className="p-5 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-start gap-4">
              <div className="p-2 rounded bg-[#C9A227]/10 text-[#C9A227] shrink-0 mt-0.5">
                <Compass className="w-4 h-4" />
              </div>
              <p className="text-xs sm:text-sm text-[#A1A1AA] italic leading-relaxed">
                “These alumni return not simply to recount accolades, but to pass on their lessons, navigate real questions, and illuminate the exact crossroads where current students stand today.”
              </p>
            </div>
          </div>

          {/* Column 2: Cinematic Photographic Media (5 columns) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group shadow-2xl shadow-black/80">
              {/* Fallback & Image Container */}
              <div className="aspect-[4/5] relative bg-[#18181B] overflow-hidden">
                <img
                  src="/src/assets/images/story_pathway_corridor_1793290595412.jpg"
                  alt="School architectural corridor bathed in golden hour natural sunlight"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Measured Scrim for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-[#080808]/20 to-transparent" />

                {/* Subdued overlay caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                  <div className="flex items-center gap-2 text-xs text-[#E8D9A8] font-mono tracking-wider mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C9A227]" />
                    <span>CAMPUS PASSAGEWAYS</span>
                  </div>
                  <p className="font-editorial text-xl text-white italic">
                    Where memories linger, and new pathways begin.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative subtle gold accent glow badge */}
            <div className="absolute -bottom-4 -right-4 hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#111111]/90 backdrop-blur-md border border-[#C9A227]/30 text-xs text-[#FFF7E6] shadow-xl">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
              <span className="font-mono text-[11px] tracking-wider uppercase">14 NOV 2026 · IN-PERSON</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
