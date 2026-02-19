import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Shield, ShoppingCart, ClipboardCheck, MonitorCheck } from "lucide-react";
import { projects } from "@/data/projects";

const iconMap: Record<string, typeof Shield> = {
  Shield,
  ShoppingCart,
  ClipboardCheck,
  MonitorCheck,
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary hover:underline">← Back to Home</Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[project.icon] || Shield;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="section-container flex items-center h-16">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </nav>

      <div className="section-container pt-28 pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Icon size={24} className="text-primary" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold">{project.title}</h1>
              <p className="text-sm font-mono text-primary">{project.subtitle}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-foreground text-sm font-medium hover:border-primary/50 hover:text-primary transition-colors">
                <Github size={14} /> View Source
              </a>
            )}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div className="lg:col-span-2 space-y-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <section className="glass-card p-6 sm:p-8">
              <h2 className="text-sm font-mono text-primary mb-3">// Problem Statement</h2>
              <p className="text-muted-foreground leading-relaxed">{project.problemStatement}</p>
            </section>

            <section className="glass-card p-6 sm:p-8">
              <h2 className="text-sm font-mono text-primary mb-3">// Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{project.description}</p>
            </section>

            <section className="glass-card p-6 sm:p-8">
              <h2 className="text-sm font-mono text-primary mb-4">// Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          </motion.div>

          <motion.aside initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <div className="glass-card p-6 sticky top-24">
              <h3 className="text-sm font-mono text-primary mb-4">// Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;
