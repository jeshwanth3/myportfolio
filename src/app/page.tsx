import { Header } from "@/components/header";
import { SummarySection } from "@/components/summary-section";
import { ExperienceSection } from "@/components/experience-section";
import { SkillsSection } from "@/components/skills-section";
import { EducationSection } from "@/components/education-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-neutral-900 via-black to-neutral-950 p-4 md:p-8"> {/* Removed 'perspective' class */}
      {/* Macbook Mockup */}
      <div className="macbook-mockup animate-macbook-open">
        <div className="macbook-notch"></div>
        {/* Use utilities from globals.css for scrollbar */}
        <div className="macbook-screen overflow-y-auto">
          {/* Screen Content */}
          <div className="flex min-h-full flex-col animate-content-fade-in">
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
        </div>
        <div className="macbook-chin">
          {/* <div className="macbook-logo"></div> */}
        </div>
      </div>
    </div>
  );
}

// Removed the inline style injection block
