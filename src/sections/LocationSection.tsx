import { motion } from 'framer-motion';
import { SectionWrapper } from '../components/SectionWrapper';

/**
 * Location section module — Address, map, how to get there.
 * Edit address, map embed, or links here without touching other sections.
 */
const ADDRESS = {
  name: 'House of Fiesta',
  line1: 'Cancún, Quintana Roo',
  line2: 'México',
};

const MAP_LINK = 'https://maps.google.com/?q=Cancun+Mexico';

export function LocationSection() {
  return (
    <SectionWrapper id="location" className="hof-location">
      <div className="hof-location__inner">
        <h2 className="hof-section-title">Location</h2>
        <p className="hof-section-subtitle">Find us. Rush the night.</p>

        <motion.div
          className="hof-location__card"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
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

        <div className="hof-location__map-placeholder" aria-hidden="true">
          <span className="hof-location__map-label">Cancún · HOF</span>
        </div>
      </div>
    </SectionWrapper>
  );
}
