# credigit-ser-landing

Marketing site for **Smart Enterprise Risk 360°** (Credigit Analytical Limited). Next.js 16 static export,
built only from components in the shared library [`@credigit/web-ui`](https://github.com/T5T-Engineering/credigit-ser-web-component).

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in ./out
npm run lint
```

`@credigit/web-ui` is installed from the library's GitHub repo (`develop` branch). Your local git must be able to
read that private repo (it can if you can clone it).

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
| `NEXT_PUBLIC_DEMO_REQUEST_ENDPOINT` | Receives demo-request form submissions (JSON POST). Empty = form shows "not connected yet" |
| `NEXT_PUBLIC_APP_URL` | Core application URL. Log in / Register go to `<url>/login` and `<url>/register`; empty = placeholder pages |

## Deploying to Netlify

Build settings live in [`netlify.toml`](netlify.toml): `npm run build`, publish `out`, Node 22.

Because the library repo is private, add these **environment variables** in Netlify (Site configuration →
Environment variables, scope *Builds*, mark the key as secret):

| Key | Value |
|---|---|
| `GIT_CONFIG_COUNT` | `1` |
| `GIT_CONFIG_KEY_0` | `url.https://x-access-token:<TOKEN>@github.com/T5T-Engineering/.insteadOf` |
| `GIT_CONFIG_VALUE_0` | `https://github.com/T5T-Engineering/` |

`<TOKEN>` is a GitHub fine-grained personal access token (resource owner **T5T-Engineering**, repository
**credigit-ser-web-component** only, permission **Contents: Read-only**). If the library repo is made public,
these variables aren't needed.

## Branches

`develop` (all work lands here) → `test` → `uat` → `staging` → `production`.
