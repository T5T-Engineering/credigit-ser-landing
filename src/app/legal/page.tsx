import type { Metadata } from "next";
import { Alert, Band, Heading, PageHeader, Stack, Text, TextLink } from "@credigit/web-ui";
import { legalPage } from "@/content/footer";

export const metadata: Metadata = {
  title: legalPage.title,
  description: legalPage.description,
  robots: { index: false, follow: true },
  alternates: { canonical: "/legal/" },
};

export default function LegalPage() {
  return (
    <>
      <Band spacing="small" containerSize="medium" className="pb-0!">
        <PageHeader title={legalPage.title} description={legalPage.description} />
      </Band>
      <Band spacing="medium" containerSize="medium">
        <Stack gap="xlarge">
          <Alert tone="info" title="Coming soon">
            {legalPage.description}
          </Alert>
          {legalPage.sections.map((section) => (
            <Stack key={section.id} id={section.id} as="section" gap="small">
              <Heading level={2} size="medium">
                {section.title}
              </Heading>
              <Text tone="muted">{section.body}</Text>
              {section.link ? <TextLink href={section.link.href}>{section.link.label}</TextLink> : null}
            </Stack>
          ))}
        </Stack>
      </Band>
    </>
  );
}
