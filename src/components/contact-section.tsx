import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Mail } from 'lucide-react'; // Use Mail icon for consistency
import Image from 'next/image';
import Link from "next/link";

export function ContactSection() {
  const email = "jeshwanthgoud2@gmail.com"; // Replace with actual email
  const linkedInUrl = "https://www.linkedin.com/in/jeshwanth-goud/";
  const resumeUrl = "https://drive.google.com/file/d/1XyrFaUT2P1eA8ifOc_6F-4azN8YGgKDc/view?usp=sharing"; // Assuming resume is in public folder

  return (
    <SectionWrapper id="contact" className="bg-gradient-to-t from-background via-card/10 to-background/90 pb-16 md:pb-24 lg:pb-28">
      {/* Updated Section Title */}
      <SectionTitle>Let&apos;s Build Something Great Together!</SectionTitle>
      {/* Enhanced Card Styling */}
      <Card className="max-w-3xl mx-auto bg-card/90 dark:bg-secondary/70 mac-shadow border border-border/25 dark:border-border/35 backdrop-blur-md">
        <CardContent className="p-6 md:p-8 text-center space-y-8"> {/* Increased space */}
          {/* Updated, more concise and personal text */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
           Whether you have a project in mind, a question, or just want to chat, let's connect and explore how we can achieve great things together! 
          </p>
          {/* Enhanced Button Styling and Layout */}
          <div className="flex flex-row justify-center items-center gap-4 flex-wrap"> {/* Use flex-row and flex-wrap */}
             {/* Email Button */}
             <Link href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
               <Button
                  variant="outline"
                  size="lg" // Keep size lg
                  className="shadow-sm hover:shadow-md transition-all duration-300 ease-out hover:scale-[1.03] hover:bg-primary/10 hover:text-primary hover:border-primary/50 border-border"
               >
                  <Mail className="mr-2 h-5 w-5" /> {/* Use Mail icon */}
                  Email Me
               </Button>
             </Link>
             {/* LinkedIn Button - Adjust size and remove hover effect */}
            <Link href={linkedInUrl} target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon" // Keep as icon button
                // Remove hover background effect, add hover scale
                className="p-1 transition-transform transform duration-300 w-[125px] h-[125px] hover:bg-transparent dark:hover:bg-transparent hover:scale-[1.05]" // Added hover scale
                aria-label="LinkedIn Profile"
              >
               <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/a/aa/LinkedIn_2021.svg"
                  alt="LinkedIn Profile"
                  // Increase width/height by 25% (96 -> 120)
                  width={120}
                  height={120}
                  className="object-contain" // Ensure SVG scales correctly
                />
              </Button>
            </Link>
             {/* Download Resume Button */}
            <Link href={resumeUrl} download="Sai_Jeshwanth_Goud_Illuri_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg" // Keep size lg
                className="shadow-sm hover:shadow-md transition-all duration-300 ease-out hover:scale-[1.03] hover:bg-primary/10 hover:text-primary hover:border-primary/50 border-border"
              >
                 <Download className="mr-2 h-5 w-5" /> Download My Resume
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
