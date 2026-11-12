# Modules

Per-module requirements and implementation notes (project invariant 14). Each module has a `REQUIREMENTS.md` and an `IMPLEMENTATION.md`; update both in the same change as the code.

The marketing site is a single module.

| Module | Source | Purpose | Status | Requirements | Implementation | Counterpart (other repo) |
|---|---|---|---|---|---|---|
| site | `src/app`, `src/sections`, `src/content`, `next.config.ts`, `netlify.toml` | Public marketing site: home page sections, product copy from the PRD, Log in / Register links to the core app, demo-request form, legal and brand-preview pages, SEO | Built (static export; demo form and legal pages not connected) | [REQUIREMENTS](site/REQUIREMENTS.md) | [IMPLEMENTATION](site/IMPLEMENTATION.md) | `credigit-ser-frontend/docs/modules/auth/` (sign-in / register targets); `credigit-ser-web-component/docs/modules/` (every component used) |

Related: [`../../TECH-DEBT.md`](../../TECH-DEBT.md) · [`../../README.md`](../../README.md).
