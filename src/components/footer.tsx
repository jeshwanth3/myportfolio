import Link from "next/link";
import { useEffect, useState } from 'react'; // Import useEffect and useState

export function Footer() {
    // Use state and effect to avoid hydration errors with Date
    const [currentYear, setCurrentYear] = useState<number | null>(null);
    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="py-4 md:px-6 border-t border-border/40 bg-secondary/80 dark:bg-card/80 mt-auto"> {/* Adjusted padding and background */}
            <div className="container flex flex-col items-center justify-between gap-2 md:h-16 md:flex-row text-xs md:text-sm"> {/* Adjusted height and text size */}
                <p className="text-balance text-center text-muted-foreground md:text-left">
                     © {currentYear !== null ? currentYear : '...'} [Your Name]. All rights reserved. {/* Replace [Your Name] & handle loading state */}
                </p>
                <p className="text-muted-foreground">
                    Built with <Link href="https://nextjs.org" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4 hover:text-primary">Next.js</Link> & <Link href="https://ui.shadcn.com/" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4 hover:text-primary">Shadcn UI</Link>.
                </p>
            </div>
        </footer>
    );
}