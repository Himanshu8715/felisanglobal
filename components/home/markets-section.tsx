const markets = [
  {
    region: "Africa",
    description:
      "Serving pharmaceutical needs across Sub-Saharan and North African markets with essential medicines and health supplements.",
    countries: "Nigeria, Kenya, Tanzania, Ghana, Ethiopia, and more",
  },
  {
    region: "Southeast Asia",
    description:
      "Supporting growing healthcare infrastructure with quality pharmaceutical formulations and nutraceutical products.",
    countries: "Myanmar, Cambodia, Vietnam, Philippines, and more",
  },
  {
    region: "Latin America",
    description:
      "Delivering compliant pharmaceutical products to emerging and established markets across the Americas.",
    countries: "Brazil, Colombia, Peru, Ecuador, and more",
  },
  {
    region: "CIS Region",
    description:
      "Providing pharmaceutical export solutions to Commonwealth of Independent States with adapted regulatory documentation.",
    countries: "Uzbekistan, Kazakhstan, Kyrgyzstan, and more",
  },
];

export function MarketsSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
            Global Reach
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground lg:text-4xl">
            <span className="text-balance">
              Serving International Markets
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Felisan Global exports pharmaceutical and nutraceutical products to
            markets across four major global regions, with active partnerships
            and growing distribution networks.
          </p>
        </div>

        {/* World map visual representation */}
        <div className="mt-16 rounded-xl border border-border bg-muted p-8 lg:p-12">
          <div className="grid gap-8 sm:grid-cols-2">
            {markets.map((market) => (
              <div
                key={market.region}
                className="flex gap-5 rounded-lg bg-card p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary">
                  <svg
                    className="h-6 w-6 text-primary-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {market.region}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {market.description}
                  </p>
                  <p className="mt-3 text-xs text-secondary">
                    {market.countries}
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
