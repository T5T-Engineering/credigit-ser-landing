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

/**
 * Sign-in and registration live in the core application (credigit-ser-frontend).
 * NEXT_PUBLIC_APP_URL sets its base URL per environment (Netlify site environment variables).
 * When it is not set, the buttons open this site's own /login/ and /register/ placeholder pages.
 */
const appUrl = (process.env.NEXT_PUBLIC_APP_URL ?? "").trim().replace(/\/$/, "");

export const authLinks = {
  login: { label: "Log in", href: appUrl ? `${appUrl}/` : "/login/" },
  register: { label: "Register", href: appUrl ? `${appUrl}/register/` : "/register/" },
  /** True when the buttons point at the real application. */
  connected: Boolean(appUrl),
} as const;

export const authPlaceholder = {
  login: {
    eyebrow: "Log in",
    title: "Sign-in is not available yet",
    description:
      "The Smart Enterprise Risk 360° application is not live yet. Once your institution is onboarded, you will sign in here with your named login and multi-factor authentication.",
  },
  register: {
    eyebrow: "Register",
    title: "Registration is not open yet",
    description:
      "Institutions are onboarded directly, and each user gets a named login set up by their institution's administrator. Request a demo and we will walk you through onboarding.",
  },
} as const;
