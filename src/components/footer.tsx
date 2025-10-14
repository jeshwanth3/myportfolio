'use client';

import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export function Footer() {
    const [currentYear, setCurrentYear] = useState<number | null>(null);
    
    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    const socialLinks = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/jeshwanth-goud/',
            icon: <Linkedin className="h-5 w-5" />
        },
        {
            name: 'GitHub',
            url: 'https://github.com/jeshwanth3',
            icon: <Github className="h-5 w-5" />
        },
        {
            name: 'Email',
            url: 'mailto:jeshwanthgoud2@gmail.com',
            icon: <Mail className="h-5 w-5" />
        }
    ];

    return (
        <footer className="relative py-8 md:py-12 border-t border-border/30 bg-gradient-to-b from-card/20 to-background mt-auto backdrop-blur-md overflow-hidden">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="container relative z-10 flex flex-col items-center justify-center gap-6 max-w-7xl mx-auto px-4 md:px-6">
                {/* Social Links */}
                <div className="flex items-center gap-4">
                    {socialLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-3 rounded-xl bg-card/50 hover:bg-primary/10 border border-border/30 hover:border-primary/50 transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-lg"
                            aria-label={link.name}
                        >
                            <span className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                                {link.icon}
                            </span>
                        </Link>
                    ))}
                </div>

                {/* Divider */}
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-full"></div>

                {/* Copyright */}
                <div className="text-center space-y-2">
                    <p className="text-sm md:text-base text-muted-foreground flex items-center gap-2 justify-center">
                        Made with 
                        <Heart className="h-4 w-4 fill-red-500 text-red-500 animate-pulse" /> 
                        by 
                        <span className="font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            Sai Jeshwanth
                        </span>
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground/70">
                        © {currentYear !== null ? currentYear : '...'} All rights reserved.
                    </p>
                </div>

                {/* Back to top hint */}
                <Link 
                    href="#summary" 
                    className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-1 group"
                >
                    <span>Back to top</span>
                    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1">↑</span>
                </Link>
            </div>
        </footer>
    );
}
