import React, { useState } from 'react';
import { FOOTPRINTS_CONFIG } from '../data/footprintsConfig';
import { Mail, Phone, MapPin, Send, ExternalLink, CheckCircle2, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [inquirySent, setInquirySent] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryEmail.trim() || !inquiryMessage.trim()) return;

    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
      setInquiryName('');
      setInquiryEmail('');
      setInquiryMessage('');
    }, 4000);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#080808] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-[#C9A227] uppercase block mb-3">
            DIRECT INQUIRIES & PARTNERSHIPS
          </span>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-white leading-tight mb-4">
            LET’S KEEP THE <br />
            <span className="italic text-[#E8D9A8]">CONVERSATION GOING.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1AA] font-light leading-relaxed">
            Reach out to the Shalom Hills Alumni Mentorship Secretariat with inquiries regarding speaker participation, student delegations, or institutional support.
          </p>
        </div>

        {/* 2-Column Contact Info + Quick Message Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Configured Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="p-6 rounded-xl bg-[#111113] border border-white/10 hover:border-[#C9A227]/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#C9A227]/10 text-[#C9A227] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#71717A] block mb-1">
                    EMAIL INQUIRIES
                  </span>
                  <a
                    href={`mailto:${FOOTPRINTS_CONFIG.urls.emailContact}`}
                    className="text-base sm:text-lg font-medium text-white hover:text-[#C9A227] transition-colors break-all"
                  >
                    {FOOTPRINTS_CONFIG.urls.emailContact}
                  </a>
                  <p className="text-xs text-[#71717A] mt-1 font-light">
                    Responses within 1–2 working days.
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-xl bg-[#111113] border border-white/10 hover:border-[#C9A227]/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#C9A227]/10 text-[#C9A227] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#71717A] block mb-1">
                    SCHOOL ADMINISTRATIVE DESK
                  </span>
                  <a
                    href={`tel:${FOOTPRINTS_CONFIG.urls.phoneContact.replace(/[^0-9+]/g, '')}`}
                    className="text-base sm:text-lg font-medium text-white hover:text-[#C9A227] transition-colors"
                  >
                    {FOOTPRINTS_CONFIG.urls.phoneContact}
                  </a>
                  <p className="text-xs text-[#71717A] mt-1 font-light">
                    Office Hours: Mon – Fri (08:30 AM to 03:30 PM IST)
                  </p>
                </div>
              </div>
            </div>

            {/* Address & Venue Card */}
            <div className="p-6 rounded-xl bg-[#111113] border border-white/10 hover:border-[#C9A227]/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#C9A227]/10 text-[#C9A227] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#71717A] block mb-1">
                    HOST CAMPUS VENUE
                  </span>
                  <div className="text-sm sm:text-base font-medium text-white">
                    {FOOTPRINTS_CONFIG.brand.school}
                  </div>
                  <p className="text-xs text-[#A1A1AA] mt-1 leading-relaxed font-light">
                    {FOOTPRINTS_CONFIG.brand.venueAddress}
                  </p>
                  <a
                    href={FOOTPRINTS_CONFIG.urls.googleMapsDirections}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#C9A227] hover:text-[#E8D9A8] mt-3 font-mono uppercase tracking-wider"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Column 2: Interactive Inquiries Form (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-2xl bg-[#111113] border border-white/10 shadow-2xl">
            <h3 className="font-editorial text-2xl sm:text-3xl text-white font-normal mb-2">
              Send an Inquiry to the Organizers
            </h3>
            <p className="text-xs sm:text-sm text-[#A1A1AA] font-light mb-6">
              Seeking specific guidance or proposing an alumni mentorship panel? Leave a message below.
            </p>

            {inquirySent ? (
              <div className="p-6 rounded-xl bg-[#080808] border border-[#C9A227]/40 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-[#C9A227] mx-auto" />
                <h4 className="font-editorial text-2xl text-white">Inquiry Dispatched</h4>
                <p className="text-xs text-[#A1A1AA] max-w-sm mx-auto font-light">
                  Thank you, your message has been transmitted to the Shalom Footprints secretariat.
                </p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#71717A] mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      placeholder="e.g. Maya Sen"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-sm text-white placeholder-[#71717A] focus:outline-none focus:border-[#C9A227]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#71717A] mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={inquiryEmail}
                      onChange={(e) => setInquiryEmail(e.target.value)}
                      placeholder="e.g. maya@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-sm text-white placeholder-[#71717A] focus:outline-none focus:border-[#C9A227]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#71717A] mb-1.5">
                    Message or Proposal
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    placeholder="Describe your inquiry, prospective mentorship topic, or student cohort question..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-sm text-white placeholder-[#71717A] focus:outline-none focus:border-[#C9A227]"
                  />
                </div>

                <button
                  type="submit"
                  className="font-btn px-6 py-3 rounded-lg bg-[#C9A227] hover:bg-[#E8D9A8] text-[#080808] font-semibold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>SEND INQUIRY</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
