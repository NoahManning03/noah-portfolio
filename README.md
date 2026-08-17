# Noah Manning · Portfolio

A scroll-driven 3D portfolio built with **React + Vite**, **Three.js**, **GSAP / Lenis**, **Tailwind CSS**, and **Framer Motion**.

## Tech

- React 19 + Vite
- Tailwind CSS 3
- @react-three/fiber + drei + custom GLSL
- GSAP ScrollTrigger + Lenis smooth scroll
- Framer Motion
- Inter (Google Fonts)

## Sections

1. Sticky navbar with scroll-aware blur and active-section highlighting
2. Hero with typing subtitle and CTA buttons
3. About — bio + stat cards
4. Skills — categorized tag grid
5. Experience — vertical timeline
6. Projects — card grid
7. Certifications — card grid
8. Contact — email / LinkedIn / GitHub

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

```bash
npm install
npm i -g vercel
vercel login
vercel
vercel --prod
```

Or import the GitHub repo at [vercel.com/new](https://vercel.com/new): Framework **Vite**, Build `npm run build`, Output `dist`.

## Customizing

All copy lives in `src/data/portfolio.js` — edit that file to update content (nav links, hero copy, about, skills, experience, projects, certifications, contact).

Theme tokens (background, accent, etc.) live in `tailwind.config.js`.
