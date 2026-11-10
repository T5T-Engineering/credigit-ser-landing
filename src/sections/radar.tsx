import { Band, Card, CardContent, CardHeader, CardTitle, Grid, Icon, InfoSection, List, SectionHeader, Stack, Teaser, Text } from "@credigit/web-ui";
import { cardinalPoints, postures, radar, radarHighlights } from "@/content/radar";

/** 360° Risk Assessment Radar: Bolt split row (text + big rounded panel), then the cardinal-point grid. */
export function RadarSection() {
  return (
    <Band id="radar" spacing="large">
      <Stack gap="xlarge">
        <Grid columns={{ base: 1, lg: 12 }} gap="xlarge" className="items-center">
          <Stack gap="large" className="lg:col-span-6">
            <SectionHeader eyebrow={radar.eyebrow} title={radar.title} description={radar.description} size="large" />
            <List variant="check" spacing="medium" items={radarHighlights} />
          </Stack>
          <Card variant="filled" padding="large" radius="xlarge" className="lg:col-span-6">
            <CardHeader>
              <CardTitle>Four credit postures</CardTitle>
            </CardHeader>
            <CardContent>
              <Stack gap="medium">
                <Text variant="small" tone="muted">
                  Scores combine into two composites on a 1–10 scale, with 5.5 as the midpoint.
                </Text>
                <InfoSection columns={2} items={postures.map((p) => ({ label: p.label, value: p.hint }))} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid columns={{ base: 1, sm: 2, lg: 4 }} gap="medium">
          {cardinalPoints.map((point) => (
            <Teaser key={point.title} icon={<Icon icon={point.icon} />} title={point.title} description={point.description} />
          ))}
        </Grid>
      </Stack>
    </Band>
  );
}
