"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  "Mid-Level Python/Django Backend Engineer",
  "Full-Stack Software Architect",
  "Startup Growth Strategist",
  "Product-Led CTO",
];

const TypingAnimation = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-6 overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.p
          key={roles[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-sm sm:text-base font-mono text-primary"
        >
          {roles[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default TypingAnimation;
