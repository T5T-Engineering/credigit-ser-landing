import { Database, FileSearch, Filter, GitBranch } from "lucide-react";
import type { IconItem } from "./types";

export const spine = {
  eyebrow: "Risk Data Spine",
  title: "Every number traceable to its source",
  description:
    "Every module reads from and writes to one common data model for obligors, facilities, collateral, covenants, transactions, statements and risk metrics. Data is reconciled before any engine uses it.",
};

export const spinePoints: IconItem[] = [
  {
    icon: Database,
    title: "One data model",
    description: "Credit admin, loan review, market risk, operational risk and MIS never hold conflicting numbers.",
  },
  {
    icon: Filter,
    title: "Reconciled before use",
    description:
      "Connectors land data in a staging layer that discounts inter-branch, suspense, in-and-out and reversal entries.",
  },
  {
    icon: FileSearch,
    title: "Drillable in the interface",
    description:
      "Every 360 RAR score, ECL figure, limit utilisation, KRI reading and AI recommendation drills to its source mapping.",
  },
  {
    icon: GitBranch,
    title: "Versioned evidence",
    description: "Uploaded documents are version-controlled. Re-uploads are kept, never overwritten, for examiners.",
  },
];

/** What a trace shows for any computed value (PRD §1.3, §2, §10.3). Field names only — no sample figures. */
export const traceFields = [
  { label: "Source fields and systems", value: "Where each input came from — core banking, bureau, statement or upload" },
  { label: "Transformations", value: "Reconciliation and exclusions applied before calculation" },
  { label: "Formula or model version", value: "The exact calculation or model version used" },
  { label: "Reporting period", value: "The period the value relates to" },
  { label: "Tenant parameters", value: "Your institution's configured thresholds and limits" },
];

export const connectors: string[] = [
  "Core Banking Application (CBA)",
  "Credit bureaux and CBN CRMS",
  "Other-bank statements",
  "Document upload and OCR",
  "SEC / CSCS securities registry",
  "Sector, macro, NGX and regulatory feeds",
  "Treasury, FX and money-market systems",
  "HR, security and IT systems",
];
