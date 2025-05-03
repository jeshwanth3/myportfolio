import Image from 'next/image';
import { SectionWrapper } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const professionalSummary = "Detail-oriented and impact-driven Product Manager and Business Analyst with 3+ years of experience driving data-led decisions, building scalable cloud solutions, and delivering user-centric features. Skilled in leveraging analytics, AI tools, and cross-functional collaboration to launch impactful products across SaaS, fintech, and transportation domains.";
const yourName = "Sai Jeshwanth Goud Illuri"; // Updated name

export function SummarySection() {
  return (
    <SectionWrapper id="summary" className="bg-gradient-to-b from-background via-card/10 to-background/80 pt-20 md:pt-28 lg:pt-32">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-16 items-center">
        <div className="md:col-span-3 space-y-4 md:space-y-6 text-center md:text-left">
          <p className="text-base sm:text-lg text-muted-foreground md:text-xl lg:text-2xl max-w-xl mx-auto md:mx-0 font-normal">
             Hello, I'm
          </p>
           <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-foreground leading-tight">
            {yourName}
          </h1>
           {/* Updated title uses accent color and adjusted glow */}
           <h2 className="text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-accent animate-glow">
             Product Manager
           </h2>
          <p className="text-sm sm:text-base text-muted-foreground md:text-lg max-w-2xl mx-auto md:mx-0 leading-relaxed">
            {professionalSummary}
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4 md:pt-6">
            <Link href="#contact" passHref>
              {/* Default button uses primary background */}
              <Button size="lg" className="shadow-md hover:shadow-lg transition-shadow hover:scale-105 transform duration-200 w-full sm:w-auto">
                Contact Me <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="#experience" passHref>
              {/* Outline button hover uses accent color */}
              <Button variant="outline" size="lg" className="shadow-sm hover:shadow-md transition-shadow hover:scale-105 transform duration-200 bg-card/50 hover:bg-accent/10 hover:text-accent dark:bg-secondary/50 dark:hover:bg-accent/15 dark:hover:text-accent w-full sm:w-auto">
                View Experience
              </Button>
            </Link>
          </div>
        </div>
        <div className="md:col-span-2 flex justify-center items-center md:justify-end order-first md:order-last">
           {/* Placeholder Image - Use accent border */}
          <Image
            src="https://picsum.photos/500/500"
            alt="Sai Jeshwanth Goud Illuri - Professional Headshot"
            width={350} // Keep size consistent
            height={350}
            className="rounded-full mac-shadow border-4 border-accent/40 dark:border-accent/50 object-cover aspect-square w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px]" // Ensure border uses accent theme color
            data-ai-hint="professional headshot person dark background modern studio lighting nebula purple teal"
            priority // Load image early
          />
        </div>
      </div>
    </SectionWrapper>
  );
}


    