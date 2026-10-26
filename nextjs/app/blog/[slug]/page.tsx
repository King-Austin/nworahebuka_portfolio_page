import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { findBlogPost, publishedBlogPosts } from "@/lib/content";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return publishedBlogPosts.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const post = findBlogPost((await params).slug); if (!post) return {}; return { title: post.title, description: post.excerpt, alternates: { canonical: `/blog/${post.slug}` }, openGraph: { type: "article", title: post.title, description: post.excerpt, url: `/blog/${post.slug}`, publishedTime: post.publishedAt, images: post.coverImage ? [{ url: post.coverImage.src, alt: post.coverImage.alt }] : undefined } }; }

export default async function BlogPostPage({ params }: Props) {
  const post = findBlogPost((await params).slug); if (!post) notFound();
  const schema = { "@context": "https://schema.org", "@type": "BlogPosting", headline: post.title, description: post.excerpt, datePublished: post.publishedAt, dateModified: post.publishedAt, mainEntityOfPage: `${site.origin}/blog/${post.slug}`, image: post.coverImage ? `${site.origin}${post.coverImage.src}` : undefined, author: { "@type": "Person", name: site.name, url: site.origin }, publisher: { "@type": "Person", name: site.name } };
  return <article className="page-shell article-page"><JsonLd data={schema} /><Breadcrumbs parent="Writing" parentHref="/blog" current={post.title} /><header className="article-header"><p className="post-meta"><time dateTime={post.publishedAt}>{new Intl.DateTimeFormat("en-NG", { day: "numeric", month: "long", year: "numeric" }).format(new Date(post.publishedAt))}</time> · {post.readingTime} · {post.category}</p><h1>{post.title}</h1><p className="lead">{post.introduction}</p></header>{post.coverImage && <figure className="article-cover"><Image src={post.coverImage.src} alt={post.coverImage.alt} width={1358} height={1158} priority /><figcaption>{post.coverImage.caption}</figcaption></figure>}<div className="article-layout"><aside><p>Written by</p><strong>{site.name}</strong><span>Backend engineer &amp; systems architect</span></aside><div className="article-body">{post.sections.map((section, index) => <section key={section.heading}><span>{String(index + 1).padStart(2, "0")}</span><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.points && <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}{section.image && <figure><Image src={section.image.src} alt={section.image.alt} width={1600} height={900} /><figcaption>{section.image.caption}</figcaption></figure>}</section>)}</div></div></article>;
}
