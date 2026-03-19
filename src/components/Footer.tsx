import { motion } from 'framer-motion';
import { HOF_LOGO_SVG_URL } from '../lib/hof-assets';
import { HOF_NAV_LINKS, MANDALA_TICKETS_FOOTER_LINKS } from '../lib/hof-nav-links';

export function Footer() {
  return (
    <motion.footer
      className="hof-footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="hof-footer__inner">
        <div className="hof-footer__col hof-footer__brand">
          <a href="#" className="hof-footer__logo" aria-label="HOF Home">
            <img
              src={HOF_LOGO_SVG_URL}
              alt=""
              className="hof-footer__logo-img"
              width={160}
              height={106}
              decoding="async"
            />
          </a>
          <p className="hof-footer__brand-line">House of Fiesta</p>
          <p className="hof-footer__desc">
            Cancún&apos;s high-energy nightlife experience — one tribe, peak rush, no limits. Part of Mandala Group.
          </p>
        </div>

        <div className="hof-footer__col">
          <h2 className="hof-footer__heading">Quick links</h2>
          <ul className="hof-footer__list">
            {HOF_NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hof-footer__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hof-footer__col">
          <h2 className="hof-footer__heading hof-footer__heading--domain">mandalatickets.com</h2>
          <ul className="hof-footer__list">
            {MANDALA_TICKETS_FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hof-footer__link hof-footer__link--external"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hof-footer__rule" aria-hidden="true" />

      <p className="hof-footer__legal">© {new Date().getFullYear()} Mandala Group · House of Fiesta</p>
    </motion.footer>
  );
}
