import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/site";

const steps = [
  {
    number: "01",
    title: "Get in touch",
    description:
      "Call us or drop by the laboratory to inquire about the test you need.",
  },
  {
    number: "02",
    title: "Schedule your visit",
    description:
      "Choose to visit our facility or request convenient home service.",
  },
  {
    number: "03",
    title: "Receive your results",
    description:
      "Get accurate, clearly reported results — many available the same day.",
  },
];

export default function ServicesSection() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
      {/* Section intro */}
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
          Our Services
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Diagnostic services built around you
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          From routine lab work to home-based sample collection, every service
          is delivered with accuracy and genuine patient care.
        </p>
      </div>

      {/* Alternating service rows */}
      <div className="mt-20 flex flex-col lg:mt-28">
        {services.map((service, index) => {
          const imageFirst = index % 2 === 0;
          const number = String(index + 1).padStart(2, "0");

          return (
            <div
              key={service.title}
              id={service.image}
              className={
                index === 0
                  ? "grid scroll-mt-24 items-center gap-10 pb-20 lg:grid-cols-2 lg:gap-16 lg:pb-28"
                  : "grid scroll-mt-24 items-center gap-10 border-t border-border pt-20 pb-20 lg:grid-cols-2 lg:gap-16 lg:pt-28 lg:pb-28"
              }
            >
              {/* Image */}
              <div className={imageFirst ? "lg:order-1" : "lg:order-2"}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem]">
                  <Image
                    src={`/images/${service.image}.jpg`}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div className={imageFirst ? "lg:order-2" : "lg:order-1"}>
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-primary" aria-hidden />
                  <span className="text-sm font-semibold tracking-widest text-primary">
                    {number}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {service.description}
                </p>

                <ul className="mt-7 flex flex-col gap-4">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-3">
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="size-3.5" strokeWidth={3} />
                      </span>
                      <span className="text-sm font-medium text-foreground sm:text-base">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="mt-8 h-10 rounded-md px-5"
                  render={<a href="#contact" />}
                  nativeButton={false}
                >
                  Inquire About This Service
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Simple steps to better health */}
      <div className="mt-4 border-t border-border pt-20 lg:pt-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Simple steps to better health
          </h2>
        </div>

        <div className="relative mt-16 grid gap-12 sm:grid-cols-3 sm:gap-8">
          {/* Connecting line behind the step numbers on larger screens */}
          <div
            className="absolute top-6 right-[16.6%] left-[16.6%] hidden h-px bg-border sm:block"
            aria-hidden
          />

          {steps.map((step) => (
            <div
              key={step.title}
              className="relative flex flex-col items-center text-center"
            >
              <span className="relative z-10 flex size-12 items-center justify-center rounded-full bg-primary text-base font-bold text-primary-foreground">
                {step.number}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
