import { TestimonialCard } from "@/components/marketing/sections/testimonial-card";

const testimonials = [
  {
    name: "Maya Chen",
    role: "Head of Talent",
    company: "Northstar Labs",
    quote:
      "HireFlow AI cut our job description and screening time in half. We finally have a faster way to focus on the right candidates.",
    initials: "MC",
  },
  {
    name: "Daniel Ortiz",
    role: "Recruiting Manager",
    company: "BrightPath Studio",
    quote:
      "The scorecards and outreach drafts helped our team stay aligned and respond to candidates much faster. It feels like a real time-saver.",
    initials: "DO",
  },
  {
    name: "Aisha Patel",
    role: "Founder & Operations Lead",
    company: "Loop Ventures",
    quote:
      "We needed something simple for early-stage hiring. HireFlow AI gave us structure, speed, and clarity without adding complexity.",
    initials: "AP",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Testimonials
          </p>
          <h2
            id="testimonials-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Trusted by recruiting teams that need to move faster
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            HireFlow AI helps teams reduce manual hiring work and make stronger decisions with less effort.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3" role="list" aria-label="Customer testimonials">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} role="listitem">
              <TestimonialCard
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                quote={testimonial.quote}
                initials={testimonial.initials}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
