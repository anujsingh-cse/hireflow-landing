import { ArrowRightCircle, Search, Sparkles } from "lucide-react";

import { StepCard } from "@/components/marketing/sections/step-card";

const steps = [
  {
    title: "Create the role",
    description:
      "Start with a short brief and let AI turn it into a polished, recruiter-ready job description.",
    icon: Sparkles,
  },
  {
    title: "Review candidates",
    description:
      "Upload resumes or import applicants and let AI surface the strongest matches.",
    icon: Search,
  },
  {
    title: "Shortlist and contact",
    description:
      "Generate scorecards and outreach drafts so your team can act quickly on top candidates.",
    icon: ArrowRightCircle,
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" aria-labelledby="how-it-works-heading" className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            How it works
          </p>
          <h2
            id="how-it-works-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            From role brief to shortlist in just a few steps
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            HireFlow AI helps recruiting teams move faster by simplifying the hiring workflow from creation to candidate review.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="animate-in fade-in-0 slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <StepCard
                icon={step.icon}
                title={step.title}
                description={step.description}
                index={index + 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
