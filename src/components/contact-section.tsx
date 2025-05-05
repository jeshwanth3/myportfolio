import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, ExternalLink, Download, Instagram } from 'lucide-react'; // Import Instagram icon
import Link from 'next/link';


export function ContactSection() {
  const email = "jeshwanthgoud3@gmail.com"; // Replace with actual email
  const linkedInUrl = "https://www.linkedin.com/in/jeshwanth-goud/";
  const resumeUrl = "/Sai_Jeshwanth_Goud_Illuri_Resume.pdf"; // Assuming resume is in public folder
  const instagramUrl = "https://www.instagram.com/your_instagram_handle/"; // Replace with actual Instagram URL

  return (
    <SectionWrapper id="contact" className="bg-gradient-to-t from-background via-card/10 to-background/90 pb-16 md:pb-24 lg:pb-28"> {/* Adjusted gradient and padding */}
      <SectionTitle>Get In Touch</SectionTitle>
      <Card className="max-w-2xl mx-auto bg-card/90 dark:bg-secondary/70 mac-shadow border border-border/25 dark:border-border/35 backdrop-blur-md"> {/* Enhanced card style, increased max-width slightly */}
        <CardContent className="p-6 md:p-8 text-center space-y-8"> {/* Increased spacing */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed"> {/* Increased font size */}
            I&apos;m actively seeking new Product Management opportunities and would love to connect. Let&apos;s discuss how my skills can benefit your team!
          </p>
          {/* Buttons stack vertically on small screens */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 flex-wrap">
             <Link href={`mailto:${email}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto"> {/* Ensure full width on small screens */}
               {/* Primary button uses primary theme color, added subtle glow */}
               <Button variant="default" size="lg" className="shadow-md hover:shadow-lg transition-shadow hover:scale-[1.03] transform duration-300 animate-glow w-full button-glow"> {/* Added w-full and button-glow */}
                <Mail className="mr-2 h-4 w-4" /> Email Me
               </Button>
             </Link>
            <Link href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto"> {/* Ensure full width on small screens */}
              {/* Outline button uses accent color for hover state */}
              <Button variant="outline" size="lg" className="shadow-sm hover:shadow-md transition-shadow hover:scale-[1.03] transform duration-300 bg-card/50 hover:bg-accent/90 hover:text-accent-foreground dark:bg-secondary/50 dark:hover:bg-accent dark:hover:text-accent-foreground w-full"> {/* Added w-full, enhanced hover */}
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn <ExternalLink className="ml-1 h-3 w-3 opacity-70" />
              </Button>
            </Link>
            {/* Download Resume Button */}
            <Link href={resumeUrl} download="Sai_Jeshwanth_Goud_Illuri_Resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="shadow-sm hover:shadow-md transition-shadow hover:scale-[1.03] transform duration-300 bg-card/50 hover:bg-accent/90 hover:text-accent-foreground dark:bg-secondary/50 dark:hover:bg-accent dark:hover:text-accent-foreground w-full">
                 <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
            </Link>
            {/* Instagram Button */}
            <Link href={instagramUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="shadow-sm hover:shadow-md transition-shadow hover:scale-[1.03] transform duration-300 bg-card/50 hover:bg-accent/90 hover:text-accent-foreground dark:bg-secondary/50 dark:hover:bg-accent dark:hover:text-accent-foreground w-full">
                <Instagram className="mr-2 h-4 w-4" /> Instagram <ExternalLink className="ml-1 h-3 w-3 opacity-70" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
