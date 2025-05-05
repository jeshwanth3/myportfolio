import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, ExternalLink, Download, Instagram } from 'lucide-react';
import Image from 'next/image'; // Import next/image

import Link from "next/link";

export function ContactSection() {
  const email = "jeshwanthgoud3@gmail.com"; // Replace with actual email
  const linkedInUrl = "https://www.linkedin.com/in/jeshwanth-goud/";
  const resumeUrl = "/Sai_Jeshwanth_Goud_Illuri_Resume.pdf"; // Assuming resume is in public folder
  const instagramUrl = "https://www.instagram.com/jeshwanth_goud_/"; // Add your Instagram URL

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
          <div className="flex flex-row justify-center items-center gap-4 flex-wrap"> {/* Use flex-row */}
             {/* Primary Button with Glow Effect */}
             <Link href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
               <Button variant="default" size="lg" className="shadow-md hover:shadow-lg transition-shadow hover:scale-[1.03] transform duration-300 animate-glow button-glow">
                <Mail className="mr-2 h-5 w-5" /> Email Me
               </Button>
             </Link>
             {/* LinkedIn Button - Icon Only */}
            <Link href={linkedInUrl} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="icon" // Change size to icon for square button
                className="shadow-sm hover:shadow-md transition-shadow hover:scale-[1.03] transform duration-300 bg-card/50 hover:bg-accent/90 hover:text-accent-foreground dark:bg-secondary/50 dark:hover:bg-accent dark:hover:text-accent-foreground w-10 h-10 p-0 flex items-center justify-center" // Set fixed width/height and remove padding
              >
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/a/aa/LinkedIn_2021.svg"
                  alt="LinkedIn Profile"
                  width={24} // Adjust size as needed
                  height={24}
                  className="object-contain" // Ensure SVG scales correctly
                />
              </Button>
             </Link>
             {/* Download Resume Button */}
            <Link href={resumeUrl} download="Sai_Jeshwanth_Goud_Illuri_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="shadow-sm hover:shadow-md transition-shadow hover:scale-[1.03] transform duration-300 bg-card/50 hover:bg-accent/90 hover:text-accent-foreground dark:bg-secondary/50 dark:hover:bg-accent dark:hover:text-accent-foreground">
                 <Download className="mr-2 h-5 w-5" /> Download Resume
              </Button>
            </Link>
            {/* Instagram Button */}
            <Link href={instagramUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="shadow-sm hover:shadow-md transition-shadow hover:scale-[1.03] transform duration-300 bg-card/50 hover:bg-accent/90 hover:text-accent-foreground dark:bg-secondary/50 dark:hover:bg-accent dark:hover:text-accent-foreground">
                 <Instagram className="mr-2 h-5 w-5" /> Instagram <ExternalLink className="ml-1 h-3 w-3 opacity-80" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
