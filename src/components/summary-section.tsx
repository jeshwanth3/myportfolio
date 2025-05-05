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
    <SectionWrapper id="summary" className="bg-gradient-to-b from-background via-card/5 to-background/90 pt-24 md:pt-32 lg:pt-36"> {/* Adjusted padding and gradient */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 lg:gap-16 items-center"> {/* Increased gap */}
        {/* Text Content Column */}
        <div className="md:col-span-3 space-y-5 md:space-y-6 text-center md:text-left"> {/* Adjusted spacing */}
          <p className="text-lg sm:text-xl text-muted-foreground md:text-2xl lg:text-2xl max-w-xl mx-auto md:mx-0 font-light"> {/* Adjusted size/weight */}
             Hello, I&apos;m
          </p>
           {/* Larger Name */}
           <h1 className="text-4xl sm:text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl text-foreground leading-tight"> {/* Adjusted font-weight */}
            {yourName}
          </h1>
           {/* Themed Primary Color for Title with Glow */}
           <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight md:text-5xl lg:text-5xl text-primary animate-glow"> {/* Adjusted size/weight */}
             Product Manager
           </h2>
           {/* Increased Summary Text Size and Leading */}
          <p className="text-base sm:text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto md:mx-0 leading-relaxed"> {/* Adjusted size */}
            {professionalSummary}
          </p>
          {/* Buttons with increased gap and padding */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-6 md:pt-8"> {/* Increased spacing */}
            <Link href="#contact" passHref>
              {/* Primary button uses primary theme color, added subtle glow */}
              <Button size="lg" className="shadow-md hover:shadow-lg transition-shadow hover:scale-[1.03] transform duration-300 w-full sm:w-auto button-glow"> {/* Added button-glow class */}
                Contact Me <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="#experience" passHref>
              {/* Outline button uses accent color on hover */}
              <Button variant="outline" size="lg" className="shadow-sm hover:shadow-md transition-shadow hover:scale-[1.03] transform duration-300 bg-card/50 hover:bg-accent/90 hover:text-accent-foreground dark:bg-secondary/50 dark:hover:bg-accent dark:hover:text-accent-foreground w-full sm:w-auto">
                View Experience
              </Button>
            </Link>
          </div>
        </div>
        {/* Image Column */}
        <div className="md:col-span-2 flex justify-center items-center md:justify-end order-first md:order-last">
           {/* Adjusted Image Size and Border */}
          <Image 
            src="https://drive.google.com/file/d/15Ix8YbF3RSkYWygk_7Mau_Rtlx4-9xYo/view?usp=sharing" 
            alt="Professional headshot of Sai Jeshwanth Goud Illuri" 
            width={380} 
            height={380} 
            sizes="(max-width: 768px) 70vw, (max-width: 1024px) 380px, 380px" 
            className="rounded-full mac-shadow border-4 border-primary/20 dark:border-primary/30 object-cover aspect-square w-[65vw] max-w-[260px] h-auto sm:max-w-[320px] md:max-w-[380px]" 
            priority 
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
