import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative h-[100vh] min-h-[700px] w-full ">
      {/* Background image — cropped with a rounded edge along the bottom only */}
      <div className="absolute inset-0 overflow-hidden ">
        <Image
          src="/images/hero-laboratory.jpg"
          alt="ProHealth Diagnostic Laboratory technician conducting a laboratory examination"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Scrim for text legibility, darkest at the bottom where the copy sits */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/10" />
      </div>

      {/* Content — centered */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center sm:px-8 lg:px-10">
        <div className="flex max-w-2xl flex-col items-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-white/90 backdrop-blur">
            <ShieldCheck className="size-3.5" />
            Looc, Romblon
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Trusted Diagnostic Laboratory in Looc, Romblon
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            Providing accurate and reliable laboratory examinations in Looc,
            Romblon. We offer laboratory testing, ECG, X-Ray, Drug Testing,
            Neuro Examinations, and convenient home service with professional
            healthcare and patient-focused care.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="h-12 rounded-md px-7 text-base"
              render={
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              nativeButton={false}
            >
              Message us on Facebook
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 rounded-md border-white/40 bg-white/10 px-7 text-base text-white backdrop-blur hover:bg-white/20 hover:text-white"
              render={<a href="#services" />}
              nativeButton={false}
            >
              View Our Services
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
