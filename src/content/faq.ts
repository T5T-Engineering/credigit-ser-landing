export const faqIntro = {
  eyebrow: "FAQ",
  title: "Questions we expect",
};

/** Answers grounded in the Smart Enterprise Risk 360° PRD v2.1. */
export const faqs: { id: string; question: string; answer: string }[] = [
  {
    id: "what",
    question: "What is Smart Enterprise Risk 360°?",
    answer:
      "A multi-tenant, cloud-based SaaS platform for credit and enterprise risk management. It covers origination and decisioning, credit administration, loan review and monitoring, collateral and legal, enterprise, market and operational risk, IFRS 9 analytics, and portfolio and executive reporting.",
  },
  {
    id: "who",
    question: "Who is it for?",
    answer:
      "Banks and microfinance institutions in Nigeria and Africa. Roles, approval tiers and limits are configured per institution, so it fits both large banks and smaller lenders.",
  },
  {
    id: "rar",
    question: "What is the 360° Risk Assessment Radar?",
    answer:
      "Credigit's proprietary credit risk methodology, adapted from the published SPACE matrix. It scores every obligor and sector on four cardinal points — internal, comparative, operating industry and macro-economic — and produces a credit posture that drives recommendations, covenants and limit checks.",
  },
  {
    id: "ai",
    question: "Does the AI make credit decisions?",
    answer:
      "No. AI drafts, flags and recommends. Its output is labelled, editable and has no effect until the accountable person signs off. It never auto-approves a credit decision or auto-books a provisioning entry.",
  },
  {
    id: "regulation",
    question: "What happens when the CBN changes a rule?",
    answer:
      "Limits, ratios and thresholds live in a Rules & Parameters Engine. A revision is a configuration change made by the System Admin, recorded in the audit trail and confirmed by a second person for regulatory parameters.",
  },
  {
    id: "integrations",
    question: "Which systems does it connect to?",
    answer:
      "Phase 1 includes the core banking connector, credit bureau and CRMS connectors, and document upload with OCR. Phase 2 adds other-bank statement aggregation, SEC/CSCS share-collateral feeds and external industry and macro data.",
  },
  {
    id: "security",
    question: "How is our data protected?",
    answer:
      "Each tenant's data is isolated. Logins are named and use MFA. Access is role-based and least-privilege. Data is encrypted in transit (TLS 1.2+) and at rest (AES-256), and every action is written to an immutable audit log.",
  },
  {
    id: "trace",
    question: "Can we see where a number came from?",
    answer:
      "Yes. Every computed value is traceable to its source fields and systems, transformations, formula or model version, reporting period and your tenant parameters — from within the interface.",
  },
];
