# Portfolio

Personal portfolio site built with TanStack Start, React, Vite, and Tailwind CSS.

## Stack
- TanStack Start + TanStack Router
- React 19
- Vite 7
- Tailwind CSS v4
- Motion (for animations)

## Getting Started
```bash
npm install
npm run dev
```

The dev server will print the local URL (usually http://localhost:8080 or 8081).

## Scripts
```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run format
```

## Project Structure
- src/routes/index.tsx: Main landing page composition
- src/components/portfolio: Portfolio sections (Hero, About, Projects, etc.)
- src/styles.css: Tailwind theme tokens and global styles

## Assets
- Profile image used in About section lives in src/assets.
- Update the import in src/components/portfolio/About.tsx if you swap the file.

## Notes
- No automated tests are configured yet.
- Contact section is currently informational (no form submission).
