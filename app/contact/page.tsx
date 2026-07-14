import type { Metadata } from "next";
import { MapPin, Phone, Clock, Navigation, ArrowUpRight } from "lucide-react";
import { FacebookIcon } from "@/components/icons/fb-icon";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/page-header";
import { ContactMap } from "@/components/contact-map";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us | ProHealth Diagnostic Laboratory",
  description: `Visit ProHealth Diagnostic Laboratory at ${site.address}. Call ${site.phones.join(" or ")} to book a test or request home service.`,
};

const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=12.261608,121.9938289";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="We're here to help"
        description="Have a question or ready to book a test? Reach out, visit our laboratory, or find us on the map below."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="grid items-stretch gap-10 lg:grid-cols-2">
          {/* Info */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Get in touch
              </h2>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground text-pretty">
                Our friendly team is ready to assist you with appointments,
                inquiries, and home service requests.
              </p>
            </div>

            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <MapPin className="size-5" />
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">
                      Our Location
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {site.address}
                    </p>
                  </div>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </a>
              </li>

              <li className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
                  <Phone className="size-5" />
                </span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">
                    Phone Numbers
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {site.phones.map((p) => (
                      <a
                        key={p}
                        href={`tel:${p}`}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-brand-red/40 hover:bg-brand-red/10 hover:text-brand-red"
                      >
                        <Phone className="size-3.5" />
                        {p}
                      </a>
                    ))}
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Clock className="size-5" />
                </span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">
                    Business Hours
                  </p>
                  <ul className="mt-1 space-y-0.5 text-sm text-muted-foreground">
                    {site.hours.map((h) => (
                      <li key={h.day} className="flex justify-between gap-4">
                        <span>{h.day}</span>
                        <span className="font-medium text-foreground">
                          {h.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1877F2]/40 hover:shadow-lg hover:shadow-[#1877F2]/5"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#1877F2]/10 text-[#1877F2] transition-colors group-hover:bg-[#1877F2] group-hover:text-white">
                    <FacebookIcon className="size-5" />
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">
                      Facebook
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Message us on Facebook
                    </p>
                  </div>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#1877F2]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <MapPin className="size-5 text-primary" />
                <h2 className="text-xl font-semibold text-foreground">
                  Find us on the map
                </h2>
              </div>
              <Button
                size="sm"
                render={
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                nativeButton={false}
              >
                <Navigation className="size-4" />
                Get Directions
              </Button>
            </div>
            <div className="relative isolate z-0 h-80 w-full overflow-hidden rounded-xl border border-border sm:h-96 lg:h-auto lg:min-h-96 lg:flex-1">
              <ContactMap />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
