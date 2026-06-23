# Firstcare Wildfire Support

Single-page React + Vite marketing website (static frontend only, no backend).

## Cursor Cloud specific instructions

- This is a frontend-only Vite SPA. There is no backend/database/API service to run — the only service is the Vite dev server.
- Standard commands live in `package.json` scripts: `npm run dev` (dev server on port 3000, configured in `vite.config.js`), `npm run build`, `npm run preview`, `npm run lint`.
- The contact form (`src/components/ContactSection.jsx`) submits via EmailJS using hardcoded credentials and sends a real email to the organization. Do NOT click "Send Message" when manually testing; fill fields only to verify interactivity.
