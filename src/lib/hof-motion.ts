/**
 * HOF Design System — motion tokens and section entrance variants.
 * Usar en todas las secciones (excepto Hero) para entrada consistente: viewport-triggered, título/subtítulo fade-in, luego contenido con stagger.
 * @see design-system/HOF-Design-System.md § Section entrance
 */

/** Easing premium (cubic-bezier) para entradas y micro-interacciones. */
export const HOF_EASE = [0.25, 0.46, 0.45, 0.94] as const;

/** Delay entre elementos en la entrada de sección (segundos). */
export const SECTION_ENTRANCE_STAGGER = 0.2;

/** Viewport para disparar la animación de entrada (once, margen negativo para trigger un poco antes). */
export const SECTION_ENTRANCE_VIEWPORT = {
  once: true,
  margin: '-50px',
} as const;

/** Variantes del contenedor de entrada: dispara stagger en hijos. */
export const sectionEntranceContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: SECTION_ENTRANCE_STAGGER,
      delayChildren: 0,
    },
  },
} as const;

/** Variantes para ítems que solo hacen fade-in (título, subtítulo). */
export const sectionEntranceItemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: HOF_EASE },
  },
} as const;

/** Variantes para ítems que entran desde abajo (fade + translateY). Tarjetas, listas, etc. */
export const sectionEntranceItemFromBelowVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: HOF_EASE },
  },
} as const;

/** Contenedor anidado para grids/listas: stagger entre sus hijos (p. ej. tarjetas). */
export const sectionEntranceNestedContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: SECTION_ENTRANCE_STAGGER,
      delayChildren: 0,
    },
  },
} as const;

/* ---------- Nav / Header entrance (después del Hero) ---------- */

/** Delay antes de que empiece la entrada del header (hero: CTA termina ~1.45s; dejar margen para que todo el hero haya cargado). */
export const NAV_ENTRANCE_DELAY = 1.8;

/** Stagger entre logo, bloque nav (links) y CTA del header. */
export const NAV_ENTRANCE_STAGGER = 0.12;
/** Stagger del inner del header (logo → nav → cta) para que cta entre después del último link. */
export const NAV_ENTRANCE_INNER_STAGGER = 0.24;

/** Variantes para elementos del header: entran desde arriba (slide from top). */
export const navEntranceItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: HOF_EASE },
  },
} as const;

/** Contenedor del header: stagger entre logo, nav links y CTA. */
export const navEntranceContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: NAV_ENTRANCE_STAGGER,
      delayChildren: 0,
    },
  },
} as const;
