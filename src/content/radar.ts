import { Building2, Compass, Globe2, Landmark } from "lucide-react";
import type { IconItem } from "./types";

export const radar = {
  eyebrow: "360° Risk Assessment Radar",
  title: "A continuous view of every obligor and sector",
  description:
    "360 RAR is Credigit's proprietary credit risk methodology. It adapts the SPACE matrix (Rowe, Mason and Dickel, 1982) from a manual strategy tool into a data-fed, bank-grade credit review.",
};

/** The four cardinal points (PRD §6.2.1–6.2.4). */
export const cardinalPoints: IconItem[] = [
  {
    icon: Landmark,
    title: "Internal Risk Assessment",
    description:
      "Populated from parsed audited financials, core banking turnover, reconciled statements, ratio trends and bureau/CRMS reports.",
  },
  {
    icon: Building2,
    title: "Operating Industry Assessment",
    description: "Sector performance data, mapped to your own sector taxonomy and the CBN industry classification.",
  },
  {
    icon: Compass,
    title: "Comparative Assessment",
    description: "How the obligor compares with peers, including benchmarking against historical sector financials.",
  },
  {
    icon: Globe2,
    title: "Macro-Economic Assessment",
    description: "Inflation, FX, GDP by sector and other macro indicators, refreshed on a schedule rather than scored once.",
  },
];

export const radarHighlights: string[] = [
  "Each cardinal point is scored 1–10 on a positive scale.",
  "Scores combine into a credit posture: Aggressive, Competitive, Conservative or Defensive.",
  "A confidence overlay, driven by the COP Ratio, checks declared turnover against verified bank turnover.",
  "A 36-cell interpretive layer explains which readings drive each result.",
  "The same scores feed the recommendation engine, covenant tagging, pricing and tenor guardrails, and sector limit checks.",
];

/** Base posture mapping on the composite axes (PRD §6.2.5): X = industry + comparative, Y = internal + macro. */
export const postures = [
  { label: "Aggressive", hint: "Both composites above the midpoint" },
  { label: "Competitive", hint: "Industry and comparative strong; internal and macro weaker" },
  { label: "Conservative", hint: "Internal and macro strong; industry and comparative weaker" },
  { label: "Defensive", hint: "Both composites below the midpoint" },
];
