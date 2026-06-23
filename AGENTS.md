# AGENTS.md

## Cursor Cloud specific instructions

This is a frontend-only single-page marketing site (React 19 + Vite 6, styled with Tailwind v4). There is no backend, database, or auth.

- Standard scripts live in `package.json`: `npm run dev` (Vite dev server), `npm run build`, `npm run preview`, `npm run lint` (ESLint). Use those rather than re-documenting them here.
- The dev server runs on a fixed port `3000` (set in `vite.config.js`), not Vite's default 5173.
- The contact form (`src/components/ContactSection.jsx`) sends real email through EmailJS using hard-coded public IDs. Do NOT actually submit the form during testing — it delivers a real message to the organization's inbox. Fill/validate fields without clicking "Send Message".
- No automated test suite is configured; "lint + build + manual GUI check" is the verification path.
