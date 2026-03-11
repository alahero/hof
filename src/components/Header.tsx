import { motion } from 'framer-motion';
import { CTAButton } from './CTAButton';

/**
 * Site header — logo, nav, primary CTA.
 * Edit nav links or logo here without touching sections.
 */
export function Header() {
  return (
    <motion.header
      className="hof-header"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="hof-header__inner">
        <a href="#" className="hof-header__logo" aria-label="HOF Home">
          HOF
        </a>
        <nav className="hof-header__nav" aria-label="Main">
          <a href="#experience" className="hof-header__link">Experience</a>
          <a href="#playlist" className="hof-header__link">Playlist</a>
          <a href="#location" className="hof-header__link">Location</a>
        </nav>
        <div className="hof-header__cta">
          <CTAButton primary>Get in</CTAButton>
        </div>
      </div>
    </motion.header>
  );
}
