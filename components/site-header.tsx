"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, site, formatPhone, telHref } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  // Scroll-spy: this is a one-page site, so the route never changes —
  // usePathname() always returns "/" and can't tell sections apart.
  // Instead, watch which section is actually in view and highlight that link.
  useEffect(() => {
    const sectionIds = navLinks
      .filter((link) => link.href.startsWith("#"))
      .map((link) => link.href.slice(1));

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    // Near the very top of the page, always force "Home" — don't rely on the
    // IntersectionObserver callback alone, since it may fire mid-scroll
    // (before scrollY actually settles near 0) and then never fire again,
    // leaving the last section stuck as "active".
    const handleScroll = () => {
      if (window.scrollY < 80) {
        setActiveHash("");
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveHash(`#${visible[0].target.id}`);
        }
      },
      // Counts a section as "active" once it crosses the middle band of the viewport
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (href: string) =>
    href === "/" ? activeHash === "" : activeHash === href;

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
          onClick={() => setOpen(false)}
        >
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
          <span className="flex flex-col leading-none">
            <span className="text-base font-bold tracking-tight text-foreground">
              Pro<span className="text-primary">Health</span>
            </span>
            <span className="hidden text-[10px] font-medium uppercase tracking-widest text-muted-foreground sm:block">
              Diagnostic Laboratory
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                  active ? "text-primary" : "text-muted-foreground",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            className="flex items-center gap-2"
            render={<a href={telHref(site.phones[0])} />}
            nativeButton={false}
          >
            <Phone className="size-4 shrink-0" />
            <span className="whitespace-nowrap">
              Call:{" "}
              <span className="tabular-nums">
                {formatPhone(site.phones[0])}
              </span>
            </span>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6 lg:px-8">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                    active
                      ? "bg-secondary text-primary"
                      : "text-muted-foreground hover:bg-muted",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button
              className="mt-2 w-full"
              render={<a href={telHref(site.phones[0])} />}
              nativeButton={false}
            >
              <Phone className="size-4 shrink-0" />
              <span className="truncate">
                Call:{" "}
                <span className="tabular-nums">
                  {formatPhone(site.phones[0])}
                </span>
              </span>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
