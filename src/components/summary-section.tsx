
import Image from 'next/image';
import { SectionWrapper } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from 'lucide-react'; // Added Mail icon
import Link from 'next/link';
import { cn } from '@/lib/utils'; // Import cn utility

const professionalSummary = "Detail-oriented and impact-driven Product Manager and Business Analyst with 3+ years of experience driving data-led decisions, building scalable cloud solutions, and delivering user-centric features. Skilled in leveraging analytics, AI tools, and cross-functional collaboration to launch impactful products across SaaS, fintech, and transportation domains.";
const yourName = "Sai Jeshwanth Goud Illuri";

export function SummarySection() {
  return (
    // Adjusted top padding for mobile (pt-10), kept larger padding for bigger screens
    <SectionWrapper id="summary" className="bg-gradient-to-b from-background via-background/90 to-card/10 pt-10 md:pt-12 lg:pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
        {/* Text Content Area - Ensure text is centered on mobile, left-aligned on large screens */}
        <div className="lg:col-span-3 space-y-5 md:space-y-6 text-center lg:text-left">
          <p className="text-xl sm:text-2xl font-semibold text-primary">
             Hello, I&apos;m
          </p>
           {/* Name - Reduced size, uses foreground */}
           <h1 className={cn(
              "text-5xl sm:text-6xl font-bold tracking-tight text-foreground",
              "leading-tight mb-4"
            )}
           >
            {yourName}
          </h1>
           {/* Title - Uses PRIMARY color, consistent sizes */}
           <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl text-primary animate-glow mb-4">
             Product Manager
           </h2>
          {/* Summary Text - Consistent sizes and leading */}
          <p className="text-base sm:text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            {professionalSummary}
          </p>
          {/* Buttons - Stack vertically on mobile (flex-col), row on larger (sm:flex-row) */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-6 md:pt-8">
            <Link href="#contact" passHref>
              <Button size="lg" className="shadow-md hover:shadow-lg transition-all hover:scale-[1.03] transform duration-300 w-full sm:w-auto button-glow bg-transparent border border-primary text-primary hover:bg-primary/10">
                Contact Me <Mail className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="#experience" passHref>
              <Button variant="outline" size="lg" className="shadow-sm hover:shadow-md transition-all hover:scale-[1.03] transform duration-300 bg-card/50 hover:bg-primary/10 hover:text-primary dark:bg-secondary/50 dark:hover:bg-primary/15 dark:hover:text-primary w-full sm:w-auto border-border hover:border-primary/60">
                View Experience <ArrowRight className="ml-2 h-5 w-5 opacity-80" />
              </Button>
            </Link>
          </div>
        </div>
        {/* Image Area - Adjusted max-width for better scaling on mobile */}
        <div className="lg:col-span-2 flex justify-center items-center lg:justify-end order-first lg:order-last">
          <div className="relative group">
             <Image
               src="https://drive.google.com/uc?export=view&id=15Ix8YbF3RSkYWygk_7Mau_Rtlx4-9xYo"
               alt="Professional headshot of Sai Jeshwanth Goud Illuri"
               width={380}
               height={380}
               sizes="(max-width: 640px) 65vw, (max-width: 1024px) 320px, 380px" // Added breakpoint for smaller screens
               className="rounded-full border-8 border-primary/70 object-cover aspect-square w-[65vw] max-w-[260px] h-auto sm:max-w-[320px] lg:max-w-[380px]" // Adjusted max-width for mobile
               priority
               data-ai-hint="professional headshot person dark background studio lighting nebula purple teal"
             />
             
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
