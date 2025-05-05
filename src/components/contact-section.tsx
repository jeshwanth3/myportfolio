import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, ExternalLink, Download, Instagram } from 'lucide-react';
import Link from 'next/link';

export function ContactSection() {
  const email = "jeshwanthgoud3@gmail.com"; // Replace with actual email
  const linkedInUrl = "https://www.linkedin.com/in/jeshwanth-goud/";
  const resumeUrl = "/Sai_Jeshwanth_Goud_Illuri_Resume.pdf"; // Assuming resume is in public folder
  const instagramUrl = "https://www.instagram.com/your_instagram_handle/"; // Replace with actual Instagram URL

  return (
    <SectionWrapper id="contact" className="bg-gradient-to-t from-background via-card/10 to-background/90 pb-16 md:pb-24 lg:pb-28">
      <SectionTitle>Get In Touch</SectionTitle>
      {/* Enhanced Card Styling - Increased max-width */}
      <Card className="max-w-3xl mx-auto bg-card/90 dark:bg-secondary/70 mac-shadow border border-border/25 dark:border-border/35 backdrop-blur-md">
        <CardContent className="p-6 md:p-8 text-center space-y-8"> {/* Increased space */}
          {/* Enhanced Text Styling */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            I&apos;m actively seeking new Product Management opportunities and would love to connect. Let&apos;s discuss how my skills can benefit your team!
          </p>
          {/* Enhanced Button Styling and Layout */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 flex-wrap">
             {/* Primary Button with Glow Effect */}
             <Link href={`mailto:${email}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
               <Button variant="default" size="lg" className="shadow-md hover:shadow-lg transition-shadow hover:scale-[1.03] transform duration-300 animate-glow w-full button-glow">
                <Mail className="mr-2 h-5 w-5" /> {/* Adjusted icon size */} Email Me
               </Button>
             </Link>
             {/* Outline Buttons with Enhanced Hover */}
            <Link href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="shadow-sm hover:shadow-md transition-shadow hover:scale-[1.03] transform duration-300 bg-card/50 hover:bg-accent/90 hover:text-accent-foreground dark:bg-secondary/50 dark:hover:bg-accent dark:hover:text-accent-foreground w-full">
                <Linkedin className="mr-2 h-5 w-5" /> {/* Adjusted icon size */} LinkedIn <ExternalLink className="ml-1 h-3 w-3 opacity-80" /> {/* Increased icon opacity */}
              </Button>
            </Link>
            <Link href={resumeUrl} download="Sai_Jeshwanth_Goud_Illuri_Resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="shadow-sm hover:shadow-md transition-shadow hover:scale-[1.03] transform duration-300 bg-card/50 hover:bg-accent/90 hover:text-accent-foreground dark:bg-secondary/50 dark:hover:bg-accent dark:hover:text-accent-foreground w-full">
                 <Download className="mr-2 h-5 w-5" /> {/* Adjusted icon size */} Download Resume
              </Button>
            </Link>
            <Link href={instagramUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="shadow-sm hover:shadow-md transition-shadow hover:scale-[1.03] transform duration-300 bg-card/50 hover:bg-accent/90 hover:text-accent-foreground dark:bg-secondary/50 dark:hover:bg-accent dark:hover:text-accent-foreground w-full">
                <Instagram className="mr-2 h-5 w-5" /> {/* Adjusted icon size */} Instagram <ExternalLink className="ml-1 h-3 w-3 opacity-80" /> {/* Increased icon opacity */}
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
