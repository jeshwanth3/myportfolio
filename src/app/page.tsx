import React from "react";
import { Header } from "@/components/header";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Achievements } from "@/components/achievements";
import { ProjectsSection } from "@/components/projects-section";
import { EducationSection } from "@/components/education-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Summary } from "@/components/summary";
import { BackToTopButton } from "@/components/back-to-top-button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <Header />
      <main className="flex-1">
        <Summary />
        <Experience />
        <Achievements />
        <ProjectsSection />
        <Skills />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
