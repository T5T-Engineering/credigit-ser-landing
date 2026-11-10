import { Alert, Band, Button, PageHeader, Stack } from "@credigit/web-ui";
import { authPlaceholder, demoCta } from "@/content/site";

/** Placeholder shown for Log in / Register until the core application is deployed (see NEXT_PUBLIC_APP_URL). */
export function AuthPlaceholder({ kind }: { kind: keyof typeof authPlaceholder }) {
  const copy = authPlaceholder[kind];
  return (
    <Band spacing="large" containerSize="medium">
      <Stack gap="large">
        <PageHeader eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
        <Alert tone="info" title="Coming with the application launch">
          This page will move to the Smart Enterprise Risk 360° application when it goes live.
        </Alert>
        <Stack direction="horizontal" gap="small" wrap>
          <Button href={demoCta.href} size="large">
            {demoCta.label}
          </Button>
          <Button href="/" variant="tertiary" size="large">
            Back to home
          </Button>
        </Stack>
      </Stack>
    </Band>
  );
}
