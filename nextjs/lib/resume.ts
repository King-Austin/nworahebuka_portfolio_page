export interface ResumeRole {
  title: string;
  organization: string;
  period: string;
  bullets: string[];
}

export interface ResumeData {
  name: string;
  headline: string;
  location: string;
  phone: string;
  email: string;
  github: string;
  summary: string;
  skills: { category: string; items: string[] }[];
  roles: ResumeRole[];
  education: { institution: string; degree: string; period: string; focus: string };
}

export interface ResumeVersion {
  id: "primary" | "ats";
  label: string;
  description: string;
  filename: string;
  downloadUrl: string;
  onlineUrl: string;
  recommended: boolean;
}

export const resumeData: ResumeData = {
  name: "Nworah Ebuka Augustus",
  headline: "Full-Stack Software Engineer",
  location: "Anambra, Nigeria (Open to Remote)",
  phone: "+234 913 484 6838",
  email: "nworahebuka.a@gmail.com",
  github: "https://github.com/King-Austin",
  summary: "Full-stack software engineer with over two years of experience building backend APIs, responsive web applications and mobile-first products. I work mainly with TypeScript, React, Next.js, Node.js and Python. My projects include attendance systems, commerce products, security middleware and pharmacy software designed to work well on unreliable networks.",
  skills: [
    { category: "Frontend", items: ["TypeScript", "Next.js", "React", "Tailwind CSS", "TanStack React Query", "Progressive Web Apps (PWA)", "CapacitorJS"] },
    { category: "Backend", items: ["Node.js", "NestJS", "Express.js", "RESTful API Design", "Microservices", "Python", "Django"] },
    { category: "Database & State", items: ["PostgreSQL", "Supabase", "MongoDB", "Redis", "BullMQ", "Data Modeling"] },
    { category: "DevOps & Tools", items: ["Docker", "Git", "GitHub Actions", "CI/CD", "Postman", "AWS S3", "Object Storage"] },
  ],
  roles: [
    { title: "Lead Full-Stack Engineer", organization: "Smart Classroom Attendance (Capstone Project)", period: "2023 – Present", bullets: ["Built responsive interfaces with Next.js, React and Tailwind CSS for students using low-end devices.", "Designed the backend and data models with PostgreSQL and Supabase.", "Built attendance checks using GPS location, Bluetooth proximity and biometrics.", "Worked with academic staff to turn their needs into dashboard features."] },
    { title: "Full-Stack Software Engineer", organization: "Storely (Multi-Vendor Marketplace)", period: "2023 – Present", bullets: ["Built storefront and vendor dashboards with TypeScript and Next.js.", "Handled API data and caching with TanStack React Query.", "Designed database tables and background jobs for vendor onboarding and stock updates.", "Improved reliability through testing, code reviews and work for slow network connections."] },
    { title: "Backend Engineer", organization: "SecureCipher & Card Validator API", period: "2022 – 2023", bullets: ["Built backend APIs with NestJS, Node.js and TypeScript.", "Added EdDSA and ECDH encryption to protect API communication.", "Packaged the application with Docker and automated deployments with GitHub Actions."] },
    { title: "Software Engineer (Collaborator)", organization: "PharmaLoop (SaaS)", period: "2023 – Present", bullets: ["Worked with the team on inventory and billing features using React, TypeScript and Python.", "Connected Paystack and WhatsApp Cloud API, and added background jobs for notifications and reports."] },
  ],
  education: { institution: "Nnamdi Azikiwe University, Awka", degree: "Bachelor of Electronic and Computer Engineering", period: "November 2021 – September 2026", focus: "Software Engineering Fundamentals, Systems Architecture, and Database Design" },
};

export const resumeVersions: ResumeVersion[] = [
  { id: "primary", label: "Backend & Systems Résumé", description: "The designed résumé for recruiters, clients and engineering roles.", filename: "Nworah_Ebuka_Augustus_Backend_Systems_Resume_2026.pdf", downloadUrl: "/resumes/Nworah_Ebuka_Augustus_Backend_Systems_Resume_2026.pdf", onlineUrl: "/resume", recommended: true },
  { id: "ats", label: "ATS Résumé", description: "A clean, single-column version for application tracking systems.", filename: "Nworah_Ebuka_Augustus_ATS_Resume_2026.pdf", downloadUrl: "/resumes/Nworah_Ebuka_Augustus_ATS_Resume_2026.pdf", onlineUrl: "/resume/ats", recommended: false },
];
