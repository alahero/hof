# HOF — Agent Context

Dynamic web project for **HOF (House of Fiesta)**: nightlife site with fluid animations and striking aesthetics, governed by the HOF Design System.

## Stack and Environment

- **Runtime:** Node.js
- **Package manager:** `npm` or `pnpm`
- **Front-end:** Vite + React (or Next.js). Animations: Framer Motion or equivalent.
- **Design System:** `design-system/HOF-Design-System.md` (source of truth for UI and motion).

## Commands

- Install dependencies: `npm install` or `pnpm install`
- Development: `npm run dev` or `pnpm dev`
- Build: `npm run build` or `pnpm build`
- Build preview: `npm run preview` or `pnpm preview`

If the project uses Next.js: `npm run dev`, `npm run build`, `npm run start`. Adjust according to the existing `package.json`.

## Rules and Skills

- **Design and motion rule:** Applies to all UI and animations. See @.agent/rules/hof-design-and-motion.md
- **HOF Design System skill:** Activate when implementing or reviewing UI, components, animations, or brand consistency. See @.agent/skills/hof-design-system/SKILL.md

## Security Limits

- Do not modify the `/secrets` folder or commit credentials or API keys.
- Do not alter `HOF_Brandbook_2025.pdf` as the source of truth for the brandbook; the Design System lives in `design-system/`.

## Language

- Code comments, commit messages, and PRs: English (project language).
