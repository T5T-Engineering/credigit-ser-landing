# Site (marketing) — requirements

| | |
|---|---|
| Module | `site` (`src/app`, `src/sections`, `src/content`) |
| Repo | credigit-ser-landing |
| PRD | Product copy: §1.2–1.3, §2.1–2.3, §3 (scope / phasing table), §4.1 (roles), §5 (data spine, connectors), §6.1–6.5 (lifecycle), §6.2 (360 RAR cardinal points and postures), §6.12–6.13 (AI co-pilot), §9 (regulatory alignment), §10 (security, auditability). Sign-on: §4.2 (named logins, MFA). |
| Owner (business) | Credigit Analytical Limited marketing / product |
| Counterpart | `credigit-ser-frontend/docs/modules/auth/` (Log in / Register targets); `credigit-ser-web-component/docs/modules/` (all UI) |
| Last reviewed | 2026-11-12 (landing gaps: Netlify Forms, privacy notice) |

## 1. Purpose and scope
Public site that explains Smart Enterprise Risk 360° to banks and microfinance institutions, routes existing users to the core application and collects demo requests. Copy states only what the PRD states (no invented figures, dates or claims).

- In scope: home page sections, header / footer navigation, Log in / Register links (or placeholder pages), demo-request form delivered to Netlify Forms, privacy notice page (interim text), legal placeholder page, internal brand-preview page, metadata / robots / sitemap, Netlify static deployment.
- Out of scope: authentication (core app), a Credigit-owned demo-request backend (Netlify Forms is the interim receiver), CMS, analytics, cookie consent (no cookies are set by the site's own code), localisation.

## 2. Users and permissions
| Role | What they do here | Permission keys |
|---|---|---|
| Anonymous visitor | Reads the site, requests a demo, follows Log in / Register | None — public site |
| Existing tenant user | Follows Log in to the core app | Enforced by the core app, not here |
| Internal stakeholder | Previews brand colours / logos on `/brand/` (not indexed, browser-local only) | None (see Gaps) |

## 3. Functional requirements
| ID | Requirement | Source |
|---|---|---|
| SITE-FR-01 | Home page sections in order: hero, problem, 360 RAR, data spine, lifecycle, modules, AI co-pilot, governance (incl. regulatory alignment), roadmap, audience, FAQ, demo | PRD §1–§10 (content); repo design |
| SITE-FR-02 | Copy comes only from the PRD; module list and phases from the scope table; no delivery dates (PRD states none) | Invariant 4; PRD §3 |
| SITE-FR-03 | Sticky header with in-page links, Log in, Register and "Request a demo"; footer with product / platform / get-started columns and legal links | Repo design |
| SITE-FR-04 | Log in / Register point at the core application from `NEXT_PUBLIC_APP_URL`; when unset they open local `/login/` and `/register/` placeholder pages that explain onboarding (named logins, MFA, institution admin sets users up) | README "Configuration"; PRD §4, §4.2; TD-001 (closed) |
| SITE-FR-05 | Demo-request form: full name, work email, institution, institution type (required); role, country, message (optional); client-side validation with focus on the first invalid field | Repo design (assumption — fields not in PRD) |
| SITE-FR-06 | Submission transport set by `NEXT_PUBLIC_DEMO_REQUEST_TRANSPORT`: `netlify-forms` posts URL-encoded fields (`form-name=demo-request`, honeypot `bot-field`, `source`) to the static form file `/__forms.html` that Netlify detects at deploy; `json` POSTs JSON (`…values, source`) to `NEXT_PUBLIC_DEMO_REQUEST_ENDPOINT`; unset transport falls back to `json` when the endpoint is set, otherwise shows "not connected yet" and sends nothing. Success / error states use the library `Alert`, announced (`aria-live`, focus) | README "Configuration"; Netlify Forms (hosting) |
| SITE-FR-06a | Spam protection: a honeypot field (`bot-field`) hidden from people and assistive technology; submissions with it filled are dropped by Netlify (static form `netlify-honeypot`) and are not sent by the client | Repo design |
| SITE-FR-06b | Privacy notice line under the form: states who receives the details and why, and links to `/privacy/` | SITE-Q-02; Nigeria Data Protection Act 2023 (generic reference only) |
| SITE-FR-07 | Privacy notice page `/privacy/` (interim, neutral text: what the form collects, why, who processes it, that the Nigeria Data Protection Act 2023 applies; final text from legal, SITE-Q-02). Legal page keeps the terms placeholder and links to the privacy notice. Footer "Privacy notice" goes to `/privacy/` | Repo design; SITE-Q-02 |
| SITE-FR-08 | Brand preview page (`/brand/`) using `BrandSettingsPanel`; changes saved only in the visitor's browser; not indexed | Invariant 2 (runtime branding demo) |
| SITE-FR-09 | SEO: canonical URLs, Open Graph / Twitter metadata, favicons, `robots.txt` (disallow `/brand/`), `sitemap.xml`; `/login/`, `/register/`, `/brand/` are `noindex` | README "Configuration" (`NEXT_PUBLIC_SITE_URL`) |
| SITE-FR-10 | Brand applied at runtime through `BrandProvider` and `brandBootScript` (no flash of default brand) | Invariant 2 |
| SITE-FR-11 | Accessible: semantic sections, labelled navigation and form, smooth scroll disabled for reduced motion, anchor offset for the sticky header | PRD §10 (non-functional); library conventions |
| SITE-FR-12 | Static export deployable to Netlify with no secrets | README "Deploying to Netlify"; invariant 7 |

## 4. Business rules and parameters
| Rule key | Meaning | Default | Source |
|---|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Public URL for canonical / OG / robots / sitemap | `http://localhost:3000` in code; `https://example.com` in `.env.example` | README |
| `NEXT_PUBLIC_APP_URL` | Core app base URL for Log in / Register | empty → placeholder pages | README; TD-001 (closed) |
| `NEXT_PUBLIC_DEMO_REQUEST_TRANSPORT` | Demo-request transport: `netlify-forms` | `json` | empty | `netlify-forms` in `netlify.toml`; empty locally | README; `.env.example` |
| `NEXT_PUBLIC_DEMO_REQUEST_ENDPOINT` | JSON receiver URL (transport `json` only) | empty | README |
| Netlify form name / path | `demo-request` posted to `/__forms.html` — must match `public/__forms.html` (a code contract, not a business parameter) | constants in `src/lib/demo-request.ts` | Netlify Forms |
| Institution types | Bank, Microfinance institution, Other financial institution | `src/content/demo.ts` | PRD §2.1 (banks and MFIs); "Other" is an assumption |

## 5. Workflows (Operations)
Not applicable on the site. Any approval of a demo request or onboarding would belong to the backend's Operations workflow once a receiver exists (open question SITE-Q-01).

## 6. Notifications
| Template id | When | Recipients |
|---|---|---|
| Netlify form notification (Netlify UI) | Demo request received (Netlify Forms) | Sales / marketing mailbox configured in Netlify → Forms → Form notifications (owner to supply address, SITE-Q-01). Uses Netlify's own e-mail; no Credigit HTML template. A confirmation e-mail to the requester is not possible from Netlify Forms and is not built (SITE-Q-06). |

## 7. Events and hook points
No hooks on the site (static, no server). Event point: Netlify Forms "outgoing webhook" / form-submission notification can be configured in the Netlify UI to POST each verified submission to an external system (CRM, core backend) — that is the subscribe-able event until a Credigit receiver publishes a `demo-request.received` style event (name not defined, SITE-Q-01). See `docs/integration-points.md`.

## 8. Integration points
| Connector / system | Direction | Trigger | Data | Status |
|---|---|---|---|---|
| Core application (credigit-ser-frontend) | Outbound link | Log in / Register click | URL only | Built (`NEXT_PUBLIC_APP_URL`) |
| Netlify Forms (demo-request receiver) | Outbound, real-time (browser POST) | Form submit | URL-encoded `form-name, bot-field, name, email, institution, institutionType, role, country, message, source` | Built (`NEXT_PUBLIC_DEMO_REQUEST_TRANSPORT=netlify-forms`); needs form detection enabled in Netlify |
| Netlify Forms → notification / outgoing webhook | Outbound from Netlify, real-time | Verified submission | Netlify submission JSON | Configured in Netlify UI (not in repo) |
| JSON demo-request receiver (future backend / CRM) | Outbound, real-time (browser POST) | Form submit | JSON `{name, email, institution, institutionType, role, country, message, source}` | Supported (`json` transport); no receiver yet |
| `@credigit/web-ui` (GitHub `develop`) | Build-time dependency | `npm install` | Library source | Built |
| Google Fonts (via library styles, Baloo 2) | Outbound, browser | Page load | Font files | Built (owned by the library) |

## 9. Non-functional
- Privacy: the form collects personal data (name, work e-mail). A notice line under the form links to the interim `/privacy/` page; the final privacy text and any consent wording are pending legal (SITE-Q-02).
- Security: no secrets; static hosting; the receiver URL is public by design (`NEXT_PUBLIC_*`), so the receiver must handle abuse (rate limit, bot protection).
- Accessibility: see SITE-FR-11.
- Branding: tokens only (invariant 2); Bolt design language via library components (invariant 3).

## 10. Open questions
| ID | Question | Current assumption |
|---|---|---|
| SITE-Q-01 | Which system receives demo requests (core backend endpoint, CRM, form service), who is notified, and is there a confirmation e-mail? | Endpoint unset; form shows "not connected" |
| SITE-Q-02 | Final privacy notice and terms text, consent wording for the demo form, retention period, data-protection contact, lawful basis — legal must supply (Nigeria Data Protection Act 2023) | Interim neutral `/privacy/` page and notice line; terms "to be published" |
| SITE-Q-03 | Should `/brand/` exist on the public production site? | Kept, `noindex`, browser-local only |
| SITE-Q-04 | Exact Log in / Register paths in the core app (README says `<url>/login`, code links to `<url>/` and `<url>/register/`) | Code behaviour |
| SITE-Q-05 | Analytics / cookie consent requirements | None |
| SITE-Q-06 | Should requesters get a confirmation e-mail (needs a receiver beyond Netlify Forms, e.g. notification service via core backend)? | No confirmation e-mail |

Also tracked in `docs/open-questions.md`.
