import type { LucideIcon } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StepCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  className?: string;
}

export function StepCard({ icon: Icon, title, description, index, className }: StepCardProps) {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden border-border/70 bg-card/80 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10",
        className,
      )}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-violet-500 to-emerald-400" />
      <CardHeader className="space-y-4 pb-3">
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </div>
          <span className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-sm font-semibold text-muted-foreground">
            0{index}
          </span>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm leading-7 text-muted-foreground">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
