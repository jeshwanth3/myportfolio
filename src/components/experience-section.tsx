"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Briefcase, MapPin, Calendar, TrendingUp, Award, Target } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionNavButton } from "@/components/section-nav-button";
import { Badge } from "@/components/ui/badge";

const experiences = [
	{
		id: "exp1",
		title: "Product Manager",
		company: "Uber",
		location: "USA",
		duration: "Aug 2024 - Current",
		type: "Remote",
achievements: [
	"Led product strategy for AI-driven ride-hailing and dispatch optimization, leveraging predictive modeling and experimentation to improve ETA accuracy by 15% and enhance driver-rider matching reliability.",
	"Delivered ML-based driver allocation models by leading cross-functional delivery with engineering, data science, and operations, improving driver response rates by 12% and fleet utilization by 10% across pilot markets in North America.",
	"Piloted a generative-AI support assistant that automated 60% of customer tickets, reducing average resolution time from 3 days to under 1 hour and projecting $500K in annual savings at full rollout.",
	"Conducted A/B experiments to refine ride request and pricing flows, using behavioral analytics, funnel analysis, and user feedback to improve booking conversion by 11% and reduce checkout drop-offs.",
	"Designed and implemented KPI/analytics framework (SQL, Citrus) to track product performance, UX, and adoption, increasing customer satisfaction by 14% and enabling data-driven prioritization across the product lifecycle."
],
		icon: <Briefcase className="h-5 w-5 text-primary" />,
		color: "from-blue-500/20 to-cyan-500/20"
	},
	{
		id: "exp2",
		title: "Product Manager Intern",
		company: "Able Up Iowa",
		location: "USA",
		duration: "Jun 2024 - Aug 2024",
		type: "Internship",
		achievements: [
			"Led data architecture and analytics roadmap for a cloud-based lending platform, integrating Azure Data Factory, SQL pipelines, and Power BI dashboards to process **1M+** loan records and improved loan approvals for low-income applicants by **12%**.",
			"Partnered with data engineering and operations to enhance serverless ETL pipelines in Azure Data Factory, improving scalability and reducing data processing time by **50%**, enabling near real-time credit risk evaluation.",
			"Developed Power BI dashboards tracking loan activity, portfolio trends, and regional impact, improving leadership visibility into KPIs and helping secure a **$400K** CDFI grant for statewide expansion."
		],
		icon: <Target className="h-5 w-5 text-primary" />,
		color: "from-emerald-500/20 to-teal-500/20"
	},
	{
		id: "exp3",
		title: "Associate Product Manager",
		company: "Accenture",
		location: "India",
		duration: "Jun 2020 - Jul 2023",
		type: "Full-time",
		achievements: [
			"Defined product strategy and roadmap for SaaS based supply chain platform serving **1,000+** enterprise users, launching business planning feature that increased adoption by **22%** and generated **$800K** in incremental ARR.",
			"Owned and prioritized the product backlog in JIRA/Confluence, translating business requirements into user stories and refining features through stakeholder feedback and data insights to deliver **93%** on-time releases and reduce defects by **17%**.",
			"Architected Power BI analytics dashboard tracking user engagement, feature adoption, and revenue metrics, enabling data-driven decisions that reduced development rework by **25%** and accelerated executive decisions cycles from weeks to days.",
			"Led user research and usability testing with **60+** end users and business clients, translating insights into **20+** Figma wireframes and prototypes that improved feature usability by **18%** and increased adoption by **12%**.",
			"Delivered weekly product reviews and KPI reports to leadership, providing visibility into roadmap progress, release outcomes, and customer impact; contributed to a **35%** reduction in issue escalations over three quarters."
		],
		icon: <Award className="h-5 w-5 text-primary" />,
		color: "from-purple-500/20 to-pink-500/20"
	}
];

// Helper function to highlight metrics in text
function HighlightedText({ text }: { text: string }) {
	const parts = text.split(/(\*\*.*?\*\*)/g);
	
	return (
		<span>
			{parts.map((part, index) => {
				if (part.startsWith('**') && part.endsWith('**')) {
					const content = part.slice(2, -2);
					return (
						<span key={index} className="metric-highlight number-stat font-bold px-1">
							{content}
						</span>
					);
				}
				return <span key={index}>{part}</span>;
			})}
		</span>
	);
}

export function ExperienceSection() {
	return (
		<SectionWrapper id="experience" className="relative bg-gradient-to-b from-background via-card/5 to-background py-20">
			{/* Animated background elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
				<div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl floating-animation"></div>
				<div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' } as React.CSSProperties}></div>
			</div>

			<div className="relative z-10">
				<SectionTitle>
					<span className="inline-flex items-center gap-3">
						<TrendingUp className="h-8 w-8 text-primary" />
						Professional Experience
					</span>
				</SectionTitle>
				
				<p className="text-center text-muted-foreground text-[var(--body-size)] mb-12 max-w-2xl mx-auto" style={{ lineHeight: 'var(--relaxed)' }}>
					Driving product innovation and delivering measurable business impact through data-driven strategy
				</p>

				<Tabs defaultValue={experiences[0].id} className="w-full max-w-6xl mx-auto">
					{/* Enhanced TabsList */}
					<TabsList className="flex w-full gap-2 md:gap-4 h-auto p-3 bg-card/50 backdrop-blur-md border border-border/30 rounded-2xl mb-8 overflow-x-auto shadow-lg">
						{experiences.map((exp, index) => (
							<TabsTrigger
								key={exp.id}
								value={exp.id}
								className="relative px-4 md:px-6 py-3 text-[var(--small-size)] font-semibold text-muted-foreground data-[state=active]:text-primary data-[state=active]:bg-primary/15 rounded-xl transition-all duration-300 ease-out min-w-fit shrink-0 hover:bg-primary/5 tab-indicator group"
								style={{ '--stagger-delay': index } as React.CSSProperties}
							>
								<span className="flex items-center gap-2">
									{exp.icon}
									<span className="hidden md:inline">{exp.company}</span>
									<span className="md:hidden">{exp.company.split(' ')[0]}</span>
								</span>
							</TabsTrigger>
						))}
					</TabsList>

					{/* Enhanced TabsContent */}
					{experiences.map((exp, expIndex) => (
						<TabsContent key={exp.id} value={exp.id} className="mt-0">
							<Card className="experience-tab-card rounded-3xl p-8 md:p-12">
								<CardHeader className="p-0 mb-6">
									<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6">
										<div className="flex items-start gap-4 flex-1">
											<div className="relative shrink-0">
												<div className={`bg-gradient-to-br ${exp.color} p-3.5 rounded-xl border border-primary/20 shadow-md pulse-glow`}>
													{exp.icon}
												</div>
												<div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-primary rounded-full animate-ping"></div>
												<div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-primary rounded-full"></div>
											</div>
											<div className="flex-1 min-w-0">
												<div className="flex flex-wrap items-center gap-3 mb-3">
													<CardTitle className="text-[var(--h3-size)] font-bold text-foreground" style={{ lineHeight: 'var(--tight)' }}>
														{exp.title}
													</CardTitle>
													<Badge variant="outline" className="border-primary/40 text-primary bg-primary/10 px-2.5 py-0.5 text-[var(--xs-size)] sm:text-[var(--small-size)] font-semibold">
														{exp.type}
													</Badge>
												</div>
												<div className="company-badge mb-3 text-sm md:text-base">
													<Briefcase className="h-4 w-4" />
													<span>{exp.company}</span>
												</div>
												<div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-muted-foreground">
													<span className="flex items-center gap-1.5 bg-muted/30 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-border/20">
														<MapPin className="h-3.5 w-3.5 text-primary" />
														<span className="font-medium">{exp.location}</span>
													</span>
													<span className="flex items-center gap-1.5 bg-muted/30 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-border/20">
														<Calendar className="h-3.5 w-3.5 text-primary" />
														<span className="font-medium">{exp.duration}</span>
													</span>
												</div>
											</div>
										</div>
									</div>
								</CardHeader>

								<CardContent className="p-0">
									<div className="bg-muted/10 backdrop-blur-sm rounded-2xl p-6 border border-border/10">
										<h4 className="text-[var(--h4-size)] font-semibold text-foreground/90 flex items-center gap-2 mb-5" style={{ lineHeight: 'var(--tight)' }}>
											<TrendingUp className="h-5 w-5 text-primary" />
											Key Achievements & Impact
										</h4>
										<ul className="space-y-4">
											{exp.achievements.map((achievement, i) => (
												<li 
													key={i} 
													className="achievement-card text-[var(--body-size)] text-foreground/90 stagger-fade-in"
													style={{ lineHeight: 'var(--relaxed)' }}
													style={{ '--stagger-delay': i } as React.CSSProperties}
												>
													<HighlightedText text={achievement} />
												</li>
											))}
										</ul>
									</div>
								</CardContent>
							</Card>
						</TabsContent>
					))}
				</Tabs>
			</div>

			<SectionNavButton nextSection="projects" />
		</SectionWrapper>
	);
}
