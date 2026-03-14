"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ExternalLink, Github, Shield, ShoppingCart, ClipboardCheck, MonitorCheck, ArrowRight, Code } from "lucide-react";
import { projects } from "@/data/projects";

const iconMap: Record<string, typeof Shield> = {
  Shield,
  ShoppingCart,
  ClipboardCheck,
  MonitorCheck,
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative border-t border-border bg-background">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col items-center text-center gap-6"
        >
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-4 justify-center">
              <Code size={14} className="text-primary" />
              <h2 className="text-xs font-mono text-primary uppercase tracking-[0.4em]">
                // CASE_STUDIES
              </h2>
            </div>
            <h3 className="text-5xl sm:text-6xl font-bold tracking-tighter uppercase mb-4">Selected Works</h3>
            <div className="h-1 w-20 bg-primary/20 rounded-full mb-6"></div>
          </div>
          <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.3em] px-4 py-1 border border-border rounded-full">
            Project Sequence: Optimized for Modern Web Standards
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, i) => {
            const Icon = iconMap[project.icon] || Shield;
            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border p-8 sm:p-12 group hover:border-primary/50 transition-all duration-500 relative overflow-hidden"
              >
                {/* Numbering */}
                <div className="absolute top-8 right-8 text-4xl font-bold text-muted-foreground/5 font-mono group-hover:text-primary/10 transition-colors">
                  {(i + 1).toString().padStart(2, '0')}
                </div>

                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 border border-border text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold uppercase tracking-tight">{project.title}</h4>
                    <p className="text-[10px] text-primary font-mono uppercase tracking-[0.2em]">{project.subtitle}</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-10 font-light line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 border border-border text-[9px] font-mono uppercase tracking-tighter text-muted-foreground group-hover:border-primary/30 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <Link
                    href={`/project/${project.slug}`}
                    className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground hover:text-primary transition-all group/link"
                  >
                    Load Module 
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                  
                  <div className="flex gap-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" 
                         className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                        <Github size={18} />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" 
                         className="text-muted-foreground hover:text-primary transition-colors" aria-label="Live Demo">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
