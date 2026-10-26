import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { SideProjectArchive } from "@/components/SideProjectArchive";
import { publishedProjects, sideProjects } from "@/lib/content";

export const metadata: Metadata = { title: "Selected Work", description: "Selected security, commerce and education systems built by Nworah Ebuka Augustus.", alternates: { canonical: "/work" } };

export default function WorkPage() { return <div className="page-shell"><header className="page-header"><p className="eyebrow"><span>01</span> Work archive</p><h1>Systems with a reason to exist.</h1><p>Selected products and engineering explorations, documented through the problem, architecture and working implementation.</p></header><div className="project-grid archive">{publishedProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div><section className="work-side-projects"><header><p className="eyebrow">Other builds</p><h2>Independent products and experiments.</h2></header><SideProjectArchive items={sideProjects} /></section></div>; }
