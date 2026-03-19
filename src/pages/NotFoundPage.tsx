import { Link } from 'react-router-dom';
import { HOF_LOGO_SVG_URL } from '../lib/hof-assets';
import { HOF_NAV_LINKS } from '../lib/hof-nav-links';

/**
 * Página 404 — enlace a inicio y anclas de sección para recuperar navegación.
 */
export default function NotFoundPage() {
  return (
    <div className="hof-theme-light hof-not-found">
      <header className="hof-not-found__header">
        <Link to="/" className="hof-not-found__logo-link" aria-label="HOF — inicio">
          <img
            src={HOF_LOGO_SVG_URL}
            alt="Logo HOF — House of Fiesta"
            className="hof-not-found__logo"
            width={140}
            height={93}
            decoding="async"
          />
        </Link>
      </header>
      <main className="hof-not-found__main">
        <h1 className="hof-not-found__title">Page not found</h1>
        <p className="hof-not-found__text">
          The page you’re looking for doesn’t exist or was moved. Head back home or jump to a section.
        </p>
        <div className="hof-not-found__actions">
          <Link to="/" className="hof-not-found__cta">
            Back to home
          </Link>
          <nav className="hof-not-found__nav" aria-label="Sections">
            <ul className="hof-not-found__list">
              {HOF_NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={{ pathname: '/', hash: link.href.replace(/^#/, '') }}
                    className="hof-not-found__section-link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </main>
    </div>
  );
}
