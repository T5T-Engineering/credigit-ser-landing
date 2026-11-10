import { Badge, Band, Grid, Heading, Icon, SectionHeader, Stack, Teaser, Text } from "@credigit/web-ui";
import { modulePhases, modulesIntro } from "@/content/modules";

/** Module grid grouped by delivery phase: soft-grey band with white Bolt panels. */
export function ModulesSection() {
  return (
    <Band id="modules" theme="light" spacing="large">
      <Stack gap="xlarge">
        <SectionHeader eyebrow={modulesIntro.eyebrow} title={modulesIntro.title} description={modulesIntro.description} size="large" />
        {modulePhases.map((phase) => (
          <Stack key={phase.id} as="section" gap="large" aria-labelledby={`${phase.id}-title`}>
            <Stack direction="horizontal" align="center" gap="medium" wrap>
              <Badge tone={phase.id === "phase-1" ? "accent" : "brand"} variant="solid">
                {phase.label}
              </Badge>
              <Heading level={3} size="small" id={`${phase.id}-title`}>
                {phase.summary}
              </Heading>
              <Text as="span" variant="caption" tone="subtle">
                {phase.modules.length} modules
              </Text>
            </Stack>
            <Grid columns={{ base: 1, sm: 2, lg: 3 }} gap="medium">
              {phase.modules.map((module) => (
                <Teaser
                  key={module.title}
                  icon={<Icon icon={module.icon} />}
                  title={module.title}
                  description={module.description}
                  titleAs="h4"
                  surface="raised"
                />
              ))}
            </Grid>
          </Stack>
        ))}
      </Stack>
    </Band>
  );
}
