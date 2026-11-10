# Technical debt register

Items knowingly deferred. Each has an owner decision pending and a clear fix.

| ID | Area | Debt | Why it exists | Fix | Raised |
|---|---|---|---|---|---|
| TD-001 | `src/content/site.ts` | Default application URL `https://credigit-app.netlify.app` is hard-coded as the fallback for the Log in / Register buttons. Violates the "no hard-coded values" invariant. | Requested to point the buttons at the deployed app now, with configuration to follow. | Set `NEXT_PUBLIC_APP_URL` per environment (develop/test/uat/staging/production) in Netlify and remove `DEFAULT_APP_URL`. | 2026-11-10 |
