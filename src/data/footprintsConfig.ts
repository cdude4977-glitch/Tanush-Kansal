/**
 * @file footprintsConfig.ts
 * Central configuration file for SHALOM FOOTPRINTS
 * 
 * Organizers can update event schedules, speaker rosters, awards, registration links,
 * and contact info here without touching layout code.
 */

export interface AlumniProfile {
  id: string;
  name: string;
  graduationYear: string;
  field: string;
  role: string;
  organization: string;
  introduction: string;
  mentorshipTopics: string[];
  image: string;
  linkedinUrl?: string;
  isConfirmed: boolean;
}

export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  category: 'Registration' | 'Keynote' | 'Mentorship' | 'Interactive' | 'Awards' | 'Networking';
}

export interface AwardCategory {
  id: string;
  title: string;
  description: string;
  eligibility: string;
  criteria: string;
  status: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const FOOTPRINTS_CONFIG = {
  brand: {
    name: "SHALOM FOOTPRINTS",
    shortName: "Footprints",
    school: "Shalom Hills International School",
    primaryTagline: "They've Walked the Path. Now, They'll Help You Find Yours.",
    supportingTagline: "Every journey leaves a footprint. Every footprint can guide a future.",
    eventDate: "14 November 2026",
    isoEventDate: "2026-11-14T17:00:00+05:30",
    venueName: "Main Auditorium & Campus Quadrangle",
    venueAddress: "Shalom Hills International School, Sushant Lok Phase I, Sector 43, Gurugram, Haryana 122002",
    description: "An evening of alumni stories, meaningful mentorship, shared experiences, and possibilities for the future.",
  },

  urls: {
    // Configurable primary registration link
    registration: "https://example.com/shalom-footprints-registration",
    schoolWebsite: "https://shalomhills.com",
    googleMapsDirections: "https://maps.google.com/?q=Shalom+Hills+International+School+Gurugram",
    emailContact: "footprints@shalomhills.com",
    phoneContact: "+91 (0124) 4040605 / 4460520",
  },

  theme: {
    midnightBlack: "#080808",
    richCharcoal: "#111111",
    graphiteSurface: "#18181B",
    antiqueGold: "#C9A227",
    champagneGold: "#E8D9A8",
    warmIvory: "#FFF7E6",
    deepEmerald: "#0B6E4F",
  },

  story: {
    eyebrow: "MORE THAN A REUNION",
    headline: "Every Journey Leaves Something Behind.",
    bodyFirst: "Every alumnus was once a student with questions, ambitions, and a future waiting to unfold. Today, having travelled their own paths, they return with experiences that cannot be found in textbooks alone.",
    bodySecond: "Shalom Footprints brings these journeys together, creating an opportunity for students to learn from the people who once stood where they stand today.",
    keyWords: ["Experience", "Guidance", "Possibility"],
  },

  mentorshipPillars: [
    {
      id: "career-clarity",
      title: "Career Clarity",
      subtitle: "Navigating Modern Industry Landscapes",
      description: "Learn about emerging professional fields, career pathways, day-to-day workplace realities, and academic prerequisites across diverse sectors.",
      icon: "Compass",
      focusAreas: ["Industry Trends", "Degree Selection", "Portfolio & Skill Mapping", "Internship Mindset"],
    },
    {
      id: "lessons-beyond",
      title: "Lessons Beyond the Classroom",
      subtitle: "The Unspoken Rules of Growth",
      description: "Hear first-hand accounts of navigating unexpected setbacks, making pivotal decisions, and cultivating resilience outside traditional curricula.",
      icon: "Sparkles",
      focusAreas: ["Handling Uncertainty", "Decision Making", "Mental Well-being", "Lifelong Learning"],
    },
    {
      id: "community-legacy",
      title: "A Community That Gives Back",
      subtitle: "Lifelong Alumni-Student Fellowship",
      description: "Build enduring bonds with mentors who walked the exact same corridors, understand the school's heritage, and are committed to championing the next generation.",
      icon: "Users",
      focusAreas: ["Alumni Network Access", "Peer Connections", "School Community Bonds", "Collaborative Projects"],
    },
  ],

  categories: [
    "All Fields",
    "Technology",
    "Business & Entrepreneurship",
    "Medicine & Healthcare",
    "Law",
    "Engineering",
    "Design & Creative Industries",
    "Finance",
    "Civil Services",
    "Higher Education",
  ],

  // Illustrative profile records clearly marked as placeholder until official confirmed submission
  alumniProfiles: [
    {
      id: "alum-1",
      name: "Aarav Mehrotra",
      graduationYear: "Class of 2017",
      field: "Technology",
      role: "AI & Distributed Systems Architect",
      organization: "CloudScale Systems",
      introduction: "Specialises in scaling machine learning infrastructure. Passioned about demystifying computing careers and guiding students curious about math and software.",
      mentorshipTopics: ["Software Architecture", "AI Foundations", "University Computer Science", "Building Side Projects"],
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      linkedinUrl: "https://linkedin.com",
      isConfirmed: false,
    },
    {
      id: "alum-2",
      name: "Dr. Ananya Singhania",
      graduationYear: "Class of 2014",
      field: "Medicine & Healthcare",
      role: "Surgical Registrar & Clinical Researcher",
      organization: "AIIMS / National Health Research",
      introduction: "Navigated undergraduate medicine, residency pressures, and biomedical research. Helps aspiring doctors understand clinical reality and patient care.",
      mentorshipTopics: ["Medical School Entrance", "Clinical Residency Realities", "Biomedical Ethics", "Work-Life Balance in Healthcare"],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      linkedinUrl: "https://linkedin.com",
      isConfirmed: false,
    },
    {
      id: "alum-3",
      name: "Rohan Kapoor",
      graduationYear: "Class of 2016",
      field: "Business & Entrepreneurship",
      role: "Founder & Product Lead",
      organization: "FinVantage Global",
      introduction: "Built a fintech platform serving Southeast Asia after working in strategy consulting. Guides students interested in startups, venture building, and market strategy.",
      mentorshipTopics: ["Early Stage Ideation", "Pitching & Capital", "Economics & Business Strategy", "Team Leadership"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      linkedinUrl: "https://linkedin.com",
      isConfirmed: false,
    },
    {
      id: "alum-4",
      name: "Tanvi Deshmukh",
      graduationYear: "Class of 2018",
      field: "Law",
      role: "Corporate Counsel & Tech Policy Advocate",
      organization: "Juris Associates",
      introduction: "Advises international tech companies on data governance, intellectual property, and regulatory frameworks. Passionate about public debate and legal careers.",
      mentorshipTopics: ["Corporate Law Careers", "Moot Court & Debate Prep", "Tech Policy & Ethics", "International LL.M Paths"],
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
      linkedinUrl: "https://linkedin.com",
      isConfirmed: false,
    },
    {
      id: "alum-5",
      name: "Vikramaditya Rao",
      graduationYear: "Class of 2015",
      field: "Design & Creative Industries",
      role: "Senior Experience Director",
      organization: "Atelier Motion & Spatial Lab",
      introduction: "Creates physical and digital brand installations. Passionate about breaking the myth that creative fields don't offer sustainable career pathways.",
      mentorshipTopics: ["Visual & Spatial Design", "Creative Portfolio Preparation", "Design School Admissions", "Interactive Media"],
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      linkedinUrl: "https://linkedin.com",
      isConfirmed: false,
    },
    {
      id: "alum-6",
      name: "Meera Sen",
      graduationYear: "Class of 2019",
      field: "Finance",
      role: "Quantitative Analyst & ESG Associate",
      organization: "Apex Capital Partners",
      introduction: "Combines mathematics, economic modeling, and sustainable investment principles. Eager to advise students in commerce, stats, and quantitative modeling.",
      mentorshipTopics: ["Quantitative Finance", "Investment Analysis", "Chartered Qualifications (CFA/FRM)", "Financial Literacy for Youth"],
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&q=80",
      linkedinUrl: "https://linkedin.com",
      isConfirmed: false,
    },
    {
      id: "alum-7",
      name: "Kabir Varma",
      graduationYear: "Class of 2013",
      field: "Civil Services",
      role: "Public Policy & Administration Fellow",
      organization: "Centre for Governance & Policy",
      introduction: "Experienced in public administrative reform, civic technology initiatives, and public competitive examinations. Mentors students seeking public service careers.",
      mentorshipTopics: ["UPSC / Civil Services Mindset", "Public Policy Analysis", "Civic Engagement", "General Studies Preparation"],
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
      linkedinUrl: "https://linkedin.com",
      isConfirmed: false,
    },
    {
      id: "alum-8",
      name: "Sanya Chopra",
      graduationYear: "Class of 2020",
      field: "Higher Education",
      role: "Doctoral Scholar & Teaching Fellow",
      organization: "Institute of Advanced Interdisciplinary Studies",
      introduction: "Completed overseas Master's and is pursuing advanced research in environmental economics. Guides students on scholarship applications and academic research.",
      mentorshipTopics: ["Overseas University Admissions", "Scholarship Essay Writing", "Research Methodology", "Academic Career Pathways"],
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
      linkedinUrl: "https://linkedin.com",
      isConfirmed: false,
    },
  ],

  highlights: [
    {
      title: "Alumni Conversations",
      tagline: "Unscripted, Honest Dialogues",
      description: "Small-group interactive dialogues where alumni candidly share their university transitions, early career hurdles, and the lessons they wish they knew in high school.",
      span: "col-span-1 md:col-span-2",
      badge: "Dialogue & Insights",
    },
    {
      title: "Career Insights",
      tagline: "Demystifying Modern Professions",
      description: "Direct exposure to fast-evolving fields like artificial intelligence, biomedical research, corporate dispute resolution, sustainable finance, and design.",
      span: "col-span-1",
      badge: "Industry Intelligence",
    },
    {
      title: "Mentorship & Guidance",
      tagline: "Actionable Advice for Tomorrow",
      description: "Targeted discussions focusing on subject stream selection, university admission preparation, profile building, and personal career roadmaps.",
      span: "col-span-1",
      badge: "Personal Growth",
    },
    {
      title: "Shared Experiences",
      tagline: "Connecting Across Decades",
      description: "Shared stories rooted in Shalom Hills traditions, celebrating how school values translate into diverse global accomplishments.",
      span: "col-span-1 md:col-span-2",
      badge: "Legacy & Belonging",
    },
    {
      title: "Recognition & Prizes",
      tagline: "Honouring Impact & Contribution",
      description: "Special institutional awards and commendation prizes honoring student initiative, exemplary alumni mentorship, and community leadership.",
      span: "col-span-1",
      badge: "Celebration",
    },
    {
      title: "Community Connections",
      tagline: "A Network For Life",
      description: "Formal launch of the Shalom Footprints Alumni Mentorship Directory, establishing a continuous bridge for current and future cohorts.",
      span: "col-span-1 md:col-span-2",
      badge: "Ongoing Community",
    },
  ],

  journeyStages: [
    {
      step: "01",
      name: "Discover",
      title: "Explore the Possibilities",
      description: "Browse alumni profiles across ten professional domains and pinpoint fields aligned with your curiosity.",
    },
    {
      step: "02",
      name: "Register",
      title: "Reserve Your Seat",
      description: "Submit the registration interest form to secure access to focused breakout circles and keynote sessions.",
    },
    {
      step: "03",
      name: "Connect",
      title: "Meet Your Mentors",
      description: "Gather at Shalom Hills International School on 14 November 2026 to engage in live conversations.",
    },
    {
      step: "04",
      name: "Learn",
      title: "Gain First-Hand Clarity",
      description: "Ask open questions, absorb unwritten career lessons, and chart your upcoming academic milestones.",
    },
    {
      step: "05",
      name: "Celebrate",
      title: "Commemorate & Honor",
      description: "Participate in the closing awards, recognition prizes ceremony, and celebratory fellowship.",
    },
  ],

  // Configurable awards section
  awards: {
    statusNote: "Official prize categories and nomination criteria are currently being finalized by the Shalom Hills organizing committee.",
    categories: [
      {
        id: "award-1",
        title: "Trailblazer Alumni Award",
        description: "Recognises an alumnus whose pioneering contributions in their professional field exemplify the spirit of innovation and perseverance.",
        eligibility: "Open to all verified Shalom Hills alumni.",
        criteria: "Demonstrated breakthrough leadership and sustained community contribution.",
        status: "Nominations to open shortly",
      },
      {
        id: "award-2",
        title: "Young Inquirer Scholarship Prize",
        description: "Commends a participating current student demonstrating exceptional curiosity, articulate inquiry, and career initiative during the mentorship sessions.",
        eligibility: "Enrolled Shalom Hills students in Grades IX through XII.",
        criteria: "Evaluated by a combined faculty and alumni mentor panel.",
        status: "Awarded during the evening ceremony",
      },
      {
        id: "award-3",
        title: "Torchbearer Mentorship Citation",
        description: "Honours dedicated alumni mentors who provide outstanding, committed guidance to prospective scholars.",
        eligibility: "Alumni registered as event mentor participants.",
        criteria: "Peer feedback and student mentorship nominations.",
        status: "Announced on 14 November 2026",
      },
    ],
  },

  schedule: {
    note: "Proposed schedule timeline. Final room allocations and slot timings will be emailed to registered attendees prior to the event date.",
    items: [
      {
        time: "04:30 PM – 05:15 PM",
        title: "Attendee Check-in & Welcome Reception",
        description: "Registration confirmation, delegate badge collection, and informal quadrangle tea reception.",
        category: "Registration",
      },
      {
        time: "05:15 PM – 05:45 PM",
        title: "Opening Ceremony & Footprints Address",
        description: "Welcome address by School Leadership, lighting of the ceremonial lamp, and the Footprints vision prologue.",
        category: "Keynote",
      },
      {
        time: "05:45 PM – 06:45 PM",
        title: "Thematic Mentorship Breakout Circles",
        description: "Interactive roundtables grouped by discipline: Technology, Healthcare, Law, Finance, Design, Civil Services & Higher Ed.",
        category: "Mentorship",
      },
      {
        time: "06:45 PM – 07:30 PM",
        title: "Plenary Alumni Panel: Navigating Crossroads",
        description: "Moderated panel on managing career uncertainty, university choices, and building resilience.",
        category: "Interactive",
      },
      {
        time: "07:30 PM – 08:00 PM",
        title: "Recognition Ceremony & Prizes",
        description: "Presentation of the Trailblazer Alumni Accolades, Young Inquirer Commendations, and Special Citations.",
        category: "Awards",
      },
      {
        time: "08:00 PM – 08:45 PM",
        title: "Alumni-Student Fellowship & High Tea",
        description: "Informal networking, one-on-one follow-ups, and commemorative photo opportunities in the atrium.",
        category: "Networking",
      },
    ] as ScheduleItem[],
  },

  faqs: [
    {
      question: "What is Shalom Footprints?",
      answer: "Shalom Footprints is a flagship mentorship and guidance initiative hosted by Shalom Hills International School. It brings accomplished alumni back to their alma mater to share their real-world journeys, advise current students on career and academic decisions, and celebrate the enduring bond of the school community.",
      category: "About",
    },
    {
      question: "Who can attend the event?",
      answer: "The event is open to current Shalom Hills International School students (primarily Grades IX through XII), their parents, and registered alumni from all graduating batches. Prior registration is required due to auditorium capacity.",
      category: "Attendance",
    },
    {
      question: "How do I register?",
      answer: "You can reserve your seat through the 'Register Now' button on this website, which directs to the official event registration portal. Both current students and visiting alumni must register to confirm their attendance.",
      category: "Registration",
    },
    {
      question: "Where will the event take place?",
      answer: "Shalom Footprints takes place on Saturday, 14 November 2026, on the campus grounds and Main Auditorium of Shalom Hills International School, Sushant Lok Phase I, Sector 43, Gurugram, Haryana.",
      category: "Venue",
    },
    {
      question: "What activities are planned?",
      answer: "The evening features opening keynote remarks, small-group mentorship circles categorized by professional field, a moderated cross-generational panel, the recognition and prizes ceremony, and an informal high-tea fellowship.",
      category: "Program",
    },
    {
      question: "Will there be prizes or recognition?",
      answer: "Yes. The event celebrates achievements across the community, featuring institutional citations for inspiring alumni and scholarship commendations for engaged student participants. Full criteria will be announced during the ceremony.",
      category: "Awards",
    },
    {
      question: "Whom should I contact for assistance?",
      answer: "For registration queries, alumni speaker participation, or special arrangements, please contact the organizing committee at footprints@shalomhills.com or via the school reception at +91 (0124) 4040605 / 4460520.",
      category: "Contact",
    },
  ],
};
