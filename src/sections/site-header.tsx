import { Button, Navbar } from "@credigit/web-ui";
import { demoCta, navLinks, site } from "@/content/site";

/** Bolt-style clean white sticky header with a pill call to action. */
export function SiteHeader() {
  return (
    <Navbar
      sticky
      navLabel={`${site.productName} main navigation`}
      links={navLinks}
      actions={
        <Button href={demoCta.href} variant="primary" size="small">
          {demoCta.label}
        </Button>
      }
    />
  );
}
