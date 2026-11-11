# Technical debt register

Items knowingly deferred. Each has an owner decision pending and a clear fix.

| ID | Area | Debt | Why it exists | Fix | Raised |
|---|---|---|---|---|---|

## Closed

| ID | Debt | Closed | How |
|---|---|---|---|
| TD-001 | Hard-coded fallback application URL for the Log in / Register buttons | 2026-11-11 | `NEXT_PUBLIC_APP_URL` set in Netlify; fallback removed. Unset = local placeholder pages |
