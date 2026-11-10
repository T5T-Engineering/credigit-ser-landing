import { CalendarClock, FileWarning, Layers, Repeat2, Scale, TimerOff } from "lucide-react";
import type { IconItem } from "./types";

export const problem = {
  eyebrow: "Why it matters",
  title: "Credit risk work is still fragmented",
  description:
    "Most institutions run credit, administration, review and risk on separate tools and spreadsheets. The result is slow decisions and numbers nobody can fully trust.",
};

/** Pain points phrased from the PRD's product principles and connector rules. */
export const problems: IconItem[] = [
  {
    icon: Layers,
    title: "Conflicting numbers",
    description:
      "Credit admin, loan review, market risk, operational risk and MIS each hold their own copy of the data, so figures disagree.",
  },
  {
    icon: CalendarClock,
    title: "Point-in-time assessments",
    description:
      "Classical strategic scoring is manual and done infrequently. An obligor's position can change long before the next review.",
  },
  {
    icon: Repeat2,
    title: "Inflated turnover",
    description:
      "Round-tripping, in-and-out and reversed entries can make declared turnover look stronger than real, settled cash flow.",
  },
  {
    icon: Scale,
    title: "Regulatory change means rework",
    description:
      "When limits and thresholds are hard-coded, every CBN or IFRS 9 revision becomes a software release instead of a setting.",
  },
  {
    icon: TimerOff,
    title: "Stale data shown as current",
    description:
      "When a core banking or bureau feed fails silently, old figures look current and decisions are made on them.",
  },
  {
    icon: FileWarning,
    title: "Reports built by hand",
    description:
      "Regulatory and board reports are assembled manually each cycle, taking skilled people away from analysis.",
  },
];
