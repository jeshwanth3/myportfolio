import React, { useState } from "react";
import { Header } from "@/components/header";
import { ExperienceSection } from "@/components/experience-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section"; // Import ProjectsSection
import { EducationSection } from "@/components/education-section";
import { ContactSection } from "@/components/contact-section";

import { SummarySection } from "@/components/summary-section";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    // The main container now spans the full viewport height
    <div className="flex flex-col min-h-screen bg-background">
      <Header setOpen={setOpen} />
      <main className="flex-1 px-4 md:px-6">
        <SummarySection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />     </main>
    </div>
  );
}
