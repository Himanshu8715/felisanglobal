import Link from "next/link";
import Image from "next/image";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 lg:py-28">
      <div className="absolute inset-0">
        <Image
          src="/images/global-logistics.jpg"
          alt="Global pharmaceutical logistics"
          fill
          className="object-cover opacity-10"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-primary-foreground lg:text-4xl">
          <span className="text-balance">
            Partner with a Trusted Pharmaceutical Export Company.
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
          Begin a conversation about your pharmaceutical import requirements.
          Our export team is ready to discuss product availability, regulatory
          documentation, and partnership models.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-secondary px-8 py-3.5 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90"
          >
            Request Export Consultation
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
            href="/export"
            className="inline-flex items-center justify-center rounded-md border border-primary-foreground/30 px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            View Export Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}
