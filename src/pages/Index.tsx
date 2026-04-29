import HeroSection from "@/components/landing/HeroSection";
import AudienceAndStepsSection from "@/components/landing/AudienceAndStepsSection";
import CompareAndRatesSection from "@/components/landing/CompareAndRatesSection";
import StoriesAndFaqSection from "@/components/landing/StoriesAndFaqSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-body grain overflow-x-hidden">
      <HeroSection />
      <AudienceAndStepsSection />
      <CompareAndRatesSection />
      <StoriesAndFaqSection />
    </div>
  );
};

export default Index;
