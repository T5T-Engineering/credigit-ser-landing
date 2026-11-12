# Site (marketing) — implementation

| | |
|---|---|
| Status | Built (static export). Demo form and legal pages not connected. |
| Requirements | [REQUIREMENTS.md](REQUIREMENTS.md) |
| Last updated | 2026-11-12 (commit 5c784f0) |

## 1. Design overview
Next.js 16 App Router, `output: "export"` (static `./out`, `trailingSlash: true`, unoptimised images). Three layers:
- `src/content/*.ts` — copy and data (PRD-sourced), icons from `lucide-react`.
- `src/sections/*.tsx` — compositions of `@credigit/web-ui` components that read content.
- `src/app/*` — routes, metadata, robots, sitemap. `layout.tsx` injects `brandBootScript()`, wraps everything in `BrandProvider` and `Site` (header + footer).

The only client component is `DemoRequestForm` (state, validation, `fetch`). `next.config.ts` switches the build root and React aliases when the library is linked locally.

## 2. Files and entry points
| Path | Role |
|---|---|
| `src/app/layout.tsx` | Root layout, global metadata / OG / icons, `BrandProvider`, `Site` |
| `src/app/page.tsx` | Home page: section order |
| `src/app/login/page.tsx`, `src/app/register/page.tsx` | Placeholder pages (`noindex`) |
| `src/app/legal/page.tsx` | Privacy / terms placeholders |
| `src/app/brand/page.tsx` | Brand preview (`BrandSettingsPanel`, `noindex`) |
| `src/app/not-found.tsx` | 404 |
| `src/app/robots.ts`, `src/app/sitemap.ts` | SEO (static) |
| `src/app/globals.css` | Tailwind + library styles, `@source` for library classes, smooth scroll / reduced motion |
| `src/sections/site-header.tsx`, `site-footer.tsx` | Navbar with nav links and auth / demo buttons; PageFooter |
| `src/sections/hero.tsx` … `faq.tsx`, `demo.tsx` | Home sections (hero, problem, radar, data-spine, lifecycle, modules, copilot, governance, roadmap, audience, faq, demo) |
| `src/sections/demo-request-form.tsx` | Demo form (client) |
| `src/sections/auth-placeholder.tsx` | Log in / Register placeholder body |
| `src/content/site.ts` | Product facts, `navLinks`, `demoCta`, `authLinks` (from `NEXT_PUBLIC_APP_URL`), placeholder copy |
| `src/content/demo.ts` | CTA band and form copy, institution types, error messages |
| `src/content/{hero,problem,radar,spine,lifecycle,modules,copilot,governance,roadmap,audience,faq,footer}.ts` | Section copy (each cites its PRD section) |
| `next.config.ts`, `netlify.toml`, `.env.example` | Build, hosting, configuration |

## 3. Routes / endpoints / public API
| Route | Page | Menu entry |
|---|---|---|
| `/` | Home (anchors `#top`, `#why`, `#radar`, `#data-spine`, `#lifecycle`, `#modules`, `#ai-co-pilot`, `#governance`, `#regulatory`, `#roadmap`, `#audience`, `#faq`, `#demo`, `#demo-form`) | Header `navLinks` (8 anchors) + footer columns |
| `/login/` | Placeholder (only when `NEXT_PUBLIC_APP_URL` unset) | Header "Log in" |
| `/register/` | Placeholder (only when `NEXT_PUBLIC_APP_URL` unset) | Header "Register" |
| `/legal/` (`#privacy`, `#terms`) | Legal placeholders | Footer bottom links |
| `/brand/` | Brand preview | None (direct link only; robots-disallowed) |
| `/robots.txt`, `/sitemap.xml` | SEO | – |

Library components used: Accordion, AccordionItem, Alert, Badge, Band, BrandProvider, BrandSettingsPanel, Button, Card (+ Header / Title / Description / Content), Chip, ChipList, CtaBand, EmptyState, Field, Form, FormActions, Grid, Heading, Hero, Icon, InfoSection, Input, List, Navbar, PageFooter, PageHeader, RadarChart, SectionHeader, Select, Site, Stack, Steps, Table (+ Body / Cell / Head / HeaderCell / Row), Teaser, Text, Textarea, Timeline, `brandBootScript`.

## 4. Data model
No persistence. Demo payload: `{ name, email, institution, institutionType, role, country, message, source: "credigit-ser-landing" }`. Brand overrides persist in the visitor's browser through the library's `BrandProvider`.

## 5. Rule keys used
| Key | Where read |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `src/content/site.ts` (`site.url`) → `layout.tsx` `metadataBase`, `robots.ts`, `sitemap.ts` |
| `NEXT_PUBLIC_APP_URL` | `src/content/site.ts` (`authLinks`) |
| `NEXT_PUBLIC_DEMO_REQUEST_ENDPOINT` | `src/sections/demo-request-form.tsx` |

## 6. Permission keys enforced
None — public site. Not applicable.

## 7. Workflows, notifications, events, hooks wired
None (REQUIREMENTS §5–7). The demo form fires a single `fetch` POST; no notification template, event or hook exists.

## 8. Tests
None. The repo has no test runner (`package.json` scripts: `dev`, `build`, `lint`, `typecheck`). Quality gates are ESLint, `tsc --noEmit` and the static build.

## 9. Requirements traceability
| FR id | Implemented in | Test | Status |
|---|---|---|---|
| SITE-FR-01 | `src/app/page.tsx`, `src/sections/*` | — | Done |
| SITE-FR-02 | `src/content/*` (PRD citations in comments) | — | Done (manual review) |
| SITE-FR-03 | `site-header.tsx`, `site-footer.tsx`, `content/footer.ts` | — | Done |
| SITE-FR-04 | `content/site.ts` `authLinks`; `login/`, `register/` pages | — | Done (path drift, SITE-Q-04) |
| SITE-FR-05 | `demo-request-form.tsx` `validate` | — | Done |
| SITE-FR-06 | `demo-request-form.tsx` `onSubmit` | — | Partial (no receiver) |
| SITE-FR-07 | `legal/page.tsx`, `content/footer.ts` `legalPage` | — | Partial (placeholder text) |
| SITE-FR-08 | `brand/page.tsx` | — | Done |
| SITE-FR-09 | `layout.tsx` metadata, `robots.ts`, `sitemap.ts`, per-page `robots` | — | Done |
| SITE-FR-10 | `layout.tsx` | — | Done |
| SITE-FR-11 | `globals.css`, form focus / `aria-live`, `navLabel` | — | Done (not audited) |
| SITE-FR-12 | `next.config.ts`, `netlify.toml` | — | Done |

## 10. Gaps against the invariants
- Invariant 1: a few raw layout wrappers in sections (`<div className="lg:col-span-…">` in data-spine, demo, faq, lifecycle, roadmap; `overflow-x-auto` div in governance; plain `<span>` in hero). Layout-only, but they are building blocks outside the library (a `GridItem` / column-span prop would remove them). `lucide-react` is imported directly in content and `not-found.tsx`/`copilot.tsx` instead of through the library's `Icon` set.
- Invariant 6: `@credigit/web-ui` is referenced as `git+https…#develop` (branch, not an exact version); only `package-lock.json` pins the commit. `netlify.toml` uses Node `22` (major only).
- Invariant 8: `site.url` falls back to the literal `http://localhost:3000`; the e-mail regex and institution types are literals (copy, low risk). None are in `TECH-DEBT.md`.
- Invariant 9 (notified / audited / extensible): demo requests have no receiver, no audit, no notification template, no event. Must be built in the receiving system (SITE-Q-01).
- Invariant 9 (connector-ready): no `docs/integration-points.md`; the demo-request receiver and the core-app link are undocumented connector points.
- No `docs/open-questions.md`; SITE-Q-01…05 are defined only in REQUIREMENTS.md.
- Privacy: personal data collected without a published privacy notice or consent text (SITE-Q-02).
- Docs drift: README says Log in goes to `<url>/login`; code links to `<url>/`.
- No automated tests (not even smoke / accessibility checks).

## 11. Tech debt
| TD id | Summary |
|---|---|
| — | No open items. TD-001 (hard-coded app URL fallback) closed 2026-11-11. The gaps above are not yet recorded in `TECH-DEBT.md`. |
