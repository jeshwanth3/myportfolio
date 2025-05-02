import Image from 'next/image';
import { SectionWrapper } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const professionalSummary = "Detail-oriented and impact-driven Product Manager and Business Analyst with 3+ years of experience driving data-led decisions, building scalable cloud solutions, and delivering user-centric features. Skilled in leveraging analytics, AI tools, and cross-functional collaboration to launch impactful products across SaaS, fintech, and transportation domains.";
const yourName = "Sai Jeshwanth Goud Illuri"; // Updated name

export function SummarySection() {
  return (
    <SectionWrapper id="summary" className="bg-gradient-to-b from-background via-card/10 to-background/80 pt-20 md:pt-28 lg:pt-32"> {/* Adjusted padding and background */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-16 items-center"> {/* Increased gap */}
        <div className="md:col-span-3 space-y-4 md:space-y-6 text-center md:text-left"> {/* Increased spacing */}
          <p className="text-lg text-muted-foreground md:text-xl lg:text-2xl max-w-xl mx-auto md:mx-0 font-normal"> {/* Adjusted size/weight */}
             Hello, I'm
          </p>
           <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight"> {/* Adjusted size/weight */}
            {yourName}
          </h1>
           <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-primary animate-glow"> {/* Increased size/weight */}
             Product Manager
           </h2>
          <p className="text-base text-muted-foreground md:text-lg max-w-2xl mx-auto md:mx-0 leading-relaxed">
            {professionalSummary}
          </p>
          <div className="flex justify-center md:justify-start gap-4 pt-4 md:pt-6"> {/* Adjusted padding top */}
            <Link href="#contact" passHref>
              <Button size="lg" className="shadow-md hover:shadow-lg transition-shadow hover:scale-105 transform duration-200">
                Contact Me <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="#experience" passHref>
              <Button variant="outline" size="lg" className="shadow-sm hover:shadow-md transition-shadow hover:scale-105 transform duration-200 bg-card/50 hover:bg-accent/10 dark:bg-secondary/50 dark:hover:bg-accent/20"> {/* Added background */}
                View Experience
              </Button>
            </Link>
          </div>
        </div>
        <div className="md:col-span-2 flex justify-center items-center md:justify-end order-first md:order-last"> {/* Reorder image on mobile */}
           {/* Placeholder Image - Replace with a professional photo */}
          <Image
            src="https://picsum.photos/500/500" // Kept size
            alt="Sai Jeshwanth Goud Illuri - Professional Headshot" // Updated alt text
            width={400} // Adjusted size for balance
            height={400} // Adjusted size for balance
            className="rounded-full mac-shadow border-4 border-primary/20 dark:border-primary/30 object-cover aspect-square" // Use mac-shadow, adjusted border
            data-ai-hint="professional headshot person dark background studio lighting" // Updated hint
            priority // Load image sooner
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
