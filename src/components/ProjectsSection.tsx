import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Github, Shield, ShoppingCart, ClipboardCheck, MonitorCheck, ArrowRight } from "lucide-react";
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
    <section id="projects" className="section-padding border-t border-border">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-mono text-primary mb-2">
            // Featured Work
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold mb-10">Projects</h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const Icon = iconMap[project.icon] || Shield;
            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card p-6 sm:p-8 group hover:border-primary/30 transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <Icon size={28} className="text-primary" />
                  <div className="flex gap-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label={`${project.title} GitHub`}>
                        <Github size={18} />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label={`${project.title} live`}>
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <h4 className="text-lg font-bold mb-1">{project.title}</h4>
                <p className="text-xs text-primary font-mono mb-3">{project.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>

                <Link
                  to={`/project/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline transition-colors"
                >
                  View Details <ArrowRight size={12} />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
