import { UserCheck } from "lucide-react";
import { Band, Grid, Icon, List, SectionHeader, Stack, Teaser } from "@credigit/web-ui";
import { copilot, copilotCapabilities, copilotGuardrailPoints, copilotGuardrails } from "@/content/copilot";

/** AI co-pilot: the page's single dark emphasis band (Bolt uses an occasional dark band), calm and undecorated. */
export function CopilotSection() {
  const guardrail = copilotGuardrails[0];
  return (
    <Band id="ai-co-pilot" theme="dark" spacing="large">
      <Stack gap="xlarge">
        <SectionHeader eyebrow={copilot.eyebrow} title={copilot.title} description={copilot.description} size="large" />
        <Grid columns={{ base: 1, md: 2, lg: 4 }} gap="medium">
          {copilotCapabilities.map((item) => (
            <Teaser
              key={item.title}
              eyebrow={item.phase}
              icon={<Icon icon={item.icon} />}
              title={item.title}
              description={item.description}
            />
          ))}
        </Grid>
        <Teaser
          layout="horizontal"
          icon={<Icon icon={UserCheck} size="large" />}
          title={guardrail.title}
          description={
            <Stack gap="medium">
              <p>{guardrail.description}</p>
              <List variant="check" items={copilotGuardrailPoints} />
            </Stack>
          }
        />
      </Stack>
    </Band>
  );
}
