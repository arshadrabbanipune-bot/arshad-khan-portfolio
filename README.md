# Arshad Khan — Portfolio

Source for [www.arshad-khan.com](https://www.arshad-khan.com), the portfolio of industrial designer and product builder Arshad Khan.

## Featured work

1. **Imposter Arcade** — the flagship project: a portable, fully offline LAN party game for Windows hosts and mobile-browser players.
2. **Northstar** — a human-centered productivity system for intentional focus and reflection.
3. **Enhancer.io** — a Windows image and PDF workspace with local enhancement, wallpaper composition, PDF creation, compression and image-format conversion.

Find the Imposter remains a secondary mode inside the Imposter Arcade case study.

## Highlights

- Dedicated Imposter Arcade case-study page
- Enhancer.io download page at `/enhancer-io`, with real app screenshots and a Windows installer
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

## Publish an Enhancer.io update

1. Set the app version, build and test the Windows x64 installer from the Enhancer.io project, and calculate its SHA-256 checksum.
2. Create a draft in the [Enhancer.io release repository](https://github.com/arshadrabbanipune-bot/enhancer-io-releases/releases/new). Use a stable version tag such as `v0.7.0` and describe the changes and any requirements in the release notes.
3. Attach the tested installer as `Enhancer-io-Setup-x64.exe`. Keep this exact asset name on every release. Check the uploaded size and SHA-256 before publishing, then publish the release and mark it as latest. Leave prereleases marked as prereleases.
4. Check the public download page after its five-minute refresh interval. It reads the latest release for the installer, size and checksum. The GitHub direct link remains available during metadata service outages.

Each release keeps its own installer. Publishing the next release does not require a portfolio code change or Vercel deployment.
