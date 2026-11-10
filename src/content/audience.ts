import { Building2, HandCoins } from "lucide-react";
import type { IconItem } from "./types";

export const audience = {
  eyebrow: "Who it's for",
  title: "Banks and microfinance institutions",
  description:
    "Built for banks and microfinance institutions in Nigeria and Africa, of different sizes. Your organogram is configuration, not code.",
};

export const institutions: IconItem[] = [
  {
    icon: Building2,
    title: "Banks",
    description:
      "Universal and commercial banks with multi-tier approval ladders, credit committees and board-level limits. Add or split tiers to match your structure.",
  },
  {
    icon: HandCoins,
    title: "Microfinance institutions",
    description:
      "Smaller institutions that do not run every tier. Remove, merge or rename roles and approval tiers to fit how you actually work.",
  },
];

/** Default role set from PRD §4.1, grouped for readability. Roles are tenant-configurable. */
export const roleGroups: { title: string; roles: string[] }[] = [
  { title: "Front office", roles: ["Account Officer / Business Officer", "Business Development Manager"] },
  {
    title: "Credit approval",
    roles: ["Credit Analyst", "Group Head", "Chief Credit Officer", "Directorate Head", "Managing Director", "Management and Board Credit Committees"],
  },
  {
    title: "Risk officers",
    roles: ["Credit Administration", "Loan Review", "Middle Office", "Collateral Management", "Predictive Analytics", "Operational Risk", "Market Risk", "Portfolio & MIS"],
  },
  { title: "Risk leadership", roles: ["Chief Risk Officer", "Head of Risk"] },
  { title: "Legal and operations", roles: ["Legal Officer", "Disbursement maker and checker"] },
  { title: "Administration", roles: ["System Admin", "IT Support / Platform Administrator"] },
];

export const rolesNote = "Default roles shipped out of the box. Each institution can add, remove, merge, split, rename and re-sequence them.";
