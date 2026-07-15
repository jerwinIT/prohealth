import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";
import { navLinks, services, site, formatPhone, telHref } from "@/lib/site";
import Image from "next/image";
export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-2">
            <span className="relative flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-lg">
              <Image
                src="/images/prohealth-icon.jpg"
                alt="ProHealth Diagnostic Laboratory logo"
                fill
                sizes="36px"
                className="object-cover"
                priority
              />
            </span>
            <span className="text-base font-bold tracking-tight text-foreground">
              Pro<span className="text-primary">Health</span>
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {site.tagline} Trusted diagnostic services for the Looc, Romblon
            community.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Services</h3>
          <ul className="mt-4 space-y-2.5">
            {services.slice(0, 5).map((s) => (
              <li key={s.title}>
                <Link
                  href={`#${s.image}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">
            Get in Touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{site.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
              <span className="flex flex-col">
                {site.phones.map((p) => (
                  <a
                    key={p}
                    href={telHref(p)}
                    className="tabular-nums hover:text-primary"
                  >
                    {formatPhone(p)}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
              <span className="flex flex-col gap-0.5">
                {site.hours.map((h) => (
                  <span key={h.day}>
                    {h.day}: {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {site.fullName}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
