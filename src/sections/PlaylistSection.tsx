import { motion } from 'framer-motion';
import { SectionWrapper } from '../components/SectionWrapper';

/**
 * Playlist section module — Tonight's vibe, featured tracks or sets.
 * Edit tracks, title, or layout here without touching other sections.
 */
const PLAYLIST_ITEMS = [
  { label: 'Spring Break Kickoff', meta: 'Guest DJ · Open bar til 12', tag: 'Tonight' },
  { label: 'Lit Fridays', meta: 'Resident DJ · Red cup specials', tag: 'Fri' },
  { label: 'Rookie Night', meta: 'Beer pong · Initiation vibes', tag: 'Hot' },
];

export function PlaylistSection() {
  return (
    <SectionWrapper id="playlist" className="hof-playlist">
      <div className="hof-playlist__inner">
        <h2 className="hof-section-title">Playlist</h2>
        <p className="hof-section-subtitle">Sweat. Glow. Repeat.</p>

        <ul className="hof-playlist__list">
          {PLAYLIST_ITEMS.map((item, i) => (
            <motion.li
              key={item.label}
              className="hof-playlist__item"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
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
        </ul>
      </div>
    </SectionWrapper>
  );
}
