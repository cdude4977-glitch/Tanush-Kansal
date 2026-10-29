import React, { useState, useMemo } from 'react';
import { FOOTPRINTS_CONFIG, AlumniProfile } from '../data/footprintsConfig';
import { Search, ExternalLink, MessageCircle, X, ShieldAlert, Award, Briefcase, GraduationCap } from 'lucide-react';

export const AlumniSection: React.FC = () => {
  const [selectedField, setSelectedField] = useState<string>('All Fields');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProfile, setActiveModalProfile] = useState<AlumniProfile | null>(null);

  // Filter profiles based on field and search query
  const filteredProfiles = useMemo(() => {
    return FOOTPRINTS_CONFIG.alumniProfiles.filter((profile) => {
      const matchesField = selectedField === 'All Fields' || profile.field.toLowerCase() === selectedField.toLowerCase();
      const matchesQuery =
        searchQuery === '' ||
        profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        profile.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        profile.field.toLowerCase().includes(searchQuery.toLowerCase()) ||
        profile.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
        profile.mentorshipTopics.some((topic) => topic.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesField && matchesQuery;
    });
  }, [selectedField, searchQuery]);

  return (
    <section id="alumni" className="py-24 sm:py-32 bg-[#080808] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-3xl">
            <span className="text-xs font-mono tracking-[0.25em] text-[#C9A227] uppercase block mb-3">
              ALUMNI SHOWCASE
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-white leading-tight">
              The People Who <span className="italic text-[#E8D9A8]">Light the Way.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#A1A1AA] font-light mt-4">
              Explore the journeys of Shalom Hills graduates across disciplines. These mentors return to offer candid perspective, academic advice, and industry realities.
            </p>
          </div>

          {/* Organizer Notice Banner */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-[#C9A227]/30 max-w-md shrink-0">
            <div className="flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-mono tracking-wider text-[#E8D9A8] uppercase block font-semibold mb-1">
                  Illustrative Roster Preview
                </span>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  These profiles demonstrate the showcase format. Confirmed alumni speakers and mentors are currently being verified by the organizing team and will populate this registry.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="space-y-4 mb-10">
          {/* Search Input */}
          <div className="relative max-w-md">
            <Search className="w-4 h-4 text-[#71717A] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, role, field, or topic..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#141416] border border-white/10 text-sm text-white placeholder-[#71717A] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#71717A] hover:text-white text-xs"
              >
                Clear
              </button>
            )}
          </div>

          {/* Field Category Filter Buttons (Functional Segmented Control) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {FOOTPRINTS_CONFIG.categories.map((category) => {
              const isActive = selectedField === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedField(category)}
                  className={`px-3.5 py-1.5 rounded-md text-xs font-medium tracking-wide whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#C9A227] text-[#080808] font-semibold shadow-md'
                      : 'bg-white/[0.04] text-[#A1A1AA] hover:text-white hover:bg-white/[0.08] border border-white/5'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-[#71717A] mb-8 pb-3 border-b border-white/5 font-mono">
          <span>SHOWING {filteredProfiles.length} OF {FOOTPRINTS_CONFIG.alumniProfiles.length} PROFILES</span>
          <span>DISCIPLINE: {selectedField.toUpperCase()}</span>
        </div>

        {/* Alumni Profile Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProfiles.map((profile) => (
            <div
              key={profile.id}
              className="group rounded-xl bg-[#111113] border border-white/10 hover:border-[#C9A227]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-xl hover:shadow-black/60 relative"
            >
              {/* Card Header & Photo */}
              <div>
                <div className="aspect-[4/3] relative overflow-hidden bg-[#18181B]">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-[#111113]/20 to-transparent" />

                  {/* Placeholder Badge Indicator */}
                  <div className="absolute top-3 left-3 px-2 py-1 rounded bg-[#080808]/85 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-[#E8D9A8] uppercase tracking-wider">
                    {profile.graduationYear}
                  </div>

                  <div className="absolute top-3 right-3 px-2 py-1 rounded bg-[#080808]/85 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-[#A1A1AA] uppercase tracking-wider">
                    Preview
                  </div>
                </div>

                {/* Profile Details */}
                <div className="p-5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#C9A227] mb-1">
                    {profile.field}
                  </div>
                  <h3 className="font-editorial text-2xl font-normal text-white group-hover:text-[#E8D9A8] transition-colors leading-snug">
                    {profile.name}
                  </h3>
                  
                  <div className="text-xs text-[#FAFAFA] font-medium mt-1 mb-0.5">
                    {profile.role}
                  </div>
                  <div className="text-xs text-[#71717A] mb-4">
                    {profile.organization}
                  </div>

                  <p className="text-xs text-[#A1A1AA] leading-relaxed line-clamp-3 font-light mb-4">
                    {profile.introduction}
                  </p>

                  {/* Mentorship Topics unboxed tags */}
                  <div className="pt-3 border-t border-white/5">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#71717A] mb-2">
                      MENTORSHIP THEMES
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {profile.mentorshipTopics.slice(0, 3).map((topic) => (
                        <span
                          key={topic}
                          className="text-[11px] text-[#D4D4D8] bg-white/[0.04] px-2 py-0.5 rounded border border-white/5"
                        >
                          {topic}
                        </span>
                      ))}
                      {profile.mentorshipTopics.length > 3 && (
                        <span className="text-[11px] text-[#C9A227] px-1 py-0.5">
                          +{profile.mentorshipTopics.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => setActiveModalProfile(profile)}
                  className="w-full py-2.5 px-3 rounded-lg bg-white/[0.04] hover:bg-[#C9A227] hover:text-[#080808] border border-white/10 hover:border-[#C9A227] text-xs font-semibold tracking-wider uppercase text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>VIEW MENTORSHIP TOPICS</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProfiles.length === 0 && (
          <div className="p-12 text-center rounded-xl bg-white/[0.02] border border-white/10 my-8">
            <GraduationCap className="w-10 h-10 text-[#71717A] mx-auto mb-3" />
            <h3 className="font-editorial text-xl text-white mb-2">No matching profiles found</h3>
            <p className="text-sm text-[#A1A1AA] mb-4">
              Try choosing a different discipline or clearing your search query.
            </p>
            <button
              onClick={() => {
                setSelectedField('All Fields');
                setSearchQuery('');
              }}
              className="text-xs font-mono text-[#C9A227] hover:underline uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Profile Detail Modal */}
      {activeModalProfile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#111113] border border-white/15 rounded-2xl max-w-xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto shadow-2xl">
            <button
              onClick={() => setActiveModalProfile(null)}
              className="absolute top-5 right-5 p-2 text-[#A1A1AA] hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Close profile modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <img
                src={activeModalProfile.image}
                alt={activeModalProfile.name}
                referrerPolicy="no-referrer"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-[#C9A227]/40"
              />
              <div>
                <span className="text-[11px] font-mono text-[#C9A227] tracking-wider uppercase">
                  {activeModalProfile.graduationYear} · {activeModalProfile.field}
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-white font-normal">
                  {activeModalProfile.name}
                </h3>
                <div className="text-xs text-[#FAFAFA] font-medium flex items-center gap-1.5 mt-0.5">
                  <Briefcase className="w-3.5 h-3.5 text-[#71717A]" />
                  <span>{activeModalProfile.role} at {activeModalProfile.organization}</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono tracking-wider uppercase text-[#71717A] mb-2">
                  BACKGROUND & PERSPECTIVE
                </h4>
                <p className="text-sm text-[#D4D4D8] leading-relaxed font-light">
                  {activeModalProfile.introduction}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono tracking-wider uppercase text-[#71717A] mb-3">
                  SUGGESTED QUESTIONS STUDENTS CAN ASK
                </h4>
                <div className="space-y-2">
                  {activeModalProfile.mentorshipTopics.map((topic, i) => (
                    <div key={topic} className="p-3 rounded-lg bg-black/40 border border-white/5 text-xs text-[#FAFAFA] flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#C9A227]/20 text-[#E8D9A8] text-[10px] flex items-center justify-center font-mono shrink-0">
                        0{i + 1}
                      </span>
                      <span>How did you transition into {topic}, and what should I focus on in school?</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-lg bg-white/[0.03] border border-white/5 text-xs text-[#A1A1AA]">
                <div className="flex items-center gap-2 text-[#E8D9A8] font-mono text-[11px] mb-1">
                  <Award className="w-3.5 h-3.5 text-[#C9A227]" />
                  <span>EVENT INTERACTION FORMAT</span>
                </div>
                Connect directly with mentors during the thematic breakout circles on 14 November 2026.
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <a
                  href={activeModalProfile.linkedinUrl || "https://linkedin.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-[#A1A1AA] hover:text-[#C9A227] flex items-center gap-1.5 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Connect on Professional Network</span>
                </a>

                <button
                  onClick={() => setActiveModalProfile(null)}
                  className="px-4 py-2 rounded-lg bg-[#C9A227] text-[#080808] font-semibold text-xs tracking-wider uppercase"
                >
                  DONE
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
