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
      {/* Updated Section Title - More collaborative and professional */}
      <SectionTitle>Let&apos;s Build Something Great Together</SectionTitle>
      {/* Enhanced Card Styling - Increased max-width and refined appearance */}
      <Card className="max-w-3xl mx-auto bg-card/90 dark:bg-secondary/70 mac-shadow border border-border/25 dark:border-border/35 backdrop-blur-md">
        <CardContent className="p-6 md:p-8 text-center space-y-8"> {/* Increased space */}
          {/* Enhanced Text Styling - More inviting and action-oriented */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            I thrive on tackling complex challenges and driving product innovation. If you&apos;re looking for a strategic product leader to elevate your initiatives, I&apos;d be delighted to explore how we can collaborate. Let&apos;s connect and discuss the possibilities.
          </p>
          {/* Enhanced Button Styling and Layout - Ensure wrapping works well on mobile */}
          <div className="flex flex-row justify-center items-center gap-4 flex-wrap"> {/* Use flex-row and flex-wrap */}
             {/* Email Button - Refined Styling */}
             <Link href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
               <Button
                  variant="outline"
                  size="lg" // Reverted size to lg
                  className="shadow-sm hover:shadow-md transition-all duration-300 ease-out hover:scale-[1.03] hover:bg-primary/10 hover:text-primary hover:border-primary/50 border-border" // Simplified hover effect, using primary color accent
               >
                  <Mail className="mr-2 h-5 w-5" /> {/* Use Mail icon */}
                  Email Me
               </Button>
             </Link>
             {/* LinkedIn Button - Refined Styling */}
            <Link href={linkedInUrl} target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon" // Reverted size to icon
                className="p-1 transition-transform hover:scale-110 transform duration-300 w-10 h-10" // Adjust size if needed, remove explicit width/height for icon scaling
                aria-label="LinkedIn Profile"
              >
               <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/a/aa/LinkedIn_2021.svg"
                  alt="LinkedIn Profile"
                  width={36} // Adjusted size for better fit within button
                  height={36} // Adjusted size for better fit within button
                  className="object-contain" // Ensure SVG scales correctly
                />
              </Button>
            </Link>
             {/* Download Resume Button - Refined Styling */}
            <Link href={resumeUrl} download="Sai_Jeshwanth_Goud_Illuri_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg" // Reverted size to lg
                className="shadow-sm hover:shadow-md transition-all duration-300 ease-out hover:scale-[1.03] hover:bg-primary/10 hover:text-primary hover:border-primary/50 border-border" // Simplified hover effect
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
