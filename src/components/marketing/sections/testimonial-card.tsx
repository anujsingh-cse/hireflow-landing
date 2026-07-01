import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  quote: string;
  initials: string;
}

export function TestimonialCard({
  name,
  role,
  company,
  quote,
  initials,
}: TestimonialCardProps) {
  return (
    <Card className="h-full border-border/70 bg-card/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
      <CardHeader className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            {initials}
          </div>
          <div>
            <CardTitle className="text-base">{name}</CardTitle>
            <p className="text-sm text-muted-foreground">
              {role} at {company}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm leading-7 text-muted-foreground">
          “{quote}”
        </CardDescription>
      </CardContent>
    </Card>
  );
}
