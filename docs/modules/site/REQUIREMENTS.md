# Site (marketing) — requirements

| | |
|---|---|
| Module | `site` (`src/app`, `src/sections`, `src/content`) |
| Repo | credigit-ser-landing |
| PRD | Product copy: §1.2–1.3, §2.1–2.3, §3 (scope / phasing table), §4.1 (roles), §5 (data spine, connectors), §6.1–6.5 (lifecycle), §6.2 (360 RAR cardinal points and postures), §6.12–6.13 (AI co-pilot), §9 (regulatory alignment), §10 (security, auditability). Sign-on: §4.2 (named logins, MFA). |
| Owner (business) | Credigit Analytical Limited marketing / product |
| Counterpart | `credigit-ser-frontend/docs/modules/auth/` (Log in / Register targets); `credigit-ser-web-component/docs/modules/` (all UI) |
| Last reviewed | 2026-11-12 |

## 1. Purpose and scope
Public site that explains Smart Enterprise Risk 360° to banks and microfinance institutions, routes existing users to the core application and collects demo requests. Copy states only what the PRD states (no invented figures, dates or claims).

- In scope: home page sections, header / footer navigation, Log in / Register links (or placeholder pages), demo-request form, legal placeholder page, internal brand-preview page, metadata / robots / sitemap, Netlify static deployment.
- Out of scope: authentication (core app), storing demo requests (no backend yet), CMS, analytics, cookie consent (no cookies are set by the site's own code), localisation.

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
| SITE-FR-06 | The form POSTs JSON (`…values, source: "credigit-ser-landing"`) to `NEXT_PUBLIC_DEMO_REQUEST_ENDPOINT`; when unset it shows "not connected yet" and sends nothing; success / error states announced (`aria-live`, focus) | README "Configuration" |
| SITE-FR-07 | Legal page with privacy notice and terms anchors ("to be published") | Repo design |
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
| `NEXT_PUBLIC_DEMO_REQUEST_ENDPOINT` | Demo-request receiver | empty → "not connected" | README |
| Institution types | Bank, Microfinance institution, Other financial institution | `src/content/demo.ts` | PRD §2.1 (banks and MFIs); "Other" is an assumption |

## 5. Workflows (Operations)
Not applicable on the site. Any approval of a demo request or onboarding would belong to the backend's Operations workflow once a receiver exists (open question SITE-Q-01).

## 6. Notifications
| Template id | When | Recipients |
|---|---|---|
| – (none yet) | Demo request received | Not defined — the receiver does not exist (SITE-Q-01). The confirmation e-mail to the requester and the alert to sales are not built. |

## 7. Events and hook points
None on the site (static, no server). A future demo-request receiver should publish a `demo-request.received` style event — name not defined (SITE-Q-01).

## 8. Integration points
| Connector / system | Direction | Trigger | Data | Status |
|---|---|---|---|---|
| Core application (credigit-ser-frontend) | Outbound link | Log in / Register click | URL only | Built (`NEXT_PUBLIC_APP_URL`) |
| Demo-request receiver | Outbound, real-time (browser POST) | Form submit | JSON `{name, email, institution, institutionType, role, country, message, source}` | Not connected (endpoint unset) |
| `@credigit/web-ui` (GitHub `develop`) | Build-time dependency | `npm install` | Library source | Built |
| Google Fonts (via library styles, Baloo 2) | Outbound, browser | Page load | Font files | Built (owned by the library) |

## 9. Non-functional
- Privacy: the form collects personal data (name, work e-mail) with no privacy notice published yet and no consent text (legal page is a placeholder).
- Security: no secrets; static hosting; the receiver URL is public by design (`NEXT_PUBLIC_*`), so the receiver must handle abuse (rate limit, bot protection).
- Accessibility: see SITE-FR-11.
- Branding: tokens only (invariant 2); Bolt design language via library components (invariant 3).

## 10. Open questions
| ID | Question | Current assumption |
|---|---|---|
| SITE-Q-01 | Which system receives demo requests (core backend endpoint, CRM, form service), who is notified, and is there a confirmation e-mail? | Endpoint unset; form shows "not connected" |
| SITE-Q-02 | Privacy notice and terms text, and consent wording for the demo form | Placeholder "to be published" |
| SITE-Q-03 | Should `/brand/` exist on the public production site? | Kept, `noindex`, browser-local only |
| SITE-Q-04 | Exact Log in / Register paths in the core app (README says `<url>/login`, code links to `<url>/` and `<url>/register/`) | Code behaviour |
| SITE-Q-05 | Analytics / cookie consent requirements | None |

These IDs are new; the repo has no `docs/open-questions.md` yet.
