/** Site-wide facts and navigation. Everything here comes from the Smart Enterprise Risk 360° PRD v2.1. */

export const site = {
  productName: "Smart Enterprise Risk 360°",
  shortName: "SER 360°",
  company: "Credigit Analytical Limited",
  tagline: "Credit and enterprise risk management for banks and microfinance institutions in Nigeria and Africa.",
  description:
    "Smart Enterprise Risk 360° is a cloud-based, AI-enabled credit and enterprise risk management platform for banks and microfinance institutions in Nigeria and Africa. One risk data spine, the 360° Risk Assessment Radar, and AI that drafts while accountable people approve.",
  /** Public URL for canonical links, Open Graph, robots and sitemap. Set NEXT_PUBLIC_SITE_URL in production. */
  url: (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, ""),
  locale: "en_GB",
} as const;

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "360 RAR", href: "/#radar" },
  { label: "Data spine", href: "/#data-spine" },
  { label: "Lifecycle", href: "/#lifecycle" },
  { label: "Modules", href: "/#modules" },
  { label: "AI co-pilot", href: "/#ai-co-pilot" },
  { label: "Governance", href: "/#governance" },
  { label: "Roadmap", href: "/#roadmap" },
  { label: "FAQ", href: "/#faq" },
];

export const demoCta = { label: "Request a demo", href: "/#demo" } as const;
