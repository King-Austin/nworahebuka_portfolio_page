import { ArrowUpRight, Github } from "lucide-react";
import type { SideProject } from "@/lib/types";

export function SideProjectArchive({ items }: { items: SideProject[] }) {
  return <div className="side-project-list">
    {items.map((project, index) => <article key={project.title}>
      <span>{String(index + 1).padStart(2, "0")}</span>
      <div>
        <p className="micro-label">{project.technologies.join(" · ")}</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
      </div>
      <nav aria-label={`${project.title} links`}>
        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" data-ga-event="open_live_project" data-ga-label={project.title}>Live site <ArrowUpRight size={15} /></a>}
        {project.sourceUrl && <a href={project.sourceUrl} target="_blank" rel="noreferrer" data-ga-event="view_source" data-ga-label={project.title}>Source <Github size={15} /></a>}
      </nav>
    </article>)}
  </div>;
}
