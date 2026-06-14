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
| `VITE_WHATSAPP_CHANNEL_URL` | WhatsApp Channel invite link (optional — add when ready) |

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

### WhatsApp Channel

When you have your channel invite link, add it to `.env`:

```
VITE_WHATSAPP_CHANNEL_URL=https://whatsapp.com/channel/0029V...
```

The Stay Connected section will automatically show a "Join Our Channel" button. Until then, it shows a direct WhatsApp message link.

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
