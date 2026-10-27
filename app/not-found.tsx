import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() { return <div className="not-found"><p className="eyebrow">404 · Route not found</p><h1>The system has no record of this page.</h1><p>It may have moved, stayed in draft, or never existed.</p><Link href="/" className="button"><ArrowLeft size={17} /> Return home</Link></div>; }
