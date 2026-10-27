import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { publishedRecognitions } from "@/lib/content";

export const metadata: Metadata = { title: "Recognition", description: "Verified awards, competitions and training completed by Nworah Ebuka Augustus.", alternates: { canonical: "/recognition" } };

export default function RecognitionPage() { return <div className="page-shell"><header className="page-header"><p className="eyebrow"><span>01</span> Recognition</p><h1>Credentials with context.</h1><p>Verified awards, competition participation and technical training—with the issuer, team and personal contribution stated plainly.</p></header><div className="credential-grid">{publishedRecognitions.map((item, index) => <Link href={`/recognition/${item.slug}`} key={item.slug}><div className={`credential-cover${item.evidence[0] ? " has-certificate" : ""}`}>{item.evidence[0] ? <Image src={item.evidence[0].src} alt={item.evidence[0].alt} width={1100} height={850} /> : <><span>{item.kind}</span><strong>{item.shortTitle}</strong><small>{item.issuer}</small></>}</div><div className="credential-copy"><span>{String(index + 1).padStart(2, "0")}</span><div><time>{item.dateLabel}</time><h2>{item.shortTitle}</h2><p>{item.contribution}</p></div><ArrowUpRight /></div></Link>)}</div></div>; }
