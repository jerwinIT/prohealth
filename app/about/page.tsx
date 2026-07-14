import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, HeartHandshake, ShieldCheck, Users } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { CtaSection } from "@/components/cta-section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us | ProHealth Diagnostic Laboratory",
  description:
    "Learn about ProHealth Diagnostic Laboratory — our mission, values, and commitment to accurate, compassionate diagnostic care in Looc, Romblon.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Accuracy",
    description:
      "We uphold strict quality control so every result is precise and dependable.",
  },
  {
    icon: HeartHandshake,
    title: "Compassion",
    description:
      "Patients are treated with warmth, dignity, and genuine concern for their wellbeing.",
  },
  {
    icon: Users,
    title: "Accessibility",
    description:
      "Through home service and fair pricing, we make quality diagnostics available to all.",
  },
];

const stats = [
  { value: "6+", label: "Diagnostic Services" },
  { value: "100%", label: "Confidential Handling" },
  { value: "Same-day", label: "Results Available" },
  { value: "Home", label: "Service Offered" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Caring for our community's health"
        description={`${site.fullName} is dedicated to delivering accurate, timely, and compassionate diagnostic services to the people of Looc, Romblon and beyond.`}
      />

      {/* Story */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-xl shadow-primary/10">
            <Image
              src="/images/prohealth-team.jpg"
              alt="The ProHealth Diagnostic Laboratory team"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
              Who we are
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground text-pretty">
              ProHealth Diagnostic Laboratory was established to bring
              professional, hospital-grade diagnostic services closer to the
              community. Combining modern equipment with a dedicated team of
              skilled professionals, we ensure that every patient receives
              reliable results and the attentive care they deserve.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground text-pretty">
              Whether you visit our facility along Rizal Street or request our
              home service, our promise stays the same: accurate diagnostics
              delivered with honesty and heart.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-14 sm:px-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-primary-foreground/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-8">
            <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Target className="size-6" />
            </span>
            <h3 className="text-xl font-semibold text-foreground">
              Our Mission
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground text-pretty">
              To provide accurate, accessible, and affordable diagnostic
              services that empower our community to make informed health
              decisions — always with compassion and integrity.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-8">
            <span className="flex size-12 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
              <Eye className="size-6" />
            </span>
            <h3 className="text-xl font-semibold text-foreground">
              Our Vision
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground text-pretty">
              To be the most trusted diagnostic laboratory in Romblon,
              recognized for excellence in patient care, reliable results, and
              service that reaches every family who needs it.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Our Values
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
              What guides everything we do
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6"
                >
                  <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
