import Image from 'next/image';
import { SectionWrapper } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const professionalSummary = "Detail-oriented and impact-driven Product Manager and Business Analyst with 3+ years of experience driving data-led decisions, building scalable cloud solutions, and delivering user-centric features. Skilled in leveraging analytics, AI tools, and cross-functional collaboration to launch impactful products across SaaS, fintech, and transportation domains.";

export function SummarySection() {
  return (
    <SectionWrapper id="summary" className="bg-gradient-to-b from-background to-secondary/50 pt-20 md:pt-28 lg:pt-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary">
            Product Ascent
          </h1>
           <p className="text-lg text-foreground/80 md:text-xl lg:text-2xl max-w-xl mx-auto md:mx-0">
            Hi, I'm [Your Name] {/* Replace [Your Name] */}
          </p>
          <p className="text-base text-muted-foreground md:text-lg max-w-xl mx-auto md:mx-0">
            {professionalSummary}
          </p>
          <div className="flex justify-center md:justify-start gap-4 pt-4">
            <Button asChild size="lg">
               <Link href="#contact">
                Contact Me <ArrowRight className="ml-2 h-5 w-5" />
               </Link>
            </Button>
             <Button asChild variant="outline" size="lg">
               <Link href="#experience">
                View Experience
               </Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
           {/* Placeholder Image - Replace with a professional photo */}
          <Image
            src="https://picsum.photos/400/400"
            alt="Professional Headshot Placeholder"
            width={400}
            height={400}
            className="rounded-full shadow-lg border-4 border-primary/20 object-cover"
            data-ai-hint="professional headshot person"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
