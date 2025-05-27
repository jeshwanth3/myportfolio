import { SectionWrapper } from "./section-wrapper";
import { SectionTitle } from "./section-title";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Trophy, Award, CheckCircle } from 'lucide-react';

type Achievement = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  type: 'certification' | 'award';
  tags?: string[];
  link?: string;
};

const achievements: Achievement[] = [
  {
    id: "cert1",
    title: "Product Management Certification",
    issuer: "Product School",
    date: "2023",
    type: "certification",
    tags: ["Product Management", "Agile", "User Research"],
    link: "#" // Replace with actual certificate link
  },
  {
    id: "cert2",
    title: "UX Design Professional Certificate",
    issuer: "Google",
    date: "2023",
    type: "certification",
    tags: ["UX Design", "User Research", "Prototyping"],
    link: "#" // Replace with actual certificate link
  },
  // Add more achievements here
];

export function AchievementsSection() {
  return (
    <SectionWrapper id="achievements" className="bg-background">
      <SectionTitle>Achievements & Certifications</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <Card
            key={achievement.id}
            className="achievement-card transform transition-all duration-300 hover:scale-105"
            style={{ '--animation-delay': `${150 + index * 100}ms` } as React.CSSProperties}
          >
            <CardHeader className="p-5 md:p-6 flex flex-row items-start space-y-0 pb-3">
              <div className="mr-4">
                {achievement.type === 'certification' ? (
                  <CheckCircle className="h-6 w-6 text-primary" />
                ) : (
                  <Trophy className="h-6 w-6 text-primary" />
                )}
              </div>
              <div>
                <CardTitle className="text-lg font-semibold mb-1">
                  {achievement.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {achievement.issuer} • {achievement.date}
                </p>
              </div>
            </CardHeader>
            <CardContent className="p-5 md:p-6 pt-0">
              {achievement.tags && (
                <div className="flex flex-wrap gap-2">
                  {achievement.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs font-normal bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
              {achievement.link && (
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-sm text-primary hover:underline"
                >
                  <Award className="h-4 w-4 mr-1" />
                  View Certificate
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
