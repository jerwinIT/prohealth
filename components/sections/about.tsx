import Image from "next/image";
import { MapPin, ShieldCheck, HeartHandshake, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: ShieldCheck,
    title: "Accurate & Reliable Results",
    description:
      "Our diagnostic services are performed with a commitment to accuracy, helping healthcare providers and patients make informed medical decisions.",
  },
  {
    icon: HeartHandshake,
    title: "Patient-Focused Care",
    description:
      "We value every patient by providing friendly assistance, professional service, and a comfortable healthcare experience from inquiry to examination.",
  },
  {
    icon: Home,
    title: "Home Service Available",
    description:
      "Selected laboratory services are available in the comfort of your home, making healthcare more convenient for seniors, busy professionals, and patients with limited mobility.",
  },
];

export default function AboutSection() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-24 px-4 sm:px-6 lg:px-8">
      {/* Row 1 — Welcome intro (left) + circle image composition (right) */}
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left */}
        <div>
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
            About Us
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Welcome to ProHealth Diagnostic Laboratory
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            ProHealth Diagnostic Laboratory provides accurate, reliable, and
            timely diagnostic services in Looc, Romblon. We offer laboratory
            examinations, ECG, X-Ray, Drug Testing, Neuro Examinations, and Home
            Service with professional healthcare and compassionate patient care.
          </p>

          <ul className="mt-8 flex flex-col gap-6">
            {features.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <div>
                  <p className="font-semibold text-foreground">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <Button
            size="lg"
            className="mt-9 h-12 rounded-md px-7 text-base"
            render={<a href="#contact" />}
            nativeButton={false}
          >
            <MapPin className="size-4" />
            View Our Location
          </Button>
        </div>

        {/* Right — two overlapping circular images over a dotted texture */}
        <div className="relative mx-auto aspect-square w-full max-w-md">
          {/* Dotted texture backdrop */}
          <div
            className="absolute -inset-6 -z-10 rounded-[3rem]"
            style={{
              backgroundImage:
                "radial-gradient(currentColor 1.5px, transparent 1.5px)",
              backgroundSize: "16px 16px",
              color: "var(--color-primary, #0ea5e9)",
              opacity: 0.15,
            }}
            aria-hidden
          />

          {/* Primary circle image */}
          <div className="absolute left-0 top-0 size-[70%] overflow-hidden rounded-full ring-4 ring-background">
            <Image
              src="/images/about-lab-1.jpg"
              alt="ProHealth Diagnostic Laboratory technician preparing a sample"
              fill
              sizes="(min-width: 1024px) 320px, 60vw"
              className="object-cover"
            />
          </div>

          {/* Secondary, offset circle image */}
          <div className="absolute bottom-0 right-0 size-[52%] overflow-hidden rounded-full ring-4 ring-background">
            <Image
              src="/images/about-lab-2.jpg"
              alt="ProHealth Diagnostic Laboratory equipment used for examinations"
              fill
              sizes="(min-width: 1024px) 240px, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Row 2 — Who we are (left) + team photo (right) */}
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left — team photo */}
        <div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem]">
            <Image
              src="/images/prohealth-team.jpg"
              alt="The ProHealth Diagnostic Laboratory team"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Right */}
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Who we are
          </h3>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            ProHealth Diagnostic Laboratory was established to bring
            professional, hospital-grade diagnostic services closer to the
            community. Combining modern equipment with a dedicated team of
            skilled professionals, we ensure that every patient receives
            reliable results and the attentive care they deserve.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Whether you visit our facility along Rizal Street or request our
            home service, our promise stays the same: accurate diagnostics
            delivered with honesty and heart.
          </p>
        </div>
      </div>
    </div>
  );
}
