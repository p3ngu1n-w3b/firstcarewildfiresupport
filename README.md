# Firstcare Wildfire Support

Marketing website for Firstcare Wildfire Support — wildfire prevention, firefighting, and training services across the Garden Route, Western Cape.

**Live site:** [wildfiresupport.org.za](https://www.wildfiresupport.org.za/)

## Tech Stack

- React 19 + Vite 6
- Tailwind CSS v4
- Framer Motion (animations)
- React Router (home + gallery pages)
- EmailJS (contact form)

## Getting Started

### Prerequisites

- Node.js (LTS)
- npm

### Install

```bash
npm install
```

### Environment variables

Copy `.env.example` to `.env` and fill in values:

```bash
cp .env.example .env
```

| Variable | Description |
|----------|-------------|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key |

### Development

```bash
npm run dev
```

Opens at `http://localhost:3000`

### Production build

```bash
npm run build
npm run preview
```

Output goes to the `dist/` folder (~92 MB with gallery images).

### Deploy to cPanel

1. Run `npm run build` on the `cursor/site-overhaul-8e79` branch (or merge to main first).
2. Open the `dist/` folder in your project — it is gitignored, so it only exists after you build locally.
3. In cPanel **File Manager**, go to `public_html` (or your domain folder).
4. Upload **everything inside** `dist/` — not the `dist` folder itself:
   - `index.html`
   - `assets/` folder
   - `favicon.ico`, `og-image.jpg`, `robots.txt`, `sitemap.xml`, `.htaccess`
5. The included `.htaccess` routes `/gallery` and other paths to `index.html` (required for React Router on Apache).

**Tip:** Zip the contents of `dist/` on your machine and use cPanel **Extract** for faster upload:

```bash
cd dist && zip -r ../firstcare-dist.zip .
```

Then upload `firstcare-dist.zip` to cPanel and extract it in `public_html`.

## Project Structure

```
src/
├── components/       # Section components + ui/ + layout/
├── data/             # siteContent.js, testimonials.js, galleryImages.js
├── pages/            # HomePage, GalleryPage
├── utils/            # scroll helpers, motion variants
└── App.jsx           # Router shell
```

## Updating Content

### Fire season alert banner

Edit `fireSeasonAlert` in `src/data/siteContent.js`:

```js
export const fireSeasonAlert = {
  enabled: true,
  message: "Your alert message here",
};
```

### Testimonials

Edit `src/data/testimonials.js` — replace placeholder quotes with real client feedback.

### Gallery images

Drop new images into `src/assets/gallery/` and add category mappings in `src/data/galleryImages.js`.

### Sponsors

Update the `sponsors` array in `src/data/siteContent.js`.

## Scripts

- `npm run dev` — development server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build
- `npm run lint` — ESLint
