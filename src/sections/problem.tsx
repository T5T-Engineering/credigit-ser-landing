import { Band, Grid, Icon, SectionHeader, Stack, Teaser } from "@credigit/web-ui";
import { problem, problems } from "@/content/problem";

/** The problems the platform addresses: soft-grey band with a Bolt feature grid. */
export function ProblemSection() {
  return (
    <Band id="why" theme="light" spacing="large">
      <Stack gap="xlarge">
        <SectionHeader eyebrow={problem.eyebrow} title={problem.title} description={problem.description} size="large" />
        <Grid columns={{ base: 1, md: 2, lg: 3 }} gap="medium">
          {problems.map((item) => (
            <Teaser key={item.title} icon={<Icon icon={item.icon} />} title={item.title} description={item.description} surface="raised" />
          ))}
        </Grid>
      </Stack>
    </Band>
  );
}
