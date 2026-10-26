import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/types";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const initials = project.title.split(/\s+/).map((word) => word[0]).join("").slice(0, 2).toUpperCase();

  return <article className="project-card compact-card">
    <header className="project-card-head">
      <div className="project-mark" aria-hidden="true">{initials}</div>
      <p><span>{String(index + 1).padStart(2, "0")}</span>{project.category}</p>
      <nav aria-label={`${project.title} links`}>
        {project.sourceUrl && <a href={project.sourceUrl} target="_blank" rel="noreferrer" aria-label={`View ${project.title} source code`}><Github size={17} /></a>}
        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live site`}><ExternalLink size={17} /></a>}
      </nav>
    </header>
    <div className="project-card-body">
      <h3>{project.title}</h3>
      <p className="project-subtitle">{project.subtitle}</p>
      <p>{project.summary}</p>
      <ul className="tag-list" aria-label="Technology stack">{project.technologies.slice(0, 5).map((tech) => <li key={tech}>{tech}</li>)}</ul>
      <Link href={`/work/${project.slug}`} className="project-details-link">View details <ArrowUpRight size={15} /></Link>
    </div>
  </article>;
}
