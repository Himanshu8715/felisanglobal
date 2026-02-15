import Image from "next/image";

const capabilities = [
  {
    title: "WHO-cGMP Compliant Manufacturing Network",
    description:
      "Access to a network of certified manufacturing partners ensuring consistent product quality and regulatory compliance.",
  },
  {
    title: "Private Labeling & Contract Manufacturing",
    description:
      "End-to-end private label solutions including formulation, packaging design, and regulatory documentation.",
  },
  {
    title: "Dossier & Regulatory Documentation Support",
    description:
      "Complete dossier preparation and regulatory support for product registration in target markets.",
  },
  {
    title: "Bulk and Branded Export Models",
    description:
      "Flexible export models to suit diverse market requirements, from bulk APIs to finished branded products.",
  },
  {
    title: "International Logistics Coordination",
    description:
      "Managed logistics from manufacturing to port of destination, including cold chain handling where required.",
  },
  {
    title: "Tender Participation Support",
    description:
      "Comprehensive support for government and institutional tender submissions with full documentation packages.",
  },
  {
    title: "Custom Packaging Solutions",
    description:
      "Tailored packaging options meeting destination country regulations and market preferences.",
  },
];

export function CapabilitiesSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
              Export Capabilities
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-foreground lg:text-4xl">
              <span className="text-balance">
                Comprehensive Export Infrastructure
              </span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Our integrated export capabilities span the entire value chain,
              from product sourcing and quality assurance to regulatory
              compliance and international logistics.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              {capabilities.map((cap, i) => (
                <div
                  key={cap.title}
                  className="flex gap-4 rounded-lg border border-border p-5 transition-colors hover:border-secondary/30"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">
                      {cap.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {cap.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block">
            <div className="sticky top-32">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src="/images/pharma-packaging.jpg"
                  alt="Pharmaceutical packaging and export operations"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-6 rounded-lg bg-primary p-6">
                <p className="text-sm font-medium text-primary-foreground">
                  Our manufacturing partners maintain WHO-cGMP certification and
                  operate under strict quality management systems verified
                  through regular audits and inspections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
