# credigit-ser-landing

Marketing site for **Smart Enterprise Risk 360°** (Credigit Analytical Limited). Next.js 16 static export,
built only from components in the shared library [`@credigit/web-ui`](https://github.com/T5T-Engineering/credigit-ser-web-component).

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in ./out
npm run lint
npm run typecheck
npm test           # Vitest unit tests
```

`@credigit/web-ui` is installed from the library's public GitHub repo (`develop` branch). No credentials are needed.

### Picking up library changes

The lock file pins an exact library commit, so builds are repeatable. After library changes are pushed to its
`develop` branch:

```bash
npm update @credigit/web-ui   # moves the lock file to the latest develop commit
```

Commit the updated `package-lock.json`.

### Developing the library and the site together

With both repos checked out side by side, link the local library (not saved to package.json):

```bash
npm install ../credigit-ser-web-component --no-save
```

`next.config.ts` detects the link and adjusts the build root. Run `npm install` again to go back to the GitHub version.

## Configuration

See `.env.example`:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Public URL for canonical links, Open Graph, robots and sitemap |
| `NEXT_PUBLIC_DEMO_REQUEST_TRANSPORT` | `netlify-forms` (set in `netlify.toml`: submissions go to Netlify Forms, form `demo-request`), `json` (POST to the endpoint below) or empty ("not connected yet"; `json` if an endpoint is set) |
| `NEXT_PUBLIC_DEMO_REQUEST_ENDPOINT` | JSON receiver for demo requests (`json` transport only) |
| `NEXT_PUBLIC_APP_URL` | Core application URL. Log in / Register go to `<url>/login` and `<url>/register`; empty = placeholder pages |

## Deploying to Netlify

Build settings live in [`netlify.toml`](netlify.toml): `npm run build`, publish `out`, Node 22.

The library repo is public, so Netlify needs no tokens or extra environment variables to install it.

### Demo requests (Netlify Forms)

`public/__forms.html` is a hidden copy of the demo form so Netlify detects it at deploy time; the React form posts to it.
In the Netlify UI: enable form detection (Forms), then add a form-submission e-mail notification (and optionally an
outgoing webhook) for the `demo-request` form. Submissions with the `bot-field` honeypot filled are dropped as spam.
See [`docs/integration-points.md`](docs/integration-points.md) and [`docs/open-questions.md`](docs/open-questions.md).

## Branches

`develop` (all work lands here) → `test` → `uat` → `staging` → `production`.
