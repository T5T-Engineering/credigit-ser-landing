import {
  Activity,
  BadgeCheck,
  Banknote,
  BarChart3,
  BookOpenCheck,
  Bot,
  Briefcase,
  Calculator,
  CandlestickChart,
  ClipboardCheck,
  Compass,
  FileScan,
  FileSignature,
  FileText,
  Gauge,
  Landmark,
  LineChart,
  MessageSquareText,
  PieChart,
  Radar,
  RefreshCcw,
  ScrollText,
  ShieldAlert,
  ShieldCheck,
  Sigma,
  TrendingUp,
  Undo2,
  Users,
  Wallet,
  Waves,
} from "lucide-react";
import type { IconItem } from "./types";

export type ModulePhase = { id: string; label: string; summary: string; modules: IconItem[] };

export const modulesIntro = {
  eyebrow: "Modules",
  title: "Built in phases, on one foundation",
  description:
    "Phase 1 delivers the core lending lifecycle end to end. Phase 2 extends into enterprise risk, predictive analytics and executive reporting. Phase 3 adds ILAAP and dynamic stress testing.",
};

/** Module list and phasing from the PRD scope table (§3). */
export const modulePhases: ModulePhase[] = [
  {
    id: "phase-1",
    label: "Phase 1",
    summary: "Core lending lifecycle and foundations",
    modules: [
      { icon: Users, title: "Users, RBAC and audit trail", description: "Named logins, MFA, sign-on limits and an immutable audit log." },
      { icon: Briefcase, title: "Loan origination", description: "Standard and Fast-Track credit chart-flows with configurable approval tiers." },
      { icon: FileScan, title: "Document upload and OCR", description: "Financial statements, KYC and collateral documents parsed into structured fields." },
      { icon: Landmark, title: "Core banking connector", description: "Statements and balances, with automatic reconciliation of non-genuine entries." },
      { icon: BadgeCheck, title: "Credit bureau and CRMS", description: "Bureau and CRMS checks as a mandatory gate before approval." },
      { icon: Radar, title: "360 RAR engine", description: "Initial Internal Risk Assessment scoring and the composite position chart." },
      { icon: FileSignature, title: "Offer letter generation", description: "Auto-assembled offer letters with tagged conditions and covenants." },
      { icon: ClipboardCheck, title: "Credit administration", description: "Conditions, waivers and deferrals, disbursement control and credit files." },
      { icon: Activity, title: "Loan review and monitoring", description: "Past-due and covenant tracking from the first disbursement." },
      { icon: ShieldCheck, title: "Collateral and legal review", description: "Collateral register, perfection tracking and legal sign-off." },
      { icon: PieChart, title: "Portfolio and MIS reporting", description: "Application dashboards, sectoral and single-obligor limit reports." },
      { icon: Gauge, title: "Dashboards and WARR (basic)", description: "Basic executive dashboards and whole-book and sectoral WARR." },
      { icon: Bot, title: "AI exception flagging (basic)", description: "Rule-based flags for breaches, near-breaches and stalled workflow stages." },
    ],
  },
  {
    id: "phase-2",
    label: "Phase 2",
    summary: "Enterprise risk, predictive analytics and AI depth",
    modules: [
      { icon: Wallet, title: "Other-bank statements and COP Ratio", description: "Automated statement aggregation and turnover confidence scoring." },
      { icon: Compass, title: "Full 360 RAR enrichment", description: "External industry, comparative and macro data feeds on every axis." },
      { icon: Sigma, title: "IFRS 9 ECL and ICAAP", description: "Staging, expected credit loss and capital adequacy assessment." },
      { icon: Calculator, title: "Sector performance and RAROC", description: "Capital consumption and risk-adjusted return on capital by sector." },
      { icon: CandlestickChart, title: "Market and liquidity risk", description: "Net open position, liquidity ratios and ALM gaps." },
      { icon: ShieldAlert, title: "Operational risk", description: "KRI framework, loss-event register, RCSA and BCM readiness." },
      { icon: BookOpenCheck, title: "Enterprise risk management", description: "Risk appetite dashboard, related-party disclosure and regulatory-update tracking." },
      { icon: BarChart3, title: "Advanced executive dashboards", description: "Head of Risk and CRO views across every risk module." },
      { icon: MessageSquareText, title: "AI narrative and query console", description: "Drafted credit memos and restricted natural-language query." },
      { icon: LineChart, title: "SEC / CSCS collateral feed", description: "Mark-to-market valuation for share-backed collateral." },
      { icon: Banknote, title: "Share of Business Wallet", description: "Turnover and borrowing distribution across banking relationships." },
      { icon: TrendingUp, title: "Sector and macro projection", description: "Forward-looking loan-performance projections by sector." },
      { icon: FileText, title: "Annual portfolio planning", description: "Plan ingestion and sectoral allocation guidance." },
      { icon: Undo2, title: "IFRS 9 declassification", description: "Declassification and write-back on the same model history." },
      { icon: RefreshCcw, title: "Advanced WARR", description: "Migration decomposition, appetite tracking and scenario-projected WARR." },
    ],
  },
  {
    id: "phase-3",
    label: "Phase 3",
    summary: "Liquidity adequacy and stress testing",
    modules: [
      { icon: Waves, title: "ILAAP", description: "Configurable risk appetite, governance and report compilation." },
      { icon: ScrollText, title: "Dynamic stress testing", description: "Stress scenarios that extend the market and liquidity risk module." },
    ],
  },
];
