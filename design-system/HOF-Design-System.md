# HOF — Comprehensive Design System

**House of Fiesta · Rush the night. Break the rules. Be HOF.**

Design system derived from *HOF_Brandbook_2025*. Mandatory use for the dynamic web experience with fluid animations and striking aesthetics.

---

## 1. Brand Summary

- **Name:** HOF (House of Fiesta)
- **Tagline:** Rush the night. Break the rules. Be HOF.
- **Context:** Fraternity house / nightlife venue in Cancún; audience 20–28 years old, college, spring break, frat culture.
- **Voice:** Bold, tribal, irreverent, playful, dramatic. Brotherhood, ritual, initiation, aesthetic chaos.

---

## 2. Color Palette

| Role        | Primary use      | HEX     | RGB              | UI usage (suggested)           |
|-------------|------------------|---------|------------------|--------------------------------|
| **Primary** | HOF Red          | `#E30613` | 227, 6, 19       | CTAs, accents, logo            |
| **Neutral** | Black            | `#000000` | 0, 0, 0          | Text, dark backgrounds         |
| **Secondary** | Gold/Orange   | `#FFA800` | 255, 168, 0      | Highlights, badges, VIP        |
| **Accent 1** | Green           | `#3C9945` | 60, 153, 69      | Success, confirmation         |
| **Accent 2** | Blue            | `#069DE3` | 6, 157, 227      | Links, info, cool tone        |
| **Surface** | Light gray       | `#E9E9E9` | 233, 233, 233    | Backgrounds, cards, borders    |

**Brand distribution (reference):** Primary 50%, Black 15%, Gold 10%, Green 5%, Blue 5%, Surface 15%.

### Dark mode (recommended for web)

- Backgrounds: black `#000000` or near-black (e.g. `#0A0A0A`).
- Surfaces: very dark gray (e.g. `#1A1A1A`, `#252525`).
- Accents: keep `#E30613` and `#FFA800`; tone down green/blue if needed.

---

## 3. Typography

| Role           | Family          | UI usage                      |
|----------------|-----------------|-------------------------------|
| **Headings**   | Graciato        | H1, hero, headlines           |
| **Subheadings**| Graciato        | H2, H3, sections              |
| **Display**    | Amsi Pro / Narw Ultra | Large text, numbers, impact |
| **Body**       | Montserrat      | Paragraphs, body, UI          |

**Web recommendation:** If Graciato/Amsi Pro are not available, use fallbacks with personality (e.g. Oswald/Bebas for headings, Montserrat for body). Include Montserrat via Google Fonts or similar.

---

## 4. Graphic Identity (web)

- **Logo:** Respect clear space (minimum space around it). Do not distort or recolor outside the official palette.
- **Isotype / imagotype:** Correct uses per brandbook; avoid placing on textures that hinder readability.
- **Graphic elements:** Red cups, Ted Bear (Hoffy), patches, beer pong, 8-bit aesthetic, gnomes. Flat or flat-with-stroke illustration.
- **Texture:** Pattern defined in brandbook; use as a subtle overlay (low opacity) for backgrounds or sections.

---

## 5. Animations and Motion

- **Goal:** Smooth transitions and a premium feel; avoid slow or heavy motion.
- **Principles:**
  - Section entry: fade + slight movement (e.g. translateY 20px → 0).
  - CTAs and hover: subtle scale (1 → 1.02–1.05) and/or brightness/color change.
  - Scroll: consider soft parallax on hero; progressive reveal of blocks.
  - Typical duration: 200–400 ms for micro-interactions; 400–600 ms for page or module transitions.
- **Easing:** Prefer `ease-out` or custom curves (e.g. cubic-bezier) for a “premium” feel.

### Section entrance (all sections except Hero)

- **Trigger:** Viewport only. The entrance runs when the section enters view (`whileInView`, `once: true`). No animation if the user never scrolls to the section.
- **Sequence:** (1) Title and subtitle fade in; (2) main content (cards, list items, blocks) enter from below (opacity 0→1, translateY 24px→0) with **stagger** (default 0.2s between elements).
- **Implementation:** Use `SectionWrapper` with `innerClassName` for the layout wrapper. Pass motion children with variants from `src/lib/hof-motion.ts`: `sectionEntranceItemVariants` for title/subtitle (fade), `sectionEntranceItemFromBelowVariants` for cards/items, `sectionEntranceNestedContainerVariants` for grids/lists that stagger their children. Do **not** use this pattern for the Hero section; Hero keeps its own entrance (title reveal, then label/subtitle/CTA).
- **Tokens:** `HOF_EASE`, `SECTION_ENTRANCE_STAGGER`, `SECTION_ENTRANCE_VIEWPORT`; see `hof-motion.ts`.

---

## 6. Suggested Components (tokens)

- **Primary button:** Background `#E30613`, white text, hover lighter or with glow.
- **Secondary button:** Border `#E30613` or `#FFA800`, transparent background.
- **Cards:** Dark background or `#E9E9E9` in light mode; subtle borders; soft shadow.
- **Badges:** Gold `#FFA800` for VIP/promos; red for “hot” or urgent.

---

## 7. Content and Tone

- Copy: short phrases, imperative, tribal. Examples: “Rush the night.”, “You’re one of us now.”, “Sweat. Glow. Repeat.”
- Keywords: ritual, initiation, brotherhood, tribe, chaos, legend, OG, rookie, lit.

---

## 8. File Reference

- Full brandbook: `HOF_Brandbook_2025.pdf` (project root).

---

*Design system v1 · HOF · Mandala Group 2025©*
