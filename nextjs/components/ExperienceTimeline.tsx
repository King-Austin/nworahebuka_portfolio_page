"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Experience } from "@/lib/types";

export function ExperienceTimeline({ items }: { items: Experience[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div className="timeline" ref={ref}>
      <motion.span className="timeline-line" aria-hidden initial={{ scaleY: 0 }} animate={visible ? { scaleY: 1 } : { scaleY: 0 }} transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }} />
      {items.map((item, index) => (
        <motion.article className="timeline-item" key={`${item.role}-${item.period}`} initial={{ opacity: 0, x: 20 }} animate={visible ? { opacity: 1, x: 0 } : undefined} transition={{ duration: .55, delay: .12 + index * .11 }}>
          <span className="timeline-dot" aria-hidden><i /></span>
          <time>{item.period}</time>
          <div><h3>{item.role}</h3><p className="organization">{item.organization}</p><p>{item.description}</p></div>
        </motion.article>
      ))}
    </div>
  );
}
