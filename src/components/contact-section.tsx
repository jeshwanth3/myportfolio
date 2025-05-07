import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Mail, Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from "next/link";

export function ContactSection() {
  const email = "jeshwanthgoud2@gmail.com";
  const linkedInUrl = "https://www.linkedin.com/in/jeshwanth-goud/";
  const resumeUrl = "https://drive.google.com/file/d/1XyrFaUT2P1eA8ifOc_6F-4azN8YGgKDc/view?usp=sharing";
  const calendlyUrl = "https://calendly.com/jeshwanthgoud2";

  return (
    <SectionWrapper id="contact" className="bg-gradient-to-t from-background via-card/10 to-background/90 pb-16 md:pb-24 lg:pb-28">
      <SectionTitle>Let&apos;s Build Something Great Together!</SectionTitle>
      <Card className="max-w-3xl mx-auto bg-card/90 dark:bg-secondary/70 mac-shadow border border-border/25 dark:border-border/35 backdrop-blur-md">
        <CardContent className="p-6 md:p-8 text-center space-y-8">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
           Whether you have a project in mind, a question, or just want to chat, let&apos;s connect and explore how we can achieve great things together!
          </p>
          <div className="flex flex-row justify-center items-center gap-4 flex-wrap">
             <Link href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
               <Button
                  variant="outline"
                  size="lg"
                  className="shadow-sm hover:shadow-md transition-all duration-300 ease-out hover:scale-[1.03] hover:bg-primary/10 hover:text-primary hover:border-primary/50 border-border"
               >
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
               </Button>
             </Link>
            <Link href={linkedInUrl} target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="p-1 transition-transform transform duration-300 w-[125px] h-[125px] hover:bg-transparent dark:hover:bg-transparent hover:scale-[1.05]"
                aria-label="LinkedIn Profile"
              >
               <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/a/aa/LinkedIn_2021.svg"
                  alt="LinkedIn Profile"
                  width={120}
                  height={120}
                  sizes="120px" // Added sizes prop
                  className="object-contain"
                />
              </Button>
            </Link>
            <Link href={resumeUrl} download="Sai_Jeshwanth_Goud_Illuri_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="shadow-sm hover:shadow-md transition-all duration-300 ease-out hover:scale-[1.03] hover:bg-primary/10 hover:text-primary hover:border-primary/50 border-border"
              >
                 <Download className="mr-2 h-5 w-5" /> Download My Resume
              </Button>
            </Link>
            <Link href={calendlyUrl} target="_blank" rel="noopener noreferrer">
              <Button
                 variant="outline"
                 size="lg"
                 className="shadow-sm hover:shadow-md transition-all duration-300 ease-out hover:scale-[1.03] hover:bg-primary/10 hover:text-primary hover:border-primary/50 border-border"
              >
                 <Calendar className="mr-2 h-5 w-5" />
                 Schedule a Meeting
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
