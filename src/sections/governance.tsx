import { Band, Card, Grid, Icon, SectionHeader, Stack, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Teaser, Text } from "@credigit/web-ui";
import { controls, frameworks, governance, regulatory } from "@/content/governance";

/** Governance, security, multi-tenancy (white band, grey panels) and regulatory alignment (grey band, white table panel). */
export function GovernanceSection() {
  return (
    <>
      <Band id="governance" spacing="large">
        <Stack gap="xlarge">
          <SectionHeader eyebrow={governance.eyebrow} title={governance.title} description={governance.description} size="large" />
          <Grid columns={{ base: 1, sm: 2, lg: 4 }} gap="medium">
            {controls.map((item) => (
              <Teaser key={item.title} icon={<Icon icon={item.icon} />} title={item.title} description={item.description} />
            ))}
          </Grid>
        </Stack>
      </Band>
      <Band id="regulatory" theme="light" spacing="large">
        <Stack gap="xlarge">
          <SectionHeader eyebrow={regulatory.eyebrow} title={regulatory.title} description={regulatory.description} size="large" />
          <Stack gap="medium">
            <Card variant="outlined" padding="none" className="overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableHeaderCell scope="col">Framework</TableHeaderCell>
                      <TableHeaderCell scope="col">What the platform reflects</TableHeaderCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {frameworks.map((f) => (
                      <TableRow key={f.name}>
                        <TableCell className="font-medium text-fg">{f.name}</TableCell>
                        <TableCell>{f.scope}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
            <Text variant="small" tone="subtle">
              {regulatory.disclaimer}
            </Text>
          </Stack>
        </Stack>
      </Band>
    </>
  );
}
