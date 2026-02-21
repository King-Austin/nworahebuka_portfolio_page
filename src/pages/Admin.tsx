import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Pencil, Trash2, Plus } from "lucide-react";
import { projects, Project } from "@/data/projects";

const Admin = () => {
  const [projectList] = useState<Project[]>(projects);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="section-container flex items-center justify-between h-16">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={16} />
            Back to Site
          </Link>
          <span className="text-sm font-mono text-primary">// Admin Panel</span>
        </div>
      </nav>

      <div className="section-container pt-28 pb-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">Manage Projects</h1>
            <p className="text-sm text-muted-foreground mt-1">Add, edit, or remove projects from your portfolio</p>
          </div>
          <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors opacity-50 cursor-not-allowed" disabled>
            <Plus size={14} /> Add Project
          </button>
        </div>

        <div className="space-y-4">
          {projectList.map((project) => (
            <div key={project.slug} className="glass-card p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-sm truncate">{project.title}</h3>
                  <span className="text-xs font-mono text-primary">{project.subtitle}</span>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.tech.slice(0, 4).map((t) => (
                    <span key={t} className="tech-badge text-[10px] px-2 py-0.5">{t}</span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-[10px] text-muted-foreground">+{project.tech.length - 4} more</span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors" aria-label="Live link">
                    <ExternalLink size={14} />
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors" aria-label="GitHub">
                    <Github size={14} />
                  </a>
                )}
                <Link to={`/project/${project.slug}`} className="p-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors" aria-label="View">
                  <Pencil size={14} />
                </Link>
                <button className="p-2 rounded-lg border border-border text-muted-foreground hover:text-destructive hover:border-destructive/30 transition-colors opacity-50 cursor-not-allowed" disabled aria-label="Delete">
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 glass-card p-6 text-center">
          <p className="text-sm text-muted-foreground mb-2">
            🔒 Full CRUD functionality will be available when connected to a database.
          </p>

        </div>
      </div>
    </main>
  );
};

export default Admin;
