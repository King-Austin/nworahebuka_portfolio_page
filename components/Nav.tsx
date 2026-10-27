"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

const links = [
  ["Work", "/work"],
  ["Studio", "/studio"],
  ["Recognition", "/recognition"],
  ["Writing", "/blog"],
  ["About", "/about"],
  ["Résumé", "/resume"],
] as const;

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const selected = localStorage.getItem("theme");
    const useDark = selected === "dark";
    document.documentElement.dataset.theme = useDark ? "dark" : "light";
    const frame = requestAnimationFrame(() => setDark(useDark));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const update = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(available > 0 ? window.scrollY / available : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <header className="site-nav">
      <span className="nav-progress" aria-hidden="true" style={{ transform: `scaleX(${progress})` }} />
      <Link href="/" className="wordmark"><span className="wordmark-mark" aria-hidden="true"><b>NE</b><i>A</i></span><span className="wordmark-copy"><strong>Nworah Ebuka</strong><small>Systems engineer</small></span></Link>
      <nav className={open ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
        {links.map(([label, href]) => <Link className={pathname === href || pathname.startsWith(`${href}/`) ? "active" : undefined} aria-current={pathname === href ? "page" : undefined} key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
      </nav>
      <div className="nav-tools">
        <Link className="nav-contact" href="/#contact">Let&apos;s talk</Link>
        <button onClick={toggleTheme} className="icon-button" aria-label={`Use ${dark ? "light" : "dark"} theme`}>
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button onClick={() => setOpen(!open)} className="icon-button menu-button" aria-expanded={open} aria-label="Toggle navigation">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}
