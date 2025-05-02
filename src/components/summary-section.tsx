import Image from 'next/image';
import { SectionWrapper } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const professionalSummary = "Detail-oriented and impact-driven Product Manager and Business Analyst with 3+ years of experience driving data-led decisions, building scalable cloud solutions, and delivering user-centric features. Skilled in leveraging analytics, AI tools, and cross-functional collaboration to launch impactful products across SaaS, fintech, and transportation domains.";
const yourName = "Sai Jeshwanth Goud Illuri"; // Updated name

export function SummarySection() {
  return (
    <SectionWrapper id="summary" className="bg-gradient-to-b from-background to-background/80 pt-16 md:pt-24 lg:pt-28"> {/* Adjusted padding */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12 items-center">
        <div className="md:col-span-3 space-y-5 text-center md:text-left"> {/* Increased spacing */}
          <p className="text-xl text-muted-foreground md:text-2xl lg:text-3xl max-w-xl mx-auto md:mx-0 font-light">
             Hello, I'm
          </p>
           <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-foreground leading-tight">
            {yourName}
          </h1>
           <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl text-primary animate-glow">
             Product Manager
           </h2>
          <p className="text-base text-muted-foreground md:text-lg max-w-2xl mx-auto md:mx-0 leading-relaxed">
            {professionalSummary}
          </p>
          <div className="flex justify-center md:justify-start gap-4 pt-6"> {/* Increased padding top */}
            <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-shadow">
               <Link href="#contact">
                Contact Me <ArrowRight className="ml-2 h-5 w-5" />
               </Link>
            </Button>
             <Button asChild variant="outline" size="lg" className="shadow-sm hover:shadow-md transition-shadow">
               <Link href="#experience">
                View Experience
               </Link>
            </Button>
          </div>
        </div>
        <div className="md:col-span-2 flex justify-center items-center md:justify-end">
           {/* Placeholder Image - Replace with a professional photo */}
          <Image
            src="https://picsum.photos/500/500" // Increased size
            alt="Professional Headshot Placeholder"
            width={500} // Increased size
            height={500} // Increased size
            className="rounded-full mac-shadow border-4 border-primary/30 dark:border-primary/40 object-cover aspect-square" // Use mac-shadow
            data-ai-hint="professional headshot person dark background" // Updated hint for better dark mode match
            priority // Load image sooner
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
