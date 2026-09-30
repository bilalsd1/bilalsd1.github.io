# Syed Bilal Ali — portfolio

Static site (no build step). Open `index.html`.

## Single source of truth
| File | Content |
|---|---|
| `data/profile.js` | identity, positioning, education, expertise, technologies, skill chains, diagrams, vault, **GAPS** |
| `data/experience.js` | roles + tagged bullets (drive the CV variants) + skills |
| `data/projects.js` | case studies |
| `data/certificates.js` | credentials (`source:"document"` needs a real file) |

Edit data only. The site, `cv.html` (4 CV versions) and `review.html` (owner checklist, noindex) all read from it.

## Rules
- Nothing is added without a supporting document. Unproven items use `verified:false` and stay hidden (set `SITE.showUnverified = true` to reveal them for review).
- Never publish CNIC, passport, home address, phone or DOB. The original CV PDF contains some of these, so do not upload it; `cv.html` generates a clean CV instead.

## Before going live
1. Replace `https://YOUR-DOMAIN` in `index.html`, `cv.html`, `robots.txt`, `sitemap.xml` and `data/profile.js`.
2. Deploy to Netlify or Cloudflare Pages (they apply `_headers`: HSTS, CSP etc. and provide HTTPS).
3. Work through `review.html`.

## Phase 2 (not built)
`backend/schema.sql` is a Postgres/Supabase schema with RLS, audit triggers and PUBLIC / RESTRICTED / PRIVATE access. The admin panel, authentication, signed-URL storage, OCR pipeline and server-side rate limiting need a deployed backend and are not part of this static build.
