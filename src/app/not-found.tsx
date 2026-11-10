import type { Metadata } from "next";
import { SearchX } from "lucide-react";
import { Band, Button, EmptyState, Icon } from "@credigit/web-ui";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Band spacing="xlarge" containerSize="medium">
      <EmptyState
        icon={<Icon icon={SearchX} size="xlarge" />}
        titleAs="h1"
        title="We couldn't find that page"
        description="The link may be out of date, or the page may have moved."
        action={
          <Button href="/" variant="primary">
            Back to the home page
          </Button>
        }
      />
    </Band>
  );
}
