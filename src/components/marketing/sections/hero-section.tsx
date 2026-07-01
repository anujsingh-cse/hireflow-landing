import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const highlights = [
  "Create polished job descriptions in minutes",
  "Screen candidates with AI-powered summaries",
  "Move top applicants through the pipeline faster",
];

const stats = [
  { value: "2x", label: "faster shortlist" },
  { value: "4.9/5", label: "team satisfaction" },
  { value: "30%", label: "less admin time" },
];

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.18),_transparent_42%),radial-gradient(circle_at_85%_20%,_rgba(16,185,129,0.16),_transparent_30%)]" />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
        <div className="flex flex-col justify-center">
          <Badge className="w-fit rounded-full border-primary/20 bg-primary/10 text-primary">
            <Sparkles className="mr-2 h-3.5 w-3.5" />
            AI recruiting for modern teams
          </Badge>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Hire faster with AI-powered recruiting.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            Create job posts, review applicants, and move top talent forward in
            minutes instead of days.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/get-started"
              className={cn(buttonVariants({ variant: "default" }), "px-6 py-3")}
            >
              Start free trial
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/demo"
              className={cn(buttonVariants({ variant: "outline" }), "px-6 py-3")}
            >
              Book a demo
            </Link>
          </div>

          <ul className="mt-8 space-y-3" aria-label="Product highlights">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-emerald-400/10 blur-3xl" />
          <div className="relative rounded-[2rem] border border-border/70 bg-background/80 p-4 shadow-2xl shadow-primary/10 backdrop-blur-xl sm:p-6">
            <div className="rounded-[1.5rem] border border-border/70 bg-card p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">Hiring pipeline</p>
                  <p className="text-sm text-muted-foreground">
                    AI-assisted resume review in real time
                  </p>
                </div>
                <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-600">
                  Live
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="rounded-2xl border border-border bg-background p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-foreground">Senior Product Designer</p>
                    <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                      92% match
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Strong systems thinking, strong product strategy, and portfolio alignment.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-background p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-foreground">Frontend Engineer</p>
                    <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-600">
                      Shortlisted
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Experience in React, accessibility, and SaaS product delivery.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-border bg-muted/40 p-3 text-center">
                    <p className="text-lg font-semibold text-foreground">{stat.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
