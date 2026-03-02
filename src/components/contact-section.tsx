"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Calendar, MessageSquare, Linkedin } from 'lucide-react';
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { MouseEvent } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

function ContactCard({ children, className }: { children: React.ReactNode, className?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseMove={handleMouseMove}
      className={`relative group overflow-hidden rounded-2xl ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.15),
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </motion.div>
  );
}

export function ContactSection() {
  const email = "jeshwanthgoud2@gmail.com";
  const linkedInUrl = "https://www.linkedin.com/in/jeshwanth-goud/";
  const calendlyUrl = "https://calendly.com/jeshwanthgoud2";

  return (
    <SectionWrapper id="contact" className="relative bg-gradient-to-b from-background via-card/10 to-background py-24 overflow-hidden min-h-[90vh] flex flex-col justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[150px]"
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <SectionTitle>
            <span className="inline-flex items-center gap-3">
              <MessageSquare className="h-8 w-8 text-primary" />
              Let's Build Something Great Together!
            </span>
          </SectionTitle>

          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
            Ready to discuss your next big product idea? Let's connect and create meaningful impact.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Card className="max-w-4xl mx-auto relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-card/80 via-card/60 to-background/90 border border-border/40 hover:border-primary/40 shadow-2xl backdrop-blur-xl group/main transition-all duration-500">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary opacity-80 z-20"></div>

            <CardContent className="relative p-8 md:p-14 text-center space-y-12 z-10">
              <motion.p variants={itemVariants} className="text-xl md:text-2xl text-foreground font-medium max-w-3xl mx-auto leading-relaxed">
                Whether you have a project in mind, a question, or just want to chat, let's connect and explore how we can achieve great things together!
              </motion.p>

              {/* Contact Options Grid */}
              <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10">
                {/* Email */}
                <Link href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
                  <ContactCard className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/50 shadow-lg">
                    <div className="p-8 flex flex-col items-center gap-4">
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300 border border-primary/10 shadow-inner">
                        <Mail className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="space-y-1 text-center">
                        <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">Email Me</h3>
                        <p className="text-sm text-primary/80 font-medium">Quick response</p>
                      </div>
                    </div>
                  </ContactCard>
                </Link>

                {/* LinkedIn */}
                <Link href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                  <ContactCard className="bg-gradient-to-br from-[#0a66c2]/10 to-[#004182]/10 border border-[#0a66c2]/20 hover:border-[#0a66c2]/50 shadow-lg">
                    <div className="p-8 flex flex-col items-center gap-4">
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-[#0a66c2]/20 to-[#004182]/20 group-hover:from-[#0a66c2]/30 group-hover:to-[#004182]/30 transition-all duration-300 border border-[#0a66c2]/10 shadow-inner">
                        <Linkedin className="h-8 w-8 text-[#0a66c2] group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="space-y-1 text-center">
                        <h3 className="font-bold text-lg text-foreground group-hover:text-[#0a66c2] transition-colors duration-300">LinkedIn</h3>
                        <p className="text-sm text-[#0a66c2]/80 font-medium">Connect professionally</p>
                      </div>
                    </div>
                  </ContactCard>
                </Link>

                {/* Calendly */}
                <Link href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                  <ContactCard className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 hover:border-emerald-500/50 shadow-lg">
                    <div className="p-8 flex flex-col items-center gap-4">
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 group-hover:from-emerald-500/30 group-hover:to-teal-500/30 transition-all duration-300 border border-emerald-500/10 shadow-inner">
                        <Calendar className="h-8 w-8 text-emerald-500 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="space-y-1 text-center">
                        <h3 className="font-bold text-lg text-foreground group-hover:text-emerald-500 transition-colors duration-300">Schedule Call</h3>
                        <p className="text-sm text-emerald-500/80 font-medium">Book a time slot</p>
                      </div>
                    </div>
                  </ContactCard>
                </Link>
              </motion.div>

              {/* Call to Action */}
              <motion.div variants={itemVariants} className="pt-10">
                <Link href={`mailto:${email}`}>
                  <Button
                    size="lg"
                    className="relative shadow-[0_4px_20px_rgba(0,149,255,0.3)] hover:shadow-[0_8px_40px_rgba(0,149,255,0.5)] transition-all hover:-translate-y-1 duration-300 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-lg px-12 py-8 rounded-2xl group overflow-hidden border border-primary/50"
                  >
                    <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></span>
                    <span className="relative flex items-center gap-3 z-10">
                      <Mail className="h-6 w-6" />
                      Get In Touch
                      <motion.span
                        className="inline-block"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                  </Button>
                </Link>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
