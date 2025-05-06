import BasicButton from '@/components/basic-button';
import { VisuallyHidden } from "@/components/ui/visually-hidden";
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
      {/* Adjusted padding: Increased mobile padding (px-4), kept md padding */}
      <main className="flex-1 px-4 md:px-6">
        <SummarySection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <div className='p-4'>
            <BasicButton>Click Me</BasicButton>
        </div>
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
