# AGENTS.md

## Cursor Cloud specific instructions

This repository is a **single static frontend** marketing site (React 19 + Vite 6, Tailwind v4). There is no backend/server, database, or other service to run — the only service is the Vite dev server.

### Services

| Service | Command | Notes |
|---------|---------|-------|
| Web (dev) | `npm run dev` | Vite dev server on `http://localhost:3000` (port pinned in `vite.config.js`). |

Standard commands are documented in `README.md` and `package.json` scripts: `npm run lint` (ESLint), `npm run build` (production build to `dist/`), `npm run preview` (serve built output).

### Notes

- The contact form (`src/components/ContactSection.jsx`) sends mail via EmailJS. It has hardcoded fallback credentials, so it works without env vars, but **submitting it sends a real email to the site owner** — avoid actually submitting the form during testing. The optional `VITE_EMAILJS_*` overrides live in `.env` (copy from `.env.example`).
- The production build emits large bundle/asset warnings because the gallery ships many full-size JPGs (`dist/` ~92 MB); this is expected, not an error.
