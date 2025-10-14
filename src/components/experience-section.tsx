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
			"Owned product roadmap and strategy for AI-powered ride-hailing and dispatch optimization, improving arrival time accuracy by **15%** through predictive analytics and iterative experimentation.",
			"Led cross-functional delivery with engineering, data science, design, and operations to launch ML-based driver allocation models, increasing driver response by **12%** and improving fleet utilization by **10%** across North America market.",
			"Launched a pilot generative-AI support platform, automating **60%** of customer inquiries, reducing average resolution time from 3 days to under 1 hour, and saving **$500K** annually in support costs.",
			"Designed and Implemented KPI/analytics framework (SQL, Citrus) to track product performance, UX, and adoption; drove customer satisfaction by **14%** and data-driven prioritization across the product lifecycle.",
			"Led A/B experiments and discovery sprints to refine ride request flows and pricing visibility; analyzed user behaviour and feedback to guide roadmap priorities, boosting rider activation by **18%** and repeat bookings by **9%**."
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
				
				<p className="text-center text-muted-foreground text-sm sm:text-base md:text-lg mb-12 max-w-2xl mx-auto">
					Driving product innovation and delivering measurable business impact through data-driven strategy
				</p>

				<Tabs defaultValue={experiences[0].id} className="w-full max-w-6xl mx-auto">
					{/* Enhanced TabsList */}
					<TabsList className="flex w-full gap-2 md:gap-4 h-auto p-3 bg-card/50 backdrop-blur-md border border-border/30 rounded-2xl mb-8 overflow-x-auto shadow-lg">
						{experiences.map((exp, index) => (
							<TabsTrigger
								key={exp.id}
								value={exp.id}
								className="relative px-4 md:px-6 py-3 text-sm md:text-base font-semibold text-muted-foreground data-[state=active]:text-primary data-[state=active]:bg-primary/15 rounded-xl transition-all duration-300 ease-out min-w-fit shrink-0 hover:bg-primary/5 tab-indicator group"
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
													<CardTitle className="text-xl md:text-2xl font-bold text-foreground">
														{exp.title}
													</CardTitle>
													<Badge variant="outline" className="border-primary/40 text-primary bg-primary/10 px-2.5 py-0.5 text-[11px] sm:text-xs font-semibold">
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
										<h4 className="text-base md:text-lg font-semibold text-foreground/90 flex items-center gap-2 mb-5">
											<TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-primary" />
											Key Achievements & Impact
										</h4>
										<ul className="space-y-4">
											{exp.achievements.map((achievement, i) => (
												<li 
													key={i} 
													className="achievement-card text-[13px] sm:text-sm md:text-base text-foreground/90 leading-relaxed stagger-fade-in"
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

				{/* Timeline visualization */}
				<div className="mt-16 max-w-4xl mx-auto">
					<div className="relative">
						<div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>
						<div className="flex justify-between items-center relative">
							{experiences.map((exp, index) => (
								<div key={exp.id} className="flex flex-col items-center group">
									<div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-4 border-background shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
										{exp.icon}
									</div>
									<span className="mt-3 text-xs font-semibold text-muted-foreground text-center max-w-[100px] hidden md:block">
										{exp.company}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<SectionNavButton nextSection="projects" />
		</SectionWrapper>
	);
}
