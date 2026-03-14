"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Server, Code2, Layers, Cpu, Database, Binary, Zap } from "lucide-react";
import Image from "next/image";
import workImg from "@/public/nworah-ebuka-augustus-at-work.png";

const highlights = [
  {
    icon: Shield,
    title: "Security Hardening",
    description: "Implementing defense-in-depth strategies and zero-trust architectures for mission-critical data.",
  },
  {
    icon: Server,
    title: "Scalable Backend",
    description: "Building resilient distributed systems that handle millions of requests with sub-second latency.",
  },
  {
    icon: Code2,
    title: "Clean Architecture",
    description: "Adhering to SOLID principles and design patterns to ensure enterprise-grade maintainability.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative bg-background border-y border-border overflow-hidden">
      {/* Background technical mark */}
      <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none select-none overflow-hidden">
        <Database size={400} strokeWidth={0.5} />
      </div>

      <div className="section-container" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Narrative Content - Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-12 xl:col-span-7"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 uppercase tracking-widest">Section: 01</span>
              <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-widest">// Profile & Philosophy</h2>
            </div>
            
            <h3 className="text-4xl sm:text-5xl font-bold mb-10 tracking-tight leading-[1.1] uppercase">
              Building for <span className="text-primary italic">Resilience</span>, 
              Optimizing for <span className="text-primary italic">Scale</span>
            </h3>
            
            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed font-light mb-12">
              <p>
                As a <span className="text-foreground font-medium">Software Architect</span>, I don't just write code; I design systems. My approach is rooted in the belief that software should be as reliable as physical infrastructure.
              </p>
              <p>
                From spearheading high-traffic backend migrations to implementing advanced security protocols, I bridge the gap between complex engineering requirements and business scalability.
              </p>
            </div>

            {/* Technical Philosophy Block - Recruiter Focus */}
            <div className="bg-muted/30 border border-border p-8 mb-12 relative">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Binary size={40} />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                <Zap size={16} className="text-primary" />
                Technical Philosophy
              </h4>
              <ul className="space-y-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                <li className="flex gap-3"><span className="text-primary">01/</span> Automation over manual intervention</li>
                <li className="flex gap-3"><span className="text-primary">02/</span> Security is a feature, not an afterthought</li>
                <li className="flex gap-3"><span className="text-primary">03/</span> Code should be self-documenting & predictable</li>
              </ul>
            </div>
          </motion.div>

          {/* Action Imagery & Highlights - Right */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-video w-full border border-primary/20 bg-muted overflow-hidden group"
            >
              <Image 
                src={workImg} 
                alt="Nworah Ebuka in dynamic work environment" 
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 font-mono text-[9px] uppercase tracking-[0.3em] text-foreground p-2 bg-background/50 backdrop-blur-sm border-l border-primary">
                ENV: Production Runtime // Lagos OS
              </div>
            </motion.div>

            <div className="space-y-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + (i * 0.1) }}
                  className="group border border-border p-6 relative overflow-hidden bg-card/50 hover:border-primary/50 transition-all"
                >
                  <div className="flex gap-5 items-start">
                    <div className="p-3 bg-muted border border-border text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <item.icon size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold mb-2 uppercase tracking-wider">{item.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
