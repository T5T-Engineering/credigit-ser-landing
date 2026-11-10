import { FilePenLine, Flag, LineChart, ScanText, UserCheck } from "lucide-react";
import type { IconItem } from "./types";

export const copilot = {
  eyebrow: "AI co-pilot",
  title: "AI drafts, flags and recommends. People approve.",
  description:
    "AI sits inside each risk function, not in a separate module. It never approves a credit or books a provisioning entry on its own.",
};

/** Capabilities from PRD §6.12–6.13, with their phase. */
export const copilotCapabilities: (IconItem & { phase: string })[] = [
  {
    icon: ScanText,
    phase: "Phase 1",
    title: "Document intelligence",
    description: "OCR and field extraction pre-populate 360 RAR inputs and credit-file fields from uploaded documents.",
  },
  {
    icon: Flag,
    phase: "Phase 1",
    title: "Exception flagging",
    description:
      "Scans the data spine for covenant breaches, limit near-breaches, stalled workflow and reconciliation mismatches, then ranks them for the right officer.",
  },
  {
    icon: FilePenLine,
    phase: "Phase 1 templated · Phase 2 narrative",
    title: "Report drafting",
    description: "Drafts CBN-format and board-format reports so the MIS officer validates and releases rather than builds.",
  },
  {
    icon: LineChart,
    phase: "Phase 2",
    title: "Trends and credit memos",
    description: "Tracks trends, tests for seasonality and correlation, and drafts credit memos from 360 RAR output for the analyst to edit.",
  },
];

export const copilotGuardrails: IconItem[] = [
  {
    icon: UserCheck,
    title: "Human sign-off, always",
    description:
      "Every AI output is labelled as AI-drafted or AI-flagged, is fully editable, and has no workflow effect until the accountable person signs off.",
  },
];

export const copilotGuardrailPoints: string[] = [
  "Labelled and time-stamped, with the model version recorded for governance review.",
  "Natural-language query is limited to the CRO, Head of Risk and System Admin, with role-scoped data access.",
  "Every query and answer is written to the audit trail.",
];
