---
name: hof-design-system
description: "Use when the user asks to implement or review UI, visual components, animations, or brand consistency for HOF; or when they ask about colors, typography, or motion for the project. Reads the HOF Design System and applies its palette, typography, and motion principles to proposals and code."
---

# Skill: HOF Design System

## Mission

Apply the HOF Design System to every UI, component, and motion decision: palette, typography, animations, and brand tone. Maintain consistency with `design-system/HOF-Design-System.md` and avoid incorrect logo usage or undefined colors.

## When to Activate

- Implementing or reviewing screens, components, or styles.
- Defining or reviewing animations and transitions.
- Questions about colors, fonts, or the site’s visual feel.
- Creating CSS tokens, themes, or design variables.

## Steps

1. **Read the Design System.** Open `design-system/HOF-Design-System.md` and keep at hand the palette (Primary `#E30613`, Secondary `#FFA800`, etc.), typography (Graciato/Montserrat), and animations section.
2. **Propose or implement** respecting:
   - Only official palette colors.
   - Headings with Graciato (or fallback); body with Montserrat.
   - Durations 200–400 ms (micro) and 400–600 ms (transitions); premium easing; hover with subtle scale/brightness.
3. **Avoid** incorrect logo use (distorting, recoloring outside palette), colors not defined in the Design System, and slow or linear animations that don’t follow the motion principles.

## Usage Example

**User:** "I need a primary button for reservations."

**Agent:** Use background `#E30613`, white text, Montserrat (or equivalent). Hover transition: `transform: scale(1.03)` and `filter: brightness(1.1)` with duration 250 ms and easing `cubic-bezier(0.25, 0.46, 0.45, 0.94)`. If the rule in `.agent/rules/hof-design-and-motion.md` is active, reuse the CSS variables defined there.

## Reference

- Design System: `design-system/HOF-Design-System.md`
- Brandbook: `HOF_Brandbook_2025.pdf` (project root)
