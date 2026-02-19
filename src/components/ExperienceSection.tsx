import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Award, GraduationCap } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    title: "Co-founder & Lead Backend Engineer",
    org: "Websync Digital",
    link: "https://www.websyncdigital.com.ng",
    period: "Present",
    description:
      "Co-founded a digital solutions company delivering production-grade web applications. Lead backend architecture, API design, and security implementation for client projects.",
  },
  {
    icon: Award,
    title: "Chair — IEEE Robotics & Automation Society (RAS)",
    org: "IEEE Student Branch",
    period: "2024 – Present",
    description:
      "Leading automation and software innovation projects. Driving student engagement in robotics, AI, and systems engineering initiatives.",
  },
  {
    icon: Award,
    title: "Member — IEEE Industrial Applications Society (IAS)",
    org: "IEEE",
    period: "2025",
    description:
      "Active member contributing to industrial applications of technology and engineering practices.",
  },
  {
    icon: Award,
    title: "IEEEXtreme Programming Competition",
    org: "IEEE Global",
    period: "2025",
    description:
      "Competed in the global 24-hour coding marathon, tackling algorithmic and backend challenges under extreme time constraints.",
  },
  {
    icon: Award,
    title: "Tech4Dev Software Development Program",
    org: "Tech4Dev",
    period: "2024",
    description:
      "Completed an intensive backend development training program focused on API integration, systems design, and production deployment.",
  },
];

const education = {
  icon: GraduationCap,
  degree: "B.Eng. Electronic & Computer Engineering",
  school: "Nnamdi Azikiwe University, Awka",
  period: "Nov 2021 – Sept 2026",
  coursework:
    "Embedded Systems, Computer Architecture, Digital Logic Design, Control Systems, Microcontrollers & Interfacing",
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding border-t border-border">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-mono text-primary mb-2">
            // Experience & Leadership
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold mb-10">
            Where I've Made Impact
          </h3>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 sm:left-5 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative pl-12 sm:pl-14"
              >
                <div className="absolute left-2 sm:left-3 top-1 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>

                <div className="glass-card p-5 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h4 className="font-semibold text-sm">{exp.title}</h4>
                    <span className="text-xs font-mono text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs text-primary mb-2">
                    {exp.link ? (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {exp.org}
                      </a>
                    ) : (
                      exp.org
                    )}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-16"
        >
          <h2 className="text-sm font-mono text-primary mb-2">// Education</h2>
          <div className="glass-card p-6">
            <div className="flex items-start gap-4">
              <GraduationCap size={24} className="text-primary mt-0.5 shrink-0" />
              <div>
                <h4 className="font-semibold text-sm">{education.degree}</h4>
                <p className="text-xs text-primary mb-1">{education.school}</p>
                <p className="text-xs font-mono text-muted-foreground mb-2">
                  {education.period}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <span className="text-secondary-foreground font-medium">
                    Relevant Coursework:
                  </span>{" "}
                  {education.coursework}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
