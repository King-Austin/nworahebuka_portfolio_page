"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    name: "Backend Core",
    skills: ["Python", "Django", "Node.js", "Express", "RESTful APIs", "PostgreSQL", "Redis"],
  },
  {
    name: "Architectural & Tools",
    skills: ["System Design", "Microservices", "Docker", "AWS", "GitHub Actions", "Unit Testing", "Security Audit"],
  },
  {
    name: "Frontend Integration",
    skills: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Redux", "Framer Motion", "UI Design"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative border-t border-border bg-background">
      <div className="section-container" ref={ref}>
        <div className="flex flex-col lg:flex-row gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-primary animate-pulse"></div>
              <h2 className="text-xs font-mono text-primary uppercase tracking-[0.3em]">// Expertises</h2>
            </div>
            <h3 className="text-4xl font-bold mb-8 uppercase tracking-tighter leading-none">
              Technical <br /> Matrix
            </h3>
            <p className="text-muted-foreground leading-relaxed font-light border-l border-primary/20 pl-6">
              My technical range spans from low-level systems to modern full-stack architectures. I specialize in backend efficiency, 
              ensuring every digital solution is built on a foundation of performance and security.
            </p>
          </motion.div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillCategories.map((category, i) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-border p-8 bg-muted/5 hover:bg-muted/10 transition-colors group relative"
              >
                <div className="absolute top-0 left-0 w-4 h-px bg-primary/40 group-hover:w-full transition-all duration-700"></div>
                
                <h4 className="text-[10px] font-mono text-primary uppercase tracking-[0.2em] mb-6 flex justify-between items-center">
                  <span>{category.name}</span>
                  <span className="opacity-20">0{i+1}</span>
                </h4>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 border border-border/50 text-[11px] font-mono uppercase tracking-wider hover:border-primary hover:text-primary transition-all cursor-default bg-background"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Empty placeholder for grid balance */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.5 } : {}}
              className="hidden md:flex border border-dashed border-border p-8 items-center justify-center grayscale"
            >
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground rotate-90">Ready to Scale</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
