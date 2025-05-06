
import { Header } from "@/components/header";
import { SummarySection } from "@/components/summary-section";
import { ExperienceSection } from "@/components/experience-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section"; // Import ProjectsSection
import { EducationSection } from "@/components/education-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    // The main container now spans the full viewport height
    <div className="flex flex-col min-h-screen bg-background">

      {/* Content is rendered directly */}
      <Header />
      {/* Added padding for mobile view, wrapping sections in divs if needed for specific layout overrides */}
      <main className="flex-1 px-4 md:px-6">
        <SummarySection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
