import { PageFooter } from "@credigit/web-ui";
import { footer } from "@/content/footer";

/** Site footer on the xdark surface. */
export function SiteFooter() {
  return (
    <PageFooter
      theme="xdark"
      tagline={footer.tagline}
      columns={footer.columns}
      legal={footer.legal}
      bottomLinks={footer.bottomLinks}
    />
  );
}
