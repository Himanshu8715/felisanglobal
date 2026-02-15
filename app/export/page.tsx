import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title:
    "Export Solutions | Felisan Global - Pharmaceutical & Nutraceutical Exports",
  description:
    "Comprehensive pharmaceutical and nutraceutical export solutions including contract manufacturing, private labeling, regulatory support, and international logistics from India.",
};

const productCategories = [
  {
    name: "Tablets",
    items: [
      "Antibiotic Tablets",
      "Analgesic Tablets",
      "Antihypertensive Tablets",
      "Antidiabetic Tablets",
      "Multivitamin Tablets",
    ],
  },
  {
    name: "Capsules",
    items: [
      "Hard Gelatin Capsules",
      "Soft Gelatin Capsules",
      "Antibiotic Capsules",
      "Nutraceutical Capsules",
      "Herbal Capsules",
    ],
  },
  {
    name: "Dry Injections",
    items: [
      "Cephalosporin Injections",
      "Antibiotic Dry Injections",
      "Lyophilized Injections",
      "PPI Injections",
    ],
  },
  {
    name: "Syrups",
    items: [
      "Pediatric Syrups",
      "Cough Syrups",
      "Iron Syrups",
      "Multivitamin Syrups",
      "Antacid Suspensions",
    ],
  },
  {
    name: "Ointments",
    items: [
      "Dermatological Creams",
      "Antifungal Ointments",
      "Antiseptic Creams",
      "Topical Analgesics",
    ],
  },
  {
    name: "Nutraceuticals",
    items: [
      "Vitamin Supplements",
      "Mineral Supplements",
      "Protein Powders",
      "Herbal Extracts",
      "Omega Fatty Acids",
    ],
  },
];

const services = [
  {
    title: "Manufacturing Partnerships",
    description:
      "Our manufacturing network consists of WHO-cGMP certified pharmaceutical production facilities across India. Each facility undergoes regular quality audits and maintains international certifications. We match your product requirements with the most suitable manufacturing partner to ensure optimal quality, pricing, and production capacity.",
    features: [
      "WHO-cGMP certified facilities",
      "Regular quality audits",
      "Capacity for large-scale production",
      "Multiple dosage form capabilities",
    ],
  },
  {
    title: "Regulatory Support",
    description:
      "Navigating international pharmaceutical regulations requires expertise and documentation precision. Our regulatory team provides comprehensive support including dossier preparation, product registration assistance, and compliance documentation tailored to your target market requirements.",
    features: [
      "CTD/eCTD dossier preparation",
      "Market-specific regulatory guidance",
      "Product registration support",
      "Stability study coordination",
    ],
  },
  {
    title: "Supply Chain & Logistics",
    description:
      "Our integrated logistics coordination ensures reliable delivery from manufacturing facility to your port of destination. We manage every aspect of the supply chain including packaging, quality inspection, customs documentation, and cold chain handling where required.",
    features: [
      "End-to-end logistics management",
      "Cold chain capability",
      "Customs documentation",
      "Real-time shipment tracking",
    ],
  },
  {
    title: "Private Label Services",
    description:
      "Build your pharmaceutical brand with our comprehensive private label services. From product formulation and packaging design to regulatory documentation and market launch support, we provide everything needed to bring your branded pharmaceutical products to market.",
    features: [
      "Custom brand development",
      "Packaging design support",
      "Label compliance review",
      "Brand registration assistance",
    ],
  },
  {
    title: "Tender Supply Capabilities",
    description:
      "We support government and institutional pharmaceutical procurement through comprehensive tender participation. Our team assists with tender documentation, product dossiers, pricing structures, and supply commitments to help secure institutional contracts.",
    features: [
      "Government tender documentation",
      "Institutional supply contracts",
      "Competitive pricing structures",
      "Guaranteed supply commitments",
    ],
  },
];

export default function ExportPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary py-20 lg:py-28">
          <div className="absolute inset-0">
            <Image
              src="/images/global-logistics.jpg"
              alt="Global pharmaceutical logistics and shipping"
              fill
              className="object-cover opacity-15"
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
                Export Solutions
              </p>
              <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-primary-foreground lg:text-5xl">
                <span className="text-balance">
                  Pharmaceutical & Nutraceutical Export Solutions
                </span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                From product sourcing and manufacturing oversight to regulatory
                compliance and international logistics, Felisan Global provides
                integrated export solutions for pharmaceutical importers and
                distributors worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section id="products" className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
                Product Categories
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground lg:text-4xl">
                Export-Ready Product Portfolio
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our product portfolio spans all major pharmaceutical dosage
                forms and nutraceutical categories, each manufactured under
                WHO-cGMP conditions with full export documentation.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {productCategories.map((category) => (
                <div
                  key={category.name}
                  className="rounded-lg border border-border bg-card p-6"
                >
                  <h3 className="text-lg font-bold text-foreground">
                    {category.name}
                  </h3>
                  <ul className="mt-4 flex flex-col gap-2">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-muted py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
                Our Services
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground lg:text-4xl">
                Integrated Export Services
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Each service is designed to address specific challenges in
                international pharmaceutical trade, from regulatory navigation
                to reliable supply chain management.
              </p>
            </div>

            <div className="mt-12 flex flex-col gap-8">
              {services.map((service, i) => (
                <div
                  key={service.title}
                  className="rounded-lg border border-border bg-card p-8 lg:p-10"
                >
                  <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
                    <div className="lg:w-2/3">
                      <div className="flex items-center gap-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-xl font-bold text-foreground">
                          {service.title}
                        </h3>
                      </div>
                      <p className="mt-4 leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                    <div className="lg:w-1/3">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-secondary">
                        Key Features
                      </h4>
                      <ul className="mt-3 flex flex-col gap-2">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <svg
                              className="mt-0.5 h-4 w-4 shrink-0 text-secondary"
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
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
                Ready to Discuss Your Export Requirements?
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/70">
              Contact our export team to discuss product availability,
              regulatory requirements, and partnership structures.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-md bg-secondary px-8 py-3.5 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90"
            >
              Contact Export Team
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
