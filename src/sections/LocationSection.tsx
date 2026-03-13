import { motion } from 'framer-motion';
import { SectionWrapper } from '../components/SectionWrapper';
import { HOF_EASE, sectionEntranceItemVariants, sectionEntranceItemFromBelowVariants } from '../lib/hof-motion';

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

/** URL del iframe de Google Maps (Compartir > Insertar mapa) para HOF — House of Fiesta. */
const MAP_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.476655446517!2d-86.75139921154897!3d21.1334210303718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c29c8e022f8cf%3A0x317e02417e298b81!2sHOF%20-%20House%20of%20Fiesta!5e0!3m2!1sen!2smx!4v1773445292516!5m2!1sen!2smx';

export function LocationSection() {
  return (
    <SectionWrapper id="location" className="hof-location" innerClassName="hof-location__inner">
      <motion.h2 className="hof-section-title" variants={sectionEntranceItemVariants}>
        Location
      </motion.h2>
      <motion.p className="hof-section-subtitle" variants={sectionEntranceItemVariants}>
        Find us. Rush the night.
      </motion.p>

      <motion.div
        className="hof-location__card"
        variants={sectionEntranceItemFromBelowVariants}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.25, ease: HOF_EASE }}
      >
        <div className="hof-location__address">
          <strong className="hof-location__name">{ADDRESS.name}</strong>
          <p className="hof-location__line">{ADDRESS.line1}</p>
          <p className="hof-location__line">{ADDRESS.line2}</p>
        </div>
        <a
          href={MAP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hof-location__link"
        >
          Open in Maps
        </a>
      </motion.div>

      <motion.div
        className="hof-location__map-embed"
        variants={sectionEntranceItemFromBelowVariants}
        aria-label="Mapa: House of Fiesta, Cancún"
      >
        <iframe
          src={MAP_EMBED_SRC}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="HOF — Ubicación en Cancún"
        />
      </motion.div>
    </SectionWrapper>
  );
}
