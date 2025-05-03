'use client';

import { useEffect, useState } from 'react';

export function Footer() {
    const [currentYear, setCurrentYear] = useState<number | null>(null);
    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="py-4 md:px-8 border-t border-border/20 bg-card/30 dark:bg-secondary/30 mt-auto backdrop-blur-sm">
            {/* Changed justify-between to justify-center */}
            <div className="container flex flex-col items-center justify-center gap-2 md:h-12 text-xs md:text-sm max-w-7xl mx-auto px-4 md:px-6">
                {/* Removed md:text-left, ensured text-center */}
                <p className="text-balance text-center text-muted-foreground">
                     © {currentYear !== null ? currentYear : '...'} Sai Jeshwanth Goud Illuri. All rights reserved.
                </p>
                {/* Removed the "Built with..." paragraph */}
            </div>
        </footer>
    );
}
