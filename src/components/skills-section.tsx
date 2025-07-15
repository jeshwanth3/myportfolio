import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionTitle } from "@/components/section-title";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from 'lucide-react';

const skillCategories = [
	{
		id: "skills1",
		title: "Product Strategy & AI",
		icon: <Sparkles className="h-6 w-6 text-blue-400" />,
		description: "Crafting AI-driven product visions! 🚀",
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
		id: "skills3",
		title: "End-to-End Product Management",
		skills: [
			"Product Ideation & Vision",
			"Roadmap Planning",
			"User-Centered Design",
			"MVP Development",
			"Cross-Functional Team Leadership",
			"Go-to-Market Strategy",
			"Iterative Product Improvement"
		]
	},
	{
		id: "skills4",
		title: "Cloud-Based Data Analysis",
		skills: ["Azure Data Factory", "Azure SQL Database", "Power BI", "ETL Pipelines", "Data Visualization", "Cloud Architecture"]
	}
];

export function SkillsSection() {
	return (
		<SectionWrapper id="skills" className="bg-gradient-to-b from-background to-card/10 dark:from-card/10 dark:to-background py-16">
			<SectionTitle>Skills & Expertise <span className="animate-pulse">✨</span></SectionTitle>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{skillCategories.map((category, index) => (
					<Card
						key={category.id}
						className="group hover:scale-[1.02] transition-all duration-300 bg-gradient-to-br from-card/80 via-background/80 to-card/40 dark:from-secondary/20 dark:via-card/80 dark:to-background border border-border/20 dark:border-border/30 shadow-lg hover:shadow-xl p-6 md:p-8"
						style={{ '--animation-delay': `${150 + index * 100}ms` } as React.CSSProperties}
					>
						<CardHeader className="p-0 mb-4">
							<div className="flex items-center gap-4 mb-2">
								<div className="p-3 rounded-xl bg-muted/40 group-hover:bg-primary/10 transition-colors duration-300">
									{category.icon || <Sparkles className="h-6 w-6 text-blue-400" />}
								</div>
								<CardTitle className="text-xl font-bold text-foreground drop-shadow-md mb-1">{category.title}</CardTitle>
							</div>
							{category.description && <p className="text-muted-foreground text-base italic mb-2">{category.description}</p>}
						</CardHeader>
						<CardContent className="p-0">
							<div className="flex flex-wrap gap-2 justify-center">
								{category.skills.map((skill) => (
									<Badge
										key={skill}
										variant="secondary"
										className="px-3 py-1 text-sm font-medium bg-muted/30 text-primary border border-border/30 hover:bg-primary/10 hover:text-primary transition-all duration-200 rounded-full"
									>
										{skill}
									</Badge>
								))}
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</SectionWrapper>
	);
}