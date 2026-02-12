import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "SQL", "TypeScript"],
  },
  {
    title: "Frameworks & APIs",
    skills: ["Django", "FastAPI", "Express.js", "REST APIs", "Microservices"],
  },
  {
    title: "Databases & Storage",
    skills: ["MySQL", "SQLite", "MongoDB", "Query Optimization", "DBMS Design"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Git & GitHub", "CI/CD", "Postman", "Linux"],
  },
  {
    title: "Core Competencies",
    skills: [
      "API Design",
      "Auth & Security",
      "Performance Tuning",
      "Workflow Automation",
      "Cryptography",
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding border-t border-border">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-mono text-primary mb-2">
            // Technical Arsenal
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold mb-10">
            Skills & Technologies
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card p-6"
            >
              <h4 className="font-semibold text-sm text-primary mb-4 font-mono">
                {cat.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="tech-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
