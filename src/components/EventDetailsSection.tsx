import React, { useState } from 'react';
import { FOOTPRINTS_CONFIG } from '../data/footprintsConfig';
import { Calendar, Clock, MapPin, Navigation, Download, CheckCircle, ShieldCheck } from 'lucide-react';

export const EventDetailsSection: React.FC = () => {
  const [copiedCalendar, setCopiedCalendar] = useState(false);

  // Helper to generate Google Calendar event link
  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent("Shalom Footprints — Alumni Mentorship & Guidance Event");
    const details = encodeURIComponent("They've Walked the Path. Now, They'll Help You Find Yours. Hosted at Shalom Hills International School.");
    const location = encodeURIComponent("Shalom Hills International School, Sushant Lok Phase I, Sector 43, Gurugram, Haryana 122002");
    // 14 November 2026 16:30 to 20:45 IST (11:00 UTC to 15:15 UTC)
    const dates = "20261114T110000Z/20261114T151500Z";
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  // Helper to download .ics iCalendar file
  const downloadIcsFile = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Shalom Hills International School//Shalom Footprints//EN',
      'BEGIN:VEVENT',
      'UID:footprints-2026-shalomhills@event',
      'DTSTAMP:20261029T000000Z',
      'DTSTART:20261114T110000Z',
      'DTEND:20261114T151500Z',
      'SUMMARY:Shalom Footprints — Alumni Mentorship Event',
      'DESCRIPTION:Alumni Mentorship and Guidance Event at Shalom Hills International School. They have walked the path, now they will help you find yours.',
      'LOCATION:Shalom Hills International School, Gurugram',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'shalom-footprints-2026.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setCopiedCalendar(true);
    setTimeout(() => setCopiedCalendar(false), 3000);
  };

  return (
    <section id="details" className="py-24 sm:py-32 bg-[#080808] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-[#C9A227] uppercase block mb-3">
            LOGISTICS & AGENDA
          </span>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-white leading-tight mb-4">
            EVENT <span className="italic text-[#E8D9A8]">DETAILS.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1AA] font-light leading-relaxed">
            Essential information regarding dates, campus access, session timelines, and delegate instructions for Saturday, 14 November 2026.
          </p>
        </div>

        {/* Date, Venue & Calendar Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          
          {/* Main Date & Time Card (7 Cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#111113] border border-white/10 p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            {/* Subtle corner path motif */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#C9A227]/5 rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded bg-[#C9A227]/15 border border-[#C9A227]/30 text-xs font-mono text-[#E8D9A8] uppercase tracking-wider">
                  OFFICIAL DATE
                </span>
                <span className="text-xs font-mono text-[#71717A]">
                  SATURDAY · EVENING SESSIONS
                </span>
              </div>

              <div className="font-editorial text-5xl sm:text-6xl text-white font-normal mb-4 tracking-tight">
                14 NOVEMBER <span className="text-[#C9A227]">2026</span>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-[#D4D4D8]">
                  <Clock className="w-4 h-4 text-[#C9A227] shrink-0" />
                  <span>04:30 PM – 08:45 PM IST (Check-in commences at 04:30 PM)</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#D4D4D8]">
                  <MapPin className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                  <span>{FOOTPRINTS_CONFIG.brand.venueAddress}</span>
                </div>
              </div>
            </div>

            {/* Calendar CTA buttons */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
              <a
                href={getGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-[#C9A227] hover:bg-[#E8D9A8] text-[#080808] font-semibold text-xs font-btn tracking-wider uppercase flex items-center gap-2 transition-all shadow-md"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>ADD TO GOOGLE CALENDAR</span>
              </a>

              <button
                onClick={downloadIcsFile}
                className="px-5 py-2.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-medium text-xs font-btn tracking-wider uppercase flex items-center gap-2 transition-all cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-[#C9A227]" />
                <span>{copiedCalendar ? 'SAVED .ICS FILE' : 'DOWNLOAD .ICS'}</span>
              </button>

              <a
                href={FOOTPRINTS_CONFIG.urls.googleMapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#A1A1AA] hover:text-[#C9A227] flex items-center gap-1.5 transition-colors ml-auto"
              >
                <Navigation className="w-3.5 h-3.5 text-[#C9A227]" />
                <span>View Google Maps</span>
              </a>
            </div>
          </div>

          {/* Campus Grounds Visual (5 Cols) */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-white/10 relative min-h-[300px] bg-[#18181B] group shadow-2xl">
            <img
              src="/src/assets/images/campus_grounds_dusk_1793290598629.jpg"
              alt="Shalom Hills International School modern building at twilight"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-[#080808]/30 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#C9A227] block mb-1">
                HOST VENUE
              </span>
              <h3 className="font-editorial text-2xl text-white font-normal mb-1">
                {FOOTPRINTS_CONFIG.brand.school}
              </h3>
              <p className="text-xs text-[#A1A1AA] font-light">
                Main Auditorium, Senior Library & Glass Atrium
              </p>
            </div>
          </div>

        </div>

        {/* Schedule Timeline Table */}
        <div className="rounded-2xl bg-[#111113] border border-white/10 p-6 sm:p-10 mb-12 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#C9A227]">
                OFFICIAL ORDER OF PROCEEDINGS
              </span>
              <h3 className="font-editorial text-3xl text-white font-normal mt-1">
                Proposed Evening Schedule
              </h3>
            </div>
            <span className="text-xs text-[#71717A] italic max-w-sm text-left sm:text-right">
              {FOOTPRINTS_CONFIG.schedule.note}
            </span>
          </div>

          <div className="divide-y divide-white/5">
            {FOOTPRINTS_CONFIG.schedule.items.map((item, index) => (
              <div
                key={item.time}
                className="py-5 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-white/[0.01] px-2 rounded-lg transition-colors"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <span className="font-mono text-xs text-[#71717A] w-6 shrink-0 pt-0.5 sm:pt-0">
                    0{index + 1}
                  </span>
                  <div>
                    <span className="text-xs font-mono text-[#C9A227] block mb-0.5">
                      {item.time}
                    </span>
                    <h4 className="font-editorial text-xl sm:text-2xl text-white font-normal group-hover:text-[#E8D9A8] transition-colors">
                      {item.title}
                    </h4>
                  </div>
                </div>

                <div className="md:max-w-md text-xs text-[#A1A1AA] leading-relaxed pl-10 md:pl-0 font-light">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Participation Instructions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
            <ShieldCheck className="w-5 h-5 text-[#C9A227] mb-3" />
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono mb-2">
              Eligibility & Entry
            </h4>
            <p className="text-xs text-[#A1A1AA] leading-relaxed font-light">
              Current Shalom Hills students (Grades IX to XII), alumni from all graduating classes, and faculty members. Prior registration required for pass generation.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
            <CheckCircle className="w-5 h-5 text-[#C9A227] mb-3" />
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono mb-2">
              Dress Code
            </h4>
            <p className="text-xs text-[#A1A1AA] leading-relaxed font-light">
              Smart formal or formal school uniform for current students. Business casual or formal evening attire for visiting alumni and guests.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
            <MapPin className="w-5 h-5 text-[#C9A227] mb-3" />
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono mb-2">
              Campus Security & Parking
            </h4>
            <p className="text-xs text-[#A1A1AA] leading-relaxed font-light">
              Designated parking available via Gate No. 2. Please carry a valid digital registration confirmation on your mobile device for campus entry.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
