# Open questions — credigit-ser-landing

Decisions the site needs from the business, legal or product owners. Details and current assumptions also appear in
`docs/modules/site/REQUIREMENTS.md` §10.

| ID | Question | Owner | Current assumption | Status |
|---|---|---|---|---|
| SITE-Q-01 | Which system ultimately receives demo requests (core backend endpoint, CRM), who is notified, and should a `demo-request.received` event be published? | Product / sales | Netlify Forms stores submissions; notification e-mail configured in the Netlify UI | Open |
| SITE-Q-02 | **Legal must supply the final privacy notice and terms of use text**, the demo-form consent / notice wording, retention period, lawful basis and data-protection contact, in line with the Nigeria Data Protection Act 2023 | Legal (Credigit Analytical Limited) | Interim neutral `/privacy/` page drafted from the form fields only; terms "to be published" | Open |
| SITE-Q-03 | Should `/brand/` exist on the public production site? | Product | Kept, `noindex`, browser-local only | Open |
| SITE-Q-04 | Exact Log in / Register paths in the core app | Product / frontend | `<url>/` and `<url>/register/` | Open |
| SITE-Q-05 | Analytics / cookie consent requirements | Marketing / legal | None | Open |
| SITE-Q-06 | Should requesters receive a confirmation e-mail? (Netlify Forms cannot send one; needs the notification service via the core backend) | Sales / product | No confirmation e-mail | Open |
