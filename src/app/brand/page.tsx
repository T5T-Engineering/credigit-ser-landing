import type { Metadata } from "next";
import { Alert, Band, BrandSettingsPanel, PageHeader, Stack } from "@credigit/web-ui";

export const metadata: Metadata = {
  title: "Brand preview",
  description: "Try brand colours and logos live across the site.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/brand/" },
};

export default function BrandPage() {
  return (
    <>
      <Band spacing="small" containerSize="large" className="pb-0!">
        <PageHeader
          eyebrow="Stakeholder preview"
          title="Brand preview"
          description="Change colours and logos here, then browse the site to see them applied everywhere. Changes are saved only in this browser."
        />
      </Band>
      <Band spacing="medium" containerSize="large">
        <Stack gap="large">
          <Alert tone="info" title="Not indexed">
            This page is for internal review and is hidden from search engines.
          </Alert>
          <BrandSettingsPanel />
        </Stack>
      </Band>
    </>
  );
}
