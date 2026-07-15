import { Activity, HeartPulse, Home, type LucideIcon } from "lucide-react";

export const site = {
  name: "ProHealth",
  fullName: "ProHealth Diagnostic Laboratory",
  tagline: "Accurate. Caring. Reliable.",
  address: "338 Rizal St, Looc, Romblon",
  // Google Plus Code — more precise than the street address alone for map geocoding.
  mapQuery: "7X6V+JG Looc, Romblon",
  phones: ["09565741312", "09511142586"],
  facebook: "https://www.facebook.com/prohealthdiagnosticlaboratory",
  hours: [
    { day: "Monday – Friday", time: "7:00 AM – 6:00 PM" },
    { day: "Saturday", time: "7:00 AM – 4:00 PM" },
    { day: "Sunday", time: "By appointment" },
  ],
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

/** Formats a local PH mobile number like "09565741312" as "(+63) 956-574-1312" */
export function formatPhone(raw: string) {
  const digits = raw.replace(/\D/g, "");
  const local = digits.startsWith("0") ? digits.slice(1) : digits;
  return `(+63) ${local.slice(0, 3)}-${local.slice(3, 6)}-${local.slice(6)}`;
}

/** Builds a tel: href from a local PH mobile number like "09565741312" */
export function telHref(raw: string) {
  const digits = raw.replace(/\D/g, "");
  const local = digits.startsWith("0") ? digits.slice(1) : digits;
  return `tel:+63${local}`;
}

export type Service = {
  /** Filename (without extension) of the landscape jpg in /public/images/services */
  image: string;
  title: string;
  description: string;
  details: string[];
};

export const services: Service[] = [
  {
    image: "lab-exam",
    title: "Laboratory Examinations",
    description:
      "Comprehensive blood chemistry, hematology, urinalysis, and clinical microscopy handled with precision.",
    details: [
      "Complete Blood Count (CBC)",
      "Blood chemistry & lipid profile",
      "Urinalysis & fecalysis",
      "Clinical microscopy",
    ],
  },
  {
    image: "neuro-exam",
    title: "Neuro Exam",
    description:
      "Neurological assessments performed by trained professionals to evaluate nervous system function.",
    details: [
      "Neurological screening",
      "Pre-employment neuro testing",
      "Detailed written results",
    ],
  },
  {
    image: "drug-test",
    title: "Drug Test",
    description:
      "Fast, confidential, and DOH-compliant drug testing for employment and personal needs.",
    details: [
      "Confidential handling",
      "Same-day results",
      "For employment & compliance",
    ],
  },
  {
    image: "ecg",
    title: "ECG",
    description:
      "Electrocardiogram testing to monitor heart activity and detect cardiac irregularities early.",
    details: [
      "Resting ECG",
      "Clear cardiac reporting",
      "Quick, painless procedure",
    ],
  },
  {
    image: "x-ray",
    title: "X-ray",
    description:
      "Digital radiographic imaging producing clear, high-quality results for accurate diagnosis.",
    details: [
      "Digital X-ray imaging",
      "Chest & skeletal views",
      "Rapid image processing",
    ],
  },
  {
    image: "home-service",
    title: "Home Service Available",
    description:
      "Cannot make it to the lab? Our team brings sample collection and select tests right to your home.",
    details: [
      "In-home sample collection",
      "Convenient scheduling",
      "Caring, professional staff",
    ],
  },
];

export const highlights = [
  {
    icon: Activity,
    title: "Accurate Results",
    description:
      "Modern equipment and rigorous quality control ensure diagnostics you can trust.",
  },
  {
    icon: HeartPulse,
    title: "Patient-Centered Care",
    description:
      "Every patient is treated with compassion, respect, and genuine attention.",
  },
  {
    icon: Home,
    title: "Home Service",
    description:
      "We come to you — sample collection and select tests in the comfort of your home.",
  },
];
