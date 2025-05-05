import Image from 'next/image';
import { SectionWrapper } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const professionalSummary = "Detail-oriented and impact-driven Product Manager and Business Analyst with 3+ years of experience driving data-led decisions, building scalable cloud solutions, and delivering user-centric features. Skilled in leveraging analytics, AI tools, and cross-functional collaboration to launch impactful products across SaaS, fintech, and transportation domains.";
const yourName = "Sai Jeshwanth Goud Illuri";

export function SummarySection() {
  return (
    // Adjusted background gradient and padding
    <SectionWrapper id="summary" className="bg-gradient-to-b from-background via-card/5 to-background/90 pt-24 md:pt-32 lg:pt-36">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 lg:gap-16 items-center">
        {/* Text Content Area - Adjusted spacing and font sizes */}
        <div className="md:col-span-3 space-y-5 md:space-y-6 text-center md:text-left">
          <p className="text-lg sm:text-xl text-muted-foreground md:text-xl lg:text-2xl max-w-xl mx-auto md:mx-0 font-light"> {/* Refined size/weight */}
             Hello, I&apos;m
          </p>
           {/* Name - Increased visual weight */}
           <h1 className="text-4xl sm:text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl text-foreground leading-tight">
            {yourName}
          </h1>
           {/* Title - Refined glow and size */}
           <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight md:text-5xl lg:text-5xl text-primary animate-glow"> {/* Adjusted size, uses text-glow from globals */}
             Product Manager
           </h2>
          {/* Summary Text - Improved readability */}
          <p className="text-base sm:text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto md:mx-0 leading-relaxed"> {/* Adjusted size */}
            {professionalSummary}
          </p>
          {/* Buttons - Enhanced styling and spacing */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-6 md:pt-8"> {/* Increased top padding */}
            <Link href="#contact" passHref>
              <Button size="lg" className="shadow-md hover:shadow-lg transition-shadow hover:scale-[1.03] transform duration-300 w-full sm:w-auto button-glow"> {/* Added button-glow class */}
                Contact Me <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="#experience" passHref>
              <Button variant="outline" size="lg" className="shadow-sm hover:shadow-md transition-shadow hover:scale-[1.03] transform duration-300 bg-card/50 hover:bg-accent/90 hover:text-accent-foreground dark:bg-secondary/50 dark:hover:bg-accent dark:hover:text-accent-foreground w-full sm:w-auto">
                View Experience
              </Button>
            </Link>
          </div>
        </div>
        {/* Image Area - Adjusted border and shadow */}
        <div className="md:col-span-2 flex justify-center items-center md:justify-end order-first md:order-last">
           {/* Adjusted Image Size and Border */}
          <Image
            src="https://drive.google.com/uc?export=view&id=15Ix8YbF3RSkYWygk_7Mau_Rtlx4-9xYo" // Use direct view link
            alt="Professional headshot of Sai Jeshwanth Goud Illuri"
            width={380} // Slightly increased size
            height={380}
            sizes="(max-width: 768px) 70vw, (max-width: 1024px) 380px, 380px" // Responsive sizes
            className="rounded-full mac-shadow border-4 border-primary/30 dark:border-primary/40 object-cover aspect-square w-[65vw] max-w-[260px] h-auto sm:max-w-[320px] md:max-w-[380px]" // Refined border and max-widths
            priority // Load image sooner
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
