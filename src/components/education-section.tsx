import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: "Master of Business Administration (STEM MBA)",
    institution: "Iowa State University, Ivy College of Business",
    years: "Expected Dec 2024", // Adjust as needed
  },
  {
    degree: "Master of Science in Information Systems (STEM)",
    institution: "Iowa State University, Ivy College of Business",
    years: "Expected Dec 2024", // Adjust as needed
  },
  {
    degree: "Bachelor of Technology, Computer Science",
    institution: "Pragati Engineering College (JNTUK)",
    years: "2017 - 2021", // Adjust as needed
  },
];

export function EducationSection() {
  return (
    <SectionWrapper id="education" className="bg-secondary">
      <SectionTitle>Education</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {education.map((edu, index) => (
          <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                 <GraduationCap className="h-6 w-6 text-primary" />
                 <CardTitle className="text-lg font-semibold">{edu.degree}</CardTitle>
              </div>
              <CardDescription className="text-sm text-muted-foreground">{edu.institution}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-medium text-foreground/80">{edu.years}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
