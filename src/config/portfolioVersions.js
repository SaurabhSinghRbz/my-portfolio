/**
 * Single source of truth for the "this portfolio has a newer version" notices.
 *
 * v1 (this repo) is a Create React App single-page site built in 2021-22.
 * v2 lives in a separate repo (Next.js) and is the site that should be shared.
 * Update `NEW_PORTFOLIO.url` here and every notice in the UI follows.
 */

export const NEW_PORTFOLIO = {
  version: "v2",
  label: "iamsaurabh.in",
  url: "https://iamsaurabh.in",
  tagline: "Senior Software Engineer · payments & distributed systems",
  builtWith: "Next.js 15 · TypeScript · Tailwind CSS",
};

export const OLD_PORTFOLIO = {
  version: "v1",
  label: "saurabhsinghrbz.web.app",
  url: "https://saurabhsinghrbz.web.app",
  builtWith: "React 18 · Create React App · Bootstrap",
  year: "2021–22",
  mirrors: [
    { label: "Firebase", url: "https://saurabhsinghrbz.web.app" },
    { label: "Vercel", url: "https://singhsaurabh.vercel.app" },
    { label: "Netlify", url: "https://singhsaurabh.netlify.app" },
  ],
};

/**
 * Current, factual profile shown on this archived site so an old link never
 * shows outdated details. Mirrors the v2 site (src/content/site.ts in the
 * saurabh-singh-portfolio repo) — keep the two in step.
 */
export const CURRENT_PROFILE = {
  role: "Senior Software Engineer",
  company: "Pine Labs (Qwikcilver · Woohoo)",
  location: "Bengaluru, India",
  email: "hello@iamsaurabh.in",
  phone: "+91 85768 58692",
  /** Always the latest résumé — served by the v2 site. */
  resumeUrl: "https://iamsaurabh.in/saurabh_resume.pdf",
  workUrl: "https://iamsaurabh.in/work",
  experience: [
    {
      title: "Senior Software Engineer — Pine Labs (Qwikcilver · Woohoo)",
      period: "Apr 2024 – Present · Bengaluru",
      points: [
        "Own the Go service behind the full gift-card lifecycle — activation, shipping, wallet credit, PIN reset, block, cancel and reissue.",
        "Live behind HDFC, Axis, FairPrice and Woohoo storefronts — a 300+ brand catalog.",
      ],
    },
    {
      title: "Software Engineer — Pine Labs (Qwikcilver · Woohoo)",
      period: "Nov 2022 – Mar 2024 · Bengaluru",
      points: [
        "Built and ran the B2B message-queue platform solo for 18 months — 500+ TPS, millions of messages daily.",
        "Extended the delivery service behind every email, SMS, WhatsApp and OTP on the platform.",
      ],
    },
    {
      title: "Full-Stack Engineer — SmoothPay (client project, UAE)",
      period: "Feb 2026 – Present · live",
      points: [
        "Own a multi-tenant QR-ordering, payments and membership platform end to end — NestJS, Prisma, Stripe, AFS, Telr.",
      ],
    },
  ],
};
