// src/components/education-section.tsx
"use client";
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { SectionNavButton } from "@/components/section-nav-button";
import { Card } from "@/components/ui/card";
import React from "react";
import { cn } from "@/lib/utils";
import Image from 'next/image';

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

export function EducationSection() {
	return (
		<SectionWrapper id="education" className="relative bg-gradient-to-b from-card/5 via-background to-card/10 py-20">
			{/* Animated background */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
				<div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px] floating-animation"></div>
				<div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-[100px] floating-animation" style={{ animationDelay: '2s' } as React.CSSProperties}></div>
			</div>

			<div className="relative z-10">
				<SectionTitle>
					<span className="inline-flex items-center gap-3">
						<GraduationCap className="h-8 w-8 text-primary" />
						Education
					</span>
				</SectionTitle>
				
				<p className="text-center text-muted-foreground text-[var(--body-size)] mb-12 max-w-2xl mx-auto" style={{ lineHeight: 'var(--relaxed)' }}>
					Academic foundation combining business strategy, technology, and product management
				</p>

				<div className="max-w-5xl mx-auto space-y-6">
					{education.map((edu, index) => (
						<Card
							key={edu.id}
							className={cn(
								"group relative overflow-hidden transition-all duration-500 hover:scale-[1.01] rounded-3xl bg-gradient-to-br",
								edu.color,
								"from-card/95 via-card/85 to-background/90 border border-border/30 hover:border-primary/50 shadow-xl hover:shadow-2xl backdrop-blur-sm stagger-fade-in"
							)}
							style={{ '--stagger-delay': index } as React.CSSProperties}
						>
							{/* Shimmer effect */}
							<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
								<div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
							</div>

							<div className="relative p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-5">
								{/* University Logo */}
								<div className="relative shrink-0">
									<div className={cn(
										"relative bg-background/80 backdrop-blur-sm rounded-2xl p-3 shadow-md group-hover:shadow-lg transition-all duration-300 border border-border/30 group-hover:border-primary/40",
										edu.id === 'edu3' ? "w-20 h-20 md:w-24 md:h-24" : "w-16 h-16 md:w-20 md:h-20"
									)}>
										{edu.imageUrl ? (
											<Image 
												src={edu.imageUrl} 
												alt={`${edu.institution} logo`}
												width={edu.id === 'edu3' ? 112 : 96}
												height={edu.id === 'edu3' ? 112 : 96}
												className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-110" 
												data-ai-hint="university logo"
											/>
										) : (
											<GraduationCap className="h-full w-full text-primary transition-colors duration-300" />
										)}
									</div>
									{/* Pulse indicator */}
									<div className="absolute -top-2 -right-2">
										<div className="w-4 h-4 bg-primary rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
										<div className="absolute top-0 left-0 w-4 h-4 bg-primary rounded-full opacity-0 group-hover:opacity-100"></div>
									</div>
								</div>

								{/* Education Details */}
								<div className="flex-1 space-y-2">
									<div className="flex items-start gap-2.5">
										<div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 border border-primary/10">
											<Award className="h-4 w-4 text-primary" />
										</div>
										<div className="flex-1">
											<h3 className="text-[var(--large-size)] font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-1.5" style={{ lineHeight: 'var(--snug)' }}>
												{edu.degree}
											</h3>
											<p className="text-[var(--small-size)] text-muted-foreground/90 font-medium" style={{ lineHeight: 'var(--normal)' }}>
												{edu.institution}
											</p>
										</div>
									</div>
								</div>

								{/* Duration Badge */}
								<div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-background/70 backdrop-blur-sm border border-border/40 group-hover:border-primary/50 transition-all duration-300 shrink-0 shadow-sm">
									<Calendar className="h-3.5 w-3.5 text-primary" />
									<span className="text-[var(--xs-size)] font-semibold text-foreground whitespace-nowrap">
										{edu.duration}
									</span>
								</div>
							</div>

							{/* Bottom accent line */}
							<div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</Card>
					))}
				</div>

				{/* Timeline connector for desktop */}
				<div className="hidden md:block absolute left-[72px] top-[200px] bottom-[100px] w-1 bg-gradient-to-b from-primary/30 via-accent/30 to-primary/30 opacity-0"></div>
			</div>

			<SectionNavButton nextSection="contact" />
		</SectionWrapper>
	);
}
