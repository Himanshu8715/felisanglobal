import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "About Us | Felisan Global - Pharmaceutical Export Company India",
  description:
    "Learn about Felisan Global, an India-based pharmaceutical and nutraceutical export company committed to quality, compliance, and international partnerships.",
};

const values = [
  {
    title: "Integrity",
    description:
      "We operate with complete transparency and ethical standards in every business relationship, ensuring trust is the foundation of our partnerships.",
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
    title: "Compliance",
    description:
      "Adherence to WHO-cGMP standards and international regulatory frameworks is non-negotiable in every aspect of our operations and partnerships.",
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
    title: "Quality",
    description:
      "Every product that carries our endorsement undergoes rigorous quality control testing and meets international pharmaceutical standards without exception.",
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
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
    ),
  },
  {
    title: "Reliability",
    description:
      "Consistent supply chain performance, timely communication, and dependable delivery schedules form the backbone of our service commitment.",
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
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

const milestones = [
  {
    label: "Company Founded",
    description:
      "Felisan Global established as a pharmaceutical export entity focused on international market development.",
  },
  {
    label: "Manufacturing Network",
    description:
      "Built partnerships with WHO-cGMP certified manufacturing facilities across India.",
  },
  {
    label: "Market Expansion",
    description:
      "Extended export operations to Africa, Southeast Asia, Latin America, and CIS regions.",
  },
  {
    label: "Comprehensive Services",
    description:
      "Launched full-service export capabilities including private labeling, regulatory support, and tender supply.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary py-20 lg:py-28">
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
                About Felisan Global
              </p>
              <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-primary-foreground lg:text-5xl">
                <span className="text-balance">
                  Building Trust in International Pharmaceutical Trade
                </span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                An India-based pharmaceutical and nutraceutical export company
                committed to delivering compliant, high-quality products to
                global markets with integrity and operational excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/images/about-team.jpg"
                  alt="Felisan Global executive team"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center">
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground">
                    Our Mission
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    To deliver compliant, high-quality pharmaceutical and
                    nutraceutical products to global markets with integrity and
                    operational excellence. We strive to be the bridge between
                    {"India's"} pharmaceutical manufacturing capability and the
                    world{"'s"} healthcare needs.
                  </p>
                </div>

                <div className="mt-10 border-t border-border pt-10">
                  <h2 className="font-serif text-3xl font-bold text-foreground">
                    Our Vision
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    To become a trusted international pharmaceutical export
                    partner recognized for unwavering quality standards,
                    regulatory compliance, and the ability to deliver
                    consistently across diverse global markets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-muted py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
                Our Values
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground lg:text-4xl">
                The Principles That Guide Us
              </h2>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-lg border border-border bg-card p-8 text-center"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                    {value.icon}
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Journey */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
                Our Journey
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground lg:text-4xl">
                Building a Global Presence
              </h2>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {milestones.map((milestone, i) => (
                <div key={milestone.label} className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-4 text-base font-bold text-foreground">
                    {milestone.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-primary-foreground lg:text-4xl">
              <span className="text-balance">
                Begin a Conversation with Our Team
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/70">
              Whether you are exploring new pharmaceutical supply partnerships
              or seeking a reliable export partner, we welcome the opportunity
              to discuss how we can support your business objectives.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-md bg-secondary px-8 py-3.5 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
