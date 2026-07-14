import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/page-header";
import { ServiceCard } from "@/components/service-card";
import { CtaSection } from "@/components/cta-section";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services | ProHealth Diagnostic Laboratory",
  description:
    "Explore ProHealth Diagnostic Laboratory services: laboratory examinations, neuro exam, drug test, ECG, X-ray, and home service in Looc, Romblon.",
};

const steps = [
  {
    title: "Get in touch",
    description:
      "Call us or drop by the laboratory to inquire about the test you need.",
  },
  {
    title: "Schedule your visit",
    description:
      "Choose to visit our facility or request convenient home service.",
  },
  {
    title: "Receive your results",
    description:
      "Get accurate, clearly reported results — many available the same day.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Diagnostics you can rely on"
        description="We offer a comprehensive range of laboratory and diagnostic services, each performed with precision and care by our professional team."
      />

      {/* Services grid */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} showDetails />
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              How It Works
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
              Simple steps to better health
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="relative flex flex-col gap-3 rounded-xl border border-border bg-card p-6"
              >
                <span className="flex size-11 items-center justify-center rounded-lg bg-primary text-lg font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <h3 className="text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note band */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-col items-start gap-5 rounded-2xl border border-border bg-card p-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
              <ClipboardCheck className="size-6" />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Not sure which test you need?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Our staff is happy to guide you. Reach out and we&apos;ll help
                you find the right service.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button render={<Link href="/contact" />} nativeButton={false}>
              Contact Us
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              render={<a href={`tel:${site.phones[0]}`} />}
              nativeButton={false}
            >
              <Phone className="size-4" />
              {site.phones[0]}
            </Button>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
