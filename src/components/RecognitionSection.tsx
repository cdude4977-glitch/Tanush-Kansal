import React, { useState } from 'react';
import { FOOTPRINTS_CONFIG } from '../data/footprintsConfig';
import { Award, Trophy, Star, CheckCircle, Info, Sparkles } from 'lucide-react';

export const RecognitionSection: React.FC = () => {
  const [selectedAwardId, setSelectedAwardId] = useState<string>(FOOTPRINTS_CONFIG.awards.categories[0].id);

  return (
    <section className="py-24 sm:py-32 bg-[#0E0E10] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <span className="text-xs font-mono tracking-[0.25em] text-[#C9A227] uppercase block mb-3">
              HONOR & EXCELLENCE
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-white leading-tight">
              CELEBRATING <span className="italic text-[#E8D9A8]">THE JOURNEY.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#A1A1AA] font-light mt-4">
              Commending alumni who carve distinct trails in their professions, and students who exhibit outstanding inquiry and ambition.
            </p>
          </div>

          {/* Organizer Notice */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-[#C9A227]/30 max-w-md shrink-0">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-mono text-[#E8D9A8] uppercase font-semibold block mb-1">
                  Official Honors Specification
                </span>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  {FOOTPRINTS_CONFIG.awards.statusNote}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Award Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {FOOTPRINTS_CONFIG.awards.categories.map((award) => {
            const isSelected = award.id === selectedAwardId;
            return (
              <div
                key={award.id}
                onClick={() => setSelectedAwardId(award.id)}
                className={`p-8 rounded-xl border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-[#18181B] border-[#C9A227] shadow-xl shadow-[#C9A227]/10'
                    : 'bg-[#111113] border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center mb-6">
                    <Trophy className="w-6 h-6 text-[#C9A227]" />
                  </div>

                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#C9A227] mb-2">
                    {award.status}
                  </div>

                  <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-white mb-3">
                    {award.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A1A1AA] font-light leading-relaxed mb-6">
                    {award.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-white/5 text-xs">
                  <div>
                    <span className="text-[#71717A] font-mono text-[10px] uppercase block">ELIGIBILITY</span>
                    <span className="text-[#FAFAFA] font-medium">{award.eligibility}</span>
                  </div>
                  <div>
                    <span className="text-[#71717A] font-mono text-[10px] uppercase block">CRITERIA</span>
                    <span className="text-[#D4D4D8]">{award.criteria}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Celebratory Note */}
        <div className="p-6 rounded-xl bg-gradient-to-r from-black/60 via-[#18181B] to-black/60 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#C9A227]" />
            <span className="text-xs sm:text-sm text-[#D4D4D8]">
              Prizes and commendations will be presented by the Board of Directors and guest dignitaries during the evening gala.
            </span>
          </div>
          <span className="text-xs font-mono text-[#C9A227] uppercase tracking-wider shrink-0">
            CEREMONY: 14 NOV 2026
          </span>
        </div>

      </div>
    </section>
  );
};
