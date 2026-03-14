"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Terminal, Cpu, ShieldCheck, Mail, FileDown, Twitter, Facebook } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-center overflow-hidden bg-background">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, currentColor 1.2px, transparent 1.2px)', backgroundSize: '48px 48px' }}>
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 xl:gap-24 pt-32 lg:pt-20">

          {/* Typographic Core - Left */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-primary"></span>
                  <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-primary">System Architect // v2.2</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold">Status: Available for Hire</span>
                </div>
              </div>

              <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-tighter leading-[0.85] mb-10 uppercase">
                NWO<span className="text-primary italic">RAH</span> <br />
                EBUKA <br />
                AUGUSTUS
              </h1>

              <div className="max-w-xl mx-auto lg:mx-0">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 font-light border-l-0 lg:border-l-2 border-primary/20 pl-0 lg:pl-8">
                  Engineering <span className="text-foreground font-medium underline decoration-primary/30 underline-offset-4">robust backend ecosystems</span> and
                  scalable architectures with the precision of a software architect.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                  <motion.a
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    href="#contact"
                    className="px-12 py-5 bg-primary text-primary-foreground font-bold uppercase tracking-[0.2em] text-xs shadow-[10px_10px_0px_0px_rgba(223,255,0,0.2)] dark:shadow-[10px_10px_0px_0px_rgba(223,255,0,0.1)] hover:shadow-none transition-all"
                  >
                    Hire Architect
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="/assets/nworah_ebuka_augustus_resume.pdf"
                    download
                    className="px-8 py-5 border border-border text-foreground font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-2 hover:bg-muted/50 transition-all"
                  >
                    <FileDown size={14} className="text-primary" />
                    Download CV
                  </motion.a>
                </div>

                {/* Social Integration */}
                <div className="flex items-center justify-center lg:justify-start gap-5 mt-12 pb-8">
                  <a href="https://linkedin.com/in/amkingaustin" target="_blank" rel="noopener noreferrer"
                    className="p-3 border border-border/50 hover:border-primary hover:text-primary transition-all rounded-full bg-background/50 group">
                    <Linkedin size={18} strokeWidth={1.5} />
                  </a>
                  <a href="https://github.com/King-Austin" target="_blank" rel="noopener noreferrer"
                    className="p-3 border border-border/50 hover:border-primary hover:text-primary transition-all rounded-full bg-background/50 group">
                    <Github size={18} strokeWidth={1.5} />
                  </a>
                  <a href="https://x.com/KingAustin360" target="_blank" rel="noopener noreferrer"
                    className="p-3 border border-border/50 hover:border-primary hover:text-primary transition-all rounded-full bg-background/50 group">
                    <Twitter size={18} strokeWidth={1.5} />
                  </a>
                  <a href="https://www.facebook.com/nworah.ebuka.5" target="_blank" rel="noopener noreferrer"
                    className="p-3 border border-border/50 hover:border-primary hover:text-primary transition-all rounded-full bg-background/50 group">
                    <Facebook size={18} strokeWidth={1.5} />
                  </a>
                  <a href="mailto:nworahebuka.a@gmail.com"
                    className="p-3 border border-border/50 hover:border-primary hover:text-primary transition-all rounded-full bg-background/50 group">
                    <Mail size={18} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hero Asset - Right */}
          <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-end justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="relative w-full aspect-[4/5] max-w-[420px] border border-primary/10 group cursor-crosshair overflow-hidden shadow-2xl shadow-primary/5"
            >
              <Image
                src={profileImg}
                alt="Nworah Ebuka"
                fill
                priority
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 border-[1.5rem] border-background/40 pointer-events-none transition-all duration-500 group-hover:border-[0.5rem]"></div>

              {/* Technical Detail Overlays */}
              <div className="absolute top-8 left-8 p-3 bg-primary/95 text-primary-foreground font-mono text-[9px] uppercase tracking-widest backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                MOD_ID: DP_PRO_01
              </div>

              {/* Scanline effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-1 w-full animate-scanline opacity-30"></div>
            </motion.div>
          </div>

        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-primary/50 flex flex-col items-center gap-4 hover:text-primary transition-colors cursor-pointer"
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[9px] font-mono uppercase tracking-[0.5em] rotate-90 origin-left ml-4 whitespace-nowrap">Explore System</span>
        <div className="h-10 w-px bg-gradient-to-b from-primary/30 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
