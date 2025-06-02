"use client";

import Image from 'next/image';
import { SectionWrapper } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SummaryStats } from '@/components/summary-stats';
import { TypedTitle } from '@/components/typed-title';

const professionalSummary = "Hello! I'm a passionate Product Manager with a knack for transforming ideas into impactful products. With a strong background in user research, data analytics, and cross-functional collaboration, I aim to create solutions that resonate with users and drive business success. My journey includes leading innovative projects like FitTracker, which showcases my ability to blend technology and strategy effectively.";
const yourName = "Sai Jeshwanth Goud Illuri";

export function SummarySection() {
  return (
    <SectionWrapper id="summary" className="bg-gradient-to-b from-background via-card/5 to-background/90 pt-10 md:pt-12 lg:pt-16 pb-12 md:pb-16 lg:pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-3 space-y-3 md:space-y-4 text-center lg:text-left">
          <p className="text-base sm:text-lg font-semibold text-primary animate-fade-in" style={{ '--animation-delay': '100ms' } as React.CSSProperties}>
             Hi there, I'm
          </p>
           <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight mb-1 animate-fade-in" style={{ '--animation-delay': '200ms' } as React.CSSProperties}>
            {yourName}
          </h1>
          <TypedTitle className="text-xl sm:text-2xl font-medium tracking-tight text-primary animate-fade-in" />
          <p className="text-sm sm:text-base text-muted-foreground md:text-lg mx-auto lg:mx-0 leading-relaxed animate-fade-in" style={{ '--animation-delay': '400ms' } as React.CSSProperties}>
            {professionalSummary}
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 pt-4 md:pt-5 animate-fade-in" style={{ '--animation-delay': '500ms' } as React.CSSProperties}>
             <Link href="#contact" passHref>
               <Button
                 variant="outline"
                 size="sm"
                 className="shadow-md hover:shadow-lg transition-all hover:scale-[1.03] transform duration-300 w-full sm:w-auto border border-primary/60 text-primary hover:bg-primary/10 button-glow group relative overflow-hidden"
               >
                 <span className="absolute inset-0 bg-primary/10 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
                 <span className="relative">Let's Connect! <Mail className="ml-1.5 h-4 w-4 inline-block transition-transform duration-300 group-hover:rotate-12" /></span>
               </Button>
             </Link>
             <Link href="#experience" passHref>
               <Button 
                 variant="outline" 
                 size="sm" 
                 className="shadow-sm hover:shadow-md transition-all hover:scale-[1.03] transform duration-300 bg-card/50 hover:bg-primary/10 hover:text-primary dark:bg-secondary/50 dark:hover:bg-primary/15 dark:hover:text-primary w-full sm:w-auto border-border hover:border-primary/60 group"
               >
                 <span className="relative">
                   Check Out My Journey 
                   <ArrowDown className="ml-1.5 h-4 w-4 opacity-80 inline-block transition-transform duration-300 group-hover:translate-y-1" />
                 </span>
               </Button>
             </Link>
          </div>
          <div className="pt-6 md:pt-8 lg:pt-10 animate-fade-in" style={{ '--animation-delay': '600ms' } as React.CSSProperties}>
             <SummaryStats />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-center lg:justify-end items-center mt-4 lg:mt-0 order-first lg:order-last animate-fade-in" style={{ '--animation-delay': '200ms' } as React.CSSProperties}>
          <div className="relative group perspective-1000">
             <div className="relative transform transition-transform duration-500 group-hover:rotate-y-12">
               <Image
                 src="/profile_photo.jpeg"
                 alt="Professional headshot of Sai Jeshwanth Goud Illuri"
                 width={400}
                 height={400}
                 quality={100}
                 priority
                 className="rounded-xl border-4 border-primary/60 dark:border-primary/70 object-cover w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px] transition-all duration-300 mac-shadow filter saturate-[1.1] contrast-[1.02]"
                 style={{ 
                   transform: 'translateZ(0)',
                   backfaceVisibility: 'hidden'
                 }}
               />
               <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
             </div>
             <div className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-primary/40 dark:group-hover:border-primary/50 transition-all duration-300 ease-out pointer-events-none scale-105 group-hover:scale-110 opacity-0 group-hover:opacity-100"></div>
             <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary/30 to-accent/30 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 group-hover:duration-300"></div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}