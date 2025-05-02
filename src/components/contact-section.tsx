import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, ExternalLink } from 'lucide-react'; // Removed Download icon

export function ContactSection() {
  const email = "your.email@example.com"; // Replace with actual email
  const linkedInUrl = "https://www.linkedin.com/in/jeshwanth-goud/"; // Updated LinkedIn URL

  return (
    <SectionWrapper id="contact" className="bg-gradient-to-t from-background to-background/80 dark:from-card/50 dark:to-background pb-16 md:pb-24 lg:pb-28"> {/* Adjusted padding and background */}
      <SectionTitle>Get In Touch</SectionTitle>
      <Card className="max-w-xl mx-auto bg-card dark:bg-secondary/40 mac-shadow border-primary/10 dark:border-primary/20"> {/* Adjusted width and styling */}
        <CardContent className="p-6 md:p-8 text-center space-y-6"> {/* Increased spacing */}
          <p className="text-base md:text-lg text-muted-foreground">
            I'm actively seeking new Product Management opportunities and would love to connect. Let's discuss how my skills can benefit your team!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 flex-wrap">
             <Button asChild variant="default" size="lg" className="shadow-md hover:shadow-lg transition-shadow">
              <a href={`mailto:${email}`}>
                <Mail className="mr-2 h-4 w-4" /> Email Me
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-sm hover:shadow-md transition-shadow">
              <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn <ExternalLink className="ml-1 h-3 w-3 opacity-70" />
              </a>
            </Button>
            {/* Removed Resume Download Button */}
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
