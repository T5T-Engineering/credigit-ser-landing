import { Badge, Band, Card, CardContent, CardDescription, CardHeader, CardTitle, ChipList, Chip, Grid, Icon, InfoSection, SectionHeader, Stack, Teaser, Text } from "@credigit/web-ui";
import { connectors, spine, spinePoints, traceFields } from "@/content/spine";

/** Risk Data Spine: soft-grey band, Bolt split row with the visual panel on the opposite side to the radar row. */
export function DataSpineSection() {
  return (
    <Band id="data-spine" theme="light" spacing="large">
      <Stack gap="xlarge">
        <SectionHeader eyebrow={spine.eyebrow} title={spine.title} description={spine.description} size="large" />
        <Grid columns={{ base: 1, lg: 12 }} gap="large">
          <Card variant="outlined" padding="large" radius="xlarge" className="lg:col-span-5">
            <CardHeader>
              <Stack direction="horizontal" justify="between" align="center" gap="small" wrap>
                <CardTitle>What a trace shows</CardTitle>
                <Badge tone="neutral" variant="soft">
                  Every computed value
                </Badge>
              </Stack>
              <CardDescription>Open any figure on screen to see where it came from.</CardDescription>
            </CardHeader>
            <CardContent>
              <InfoSection columns={1} items={traceFields} />
            </CardContent>
          </Card>
          <div className="lg:col-span-7">
            <Grid columns={{ base: 1, sm: 2 }} gap="medium" className="h-full">
              {spinePoints.map((point) => (
                <Teaser key={point.title} icon={<Icon icon={point.icon} />} title={point.title} description={point.description} surface="raised" />
              ))}
            </Grid>
          </div>
        </Grid>
        <Stack gap="medium">
          <Text as="h3" variant="eyebrow" tone="muted">
            Connectors feeding the spine
          </Text>
          <ChipList>
            {connectors.map((name) => (
              <Chip key={name} tone="neutral">
                {name}
              </Chip>
            ))}
          </ChipList>
        </Stack>
      </Stack>
    </Band>
  );
}
