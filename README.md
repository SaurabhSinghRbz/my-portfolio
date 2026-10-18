# Saurabh Singh — Portfolio **v1** (archived)

> ### ⚠️ This is the old portfolio. The current one lives at **[iamsaurabh.in](https://iamsaurabh.in)**
>
> This repository is kept online as an archive of my early work (2021–22, built during and just after Masai School).
> It still builds and deploys, but it is no longer where I publish new work.
>
> | | Version | URL | Stack |
> |---|---|---|---|
> | 🚀 | **v2 — current** | **<https://iamsaurabh.in>** | Next.js 15 · TypeScript · Tailwind CSS |
> | 📦 | v1 — archived *(this repo)* | <https://saurabhsinghrbz.web.app> | React 18 · Create React App · Bootstrap 4 |

![Portfolio v1 preview](https://user-images.githubusercontent.com/90378786/197326878-7933ba99-ad90-4e1e-8357-abe9ff83c20a.png)

---

## Table of contents

- [About this archive](#about-this-archive)
- [Where the new portfolio is linked from](#where-the-new-portfolio-is-linked-from)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Project structure](#project-structure)
- [Deployment](#deployment)
- [Maintenance notes / changelog](#maintenance-notes--changelog)
- [Contact](#contact)

---

## About this archive

This was my first real portfolio: a single-page React site with a scroll-spy navbar, animated
typewriter hero, project cards, an embedded résumé and a contact section. It documents my journey
from a mechanical-engineering diploma through Masai School into software engineering.

It is intentionally **not** deleted — the projects here are still mine and the links still work.
It is simply superseded. Anything about my current work (payments infrastructure and distributed
systems at Pine Labs / Qwikcilver, plus freelance platform work) is on
[iamsaurabh.in](https://iamsaurabh.in).

## Where the new portfolio is linked from

A visitor who lands on any old link is shown the new one in three places, all driven by a single
config file — [`src/config/portfolioVersions.js`](src/config/portfolioVersions.js). Change the URL
there and every notice updates:

| Surface | File | Behaviour |
|---|---|---|
| Fixed top banner | [`src/components/NewPortfolio/V2Banner.js`](src/components/NewPortfolio/V2Banner.js) | Always-visible strip above the navbar with a **Go to iamsaurabh.in** button. Dismissible; the dismissal is remembered for the session only. |
| In-page notice card | [`src/components/NewPortfolio/V2Notice.js`](src/components/NewPortfolio/V2Notice.js) | Sits under the hero and shows **both** versions side by side (new vs. archived, plus the three legacy mirrors), so a visitor can see exactly what they are looking at. |
| `<head>` metadata | [`public/index.html`](public/index.html) | `rel="canonical"`, Open Graph and Twitter tags point at `https://iamsaurabh.in` so search engines consolidate on the live site instead of ranking the archive against it. |

There is **no automatic redirect** — the archive stays browsable on purpose. The choice to move
over is the visitor's.

## Tech stack

| Layer | Used |
|---|---|
| Framework | React 18 (`react-dom/client` root) |
| Build | Create React App / `react-scripts` 5 (webpack 5) |
| UI | React-Bootstrap 1.x + Bootstrap 4, hand-written CSS (`src/style.css`) |
| Icons | `react-icons` |
| Animation | `typewriter-effect`, CSS transitions |
| Hosting | Firebase Hosting (primary), Vercel, Netlify |

## Getting started

Requires **Node.js 18 or newer** (see [`.nvmrc`](.nvmrc)).

```bash
git clone https://github.com/SaurabhSinghRbz/my-portfolio.git
cd my-portfolio
npm install
npm start          # dev server on http://localhost:3000
```

Other scripts:

```bash
npm run build      # production bundle into ./build
npm test           # CRA test runner (no test suites in this repo)
```

## Project structure

```
my-portfolio/
├── public/                 # index.html, manifest, robots.txt, favicon
├── src/
│   ├── Assets/             # images, SVG backgrounds, résumé PDF
│   ├── config/
│   │   └── portfolioVersions.js   # ← v1 / v2 URLs, single source of truth
│   ├── components/
│   │   ├── NewPortfolio/   # v2 banner + "old vs new" notice card
│   │   ├── Home/           # hero, typewriter, contact logos, modals
│   │   ├── About/          # bio
│   │   ├── Skill/          # tech stack + tooling grids
│   │   ├── Projects/       # project cards
│   │   ├── Resume/         # embedded résumé + download
│   │   ├── Contact/        # find-me-on links and modals
│   │   ├── Blogs/          # (built, not currently mounted)
│   │   ├── Navbar.js       # scroll-spy navigation
│   │   ├── Footer.js
│   │   └── Pre.js          # preloader
│   ├── App.js              # composes every section (single page, no router)
│   ├── index.js            # React 18 createRoot entry
│   ├── style.css           # the bulk of the styling
│   └── App.css / index.css
├── firebase.json           # Firebase Hosting: SPA rewrite + cache headers
├── vercel.json             # Vercel: SPA rewrite + cache headers
├── netlify.toml            # Netlify: build env, SPA redirect, cache headers
└── .nvmrc                  # Node 18
```

## Deployment

All three targets build the same `build/` directory and are configured for
single-page-app fallback (any path serves `index.html`) with immutable caching on
hashed assets in `/static` and no caching on `index.html`.

**Firebase Hosting** (primary — `saurabhsinghrbz`):

```bash
npm run build
npx firebase-tools deploy --only hosting
```

**Vercel:**

```bash
npm run build
npx vercel --prod
```

Config is in [`vercel.json`](vercel.json); no dashboard settings needed.

**Netlify:**

```bash
npm run build
npx netlify-cli deploy --prod --dir=build
```

Config is in [`netlify.toml`](netlify.toml). `CI=false` is set there because CRA
promotes build warnings to errors on CI providers, which used to fail the build.

### Legacy deployment links

| Host | URL |
|---|---|
| Firebase | <https://saurabhsinghrbz.web.app> |
| Vercel | <https://singhsaurabh.vercel.app> |
| Netlify | <https://singhsaurabh.netlify.app> |

## Maintenance notes / changelog

### 2026-08 — modernisation pass

The site had stopped building on any current Node release. What was fixed:

**Build / toolchain**

- `react-scripts` **4.0.1 → 5.0.1**. v4 runs webpack 4, whose MD4 hashing fails on Node ≥ 17 with
  `error:0308010C:digital envelope routines::unsupported`. This was the actual reason `npm run build`
  died locally and on any modern CI image. No `--openssl-legacy-provider` workaround needed now.
- **React 17 → 18**, with `src/index.js` switched from the removed `ReactDOM.render` to
  `createRoot` from `react-dom/client`.
- Added `engines.node: ">=18"` and an `.nvmrc` so hosts pick a compatible runtime instead of
  defaulting to whatever they feel like.
- Regenerated `package-lock.json`.

**Dependencies removed** (every one of these was dead code — imported nowhere, or only by a file
that was itself never mounted):

| Package | Why it went |
|---|---|
| `react-particles-js` | Deprecated and incompatible with React 18. Both `Particle.js` / `Particle2.js` were commented out at every call site. |
| `react-router-dom` (v5) | The app is a single scrolling page; every `<Route>` had been commented out. Only leftover was an unused `useLocation()` in the navbar. |
| `axios` | Used only by `LikeBtn.js`, which was never rendered and pointed at a dead backend. |
| `react-github-calendar` | Used only by `Skill/Github.js`, whose call site was commented out. |
| `@mui/material`, `@emotion/react` | Never imported. |
| `react-parallax-tilt` | Never imported. |
| `web-vitals` | `reportWebVitals()` was called with no argument, i.e. a no-op. |
| `@testing-library/*` (×3) | No test files exist. |

Files deleted along with them: `Particle.js`, `Particle2.js`, `LikeBtn.js`, `ScrollToTop.js`,
`Skill/Github.js`, `reportWebVitals.js`.

**Bugs fixed**

- **Navbar listener leak.** `window.addEventListener("scroll", …)` was called during *render*, so a
  new scroll handler was attached on every re-render and none were ever removed. Moved into a
  `useEffect` with a cleanup, registered once, `{ passive: true }`.
- **Navbar crash risk.** The scroll-spy indexed `li[i]` from the section list without checking the
  link existed; adding any `.activeNavlink` section without a matching nav item threw. Now guarded.
- **`scrollIntoView` on a missing element** would throw; now null-checked.
- Removed a stray `import … from "react-icons/SiExpress"` — a path that does not exist and is
  case-sensitive on Linux build agents.

**Deployment fixes**

- `homepage` changed from `"."` to `"/"`. Relative asset paths combined with the SPA rewrite
  (every path serves `index.html`) meant a request to any sub-path resolved `static/js/…` against
  that sub-path and 404'd every bundle.
- Added [`vercel.json`](vercel.json) and [`netlify.toml`](netlify.toml). Previously only Firebase
  had an SPA rewrite rule; the other two hosts were relying on defaults.
- Added long-lived immutable cache headers for `/static/**` and `must-revalidate` on `index.html`
  across all three hosts, so deploys are picked up immediately instead of serving a stale shell.
- Fixed `public/manifest.json`, which still shipped CRA's placeholder `"React App"` / `"Create React
  App Sample"` names and referenced a `favicon.ico` that does not exist in this repo.

**Content**

- Added the v2 banner, the old-vs-new notice card, and canonical/OG metadata pointing at
  [iamsaurabh.in](https://iamsaurabh.in) (see
  [Where the new portfolio is linked from](#where-the-new-portfolio-is-linked-from)).

**Also fixed along the way**

- `SiMaterialUi` no longer exists in `react-icons` (Simple Icons renamed the brand to MUI). Swapped
  for `SiMui`, which was breaking the build outright.
- `public/robots.txt` shipped a bare `Disallow:` line; replaced with an explicit `Allow: /`.
- `.firebase/hosting.*.cache` was committed to the repo. Untracked, and `.firebase/` + `.vercel`
  added to `.gitignore`.
- Added [`.github/workflows/build.yml`](.github/workflows/build.yml) — builds on Node 18/20/22 with
  `CI=true` on every push, so "works on my machine" cannot happen again.

### On `npm audit`

`npm audit` reports ~28 advisories. **Every one of them is transitive through `react-scripts`**
(`webpack-dev-server`, `@svgr/webpack`, `postcss`, `nth-check`, `sockjs` …). They affect the dev
server and the build toolchain — none of that code ends up in the deployed bundle, which contains
only React, React-Bootstrap, react-icons and typewriter-effect.

Do **not** run `npm audit fix --force` here: it "resolves" them by installing `react-scripts@0.0.0`
and destroys the project. This is a known dead end for Create React App, which is itself no longer
maintained. The only real fix is migrating off CRA (Vite would be the obvious target) — deliberately
not done, because this is an archived site and the migration risk buys nothing for a build-time-only
advisory set.

## Contact

- **Portfolio (current):** <https://iamsaurabh.in>
- **GitHub:** [@SaurabhSinghRbz](https://github.com/SaurabhSinghRbz)
- **LinkedIn:** [saurabhsinghrbz](https://www.linkedin.com/in/saurabhsinghrbz)
- **X / Twitter:** [@Saurabh162000](https://twitter.com/Saurabh162000)

---

Thanks for stopping by — and do come see the new one: **<https://iamsaurabh.in>** 🚀
