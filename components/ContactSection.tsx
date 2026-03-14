"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Github, Linkedin, ExternalLink, Twitter, Facebook } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nworahebuka.a@gmail.com",
      href: "mailto:nworahebuka.a@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 814 361 7443",
      href: "tel:+2348143617443",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/King-Austin",
      href: "https://github.com/King-Austin",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/amkingaustin",
      href: "https://www.linkedin.com/in/amkingaustin",
    },
    {
      icon: Twitter,
      label: "X / Twitter",
      value: "x.com/KingAustin360",
      href: "https://x.com/KingAustin360",
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "facebook.com/nworah.ebuka.5",
      href: "https://www.facebook.com/nworah.ebuka.5",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="section-container" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-mono text-primary mb-2">// Get In Touch</h2>
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">Let's Build Something Great</h3>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass-card p-6 flex items-center gap-4 hover:border-primary/40 group transition-all"
                >
                  <div className="p-3 rounded-full bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{info.label}</p>
                    <p className="font-semibold">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 flex flex-col justify-center text-center bg-primary/5 border-primary/10"
            >
              <h4 className="text-xl font-bold mb-4 italic">"True engineering is the art of solving problems people didn't know they had, in ways they can't understand."</h4>
              <p className="text-sm text-primary font-mono mb-8">// Ready to scale your next project?</p>
              <a
                href="mailto:nworahebuka.a@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
              >
                Start a Conversation <ExternalLink size={16} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
