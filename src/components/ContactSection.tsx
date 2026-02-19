import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Github, Linkedin, ExternalLink } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding border-t border-border">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto text-center"
        >
          <h2 className="text-sm font-mono text-primary mb-2">// Get In Touch</h2>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Let's Build Something Great
          </h3>
          <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
            I'm always open to discussing new projects, backend architecture
            challenges, or opportunities to contribute to impactful products.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <a
              href="mailto:nworahebuka.a@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors w-full sm:w-auto justify-center"
            >
              <Mail size={16} />
              nworahebuka.a@gmail.com
            </a>
            <a
              href="tel:+2349134846838"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-medium text-sm hover:border-primary/50 hover:text-primary transition-colors w-full sm:w-auto justify-center"
            >
              <Phone size={16} />
              +234 913 484 6838
            </a>
          </div>

          <div className="flex items-center justify-center gap-5">
            <a
              href="https://github.com/King-Austin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/nworah_ebuka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://www.websyncdigital.com.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Websync Digital"
            >
              <ExternalLink size={22} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
