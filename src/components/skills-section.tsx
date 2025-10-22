"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Brain, Users, Database, Rocket, LineChart, Target } from 'lucide-react';
import { SectionNavButton } from "@/components/section-nav-button";

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

export function SkillsSection() {
	return (
		<SectionWrapper id="skills" className="relative bg-gradient-to-b from-background via-card/10 to-background py-20">
			{/* Animated background */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
				<div className="absolute top-1/4 right-10 w-96 h-96 bg-primary/20 rounded-full blur-[100px] floating-animation"></div>
				<div className="absolute bottom-1/4 left-10 w-96 h-96 bg-accent/20 rounded-full blur-[100px] floating-animation" style={{ animationDelay: '2s' } as React.CSSProperties}></div>
			</div>

			<div className="relative z-10">
				<SectionTitle>
					<span className="inline-flex items-center gap-3">
						<Sparkles className="h-8 w-8 text-primary animate-pulse" />
						Skills & Expertise
					</span>
				</SectionTitle>
				
				<p className="text-center text-muted-foreground text-[var(--body-size)] mb-12 max-w-2xl mx-auto" style={{ lineHeight: 'var(--relaxed)' }}>
					Comprehensive toolkit for delivering impactful products from concept to launch
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
					{skillCategories.map((category, index) => (
						<Card
							key={category.id}
							className={`group relative overflow-hidden transition-all duration-500 hover:scale-[1.02] rounded-3xl bg-gradient-to-br ${category.color} border border-border/30 hover:border-primary/50 shadow-xl hover:shadow-2xl backdrop-blur-sm stagger-fade-in`}
							style={{ '--stagger-delay': index } as React.CSSProperties}
						>
							{/* Shimmer effect on hover */}
							<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
								<div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
							</div>

							<CardHeader className="p-6 pb-3">
								<div className="flex items-start gap-3 mb-3">
									<div className="relative">
										<div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300 shadow-md border border-primary/10">
											{category.icon}
										</div>
										<div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
									</div>
									<div className="flex-1">
										<CardTitle className="text-[var(--large-size)] font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors duration-300" style={{ lineHeight: 'var(--snug)' }}>
											{category.title}
										</CardTitle>
										<p className="text-[var(--small-size)] text-muted-foreground/80 italic" style={{ lineHeight: 'var(--normal)' }}>
											{category.description}
										</p>
									</div>
								</div>
							</CardHeader>

							<CardContent className="p-6 pt-3">
								<div className="flex flex-wrap gap-2">
									{category.skills.map((skill, skillIndex) => (
										<Badge
											key={skill}
											variant="secondary"
											className="px-3 py-1.5 text-[var(--xs-size)] font-medium bg-background/70 backdrop-blur-sm text-foreground border border-border/40 hover:bg-primary/20 hover:text-primary hover:border-primary/60 transition-all duration-300 rounded-xl shadow-sm hover:shadow-md transform hover:scale-105 cursor-default stagger-fade-in"
											style={{ '--stagger-delay': skillIndex } as React.CSSProperties}
										>
											{skill}
										</Badge>
									))}
								</div>
							</CardContent>

							{/* Bottom accent line */}
							<div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</Card>
					))}
				</div>
			</div>

			<SectionNavButton nextSection="education" />
		</SectionWrapper>
	);
}
