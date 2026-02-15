const qualityPillars = [
  {
    title: "WHO-cGMP Standards",
    description:
      "All manufacturing partnerships are exclusively with facilities maintaining WHO-cGMP certification and compliance.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    title: "Quality Control Systems",
    description:
      "Multi-stage quality control processes from raw material testing through to finished product release and stability studies.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11.42 15.17l-5.1-5.1m0 0L3.6 12.79m2.72-2.72l2.72 2.72M20.4 8.83l-5.1 5.1m0 0l-2.72-2.72m2.72 2.72l2.72-2.72"
        />
      </svg>
    ),
  },
  {
    title: "Batch Traceability",
    description:
      "Complete batch traceability from raw material sourcing through manufacturing, packaging, and shipment to final destination.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
        />
      </svg>
    ),
  },
  {
    title: "Documentation Transparency",
    description:
      "Full documentation packages including Certificates of Analysis, stability data, and regulatory filings for every shipment.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
  },
  {
    title: "International Export Documentation",
    description:
      "Comprehensive export documentation meeting international trade requirements including shipping, customs, and health authority filings.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 9c0 .748-.092 1.477-.264 2.17m-15.472 0A8.959 8.959 0 003 9c0 .748.092 1.477.264 2.17m0 0a14.953 14.953 0 008.736 5.083m0 0a14.953 14.953 0 008.736-5.083"
        />
      </svg>
    ),
  },
];

export function QualitySection() {
  return (
    <section className="bg-primary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
            Quality & Compliance
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-primary-foreground lg:text-4xl">
            <span className="text-balance">
              Uncompromising Quality Standards
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/70">
            Quality and compliance form the foundation of every operation at
            Felisan Global. Our commitment to international standards ensures
            product integrity from source to destination.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {qualityPillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 p-8 ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                {pillar.icon}
              </div>
              <h3 className="mt-6 text-base font-bold text-primary-foreground">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
