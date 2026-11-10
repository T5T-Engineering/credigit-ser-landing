import { Band, Button, CtaBand, Grid, SectionHeader } from "@credigit/web-ui";
import { ctaBand, demoForm } from "@/content/demo";
import { DemoRequestForm } from "./demo-request-form";

/** Closing call to action as a big rounded dark panel inside the container (Bolt), then the demo request form. */
export function DemoSection() {
  return (
    <div id="demo">
      <CtaBand
        theme="dark"
        background="none"
        title={ctaBand.title}
        description={ctaBand.description}
        actions={
          <>
            <Button href={ctaBand.primary.href} variant="primary" size="large">
              {ctaBand.primary.label}
            </Button>
            <Button href={ctaBand.secondary.href} variant="tertiary" size="large">
              {ctaBand.secondary.label}
            </Button>
          </>
        }
      />
      <Band id="demo-form" theme="light" spacing="large">
        <Grid columns={{ base: 1, lg: 12 }} gap="xlarge">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow={demoForm.eyebrow} title={demoForm.title} description={demoForm.description} size="large" />
          </div>
          <div className="lg:col-span-7">
            <DemoRequestForm />
          </div>
        </Grid>
      </Band>
    </div>
  );
}
