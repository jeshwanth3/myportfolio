import Link from "next/link";

export function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="py-6 md:px-8 md:py-0 border-t bg-secondary/50">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
                    © {currentYear} [Your Name]. All rights reserved. {/* Replace [Your Name] */}
                </p>
                <p className="text-sm text-muted-foreground">
                    Built with <Link href="https://nextjs.org" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4 hover:text-primary">Next.js</Link> & <Link href="https://ui.shadcn.com/" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4 hover:text-primary">Shadcn UI</Link>.
                </p>
            </div>
        </footer>
    );
}
