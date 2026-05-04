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
    "Digital Risk Consultant @ EY · iOS Developer · CIS Student",
  paragraph:
    "I build things — from enterprise risk frameworks at EY to AI-powered iOS apps shipped to the App Store. Currently finishing my B.B.A. in CIS at James Madison University.",
};

export const ABOUT = {
  bio: "I'm a senior at James Madison University's Honors College studying Computer Information Systems with a focus in Cybersecurity. I currently intern at Ernst & Young as a Digital Risk Consultant, where I work on SOX compliance, IT control testing, and cloud governance for enterprise clients. Outside of work I build iOS apps — my latest, EnvyAI, is a full-stack AI skincare app live on the App Store. I'm passionate about the intersection of security, cloud, and AI.",
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
    company: "Ernst & Young (EY)",
    role: "Digital Risk Consultant Intern",
    location: "Richmond, VA",
    dates: "June 2025 – Present",
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
    dates: "Aug 2024 – Feb 2025",
    bullets: [
      "Built and maintained 8+ client web apps using HTML, CSS, Bootstrap, and JavaScript.",
      "Integrated third-party APIs into client platforms, reducing task completion time by 50%.",
    ],
  },
  {
    company: "T Adil Awan Consulting",
    role: "SEO Analyst",
    location: "Virginia Beach, VA",
    dates: "June 2023 – Feb 2024",
    bullets: [
      "Optimized Google campaigns generating $110K+ in ad value; used AI tools to increase client ROI by 46%.",
    ],
  },
];

export const PROJECTS = [
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
      "Built and shipped a full-stack iOS app from zero to App Store using SwiftUI, Firebase, and Claude Vision API — analyzes skin from photos and generates personalized scores, routines, and product recommendations.",
      "Engineered a custom AI scoring system with structured prompt architecture, penalty/bonus deduction tables, and server-side score clamping to produce calibrated skin assessments across a 2.0–9.8 scale.",
      "Implemented three distinct AI-powered features — face/body scan analysis, foundation shade matching, and a conversational skin consultant — each with dedicated Firebase Cloud Functions, daily usage limits, and tier-based access control.",
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
      "Implemented using ASP.NET Core with Razor Pages, SQL Server, and Entity Framework Core — designed and built the full relational database schema from scratch.",
      "Integrated Claude AI (claude-sonnet-4-20250514) to power intelligent service request matching and category navigation within the platform.",
      "Designed a 15+ table relational database covering custom identity management, time transaction tracking, credential verification, and organization membership systems.",
      "Collaborated directly with a nonprofit client through an agile sprint-based process, presenting demos and incorporating real-time feedback across multiple sprints.",
      "Contributed to migration planning documentation outlining the transition from the quick-hit system to the full production platform, including flat-file to relational database mapping strategy.",
    ],
  },
];

export const OFFERS = [
  {
    company: "Deloitte & Touche LLP",
    role: "Analyst, Cyber — Government & Public Services",
    location: "Arlington/Rosslyn, VA",
    logo: "Deloitte",
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
    name: "AWS Certified Security – Specialty",
    issuer: "Amazon Web Services",
    date: "August 2025",
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
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
  blurb: "Let's connect — I'm always open to new opportunities.",
  email: "manningjnoah@gmail.com",
  linkedin: "https://www.linkedin.com/in/noah-manning03/",
  github: "https://github.com/NoahManning03",
};
