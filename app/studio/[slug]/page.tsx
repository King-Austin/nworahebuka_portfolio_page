import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { findStudioProject, publishedStudioProjects } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return publishedStudioProjects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = findStudioProject((await params).slug);
  if (!item) return {};
  return { title: `${item.title} — Websync Digital`, description: item.summary, alternates: { canonical: `/studio/${item.slug}` } };
}

export default async function StudioDetail({ params }: Props) {
  const item = findStudioProject((await params).slug);
  if (!item) notFound();
  return <article className="page-shell studio-detail"><Breadcrumbs parent="Studio" parentHref="/studio" current={item.title} /><header className="case-header"><p className="eyebrow">{item.category} · Websync Digital</p><h1>{item.title}</h1><p className="lead">{item.summary}</p>{item.liveUrl && <a href={item.liveUrl} target="_blank" rel="noreferrer" className="button">Visit product <ArrowUpRight size={16} /></a>}</header><div className="studio-case-grid"><section><span>01</span><h2>Where it started</h2><p>{item.origin}</p></section><section><span>02</span><h2>What it became</h2><p>{item.outcome}</p></section><section><span>03</span><h2>My contribution</h2><p>{item.contribution}</p></section></div><section className="feature-list"><p className="eyebrow">Product capabilities</p><ol>{item.capabilities.map((capability, index) => <li key={capability}><span>{String(index + 1).padStart(2, "0")}</span>{capability}</li>)}</ol></section></article>;
}
