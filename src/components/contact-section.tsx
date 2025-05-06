import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from 'lucide-react'; // Removed unused Instagram import
import Image from 'next/image'; // Import next/image
import Link from "next/link";

export function ContactSection() {
  const email = "jeshwanthgoud3@gmail.com"; // Replace with actual email
  const linkedInUrl = "https://www.linkedin.com/in/jeshwanth-goud/";
  const resumeUrl = "https://drive.google.com/file/d/1XyrFaUT2P1eA8ifOc_6F-4azN8YGgKDc/view?usp=sharing"; // Assuming resume is in public folder

  return (
    <SectionWrapper id="contact" className="bg-gradient-to-t from-background via-card/10 to-background/90 pb-16 md:pb-24 lg:pb-28">
      {/* Updated Section Title */}
      <SectionTitle>Lets Work Together!</SectionTitle> {/* Updated Title */}
      {/* Enhanced Card Styling - Increased max-width */}
      <Card className="max-w-3xl mx-auto bg-card/90 dark:bg-secondary/70 mac-shadow border border-border/25 dark:border-border/35 backdrop-blur-md">
        <CardContent className="p-6 md:p-8 text-center space-y-8"> {/* Increased space */}
          {/* Enhanced Text Styling */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            I&apos;m actively seeking new Product Management opportunities and would love to connect. Let&apos;s discuss how my skills can benefit your team!
          </p>
          {/* Enhanced Button Styling and Layout - Ensure wrapping works well on mobile */}
          <div className="flex flex-row justify-center items-center gap-4 flex-wrap"> {/* Use flex-row and flex-wrap */}
             {/* Email Button using outline variant - Refined Styling */}
             <Link href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
               <Button
                  variant="outline"
                  size="lg"
                  className="shadow-sm hover:shadow-md transition-all duration-300 ease-out hover:scale-[1.03] hover:bg-primary/10 hover:text-primary hover:border-primary/50 border-border" // Simplified hover effect, using primary color accent
               >
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/512px-Gmail_icon_%282020%29.svg.png"
                    alt="Gmail logo"
                    width={20} // Keep size consistent
                    height={20} // Keep size consistent
                    className="mr-2 h-5 w-5" // Consistent size with other icons
                    data-ai-hint="gmail logo"
                  />
                  Email Me
               </Button>
             </Link>
             {/* LinkedIn Button - Logo Only, No Background/Border */}
            <Link href={linkedInUrl} target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost" // Use ghost variant for no background/border
                size="icon"
                className="p-1 transition-transform hover:scale-110 transform duration-300 w-auto h-auto" // Remove specific size, padding, background, border classes
                aria-label="LinkedIn Profile"
              >
               <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/a/aa/LinkedIn_2021.svg"
                  alt="LinkedIn Profile"
                  width={162} // Reduced logo size by 10% (from 180)
                  height={162} // Reduced logo size by 10% (from 180)
                  className="object-contain" // Ensure SVG scales correctly
                />
              </Button>
            </Link>
             {/* Download Resume Button */}
            <Link href={resumeUrl} download="Sai_Jeshwanth_Goud_Illuri_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="shadow-sm hover:shadow-md transition-all duration-300 ease-out hover:scale-[1.03] hover:bg-primary/10 hover:text-primary hover:border-primary/50 border-border" // Simplified hover effect
              >
                 <Download className="mr-2 h-5 w-5" /> Download My Resume
              </Button>
            </Link>
            {/* Instagram Button Removed */}
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
