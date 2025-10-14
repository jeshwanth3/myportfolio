"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionNavButton } from "@/components/section-nav-button";

// Experience data moved to comments for reference:
// exp1: Product Manager at Discover Financial Services (Aug 2024 - Present)
// - Defined and prioritized budgeting, transaction tracking, credit monitoring, and payment reminder features via user research and competitor analysis. Formed detailed user stories and acceptance criteria in JIRA, easing sprint planning with cross-functional teams.
// - Partnered with UX/UI designers using Figma and Sketch to develop intuitive, mobile-friendly interfaces. Created journey maps, prototypes and documented workflows in Confluence to gain stakeholder approvals and maintain transparency.
// - Integrated third-party financial data providers like Plaid and Experian to consolidate user finances and credit data. Ensured secure API connections and scalable AWS backend infrastructure with encrypted data pipelines for data protection.
// - Directed A/B testing campaigns with Optimizely and Google Analytics, optimizing onboarding flows and engagement. Increased onboarding completion rates by 18% and weekly active users by 22% through iterative feature improvements.
// - Worked on the expansion of Discover's mobile app by adding credit card management, personal loans, and savings integration. Collaborated with business, design, engineering, and compliance teams to define scope, prioritize features, and align on delivery goals.
// - Directed user acceptance testing with QA and business teams, logging issues in JIRA for resolution. Developed product roadmaps in Aha, tracking progress with dashboards aligned to quarterly milestones and strategic objectives.

// exp2: Business Analyst Intern at Able Up Iowa (Jun 2024 - Aug 2024)
// Description: Analyzed loan data and improved data processing workflows to enhance decision-making capabilities.
// - Analyzed 200K+ historical loan-repayment records using SQL and Python/Pandas, uncovering insurer-behavior insights that increased approval rates for low-income applicants by 12%, expanding access to flexible credit across the state.
// - Enhanced hourly data ingestion stream using serverless ETL pipelines in Azure Data Factory, cutting data processing time by 50%.
// - Developed a dynamic Power BI 'Impact Dashboard' to monitor active vs. paid-off loans, county-level penetration, and interest savings—instrumental in securing a $300K CDFI award for program expansion.

// exp3: Associate Product Manager at Accenture (Oct 2021 - Jul 2023)
// Description: Led product strategy and development for Supply Chain Optimization Platform, focusing on customer-centric solutions and team alignment.
// - Directed product strategy and delivery for the Supply Chain Optimization Platform, aligning cross-functional teams on goals and improving forecasting accuracy by 20% through continuous iteration and customer-centric feature development.
// - Facilitated comprehensive requirement gathering from business users, SMEs, and external stakeholders, translating insights into clear product specs and user stories that improved cross-team clarity and reduced rework by 30%.
// - Owned and prioritized the product backlog in Jira, refining features based on stakeholder feedback and data insights; ensured alignment across engineering, QA, and business leads to meet evolving client priorities.
// - Conducted user research, created wireframes with design teams, and collaborated on MVP definition, enabling faster validation cycles and increasing user satisfaction with new planning workflows by 25%.
// - Delivered weekly product reviews and KPI reports to leadership, providing visibility into roadmap progress, release outcomes, and customer impact; contributed to a 35% reduction in issue escalations over three quarters.
// - Mentored team members across QA and BA roles, facilitating agile best practices, improving team velocity by 40%, and earning the 'Skillful Award' for driving delivery excellence and cross-functional alignment.

const experiences = [
	{
		id: "exp1",
		title: "Product Manager",
		company: "Uber",
		location: "USA",
		duration: "Aug 2024 - Current",
		achievements: [
			"Owned product roadmap and strategy for AI-powered ride-hailing and dispatch optimization, improving arrival time accuracy by 15% through predictive analytics and iterative experimentation.",
			"Led cross-functional delivery with engineering, data science, design, and operations to launch ML-based driver allocation models, increasing driver response by 12% and improving fleet utilization by 10% across North America market.",
			"Launched a pilot generative-AI support platform, automating 60% of customer inquiries, reducing average resolution time from 3 days to under 1 hour, and saving $500K annually in support costs.",
			"Designed and Implemented KPI/analytics framework (SQL, Citrus) to track product performance, UX, and adoption; drove customer satisfaction by 14% and data-driven prioritization across the product lifecycle.",
			"Led A/B experiments and discovery sprints to refine ride request flows and pricing visibility; analyzed user behaviour and feedback to guide roadmap priorities, boosting rider activation by 18% and repeat bookings by 9%."
		],
		icon: <Briefcase className="h-5 w-5 text-primary" />
	},
	{
		id: "exp2",
		title: "Product Manager Intern",
		company: "Able Up Iowa",
		location: "USA",
		duration: "Jun 2024 - Aug 2024",
		achievements: [
			"Led data architecture and analytics roadmap for a cloud-based lending platform, integrating Azure Data Factory, SQL pipelines, and Power BI dashboards to process 1M+ loan records and improved loan approvals for low-income applicants by 12%.",
			"Partnered with data engineering and operations to enhance serverless ETL pipelines in Azure Data Factory, improving scalability and reducing data processing time by 50%, enabling near real-time credit risk evaluation.",
			"Developed Power BI dashboards tracking loan activity, portfolio trends, and regional impact, improving leadership visibility into KPIs and helping secure a $400K CDFI grant for statewide expansion."
		],
		icon: <Briefcase className="h-5 w-5 text-primary" />
	},
	{
		id: "exp3",
		title: "Associate Product Manager",
		company: "Accenture",
		location: "India",
		duration: "Jun 2020 - Jul 2023",
		achievements: [
			"Defined product strategy and roadmap for SaaS based supply chain platform serving 1,000+ enterprise users, launching business planning feature that increased adoption by 22% and generated $800K in incremental ARR.",
			"Owned and prioritized the product backlog in JIRA/Confluence, translating business requirements into user stories and refining features through stakeholder feedback and data insights to deliver 93% on-time releases and reduce defects by 17%.",
			"Architected Power BI analytics dashboard tracking user engagement, feature adoption, and revenue metrics, enabling data-driven decisions that reduced development rework by 25% and accelerated executive decisions cycles from weeks to days.",
			"Led user research and usability testing with 60+ end users and business clients, translating insights into 20+ Figma wireframes and prototypes that improved feature usability by 18% and increased adoption by 12%.",
			"Delivered weekly product reviews and KPI reports to leadership, providing visibility into roadmap progress, release outcomes, and customer impact; contributed to a 35% reduction in issue escalations over three quarters."
		],
		icon: <Briefcase className="h-5 w-5 text-primary" />
	}
];

export function ExperienceSection() {
	return (
		<SectionWrapper id="experience" className="bg-secondary/10 dark:bg-card/15">
			<SectionTitle>Work Experience</SectionTitle>
			<Tabs defaultValue={experiences[0].id} className="w-full">
				{/* Enhanced TabsList Styling - Use grid-cols-2 on small screens */}
				<TabsList className="flex w-full gap-4 h-auto p-2 bg-background/50 dark:bg-background/50 rounded-xl mb-6 overflow-x-auto">
					{experiences.map((exp) => (
						<TabsTrigger
							key={exp.id}
							value={exp.id}
							// Improved Tab Trigger Styling - ensure text wraps nicely
							className="px-4 py-2 text-sm font-medium text-muted-foreground data-[state=active]:text-primary data-[state=active]:bg-primary/10 rounded-lg transition-all duration-300 ease-in-out min-w-fit shrink-0"
						>
							{exp.title} {/* Use Job Roles for Tabs */}
						</TabsTrigger>
					))}
				</TabsList>
				{/* Enhanced Card Styling within TabsContent */}
				{experiences.map((exp) => (
					<TabsContent key={exp.id} value={exp.id}>
						<Card className="group hover:scale-[1.02] transition-all duration-300 bg-gradient-to-br from-card/80 via-background/80 to-card/40 dark:from-secondary/20 dark:via-card/80 dark:to-background border border-border/20 dark:border-border/30 shadow-lg hover:shadow-xl p-6 md:p-8">
							<CardHeader className="p-0 mb-4">
								<div className="flex items-start gap-4">
									<div className="mt-1 shrink-0 bg-primary/15 dark:bg-primary/25 p-3 rounded-full">
										{exp.icon}
									</div>
									<div className="flex-1">
										<CardTitle as="h3" className="text-base md:text-lg font-semibold text-foreground mb-1">{exp.title}</CardTitle>
										<div className="text-xs sm:text-sm text-muted-foreground flex flex-col sm:flex-row sm:items-center sm:gap-x-4 gap-y-1 flex-wrap">
											<span className="font-medium text-foreground/95">{exp.company}</span>
											<span className="flex items-center gap-1"><MapPin className="h-3 w-3 opacity-80" /> {exp.location}</span>
											<span className="flex items-center gap-1"><Calendar className="h-3 w-3 opacity-80" /> {exp.duration}</span>
										</div>
									</div>
								</div>
							</CardHeader>
						<CardContent className="p-0">
							<ul className="list-disc space-y-1.5 pl-5 text-xs md:text-sm text-foreground/85 dark:text-foreground/80">
								{exp.achievements.map((achievement, i) => (
									<li key={i}>{achievement}</li>
								))}
							</ul>
						</CardContent>
						</Card>
					</TabsContent>
				))}
			</Tabs>      <SectionNavButton nextSection="projects" />
		</SectionWrapper>
	);
}

