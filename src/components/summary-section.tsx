import Image from 'next/image';
import { SectionWrapper } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const professionalSummary = "Detail-oriented and impact-driven Product Manager and Business Analyst with 3+ years of experience driving data-led decisions, building scalable cloud solutions, and delivering user-centric features. Skilled in leveraging analytics, AI tools, and cross-functional collaboration to launch impactful products across SaaS, fintech, and transportation domains.";
const yourName = "Sai Jeshwanth Goud Illuri";

export function SummarySection() {
  return (
    // Use a subtle gradient and increased padding
    <SectionWrapper id="summary" className="bg-gradient-to-b from-background via-card/10 to-background/80 pt-20 md:pt-28 lg:pt-32">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-16 items-center">
        {/* Text Content Column */}
        <div className="md:col-span-3 space-y-4 md:space-y-6 text-center md:text-left">
          <p className="text-base sm:text-lg text-muted-foreground md:text-xl lg:text-2xl max-w-xl mx-auto md:mx-0 font-normal">
             Hello, I&apos;m
          </p>
           {/* Larger Name */}
           <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-foreground leading-tight">
            {yourName}
          </h1>
           {/* Themed Primary Color for Title with Glow */}
           <h2 className="text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-primary animate-glow">
             Product Manager
           </h2>
           {/* Increased Summary Text Size and Leading */}
          <p className="text-sm sm:text-base text-muted-foreground md:text-lg max-w-2xl mx-auto md:mx-0 leading-relaxed">
            {professionalSummary}
          </p>
          {/* Buttons with increased gap and padding */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4 md:pt-6">
            <Link href="#contact" passHref>
              {/* Primary button uses primary theme color */}
              <Button size="lg" className="shadow-md hover:shadow-lg transition-shadow hover:scale-105 transform duration-200 w-full sm:w-auto animate-glow"> {/* Added animate-glow */}
                Contact Me <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="#experience" passHref>
              {/* Outline button uses accent color on hover */}
              <Button variant="outline" size="lg" className="shadow-sm hover:shadow-md transition-shadow hover:scale-105 transform duration-200 bg-card/50 hover:bg-accent hover:text-accent-foreground dark:bg-secondary/50 dark:hover:bg-accent dark:hover:text-accent-foreground w-full sm:w-auto">
                View Experience
              </Button>
            </Link>
          </div>
        </div>
        {/* Image Column */}
        <div className="md:col-span-2 flex justify-center items-center md:justify-end order-first md:order-last">
           {/* Increased Image Size and Border, adjusted mobile sizes */}
          <Image
            src="https://picsum.photos/600/600" // Slightly larger source image
            alt="Professional headshot of Sai Jeshwanth Goud Illuri" // More descriptive alt text
            width={400} // Adjusted width
            height={400} // Adjusted height
            sizes="(max-width: 768px) 70vw, (max-width: 1024px) 400px, 400px" // Added sizes attribute
            // More responsive sizing: smaller base, scales up
            className="rounded-full mac-shadow border-4 border-primary/30 dark:border-primary/40 object-cover aspect-square w-[70vw] max-w-[280px] h-auto sm:max-w-[350px] md:max-w-[400px]"
            data-ai-hint="professional headshot person dark background modern studio lighting nebula purple teal"
            priority // Load image early
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
