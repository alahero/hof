import { motion } from 'framer-motion';
import { SectionWrapper } from '../components/SectionWrapper';
import {
  HOF_EASE,
  sectionEntranceItemVariants,
  sectionEntranceItemFromBelowVariants,
  sectionEntranceNestedContainerVariants,
} from '../lib/hof-motion';

/**
 * Location section module — Dirección, mapa embebido y enlace a Maps.
 * Entrada según design system: título/subtítulo fade-in, luego tarjeta y mapa con stagger.
 */
const ADDRESS = {
  name: 'House of Fiesta',
  line1: 'Cancún, Quintana Roo',
  line2: 'México',
};

/** Enlace a Google Maps para HOF — House of Fiesta (Cancún). */
const MAP_LINK = 'https://maps.app.goo.gl/jKyz599J67jWD8bx6';

/** Ruta de Google Maps: cómo llegar (destino por nombre). */
const DIRECTIONS_LINK = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  'House of Fiesta, Cancún, Quintana Roo, México',
)}`;

/** Icono: abrir en ventana nueva (enlace externo). */
function IconOpenExternal({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

/** Icono: indicaciones / cómo llegar. */
function IconDirections({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  );
}

export function LocationSection() {
  return (
    <SectionWrapper id="location" className="hof-location" innerClassName="hof-location__inner">
      <motion.h2 className="hof-section-title" variants={sectionEntranceItemVariants}>
        Location
      </motion.h2>
      <motion.p className="hof-section-subtitle" variants={sectionEntranceItemVariants}>
        Find us. Rush the night.
      </motion.p>

      {/* Contenedor del mapa: tarjeta superpuesta arriba a la derecha + stagger mapa → tarjeta */}
      <motion.div className="hof-location__body" variants={sectionEntranceNestedContainerVariants}>
        <motion.div className="hof-location__map-wrap" variants={sectionEntranceNestedContainerVariants}>
          <motion.div
            className="hof-location__map-embed"
            variants={sectionEntranceItemFromBelowVariants}
            aria-label="Mapa: House of Fiesta, Cancún"
          >
            <iframe
              src="https://snazzymaps.com/embed/780686"
              width="100%"
              height="487px"
              style={{ border: 'none' }}
            />
          </motion.div>

          <motion.div
            className="hof-location__card"
            variants={sectionEntranceItemFromBelowVariants}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.25, ease: HOF_EASE }}
          >
            <div className="hof-location__card-inner">
              <div className="hof-location__address">
                <strong className="hof-location__name">{ADDRESS.name}</strong>
                <p className="hof-location__line">{ADDRESS.line1}</p>
                <p className="hof-location__line">{ADDRESS.line2}</p>
              </div>
              <div className="hof-location__card-actions" role="group" aria-label="Mapas e indicaciones">
                <a
                  href={MAP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hof-location__icon-btn"
                  aria-label="Open in Google Maps in a new tab"
                  title="Open in Maps"
                >
                  <IconOpenExternal />
                </a>
                <a
                  href={DIRECTIONS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hof-location__icon-btn"
                  aria-label="How to get there — directions in a new tab"
                  title="How to get there"
                >
                  <IconDirections />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
