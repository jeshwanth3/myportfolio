"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Calendar, MessageSquare, Linkedin } from 'lucide-react';
import Link from "next/link";

export function ContactSection() {
  const email = "jeshwanthgoud2@gmail.com";
  const linkedInUrl = "https://www.linkedin.com/in/jeshwanth-goud/";
  const calendlyUrl = "https://calendly.com/jeshwanthgoud2";

  return (
    <SectionWrapper id="contact" className="relative bg-gradient-to-b from-background via-card/10 to-background py-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] floating-animation"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] floating-animation" style={{ animationDelay: '2s' } as React.CSSProperties}></div>
      </div>

      <div className="relative z-10">
        <SectionTitle>
          <span className="inline-flex items-center gap-3">
            <MessageSquare className="h-8 w-8 text-primary" />
            Let's Build Something Great Together!
          </span>
        </SectionTitle>
        
        <p className="text-center text-muted-foreground text-sm sm:text-base md:text-lg mb-12 max-w-2xl mx-auto">
          Ready to discuss your next big product idea? Let's connect and create meaningful impact.
        </p>

        <Card className="max-w-4xl mx-auto relative overflow-hidden transition-all duration-500 hover:scale-[1.01] rounded-3xl bg-gradient-to-br from-card/95 via-card/85 to-background/90 border border-border/30 hover:border-primary/50 shadow-2xl hover:shadow-3xl backdrop-blur-lg">
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
          </div>

          <CardContent className="relative p-8 md:p-12 text-center space-y-10">
            <p className="text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed font-medium">
              Whether you have a project in mind, a question, or just want to chat, let's connect and explore how we can achieve great things together!
            </p>

            {/* Contact Options Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8">
              {/* Email */}
              <Link href={`mailto:${email}`} target="_blank" rel="noopener noreferrer" className="group">
                <div className="relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border/30 hover:border-primary/50 transition-all duration-300 hover:scale-[1.03] shadow-md hover:shadow-xl">
                  <div className="flex flex-col items-center gap-3">
                    <div className="p-3.5 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300 border border-primary/10 shadow-sm">
                      <Mail className="h-7 w-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="space-y-0.5 text-center">
                      <h3 className="font-bold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors duration-300">Email Me</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground/80">Quick response</p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </Link>

              {/* LinkedIn */}
              <Link href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="group">
                <div className="relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-border/30 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.03] shadow-md hover:shadow-xl">
                  <div className="flex flex-col items-center gap-3">
                    <div className="p-3.5 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300 border border-blue-500/10 shadow-sm">
                      <Linkedin className="h-7 w-7 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="space-y-0.5 text-center">
                      <h3 className="font-bold text-sm sm:text-base text-foreground group-hover:text-blue-500 transition-colors duration-300">LinkedIn</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground/80">Connect professionally</p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </Link>

              {/* Calendly */}
              <Link href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="group">
                <div className="relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-border/30 hover:border-emerald-500/50 transition-all duration-300 hover:scale-[1.03] shadow-md hover:shadow-xl">
                  <div className="flex flex-col items-center gap-3">
                    <div className="p-3.5 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 group-hover:from-emerald-500/30 group-hover:to-teal-500/30 transition-all duration-300 border border-emerald-500/10 shadow-sm">
                      <Calendar className="h-7 w-7 text-emerald-500 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="space-y-0.5 text-center">
                      <h3 className="font-bold text-sm sm:text-base text-foreground group-hover:text-emerald-500 transition-colors duration-300">Schedule Call</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground/80">Book a time slot</p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </Link>
            </div>

            {/* Call to Action */}
            <div className="pt-6">
              <Link href={`mailto:${email}`}>
                <Button
                  size="lg"
                  className="relative shadow-lg hover:shadow-2xl transition-all hover:scale-105 duration-300 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-bold text-sm sm:text-base px-8 sm:px-10 py-3 sm:py-3.5 rounded-xl group overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center gap-2 sm:gap-3">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                    Get In Touch
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
