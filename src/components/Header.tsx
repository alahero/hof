import { motion } from 'framer-motion';
import { CTAButton } from './CTAButton';
import {
  NAV_ENTRANCE_DELAY,
  NAV_ENTRANCE_INNER_STAGGER,
  navEntranceItemVariants,
} from '../lib/hof-motion';

const headerNavVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0,
    },
  },
};

/**
 * Site header — logo, nav, primary CTA.
 * Entrada: tras el hero (delay 1.5s), fondo hace fade-in y elementos entran desde arriba con stagger.
 */
const HEADER_LINKS = [
  { href: '#experience', label: 'Experience' },
  { href: '#playlist', label: 'Playlist' },
  { href: '#location', label: 'Location' },
] as const;

export function Header() {
  return (
    <header className="hof-header">
      {/* Fondo: fade 0% → 100% opacidad; arranca tras NAV_ENTRANCE_DELAY (todo el hero ya cargado). */}
      <motion.div
        className="hof-header__bg"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: NAV_ENTRANCE_DELAY,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      />
      <motion.div
        className="hof-header__inner"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: NAV_ENTRANCE_INNER_STAGGER,
              delayChildren: 0,
            },
          },
        }}
        transition={{ delay: NAV_ENTRANCE_DELAY }}
      >
        <motion.a
          href="#"
          className="hof-header__logo"
          aria-label="HOF Home"
          variants={navEntranceItemVariants}
        >
          HOF
        </motion.a>
        <motion.nav
          className="hof-header__nav"
          aria-label="Main"
          variants={headerNavVariants}
        >
          {HEADER_LINKS.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="hof-header__link"
              variants={navEntranceItemVariants}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.nav>
        <motion.div
          className="hof-header__cta"
          variants={navEntranceItemVariants}
        >
          <CTAButton primary>Get in</CTAButton>
        </motion.div>
      </motion.div>
    </header>
  );
}
