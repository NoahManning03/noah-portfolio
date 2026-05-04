# Noah Manning · Portfolio

A modern single-page personal portfolio built with **React + Vite**, **Tailwind CSS**, and **Framer Motion**.

## Tech

- React 19 + Vite
- Tailwind CSS 3
- Framer Motion (scroll & section animations)
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

## Customizing

All copy lives in `src/data/portfolio.js` — edit that file to update content (nav links, hero copy, about, skills, experience, projects, certifications, contact).

Theme tokens (background, accent, etc.) live in `tailwind.config.js`.
