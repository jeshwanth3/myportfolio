'use client';

import Link from "next/link";
import { useEffect, useState } from 'react';

export function Footer() {
    const [currentYear, setCurrentYear] = useState<number | null>(null);
    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="py-4 md:px-8 border-t border-border/20 bg-card/30 dark:bg-secondary/30 mt-auto backdrop-blur-sm">
            <div className="container flex flex-col items-center justify-between gap-2 md:h-12 md:flex-row text-xs md:text-sm max-w-7xl mx-auto px-4 md:px-6">
                <p className="text-balance text-center text-muted-foreground md:text-left">
                     © {currentYear !== null ? currentYear : '...'} Sai Jeshwanth Goud Illuri. All rights reserved.
                </p>
                <p className="text-muted-foreground">
                    {/* Removed hover:text-primary */}
                    Built with <Link href="https://nextjs.org" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4 hover:text-foreground transition-colors">Next.js</Link> & <Link href="https://ui.shadcn.com/" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4 hover:text-foreground transition-colors">Shadcn UI</Link>.
                </p>
            </div>
        </footer>
    );
}
