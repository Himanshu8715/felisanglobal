import Image from "next/image";

const focusPoints = [
  {
    title: "Regulatory Compliance",
    description:
      "Adherence to WHO-cGMP standards and international regulatory frameworks across all manufacturing partnerships.",
  },
  {
    title: "International Quality Standards",
    description:
      "Rigorous quality control protocols ensuring every product meets global pharmaceutical standards.",
  },
  {
    title: "Reliable Supply Chain",
    description:
      "End-to-end logistics coordination ensuring timely delivery to markets across multiple continents.",
  },
  {
    title: "Long-Term Partnerships",
    description:
      "Building sustainable business relationships with importers, distributors, and procurement bodies worldwide.",
  },
];

export function AboutSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/quality-lab.jpg"
              alt="Pharmaceutical quality control laboratory"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-primary/90 px-6 py-4">
              <p className="text-sm font-medium text-primary-foreground">
                Quality-Driven Manufacturing Partnerships
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
              About Felisan Global
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-foreground lg:text-4xl">
              <span className="text-balance">
                Trusted Pharmaceutical Export Partner
              </span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Felisan Global is an India-based pharmaceutical export company
              specializing in the international distribution of high-quality
              pharmaceutical formulations and nutraceutical products through
              WHO-cGMP compliant manufacturing partnerships.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {focusPoints.map((point) => (
                <div key={point.title} className="flex gap-3">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10">
                    <svg
                      className="h-3.5 w-3.5 text-secondary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
