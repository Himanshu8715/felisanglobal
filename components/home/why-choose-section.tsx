const reasons = [
  {
    title: "Compliance-First Approach",
    description:
      "Every process, partnership, and product is governed by strict regulatory compliance standards, ensuring your import requirements are met without compromise.",
  },
  {
    title: "Reliable Manufacturing Partnerships",
    description:
      "Our manufacturing network consists exclusively of WHO-cGMP certified facilities with proven track records in pharmaceutical production and quality management.",
  },
  {
    title: "Scalable Export Capacity",
    description:
      "From small initial orders to large-scale recurring supply contracts, our infrastructure adapts to your procurement needs and market growth.",
  },
  {
    title: "Transparent Communication",
    description:
      "Direct, responsive, and transparent communication channels ensure you are informed at every stage from order placement to delivery.",
  },
  {
    title: "Long-Term Business Commitment",
    description:
      "We prioritize sustainable, long-term partnerships over transactional relationships, investing in mutual growth and market development.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
              Why Felisan Global
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-foreground lg:text-4xl">
              <span className="text-balance">
                A Partnership Built on Trust
              </span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Choosing an international pharmaceutical supplier is a critical
              business decision. Felisan Global provides the foundation of
              reliability, quality, and compliance that your operations require.
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-3">
            {reasons.map((reason, i) => (
              <div
                key={reason.title}
                className="flex gap-5 rounded-lg border border-border bg-card p-6 transition-colors hover:border-secondary/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-secondary-foreground">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
