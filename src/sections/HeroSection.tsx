import { motion } from 'framer-motion';
import { CTAButton } from '../components/CTAButton';
import { VerticalCutReveal } from '../components/ui/vertical-cut-reveal';

/** Hero background: imagen local en public/images (editar el archivo para cambiar). */
const HERO_IMAGE_PATH = '/images/hero-background.jpg';

/**
 * Hero section module — HOF homepage.
 * Edit copy, background, or CTA here without touching other sections.
 */
export function HeroSection() {
  return (
    <header
      className="hof-hero"
      aria-label="Hero"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.75) 45%, rgba(0,0,0,0.95) 100%), url(${HERO_IMAGE_PATH})`,
      }}
    >
      <div className="hof-hero__overlay" />
      <motion.div
        className="hof-hero__content"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <span className="hof-hero__label">House of Fiesta</span>
        <h1 className="hof-hero__title" aria-label="Rush the night. Break the rules. Be HOF.">
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
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.03}
            staggerFrom="first"
            transition={{ type: 'spring', stiffness: 200, damping: 21, delay: 0.5 }}
            containerClassName="hof-hero__title-line"
            elementLevelClassName="hof-hero__title-accent"
            autoStart
          >
            Be HOF.
          </VerticalCutReveal>
        </h1>
        <p className="hof-hero__subtitle">Cancún · One tribe</p>
        <div className="hof-hero__cta">
          <CTAButton primary>Get in</CTAButton>
        </div>
      </motion.div>
    </header>
  );
}
