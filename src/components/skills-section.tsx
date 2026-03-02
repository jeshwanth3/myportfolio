"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Brain, Users, Database, Rocket, LineChart, Target } from 'lucide-react';
import { SectionNavButton } from "@/components/section-nav-button";
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { MouseEvent } from "react";

const skillCategories = [
	{
		id: "skills1",
		title: "Product Strategy & AI",
		icon: <Brain className="h-6 w-6 text-primary" />,
		description: "Crafting AI-driven product visions that scale",
		color: "from-blue-500/10 via-cyan-500/10 to-blue-500/10",
		skills: [
			"Product Vision & Roadmapping",
			"AI/ML Product Strategy",
			"Market Research & Analysis",
			"Feature Prioritization",
			"Product Lifecycle Management",
			"AI Integration Planning"
		]
	},
	{
		id: "skills2",
		title: "Cross-Functional Leadership",
		icon: <Users className="h-6 w-6 text-accent" />,
		description: "Leading teams to deliver exceptional products",
		color: "from-emerald-500/10 via-teal-500/10 to-emerald-500/10",
		skills: [
			"Agile & Scrum Leadership",
			"Stakeholder Management",
			"Team Collaboration",
			"Product Delivery",
			"Change Management",
			"Executive Communication"
		]
	},
	{
		id: "skills3",
		title: "Data-Driven Decision Making",
		icon: <LineChart className="h-6 w-6 text-primary" />,
		description: "Leveraging analytics for product success",
		color: "from-purple-500/10 via-pink-500/10 to-purple-500/10",
		skills: [
			"SQL & Data Analysis",
			"A/B Testing & Experimentation",
			"KPI Framework Design",
			"User Behavior Analytics",
			"Power BI & Tableau",
			"Predictive Analytics"
		]
	},
	{
		id: "skills4",
		title: "End-to-End Product Management",
		icon: <Rocket className="h-6 w-6 text-accent" />,
		description: "From ideation to market success",
		color: "from-orange-500/10 via-red-500/10 to-orange-500/10",
		skills: [
			"Product Ideation & Vision",
			"Roadmap Planning",
			"User-Centered Design",
			"MVP Development",
			"Go-to-Market Strategy",
			"Iterative Product Improvement"
		]
	},
	{
		id: "skills5",
		title: "Cloud & Technical Skills",
		icon: <Database className="h-6 w-6 text-primary" />,
		description: "Modern cloud-based solutions",
		color: "from-indigo-500/10 via-violet-500/10 to-indigo-500/10",
		skills: [
			"Azure Data Factory",
			"Azure SQL Database",
			"ETL Pipelines",
			"Cloud Architecture",
			"API Integration",
			"Data Visualization"
		]
	},
	{
		id: "skills6",
		title: "Design & User Experience",
		icon: <Target className="h-6 w-6 text-accent" />,
		description: "Creating delightful user experiences",
		color: "from-rose-500/10 via-pink-500/10 to-rose-500/10",
		skills: [
			"Figma & Sketch",
			"User Research",
			"Wireframing & Prototyping",
			"Usability Testing",
			"Journey Mapping",
			"UI/UX Best Practices"
		]
	}
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15
		}
	}
};

const cardVariants = {
	hidden: { opacity: 0, scale: 0.9, y: 30 },
	visible: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: { type: "spring", stiffness: 300, damping: 25 }
	}
};

const badgeVariants = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: { opacity: 1, scale: 1 }
};

function SkillCategoryCard({ category }: { category: typeof skillCategories[0] }) {
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
			onMouseMove={handleMouseMove}
			className={`group relative overflow-hidden rounded-[2rem] bg-gradient-to-br ${category.color} border border-border/30 hover:border-primary/50 shadow-xl hover:shadow-2xl backdrop-blur-md transition-all duration-300 flex flex-col`}
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

			<CardHeader className="p-6 pb-3 relative z-20">
				<div className="flex items-start gap-4 mb-3">
					<div className="relative">
						<div className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300 shadow-md border border-primary/10">
							{category.icon}
						</div>
						<div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
					</div>
					<div className="flex-1 mt-1">
						<CardTitle className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
							{category.title}
						</CardTitle>
						<p className="text-sm text-muted-foreground/90 italic">
							{category.description}
						</p>
					</div>
				</div>
			</CardHeader>

			<CardContent className="p-6 pt-3 relative z-20 flex-1">
				<motion.div
					className="flex flex-wrap gap-2"
					variants={{
						visible: { transition: { staggerChildren: 0.05 } },
						hidden: {}
					}}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{category.skills.map((skill) => (
						<motion.div key={skill} variants={badgeVariants} whileHover={{ scale: 1.05 }}>
							<Badge
								variant="secondary"
								className="px-3 py-1.5 text-xs font-semibold bg-background/80 backdrop-blur-md text-foreground border border-border/40 hover:bg-primary/20 hover:text-primary hover:border-primary/60 transition-all duration-300 rounded-xl shadow-sm cursor-default"
							>
								{skill}
							</Badge>
						</motion.div>
					))}
				</motion.div>
			</CardContent>

			<div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
		</motion.div>
	);
}

export function SkillsSection() {
	return (
		<SectionWrapper id="skills" className="relative bg-gradient-to-b from-background via-card/10 to-background py-24 min-h-screen">
			{/* Animated background */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
				<motion.div
					animate={{ y: [0, -40, 0], scale: [1, 1.1, 1] }}
					transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
					className="absolute top-1/4 right-10 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px]"
				/>
				<motion.div
					animate={{ y: [0, 50, 0], x: [0, -30, 0] }}
					transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2 }}
					className="absolute bottom-1/4 left-10 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]"
				/>
			</div>

			<div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6 }}
					className="flex flex-col items-center mb-16"
				>
					<SectionTitle>
						<span className="inline-flex items-center gap-3">
							<Sparkles className="h-8 w-8 text-primary animate-pulse" />
							Skills & Expertise
						</span>
					</SectionTitle>

					<p className="text-center text-muted-foreground text-[var(--body-size)] max-w-2xl mx-auto mt-4" style={{ lineHeight: 'var(--relaxed)' }}>
						Comprehensive toolkit for delivering impactful products from concept to launch
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
				>
					{skillCategories.map((category) => (
						<SkillCategoryCard key={category.id} category={category} />
					))}
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ delay: 0.5, duration: 0.5 }}
				className="w-full flex justify-center pt-20 relative z-20"
			>
				<SectionNavButton nextSection="education" />
			</motion.div>
		</SectionWrapper>
	);
}
