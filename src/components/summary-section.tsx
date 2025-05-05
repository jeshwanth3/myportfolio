
import Image from 'next/image';
import { SectionWrapper } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from 'lucide-react'; // Added Mail icon
import Link from 'next/link';
import { cn } from '@/lib/utils'; // Import cn utility

const professionalSummary = "Detail-oriented and impact-driven Product Manager and Business Analyst with 3+ years of experience driving data-led decisions, building scalable cloud solutions, and delivering user-centric features. Skilled in leveraging analytics, AI tools, and cross-functional collaboration to launch impactful products across SaaS, fintech, and transportation domains.";
const yourName = "Sai Jeshwanth Goud Illuri";

export function SummarySection() {
  return (
    // Reduced top padding significantly, adjusted gradient
    <SectionWrapper id="summary" className="bg-gradient-to-b from-background via-background/90 to-card/10 pt-10 md:pt-12 lg:pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center"> {/* Changed md:grid-cols-5 to lg:grid-cols-5 */}
        {/* Text Content Area - Adjusted spacing and font sizes */}
        <div className="lg:col-span-3 space-y-5 md:space-y-6 text-center lg:text-left"> {/* Changed md:col-span-3 to lg:col-span-3 and md:text-left to lg:text-left */}
          <p className="text-lg sm:text-xl text-muted-foreground md:text-xl lg:text-2xl max-w-xl mx-auto lg:mx-0 font-light"> {/* Refined size/weight, lg:mx-0 */}
             Hello, I&apos;m
          </p>
           {/* Name - Larger, Gradient Text */}
           <h1 className={cn(
               "text-4xl sm:text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60 animate-gradient-text-slow", // Use primary gradient
               "leading-tight mb-2" // Added leading-tight and margin-bottom
             )}
           >
            {yourName}
          </h1>
           {/* Title - Refined glow and size, uses PRIMARY color */}
           <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight md:text-5xl lg:text-5xl text-primary animate-glow mb-4"> {/* Adjusted size, uses text-glow, added margin-bottom */}
             Product Manager
           </h2>
          {/* Summary Text - Improved readability */}
          <p className="text-base sm:text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed"> {/* Adjusted size, lg:mx-0 */}
            {professionalSummary}
          </p>
          {/* Buttons - Enhanced styling and spacing */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-6 md:pt-8"> {/* Increased top padding, lg:justify-start */}
            <Link href="#contact" passHref>
              <Button size="lg" className="shadow-md hover:shadow-lg transition-all hover:scale-[1.03] transform duration-300 w-full sm:w-auto button-glow bg-primary text-primary-foreground hover:bg-primary/90"> {/* Added button-glow class */}
                Contact Me <Mail className="ml-2 h-5 w-5" /> {/* Changed icon */}
              </Button>
            </Link>
            <Link href="#experience" passHref>
              <Button variant="outline" size="lg" className="shadow-sm hover:shadow-md transition-all hover:scale-[1.03] transform duration-300 bg-card/50 hover:bg-primary/10 hover:text-primary dark:bg-secondary/50 dark:hover:bg-primary/15 dark:hover:text-primary w-full sm:w-auto border-border hover:border-primary/60">
                View Experience <ArrowRight className="ml-2 h-5 w-5 opacity-80" /> {/* Added icon */}
              </Button>
            </Link>
          </div>
        </div>
        {/* Image Area - Adjusted border and shadow */}
        <div className="lg:col-span-2 flex justify-center items-center lg:justify-end order-first lg:order-last"> {/* Changed md:col-span-2 to lg:col-span-2, lg:justify-end, lg:order-last */}
           {/* Adjusted Image Size and Border, added hover effect */}
          <div className="relative group">
             <Image
               src="https://drive.google.com/uc?export=view&id=15Ix8YbF3RSkYWygk_7Mau_Rtlx4-9xYo" // Use direct view link
               alt="Professional headshot of Sai Jeshwanth Goud Illuri"
               width={380} // Keep size reasonable
               height={380}
               sizes="(max-width: 768px) 70vw, (max-width: 1024px) 320px, 380px" // Responsive sizes adjusted
               className="rounded-full mac-shadow border-4 border-primary/30 dark:border-primary/40 object-cover aspect-square w-[65vw] max-w-[260px] h-auto sm:max-w-[320px] lg:max-w-[380px] transition-all duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl" // Refined border, max-widths, added group-hover effects
               priority // Load image sooner
               data-ai-hint="professional headshot person dark background studio lighting nebula purple teal"
             />
             {/* Optional: Add a subtle glow effect behind the image on hover */}
             <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-primary/20 dark:group-hover:border-primary/30 transition-all duration-500 ease-out scale-105 group-hover:scale-110 blur-md opacity-0 group-hover:opacity-100 -z-10"></div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

