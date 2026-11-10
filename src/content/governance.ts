import { Building, Fingerprint, KeyRound, Lock, ScrollText, Settings2, UserCog, Wifi } from "lucide-react";
import type { IconItem } from "./types";

export const governance = {
  eyebrow: "Governance and security",
  title: "Controls built into every workflow",
  description:
    "Smart Enterprise Risk 360° is a multi-tenant SaaS platform. Roles, tiers and limits are tenant configuration, and every action leaves a record.",
};

/** Controls from PRD §4 and §10. */
export const controls: IconItem[] = [
  {
    icon: Building,
    title: "Tenant isolation",
    description: "Logical or physical isolation per tenant contract. No tenant can query another tenant's data.",
  },
  {
    icon: Fingerprint,
    title: "Named logins and MFA",
    description: "Every login belongs to a named person. No shared logins. Approvals require re-authentication.",
  },
  {
    icon: KeyRound,
    title: "Role-based access",
    description: "Least-privilege RBAC per tenant. Add, merge, split or rename roles and tiers without a code release.",
  },
  {
    icon: ScrollText,
    title: "Immutable audit log",
    description: "Who did what, before and after values, timestamp and device, for every create, read, update, approve and override.",
  },
  {
    icon: Lock,
    title: "Encryption",
    description: "TLS 1.2+ in transit and AES-256 at rest for customer financial data, KYC documents and collateral instruments.",
  },
  {
    icon: UserCog,
    title: "Segregation of duties",
    description: "Maker-checker on disbursement. Platform support access to business data is read-only, time-boxed and logged.",
  },
  {
    icon: Settings2,
    title: "Rules & Parameters Engine",
    description:
      "Limits, provisioning thresholds and haircuts are parameters. Regulatory changes need a second person to confirm.",
  },
  {
    icon: Wifi,
    title: "Honest connector status",
    description: "If a feed fails, the platform queues and retries, and shows an as-of timestamp. Stale data is never shown as current.",
  },
];

export const regulatory = {
  eyebrow: "Regulatory alignment",
  title: "Designed around the frameworks you report to",
  description:
    "Every limit, ratio and threshold is a configurable parameter, so a regulatory revision is a configuration change rather than a rebuild.",
  disclaimer:
    "Alignment describes how the product is designed. It is not a certification or regulatory approval. Your institution remains responsible for its own regulatory interpretation.",
};

/** Only frameworks named in PRD §1.2, §5.2 and §9. */
export const frameworks: { name: string; scope: string }[] = [
  { name: "CBN Revised Prudential Guidelines (2010) and later circulars", scope: "Single-obligor and concentration limits, credit files, loan-loss provisioning, financial soundness indicators" },
  { name: "CBN Credit Risk Management System (CRMS)", scope: "Mandatory search before facility approval, alongside licensed credit bureaux" },
  { name: "IFRS 9", scope: "Staging, 12-month and lifetime ECL, prudential-versus-IFRS reserve reconciliation" },
  { name: "Basel III, as implemented by the CBN (2021)", scope: "Capital definitions, risk weighting and capital-adequacy classification" },
  { name: "ICAAP", scope: "Internal capital adequacy assessment and stress scenarios" },
  { name: "CBN Guidelines on Liquidity Risk Management and ILAAP (2021)", scope: "Liquidity ratios, risk appetite and ILAAP reporting" },
  { name: "CBN Corporate Governance Code", scope: "CEO, director and external auditor tenure tracked as compliance flags" },
  { name: "BCBS 239", scope: "Risk data aggregation and reporting: one data spine, every figure drillable to source" },
  { name: "COSO ERM and ISO 31000", scope: "Risk appetite, KRIs, RCSA and exception escalation to closure" },
  { name: "ISO 22301", scope: "Business continuity plan currency and crisis readiness" },
  { name: "Three Lines of Defence", scope: "Front office, risk officers and internal audit, mapped per tenant" },
];
