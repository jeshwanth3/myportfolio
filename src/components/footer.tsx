'use client';

import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Footer() {
    const [currentYear, setCurrentYear] = useState<number | null>(null);
    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="py-6 md:px-8 border-t border-border/20 bg-card/30 dark:bg-secondary/30 mt-auto backdrop-blur-sm">
            <div className="container flex flex-col items-center justify-center gap-2 md:h-12 max-w-7xl mx-auto px-4 md:px-6">
                 <p className="text-balance text-center text-muted-foreground text-sm md:text-base flex items-center gap-1.5">
                 {currentYear !== null ? currentYear : '...'}. Made with <Heart className="h-4 w-4 fill-red-500 text-red-500" /> by Sai Jeshwanth
                </p>
                {/* Removed the copyright text to only show the "Made with love" message */}
                 {/*
                 <p className="text-balance text-center text-muted-foreground text-sm md:text-base">
                     © {currentYear !== null ? currentYear : '...'} Sai Jeshwanth Goud Illuri. All rights reserved.
                 </p>
                 */}
            </div>
        </footer>
    );
}
