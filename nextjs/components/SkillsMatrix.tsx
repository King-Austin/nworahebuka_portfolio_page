import type { IconType } from "react-icons";
import { SiCss, SiDjango, SiDocker, SiElectron, SiExpress, SiFastapi, SiGit, SiGithub, SiHtml5, SiLinux, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPostman, SiPython, SiReact, SiRedis, SiSupabase, SiTailwindcss, SiTypescript, SiVercel } from "react-icons/si";

type Skill = { label: string; icon: IconType };
const groups: { title: string; index: string; skills: Skill[] }[] = [
  { title: "Frontend & applications", index: "07", skills: [
    { label: "React", icon: SiReact }, { label: "Next.js", icon: SiNextdotjs }, { label: "TypeScript", icon: SiTypescript }, { label: "Tailwind CSS", icon: SiTailwindcss }, { label: "Electron", icon: SiElectron }, { label: "HTML", icon: SiHtml5 }, { label: "CSS", icon: SiCss },
  ] },
  { title: "Backend & data", index: "09", skills: [
    { label: "Python", icon: SiPython }, { label: "Django", icon: SiDjango }, { label: "FastAPI", icon: SiFastapi }, { label: "Node.js", icon: SiNodedotjs }, { label: "Express", icon: SiExpress }, { label: "PostgreSQL", icon: SiPostgresql }, { label: "MongoDB", icon: SiMongodb }, { label: "Supabase", icon: SiSupabase }, { label: "Redis", icon: SiRedis },
  ] },
  { title: "Tools & infrastructure", index: "06", skills: [
    { label: "Docker", icon: SiDocker }, { label: "Git", icon: SiGit }, { label: "GitHub", icon: SiGithub }, { label: "Vercel", icon: SiVercel }, { label: "Linux", icon: SiLinux }, { label: "Postman", icon: SiPostman },
  ] },
];

export function SkillsMatrix() {
  return <div className="skills-matrix">{groups.map((group) => <section key={group.title}><header><h3>{group.title}</h3><span>{group.index}</span></header><ul>{group.skills.map(({ label, icon: Icon }) => <li key={label}><Icon aria-hidden="true" /><span>{label}</span></li>)}</ul></section>)}</div>;
}
