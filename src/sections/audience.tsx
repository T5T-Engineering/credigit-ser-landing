import { Band, Card, CardContent, CardHeader, CardTitle, Grid, Icon, List, SectionHeader, Stack, Teaser, Text } from "@credigit/web-ui";
import { audience, institutions, roleGroups, rolesNote } from "@/content/audience";

/** Who it is for: two large white institution panels, then the default role set, on a soft-grey band. */
export function AudienceSection() {
  return (
    <Band id="audience" theme="light" spacing="large">
      <Stack gap="xlarge">
        <SectionHeader eyebrow={audience.eyebrow} title={audience.title} description={audience.description} size="large" />
        <Grid columns={{ base: 1, md: 2 }} gap="medium">
          {institutions.map((item) => (
            <Teaser
              key={item.title}
              icon={<Icon icon={item.icon} size="large" />}
              title={item.title}
              description={item.description}
              surface="raised"
            />
          ))}
        </Grid>
        <Stack gap="medium">
          <Grid columns={{ base: 1, sm: 2, lg: 3 }} gap="medium">
            {roleGroups.map((group) => (
              <Card key={group.title} variant="outlined" padding="medium">
                <CardHeader>
                  <CardTitle>{group.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <List items={group.roles} spacing="xsmall" />
                </CardContent>
              </Card>
            ))}
          </Grid>
          <Text variant="small" tone="subtle">
            {rolesNote}
          </Text>
        </Stack>
      </Stack>
    </Band>
  );
}
