# Site (marketing) — implementation

| | |
|---|---|
| Status | Built (static export). Demo form delivers to Netlify Forms; interim privacy notice published (final legal text pending, SITE-Q-02). |
| Requirements | [REQUIREMENTS.md](REQUIREMENTS.md) |
| Last updated | 2026-11-12 (feature/landing-gaps) |

## 1. Design overview
Next.js 16 App Router, `output: "export"` (static `./out`, `trailingSlash: true`, unoptimised images). Three layers:
- `src/content/*.ts` — copy and data (PRD-sourced), icons from `lucide-react`.
- `src/sections/*.tsx` — compositions of `@credigit/web-ui` components that read content.
- `src/app/*` — routes, metadata, robots, sitemap. `layout.tsx` injects `brandBootScript()`, wraps everything in `BrandProvider` and `Site` (header + footer).

The only client component is `DemoRequestForm` (state, `fetch`). Its pure logic (validation, transport resolution, request building, honeypot check) lives in `src/lib/demo-request.ts` and is unit-tested with Vitest.

Demo-request delivery (Netlify Forms): Netlify detects forms only in static HTML at deploy time, and the React form is rendered client-side, so `public/__forms.html` holds a hidden copy of the form (`name="demo-request"`, `data-netlify="true"`, `netlify-honeypot="bot-field"`, every field name). The React form posts `application/x-www-form-urlencoded` (`form-name`, `bot-field`, fields, `source`) to `/__forms.html`; Netlify stores it under the `demo-request` form. A unit test checks the static form declares every field the client sends. The honeypot is a library `Input` inside `VisuallyHidden` with `aria-hidden` and `tabIndex={-1}`; a filled honeypot is reported as success without sending. The privacy notice line (library `Text` + `TextLink`) sits above the submit button. `next.config.ts` switches the build root and React aliases when the library is linked locally.

## 2. Files and entry points
| Path | Role |
|---|---|
| `src/app/layout.tsx` | Root layout, global metadata / OG / icons, `BrandProvider`, `Site` |
| `src/app/page.tsx` | Home page: section order |
| `src/app/login/page.tsx`, `src/app/register/page.tsx` | Placeholder pages (`noindex`) |
| `src/app/legal/page.tsx` | Terms placeholder; privacy section links to `/privacy/` |
| `src/app/privacy/page.tsx` | Interim privacy notice (`noindex` until legal text is final) |
| `src/app/brand/page.tsx` | Brand preview (`BrandSettingsPanel`, `noindex`) |
| `src/app/not-found.tsx` | 404 |
| `src/app/robots.ts`, `src/app/sitemap.ts` | SEO (static) |
| `src/app/globals.css` | Tailwind + library styles, `@source` for library classes, smooth scroll / reduced motion |
| `src/sections/site-header.tsx`, `site-footer.tsx` | Navbar with nav links and auth / demo buttons; PageFooter |
| `src/sections/hero.tsx` … `faq.tsx`, `demo.tsx` | Home sections (hero, problem, radar, data-spine, lifecycle, modules, copilot, governance, roadmap, audience, faq, demo) |
| `src/sections/demo-request-form.tsx` | Demo form (client): library controls, status `Alert`s, honeypot, privacy notice line |
| `src/lib/demo-request.ts` | Form values, `validate`, `resolveTransport`, `buildDemoRequest`, `isBotSubmission`, Netlify form constants |
| `src/lib/demo-request.test.ts` | Vitest unit tests (validation, transports, honeypot, static form parity) |
| `public/__forms.html` | Hidden static form for Netlify Forms detection (robots-disallowed) |
| `src/content/privacy.ts` | Privacy notice copy (company from `site.company`) |
| `vitest.config.mts` | Vitest (node environment, `@/` alias) |
| `src/sections/auth-placeholder.tsx` | Log in / Register placeholder body |
| `src/content/site.ts` | Product facts, `navLinks`, `demoCta`, `authLinks` (from `NEXT_PUBLIC_APP_URL`), placeholder copy |
| `src/content/demo.ts` | CTA band and form copy, institution types, error messages, privacy notice line |
| `src/content/{hero,problem,radar,spine,lifecycle,modules,copilot,governance,roadmap,audience,faq,footer}.ts` | Section copy (each cites its PRD section) |
| `next.config.ts`, `netlify.toml`, `.env.example` | Build, hosting (`NEXT_PUBLIC_DEMO_REQUEST_TRANSPORT=netlify-forms`), configuration |
| `docs/integration-points.md`, `docs/open-questions.md` | Connector points; open questions |

## 3. Routes / endpoints / public API
| Route | Page | Menu entry |
|---|---|---|
| `/` | Home (anchors `#top`, `#why`, `#radar`, `#data-spine`, `#lifecycle`, `#modules`, `#ai-co-pilot`, `#governance`, `#regulatory`, `#roadmap`, `#audience`, `#faq`, `#demo`, `#demo-form`) | Header `navLinks` (8 anchors) + footer columns |
| `/login/` | Placeholder (only when `NEXT_PUBLIC_APP_URL` unset) | Header "Log in" |
| `/register/` | Placeholder (only when `NEXT_PUBLIC_APP_URL` unset) | Header "Register" |
| `/legal/` (`#privacy`, `#terms`) | Terms placeholder, link to privacy notice | Footer "Terms of use" |
| `/privacy/` | Privacy notice (interim) | Footer "Privacy notice"; demo form notice line |
| `/__forms.html` (POST) | Netlify Forms receiver for `demo-request` (static file for detection) | None (robots-disallowed) |
| `/brand/` | Brand preview | None (direct link only; robots-disallowed) |
| `/robots.txt`, `/sitemap.xml` | SEO | – |

Library components used: Accordion, AccordionItem, Alert, Badge, Band, BrandProvider, BrandSettingsPanel, Button, Card (+ Header / Title / Description / Content), Chip, ChipList, CtaBand, EmptyState, Field, Form, FormActions, Grid, Heading, Hero, Icon, InfoSection, Input, List, Navbar, PageFooter, PageHeader, RadarChart, SectionHeader, Select, Site, Stack, Steps, Table (+ Body / Cell / Head / HeaderCell / Row), Teaser, Text, Textarea, TextLink, Timeline, VisuallyHidden, `brandBootScript`.

## 4. Data model
No persistence in the repo. Demo fields: `{ name, email, institution, institutionType, role, country, message, source: "credigit-ser-landing" }`. Transport `netlify-forms`: URL-encoded with `form-name=demo-request` and empty `bot-field`; stored by Netlify (Forms → `demo-request`). Transport `json`: JSON body to `NEXT_PUBLIC_DEMO_REQUEST_ENDPOINT`. Brand overrides persist in the visitor's browser through the library's `BrandProvider`.

## 5. Rule keys used
| Key | Where read |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `src/content/site.ts` (`site.url`) → `layout.tsx` `metadataBase`, `robots.ts`, `sitemap.ts` |
| `NEXT_PUBLIC_APP_URL` | `src/content/site.ts` (`authLinks`) |
| `NEXT_PUBLIC_DEMO_REQUEST_TRANSPORT` | `src/sections/demo-request-form.tsx` → `resolveTransport` (`netlify-forms` set in `netlify.toml`) |
| `NEXT_PUBLIC_DEMO_REQUEST_ENDPOINT` | `src/sections/demo-request-form.tsx` → `buildDemoRequest` (`json` transport) |

## 6. Permission keys enforced
None — public site. Not applicable.

## 7. Workflows, notifications, events, hooks wired
No workflow (public site). Notification: Netlify form notification e-mail, configured in the Netlify UI (not in the repo). Event point: Netlify outgoing webhook on verified submissions (Netlify UI). No Credigit template, audit or event yet (SITE-Q-01, SITE-Q-06).

## 8. Tests
Vitest (`npm test`, node environment): `src/lib/demo-request.test.ts` covers validation, transport resolution, Netlify / JSON request building, honeypot detection and that `public/__forms.html` declares every submitted field. Quality gates: `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`. No component / accessibility tests (would need jsdom + Testing Library).

## 9. Requirements traceability
| FR id | Implemented in | Test | Status |
|---|---|---|---|
| SITE-FR-01 | `src/app/page.tsx`, `src/sections/*` | — | Done |
| SITE-FR-02 | `src/content/*` (PRD citations in comments) | — | Done (manual review) |
| SITE-FR-03 | `site-header.tsx`, `site-footer.tsx`, `content/footer.ts` | — | Done |
| SITE-FR-04 | `content/site.ts` `authLinks`; `login/`, `register/` pages | — | Done (path drift, SITE-Q-04) |
| SITE-FR-05 | `lib/demo-request.ts` `validate` | `demo-request.test.ts` | Done |
| SITE-FR-06 | `demo-request-form.tsx` `onSubmit`, `lib/demo-request.ts`, `public/__forms.html`, `netlify.toml` | `demo-request.test.ts` | Done (Netlify form detection must be enabled) |
| SITE-FR-06a | `demo-request-form.tsx` honeypot, `isBotSubmission`, `__forms.html` `netlify-honeypot` | `demo-request.test.ts` | Done |
| SITE-FR-06b | `demo-request-form.tsx`, `content/demo.ts` `privacyNotice` | — | Done (interim wording, SITE-Q-02) |
| SITE-FR-07 | `privacy/page.tsx`, `content/privacy.ts`, `legal/page.tsx`, `content/footer.ts` | — | Partial (interim text; legal to supply, SITE-Q-02) |
| SITE-FR-08 | `brand/page.tsx` | — | Done |
| SITE-FR-09 | `layout.tsx` metadata, `robots.ts`, `sitemap.ts`, per-page `robots` | — | Done |
| SITE-FR-10 | `layout.tsx` | — | Done |
| SITE-FR-11 | `globals.css`, form focus / `aria-live`, `navLabel` | — | Done (not audited) |
| SITE-FR-12 | `next.config.ts`, `netlify.toml` | — | Done |

## 10. Gaps against the invariants
- Invariant 1: a few raw layout wrappers in sections (`<div className="lg:col-span-…">` in data-spine, demo, faq, lifecycle, roadmap; `overflow-x-auto` div in governance; plain `<span>` in hero). Layout-only, but they are building blocks outside the library (a `GridItem` / column-span prop would remove them). `lucide-react` is imported directly in content and `not-found.tsx`/`copilot.tsx` instead of through the library's `Icon` set.
- Invariant 6: `@credigit/web-ui` is referenced as `git+https…#develop` (branch, not an exact version); only `package-lock.json` pins the commit. `netlify.toml` uses Node `22` (major only).
- Invariant 8: `site.url` falls back to the literal `http://localhost:3000`; the e-mail regex and institution types are literals (copy, low risk). None are in `TECH-DEBT.md`.
- Invariant 9 (notified / audited / extensible): demo requests land in Netlify Forms; notification e-mail and outgoing webhook are Netlify UI settings. No Credigit audit log, HTML template or domain event until a Credigit receiver exists (SITE-Q-01, SITE-Q-06).
- Privacy: interim notice only; final legal text pending (SITE-Q-02).
- Docs drift: README says Log in goes to `<url>/login`; code links to `<url>/`.
- Unit tests cover form logic only; no component, smoke or accessibility tests.

## 11. Tech debt
| TD id | Summary |
|---|---|
| — | No open items. TD-001 (hard-coded app URL fallback) closed 2026-11-11. The gaps above are not yet recorded in `TECH-DEBT.md`. |
