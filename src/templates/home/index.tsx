import { FeatureSection } from "./feature-section";
import { HeroSection } from "./hero-section";
import { SupportSection } from "./support";

export function HomeTemplate() {
  return (
    <article className="flex flex-col gap-20">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
    </article>
  );
}
