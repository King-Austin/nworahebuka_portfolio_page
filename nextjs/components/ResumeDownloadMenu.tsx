"use client";

import Link from "next/link";
import { Download, Eye, FileText, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import type { ResumeVersion } from "@/lib/resume";

export function ResumeDownloadMenu({ versions }: { versions: ResumeVersion[] }) {
  const [open, setOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const firstItem = useRef<HTMLAnchorElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    firstItem.current?.focus();
    const closeOnOutside = (event: PointerEvent) => {
      if (!container.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    document.addEventListener("pointerdown", closeOnOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return <div className="resume-menu" ref={container}>
    <button ref={trigger} type="button" className="button secondary resume-menu-trigger" aria-haspopup="menu" aria-expanded={open} aria-controls={menuId} onClick={() => setOpen((value) => !value)}><Download size={16} /> Download résumé</button>
    {open && <><button className="resume-menu-backdrop" aria-label="Close résumé menu" onClick={() => setOpen(false)} /><div className="resume-menu-panel" id={menuId} role="menu" aria-label="Résumé versions">
      <header><div><span>Choose a version</span><strong>Résumé downloads</strong></div><button type="button" aria-label="Close résumé menu" onClick={() => { setOpen(false); trigger.current?.focus(); }}><X size={17} /></button></header>
      {versions.map((version, index) => <a ref={index === 0 ? firstItem : undefined} role="menuitem" href={version.downloadUrl} download={version.filename} key={version.id} onClick={() => setOpen(false)}><FileText size={19} /><span><strong>{version.label}{version.recommended && <small>Recommended</small>}</strong><em>{version.description}</em></span><Download size={16} /></a>)}
      <Link role="menuitem" href="/resume" onClick={() => setOpen(false)}><Eye size={19} /><span><strong>View résumé online</strong><em>Preview both versions before downloading.</em></span></Link>
    </div></>}
  </div>;
}
