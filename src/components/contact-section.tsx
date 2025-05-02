import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Download } from 'lucide-react'; // Assuming Download icon exists

export function ContactSection() {
  const email = "[email protected]"; // Replace with actual email later if needed, keeping placeholder for now
  const linkedInUrl = "https://www.linkedin.com/in/your-linkedin-profile"; // Replace with your actual LinkedIn URL

  return (
    <SectionWrapper id="contact">
      <SectionTitle>Get In Touch</SectionTitle>
      <Card className="max-w-lg mx-auto shadow-md">
        <CardContent className="p-6 text-center space-y-4">
          <p className="text-muted-foreground">
            I'm currently seeking Product Management opportunities. Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
             <Button asChild variant="default">
              <a href={`mailto:${email}`}>
                <Mail className="mr-2 h-4 w-4" /> Email Me
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>
            {/* Optional: Resume Download Button */}
            {/* <Button asChild variant="secondary">
              <a href="/path/to/your/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button> */}
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
