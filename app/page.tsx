import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ContactSection } from "@/components/ContactSection";
import { JsonLd } from "@/components/JsonLd";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { ResumeDownloadMenu } from "@/components/ResumeDownloadMenu";
import { SkillsMatrix } from "@/components/SkillsMatrix";
import { SideProjectArchive } from "@/components/SideProjectArchive";
import { VolunteerTimeline } from "@/components/VolunteerTimeline";
import { experiences, publishedProjects, publishedRecognitions, sideProjects, volunteerExperiences } from "@/lib/content";
import { site } from "@/lib/site";
import { resumeVersions } from "@/lib/resume";

const flagshipProjects = publishedProjects.filter((project) => project.featured).slice(0, 6);
const groups = [
  { title: "Secure platforms", note: "Authentication, cryptography and threat analysis.", projects: flagshipProjects.filter((project) => project.category.includes("Security")) },
  { title: "Commerce systems", note: "Products for selling, payments and operations.", projects: flagshipProjects.filter((project) => project.category === "Commerce") },
  { title: "Education tools", note: "Attendance, exams and tools for schools.", projects: flagshipProjects.filter((project) => project.category === "Education") },
  { title: "Industry & connected systems", note: "Property operations, consumer utilities and hardware-linked products.", projects: flagshipProjects.filter((project) => ["Property Technology", "Financial Technology", "Embedded Systems"].includes(project.category)) },
];

export default function Home() {
  const person = { "@context": "https://schema.org", "@type": "ProfilePage", name: `${site.name} — Backend engineer profile`, url: site.origin, mainEntity: { "@id": `${site.origin}/#person`, "@type": "Person", name: site.name, givenName: "Ebuka Augustus", familyName: "Nworah", alternateName: site.alternateNames, description: site.description, url: site.origin, email: `mailto:${site.email}`, image: { "@type": "ImageObject", url: `${site.origin}/profile.webp`, width: 720, height: 900 }, jobTitle: ["Backend Engineer", "Software Developer", "Systems Architect"], knowsAbout: ["Python", "Django", "Node.js", "API development", "PostgreSQL", "Docker", "System architecture"], worksFor: { "@type": "Organization", name: "Websync Digital" }, alumniOf: { "@type": "CollegeOrUniversity", name: "Nnamdi Azikiwe University" }, award: publishedRecognitions.map((item) => item.title), sameAs: [site.github, site.linkedin] } };
  return <>
    <JsonLd data={person} />
    <header className="home-hero section-shell">
      <Reveal className="hero-copy">
        <p className="hero-status"><i aria-hidden /> Open to backend developer roles <span>— Remote, hybrid or on-site</span></p>
        <h1>Nworah Ebuka <span>Backend Engineer.</span></h1>
        <p className="hero-role">Python · Django · Node.js · APIs · PostgreSQL · Docker</p>
        <p className="hero-intro">I build secure backend systems and dependable product infrastructure. I’m currently looking for a developer role where I can help a team build, ship and maintain useful software.</p>
        <div className="actions"><Link href="#work" className="button">View projects <ArrowUpRight size={17} /></Link><ResumeDownloadMenu versions={resumeVersions} /><a href={`mailto:${site.email}?subject=Backend%20engineering%20opportunity`} className="button secondary" data-ga-event="open_email" data-ga-label="hero">Discuss a role</a></div>
      </Reveal>
      <Reveal className="hero-portrait" delay={.12}><div className="hero-portrait-frame"><Image src="/profile.webp" alt="Nworah Ebuka Augustus wearing an Electronic and Computer Engineering graduation gown" width={720} height={900} priority sizes="(max-width: 850px) 82vw, 400px" /></div><div className="hero-portrait-meta"><span>Electronic &amp; Computer Engineering</span><span>UNIZIK · 2026</span></div></Reveal>
      <a className="explore-link" href="#work">Explore the work <ArrowDown size={15} /></a>
    </header>

    <section className="proof-band" aria-label="Portfolio highlights"><div>{[[publishedProjects.length, "documented builds"], [publishedRecognitions.length, "verified recognitions"], [4, "engineering domains"], [1, "co-founded studio"]].map(([value, label], index) => <Reveal key={label} delay={index * .06} className="proof-item"><span>{String(index + 1).padStart(2, "0")}</span><strong>{value}</strong><p>{label}</p></Reveal>)}</div></section>

    <section className="section-shell identity-section">
      <p className="section-number">01 / About me</p>
      <div className="identity-grid"><Reveal><h2 className="identity-name">Nworah<br />Ebuka<br /><span>Augustus</span></h2></Reveal><Reveal className="identity-copy" delay={.08}><h3>I can join a team and contribute beyond the codebase.</h3><p>I am a backend engineer with hands-on experience building APIs, business software, security tools and connected systems. Co-founding Websync Digital taught me how to understand requirements, make practical technical decisions, ship with a small team and support products after launch.</p><dl><div><dt>Based in</dt><dd>Anambra, Nigeria</dd></div><div><dt>Core role</dt><dd>Backend engineering</dd></div><div><dt>Availability</dt><dd>Open to developer roles</dd></div></dl><Link href="/about" className="text-link">More about how I work <ArrowUpRight size={15} /></Link></Reveal></div>
    </section>

    <section className="section-shell work-showcase" id="work">
      <div className="archive-heading"><p className="section-number">02 / Selected work</p><div><h2>Six flagship<br />projects.</h2><p>Focused case studies across business, security, education and connected systems.</p></div><Link href="/work" className="text-link">View all projects <ArrowUpRight size={15} /></Link></div>
      {groups.map((group, groupIndex) => <section className="project-category" key={group.title}><header><span>{String(groupIndex + 1).padStart(2, "0")}</span><h3>{group.title}</h3><p>{group.note}</p></header><div className="project-grid">{group.projects.map((project) => <ProjectCard project={project} index={publishedProjects.indexOf(project)} key={project.slug} />)}</div></section>)}
    </section>

    <section className="section-shell side-projects-section">
      <div className="side-projects-heading"><p className="section-number">02B / Other builds</p><div><h2>Smaller products.<br />Clear ideas.</h2><p>Smaller products I built to test useful ideas.</p></div></div>
      <SideProjectArchive items={sideProjects} />
    </section>

    <section className="section-shell capabilities-section">
      <div className="split-heading"><p className="section-number">03 / Skills</p><div><h2>The tools I use to design, build and ship products.</h2><p>I choose tools based on what each product needs to do.</p></div></div>
      <SkillsMatrix />
    </section>

    <section className="section-shell studio-feature">
      <p className="section-number">04 / Company</p><div className="studio-card"><div><p className="micro-label">Company I co-founded</p><h2>Websync<br />Digital</h2><p>We started with affordable websites for smaller businesses, then grew into custom software and products such as RMIS and Topit.</p><Link href="/studio" className="text-link">Read the studio story <ArrowUpRight size={15} /></Link></div><aside><span>My role</span><strong>Co-founder &amp;<br />Lead Backend Engineer</strong><p>Architecture · APIs · Security · Deployment</p></aside></div>
    </section>

    <section className="section-shell experience-grid"><div><p className="section-number">05 / Experience</p><h2>What I have built.<br /><em>Where I contributed.</em></h2><figure><Image src="/nworah-ebuka-augustus-at-work.jpg" alt="Nworah Ebuka Augustus working at a desk" width={700} height={520} sizes="(max-width: 800px) 100vw, 35vw" /><figcaption>At work · Anambra, Nigeria</figcaption></figure></div><div><ExperienceTimeline items={experiences} /><article className="education"><span>Education</span><div><h3>B.Eng. Electronic &amp; Computer Engineering</h3><p>Nnamdi Azikiwe University, Awka · 2021—2026</p></div></article></div></section>

    <section className="section-shell credentials-home">
      <div className="credentials-heading"><div><p className="section-number">06 / Recognition</p><h2>Awards and certificates</h2></div><Link href="/recognition" className="button secondary">View all certificates <ArrowUpRight size={16} /></Link></div>
      <p className="credential-summary"><strong>03</strong> / {String(publishedRecognitions.length).padStart(2, "0")} · Featured certificates</p>
      <div className="credentials-preview">{publishedRecognitions.slice(0, 3).map((item, index) => <Link href={`/recognition/${item.slug}`} key={item.slug}>
        <div className="certificate-preview">{item.evidence[0] ? <Image src={item.evidence[0].src} alt={item.evidence[0].alt} width={700} height={500} /> : <><span>{item.issuer}</span><strong>{item.shortTitle}</strong><small>Verified · {item.kind}</small></>}</div>
        <div className="certificate-meta"><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{item.shortTitle}</h3><p>{item.issuer} · {item.dateLabel}</p></div><ArrowUpRight size={16} /></div>
      </Link>)}</div>
    </section>

    <section className="section-shell volunteer-section">
      <div className="volunteer-summary"><p className="section-number">07 / Volunteer work</p><h2>Volunteer<br />leadership.</h2><div className="volunteer-count"><strong>{String(volunteerExperiences.length).padStart(2, "0")}</strong><span>2024 — Present</span></div></div>
      <VolunteerTimeline items={volunteerExperiences} />
    </section>

    <ContactSection />
  </>;
}
