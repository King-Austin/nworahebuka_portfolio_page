import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { site } from "@/lib/site";

export function Breadcrumbs({ parent, parentHref, current }: { parent: string; parentHref: string; current: string }) {
  const data = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.origin },
    { "@type": "ListItem", position: 2, name: parent, item: `${site.origin}${parentHref}` },
    { "@type": "ListItem", position: 3, name: current },
  ] };
  return <><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href={parentHref}>{parent}</Link><span>/</span><span>{current}</span></nav><JsonLd data={data} /></>;
}
