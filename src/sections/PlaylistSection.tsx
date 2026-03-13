import { motion } from 'framer-motion';
import { SectionWrapper } from '../components/SectionWrapper';
import {
  sectionEntranceItemVariants,
  sectionEntranceItemFromBelowVariants,
  sectionEntranceNestedContainerVariants,
} from '../lib/hof-motion';

/**
 * Playlist section module — Tonight's vibe, featured tracks or sets.
 * Entrada según design system: título/subtítulo fade-in, luego ítems de lista con stagger.
 */
const PLAYLIST_ITEMS = [
  { label: 'Spring Break Kickoff', meta: 'Guest DJ · Open bar til 12', tag: 'Tonight' },
  { label: 'Lit Fridays', meta: 'Resident DJ · Red cup specials', tag: 'Fri' },
  { label: 'Rookie Night', meta: 'Beer pong · Initiation vibes', tag: 'Hot' },
];

export function PlaylistSection() {
  return (
    <SectionWrapper id="playlist" className="hof-playlist" innerClassName="hof-playlist__inner">
      <motion.h2 className="hof-section-title" variants={sectionEntranceItemVariants}>
        Playlist
      </motion.h2>
      <motion.p className="hof-section-subtitle" variants={sectionEntranceItemVariants}>
        Sweat. Glow. Repeat.
      </motion.p>

      <motion.ul
        className="hof-playlist__list"
        variants={sectionEntranceNestedContainerVariants}
      >
        {PLAYLIST_ITEMS.map((item) => (
          <motion.li
            key={item.label}
            className="hof-playlist__item"
            variants={sectionEntranceItemFromBelowVariants}
          >
            <span
              className={`hof-playlist__tag ${item.tag === 'Hot' ? 'hof-playlist__tag--red' : ''}`}
            >
              {item.tag}
            </span>
            <div className="hof-playlist__item-content">
              <h3 className="hof-playlist__item-title">{item.label}</h3>
              <p className="hof-playlist__item-meta">{item.meta}</p>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </SectionWrapper>
  );
}
