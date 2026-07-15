import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Phone,
  ShieldCheck,
  Clock,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/service-card";
import { CtaSection } from "@/components/cta-section";
import { services, highlights, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary/40">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-background px-3 py-1 text-xs font-medium text-primary">
              <ShieldCheck className="size-3.5" />
              Trusted Diagnostics in Looc, Romblon
            </span>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
              Accurate results,{" "}
              <span className="text-primary">compassionate care.</span>
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty">
              {site.fullName} provides reliable laboratory examinations, ECG,
              X-ray, drug testing, and home service — all delivered with
              precision and genuine care for your family.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                render={<Link href="/services" />}
                nativeButton={false}
              >
                Explore Services
                <ArrowRight className="size-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                render={<a href={`tel:${site.phones[0]}`} />}
                nativeButton={false}
              >
                <Phone className="size-4" />
                Call to Book
              </Button>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <MapPin className="size-4 text-primary" />
                {site.address}
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-xl shadow-primary/10">
              <Image
                src="/images/lab-hero.png"
                alt="Medical technologist working in the ProHealth diagnostic laboratory"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-xl border border-border bg-background p-4 shadow-lg sm:flex">
              <span className="flex size-11 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
                <Award className="size-6" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-foreground">
                  Quality Assured
                </p>
                <p className="text-xs text-muted-foreground">
                  Precision you can trust
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6"
              >
                <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Our Services
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
              Complete diagnostics under one roof
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
              From routine laboratory work to specialized examinations, we offer
              a full range of services to keep you and your loved ones healthy.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button
              variant="outline"
              size="lg"
              render={<Link href="/services" />}
              nativeButton={false}
            >
              View All Services
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Home service band */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative order-last aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-xl shadow-primary/10 lg:order-first">
            <Image
              src="/images/home-service.png"
              alt="Nurse providing home service sample collection to a patient"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="flex flex-col gap-5">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-red/10 px-3 py-1 text-xs font-medium text-brand-red">
              Home Service Available
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
              Quality care, right at your doorstep
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground text-pretty">
              For patients who cannot visit the laboratory, our team offers
              convenient in-home sample collection and select tests.
              Comfortable, safe, and handled by professionals who genuinely
              care.
            </p>
            <ul className="space-y-3">
              {[
                "Flexible scheduling that fits your day",
                "Safe, sanitary collection procedures",
                "Results delivered promptly and clearly",
              ].map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <Clock className="size-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{point}</span>
                </li>
              ))}
            </ul>
            <div>
              <Button render={<Link href="/contact" />} nativeButton={false}>
                Request Home Service
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
