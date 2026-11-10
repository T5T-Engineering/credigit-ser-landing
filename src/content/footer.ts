import { site } from "./site";

export const footer = {
  tagline: site.tagline,
  columns: [
    {
      title: "Product",
      links: [
        { label: "360° Risk Assessment Radar", href: "/#radar" },
        { label: "Risk Data Spine", href: "/#data-spine" },
        { label: "Lending lifecycle", href: "/#lifecycle" },
        { label: "Modules", href: "/#modules" },
      ],
    },
    {
      title: "Platform",
      links: [
        { label: "AI co-pilot", href: "/#ai-co-pilot" },
        { label: "Governance and security", href: "/#governance" },
        { label: "Regulatory alignment", href: "/#regulatory" },
        { label: "Roadmap", href: "/#roadmap" },
      ],
    },
    {
      title: "Get started",
      links: [
        { label: "Who it's for", href: "/#audience" },
        { label: "FAQ", href: "/#faq" },
        { label: "Request a demo", href: "/#demo" },
      ],
    },
  ],
  legal: `© ${new Date().getFullYear()} ${site.company}. All rights reserved.`,
  bottomLinks: [
    { label: "Privacy notice", href: "/legal/#privacy" },
    { label: "Terms of use", href: "/legal/#terms" },
  ],
};

export const legalPage = {
  title: "Legal",
  description: "Our privacy notice and terms of use are being prepared and will be published here.",
  sections: [
    { id: "privacy", title: "Privacy notice", body: "To be published by Credigit Analytical Limited." },
    { id: "terms", title: "Terms of use", body: "To be published by Credigit Analytical Limited." },
  ],
};
