export interface Project {
  slug: string;
  icon: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  problemStatement: string;
  features: string[];
  tech: string[];
  link: string | null;
  github: string | null;
  screenshot: string | null;
}

export const projects: Project[] = [
  {
    slug: "securecipher",
    icon: "Shield",
    category: "Security",
    title: "SecureCipher",
    subtitle: "Cryptographic Banking Middleware",
    description:
      "Architected a dual-signature authentication system using elliptic curve cryptography to secure communication between clients and banking APIs.",
    problemStatement:
      "Traditional banking APIs transmit sensitive financial data with minimal encryption, exposing transactions to man-in-the-middle attacks and data breaches. There was a need for a zero-trust middleware that ensures end-to-end payload encryption and cryptographic verification at every step of the transaction lifecycle.",
    features: [
      "Dual-signature authentication using Ed25519 (EdDSA) elliptic curve cryptography",
      "Stateless API gateway that validates transactions with cryptographic signatures and server-side co-signatures",
      "End-to-end payload encryption ensuring sensitive financial data remains protected throughout the transaction lifecycle",
      "Passwordless authentication flow using ECDH key exchange",
      "Client-side key generation — private keys never leave the user's device",
      "Zero-trust architecture for secure client–bank communication",
    ],
    tech: ["Django", "Ed25519", "ECDH", "PostgreSQL", "REST API", "React"],
    link: "https://www.securecipher.app",
    github: "https://github.com/King-Austin/securecipher-middleware",
    screenshot: "https://api.microlink.io/?url=https%3A%2F%2Fwww.securecipher.app&screenshot=true&meta=false&embed=screenshot.url",
  },
  {
    slug: "phishing-defense-saas",
    icon: "ShieldAlert",
    category: "ML Security",
    title: "Phishing Defense SaaS",
    subtitle: "ML-Powered Email Threat Detection",
    description:
      "Built a full-stack SaaS platform that leverages machine learning to identify and prevent malicious email attacks in real time, classifying threats and surfacing actionable insights.",
    problemStatement:
      "Phishing remains the leading vector for account takeover and financial fraud, yet most defenses are reactive and rule-based. There was a need for an intelligent, real-time system that could analyze email content, learn from evolving attack patterns, and give users a clear verdict and explanation rather than a raw spam flag.",
    features: [
      "Trained ML models that classify email content as malicious or safe in real time",
      "Full-stack SaaS architecture with a user-friendly analysis dashboard",
      "Actionable threat insights explaining why an email was flagged",
      "Real-time scanning pipeline for inbound email content",
      "Multi-tenant ready interface for individual and team use",
    ],
    tech: ["Python", "Machine Learning", "FastAPI", "scikit-learn", "React"],
    link: "https://phishing-defense.onrender.com",
    github: "https://github.com/King-Austin/phishing-defense-saas-main",
    screenshot: null,
  },
  {
    slug: "storely",
    icon: "Store",
    category: "SaaS",
    title: "Storely",
    subtitle: "Multi-Vendor E-Commerce Marketplace",
    description:
      "Designed a purpose-built multi-vendor marketplace for Nigeria's informal economy — letting vendors onboard fast, sell effortlessly, and scale without friction.",
    problemStatement:
      "Existing creator-commerce platforms in Nigeria impose high friction on small and informal vendors: slow onboarding, rigid storefronts, and fees that erode thin margins. Vendors needed a marketplace built for how the informal market actually operates — fast to join, simple to run, and able to scale from a single seller to many.",
    features: [
      "Multi-vendor onboarding with rapid store setup",
      "Per-vendor storefronts and product catalogues",
      "Streamlined cart and checkout flow optimized for mobile",
      "Vendor dashboards for inventory and order management",
      "Architecture designed to scale from a single seller to a full marketplace",
    ],
    tech: ["TypeScript", "React", "Node.js", "PostgreSQL"],
    link: "https://storely.websyncdigital.com.ng",
    github: "https://github.com/King-Austin/storely",
    screenshot: null,
  },
  {
    slug: "nworahsoft-ecommerce",
    icon: "ShoppingCart",
    category: "SaaS",
    title: "NworahSoft E-Commerce Suite",
    subtitle: "SME Growth Platform",
    description:
      "Developed a full-stack e-commerce engine tailored for SMEs to digitize inventory and scale online visibility with integrated payment processing.",
    problemStatement:
      "Small and medium enterprises in Nigeria struggle to establish an online presence due to the high cost and complexity of e-commerce platforms. Many SMEs rely on manual processes for inventory management and lack data-driven insights to grow their businesses. A lightweight, affordable solution was needed to digitize operations and enable secure online transactions.",
    features: [
      "Full-stack e-commerce engine for inventory digitization and online scaling",
      "Secure Paystack payment gateway integration for automated transaction processing",
      "Personalized Analytics Dashboard with real-time sales and inventory metrics",
      "Admin Portal for seamless stock management and order fulfillment",
      "Responsive storefront optimized for mobile-first Nigerian market",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "Paystack", "React"],
    link: "https://nworahsoft-ecommerce-tan.vercel.app",
    github: "https://github.com/King-Austin/nworahsoft-laptops-hub",
    screenshot: "https://api.microlink.io/?url=https%3A%2F%2Fnworahsoft-ecommerce-tan.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
  },
  {
    slug: "smart-classroom-attendance",
    icon: "ScanFace",
    category: "EdTech",
    title: "Smart Classroom Attendance",
    subtitle: "Multi-Factor Campus Attendance System",
    description:
      "Engineered a high-integrity, real-time attendance system with multi-factor verification — combining facial signatures, GPS geo-fencing, and BLE proximity detection.",
    problemStatement:
      "Manual and single-factor attendance systems are trivial to spoof — students sign in for absent peers or check in from off-campus. Institutions needed a tamper-resistant system that proves a student is physically present in the right place at the right time, without slowing down the start of class.",
    features: [
      "Multi-factor verification: facial signature, GPS geo-fencing, and BLE proximity",
      "Real-time check-in with tamper-resistant attendance records",
      "Cross-platform mobile delivery via Capacitor",
      "Supabase-backed secure data storage and auth",
      "Faculty dashboard for monitoring participation trends",
    ],
    tech: ["React", "Capacitor", "Supabase", "TypeScript", "BLE", "Geolocation"],
    link: "https://smart-attendance-ivory.vercel.app",
    github: "https://github.com/King-Austin/Smart_Classroom_Attendance",
    screenshot: null,
  },
  {
    slug: "attendify",
    icon: "ClipboardCheck",
    category: "EdTech",
    title: "Attendify",
    subtitle: "Digital Attendance Management System",
    description:
      "Engineered a backend solution to eliminate paper-based tracking in academic institutions, streamlining the attendance workflow with real-time check-in and automated reporting.",
    problemStatement:
      "Academic institutions still rely heavily on paper-based attendance tracking, which is error-prone, time-consuming, and difficult to audit. Faculty lack real-time visibility into student participation, and manual record-keeping creates data integrity issues. A digital solution was needed to automate attendance workflows while ensuring secure, tamper-proof academic records.",
    features: [
      "Real-time digital check-in system replacing paper-based attendance",
      "Automated reporting tools for faculty to monitor student participation trends",
      "JWT-based authentication ensuring data integrity and preventing unauthorized access",
      "RESTful API architecture for easy integration with existing academic systems",
      "Role-based access control for students, faculty, and administrators",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Postman"],
    link: null,
    github: "https://github.com/King-Austin/ATTENDIFY-BACKEND",
    screenshot: null,
  },
  {
    slug: "smart-cbt",
    icon: "MonitorCheck",
    category: "EdTech",
    title: "Smart CBT System",
    subtitle: "Digital Examination Platform",
    description:
      "Designed a Computer-Based Test (CBT) system to replace paper exams, featuring automated scoring, randomized question delivery, and high-concurrency support.",
    problemStatement:
      "Paper-based examinations are logistically expensive, prone to cheating, and create delays in result processing. Educational institutions needed a secure, scalable digital examination platform that could handle concurrent users during live exam sessions while maintaining exam integrity through randomization and access controls.",
    features: [
      "Automated scoring with instant result generation",
      "Randomized question delivery to prevent cheating",
      "Role-Based Access Control (RBAC) for Admins and Students",
      "Optimized database schema for high-concurrency during live exam sessions",
      "Time-controlled assessments with auto-submission",
      "Containerized deployment with Docker",
    ],
    tech: ["Django", "SQLite", "Docker", "JavaScript"],
    link: null,
    github: null,
    screenshot: null,
  },
];
