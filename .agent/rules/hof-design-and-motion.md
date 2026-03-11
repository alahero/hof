---
glob: "*.tsx,*.jsx,*.css,*.scss"
---

# Rule: HOF Design System and Motion

Applies to UI components and styles. Every interface and animation must follow the HOF Design System defined in `design-system/HOF-Design-System.md`.

## Palette and Typography

- Use only Design System colors. Primary: `#E30613`, Secondary: `#FFA800`, Neutral: `#000000`, Surface: `#E9E9E9`, Accent 1: `#3C9945`, Accent 2: `#069DE3`.
- Headings/hero: Graciato or fallback (Oswald, Bebas Neue). Body and UI: Montserrat.
- In dark mode: backgrounds `#000000` or `#0A0A0A`; surfaces `#1A1A1A` / `#252525`.

## Animations

- Micro-interactions (hover, focus): 200–400 ms.
- Section or module transitions: 400–600 ms.
- Easing: `ease-out` or custom curve (cubic-bezier) for a premium feel. Avoid linear on entrances.
- Block entry: fade + slight vertical movement (e.g. opacity 0→1, translateY 20px→0).
- Hover on CTAs/cards: subtle scale (1 → 1.02–1.05) and/or brightness change; do not overdo it.

## Preferred Patterns

### CSS (variables + transition)

```css
:root {
  --hof-primary: #E30613;
  --hof-secondary: #FFA800;
  --hof-surface: #E9E9E9;
  --hof-motion-fast: 250ms;
  --hof-motion-normal: 400ms;
  --hof-ease: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.hof-btn-primary {
  background: var(--hof-primary);
  transition: transform var(--hof-motion-fast) var(--hof-ease),
              filter var(--hof-motion-fast) var(--hof-ease);
}
.hof-btn-primary:hover {
  transform: scale(1.03);
  filter: brightness(1.1);
}
```

### React + Framer Motion (section entry)

```tsx
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export function Section({ children }) {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {children}
    </motion.section>
  );
}
```

### CTA Button (HOF style)

- Background `#E30613`, white text. Hover: scale 1.02–1.05 and brightness or subtle box-shadow.
- Secondary button: border `#E30613` or `#FFA800`, transparent background, same transition timing.

## Logo and Identity

- Respect logo clear space. Do not distort or use colors outside the official palette.
- Graphic elements (Hoffy, cups, beer pong, gnomes): flat or flat-with-stroke illustration per brandbook.
