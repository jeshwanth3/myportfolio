import { Header } from "@/components/header";
import { SummarySection } from "@/components/summary-section";
import { ExperienceSection } from "@/components/experience-section";
import { SkillsSection } from "@/components/skills-section";
import { EducationSection } from "@/components/education-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-neutral-900 via-black to-neutral-950 p-4 md:p-8 perspective">
      {/* Macbook Mockup */}
      <div className="macbook-mockup animate-macbook-open">
        <div className="macbook-notch"></div>
        <div className="macbook-screen overflow-y-auto scrollbar-thin scrollbar-thumb-muted scrollbar-track-secondary">
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

// Add perspective style for the animation
const styles = `
  .perspective {
    perspective: 1500px;
  }
`;
// Inject styles - Next.js doesn't directly support <style> in components easily
// For a real app, consider CSS Modules or styled-jsx for scoped styles.
if (typeof window !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}