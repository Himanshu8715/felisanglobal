import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us | Felisan Global - Pharmaceutical Export Inquiry",
  description:
    "Contact Felisan Global for pharmaceutical and nutraceutical export inquiries. Request a consultation with our export team for product availability and partnership opportunities.",
};

const contactInfo = [
  {
    title: "Email",
    detail: "info@felisanglobal.com",
    description: "For export inquiries and partnership discussions",
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
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    title: "Headquarters",
    detail: "India",
    description: "Pharmaceutical export operations base",
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
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
  },
  {
    title: "Business Hours",
    detail: "Monday - Saturday",
    description: "9:00 AM - 6:00 PM IST",
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

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-primary py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
                Contact Us
              </p>
              <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-primary-foreground lg:text-5xl">
                <span className="text-balance">
                  Start an Export Inquiry
                </span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                Our export team is available to discuss your pharmaceutical and
                nutraceutical import requirements, product availability, and
                partnership opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info + Form */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
              {/* Contact Info */}
              <div className="lg:col-span-2">
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Get in Touch
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Submit your export inquiry using the form, or reach out
                  directly through the contact details below. We respond to all
                  inquiries within one business day.
                </p>

                <div className="mt-10 flex flex-col gap-8">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {info.title}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-foreground">
                          {info.detail}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick links */}
                <div className="mt-12 rounded-lg border border-border bg-muted p-6">
                  <h3 className="text-sm font-semibold text-foreground">
                    Quick Links
                  </h3>
                  <div className="mt-4 flex flex-col gap-3">
                    <a
                      href="/export"
                      className="text-sm text-secondary hover:underline"
                    >
                      View Export Solutions
                    </a>
                    <a
                      href="/about"
                      className="text-sm text-secondary hover:underline"
                    >
                      About Felisan Global
                    </a>
                    <a
                      href="/export#products"
                      className="text-sm text-secondary hover:underline"
                    >
                      Product Portfolio
                    </a>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-3">
                <div className="rounded-lg border border-border bg-card p-8 lg:p-10">
                  <h2 className="font-serif text-2xl font-bold text-foreground">
                    Export Inquiry Form
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Please provide your details and requirements. Our team will
                    respond within one business day.
                  </p>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
