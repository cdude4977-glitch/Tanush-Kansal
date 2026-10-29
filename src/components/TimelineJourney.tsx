import React from 'react';
import { FOOTPRINTS_CONFIG } from '../data/footprintsConfig';
import { Compass, UserCheck, Users, BookOpen, Award } from 'lucide-react';

export const TimelineJourney: React.FC = () => {
  const getStageIcon = (step: string) => {
    switch (step) {
      case '01':
        return <Compass className="w-4 h-4 text-[#C9A227]" />;
      case '02':
        return <UserCheck className="w-4 h-4 text-[#C9A227]" />;
      case '03':
        return <Users className="w-4 h-4 text-[#C9A227]" />;
      case '04':
        return <BookOpen className="w-4 h-4 text-[#C9A227]" />;
      case '05':
      default:
        return <Award className="w-4 h-4 text-[#C9A227]" />;
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-[#080808] border-t border-white/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono tracking-[0.25em] text-[#C9A227] uppercase block mb-3">
            THE MENTORSHIP ARCS
          </span>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-white leading-tight mb-4">
            The Footprints <span className="italic text-[#E8D9A8]">Journey.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1AA] font-light leading-relaxed">
            From initial curiosity to celebratory fellowship, every stage is purposefully curated to guide your trajectory.
          </p>
        </div>

        {/* Desktop Horizontal Timeline (Visible on lg screens) */}
        <div className="hidden lg:block relative pb-8">
          {/* Connecting Golden Line */}
          <div className="absolute top-[42px] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-[#C9A227]/20 via-[#C9A227] to-[#E8D9A8]/40 -z-0" />

          <div className="grid grid-cols-5 gap-6 relative z-10">
            {FOOTPRINTS_CONFIG.journeyStages.map((stage, idx) => (
              <div key={stage.step} className="flex flex-col items-center text-center group">
                {/* Node with step numbering */}
                <div className="w-20 h-20 rounded-full bg-[#111113] border-2 border-white/20 group-hover:border-[#C9A227] transition-all duration-300 flex flex-col items-center justify-center shadow-lg shadow-black/80 mb-6 group-hover:scale-110">
                  <span className="font-mono text-xs text-[#C9A227] font-semibold">{stage.step}</span>
                  <div className="mt-0.5">{getStageIcon(stage.step)}</div>
                </div>

                <div className="text-xs font-mono tracking-widest uppercase text-[#C9A227] mb-1">
                  STAGE {stage.step}
                </div>
                <h3 className="font-editorial text-2xl font-normal text-white group-hover:text-[#E8D9A8] transition-colors mb-2">
                  {stage.name}
                </h3>
                <h4 className="text-xs text-[#FAFAFA] font-medium mb-2">
                  {stage.title}
                </h4>
                <p className="text-xs text-[#A1A1AA] font-light leading-relaxed px-2">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline (Visible on sm/md screens) */}
        <div className="lg:hidden relative pl-6 sm:pl-8 space-y-10">
          {/* Vertical Connecting Golden Line */}
          <div className="absolute top-4 bottom-4 left-[27px] sm:left-[35px] w-[2px] bg-gradient-to-b from-[#C9A227] via-[#E8D9A8] to-[#C9A227]/30" />

          {FOOTPRINTS_CONFIG.journeyStages.map((stage) => (
            <div key={stage.step} className="relative flex items-start gap-5 sm:gap-6 group">
              {/* Node */}
              <div className="w-14 h-14 rounded-full bg-[#141416] border-2 border-[#C9A227] flex flex-col items-center justify-center shrink-0 z-10 shadow-md">
                <span className="font-mono text-[11px] text-[#C9A227] font-semibold">{stage.step}</span>
                {getStageIcon(stage.step)}
              </div>

              {/* Content */}
              <div className="p-5 rounded-xl bg-[#111113] border border-white/10 flex-1">
                <span className="text-[10px] font-mono tracking-wider uppercase text-[#C9A227] block mb-1">
                  STAGE {stage.step} · {stage.name.toUpperCase()}
                </span>
                <h3 className="font-editorial text-2xl font-normal text-white mb-1">
                  {stage.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A1A1AA] font-light leading-relaxed">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
