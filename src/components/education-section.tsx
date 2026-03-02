"use client";

import { GraduationCap, Award, Calendar } from 'lucide-react';
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { SectionNavButton } from "@/components/section-nav-button";
import { Card } from "@/components/ui/card";
import React from "react";
import { cn } from "@/lib/utils";
import Image from 'next/image';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { MouseEvent } from 'react';

const education = [
	{
		id: "edu1",
		degree: "Master of Business Administration (STEM MBA)",
		institution: "Ivy College of Business, Iowa State University",
		duration: "Aug 2023 - May 2025",
		imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Iowa_State_Cyclones_logo.svg",
		color: "from-red-500/10 via-yellow-500/10 to-red-500/10",
	},
	{
		id: "edu2",
		degree: "Master of Science in Information Systems (STEM)",
		institution: "Ivy College of Business, Iowa State University",
		duration: "Aug 2024 - May 2025",
		imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Iowa_State_Cyclones_logo.svg",
		color: "from-blue-500/10 via-cyan-500/10 to-blue-500/10",
	},
	{
		id: "edu3",
		degree: "Bachelor of Technology, Computer Science",
		institution: "Pragati Engineering College (JNTUK)",
		duration: "2017 - 2021",
		imageUrl: "/pragati_logo.png",
		color: "from-purple-500/10 via-pink-500/10 to-purple-500/10",
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2
		}
	}
};

const cardVariants = {
	hidden: { opacity: 0, x: -50 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { type: "spring", stiffness: 200, damping: 25 }
	}
};

function EducationCard({ edu }: { edu: typeof education[0] }) {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
		const { left, top } = currentTarget.getBoundingClientRect();
		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}

	return (
		<motion.div
			variants={cardVariants}
			whileHover={{ scale: 1.01, x: 10 }}
			onMouseMove={handleMouseMove}
			className={cn(
				"group relative overflow-hidden rounded-[2rem] bg-gradient-to-br",
				edu.color,
				"from-card/95 via-card/80 to-background/90 border border-border/40 hover:border-primary/50 shadow-xl hover:shadow-2xl backdrop-blur-xl transition-all duration-300"
			)}
		>
			<motion.div
				className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-500 group-hover:opacity-100 z-10"
				style={{
					background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(0,149,255,0.1),
              transparent 80%
            )
          `,
				}}
			/>

			{/* Shimmer effect on hover */}
			<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
				<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
			</div>

			<div className="relative p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 z-20">
				{/* University Logo */}
				<div className="relative shrink-0">
					<div className={cn(
						"relative bg-background/90 backdrop-blur-md rounded-2xl p-4 shadow-lg group-hover:shadow-[0_0_20px_rgba(0,149,255,0.3)] transition-all duration-500 border border-border/50 group-hover:border-primary/40 flex items-center justify-center",
						edu.id === 'edu3' ? "w-24 h-24 md:w-28 md:h-28" : "w-20 h-20 md:w-24 md:h-24"
					)}>
						{edu.imageUrl ? (
							<Image
								src={edu.imageUrl}
								alt={`${edu.institution} logo`}
								width={120}
								height={120}
								className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-110 drop-shadow-md"
								data-ai-hint="university logo"
							/>
						) : (
							<GraduationCap className="h-full w-full text-primary transition-colors duration-300" />
						)}
					</div>
					{/* Pulse indicator */}
					<div className="absolute -top-2 -right-2">
						<div className="w-5 h-5 bg-primary rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
						<div className="absolute top-0.5 left-0.5 w-4 h-4 bg-primary rounded-full opacity-0 group-hover:opacity-100 border-2 border-background"></div>
					</div>
				</div>

				{/* Education Details */}
				<div className="flex-1 space-y-3">
					<div className="flex items-start gap-3">
						<div className="p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 border border-primary/20 shadow-sm">
							<Award className="h-5 w-5 text-primary" />
						</div>
						<div className="flex-1 mt-1">
							<h3 className="text-2xl md:text-[1.75rem] font-bold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300 mb-2 leading-tight">
								{edu.degree}
							</h3>
							<p className="text-base text-muted-foreground font-medium flex items-center gap-2">
								<GraduationCap className="h-4 w-4 text-primary/70" />
								{edu.institution}
							</p>
						</div>
					</div>
				</div>

				{/* Duration Badge */}
				<div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-background/80 backdrop-blur-md border border-border/50 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300 shrink-0 shadow-md">
					<Calendar className="h-4 w-4 text-primary animate-pulse" />
					<span className="text-sm font-bold text-foreground whitespace-nowrap tracking-wide">
						{edu.duration}
					</span>
				</div>
			</div>

			{/* Bottom accent line */}
			<div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
		</motion.div>
	);
}

export function EducationSection() {
	return (
		<SectionWrapper id="education" className="relative bg-gradient-to-b from-card/5 via-background to-card/10 py-24 min-h-[80vh]">
			{/* Animated background */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
				<motion.div
					animate={{ y: [0, 50, 0], scale: [1, 1.2, 1] }}
					transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
					className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
				/>
				<motion.div
					animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
					transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
					className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px]"
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
							<GraduationCap className="h-8 w-8 text-primary" />
							Education
						</span>
					</SectionTitle>

					<p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto mt-4" style={{ lineHeight: '1.7' }}>
						Academic foundation combining business strategy, technology, and product management
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="space-y-6 relative"
				>
					{/* Decorative timeline line connecting the cards */}
					<div className="hidden md:block absolute left-[60px] top-10 bottom-10 w-1 bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50 rounded-full opacity-30 z-0"></div>

					{education.map((edu) => (
						<EducationCard key={edu.id} edu={edu} />
					))}
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ delay: 0.5, duration: 0.5 }}
				className="w-full flex justify-center pt-24 relative z-20"
			>
				<SectionNavButton nextSection="contact" />
			</motion.div>
		</SectionWrapper>
	);
}
