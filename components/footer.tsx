import Link from "next/link";

const footerLinks = {
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/export", label: "Export Solutions" },
    { href: "/contact", label: "Contact" },
  ],
  Products: [
    { href: "/export#products", label: "Tablets & Capsules" },
    { href: "/export#products", label: "Dry Injections" },
    { href: "/export#products", label: "Syrups & Ointments" },
    { href: "/export#products", label: "Nutraceuticals" },
  ],
  Services: [
    { href: "/export#services", label: "Private Labeling" },
    { href: "/export#services", label: "Contract Manufacturing" },
    { href: "/export#services", label: "Regulatory Support" },
    { href: "/export#services", label: "Tender Supply" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary">
                <span className="text-lg font-bold text-secondary-foreground">
                  FG
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">
                  Felisan Global
                </span>
                <span className="text-[10px] uppercase tracking-widest text-primary-foreground/60">
                  Pharmaceutical Exports
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              India-based pharmaceutical and nutraceutical export company
              delivering WHO-cGMP compliant products to international markets
              with integrity and operational excellence.
            </p>
            <p className="mt-4 text-sm text-primary-foreground/50">
              info@felisanglobal.com
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">
                {title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/60 transition-colors hover:text-secondary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 md:flex-row">
          <p className="text-xs text-primary-foreground/50">
            {new Date().getFullYear()} Felisan Global. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/about"
              className="text-xs text-primary-foreground/50 transition-colors hover:text-primary-foreground/80"
            >
              Privacy Policy
            </Link>
            <Link
              href="/about"
              className="text-xs text-primary-foreground/50 transition-colors hover:text-primary-foreground/80"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
