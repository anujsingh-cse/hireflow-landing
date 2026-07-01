import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is HireFlow AI?",
    answer:
      "HireFlow AI is an AI-powered recruiting assistant that helps teams create job posts, screen candidates, and move top applicants forward faster.",
  },
  {
    question: "Who is HireFlow AI for?",
    answer:
      "It is designed for recruiters, hiring managers, founders, and small to mid-sized teams that need to hire quickly without adding extra admin work.",
  },
  {
    question: "How does the AI screening work?",
    answer:
      "The platform analyzes candidate information against your role requirements and highlights the strongest matches for review.",
  },
  {
    question: "Can I use HireFlow AI for multiple job openings?",
    answer:
      "Yes. You can create and manage multiple hiring pipelines in one workspace.",
  },
  {
    question: "Does HireFlow AI replace my existing recruiting process?",
    answer:
      "No. It helps streamline and accelerate core recruiting tasks while keeping your team in control of final decisions.",
  },
  {
    question: "What kinds of documents can I upload?",
    answer:
      "You can upload resumes and candidate documents to support screening and review.",
  },
  {
    question: "Is HireFlow AI suitable for early-stage startups?",
    answer:
      "Yes. It is especially useful for startups and lean teams that need speed, clarity, and simple workflows.",
  },
  {
    question: "How do I get started?",
    answer:
      "Sign up, create your first job opening, upload candidates, and let the AI help you shortlist the best fits.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Frequently asked questions about HireFlow AI
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Everything you need to know before getting started with faster, AI-assisted hiring.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={faq.question}
                className="rounded-2xl border border-border/70 bg-background px-4 shadow-sm transition-all duration-300 data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
                  <span className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      {index + 1}
                    </span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-2 text-sm leading-7 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
