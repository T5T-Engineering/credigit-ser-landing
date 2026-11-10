import { Button, Navbar } from "@credigit/web-ui";
import { authLinks, demoCta, navLinks, site } from "@/content/site";

/** Bolt-style clean white sticky header: text links, then Log in, Register and the demo call to action. */
export function SiteHeader() {
  return (
    <Navbar
      sticky
      navLabel={`${site.productName} main navigation`}
      links={navLinks}
      actions={
        <>
          <Button href={authLinks.login.href} variant="text" size="small">
            {authLinks.login.label}
          </Button>
          <Button href={authLinks.register.href} variant="secondary" size="small">
            {authLinks.register.label}
          </Button>
          <Button href={demoCta.href} variant="primary" size="small">
            {demoCta.label}
          </Button>
        </>
      }
    />
  );
}
