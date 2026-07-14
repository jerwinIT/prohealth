import Image from "next/image";
import { Card } from "@/components/ui/card";
import type { Service } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ServiceCard({
  service,
  showDetails = false,
  className,
}: {
  service: Service;
  showDetails?: boolean;
  className?: string;
}) {
  return (
    <Card
      className={cn(
        "group h-full gap-4 overflow-hidden border-border p-0 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5",
        className,
      )}
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={`/images/${service.image}.jpg`}
          alt={service.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="space-y-2 px-6 pt-2">
        <h3 className="text-lg font-semibold text-foreground text-balance">
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground mb-2">
          {service.description}
        </p>
      </div>
      {showDetails && (
        <ul className="mt-1 space-y-2 border-t border-border px-6 pb-6 pt-4">
          {service.details.map((d) => (
            <li
              key={d}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-red" />
              {d}
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
