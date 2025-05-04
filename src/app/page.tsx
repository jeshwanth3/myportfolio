'use client';

import { Header } from '@/components/header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="px-4 py-10 space-y-20 text-white">
        <section id="summary" className="min-h-screen bg-gray-900 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <p>This is the summary section.</p>
        </section>

        <section id="experience" className="min-h-screen bg-gray-800 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <p>This is the experience section.</p>
        </section>

        <section id="projects" className="min-h-screen bg-gray-900 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <p>This is the projects section.</p>
        </section>

        <section id="skills" className="min-h-screen bg-gray-800 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <p>This is the skills section.</p>
        </section>

        <section id="education" className="min-h-screen bg-gray-900 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <p>This is the education section.</p>
        </section>

        <section id="contact" className="min-h-screen bg-gray-800 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p>This is the contact section.</p>
        </section>
      </main>
    </>
  );
}
