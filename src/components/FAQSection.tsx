import React, { useState } from 'react';
import { FOOTPRINTS_CONFIG } from '../data/footprintsConfig';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 sm:py-32 bg-[#0E0E10] border-t border-white/[0.06] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-[#C9A227] uppercase block mb-3">
            CLEAR ANSWERS
          </span>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-white leading-tight mb-4">
            FREQUENTLY ASKED <span className="italic text-[#E8D9A8]">QUESTIONS.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1AA] font-light leading-relaxed">
            Essential inquiries regarding delegate participation, event schedule, awards, and venue protocols.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3.5">
          {FOOTPRINTS_CONFIG.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#141416] border-[#C9A227]/40 shadow-lg'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.03]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A227]"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#C9A227]">
                      0{index + 1}
                    </span>
                    <span className="font-editorial text-xl sm:text-2xl font-normal text-white">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-[#A1A1AA] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#C9A227] bg-[#C9A227]/10' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-[#A1A1AA] font-light leading-relaxed border-t border-white/5">
                    <p className="pt-2">{faq.answer}</p>
                    <div className="mt-3 flex items-center gap-2 text-xs font-mono text-[#71717A]">
                      <span>TOPIC: {faq.category.toUpperCase()}</span>
                      <span>·</span>
                      <span className="text-[#C9A227]">SHALOM HILLS INTERNATIONAL SCHOOL</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Secondary Help Prompt */}
        <div className="mt-12 p-6 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-5 h-5 text-[#C9A227]" />
            <span className="text-xs sm:text-sm text-[#A1A1AA]">
              Have a distinct question or wish to volunteer as an alumni panelist?
            </span>
          </div>
          <a
            href={`mailto:${FOOTPRINTS_CONFIG.urls.emailContact}`}
            className="text-xs font-mono uppercase tracking-wider text-[#C9A227] hover:text-[#E8D9A8] transition-colors shrink-0"
          >
            Email The Committee →
          </a>
        </div>

      </div>
    </section>
  );
};
