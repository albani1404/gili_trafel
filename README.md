# Sea Breeze Travels — Frontend

React + Vite + Tailwind CSS v4.

Home page with three sections (**Home**, **Destinations**, **Contact**) plus a **destination detail page** at `/destinations/:id`. The menu scrolls to each section (`/#home`, `/#destinations`, `/#contact`) from any page.

```bash
npm install
npm run dev      # development
npm run build    # production build
npm run lint
```

Notes
- Destination data lives in `src/data/destinations.js`; navigation and contact details in `src/data/navigation.js`.
- Clicking a destination card opens its detail page with an image/video slider, highlights, travel tips and a trip summary.
- Clicking "Enquire about this trip" on the detail page goes to the contact form with that destination pre-selected.
- Slides are built from `heroImage` + `gallery` + the optional `videos` array of each destination (`type: 'video'` for an mp4, or `type: 'youtube'` with an `id`). The videos in `destinations.js` are sample placeholders; replace them with real ones.
- When deploying, configure your host to serve `index.html` for all routes (SPA fallback) so `/destinations/bali` works on refresh.
- The contact form is front-end only. Connect it to a backend or an email service (e.g. Formspree, EmailJS) to receive messages.
