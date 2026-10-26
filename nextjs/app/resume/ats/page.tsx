import type { Metadata } from "next";
import { Download } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { resumeData, resumeVersions } from "@/lib/resume";

export const metadata: Metadata = { title: "ATS Résumé", description: "Applicant-tracking-system résumé for Nworah Ebuka Augustus.", alternates: { canonical: "/resume/ats" } };

export default function AtsResumePage() {
  const ats = resumeVersions.find((version) => version.id === "ats")!;
  return <div className="page-shell ats-page"><Breadcrumbs parent="Résumé" parentHref="/resume" current="ATS version" /><div className="ats-toolbar"><div><p className="eyebrow">Single-column version</p><h1>ATS résumé</h1></div><a className="button" href={ats.downloadUrl} download={ats.filename}><Download size={17} /> Download PDF</a></div>
    <article className="ats-document"><header><h2>{resumeData.name}</h2><p>{resumeData.headline}</p><address>{resumeData.location} · {resumeData.phone} · <a href={`mailto:${resumeData.email}`}>{resumeData.email}</a> · <a href={resumeData.github}>GitHub</a></address></header>
      <section><h3>Professional summary</h3><p>{resumeData.summary}</p></section>
      <section><h3>Technical skills</h3>{resumeData.skills.map((skill) => <p key={skill.category}><strong>{skill.category}:</strong> {skill.items.join(", ")}</p>)}</section>
      <section><h3>Professional experience &amp; key projects</h3>{resumeData.roles.map((role) => <article key={`${role.organization}-${role.title}`}><h4>{role.organization} — {role.title}</h4><time>{role.period}</time><ul>{role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></article>)}</section>
      <section><h3>Education</h3><h4>{resumeData.education.institution} — {resumeData.education.degree}</h4><time>{resumeData.education.period}</time><p><strong>Focus:</strong> {resumeData.education.focus}</p></section>
    </article>
  </div>;
}
