# Noah Manning · Portfolio

A single-page personal portfolio built with React 19 + Vite, Tailwind CSS 3, and Framer Motion. All content is a static SPA — there is no backend, database, or external service dependency.

## Cursor Cloud specific instructions

- This is a client-only React + Vite app. There is no backend/API/database; everything runs from the Vite dev server.
- Dependencies (`npm install`) are refreshed automatically by the startup update script, so you normally do not need to reinstall them.
- Standard commands are defined in `package.json` scripts; use those rather than duplicating them:
  - `npm run dev` — start the Vite dev server (defaults to port `5173`). Use `npm run dev -- --host` to bind on all interfaces.
  - `npm run lint` — ESLint (flat config in `eslint.config.js`).
  - `npm run build` — production build via Vite.
  - `npm run preview` — serve the production build locally.
- Site content lives in `src/data/portfolio.js`; theme tokens live in `tailwind.config.js`.
