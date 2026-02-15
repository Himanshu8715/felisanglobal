"use client";

import { useState } from "react";

const productOptions = [
  "Tablets",
  "Capsules",
  "Dry Injections",
  "Syrups",
  "Ointments",
  "Nutraceutical Supplements",
  "Private Label Services",
  "Contract Manufacturing",
  "Other",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="mt-8 rounded-lg bg-secondary/10 p-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
          <svg
            className="h-8 w-8 text-secondary-foreground"
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
        <h3 className="mt-4 text-lg font-bold text-foreground">
          Inquiry Submitted
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Thank you for your inquiry. Our export team will review your
          requirements and respond within one business day.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-medium text-secondary hover:underline"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      className="mt-8 flex flex-col gap-6"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-sm font-medium text-foreground"
          >
            Full Name <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your full name"
            className="rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="company"
            className="text-sm font-medium text-foreground"
          >
            Company Name <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            placeholder="Your company name"
            className="rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-foreground"
          >
            Email Address <span className="text-destructive">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="your@email.com"
            className="rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="country"
            className="text-sm font-medium text-foreground"
          >
            Country <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            id="country"
            name="country"
            required
            placeholder="Your country"
            className="rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="product"
          className="text-sm font-medium text-foreground"
        >
          Product Interest <span className="text-destructive">*</span>
        </label>
        <select
          id="product"
          name="product"
          required
          className="rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
          defaultValue=""
        >
          <option value="" disabled>
            Select product category
          </option>
          {productOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-foreground"
        >
          Message <span className="text-destructive">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Please describe your requirements, quantities, and any specific product details..."
          className="resize-none rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
        />
      </div>

      <button
        type="submit"
        className="mt-2 rounded-md bg-secondary px-8 py-3.5 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90"
      >
        Submit Export Inquiry
      </button>

      <p className="text-xs text-muted-foreground">
        By submitting this form, you agree to be contacted by our export team
        regarding your inquiry. We respect your privacy and will not share your
        information with third parties.
      </p>
    </form>
  );
}
