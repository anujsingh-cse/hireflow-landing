import { PricingCard } from "@/components/marketing/sections/pricing-card";

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "For small teams and early-stage hiring.",
    features: [
      "AI job description generation",
      "Resume screening for up to 100 candidates/month",
      "Basic candidate scorecards",
      "Limited outreach drafts",
    ],
    cta: "Start free trial",
  },
  {
    name: "Growth",
    price: "$79",
    description: "For growing teams with regular hiring needs.",
    features: [
      "Everything in Starter",
      "Unlimited candidate screening",
      "Advanced scorecards and AI summaries",
      "Team collaboration workflows",
      "Priority support",
    ],
    cta: "Choose Growth",
    featured: true,
  },
  {
    name: "Scale",
    price: "$149",
    description: "For larger teams and frequent hiring pipelines.",
    features: [
      "Everything in Growth",
      "Multi-role hiring workflows",
      "Advanced analytics and pipeline insights",
      "Dedicated onboarding support",
      "Custom team permissions",
    ],
    cta: "Contact sales",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Pricing
          </p>
          <h2
            id="pricing-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Simple pricing for teams that want to hire faster
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Choose the plan that fits your hiring volume and move from job creation to shortlist with less manual work.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              cta={plan.cta}
              featured={plan.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
