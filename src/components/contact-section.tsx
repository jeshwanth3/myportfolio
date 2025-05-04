import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, ExternalLink } from 'lucide-react';
import Link from 'next/link';


export function ContactSection() {
  const email = "jeshwanthgoud3@gmail.com"; // Replace with actual email
  const linkedInUrl = "https://www.linkedin.com/in/jeshwanth-goud/";

  return (
    <SectionWrapper id="contact" className="bg-gradient-to-t from-background to-card/20 dark:from-card/20 dark:to-background pb-16 md:pb-24 lg:pb-28">
      <SectionTitle>Get In Touch</SectionTitle>
      <Card className="max-w-xl mx-auto bg-card/80 dark:bg-secondary/60 mac-shadow border border-border/20 dark:border-border/30 backdrop-blur-sm">
        <CardContent className="p-6 md:p-8 text-center space-y-6">
          <p className="text-base md:text-lg text-muted-foreground">
            I&apos;m actively seeking new Product Management opportunities and would love to connect. Let&apos;s discuss how my skills can benefit your team!
          </p>
          {/* Buttons stack vertically on small screens */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 flex-wrap">
             <Link href={`mailto:${email}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto"> {/* Ensure full width on small screens */}
               {/* Primary button uses primary theme color */}
               <Button variant="default" size="lg" className="shadow-md hover:shadow-lg transition-shadow hover:scale-105 transform duration-200 animate-glow w-full"> {/* Added w-full */}
                <Mail className="mr-2 h-4 w-4" /> Email Me
               </Button>
             </Link>
            <Link href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto"> {/* Ensure full width on small screens */}
              {/* Outline button uses accent color for hover state */}
              <Button variant="outline" size="lg" className="shadow-sm hover:shadow-md transition-shadow hover:scale-105 transform duration-200 bg-card/50 hover:bg-accent hover:text-accent-foreground dark:bg-secondary/50 dark:hover:bg-accent dark:hover:text-accent-foreground w-full"> {/* Added w-full */}
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn <ExternalLink className="ml-1 h-3 w-3 opacity-70" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
