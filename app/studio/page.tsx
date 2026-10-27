import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { publishedStudioProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Websync Digital Studio",
  description: "How Nworah Ebuka Augustus and his co-founder built Websync Digital from affordable business websites into custom software and reusable SaaS products.",
  alternates: { canonical: "/studio" },
};

const chapters = [
  {
    label: "The opening",
    title: "Premium websites without the traditional cost.",
    copy: "We started when AI was changing how small teams could design and build. Many SMEs needed a credible website but could not justify the cost of a traditional agency engagement. We used better tools and a focused two-person workflow to deliver polished business websites at a more practical price.",
  },
  {
    label: "The shift",
    title: "From client work to reusable software.",
    copy: "A custom platform for a real-estate company showed us a larger opportunity. Instead of rebuilding the same foundations for every business, we could turn the product into software that more property teams could start using quickly and pay for over time.",
  },
  {
    label: "Where we are",
    title: "Websites, custom systems and our own products.",
    copy: "Today our work spans service-business websites, custom operational software and utility products such as Topit. We use AI where it improves speed, but the value still comes from understanding the business, making sound technical decisions and supporting what we ship.",
  },
] as const;

export default function StudioPage() {
  return (
    <div className="page-shell studio-page">
      <header className="studio-hero">
        <p className="eyebrow"><span>01</span> Websync Digital</p>
        <h1>A two-person studio built to move quickly.</h1>
        <p className="lead">We began by helping smaller businesses get a strong digital presence without an agency-sized bill. Client work taught us what businesses repeatedly needed, and those lessons led us into custom software and products of our own.</p>
        <a className="text-link" href="https://www.websyncdigital.com.ng" target="_blank" rel="noreferrer">Visit Websync Digital <ArrowUpRight size={16} /></a>
      </header>

      <section className="studio-story" aria-labelledby="studio-story-title">
        <div>
          <p className="eyebrow">How it developed</p>
          <h2 id="studio-story-title">We did not begin by trying to build everything.</h2>
        </div>
        <div className="studio-chapters">
          {chapters.map((chapter, index) => <article key={chapter.label}><span>{String(index + 1).padStart(2, "0")} · {chapter.label}</span><h3>{chapter.title}</h3><p>{chapter.copy}</p></article>)}
        </div>
      </section>

      <section className="founder-split" aria-labelledby="founder-split-title">
        <div><p className="eyebrow">The founding team</p><h2 id="founder-split-title">Different strengths, one delivery team.</h2></div>
        <div className="founder-roles">
          <article><span>01</span><p className="micro-label">Technical direction</p><h3>Nworah Ebuka Augustus</h3><p>I handle system architecture, backend development, APIs, security, infrastructure and deployment.</p></article>
          <article><span>02</span><p className="micro-label">Product and brand</p><h3>Co-founder</h3><p>My partner leads interface design, visual direction, brand thinking and the customer-facing side of each product.</p></article>
        </div>
      </section>

      <section className="studio-products" aria-labelledby="studio-products-title">
        <header><p className="eyebrow">Selected products</p><h2 id="studio-products-title">What the studio is building.</h2><p>These products show the move from one-off delivery toward software that can serve more than one business.</p></header>
        <div className="studio-product-list">{publishedStudioProjects.map((item, index) => <Link href={`/studio/${item.slug}`} key={item.slug}><span>{String(index + 1).padStart(2, "0")}</span><div><p className="micro-label">{item.category}</p><h3>{item.title}</h3><p>{item.summary}</p></div><ArrowUpRight size={20} /></Link>)}</div>
      </section>

      <section className="studio-principle"><p className="eyebrow">Our view on AI</p><blockquote>AI helps our small team explore, build and test faster. It does not replace judgment, responsibility or support after launch.</blockquote><p>We use it as leverage—not as a reason to ship generic work. Architecture, security, tenant isolation and maintainability still need deliberate engineering.</p></section>
    </div>
  );
}
