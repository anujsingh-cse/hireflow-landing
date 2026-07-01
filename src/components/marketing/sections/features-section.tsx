import {
  ClipboardList,
  MessageSquare,
  Search,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";

import { FeatureCard } from "@/components/marketing/sections/feature-card";

const features = [
  {
    title: "AI Job Description Generator",
    description:
      "Turn a short role brief into a polished, recruiter-ready job post in seconds.",
    icon: Sparkles,
  },
  {
    title: "Smart Resume Screening",
    description:
      "Quickly surface the strongest applicants by matching resumes to role requirements.",
    icon: Search,
  },
  {
    title: "Candidate Scorecards",
    description:
      "Get structured summaries of candidate fit, strengths, and gaps for faster decisions.",
    icon: ClipboardList,
  },
  {
    title: "AI Outreach Drafts",
    description:
      "Generate personalized outreach messages for shortlisted candidates with minimal effort.",
    icon: MessageSquare,
  },
  {
    title: "Pipeline Visibility",
    description:
      "Keep every candidate moving through the hiring journey with a clear, simple pipeline view.",
    icon: Workflow,
  },
  {
    title: "Faster Team Collaboration",
    description:
      "Make it easier for recruiters and hiring managers to review candidates and align on next steps.",
    icon: Users,
  },
];

export function FeaturesSection() {
  return (
    <section id="product" aria-labelledby="features-heading" className="bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Features
          </p>
          <h2
            id="features-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            AI recruiting workflows that remove busywork and speed up hiring
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            HireFlow AI helps recruiting teams move from job creation to
            shortlist faster with simple, AI-assisted workflows built for modern
            hiring.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3" role="list" aria-label="HireFlow AI features">
          {features.map((feature) => (
            <div key={feature.title} role="listitem">
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
