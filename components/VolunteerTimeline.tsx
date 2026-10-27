import type { Experience } from "@/lib/types";

export function VolunteerTimeline({ items }: { items: Experience[] }) {
  return <div className="volunteer-timeline">
    {items.map((item, index) => <article className="volunteer-entry" key={`${item.organization}-${item.role}`}>
      <i className="volunteer-node" aria-hidden />
      <div className="volunteer-mark" aria-hidden>RAS</div>
      <div className="volunteer-copy">
        <span className="volunteer-index">{String(index + 1).padStart(2, "0")}</span>
        <h3>{item.role}</h3>
        <time>{item.period}</time>
        <strong>{item.organization}</strong>
        <p>{item.description}</p>
      </div>
    </article>)}
  </div>;
}
