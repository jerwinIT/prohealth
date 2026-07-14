"use client";

import dynamic from "next/dynamic";

const LocationMap = dynamic(
  () => import("@/components/location-map").then((m) => m.LocationMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full min-h-80 w-full items-center justify-center bg-muted">
        <span className="text-sm text-muted-foreground">Loading map…</span>
      </div>
    ),
  },
);

export function ContactMap() {
  return (
    <div className="relative isolate h-full w-full">
      <LocationMap />
    </div>
  );
}
