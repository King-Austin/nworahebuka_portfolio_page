import type { BlogPost, Experience, Project, Recognition, SideProject, StudioProject } from "./types";

export const projects: Project[] = [
  {
    slug: "rmis", title: "RMIS", subtitle: "Real-estate and property management platform", category: "Property Technology",
    summary: "A single tool for agencies to manage properties, units, leases, payments and realtor commissions.",
    impact: "Consolidated property, unit, lease, payment and commission records into one operational system.", contribution: "As Websync Digital's lead backend engineer, I own the system architecture, API design, data boundaries, security and deployment; my co-founder leads the interface and visual direction.",
    problem: "Property records are hard to check when listings, leases, payments and commissions are stored in separate tools. RMIS brings them together.",
    features: ["Property and unit records", "Lease and payment tracking", "Realtor commission tracking", "Visual unit grids", "Automated tasks"],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Vercel"], liveUrl: "https://rmis.com.ng",
    gallery: [
      { src: "/projects/rmis/overview-desktop.png", alt: "RMIS property-management website shown at desktop width", caption: "RMIS desktop product overview, captured from the live site." },
      { src: "/projects/rmis/overview-mobile.png", alt: "RMIS property-management website shown on a mobile viewport", caption: "The same public product experience adapted to a mobile viewport." },
    ], architecture: "rmis", publication: "published", verification: "verified", featured: true,
  },
  {
    slug: "securecipher", title: "SecureCipher", subtitle: "Cryptographic banking middleware", category: "Security",
    summary: "Banking middleware that signs and encrypts communication between clients and APIs.",
    impact: "Produced a working reference implementation for signed, encrypted client-to-API communication without server-held client private keys.", contribution: "I designed and implemented the cryptographic middleware, including the Django API, Ed25519 signing flow, ECDH key exchange, validation rules and reference React client.",
    problem: "Banking APIs need to protect sensitive information while it moves between a client and server. SecureCipher signs, checks and encrypts each request.",
    features: ["Ed25519 dual-signature authentication", "Stateless transaction validation", "End-to-end payload encryption", "ECDH passwordless key exchange", "Client-side private-key generation"],
    technologies: ["Django", "Ed25519", "ECDH", "PostgreSQL", "REST API", "React"], sourceUrl: "https://github.com/King-Austin/securecipher-middleware",
    publication: "published", verification: "verified", featured: true,
  },
  {
    slug: "storely", title: "Storely", subtitle: "Multi-vendor commerce for informal businesses", category: "Commerce",
    summary: "A marketplace where independent Nigerian vendors can create stores, manage stock and fulfil orders.",
    impact: "Delivered one workflow for vendor onboarding, storefront setup, inventory and order fulfilment.", contribution: "I built the product's application and backend flows, including vendor onboarding, catalogue and inventory management, orders and the storefront experience.",
    problem: "Many small vendors need a simple and affordable way to start selling online.",
    features: ["Rapid vendor onboarding", "Independent storefronts", "Mobile-first checkout", "Inventory and order tools"],
    technologies: ["TypeScript", "React", "Node.js", "PostgreSQL"], liveUrl: "https://storely.websyncdigital.com.ng", sourceUrl: "https://github.com/King-Austin/storely", publication: "published", verification: "verified", featured: true,
  },
  {
    slug: "smart-classroom-attendance", title: "Smart Classroom Attendance", subtitle: "Multi-factor campus attendance", category: "Education",
    summary: "An attendance tool that uses face verification, location and Bluetooth proximity to reduce false check-ins.",
    impact: "Combined three independent presence signals—face verification, GPS and Bluetooth proximity—to make proxy check-ins harder.", contribution: "I built the cross-platform application flow and integrated Supabase-backed records with face, GPS and Bluetooth proximity checks as part of the student development team.",
    problem: "Single-factor attendance is easy to spoof. The system verifies presence with several independent signals while keeping check-in fast.",
    features: ["Face, GPS and BLE verification", "Tamper-resistant records", "Cross-platform mobile delivery", "Faculty participation dashboard"],
    technologies: ["React", "Capacitor", "Supabase", "TypeScript", "BLE"], liveUrl: "https://smart-attendance-unizik.vercel.app", sourceUrl: "https://github.com/King-Austin/Smart_Classroom_Attendance", gallery: [
      { src: "/projects/smart-classroom-attendance/overview-desktop.png", alt: "Smart Classroom Attendance public interface at desktop width", caption: "The public Smart Attendance interface captured at desktop width." },
      { src: "/projects/smart-classroom-attendance/overview-mobile.png", alt: "Smart Classroom Attendance public interface on a mobile viewport", caption: "The attendance experience at the mobile viewport used by students." },
    ], architecture: "smart-attendance", publication: "published", verification: "verified", featured: true,
  },
  {
    slug: "topit", title: "Topit", subtitle: "Data, airtime and utility automation", category: "Financial Technology",
    summary: "Lets customers buy airtime and data, schedule repeat purchases and download receipts.",
    impact: "Brought purchases, scheduled transactions, cashback, history and downloadable receipts into one maintained product.", contribution: "I own the backend architecture, provider integrations, transaction security and deployment; my co-founder leads the interface, visual direction and brand experience.",
    problem: "Buying and documenting recurring data and airtime purchases can involve several disconnected steps. Topit brings purchase, automation, cashback and receipts into one experience.",
    features: ["SME data bundle purchases", "Airtime recharge and cashback", "Scheduled purchase automation", "Transaction history", "PDF receipts"],
    technologies: ["TypeScript", "React", "Node.js", "REST API", "Vercel"], liveUrl: "https://topit.com.ng",
    publication: "published", verification: "verified", featured: true,
  },
  {
    slug: "voltrix-smart-energy-meter", title: "Voltrix Smart Energy Meter", subtitle: "Remote energy monitoring and control", category: "Embedded Systems",
    summary: "Web and mobile controls for a working smart energy-meter prototype built in college.",
    impact: "Moved readings from a physical test load through an ESP32 and cloud database to web and Android interfaces; the team validated the prototype with a 9-watt bulb and a laptop charger.", contribution: "I designed and built the Next.js interface, packaged the Android app with Capacitor, modelled the Supabase data flow and integrated those layers with the team's ESP32, sensor and relay prototype.",
    problem: "Conventional submeters provide limited remote visibility or control. The project connects an instrumented hardware prototype to interfaces for monitoring and operating the meter remotely.",
    features: ["Energy-consumption monitoring", "Remote meter control", "Web management interface", "Mobile control application", "Physical hardware prototype"],
    technologies: ["React", "TypeScript", "Python", "Embedded C", "IoT", "Vercel"], liveUrl: "https://smart-energy-meter-ece.vercel.app",
    gallery: [
      { src: "/projects/voltrix-smart-energy-meter/dashboard-overview.png", alt: "Voltrix web dashboard showing meter status and energy readings", caption: "Web dashboard with prototype meter status, prepaid units and remote control." },
      { src: "/projects/voltrix-smart-energy-meter/mobile-live-monitoring.png", alt: "Voltrix Android interface showing live energy information", caption: "Mobile monitoring and control connected to the same meter data." },
      { src: "/projects/voltrix-smart-energy-meter/physical-prototype.png", alt: "Physical Voltrix smart energy meter prototype beside a test lamp", caption: "The assembled academic smart sub-meter prototype and connected test load." },
    ], architecture: "voltrix", publication: "published", verification: "verified", featured: true,
  },
  {
    slug: "attendify", title: "Attendify", subtitle: "Digital attendance management", category: "Education",
    summary: "A backend system for real-time academic attendance, automated reports and role-based access.",
    impact: "Replaced paper-first attendance handling with timestamped records and automated faculty reporting.", contribution: "I designed and implemented the Node.js backend, including the attendance API, JWT authentication, role permissions, MongoDB records and report generation.",
    problem: "Paper registers are slow to audit and prone to errors. Attendify provides a secure digital record and reporting API.",
    features: ["Real-time check-in", "Automated faculty reports", "JWT authentication", "Role-based access"],
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT"], sourceUrl: "https://github.com/King-Austin/ATTENDIFY-BACKEND", publication: "published", verification: "verified",
  },
  {
    slug: "smart-cbt", title: "Smart CBT System", subtitle: "Digital examination platform", category: "Education",
    summary: "A computer-based testing platform with automatic marking, randomized questions and controlled exam sessions.",
    impact: "Automated scoring and timed submission while randomizing question delivery for controlled exam sessions.", contribution: "I designed and implemented the Django application, including exam-session rules, randomized delivery, automatic scoring, role access and containerized deployment.",
    problem: "Paper examinations are expensive to coordinate and slow to mark. The system digitizes delivery while supporting exam integrity.",
    features: ["Automatic scoring", "Randomized delivery", "Role-based access", "Timed auto-submission", "Containerized deployment"],
    technologies: ["Django", "SQLite", "Docker", "JavaScript"], publication: "published", verification: "verified",
  },
];

export const sideProjects: SideProject[] = [
  { title: "CGPA Grading System", summary: "A CGPA calculator that supports different university grading scales.", technologies: ["TypeScript", "React"], features: ["Multiple grading scales", "Live GPA calculation", "Unified grading model"], sourceUrl: "https://github.com/King-Austin/CGPA_grading_system_demo" },
  { title: "Laptop E-Commerce", summary: "An online laptop store with a shopping cart, checkout and admin dashboard.", technologies: ["TypeScript", "Next.js", "React"], features: ["Payment integration", "Admin dashboard", "Cart and checkout", "Global state"], sourceUrl: "https://github.com/King-Austin/laptop-ecommerce" },
  { title: "Income Race Tracker", summary: "A focused tracker for setting an income goal, logging progress and comparing growth across multiple streams.", technologies: ["HTML", "CSS", "JavaScript"], features: ["Multi-stream tracking", "Live analytics", "Peer progress views"], liveUrl: "https://income-goal.vercel.app/" },
  { title: "Cresco", summary: "A Solana-based financial agency that lets young people act within guardian-defined boundaries enforced on-chain.", technologies: ["Solana", "Pyth", "Web3"], features: ["Guardian controls", "On-chain enforcement", "Explainable refusals", "One-time exceptions"], liveUrl: "https://cresco-lac.vercel.app/", sourceUrl: "https://github.com/King-Austin/cresco" },
  { title: "PharmaLoop", summary: "Helps people find medicines from verified local pharmacies.", technologies: ["HealthTech", "Cloud", "Inventory systems"], features: ["Verified pharmacies", "Medicine availability", "Online pharmacy pages"], liveUrl: "https://www.pharmaloop.org/" },
];

export const recognitions: Recognition[] = [
  {
    slug: "ieee-ias-engineering-student-chapter-design-contest-2025", shortTitle: "IEEE IAS Africa First Prize", title: "2025 IEEE IAS Engineering Student Chapter Design Contest (Africa), First Prize",
    issuer: "IEEE Industry Applications Society — Industrial Power Conversion Systems Department", date: "2025-09", dateLabel: "September 2025", kind: "award",
    summary: "First-prize team award for the Biogas Smart-Energy Powered Dryer, an engineering response to post-harvest loss.",
    contribution: "Embedded-systems engineer responsible for embedded control and hardware integration within a multidisciplinary team.", team: "Nnamdi Azikiwe University engineering student team", project: "Biogas Smart-Energy Powered Dryer", printedName: "Nworah Augustus Chukwuebuka",
    evidence: [{ src: "/recognition-media/ieee-ias-engineering-student-chapter-design-contest-2025/certificate-original.png", original: "/recognition-media/ieee-ias-engineering-student-chapter-design-contest-2025/certificate-original.png", alt: "IEEE IAS 2025 First Prize Engineering Student Chapter Design Contest Africa certificate", caption: "First Prize certificate for the Biogas Smart-Energy Powered Dryer team." }], sourceLinks: [{ label: "IEEE Industry Applications Society", href: "https://ias.ieee.org/" }], publication: "published", verification: "verified",
  },
  {
    slug: "ieeextreme-19-team-reign", shortTitle: "IEEEXtreme 19.0", title: "IEEEXtreme 19.0 Programming Competition",
    issuer: "IEEE", date: "2025-10-25", dateLabel: "25 October 2025", kind: "competition",
    summary: "Verified participation in the 24-hour IEEEXtreme 19.0 programming competition as a member of Team Reign, representing Nnamdi Azikiwe University.",
    contribution: "Represented Nnamdi Azikiwe University with Team Reign in the global programming competition.", team: "Team Reign", printedName: "Ebuka Nworah",
    evidence: [{ src: "/recognition-media/ieeextreme-19-team-reign/certificate-original.png", original: "/recognition-media/ieeextreme-19-team-reign/certificate-original.png", alt: "IEEEXtreme 19.0 participation certificate for Ebuka Nworah of Team Reign", caption: "Participation certificate issued for IEEEXtreme 19.0 on 25 October 2025." }], sourceLinks: [{ label: "IEEEXtreme", href: "https://ieeextreme.org/" }], publication: "published", verification: "verified",
  },
  {
    slug: "sid-circum-robotics-training", shortTitle: "Robotics Training", title: "SID/Circum Technologies Robotics Training",
    issuer: "Solution Innovation District and Circum Technologies", date: "2026", dateLabel: "2026 · certificate date unspecified", kind: "training",
    summary: "Completion credential for practical robotics training delivered by Solution Innovation District with Circum Technologies.",
    contribution: "Participated as a trainee and completed the robotics programme.", printedName: "Nworah Ebuka Augustus",
    evidence: [{ src: "/recognition-media/sid-circum-robotics-training/certificate-original.png", original: "/recognition-media/sid-circum-robotics-training/certificate-original.png", alt: "Robotics Training completion certificate issued to Nworah Ebuka Augustus", caption: "Certificate of completion from Solution Innovation District and Circum Technologies." }], sourceLinks: [{ label: "Solution Innovation District", href: "https://solutioninnovationdistrict.com/" }], publication: "published", verification: "verified",
  },
  {
    slug: "sid-isp-network-engineering-training", shortTitle: "ISP Network Engineering", title: "SID/Connekt Broadband ISP Network Engineering Training", issuer: "Solution Innovation District and Connekt Broadband", date: "2026", dateLabel: "2026 · certificate date unspecified", kind: "training",
    summary: "Completion credential for ISP network engineering training delivered by Solution Innovation District with Connekt Broadband.", contribution: "Participated as a trainee and completed the ISP Network Engineering programme.", printedName: "Nworah Augustus Ebuka", evidence: [{ src: "/recognition-media/sid-isp-network-engineering-training/certificate-original.png", original: "/recognition-media/sid-isp-network-engineering-training/certificate-original.png", alt: "ISP Network Engineering Training completion certificate issued to Nworah Augustus Ebuka", caption: "Certificate of completion from Solution Innovation District and Connekt Broadband." }], sourceLinks: [{ label: "Solution Innovation District", href: "https://solutioninnovationdistrict.com/" }], publication: "published", verification: "verified",
  },
];

export const studioProjects: StudioProject[] = [
  {
    slug: "rmis",
    title: "RMIS",
    category: "Property technology",
    summary: "A property-management platform that grew from a custom client build into software designed for more real-estate teams.",
    origin: "RMIS began as custom software for a real-estate company. Repeated operational needs showed us that the underlying system could serve more businesses without every customer funding a new build from the beginning.",
    outcome: "We developed the product toward a subscription model that gives property teams faster access to tools for properties, units, leases, payments and commissions while lowering the initial cost of adoption.",
    contribution: "I lead the technical work across system architecture, APIs, data boundaries, security and deployment as part of the Websync Digital founding team.",
    capabilities: ["Multi-tenant product architecture", "Property and unit records", "Lease and payment tracking", "Realtor commission workflows", "Operational automation"],
    client: "Websync Digital product",
    liveUrl: "https://rmis.com.ng",
    publication: "published",
    verification: "verified",
  },
  {
    slug: "topit",
    title: "Topit",
    category: "Utility software",
    summary: "A Websync Digital product for purchasing airtime and data, automating repeat transactions and keeping downloadable records.",
    origin: "After client websites and custom business software, we began exploring smaller utility products that solve frequent, specific problems. Topit came from that direction.",
    outcome: "The product brings common digital purchases, scheduled transactions, cashback and receipts into one experience, with the infrastructure needed to operate it as a maintained service.",
    contribution: "I work on the backend architecture, integrations, security and deployment while my co-founder leads the interface, visual direction and brand experience.",
    capabilities: ["Airtime and data purchases", "Scheduled transactions", "Transaction records", "Downloadable receipts", "API integrations"],
    client: "Websync Digital product",
    liveUrl: "https://topit.com.ng",
    publication: "published",
    verification: "verified",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "building-voltrix-smart-energy-meter",
    title: "From meter box to mobile app: building Voltrix",
    excerpt: "The honest story of turning a final-year energy project into a working smart-meter prototype across hardware, cloud software and mobile control.",
    publishedAt: "2026-10-26", readingTime: "10 min read", category: "Embedded systems", publication: "published",
    introduction: "Voltrix began with a broad final-year project brief: build something around energy. The difficult part was not finding an impressive idea. It was finding one we could build, test and imagine working outside the laboratory.",
    coverImage: {
      src: "/blog/voltrix-smart-energy-meter/physical-prototype.png",
      alt: "Physical Voltrix smart energy meter prototype beside a connected test lamp",
      caption: "The assembled Voltrix prototype used for our final-year engineering project at Nnamdi Azikiwe University.",
    },
    sections: [
      {
        heading: "Energy sounded simple until I had to choose a problem",
        paragraphs: [
          "When final-year projects were allocated in my department, my supervisor and I were given a broad area: energy. That could mean generation, distribution, renewable systems, grid monitoring or almost anything in between.",
          "My first ideas were ambitious. I thought about smart grids and distribution automation. They were exciting on paper, but one question kept bringing me back to earth: how could we test or deploy any of this without changing a large part of the existing electricity network? A good final-year project still has to survive contact with time, money and the equipment available in the lab.",
          "So I moved closer to the person using the electricity. I started looking at the meter on the wall and asking what it could tell us if it were connected, visible and easier to control.",
        ],
      },
      {
        heading: "The meter became an information system",
        paragraphs: [
          "Most people only think about their meter when the units are running low. You buy credit, enter a long token and hope the balance lasts. What you rarely see is the story behind that balance: when consumption rose, what the voltage looked like, or how quickly the remaining credit is disappearing.",
          "That changed the project for me. Instead of building a box that only measured electricity, my team and I began designing a system that could measure a load, send readings to the cloud and present them in a way an ordinary person could understand.",
          "We called it Voltrix. The goal was straightforward: connect a physical energy-meter prototype to a web and mobile experience for monitoring consumption, managing test credit and controlling the connected load remotely.",
        ],
        image: {
          src: "/blog/voltrix-smart-energy-meter/dashboard-overview.png",
          alt: "Voltrix web interface showing live voltage, load, power factor and prepaid units",
          caption: "The web interface brought live meter status, prepaid units and remote control into one view. Values shown are from the prototype environment.",
        },
      },
      {
        heading: "The hardware did not care about our clean diagrams",
        paragraphs: [
          "We began by experimenting with separate analogue voltage and current sensors. That introduced us very quickly to noise, calibration and signal conditioning. At one point it felt as though we were building a measurement laboratory instead of a smart meter.",
          "Moving to a PZEM energy-monitoring module gave the prototype a more practical measurement path. An ESP32 handled device logic and connectivity, while a relay gave us a way to connect or disconnect the test load. We also added local indicators so the device could communicate basic status without the dashboard.",
          "Proteus helped us think through circuit behaviour before working with physical components. It was a simulation tool in our process, not a picture of the exact final assembly. That distinction matters because a neat simulation and a mains-powered prototype are very different things. Physical wiring, component ratings, isolation and safe testing cannot be solved by a diagram alone.",
        ],
        image: {
          src: "/blog/voltrix-smart-energy-meter/proteus-simulation.jpg",
          alt: "Proteus circuit simulation for a proposed smart energy meter design",
          caption: "A Proteus simulation used while exploring the meter circuitry. It represents design work, not the exact wiring of the assembled prototype.",
        },
      },
      {
        heading: "Giving each physical meter an identity",
        paragraphs: [
          "Once readings could leave the device, we had another problem: whose readings were they? A cloud database is not useful if it cannot reliably connect a packet of telemetry to the correct meter and customer.",
          "We assigned every prototype meter a unique meter ID. That ID became the link between the hardware, its owner, telemetry history, settings and prepaid balance. Supabase gave us PostgreSQL storage, authentication, APIs and realtime updates in one place, which let us spend more time on the system itself and less time maintaining infrastructure for a university prototype.",
          "The ESP32 sent readings to the backend, and the application requested data for the signed-in user's meter. It was one physical prototype, but the data model forced us to think beyond a one-device demonstration.",
        ],
      },
      {
        heading: "One product across web and mobile",
        paragraphs: [
          "I already worked with web systems, so I did not want the user interface to look like a temporary engineering test page. If we were presenting the meter as something people could eventually use, the software had to feel like a product too.",
          "I built the interface with Next.js and used Capacitor to package the experience for Android. That allowed the web dashboard and mobile application to share the same account, backend and meter data instead of becoming two separate projects to maintain.",
          "The interface shows voltage, current, power, energy use and prepaid balance. It also exposes permitted control actions. For recharge, we built a Paystack test-mode flow to demonstrate how a verified payment could eventually become energy credit. It remains a prototype workflow; production billing would require secure server-side verification, webhooks and an auditable transaction process.",
        ],
        image: {
          src: "/blog/voltrix-smart-energy-meter/mobile-live-monitoring.png",
          alt: "Voltrix mobile interface showing live power monitoring and prepaid energy balance",
          caption: "The mobile interface for viewing live meter information and operating the prototype remotely.",
        },
      },
      {
        heading: "A dashboard change is not a hardware action",
        paragraphs: [
          "One of the most useful lessons came from something that looked simple: switching the relay from the dashboard. Updating a value on screen is easy. Proving that the physical controller received the command and acted on it is a different problem.",
          "During integration, overloaded PostgreSQL functions caused an ambiguous API response and stopped the ESP32 requests from completing correctly. We also found that a voltage threshold shown in the interface was not automatically the threshold being enforced by the device because the firmware still had a hardcoded value.",
          "Those failures changed how I think about connected systems. The interface is not the source of truth merely because it looks correct. A dependable IoT command needs a clear owner, delivery status and acknowledgement from the device. The user should be able to tell the difference between 'command requested' and 'hardware responded.'",
        ],
      },
      {
        heading: "Making the data easier to ask about",
        paragraphs: [
          "Charts are useful, but they still expect the user to know where to look. I wanted someone to be able to ask a direct question such as, 'How much energy did I use yesterday?' or 'How long could my current balance last at this rate?'",
          "That became the idea behind the Voltrix AI Energy Advisor. Rather than giving a model a large block of copied data and hoping it found the right number, we designed tools that could retrieve the relevant meter information from the backend before producing an explanation.",
          "The current feature is an interpretation layer for prototype data, not a proven forecasting system. More advanced anomaly detection and consumption prediction belong to later work, after we collect enough trustworthy measurements to evaluate them properly.",
        ],
        image: {
          src: "/blog/voltrix-smart-energy-meter/mobile-ai-advisor.png",
          alt: "Voltrix mobile AI energy advisor interface connected to meter information",
          caption: "The AI Energy Advisor was designed to retrieve relevant meter data before explaining it in everyday language.",
        },
      },
      {
        heading: "What the prototype actually demonstrated",
        paragraphs: [
          "We tested Voltrix with small loads, including a 9-watt bulb and a laptop charger. We watched measurements move from the physical load to the sensor, through the ESP32, into the cloud and finally onto the dashboard. We also worked through remote relay control, test-mode recharge and configurable protection settings.",
          "That does not make Voltrix a certified electricity meter. It is an academic smart sub-meter prototype. A commercial version would need formal accuracy testing, stronger electrical protection, hardened security, durable offline storage, tamper resistance, reliable payment verification and regulatory approval.",
          "Keeping that boundary clear does not make the project less valuable. For me, the achievement was connecting several disciplines into one working system and learning where the seams break: electronics, embedded firmware, cloud infrastructure, databases, web software, Android delivery and user experience.",
        ],
        points: [
          "Physical energy measurement with a connected test load",
          "ESP32-to-cloud telemetry linked to a unique meter ID",
          "A Next.js web interface and Capacitor-based Android application",
          "Remote control and configurable protection logic",
          "A test-mode digital recharge workflow and AI-assisted data explanation",
        ],
      },
      {
        heading: "The next question is bigger",
        paragraphs: [
          "Voltrix started because I needed a final-year project in the energy sector. It became a lesson in how quickly a physical product grows once software, people and unreliable networks become part of the same system.",
          "There are many directions it could take: more durable offline logging, cellular or low-power networking, better calibration, field testing and eventually a fleet view for property managers. Those are possibilities, not finished features.",
          "The prototype answered our first question: can we connect a real electrical load to a system that measures, communicates and responds? Yes. The more interesting question now is how far the idea can go when every part is tested to the standard required outside the laboratory.",
        ],
        image: {
          src: "/blog/voltrix-smart-energy-meter/admin-dashboard.png",
          alt: "Voltrix administrator dashboard for monitoring a connected smart sub-meter",
          caption: "An early fleet-management view exploring how several deployed sub-meters could eventually be monitored. It remains prototype software.",
        },
      },
    ],
  },
  {
    slug: "security-is-an-architecture-decision",
    title: "Security is an architecture decision, not a final feature",
    excerpt: "Why authentication, data boundaries and failure handling need to be designed before an API reaches production.",
    publishedAt: "2026-10-26", readingTime: "6 min read", category: "Systems security", publication: "published",
    introduction: "Teams often schedule security after the main product work, as if it were a finishing layer. In dependable systems, security is part of the structure: it shapes identity, data flow, error handling and operational access from the beginning.",
    sections: [
      { heading: "Start with trust boundaries", paragraphs: ["Before selecting an authentication library, map who can act, which services can communicate, and where sensitive data changes ownership. This makes hidden assumptions visible before they become production vulnerabilities."], points: ["Identify actors and service identities", "Mark where sensitive data enters and leaves", "Define which component can make each decision"] },
      { heading: "Design failure deliberately", paragraphs: ["Secure systems fail closed without becoming impossible to operate. That requires explicit behavior for expired credentials, replayed requests, missing signatures and unavailable dependencies.", "A useful error should help an authorized operator diagnose the problem without revealing information that helps an attacker."] },
      { heading: "Keep the proof close to the action", paragraphs: ["Authorization should be checked at the point where a protected operation occurs. Moving that decision too far from the data or transaction makes the system harder to reason about and easier to bypass."], points: ["Authenticate the caller", "Authorize the requested action", "Validate the payload", "Record enough context for an audit"] },
    ],
  },
  {
    slug: "from-product-idea-to-backend-boundaries",
    title: "From product idea to backend boundaries",
    excerpt: "A practical way to translate an ambitious product brief into APIs, data ownership and systems that a team can maintain.",
    publishedAt: "2026-10-18", readingTime: "5 min read", category: "Architecture", publication: "published",
    introduction: "A product brief describes what people should accomplish. A backend architecture must describe where truth lives, how state changes and what happens when part of the system is unavailable.",
    sections: [
      { heading: "Model decisions before endpoints", paragraphs: ["Endpoints are an interface, not the architecture. Begin with the decisions the product must make: who owns a record, when a state transition is valid, and which events need an audit trail."] },
      { heading: "Give each piece of data an owner", paragraphs: ["Shared data without clear ownership produces duplicated rules and inconsistent updates. One component should be authoritative for each important concept, even when several interfaces read it."], points: ["Name the authoritative record", "Define allowed state transitions", "Document derived and cached representations"] },
      { heading: "Build for recovery", paragraphs: ["Production systems encounter timeouts, repeated requests and partial failures. Idempotency, retries and observable state are not scaling luxuries; they are what make ordinary failures manageable."] },
    ],
  },
  {
    slug: "what-embedded-work-taught-me-about-software",
    title: "What embedded work taught me about software",
    excerpt: "Constraints, observable state and why systems become clearer when software has to control something physical.",
    publishedAt: "2026-10-04", readingTime: "4 min read", category: "Engineering practice", publication: "published",
    introduction: "Hardware makes assumptions expensive. A sensor can be noisy, power can disappear, and the physical process does not care whether the software expected a clean response. Those constraints improve the way I think about web systems too.",
    sections: [
      { heading: "Inputs are never perfectly clean", paragraphs: ["Embedded systems encourage defensive input handling because real signals fluctuate. The same principle applies to external APIs, user input and asynchronous events: validate at the boundary and keep uncertainty visible."] },
      { heading: "State should be observable", paragraphs: ["When a physical system behaves incorrectly, hidden state makes diagnosis painful. Software benefits from the same discipline: important transitions should be inspectable through logs, metrics or an audit record."] },
      { heading: "Constraints create better priorities", paragraphs: ["Limited processing, power and memory force an engineer to separate essential behavior from convenience. Product software improves when architecture decisions are held to the same standard."] },
    ],
  },
];

export const experiences: Experience[] = [
  { period: "Present", role: "Co-founder & Lead Backend Engineer", organization: "Websync Digital", description: "Backend architecture, API design and security implementation for client products." },
  { period: "2025", role: "Embedded-systems engineer", organization: "IEEE IAS Design Contest team", description: "Developed embedded control and supported hardware integration for an award-winning biogas-powered dryer." },
  { period: "2025", role: "Competitor · Team Reign", organization: "IEEEXtreme 19.0", description: "Represented Nnamdi Azikiwe University in IEEE's global programming competition." },
];

export const volunteerExperiences: Experience[] = [
  { period: "2024—Present", role: "Chair", organization: "IEEE Robotics & Automation Society · UNIZIK", description: "Leading student work across robotics, AI and systems engineering." },
];

export const publishedProjects = projects.filter((item) => item.publication === "published" && item.verification !== "unverified");
export const publishedRecognitions = recognitions.filter((item) => item.publication === "published" && item.verification !== "unverified");
export const publishedStudioProjects = studioProjects.filter((item) => item.publication === "published" && item.verification !== "unverified");
export const publishedBlogPosts = blogPosts.filter((item) => item.publication === "published");

export const findProject = (slug: string) => publishedProjects.find((item) => item.slug === slug);
export const findRecognition = (slug: string) => publishedRecognitions.find((item) => item.slug === slug);
export const findStudioProject = (slug: string) => publishedStudioProjects.find((item) => item.slug === slug);
export const findBlogPost = (slug: string) => publishedBlogPosts.find((item) => item.slug === slug);
