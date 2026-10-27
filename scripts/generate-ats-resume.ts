import fs from "node:fs";
import path from "node:path";
import PDFDocument from "pdfkit";
import { resumeData, resumeVersions } from "../lib/resume";

const ats = resumeVersions.find((version) => version.id === "ats");
if (!ats) throw new Error("ATS résumé version is not configured.");

const output = path.join(process.cwd(), "public", "resumes", ats.filename);
fs.mkdirSync(path.dirname(output), { recursive: true });

const document = new PDFDocument({ size: "A4", margins: { top: 42, right: 48, bottom: 42, left: 48 }, info: { Title: `${resumeData.name} — ATS Resume`, Author: resumeData.name, Subject: resumeData.headline } });
document.pipe(fs.createWriteStream(output));

const rule = () => document.moveDown(.3).strokeColor("#222222").lineWidth(.7).moveTo(48, document.y).lineTo(547, document.y).stroke().moveDown(.55);
const heading = (title: string) => { document.moveDown(.45).font("Helvetica-Bold").fontSize(10.5).fillColor("#111111").text(title.toUpperCase()); rule(); };

document.font("Helvetica-Bold").fontSize(19).fillColor("#111111").text(resumeData.name.toUpperCase(), { align: "center" });
document.font("Helvetica").fontSize(11).text(resumeData.headline, { align: "center" });
document.moveDown(.25).fontSize(8.5).text(`${resumeData.location} | ${resumeData.phone} | ${resumeData.email}`, { align: "center" });
document.text(resumeData.github, { align: "center", link: resumeData.github, underline: true });

heading("Professional Summary");
document.font("Helvetica").fontSize(9).fillColor("#222222").text(resumeData.summary, { lineGap: 2 });

heading("Technical Skills");
for (const skill of resumeData.skills) document.font("Helvetica-Bold").fontSize(9).text(`${skill.category}: `, { continued: true }).font("Helvetica").text(skill.items.join(", "));

heading("Professional Experience & Key Projects");
for (const role of resumeData.roles) {
  document.font("Helvetica-Bold").fontSize(10).text(`${role.organization} — ${role.title}`, { continued: false });
  document.font("Helvetica-Oblique").fontSize(8.5).text(role.period);
  for (const bullet of role.bullets) document.font("Helvetica").fontSize(8.8).text(`• ${bullet}`, { indent: 10, lineGap: 1.5 });
  document.moveDown(.35);
}

heading("Education");
document.font("Helvetica-Bold").fontSize(10).text(`${resumeData.education.institution} — ${resumeData.education.degree}`);
document.font("Helvetica-Oblique").fontSize(8.5).text(resumeData.education.period);
document.font("Helvetica").fontSize(9).text(`Focus: ${resumeData.education.focus}`);

document.end();
