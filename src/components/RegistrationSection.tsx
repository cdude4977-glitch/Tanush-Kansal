import React, { useState } from 'react';
import { FOOTPRINTS_CONFIG } from '../data/footprintsConfig';
import { ArrowUpRight, CheckCircle2, AlertCircle, Loader2, Sparkles, User, Mail, Phone, BookOpen, ExternalLink } from 'lucide-react';

export const RegistrationSection: React.FC = () => {
  const [role, setRole] = useState<'student' | 'alumnus' | 'parent'>('student');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cohortOrGrade: '',
    fieldOrStream: '',
    interestTopics: '',
    mentorQuestions: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide a valid email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email format (e.g. name@domain.com).';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a contact phone number.';
    } else if (formData.phone.length < 8) {
      newErrors.phone = 'Phone number is too short.';
    }
    if (!formData.cohortOrGrade.trim()) {
      newErrors.cohortOrGrade = role === 'student' ? 'Please specify your current Class / Section.' : 'Please enter your Passing Year / Cohort.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate interactive processing with clear demo notification
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
    }, 800);
  };

  return (
    <section id="register" className="py-24 sm:py-32 bg-[#0E0E10] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-[#C9A227] uppercase block mb-3">
            RESERVE YOUR PRESENCE
          </span>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-white leading-tight mb-4">
            YOUR NEXT CHAPTER <br />
            <span className="italic text-[#E8D9A8]">STARTS HERE.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1AA] font-light leading-relaxed mb-6">
            Be part of a gathering that brings experience, ambition, and opportunity together on 14 November 2026.
          </p>

          {/* Primary External Registration Link Button */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <a
              href={FOOTPRINTS_CONFIG.urls.registration}
              target="_blank"
              rel="noopener noreferrer"
              className="font-btn px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#080808] bg-[#C9A227] hover:bg-[#E8D9A8] active:bg-[#B38D1B] rounded transition-all duration-200 shadow-lg shadow-[#C9A227]/25 hover:shadow-[#C9A227]/45 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>REGISTER FOR SHALOM FOOTPRINTS</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <p className="text-[11px] text-[#71717A] mt-2 font-mono">
            Directs to primary registration link: {FOOTPRINTS_CONFIG.urls.registration}
          </p>
        </div>

        {/* Dual Mode Container: Fast Portal Link or Interactive Form Preview */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-[#141416] border border-white/10 p-6 sm:p-10 shadow-2xl relative">
          
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
            <div>
              <h3 className="font-editorial text-2xl text-white font-normal">
                Direct Registration Form
              </h3>
              <span className="text-xs text-[#A1A1AA]">
                Fill details below or submit your application to reserve a seat.
              </span>
            </div>
            <div className="px-3 py-1 rounded bg-white/[0.04] border border-white/10 text-[10px] font-mono text-[#E8D9A8] uppercase tracking-wider">
              DEMO PREVIEW FORM
            </div>
          </div>

          {submittedSuccess ? (
            <div className="p-8 text-center space-y-4 rounded-xl bg-black/40 border border-[#C9A227]/40">
              <div className="w-12 h-12 rounded-full bg-[#C9A227]/20 border border-[#C9A227] flex items-center justify-center mx-auto text-[#E8D9A8]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-editorial text-3xl text-white">Registration Application Logged</h4>
              <p className="text-sm text-[#A1A1AA] max-w-md mx-auto font-light leading-relaxed">
                Thank you, <strong className="text-white">{formData.fullName}</strong>. Your provisional attendance request for Shalom Footprints on 14 November 2026 has been captured.
              </p>
              <div className="p-4 rounded-lg bg-white/[0.03] text-xs text-[#71717A] text-left max-w-lg mx-auto">
                <span className="font-mono text-[#E8D9A8] block mb-1">DEMO NOTE FOR ORGANIZERS:</span>
                This interactive form validates inputs client-side. In production, this can be connected directly to your Google Form webhook or administrative database.
              </div>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setSubmittedSuccess(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      cohortOrGrade: '',
                      fieldOrStream: '',
                      interestTopics: '',
                      mentorQuestions: '',
                    });
                  }}
                  className="px-6 py-2.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.15] text-xs font-mono uppercase tracking-wider text-white transition-colors cursor-pointer"
                >
                  Submit Another Response
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              {/* Role Selector Tabs */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#71717A] mb-2">
                  I AM REGISTERING AS:
                </label>
                <div className="grid grid-cols-3 gap-3 p-1 rounded-lg bg-black/40 border border-white/5">
                  <button
                    type="button"
                    onClick={() => setRole('student')}
                    className={`py-2 text-xs font-medium rounded-md transition-colors ${
                      role === 'student'
                        ? 'bg-[#C9A227] text-[#080808] font-semibold shadow-sm'
                        : 'text-[#A1A1AA] hover:text-white'
                    }`}
                  >
                    Current Student
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole('alumnus')}
                    className={`py-2 text-xs font-medium rounded-md transition-colors ${
                      role === 'alumnus'
                        ? 'bg-[#C9A227] text-[#080808] font-semibold shadow-sm'
                        : 'text-[#A1A1AA] hover:text-white'
                    }`}
                  >
                    Alumnus Mentor
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole('parent')}
                    className={`py-2 text-xs font-medium rounded-md transition-colors ${
                      role === 'parent'
                        ? 'bg-[#C9A227] text-[#080808] font-semibold shadow-sm'
                        : 'text-[#A1A1AA] hover:text-white'
                    }`}
                  >
                    Parent / Faculty
                  </button>
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-mono text-[#D4D4D8] uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#71717A] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Priyanshu Sharma"
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-black/40 border border-white/10 text-sm text-white placeholder-[#71717A] focus:outline-none focus:border-[#C9A227]"
                    />
                  </div>
                  {errors.fullName && <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-[#D4D4D8] uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#71717A] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sharma@domain.com"
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-black/40 border border-white/10 text-sm text-white placeholder-[#71717A] focus:outline-none focus:border-[#C9A227]"
                    />
                  </div>
                  {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Phone & Class / Grad Year */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-xs font-mono text-[#D4D4D8] uppercase tracking-wider mb-1.5">
                    Contact Phone *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#71717A] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-black/40 border border-white/10 text-sm text-white placeholder-[#71717A] focus:outline-none focus:border-[#C9A227]"
                    />
                  </div>
                  {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="cohortOrGrade" className="block text-xs font-mono text-[#D4D4D8] uppercase tracking-wider mb-1.5">
                    {role === 'student' ? 'Class & Section *' : role === 'alumnus' ? 'Graduation Batch *' : 'Affiliation *'}
                  </label>
                  <div className="relative">
                    <BookOpen className="w-4 h-4 text-[#71717A] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      id="cohortOrGrade"
                      type="text"
                      value={formData.cohortOrGrade}
                      onChange={(e) => setFormData({ ...formData, cohortOrGrade: e.target.value })}
                      placeholder={role === 'student' ? 'e.g. Grade XI - Science' : 'e.g. Class of 2018'}
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-black/40 border border-white/10 text-sm text-white placeholder-[#71717A] focus:outline-none focus:border-[#C9A227]"
                    />
                  </div>
                  {errors.cohortOrGrade && <p className="text-xs text-red-400 mt-1">{errors.cohortOrGrade}</p>}
                </div>
              </div>

              {/* Area of Interest / Professional Field */}
              <div>
                <label htmlFor="fieldOrStream" className="block text-xs font-mono text-[#D4D4D8] uppercase tracking-wider mb-1.5">
                  Primary Discipline of Interest
                </label>
                <select
                  id="fieldOrStream"
                  value={formData.fieldOrStream}
                  onChange={(e) => setFormData({ ...formData, fieldOrStream: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg bg-black/40 border border-white/10 text-sm text-white focus:outline-none focus:border-[#C9A227]"
                >
                  <option value="" className="bg-[#141416]">Select a discipline (optional)</option>
                  {FOOTPRINTS_CONFIG.categories.slice(1).map((cat) => (
                    <option key={cat} value={cat} className="bg-[#141416]">
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mentorship Questions / Note */}
              <div>
                <label htmlFor="mentorQuestions" className="block text-xs font-mono text-[#D4D4D8] uppercase tracking-wider mb-1.5">
                  Questions or Goals for Alumni Mentors
                </label>
                <textarea
                  id="mentorQuestions"
                  rows={3}
                  value={formData.mentorQuestions}
                  onChange={(e) => setFormData({ ...formData, mentorQuestions: e.target.value })}
                  placeholder="Tell us what career or academic decisions you are currently exploring..."
                  className="w-full px-3 py-2.5 rounded-lg bg-black/40 border border-white/10 text-sm text-white placeholder-[#71717A] focus:outline-none focus:border-[#C9A227]"
                />
              </div>

              {/* Privacy Notice */}
              <p className="text-xs text-[#71717A] leading-relaxed">
                By submitting this form, you agree to receive communications regarding Shalom Footprints 2026. Delegate data is kept confidential and strictly restricted to the school organizing committee.
              </p>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full font-btn py-3.5 px-6 rounded-lg bg-[#C9A227] hover:bg-[#E8D9A8] active:bg-[#B38D1B] text-[#080808] font-semibold text-xs tracking-wider uppercase transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Processing Registration...</span>
                  </>
                ) : (
                  <>
                    <span>SUBMIT REGISTRATION APPLICATION</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
