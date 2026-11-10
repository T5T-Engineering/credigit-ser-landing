import { ArrowRight } from "lucide-react";
import { Badge, Button, Hero, Icon, RadarChart, Stack, Text } from "@credigit/web-ui";
import { hero, radarAxes, radarCaption, radarSample } from "@/content/hero";

/** Bolt-style light hero: big bold headline, short lead, pill CTAs beside a large rounded media frame. Holds the page's only h1. */
export function HeroSection() {
  return (
    <Hero
      id="top"
      spacing="large"
      eyebrow={hero.eyebrow}
      title={hero.title}
      description={
        <Stack gap="small">
          <Text as="span" variant="subtitle" tone="default" className="block">
            {hero.lead}
          </Text>
          <span className="block">{hero.description}</span>
        </Stack>
      }
      actions={
        <>
          <Button href={hero.primaryCta.href} variant="primary" size="large" iconAfter={<Icon icon={ArrowRight} size="small" />}>
            {hero.primaryCta.label}
          </Button>
          <Button href={hero.secondaryCta.href} variant="secondary" size="large">
            {hero.secondaryCta.label}
          </Button>
        </>
      }
      footnote={hero.footnote}
      mediaFrame="sunken"
      media={
        <Stack gap="medium">
          <Stack direction="horizontal" justify="between" align="center" gap="small" wrap>
            <Text as="p" variant="eyebrow" tone="muted">
              {radarCaption.title}
            </Text>
            <Badge tone="accent" variant="soft">
              {radarCaption.badge}
            </Badge>
          </Stack>
          <RadarChart
            axes={radarAxes}
            series={radarSample}
            max={10}
            levels={5}
            showLegend
            label={`${radarCaption.title} — illustrative sample scores for a fictional obligor`}
          />
          <Text variant="caption" tone="subtle">
            {radarCaption.description}
          </Text>
        </Stack>
      }
    />
  );
}
