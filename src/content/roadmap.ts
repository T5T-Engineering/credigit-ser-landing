import type { StepItem } from "./types";

export const roadmap = {
  eyebrow: "Roadmap",
  title: "Three phases, one data spine",
  description:
    "Each phase builds on the data captured in the one before. Phase 2 analytics, for example, are calibrated on Phase 1 history.",
};

/** Phase scope from README §3 / PRD §3. No dates are stated in the PRD, so none are shown. */
export const roadmapPhases: StepItem[] = [
  {
    title: "Phase 1 — Core lending lifecycle",
    meta: "Phase 1",
    description:
      "Origination through disbursement, administration and monitoring. Identity, RBAC and audit. Document OCR. CBA, bureau and CRMS connectors. Initial 360 RAR. Offer letters, collateral and legal workflow. Basic loan review, MIS, dashboards, WARR and AI exception flagging.",
  },
  {
    title: "Phase 2 — Enterprise risk and analytics",
    meta: "Phase 2",
    description:
      "Other-bank statement aggregation. Full 360 RAR enrichment. IFRS 9 ECL and ICAAP. Sector performance, capital consumption and RAROC. Market, liquidity and operational risk. ERM. Advanced dashboards, AI narrative and natural-language query. SEC/CSCS feeds, Share of Business Wallet, projections, portfolio planning and advanced WARR.",
  },
  {
    title: "Phase 3 — ILAAP and stress testing",
    meta: "Phase 3",
    description: "Configurable ILAAP: risk appetite, governance, report compilation and dynamic stress testing.",
  },
];
