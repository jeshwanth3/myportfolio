import { Header } from "@/components/header";
import { SummarySection } from "@/components/summary-section";
import { ExperienceSection } from "@/components/experience-section";
import { SkillsSection } from "@/components/skills-section";
import { EducationSection } from "@/components/education-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    // The main container now acts as the "screen"
    <div className="flex flex-col min-h-screen bg-background">
      {/* Content is rendered directly, not inside a mockup */}
      <Header />
      <main className="flex-1">
        <SummarySection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
