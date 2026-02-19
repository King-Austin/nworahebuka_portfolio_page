export interface Project {
  slug: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  problemStatement: string;
  features: string[];
  tech: string[];
  link: string | null;
  github: string | null;
}

export const projects: Project[] = [
  {
    slug: "securecipher",
    icon: "Shield",
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
      "Zero-trust architecture for secure client–bank communication",
    ],
    tech: ["Django", "Ed25519", "ECDH", "PostgreSQL", "REST API", "React"],
    link: "https://www.securecipher.app",
    github: "https://github.com/King-Austin/securecipher-middleware",
  },
  {
    slug: "nworahsoft-ecommerce",
    icon: "ShoppingCart",
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
  },
  {
    slug: "attendify",
    icon: "ClipboardCheck",
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
  },
  {
    slug: "smart-cbt",
    icon: "MonitorCheck",
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
  },
];
