import type { StepItem } from "./types";

export const lifecycle = {
  eyebrow: "Lending lifecycle",
  title: "From application to monitoring, on one workflow engine",
  description:
    "One configurable maker-checker and co-signer engine drives Standard Credit, Fast-Track Credit, renewals, enhancements, restructures and waivers. You set the tiers, roles and limits.",
};

/** Lifecycle stages from PRD §6.1, §6.3–6.5 and §7. */
export const lifecycleSteps: StepItem[] = [
  {
    title: "Origination",
    meta: "Stage 1",
    description:
      "The account officer initiates the request and uploads documents. OCR extracts financial statement fields. Legal starts the collateral search in parallel.",
  },
  {
    title: "Decisioning",
    meta: "Stage 2",
    description:
      "The credit analyst runs 360 RAR and validates financials. Bureau and CRMS checks are a mandatory gate. Requests move up your co-signer and adjudicator ladder.",
  },
  {
    title: "Offer letter",
    meta: "Stage 3",
    description:
      "The offer letter is generated in your house style, with conditions and covenants drawn from a master library and signed off by Legal.",
  },
  {
    title: "Credit administration and disbursement",
    meta: "Stage 4",
    description:
      "Credit admin confirms conditions are met. A maker disburses and a different checker authorises. No one approves their own work.",
  },
  {
    title: "Monitoring and review",
    meta: "Stage 5",
    description:
      "Past-due tracking applies the CBN days-past-due ladder. Covenants, account inflows, guarantees and temporary overdrafts are tracked and exceptions raised.",
  },
  {
    title: "Collateral and legal",
    meta: "Throughout",
    description:
      "Collateral is registered, valued and tracked to perfection, with haircuts applied. Share-backed collateral is valued through the SEC/CSCS connector.",
  },
];
