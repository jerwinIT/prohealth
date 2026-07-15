import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site, formatPhone, telHref } from "@/lib/site";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.185 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.459h-1.26c-1.243 0-1.631.771-1.631 1.562v1.875h2.774l-.444 2.91h-2.33V22c4.78-.755 8.438-4.92 8.438-9.94Z" />
    </svg>
  );
}

export default function ContactSection() {
  const query = encodeURIComponent(site.address);
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
  const mapEmbedUrl = `https://www.google.com/maps?q=${query}&z=17&output=embed`;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Section intro */}
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
          Contact Us
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Visit or reach out anytime
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Have questions or ready to schedule your test? We&apos;re just a call,
          message, or visit away.
        </p>

        <Button
          variant="outline"
          className="mt-6 h-11 rounded-md px-6"
          render={
            <a href={mapsSearchUrl} target="_blank" rel="noopener noreferrer" />
          }
          nativeButton={false}
        >
          <MapPin className="size-4" />
          View on Google Maps
        </Button>
      </div>

      {/* Contact info + Map */}
      <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Left — contact info */}
        <div className="flex flex-col gap-8 rounded-[2rem] border border-border bg-background p-8 sm:p-10">
          <div className="flex items-start gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <MapPin className="size-5" />
            </span>
            <div>
              <p className="font-semibold text-foreground">Address</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {site.address}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Clock className="size-5" />
            </span>
            <div className="flex-1">
              <p className="font-semibold text-foreground">Business Hours</p>
              <ul className="mt-2 flex flex-col gap-1.5">
                {site.hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-baseline justify-between gap-4 text-sm"
                  >
                    <span className="text-muted-foreground">{h.day}</span>
                    <span className="font-medium text-foreground">
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Phone className="size-5" />
            </span>
            <div className="flex-1">
              <p className="font-semibold text-foreground">Phone Number</p>
              <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                {site.phones.map((phone) => (
                  <Button
                    key={phone}
                    variant="secondary"
                    className="h-10 justify-start rounded-md px-4"
                    render={<a href={telHref(phone)} />}
                    nativeButton={false}
                  >
                    <Phone className="size-4" />
                    {formatPhone(phone)}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-1 border-t border-border pt-6">
            <Button
              className="h-11 w-full rounded-md sm:w-auto"
              render={
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              nativeButton={false}
            >
              <FacebookIcon className="size-4" />
              Visit Us on Facebook
            </Button>
          </div>
        </div>

        {/* Right — map */}
        <div className="relative min-h-[420px] w-full overflow-hidden lg:min-h-full">
          <iframe
            src={mapEmbedUrl}
            className="absolute inset-0 size-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ProHealth Diagnostic Laboratory location"
          />
        </div>
      </div>
    </div>
  );
}
