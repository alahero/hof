import { motion } from 'framer-motion';
import { SectionWrapper } from '../components/SectionWrapper';
import { HOF_EASE, sectionEntranceItemVariants, sectionEntranceItemFromBelowVariants } from '../lib/hof-motion';

/**
 * Location section module — Address, map, how to get there.
 * Entrada según design system: título/subtítulo fade-in, luego tarjeta y placeholder con stagger.
 */
const ADDRESS = {
  name: 'House of Fiesta',
  line1: 'Cancún, Quintana Roo',
  line2: 'México',
};

const MAP_LINK = 'https://maps.google.com/?q=Cancun+Mexico';

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
        className="hof-location__map-placeholder"
        aria-hidden="true"
        variants={sectionEntranceItemFromBelowVariants}
      >
        <span className="hof-location__map-label">Cancún · HOF</span>
      </motion.div>
    </SectionWrapper>
  );
}
