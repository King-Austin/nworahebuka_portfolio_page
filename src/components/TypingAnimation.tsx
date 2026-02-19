import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  "Mid-Level Python/Django Backend Engineer",
  "Security-First Developer",
  "Co-Founder @ Websync Digital",
  "API Architect",
  "Cryptography Enthusiast",
];

const TypingAnimation = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-8 sm:h-9 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="block text-lg sm:text-xl font-mono text-primary"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default TypingAnimation;
