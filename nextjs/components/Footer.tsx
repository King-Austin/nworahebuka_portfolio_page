import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return <footer className="footer"><p>© {new Date().getFullYear()} Nworah Ebuka Augustus · King Austin</p><div><Link href="/work">Work</Link><Link href="/recognition">Recognition</Link><Link href="/blog">Writing</Link><a href={`mailto:${site.email}`}>Email</a></div></footer>;
}
