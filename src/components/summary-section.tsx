"use client";

import Image from 'next/image';
import { SectionWrapper } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SummaryStats } from '@/components/summary-stats';
import { TypedTitle } from '@/components/typed-title';
import { SectionNavButton } from '@/components/section-nav-button';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const professionalSummary = "Hello! I am a PM with a passion for building user-centric solutions and driving business growth. Experienced in leading cross-functional teams, leveraging data-driven insights, and delivering innovative products that solve real-world problems. Let's connect to create meaningful impact together.";

const yourName = "Sai Jeshwanth Goud Illuri";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 300, damping: 24 }
  }
};

export function SummarySection() {
  // 3D Tilt effect for Hero Image
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const rotateX = useTransform(smoothY, [0, 1], [15, -15]);
  const rotateY = useTransform(smoothX, [0, 1], [-15, 15]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    x.set(mouseX / rect.width);
    y.set(mouseY / rect.height);
  }

  function handleMouseLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <SectionWrapper id="summary" className="relative bg-gradient-to-b from-background via-card/5 to-background/90 pt-10 md:pt-16 lg:pt-20 pb-16 md:pb-20 lg:pb-24 overflow-hidden min-h-[95vh] flex flex-col justify-center">
      {/* Animated background mesh gradient using Framer Motion */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 60, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px]"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center w-full"
      >
        <div className="lg:col-span-3 space-y-6 text-center lg:text-left">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(0,149,255,0.8)] px-[4px]"></span>
            <p className="text-[var(--small-size)] font-semibold text-primary">
              Available for Product Management opportunities
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-3">
            <p className="text-[var(--body-size)] font-medium text-muted-foreground tracking-wide uppercase">
              Hi there, I'm
            </p>
            <h1 className="text-[var(--h1-size)] font-extrabold tracking-tight leading-[1.15] pb-2">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-text-slow shadow-sm">
                {yourName}
              </span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <TypedTitle
              className="text-[var(--h3-size)] font-bold tracking-tight text-foreground/90 glow-text"
              text="Product Manager"
              glowColor="hsl(var(--primary))"
              typingDelay={1000}
            />
          </motion.div>

          <motion.p variants={itemVariants} className="text-[var(--large-size)] text-muted-foreground leading-[1.8] max-w-2xl mx-auto lg:mx-0">
            {professionalSummary}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-6 md:pt-8 w-full">
            <Link href="#contact" passHref className="w-full sm:w-auto">
              <Button
                size="lg"
                className="relative overflow-hidden w-full sm:w-auto bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-[var(--small-size)] px-8 py-6 rounded-2xl group transition-all duration-300 hover:scale-105 shadow-[0_4px_20px_rgba(0,149,255,0.3)] hover:shadow-[0_8px_30px_rgba(0,149,255,0.5)] border border-primary/50"
              >
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Let's Connect!
                  <Mail className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                </span>
              </Button>
            </Link>
            <Link href="#experience" passHref className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto bg-card/40 backdrop-blur-xl border-2 border-primary/20 hover:border-primary/60 font-semibold text-[var(--small-size)] px-8 py-6 rounded-2xl group transition-all duration-300 hover:scale-105 hover:bg-primary/10 hover:text-primary shadow-lg"
              >
                <span className="flex items-center gap-2">
                  View My Journey
                  <ArrowDown className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
                </span>
              </Button>
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-8 md:pt-12 lg:pt-14">
            <SummaryStats />
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="lg:col-span-2 flex justify-center lg:justify-end items-center order-first lg:order-last"
        >
          <motion.div
            className="relative group perspective-1000 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[420px] lg:h-[420px]"
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          >
            {/* Decorative elements behind the image */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/40 rounded-full blur-3xl group-hover:bg-primary/60 transition-colors duration-500"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-accent/40 rounded-full blur-3xl group-hover:bg-accent/60 transition-colors duration-500"></div>

            <motion.div
              className="relative w-full h-full rounded-[2rem] border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden bg-card/50 backdrop-blur-md"
              style={{ transform: "translateZ(30px)" }}
            >
              <Image
                src="/profile_photo.jpeg"
                alt="Professional headshot of Sai Jeshwanth Goud Illuri"
                fill
                quality={100}
                priority
                className="object-cover transition-all duration-700 filter group-hover:scale-110 saturate-[1.1] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 mix-blend-overlay"></div>
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-[2rem] border-2 border-white/0 group-hover:border-white/30 transition-all duration-500 z-30"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 1, type: "spring" }}
        className="w-full flex justify-center pt-10 relative z-20"
      >
        <SectionNavButton nextSection="experience" />
      </motion.div>
    </SectionWrapper>
  );
}