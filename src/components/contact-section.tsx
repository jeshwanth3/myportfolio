import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, ExternalLink } from 'lucide-react'; // Removed Download icon

export function ContactSection() {
  const email = "your.email@example.com"; // Replace with actual email
  const linkedInUrl = "https://www.linkedin.com/in/jeshwanth-goud/"; // Updated LinkedIn URL

  return (
    <SectionWrapper id="contact" className="bg-gradient-to-t from-background to-card/20 dark:from-card/20 dark:to-background pb-16 md:pb-24 lg:pb-28"> {/* Adjusted padding and background */}
      <SectionTitle>Get In Touch</SectionTitle>
      <Card className="max-w-xl mx-auto bg-card/80 dark:bg-secondary/60 mac-shadow border border-border/20 dark:border-border/30 backdrop-blur-sm"> {/* Adjusted width, styling, added blur */}
        <CardContent className="p-6 md:p-8 text-center space-y-6"> {/* Increased spacing */}
          <p className="text-base md:text-lg text-muted-foreground">
            I'm actively seeking new Product Management opportunities and would love to connect. Let's discuss how my skills can benefit your team!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 flex-wrap">
             <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
               <Button variant="default" size="lg" className="shadow-md hover:shadow-lg transition-shadow hover:scale-105 transform duration-200"> {/* Default button uses primary color */}
                <Mail className="mr-2 h-4 w-4" /> Email Me
               </Button>
             </a>
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="shadow-sm hover:shadow-md transition-shadow hover:scale-105 transform duration-200 bg-card/50 hover:bg-accent/10 dark:bg-secondary/50 dark:hover:bg-accent/20"> {/* Outline button uses accent for hover */}
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn <ExternalLink className="ml-1 h-3 w-3 opacity-70" />
              </Button>
            </a>
            {/* Removed Resume Download Button */}
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
