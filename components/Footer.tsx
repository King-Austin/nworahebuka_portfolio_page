"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Twitter, Music2, Mail } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/amkingaustin", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/KingAustin360", label: "X / Twitter" },
  { icon: Facebook, href: "https://www.facebook.com/nworah.ebuka.5", label: "Facebook" },
  { icon: Music2, href: "https://www.tiktok.com/@mrkingaustin", label: "TikTok" },
  { icon: Github, href: "https://github.com/King-Austin", label: "GitHub" },
  { icon: Mail, href: "mailto:nworahebuka.a@gmail.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="py-20 border-t border-border bg-background relative overflow-hidden">
      {/* Subtle tech background element */}
      <div className="absolute bottom-0 right-0 p-8 opacity-[0.03] select-none pointer-events-none">
        <span className="text-[200px] font-bold tracking-tighter uppercase leading-none">ARCH</span>
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          
          <div className="space-y-6 max-w-sm">
            <a href="/" className="text-2xl font-bold tracking-tighter uppercase">
              NWORAH<span className="text-primary italic"> EBUKA</span> .AUGUSTUS  
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed font-light">
              Designing secure, resilient, and high-performance digital architectures for global scale.
            </p>
            <div className="text-[10px] font-mono text-primary uppercase tracking-[0.3em] font-bold">
              EST. 2019 // SYST_ARCH_V2.2
            </div>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-8">
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  whileHover={{ y: -5, color: "var(--primary)" }}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-border/60 text-muted-foreground transition-all hover:border-primary/50 hover:bg-muted/50 flex items-center justify-center"
                  aria-label={link.label}
                >
                  <link.icon size={20} strokeWidth={1.5} />
                </motion.a>
              ))}
            </div>

            <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-[0.4em] pt-4 border-t border-border/30 w-full md:w-auto text-center md:text-right">
              &copy; {new Date().getFullYear()} // NWORAH EBUKA
            </p>
          </div>

        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="mt-20 pt-8 border-t border-border/10 flex justify-center grayscale text-[8px] font-mono uppercase tracking-widest space-x-8"
        >
          <span>LAT: 6.5244° N</span>
          <span>LNG: 3.3792° E</span>
          <span>SYSTEM_OPERATIONAL_OK</span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
