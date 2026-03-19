import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { CTAButton } from './CTAButton';
import {
  NAV_ENTRANCE_DELAY,
  NAV_ENTRANCE_INNER_STAGGER,
  navEntranceItemVariants,
} from '../lib/hof-motion';
import { HOF_LOGO_SVG_URL } from '../lib/hof-assets';
import { HOF_MANDALA_TICKETS_URL, HOF_NAV_LINKS } from '../lib/hof-nav-links';

const MOBILE_NAV_DRAWER_ID = 'hof-header-nav-drawer';

const MotionLink = motion(Link);

const headerNavVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0,
    },
  },
};

/** Site header — logo, nav, primary CTA. Entrada tras el hero con stagger. */

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

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
        <MotionLink
          to="/"
          className="hof-header__logo"
          aria-label="HOF Home"
          variants={navEntranceItemVariants}
        >
          <img
            src={HOF_LOGO_SVG_URL}
            alt="HOF — House of Fiesta logo"
            className="hof-header__logo-img"
            width={120}
            height={79}
            decoding="async"
            fetchPriority="high"
          />
        </MotionLink>
        <motion.nav
          className="hof-header__nav hof-header__nav--desktop"
          aria-label="Main"
          variants={headerNavVariants}
        >
          {HOF_NAV_LINKS.map((link) => (
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
        <motion.div className="hof-header__end" variants={navEntranceItemVariants}>
          <div className="hof-header__cta">
            <CTAButton primary href={HOF_MANDALA_TICKETS_URL}>
              Get in
            </CTAButton>
          </div>
          <button
            type="button"
            className="hof-header__menu-toggle"
            aria-expanded={menuOpen}
            aria-controls={MOBILE_NAV_DRAWER_ID}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="hof-header__menu-icon" aria-hidden>
              <span />
              <span />
              <span />
            </span>
          </button>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {menuOpen ? (
          <>
            <motion.div
              key="hof-nav-backdrop"
              className="hof-header__drawer-backdrop"
              role="presentation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
            />
            <motion.nav
              key="hof-nav-drawer"
              id={MOBILE_NAV_DRAWER_ID}
              className="hof-header__drawer"
              aria-label="Main"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <button
                type="button"
                className="hof-header__drawer-close"
                aria-label="Cerrar menú"
                onClick={closeMenu}
              >
                ×
              </button>
              <ul className="hof-header__drawer-list">
                {HOF_NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="hof-header__drawer-link"
                      onClick={closeMenu}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
