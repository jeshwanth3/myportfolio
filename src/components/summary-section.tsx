"use client";

import Image from 'next/image';
import { SectionWrapper } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SummaryStats } from '@/components/summary-stats';
import { TypedTitle } from '@/components/typed-title';
import { SectionNavButton } from '@/components/section-nav-button';

const professionalSummary = "Hello! I am a PM with a passion for building user-centric solutions and driving business growth. Experienced in leading cross-functional teams, leveraging data-driven insights, and delivering innovative products that solve real-world problems. Let's connect to create meaningful impact together.";

const yourName = "Sai Jeshwanth Goud Illuri";

export function SummarySection() {
  return (
    <SectionWrapper id="summary" className="relative bg-gradient-to-b from-background via-card/5 to-background/90 pt-10 md:pt-16 lg:pt-20 pb-16 md:pb-20 lg:pb-24 overflow-hidden">
      {/* Animated background mesh gradient */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] floating-animation"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] floating-animation" style={{ animationDelay: '3s' } as React.CSSProperties}></div>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-3 space-y-4 md:space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm animate-fade-in" style={{ '--animation-delay': '100ms' } as React.CSSProperties}>
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <p className="text-sm sm:text-base font-semibold text-primary">
              Available for Product Management opportunities
            </p>
          </div>

          <div className="space-y-3 animate-fade-in" style={{ '--animation-delay': '200ms' } as React.CSSProperties}>
            <p className="text-base sm:text-lg font-medium text-muted-foreground">
              Hi there, I'm
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-text-slow">
                {yourName}
              </span>
            </h1>
          </div>

          <TypedTitle className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-primary animate-fade-in" style={{ '--animation-delay': '300ms' } as React.CSSProperties} />
          
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in" style={{ '--animation-delay': '400ms' } as React.CSSProperties}>
            {professionalSummary}
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-6 md:pt-8 animate-fade-in" style={{ '--animation-delay': '500ms' } as React.CSSProperties}>
            <Link href="#contact" passHref>
              <Button
                size="lg"
                className="relative shadow-lg hover:shadow-2xl transition-all hover:scale-[1.05] transform duration-300 w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl group overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center gap-2">
                  Let's Connect!
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                </span>
              </Button>
            </Link>
            <Link href="#experience" passHref>
              <Button 
                variant="outline" 
                size="lg" 
                className="shadow-md hover:shadow-xl transition-all hover:scale-[1.05] transform duration-300 bg-card/80 backdrop-blur-sm hover:bg-primary/15 hover:text-primary w-full sm:w-auto border-2 border-primary/40 hover:border-primary font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl group"
              >
                <span className="flex items-center gap-2">
                  View My Journey
                  <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-y-1" />
                </span>
              </Button>
            </Link>
          </div>

          <div className="pt-8 md:pt-12 lg:pt-14 animate-fade-in" style={{ '--animation-delay': '600ms' } as React.CSSProperties}>
            <SummaryStats />
          </div>
        </div>

        <div className="lg:col-span-2 flex justify-center lg:justify-end items-center order-first lg:order-last animate-fade-in" style={{ '--animation-delay': '200ms' } as React.CSSProperties}>
          <div className="relative group perspective-1000">
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-all duration-500"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl group-hover:bg-accent/30 transition-all duration-500"></div>
            
            <div className="relative transform transition-all duration-700 group-hover:scale-105">
              <div className="relative">
                <Image
                  src="/profile_photo.jpeg"
                  alt="Professional headshot of Sai Jeshwanth Goud Illuri"
                  width={450}
                  height={450}
                  quality={100}
                  priority
                  className="rounded-2xl border-4 border-primary/60 shadow-2xl object-cover w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] transition-all duration-500 filter saturate-[1.1] contrast-[1.02] relative z-10"
                  style={{ 
                    transform: 'translateZ(20px)',
                  }}
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/30 via-transparent to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
              </div>
              
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-2xl border-4 border-primary/0 group-hover:border-primary/60 transition-all duration-500 ease-out pointer-events-none scale-105 group-hover:scale-110"></div>
              
              {/* Enhanced glow effect */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-60 blur-3xl transition-all duration-700"></div>
            </div>
          </div>
        </div>
      </div>

      <SectionNavButton nextSection="experience" />
    </SectionWrapper>
  );
}