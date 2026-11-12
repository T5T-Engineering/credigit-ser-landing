import type { Metadata } from "next";
import { Alert, Band, Heading, List, PageHeader, Stack, Text } from "@credigit/web-ui";
import { privacyPage } from "@/content/privacy";

export const metadata: Metadata = {
  title: privacyPage.title,
  description: privacyPage.description,
  // Interim text: keep out of search results until legal publishes the final notice (SITE-Q-02).
  robots: { index: false, follow: true },
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <>
      <Band spacing="small" containerSize="medium" className="pb-0!">
        <PageHeader title={privacyPage.title} description={privacyPage.description} />
      </Band>
      <Band spacing="medium" containerSize="medium">
        <Stack gap="xlarge">
          <Alert tone="info" title={privacyPage.interimTitle}>
            {privacyPage.interimMessage}
          </Alert>
          {privacyPage.sections.map((section) => (
            <Stack key={section.id} id={section.id} as="section" gap="small">
              <Heading level={2} size="medium">
                {section.title}
              </Heading>
              {section.paragraphs.map((paragraph) => (
                <Text key={paragraph} tone="muted">
                  {paragraph}
                </Text>
              ))}
              {section.items ? <List items={section.items} /> : null}
            </Stack>
          ))}
        </Stack>
      </Band>
    </>
  );
}
