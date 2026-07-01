import { Check, Crown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

export function PricingCard({
  name,
  price,
  description,
  features,
  cta,
  featured = false,
}: PricingCardProps) {
  return (
    <Card
      className={cn(
        "relative h-full border-border/70 bg-card/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10",
        featured && "border-primary/40 shadow-lg shadow-primary/10",
      )}
    >
      {featured ? (
        <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground">
          <Crown className="h-3.5 w-3.5" />
          Most Popular
        </div>
      ) : null}

      <CardHeader className="space-y-4 pb-4 pt-8">
        <div>
          <CardTitle className="text-2xl">{name}</CardTitle>
          <CardDescription className="mt-3 text-sm leading-7">{description}</CardDescription>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-semibold tracking-tight text-foreground">{price}</span>
          <span className="text-sm text-muted-foreground">/month</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <ul className="space-y-3" aria-label={`${name} plan features`}>
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
              <Check className="mt-0.5 h-4 w-4 flex-none text-primary" aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Button className={cn("w-full", featured && "bg-primary text-primary-foreground")}
          variant={featured ? "default" : "outline"}
        >
          {cta}
        </Button>
      </CardContent>
    </Card>
  );
}
