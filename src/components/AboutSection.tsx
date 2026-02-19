import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Server, Code2 } from "lucide-react";

const highlights = [
  { icon: Server, label: "Systems Thinker", desc: "Designing scalable, distributed backend architectures" },
  { icon: Shield, label: "Security-Conscious", desc: "Building with encryption-first, zero-trust principles" },
  { icon: Code2, label: "Problem Solver", desc: "Shipping production-grade solutions that deliver impact" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding border-t border-border">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-mono text-primary mb-2">// About Me</h2>
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">
            Beyond the Code
          </h3>

          <p className="text-muted-foreground leading-relaxed max-w-2xl mb-10">
            Results-driven Backend Developer and Electronic Engineering student
            with a focus on building secure, scalable systems. Co-founder at{" "}
            <a
              href="https://www.websyncdigital.com.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Websync Digital
            </a>
            , with a proven track record in developing cryptographic middleware,
            real-time academic solutions, and e-commerce platforms for SMEs.
            Proficient in Python (Django/FastAPI) and Node.js, with a strong
            emphasis on API security, payment integrations, and database
            optimization. As IEEE RAS Chair, I combine technical leadership with
            hands-on engineering to ship reliable, production-grade backends.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card p-5"
              >
                <item.icon size={24} className="text-primary mb-3" />
                <h4 className="font-semibold text-sm mb-1">{item.label}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
