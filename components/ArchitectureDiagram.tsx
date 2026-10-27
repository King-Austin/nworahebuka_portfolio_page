import type { Project } from "@/lib/types";

const diagrams = {
  rmis: {
    title: "RMIS system architecture",
    description: "Property teams use a Next.js interface connected to application APIs, PostgreSQL records, scheduled jobs and deployment monitoring.",
    nodes: ["Property teams", "Next.js product", "Application API", "PostgreSQL", "Scheduled jobs", "Audit & deploy"],
  },
  voltrix: {
    title: "Voltrix prototype architecture",
    description: "A test load is measured by the meter hardware and ESP32, stored in Supabase, then viewed and controlled through web and Android interfaces.",
    nodes: ["Test load", "Meter + ESP32", "Supabase", "Next.js web", "Android app", "Relay command"],
  },
  "smart-attendance": {
    title: "Smart Attendance verification flow",
    description: "The student app combines face, GPS and Bluetooth checks before Supabase records the attendance result for the faculty dashboard.",
    nodes: ["Student app", "Face check", "GPS boundary", "BLE proximity", "Supabase", "Faculty view"],
  },
} as const;

export function ArchitectureDiagram({ type }: { type: NonNullable<Project["architecture"]> }) {
  const diagram = diagrams[type];
  return <section className="architecture-section" aria-labelledby={`${type}-architecture-title`}>
    <div className="section-heading">
      <div><p className="eyebrow">Architecture</p><h2 id={`${type}-architecture-title`}>How the system fits together.</h2></div>
      <p>{diagram.description}</p>
    </div>
    <figure className={`architecture-diagram ${type}`}>
      <svg viewBox="0 0 1000 430" role="img" aria-labelledby={`${type}-svg-title ${type}-svg-desc`}>
        <title id={`${type}-svg-title`}>{diagram.title}</title>
        <desc id={`${type}-svg-desc`}>{diagram.description}</desc>
        <path className="diagram-line" d="M175 105H385M615 105H825M500 145V285M175 325H385M615 325H825" />
        <path className="diagram-line diagram-return" d="M890 145V380H110V145" />
        {[[40,65],[385,65],[730,65],[40,285],[385,285],[730,285]].map(([x,y], index) => <g key={diagram.nodes[index]}>
          <rect className="diagram-node" x={x} y={y} width="230" height="80" rx="13" />
          <text x={x + 115} y={y + 47} textAnchor="middle">{diagram.nodes[index]}</text>
        </g>)}
        <circle className="diagram-pulse" cx="500" cy="215" r="12" />
      </svg>
      <figcaption>Custom diagram of the implemented project boundaries; arrows show the primary data and command path.</figcaption>
    </figure>
  </section>;
}
