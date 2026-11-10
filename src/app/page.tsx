import { AudienceSection } from "@/sections/audience";
import { CopilotSection } from "@/sections/copilot";
import { DataSpineSection } from "@/sections/data-spine";
import { DemoSection } from "@/sections/demo";
import { FaqSection } from "@/sections/faq";
import { GovernanceSection } from "@/sections/governance";
import { HeroSection } from "@/sections/hero";
import { LifecycleSection } from "@/sections/lifecycle";
import { ModulesSection } from "@/sections/modules";
import { ProblemSection } from "@/sections/problem";
import { RadarSection } from "@/sections/radar";
import { RoadmapSection } from "@/sections/roadmap";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <RadarSection />
      <DataSpineSection />
      <LifecycleSection />
      <ModulesSection />
      <CopilotSection />
      <GovernanceSection />
      <RoadmapSection />
      <AudienceSection />
      <FaqSection />
      <DemoSection />
    </>
  );
}
