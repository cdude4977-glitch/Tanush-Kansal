import React, { useState } from 'react';
import { FOOTPRINTS_CONFIG } from '../data/footprintsConfig';
import { Compass, Sparkles, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

export const MentorshipSection: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>(FOOTPRINTS_CONFIG.mentorshipPillars[0].id);

  const selectedPillar = FOOTPRINTS_CONFIG.mentorshipPillars.find(p => p.id === selectedPillarId) 
    || FOOTPRINTS_CONFIG.mentorshipPillars[0];

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#C9A227]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#C9A227]" />;
      case 'Users':
      default:
        return <Users className="w-5 h-5 text-[#C9A227]" />;
    }
  };

  return (
    <section id="mentorship" className="py-24 sm:py-32 bg-[#0E0E10] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-[#C9A227] uppercase block mb-3">
            GUIDANCE FOR THE ROAD AHEAD
          </span>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-white leading-tight mb-4">
            Their Experience.{' '}
            <span className="italic text-[#E8D9A8]">Your Next Chapter.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1AA] font-light leading-relaxed">
            From evaluating university applications to understanding what daily life in high-impact professions truly looks like, alumni return to offer perspective, candid advice, and enduring encouragement.
          </p>
        </div>

        {/* 3 Elegant Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {FOOTPRINTS_CONFIG.mentorshipPillars.map((pillar) => {
            const isSelected = pillar.id === selectedPillarId;
            return (
              <div
                key={pillar.id}
                onClick={() => setSelectedPillarId(pillar.id)}
                className={`p-8 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#18181B] border-[#C9A227]/60 shadow-xl shadow-[#C9A227]/10'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center">
                      {getPillarIcon(pillar.icon)}
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#71717A]">
                      {pillar.id === selectedPillarId ? 'Active Focus' : 'Explore'}
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl font-normal text-white mb-2">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-mono text-[#C9A227] tracking-wide mb-4">
                    {pillar.subtitle}
                  </div>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed font-light mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-medium">
                  <span className={`${isSelected ? 'text-[#E8D9A8]' : 'text-[#71717A]'}`}>
                    {pillar.focusAreas.length} discussion themes
                  </span>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1 text-[#C9A227]' : 'text-[#71717A]'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Focus Theme Explorer with High-Fidelity Photograph */}
        <div className="rounded-2xl bg-[#141416] border border-white/10 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Col: Explanatory Breakdown */}
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#C9A227]/10 text-xs text-[#E8D9A8] font-mono uppercase tracking-wider mb-4">
                  <span>FOCUS BREAKDOWN</span>
                  <span>·</span>
                  <span>{selectedPillar.title}</span>
                </div>

                <h3 className="font-editorial text-2xl sm:text-3xl text-white font-normal mb-4">
                  {selectedPillar.subtitle}
                </h3>
                <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-8 font-light">
                  During breakout sessions, alumni unpack practical, first-hand scenarios. Students are invited to engage with questions about expectations, career trajectories, and pivotal mindset shifts.
                </p>

                {/* Focus areas pills/unboxed list */}
                <div className="space-y-3">
                  <div className="text-xs font-mono tracking-wider text-[#71717A] uppercase">
                    KEY CONVERSATION TOPICS
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedPillar.focusAreas.map((area) => (
                      <div
                        key={area}
                        className="flex items-center gap-2.5 p-3 rounded-lg bg-black/30 border border-white/5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0" />
                        <span className="text-xs sm:text-sm text-[#FAFAFA] font-medium">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Responsible organizer disclosure */}
              <div className="mt-8 pt-6 border-t border-white/10 text-xs text-[#71717A] font-light">
                * Note: Mentorship circles provide group perspective and academic guidance. Specific individual mentoring commitments or internship placements are subject to independent mutual agreement and organizer review.
              </div>
            </div>

            {/* Right Col: Candid Mentorship Photograph */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-[#18181B]">
              <img
                src="/src/assets/images/mentorship_discussion_1793290597980.jpg"
                alt="Alumnus mentor guiding students around a sunlit library table"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-transparent lg:bg-gradient-to-l" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-[#080808]/85 backdrop-blur-md border border-white/10 text-xs text-[#FAFAFA]">
                <span className="font-mono text-[#E8D9A8] block text-[11px] mb-1">INTERACTIVE SESSIONS</span>
                Open dialogues across 10 academic and professional fields.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
