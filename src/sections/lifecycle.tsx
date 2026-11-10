import { Band, Grid, SectionHeader, Stack, Steps } from "@credigit/web-ui";
import { lifecycle, lifecycleSteps } from "@/content/lifecycle";

/** The lending lifecycle as numbered Bolt step rows beside a sticky heading (white band). */
export function LifecycleSection() {
  return (
    <Band id="lifecycle" spacing="large">
      <Grid columns={{ base: 1, lg: 12 }} gap="xlarge">
        <div className="lg:col-span-5">
          <Stack gap="large" className="lg:sticky lg:top-24">
            <SectionHeader eyebrow={lifecycle.eyebrow} title={lifecycle.title} description={lifecycle.description} size="large" />
          </Stack>
        </div>
        <div className="lg:col-span-7">
          <Steps items={lifecycleSteps} orientation="vertical" aria-label="Lending lifecycle stages" />
        </div>
      </Grid>
    </Band>
  );
}
