"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Award, GraduationCap, ChevronRight } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Co-Founder & CTO",
    company: "NworahSoft Solutions",
    period: "2021 — PRESENT",
    description: "Architecting end-to-end digital solutions, managing technical talent, and steering product vision for high-growth ventures.",
  },
  {
    type: "work",
    title: "Senior Backend Engineer",
    company: "Vanguard Tech (Remote)",
    period: "2019 — 2021",
    description: "Engineered scalable RESTful APIs, optimized database queries, and implemented secure authentication systems using Python and Django.",
  },
  {
    type: "education",
    title: "Entrepreneurial Leadership",
    company: "ALX Africa",
    period: "2022",
    description: "Mastered strategic planning, team management, and product-led growth strategies through intensive training and real-world projects.",
  },
  {
    type: "education",
    title: "Full-Stack Software Engineering",
    company: "Holberton School",
    period: "2020",
    description: "Deep-dive into system software, algorithms, and full-stack development with a focus on C, Python, and JavaScript.",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative bg-background border-t border-border overflow-hidden">
      {/* Background horizontal line decoration */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-border/30 -z-10 pointer-events-none"></div>

      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xs font-mono text-primary uppercase tracking-[0.5em]">// TIMELINE</h2>
          </div>
          <h3 className="text-4xl sm:text-6xl font-bold tracking-tighter uppercase">Professional <br /> Trajectory</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="md:col-span-6 relative"
            >
              <div className="border border-border p-8 hover:border-primary/40 transition-all duration-300 bg-muted/5 group">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 border border-border text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    {exp.type === "work" ? <Briefcase size={18} /> : <GraduationCap size={18} />}
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest border border-border px-3 py-1">
                    {exp.period}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold uppercase tracking-tight mb-2 group-hover:text-primary transition-colors">{exp.title}</h4>
                <p className="text-xs font-mono text-primary uppercase tracking-widest mb-6 opacity-80">{exp.company}</p>
                
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  {exp.description}
                </p>

                <div className="mt-8 flex items-center gap-2 text-[9px] font-mono text-muted-foreground uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight size={10} className="text-primary" />
                  Verified Attachment 0{i+1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
