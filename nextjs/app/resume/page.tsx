import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Download, FileText } from "lucide-react";
import { resumeVersions } from "@/lib/resume";

export const metadata: Metadata = { title: "Résumé", description: "Résumé of Nworah Ebuka Augustus, backend engineer and systems architect.", alternates: { canonical: "/resume" } };

export default function ResumePage() {
  const primary = resumeVersions.find((version) => version.id === "primary")!;
  return <div className="page-shell resume-page"><header className="page-header"><p className="eyebrow"><span>01</span> Résumé</p><h1>Choose the version that fits the review.</h1><p>Download the designed résumé for people, or the single-column edition for applicant tracking systems.</p></header>
    <section className="resume-version-grid" aria-label="Résumé versions">{resumeVersions.map((version) => <article className={version.recommended ? "recommended" : undefined} key={version.id}><FileText aria-hidden /><div><span>{version.recommended ? "Recommended" : "Application-ready"}</span><h2>{version.label}</h2><p>{version.description}</p></div><div className="resume-card-actions"><a href={version.downloadUrl} download={version.filename}>Download PDF <Download size={16} /></a><Link href={version.onlineUrl}>View online <ArrowUpRight size={16} /></Link></div></article>)}</section>
    <section className="resume-preview"><div><p className="eyebrow">Primary résumé preview</p><a className="button" href={primary.downloadUrl} download={primary.filename}><Download size={17} /> Download PDF</a></div><object data={primary.downloadUrl} type="application/pdf" aria-label="Nworah Ebuka Augustus Backend and Systems résumé"><p>Your browser cannot display this PDF. <a href={primary.downloadUrl}>Download the résumé.</a></p></object></section>
  </div>;
}
