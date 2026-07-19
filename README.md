# Ashiq Ali — Portfolio

A terminal-forward personal portfolio for a Senior Platform Engineer, built with Next.js, TypeScript, and Tailwind CSS. The design takes inspiration from [jcode.sh](https://jcode.sh) — dense, monospace, dark-mode, and data-driven.

## Sections

- **Hero** — name, title, CTA command, quick links, and key stats
- **About** — summary, location, education
- **Skills** — terminal-style JSON skill matrix
- **Certifications** — GCP and HashiCorp credentials
- **Experience** — reverse-chronological roles with measurable impact
- **kubectl get repos` style project table
- **Contact** — terminal `connect` prompt with links

## Tech Stack

- Next.js 14 (static export)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- JetBrains Mono

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static files are generated in `dist/`.

## Deploy

### GitHub Pages

1. Push this repo to GitHub.
2. Enable GitHub Pages in repo settings.
3. Set the source to "GitHub Actions".
4. The included `.github/workflows/deploy.yml` will build and deploy on every push to `main`.

### Netlify

1. Drag the `dist/` folder into Netlify Drop, or
2. Connect the repo and set the build command to `npm run build` with publish directory `dist`.

## Customization

Edit `lib/data.ts` to update content, skills, experience, projects, and contact links.

## License

MIT — free to use and modify.
