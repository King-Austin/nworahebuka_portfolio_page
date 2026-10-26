import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { publishedBlogPosts } from "@/lib/content";

export const metadata: Metadata = { title: "Writing", description: "Notes on backend architecture, systems security and engineering practice by Nworah Ebuka Augustus.", alternates: { canonical: "/blog" }, openGraph: { title: "Writing — Nworah Ebuka Augustus", description: "Notes on backend architecture, systems security and engineering practice.", url: "/blog" } };

export default function BlogPage() {
  return <div className="page-shell blog-index"><header className="page-header"><p className="eyebrow"><span>01</span> Writing</p><h1>Notes from building systems.</h1><p>Practical essays about architecture, security and the engineering decisions behind dependable products.</p></header><div className="post-list">{publishedBlogPosts.map((post, index) => <Link href={`/blog/${post.slug}`} key={post.slug}><span>{String(index + 1).padStart(2, "0")}</span><div><p className="post-meta"><time dateTime={post.publishedAt}>{new Intl.DateTimeFormat("en-NG", { day: "numeric", month: "long", year: "numeric" }).format(new Date(post.publishedAt))}</time> · {post.readingTime} · {post.category}</p><h2>{post.title}</h2><p>{post.excerpt}</p></div><ArrowUpRight size={20} /></Link>)}</div></div>;
}
