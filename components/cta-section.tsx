import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { FacebookIcon } from "@/components/icons/fb-icon";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function CtaSection() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 md:py-20">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Ready to prioritize your health?
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-primary-foreground/85 text-pretty">
          Book your laboratory test today or ask about our home service. Our
          caring team is here to help you every step of the way.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            size="lg"
            variant="secondary"
            className="bg-background text-primary hover:bg-background/90"
            render={<Link href="/contact" />}
            nativeButton={false}
          >
            <MapPin className="size-4" />
            Visit Now
          </Button>
          <Button
            size="lg"
            className="bg-brand-red text-brand-red-foreground hover:bg-brand-red/90"
            render={<a href={`tel:${site.phones[0]}`} />}
            nativeButton={false}
          >
            <Phone className="size-4" />
            Call {site.phones[0]}
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="bg-[#1877F2] text-white hover:bg-[#1877F2]/90"
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
            Message Us
          </Button>
        </div>
      </div>
    </section>
  );
}
