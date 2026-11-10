import { Band, Grid, SectionHeader, Timeline } from "@credigit/web-ui";
import { roadmap, roadmapPhases } from "@/content/roadmap";

/** Phase 1 / 2 / 3 roadmap. */
export function RoadmapSection() {
  return (
    <Band id="roadmap" spacing="large">
      <Grid columns={{ base: 1, lg: 12 }} gap="xlarge">
        <div className="lg:col-span-5">
          <SectionHeader eyebrow={roadmap.eyebrow} title={roadmap.title} description={roadmap.description} size="large" />
        </div>
        <div className="lg:col-span-7">
          <Timeline items={roadmapPhases} orientation="vertical" aria-label="Delivery phases" />
        </div>
      </Grid>
    </Band>
  );
}
