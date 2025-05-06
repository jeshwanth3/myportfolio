import Image from 'next/image';
import { SectionWrapper } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SummaryStats } from '@/components/summary-stats'; // Import the new component

const professionalSummary = "Detail-oriented and impact-driven Product Manager and Business Analyst with 3+ years of experience driving data-led decisions, building scalable cloud solutions, and delivering user-centric features. Skilled in leveraging analytics, AI tools, and cross-functional collaboration to launch impactful products across SaaS, fintech, and transportation domains.";
const yourName = "Sai Jeshwanth Goud Illuri";

export function SummarySection() {
  return (
    // Adjusted top padding for mobile (pt-10), kept larger padding for bigger screens
    // Keep pb consistent or adjust as needed with stats integration
    <SectionWrapper id="summary" className="bg-gradient-to-b from-background via-card/5 to-background/90 pt-10 md:pt-12 lg:pt-16 pb-12 md:pb-16 lg:pb-20">
      {/* Main Grid for Text, Image, and Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start"> {/* Reduced gap slightly */}

        {/* Text Content Area */}
        <div className="lg:col-span-3 space-y-3 md:space-y-4 text-center lg:text-left"> {/* Reduced space-y */}
          <p className="text-base sm:text-lg font-semibold text-primary"> {/* Adjusted size */}
             Hello, I&apos;m
          </p>
           {/* Name - Use foreground, adjusted size for hierarchy */}
           {/* Keep sizes aligned and remove redundancy */}
           <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight mb-1">
            {yourName}
          </h1>
           {/* Title - Uses PRIMARY color, consistent sizes with glow */}
           <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight md:text-4xl text-primary animate-glow mb-3"> {/* Reduced size and margin-bottom */}
             Product Manager
           </h2>
          {/* Summary Text - Consistent sizes and leading - REMOVED max-w-2xl */}
          <p className="text-sm sm:text-base text-muted-foreground md:text-lg mx-auto lg:mx-0 leading-relaxed"> {/* Adjusted sizes */}
            {professionalSummary}
          </p>
          {/* Buttons - Stack vertically on mobile (flex-col), row on larger (sm:flex-row) */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 pt-4 md:pt-5"> {/* Reduced gap and pt */}
             <Link href="#contact" passHref>
               <Button
                 variant="default" // Keep default
                 size="sm" // Reduced button size
                 className="shadow-md hover:shadow-lg transition-all hover:scale-[1.03] transform duration-300 w-full sm:w-auto button-glow" // Kept glow
               >
                 Contact Me <Mail className="ml-1.5 h-4 w-4" /> {/* Adjusted icon margin/size */}
               </Button>
             </Link>
             <Link href="#experience" passHref>
               <Button variant="outline" size="sm" className="shadow-sm hover:shadow-md transition-all hover:scale-[1.03] transform duration-300 bg-card/50 hover:bg-primary/10 hover:text-primary dark:bg-secondary/50 dark:hover:bg-primary/15 dark:hover:text-primary w-full sm:w-auto border-border hover:border-primary/60">
                 View Experience <ArrowRight className="ml-1.5 h-4 w-4 opacity-80" /> {/* Adjusted icon margin/size */}
               </Button>
             </Link>
          </div>

           {/* Integrate SummaryStats below the buttons */}
          <div className="pt-6 md:pt-8 lg:pt-10"> {/* Reduced padding top */}
             <SummaryStats />
          </div>
        </div>

        {/* Image Area - Ensure alignment and sizing */}
        <div className="lg:col-span-2 flex justify-center lg:justify-end items-center mt-4 lg:mt-0 order-first lg:order-last"> {/* Adjusted mt */}
          <div className="relative group">
             <Image
               src="https://drive.google.com/uc?export=view&id=1AKxY9S_07wtCKtNC7nuw1r83_2E-IRmw" // Updated image source
               alt="Professional headshot of Sai Jeshwanth Goud Illuri"
               width={320} // Kept width
               height={320} // Kept height
               sizes="(max-width: 640px) 60vw, (max-width: 1024px) 280px, 320px" // Adjusted sizes
               // Keep rounded-xl for rounded square
               className="rounded-xl border-4 border-primary/50 object-cover aspect-square w-[60vw] max-w-[240px] h-auto sm:max-w-[280px] lg:max-w-[320px] group-hover:scale-[1.02] transition-transform duration-300 mac-shadow" // Adjusted sizes, border
               priority
               data-ai-hint="person canyon" // Updated AI hint
             />
             {/* Subtle glow effect on hover - changed to match rounded-xl */}
             <div className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-primary/30 transition-all duration-300 ease-out pointer-events-none scale-105 group-hover:scale-110 opacity-0 group-hover:opacity-100"></div>
          </div>
        </div>
      </div>
      {/* Remove SummaryStats from here if it was previously placed outside the grid */}
    </SectionWrapper>
  );
}
