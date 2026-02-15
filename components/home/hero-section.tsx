import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-pharma.jpg"
          alt="Pharmaceutical manufacturing facility"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-36">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-secondary" />
            <span className="text-xs font-medium uppercase tracking-wider text-secondary">
              WHO-cGMP Compliant
            </span>
          </div>
          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance">
              Global Pharmaceutical & Nutraceutical Export Excellence
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            Delivering WHO-cGMP compliant medicines and nutraceutical products
            to international markets with reliability, compliance, and supply
            chain precision.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/export"
              className="inline-flex items-center justify-center rounded-md bg-secondary px-8 py-3.5 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90"
            >
              Explore Our Products
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-primary-foreground/30 px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Contact Our Export Team
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap items-center gap-8 border-t border-primary-foreground/10 pt-8">
            <div>
              <p className="text-2xl font-bold text-secondary">50+</p>
              <p className="text-xs text-primary-foreground/60">
                Countries Served
              </p>
            </div>
            <div className="h-10 w-px bg-primary-foreground/10" />
            <div>
              <p className="text-2xl font-bold text-secondary">WHO-cGMP</p>
              <p className="text-xs text-primary-foreground/60">
                Compliant Manufacturing
              </p>
            </div>
            <div className="h-10 w-px bg-primary-foreground/10" />
            <div>
              <p className="text-2xl font-bold text-secondary">200+</p>
              <p className="text-xs text-primary-foreground/60">
                Product Formulations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
