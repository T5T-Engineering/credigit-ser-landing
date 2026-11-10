import type { RadarAxis, RadarSeries } from "./types";

export const hero = {
  eyebrow: "Credigit Analytical · Smart Enterprise Risk 360°",
  title: "Smart Enterprise Risk 360°",
  lead: "One system for credit and enterprise risk.",
  description:
    "A cloud-based platform for banks and microfinance institutions in Nigeria and Africa. Originate, decide, administer and monitor credit on one risk data spine. Every number traces back to its source.",
  primaryCta: { label: "Request a demo", href: "/#demo" },
  secondaryCta: { label: "See how 360 RAR works", href: "/#radar" },
  footnote: "AI drafts, flags and recommends. A named person always approves.",
};

/** The four 360 RAR cardinal points, each scored 1–10 (PRD §2.2, §6.2). */
export const radarAxes: RadarAxis[] = [
  { key: "internal", label: "Internal Risk" },
  { key: "comparative", label: "Comparative" },
  { key: "industry", label: "Operating Industry" },
  { key: "macro", label: "Macro-Economic" },
];

/** Illustrative sample only — not real obligor data. */
export const radarSample: RadarSeries[] = [
  {
    name: "Current review (illustrative)",
    tone: "accent",
    values: { internal: 7.4, comparative: 6.2, industry: 5.8, macro: 4.9 },
  },
  {
    name: "Previous review (illustrative)",
    tone: "neutral",
    values: { internal: 6.1, comparative: 5.9, industry: 6.4, macro: 5.3 },
  },
];

export const radarCaption = {
  badge: "Illustrative",
  title: "360° Risk Assessment Radar",
  description:
    "Sample scores on a 1–10 scale for a fictional obligor. Shown for illustration only.",
};
