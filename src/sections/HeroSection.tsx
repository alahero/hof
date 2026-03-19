import { motion } from 'framer-motion';
import { CTAButton } from '../components/CTAButton';
import { VerticalCutReveal } from '../components/ui/vertical-cut-reveal';
import { HOF_MANDALA_TICKETS_URL } from '../lib/hof-nav-links';
import { publicUrl } from '../lib/publicUrl';

/** Fondo del hero: JPEG optimizado en public/images (sustituir archivo si cambia el arte). */
const HERO_IMAGE_PATH = publicUrl('images/hero-background.jpg');

/** Cuando termina el contenido del hero (CTA: delay 1.05 + duration 0.4 ≈ 1.45s). La imagen escala 120% → 100% a partir de este delay. */
const HERO_BG_SCALE_DELAY = 1.5;

/**
 * Hero section module — HOF homepage.
 * Fondo: empieza a 120% scale; al terminar las animaciones del contenido, escala a 100%.
 */
export function HeroSection() {
  return (
    <header className="hof-hero" aria-label="Hero">
      <motion.div
        className="hof-hero__bg"
        aria-hidden="true"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.8,
          delay: HERO_BG_SCALE_DELAY,
          ease: 'easeInOut',
        }}
        style={{
          backgroundImage: `url(${HERO_IMAGE_PATH})`,
        }}
      />
      {/* Velado claro sobre la foto para unificar lectura del bloque tipográfico. */}
      <div className="hof-hero__light-filter" aria-hidden="true" />
      {/* Degradados suaves arriba/abajo hacia el color de página. */}
      <div className="hof-hero__edge-fade" aria-hidden="true" />
      <motion.div
        className="hof-hero__content"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.span
          className="hof-hero__label"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.75,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          House of Fiesta
        </motion.span>
        <h1 className="hof-hero__title" aria-label="Rush the night. Break the rules.">
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.03}
            staggerFrom="first"
            transition={{ type: 'spring', stiffness: 200, damping: 21 }}
            containerClassName="hof-hero__title-line"
            autoStart
          >
            Rush the night.
          </VerticalCutReveal>
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.03}
            staggerFrom="first"
            transition={{ type: 'spring', stiffness: 200, damping: 21, delay: 0.25 }}
            containerClassName="hof-hero__title-line"
            autoStart
          >
            Break the rules.
          </VerticalCutReveal>
        </h1>
        <motion.p
          className="hof-hero__subtitle"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.9,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Cancún · One tribe
        </motion.p>
        <motion.div
          className="hof-hero__cta"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 1.05,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <CTAButton primary href={HOF_MANDALA_TICKETS_URL}>
            Get in
          </CTAButton>
        </motion.div>
      </motion.div>
    </header>
  );
}
