import Image from 'next/image';
import { SectionWrapper } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SummaryStats } from '@/components/summary-stats';

const professionalSummary = "Detail-oriented and impact-driven Product Manager and Business Analyst with 3+ years of experience driving data-led decisions, building scalable cloud solutions, and delivering user-centric features. Skilled in leveraging analytics, AI tools, and cross-functional collaboration to launch impactful products across SaaS, fintech, and transportation domains.";
const yourName = "Sai Jeshwanth Goud Illuri";

export function SummarySection() {
  return (
    <SectionWrapper id="summary" className="bg-gradient-to-b from-background via-card/5 to-background/90 pt-10 md:pt-12 lg:pt-16 pb-12 md:pb-16 lg:pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-3 space-y-3 md:space-y-4 text-center lg:text-left">
          <p className="text-base sm:text-lg font-semibold text-primary">
             Hello, I&apos;m
          </p>
           <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight mb-1">
            {yourName}
          </h1>
           <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight md:text-4xl text-primary animate-glow mb-3">
             Product Manager
           </h2>
          <p className="text-sm sm:text-base text-muted-foreground md:text-lg mx-auto lg:mx-0 leading-relaxed">
            {professionalSummary}
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 pt-4 md:pt-5">
             <Link href="#contact" passHref>
               <Button
                 variant="outline"
                 size="sm"
                 className="shadow-md hover:shadow-lg transition-all hover:scale-[1.03] transform duration-300 w-full sm:w-auto border border-primary/60 text-primary hover:bg-primary/10 button-glow"
               >
                 Contact Me <Mail className="ml-1.5 h-4 w-4" />
               </Button>
             </Link>
             <Link href="#experience" passHref>
               <Button variant="outline" size="sm" className="shadow-sm hover:shadow-md transition-all hover:scale-[1.03] transform duration-300 bg-card/50 hover:bg-primary/10 hover:text-primary dark:bg-secondary/50 dark:hover:bg-primary/15 dark:hover:text-primary w-full sm:w-auto border-border hover:border-primary/60">
                 View My Experience <ArrowDown className="ml-1.5 h-4 w-4 opacity-80" />
               </Button>
             </Link>
          </div>
          <div className="pt-6 md:pt-8 lg:pt-10">
             <SummaryStats />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-center lg:justify-end items-center mt-4 lg:mt-0 order-first lg:order-last">
          <div className="relative group">
             <Image
               src="https://drive.google.com/uc?export=view&id=1AKxY9S_07wtCKtNC7nuw1r83_2E-IRmw"
               alt="Professional headshot of Sai Jeshwanth Goud Illuri"
               width={320}
               height={320}
               sizes="(max-width: 639px) 240px, (max-width: 1023px) 280px, 320px" // Optimized sizes prop
               className="rounded-xl border-4 border-primary/60 dark:border-primary/70 object-cover aspect-square w-[60vw] max-w-[240px] h-auto sm:max-w-[280px] lg:max-w-[320px] group-hover:scale-[1.02] transition-all duration-300 mac-shadow"
               priority // Preload this critical image
               data-ai-hint="person canyon"
             />
             <div className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-primary/40 dark:group-hover:border-primary/50 transition-all duration-300 ease-out pointer-events-none scale-105 group-hover:scale-110 opacity-0 group-hover:opacity-100"></div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
