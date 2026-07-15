import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import ServicesSection from "@/components/sections/services";
import ContactSection from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      {/* Hero - Image background */}
      <section className="relative overflow-hidden bg-secondary/40">
        <HeroSection />
      </section>

      {/* About - ( Welcome to ProHealth [Open Google Map button], Who we are) */}
      <section id="about" className="border-y py-24 scroll-mt-20">
        <AboutSection />
      </section>
      {/* Services - (6 Services, Steps to have better health) */}
      <section
        id="services"
        className="border-y py-24 scroll-mt-20 bg-secondary/40"
      >
        <ServicesSection />
      </section>
      {/* Contact - (View on Google Maps button and a form. Left side are the contacts and right side are the google map with marker) */}
      <section id="contact" className="border-y py-24 scroll-mt-20">
        <ContactSection />
      </section>
    </>
  );
}
