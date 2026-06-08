# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Sai Jeshwanth Goud Illuri (Business Analyst). Single-page Next.js app deployed to Vercel at saijeshwanthgoud.com. Dark-mode-only design with glassmorphism, gradient effects, and scroll-triggered animations.

## Commands

- `npm run dev` — starts dev server on port 9002
- `npm run build` — production build (TypeScript and ESLint errors are ignored via next.config.ts flags)
- `npm run lint` — ESLint with next/core-web-vitals + next/typescript
- `npm run typecheck` — `tsc --noEmit` (strict mode)
- `npm test` — Jest with jsdom (test setup references `src/test/setup.ts` which does not exist yet; no tests written)

## Architecture

### Single-page layout

`src/app/page.tsx` renders all sections in order: Summary, Experience, Achievements, Projects, Skills, Education, Contact. `src/app/layout.tsx` wraps everything with `ThemeProvider` (locked to dark mode), `Toaster`, `BackToTopButton`, and Vercel Analytics/SpeedInsights.

### Section pattern

Every major section follows the same structure:

1. **Data** is defined as a const array/object at the top of the section file (e.g., `experiences` in `experience.tsx`, `projects` in `projects-section.tsx`). There is no external data source or CMS.
2. **`SectionWrapper`** wraps each section — provides the `id` for anchor navigation, an IntersectionObserver-based fade-in animation via `useAppearOnScroll`, and consistent padding/container sizing.
3. **`SectionTitle`** renders a gradient heading with a decorative underline.

Some sections have two files: a wrapper component (e.g., `achievements.tsx`) that delegates to a detail component (e.g., `achievements-section.tsx`).

### Navigation and scrolling

- `Header` defines nav items with `#section-id` anchors and uses `useActiveSection` hook to highlight the current section via IntersectionObserver.
- Smooth scroll with 80px header offset is handled by `handleNavLinkClick` in the Header component, not by the browser's native smooth scroll alone.
- Mobile nav uses Radix `Sheet` (slide-out drawer).

### Styling system

- **Tailwind CSS v3** with `tailwindcss-animate` plugin. All colors come from HSL CSS custom properties defined in `globals.css` and mapped in `tailwind.config.ts`.
- **Custom CSS variables** for responsive typography: `--h1-size` through `--xs-size` using `clamp()`. Components reference these as `text-[var(--h2-size)]` etc.
- **Custom utility classes** in `globals.css`: `glassmorphism-heavy`, `mac-shadow`, `animate-fade-in`, `animate-slide-in-bottom`, `animate-gradient-text-slow`, `button-glow`, `project-card`, `experience-tab-card`, `education-card`, etc.
- **shadcn/ui** components live in `src/components/ui/` — default style, neutral base color, CSS variables enabled. Add new ones with `npx shadcn@latest add <component>`.

### Animations

- **Framer Motion** for entrance animations, hover effects, and layout transitions (e.g., `layoutId="nav-active-pill"` for the nav indicator, staggered card reveals in projects/contact).
- **CSS keyframe animations** for scroll-triggered fade-ins, gradient text shifts, and glow pulses.
- **`useAppearOnScroll`** hook uses IntersectionObserver for triggering CSS animations when elements enter the viewport.
- **Typed.js** for the typing animation effect.

### Path aliases

`@/*` maps to `./src/*` (configured in both tsconfig.json and components.json).

### Key dependencies

- `framer-motion` — animation library used heavily across sections
- `lucide-react` — all icons
- `next-themes` — theme provider (dark mode only)
- `@radix-ui/*` — underlying primitives for shadcn/ui components
- `typed.js` — typing animation effect
- `@genkit-ai/*` / `genkit` — declared in dependencies but no `src/ai/` directory exists; currently unused
