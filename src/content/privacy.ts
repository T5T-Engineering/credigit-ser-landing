import { demoForm } from "./demo";
import { site } from "./site";

/**
 * Interim privacy notice. Neutral wording drafted only from what the demo-request form collects.
 * It is not the final legal text: legal must supply that (open question SITE-Q-02, docs/open-questions.md).
 */
const { fields } = demoForm;

export const privacyPage = {
  title: "Privacy notice",
  description: `How ${site.company} handles the details you send through this website.`,
  interimTitle: "Interim notice",
  interimMessage: `This is a short interim notice. ${site.company} will publish its full privacy notice here.`,
  sections: [
    {
      id: "who",
      title: "Who we are",
      paragraphs: [`This website is operated by ${site.company}, the provider of ${site.productName}.`],
    },
    {
      id: "what",
      title: "What we collect",
      paragraphs: ["When you request a demo, we collect the details you enter in the form:"],
      items: [
        `${fields.name.label}, ${fields.email.label.toLowerCase()}, ${fields.institution.label.toLowerCase()} and ${fields.institutionType.label.toLowerCase()} (required).`,
        `${fields.role.label}, ${fields.country.label.toLowerCase()} and any message you add (optional).`,
      ],
    },
    {
      id: "why",
      title: "Why we collect it",
      paragraphs: [
        "We use these details only to respond to your demo request: to contact you, understand your institution's needs and arrange a walkthrough.",
      ],
    },
    {
      id: "how",
      title: "How it is received",
      paragraphs: [
        "The form is delivered through the form-handling service of our website hosting provider, which stores submissions on our behalf so that our team can respond.",
      ],
    },
    {
      id: "rights",
      title: "Your rights",
      paragraphs: [
        "We handle personal data in line with the Nigeria Data Protection Act 2023, which gives you rights over your personal data. Details of how to exercise them, and how long we keep your details, will be set out in our full privacy notice.",
      ],
    },
  ] as { id: string; title: string; paragraphs: string[]; items?: string[] }[],
};
