export type PublicationState = "published" | "draft" | "archived";
export type VerificationState = "verified" | "partially-verified" | "unverified";

export interface EvidenceAsset {
  src: string;
  original?: string;
  alt: string;
  caption: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  summary: string;
  impact?: string;
  contribution?: string;
  problem: string;
  features: string[];
  technologies: string[];
  liveUrl?: string;
  sourceUrl?: string;
  gallery?: EvidenceAsset[];
  architecture?: "rmis" | "voltrix" | "smart-attendance";
  publication: PublicationState;
  verification: VerificationState;
  featured?: boolean;
}

export interface SideProject {
  title: string;
  summary: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  sourceUrl?: string;
}

export interface Recognition {
  slug: string;
  title: string;
  shortTitle: string;
  issuer: string;
  date: string;
  dateLabel: string;
  kind: "award" | "competition" | "training";
  summary: string;
  contribution: string;
  team?: string;
  project?: string;
  printedName: string;
  evidence: EvidenceAsset[];
  sourceLinks: { label: string; href: string }[];
  publication: PublicationState;
  verification: VerificationState;
}

export interface StudioProject {
  slug: string;
  title: string;
  summary: string;
  category: string;
  origin: string;
  outcome: string;
  contribution: string;
  capabilities: string[];
  client?: string;
  liveUrl?: string;
  publication: PublicationState;
  verification: VerificationState;
}

export interface Experience {
  period: string;
  role: string;
  organization: string;
  description: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  category: string;
  introduction: string;
  coverImage?: EvidenceAsset;
  sections: { heading: string; paragraphs: string[]; points?: string[]; image?: EvidenceAsset }[];
  publication: PublicationState;
}
