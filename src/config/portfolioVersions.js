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

/** sessionStorage key used to remember that the top banner was dismissed. */
export const BANNER_DISMISS_KEY = "portfolio-v2-banner-dismissed";
