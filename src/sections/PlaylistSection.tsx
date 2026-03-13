import { motion } from 'framer-motion';
import { SectionWrapper } from '../components/SectionWrapper';
import { sectionEntranceItemVariants } from '../lib/hof-motion';

/**
 * Playlist section module — Anthems y vibe de la tribu.
 * Título/subtítulo en tono de voz HOF; embed de Spotify como contenido principal.
 */
const SPOTIFY_EMBED_SRC =
  'https://open.spotify.com/embed/playlist/5CtW0UBKTZ0TTN4bF6hTUL?utm_source=generator&theme=0';

export function PlaylistSection() {
  return (
    <SectionWrapper id="playlist" className="hof-playlist" innerClassName="hof-playlist__inner">
      <motion.h2 className="hof-section-title" variants={sectionEntranceItemVariants}>
        Anthems
      </motion.h2>
      <motion.p className="hof-section-subtitle" variants={sectionEntranceItemVariants}>
        Sing Along the Tribe
      </motion.p>

      <motion.div
        className="hof-playlist__embed"
        variants={sectionEntranceItemVariants}
      >
        <iframe
          title="HOF Anthems — Spotify Playlist"
          src={SPOTIFY_EMBED_SRC}
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          style={{ borderRadius: '12px' }}
        />
      </motion.div>
    </SectionWrapper>
  );
}
