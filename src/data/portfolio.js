export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "offers", label: "Offers" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const HERO = {
  name: "Noah Manning",
  typingPhrase:
    "Digital Risk Consultant @ EY · AI Software Engineer · iOS Developer",
  paragraph:
    "I build things - from enterprise risk frameworks at EY to AI systems and iOS apps shipped to production. B.B.A. in Computer Information Systems from James Madison University.",
};

export const ABOUT = {
  bio: "I'm a 2026 graduate of James Madison University's Honors College with a B.B.A. in Computer Information Systems and a focus in Cybersecurity. I work at Ernst & Young as a Digital Risk Consultant on SOX compliance, IT control testing, and cloud governance for enterprise clients. Alongside that I ship software - most recently an engagement intelligence platform built solo on contract for a professional services firm, and EnvyAI, a full-stack AI skincare app live on the App Store. I'm drawn to the intersection of security, cloud, and AI.",
  stats: [
    { value: "4×", label: "AWS Certified" },
    { value: "3.5", label: "GPA · Honors College" },
    { value: "2", label: "Apps Shipped" },
    { value: "Active", label: "Security Clearance Eligible" },
  ],
};

export const SKILLS = [
  {
    category: "Programming & Web",
    items: ["Python", "JavaScript", "HTML/CSS", "Bootstrap", "Java"],
  },
  {
    category: "Cloud & Infrastructure",
    items: [
      "AWS EC2",
      "AWS S3",
      "AWS IAM",
      "AWS Lambda",
      "AWS Bedrock",
      "AWS GuardDuty",
      "AWS CloudTrail",
      "Azure",
      "SAP BW/BTP",
    ],
  },
  {
    category: "Cybersecurity & Risk",
    items: [
      "SOX Compliance",
      "Control Testing",
      "RACMs",
      "Risk Assessment",
      "Threat Modeling",
    ],
  },
  {
    category: "AI & ML",
    items: [
      "Prompt Engineering",
      "Claude",
      "GPT-4",
      "Gemini",
      "Supervised Learning",
      "Unsupervised Learning",
    ],
  },
  {
    category: "Data & Reporting",
    items: ["Power BI", "Excel", "MySQL", "SQL Server", "Oracle"],
  },
  {
    category: "Governance",
    items: [
      "SAP GRC",
      "SalesPoint",
      "AWS Artifact",
      "NIST CSF",
      "PwC CAD",
    ],
  },
  {
    category: "Networking",
    items: ["TCP/IP", "Firewalls", "Linux", "VPNs", "TLS", "Subnetting"],
  },
  {
    category: "Tools",
    items: [
      "Microsoft Project",
      "UML",
      "ERD",
      "Draw.io",
      "Git",
      "Cursor",
    ],
  },
];

export const EXPERIENCE = [
  {
    company: "KeyDelta",
    role: "AI Software Engineer (Contract)",
    location: "Remote",
    dates: "June 2026 - August 2026",
    bullets: [
      "Sole engineer on an engagement intelligence platform, taking a professional services firm from an empty cloud subscription to a documented, deployable system under weekly review with the Managing Partner.",
      "Replaced roughly 20 minutes of manual daily engagement reconstruction per partner with an automated briefing delivered before the workday started.",
      "Built scheduled Python ingest across Microsoft Graph mail and calendar, meeting transcripts, and partner-reviewed summaries into a normalized, de-duplicated PostgreSQL store with full provenance.",
      "Integrated Claude as a constrained interpretation layer - surfacing decisions, ownership, and stalling threads without generating facts, with every claim traceable to its source rows.",
      "Delivered infrastructure as code in Bicep with CI on every push, plus 27 handoff documents and a credential-rotation runbook validated against live resource configuration.",
    ],
  },
  {
    company: "Ernst & Young (EY)",
    role: "Digital Risk Consultant",
    location: "Richmond, VA",
    dates: "June 2025 - Present",
    bullets: [
      "Supported cybersecurity and risk initiatives for Altria, reducing SOX control exceptions by 18%.",
      "Conducted 28 IT control tests across an internal audit cycle with zero high-risk findings and 2 accelerated remediations.",
      "Developed 130+ RACM ToD comparisons, reducing documentation review time by 35%.",
      "Validated 40+ SAP BW reports in Power BI and assisted Azure Cloud migration, improving accuracy by 20%.",
      "Performed 35 control owner security checks, identifying access gaps and remediating 5 outdated roles.",
    ],
  },
  {
    company: "Global Career Accelerator",
    role: "Web Development Intern",
    location: "Virginia Beach, VA",
    dates: "Aug 2024 - Feb 2025",
    bullets: [
      "Built and maintained 8+ client web apps using HTML, CSS, Bootstrap, and JavaScript.",
      "Integrated third-party APIs into client platforms, reducing task completion time by 50%.",
    ],
  },
  {
    company: "T Adil Awan Consulting",
    role: "SEO Analyst",
    location: "Virginia Beach, VA",
    dates: "June 2023 - Feb 2024",
    bullets: [
      "Optimized Google campaigns generating $110K+ in ad value; used AI tools to increase client ROI by 46%.",
    ],
  },
];

export const PROJECTS = [
  {
    name: "Engagement Intelligence Platform",
    tagline: "Daily Intelligence Layer for a Professional Services Firm",
    stack: [
      "Python 3.11",
      "Azure Functions",
      "PostgreSQL",
      "Microsoft Graph API",
      "Claude API",
      "Bicep",
      "GitHub Actions",
    ],
    meta: "KeyDelta · Contract Engineer · 2026 · Solo Build",
    bullets: [
      "Partners each rebuilt the same picture every morning - digging through mail, calendar, and meeting notes to work out where an engagement stood, and arriving at different answers. Built a system that assembles that picture once, overnight, and delivers it as a briefing before anyone logs on.",
      "Fed three input streams - mail and calendar, meeting transcripts, and partner-approved summaries - into a single PostgreSQL store, normalized and de-duplicated with provenance intact so every downstream claim traces back to a specific row.",
      "Chose a single store over live retrieval so every user gets an identical answer in about a second rather than a minute, and no chat session is ever handed access to the underlying systems.",
      "Constrained the Claude layer to interpretation only - themes, ownership, priority, and engagement health - so it never generates facts, making briefings auditable rather than merely plausible.",
      "Diagnosed a duplicate-send failure where the platform's hard HTTP timeout caused gateways to retry a send that had actually succeeded; solved it with an idempotent claim keyed on date, run label, and recipient set.",
      "Measured generated summaries against partner-approved baselines at 70-75% quality - enough to save real drafting time, not enough to ship unreviewed - and defended how that number was derived.",
      "Ran an adversarial verification pass over the handoff documentation, diffing every written claim against source: it found 19 discrepancies, including a live credential embedded in a build artifact.",
    ],
  },
  {
    name: "EnvyAI",
    tagline: "AI Skincare Analysis iOS App",
    stack: [
      "SwiftUI",
      "Firebase",
      "Anthropic Claude Vision API",
      "RevenueCat",
      "Vercel",
    ],
    meta: "Solo Developer · 2026 · Live on App Store",
    bullets: [
      "Built and shipped a full-stack iOS app from zero to App Store using SwiftUI, Firebase, and Claude Vision API - analyzes skin from photos and generates personalized scores, routines, and product recommendations.",
      "Engineered a custom AI scoring system with structured prompt architecture, penalty/bonus deduction tables, and server-side score clamping to produce calibrated skin assessments across a 2.0-9.8 scale.",
      "Implemented three distinct AI-powered features - face/body scan analysis, foundation shade matching, and a conversational skin consultant - each with dedicated Firebase Cloud Functions, daily usage limits, and tier-based access control.",
      "Built a complete subscription monetization system via RevenueCat with Free, Pro ($4.99/mo), and Premium ($7.99/mo) tiers enforced on client and server, integrated with App Store Connect IAP review flow.",
      "Navigated the full App Store review process through multiple rejection cycles, resolving guideline violations across ATT compliance, privacy disclosures, location permission UX, subscription metadata, and third-party AI data consent.",
      "Architected a real-time Firestore data model tracking scan history, score trends, streak data, and subscription state with bidirectional sync between RevenueCat entitlements and Firestore via webhook.",
    ],
  },
  {
    name: "Alachua Community Collective",
    tagline: "Time Bank Platform",
    stack: [
      "ASP.NET Core",
      "Razor Pages",
      "SQL Server",
      "Entity Framework Core",
      "Claude AI",
    ],
    meta: "Full Stack Developer · Shenandoah Consulting",
    bullets: [
      "Built a full-stack time banking web app for a nonprofit through a client-facing consulting engagement, leveraging AI integration to accelerate development and differentiate from competing teams.",
      "Implemented using ASP.NET Core with Razor Pages, SQL Server, and Entity Framework Core - designed and built the full relational database schema from scratch.",
      "Integrated Claude AI (claude-sonnet-4-20250514) to power intelligent service request matching and category navigation within the platform.",
      "Designed a 15+ table relational database covering custom identity management, time transaction tracking, credential verification, and organization membership systems.",
      "Collaborated directly with a nonprofit client through an agile sprint-based process, presenting demos and incorporating real-time feedback across multiple sprints.",
      "Contributed to migration planning documentation outlining the transition from the quick-hit system to the full production platform, including flat-file to relational database mapping strategy.",
    ],
  },
  {
    name: "Family Arcade",
    tagline: "Real-Time Multiplayer Party Game Platform",
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Upstash Redis",
      "Vercel",
    ],
    meta: "Solo Developer · 2026 · Live · 10 Game Modes",
    link: "https://family-arcade-mocha.vercel.app",
    bullets: [
      "Built a Jackbox-style party platform for up to 12 concurrent players — one screen on the TV, everyone else joining from their phone by QR code, with no accounts and no app — spanning 10 game modes and 2,650 questions, prompts, and puzzles.",
      "Delivered sub-second liveness without websockets on a free serverless tier: the server holds all state and advances the round clock lazily on read, so polling clients stay in sync with no background workers to keep alive, and rounds end early the instant everyone has answered.",
      "Designed a pluggable GameModule interface over a generic stage machine so an eleventh mode ships as one module file, one view file, and one catalog entry — and centralized scoring in the engine, where modules return only base points, so no single game can break the scoreboard.",
      "Guarded Redis room state with a short SET NX PX mutex so two phones submitting in the same instant can't clobber each other, with graceful degradation to in-memory state for local development.",
      "Kept unrevealed answers, the Fibbage truth, the drawing word, and the Faker's identity server-side and out of the client payload — the game can't be won by opening dev tools.",
      "Solved for the living room: a measure-then-transform AutoFit component scales the host screen so a 12-player scoreboard fits beside the content on a TV nobody can scroll, and a lastSeen heartbeat detects a face-down phone so one AFK player doesn't stall every round for its full clock.",
      "Wrote a 5-suite harness running against the production Redis path — an API simulation independently recomputing scoring across 221 checks, a Playwright suite failing on overflow or overlap at TV and phone sizes, a 40-combination matrix playing every mode at 1/2/3/6/12 players, an edge-case audit, and a validator over all 2,650 content items — which caught scoring imbalance and desync bugs before release.",
    ],
  },
  {
    name: "Nut In My Bolts",
    tagline: "3D Nut-Sort Puzzle Game",
    stack: [
      "React",
      "TypeScript",
      "Three.js",
      "Zustand",
      "Vite",
      "Tailwind CSS",
    ],
    meta: "Solo Developer · 2026 · Live · PWA",
    link: "https://nut-in-my-bolts.vercel.app",
    bullets: [
      "Built a 3D nut-sort puzzle - lift runs of same-colored hex nuts off threaded bolts and screw them onto matching stacks until every color is sorted - with Three.js handling the scene and React confined to the UI layer.",
      "Generated every level deterministically from its level number and proved it solvable with a built-in DFS solver before dealing it, so no player can ever be handed an impossible board.",
      "Tuned a difficulty curve from 4 colors across 6 bolts up to 10 colors across 12, dropping to a single spare bolt from level 12 onward.",
      "Kept the engine and React decoupled behind a single Zustand store as the only bridge between them, and synthesized all sound effects procedurally through WebAudio instead of shipping audio files.",
      "Shipped as an installable PWA - web manifest with maskable icons, iOS add-to-home-screen running fullscreen standalone, and Open Graph tags for link previews.",
    ],
  },
  {
    name: "TERRA",
    tagline: "Street-View World Guessing Game",
    stack: [
      "JavaScript",
      "Leaflet",
      "Three.js",
      "Google Street View",
      "Esri Imagery",
      "Vercel",
    ],
    meta: "Solo Developer · 2026 · Live",
    link: "https://terra-rose.vercel.app",
    bullets: [
      "Built a geography game that drops you somewhere on Earth in a real street-view panorama and asks where you are - five rounds a game, no account, free to play.",
      "Scored guesses by haversine distance from true coordinates on an interactive Leaflet map with Esri satellite imagery, persisting scores and streaks in localStorage.",
      "Added seeded challenge links so two players get an identical round sequence from the same URL, making head-to-head scores directly comparable.",
      "Shipped the entire game as a single self-contained HTML file - no build step, no framework, no backend.",
    ],
  },
  {
    name: "Music Geo",
    tagline: "Guess the Music Map",
    stack: [
      "JavaScript",
      "D3.js",
      "TopoJSON",
      "Stripe",
      "Vercel Serverless",
      "Node.js",
    ],
    meta: "Solo Developer · 2026 · Live at music-geo.app",
    link: "https://music-geo.app",
    bullets: [
      "Built a mobile-first globe game where players tap the country or U.S. state tied to an artist's birthplace, a genre's origin, or a festival's home - 390+ questions on a D3 and TopoJSON world map.",
      "Shipped a full subscription business on Stripe with email magic-link auth and signed session tokens, re-verified on every load so cancellations and refunds actually revoke access.",
      "Designed the entitlement check to fail open during a Stripe or network outage - a paying user keeps their last-known state instead of getting locked out mid-outage.",
    ],
  },
  {
    name: "Bible Geo",
    tagline: "Where in the Word?",
    stack: [
      "JavaScript",
      "Interactive Mapping",
      "Offline-First",
      "Vercel",
    ],
    meta: "Solo Developer · 2026 · Live",
    link: "https://bible-geo.vercel.app",
    bullets: [
      "Built a biblical geography game spanning 162 questions across eight historical eras, each rendered on an era-accurate map showing only the cities, names, and borders that existed at that time.",
      "Scored answers by pin precision down to the village level, then taught the result - scripture reference, modern-day location, and historical context on every reveal.",
      "Synthesized the underlying place data from 70+ scholarly sources; runs fully offline and never repeats a question until the set is exhausted.",
    ],
  },
  {
    name: "StateCraft",
    tagline: "U.S. Geography Trainer",
    stack: [
      "JavaScript",
      "SVG Mapping",
      "Albers USA Projection",
      "Vercel",
    ],
    meta: "Solo Developer · 2026 · Live",
    link: "https://s3xy-states.vercel.app",
    bullets: [
      "Built a keyboard-first trainer for all 50 states and capitals with four drill modes - type the map, type the capitals, find a named state against the clock, and match capitals against neighboring-state decoys.",
      "Rendered the map in an Albers USA projection with instant per-answer feedback, locking correct spellings in color as they're typed.",
      "Runs entirely in the browser with no sign-in and no backend.",
    ],
  },
];

export const OFFERS = [
  {
    company: "KeyDelta",
    role: "AI Software Engineer",
    location: "Remote",
    logo: "KeyDelta",
  },
  {
    company: "Deloitte & Touche LLP",
    role: "Analyst, Cyber - Government & Public Services",
    location: "Arlington/Rosslyn, VA",
    logo: "Deloitte",
  },
  {
    company: "Coalfire",
    role: "Security Consultant",
    location: "Remote",
    logo: "Coalfire",
  },
  {
    company: "Ernst & Young (EY)",
    role: "Digital Risk Consultant",
    location: "Richmond, VA",
    logo: "EY",
    accepted: true,
  },
];

export const CERTIFICATIONS = [
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: "January 2026",
  },
  {
    name: "AWS Certified Security - Specialty",
    issuer: "Amazon Web Services",
    date: "August 2025",
  },
  {
    name: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    date: "July 2025",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "July 2025",
  },
  {
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    date: "July 2025",
  },
  {
    name: "EY Cybersecurity AI Badge",
    issuer: "Ernst & Young",
    date: "July 2025",
  },
];

export const CONTACT = {
  blurb: "Let's connect - I'm always open to new opportunities.",
  email: "manningjnoah@gmail.com",
  linkedin: "https://www.linkedin.com/in/noah-manning03/",
  github: "https://github.com/NoahManning03",
};
