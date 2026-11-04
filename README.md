# Arshad Khan — Portfolio

Source for [www.arshad-khan.com](https://www.arshad-khan.com), the portfolio of industrial designer and product builder Arshad Khan.

## Featured work

1. **Imposter Arcade** — the flagship project: a portable, fully offline LAN party game for Windows hosts and mobile-browser players.
2. **Northstar** — a human-centered productivity system for intentional focus and reflection.
3. **Enhancer.io** — a Windows image and PDF workspace with local enhancement, wallpaper composition, PDF creation, compression and image-format conversion.

Find the Imposter remains a secondary mode inside the Imposter Arcade case study.

## Highlights

- Dedicated Imposter Arcade case-study page
- Enhancer.io case study at `/enhancer-io`, with real app screenshots and version-specific capabilities
- Direct Windows game download
- Responsive cyberpunk-inspired interface
- Reduced-motion support and keyboard-friendly controls
- First-interaction sound effects with a saved mute preference
- Instagram developer QR popup

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in a browser.

## Validate

```bash
npm run build
npm run lint
npm test
```

The production website is deployed through Vercel. The downloadable Windows package is stored at `public/downloads/Imposter-Arcade-1.3-Final.zip`.
