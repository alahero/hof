import { motion } from 'framer-motion';
import { SectionWrapper } from '../components/SectionWrapper';

/**
 * Experience section module — tres pilares de la experiencia HOF.
 * Tarjetas informativas (no clicables). Copy alineado al tone of voice: bold, tribal, frases cortas.
 */
const EXPERIENCE_CARDS = [
  {
    title: 'The Ultimate Rush',
    copy: 'Peak energy. No limits. When the beat drops, you own it. This is the rush you came for.',
  },
  {
    title: 'One night. One Tribe',
    copy: 'Same night. Same crew. Strangers become brothers before last call. One tribe, one legend.',
  },
  {
    title: 'Sweat. Glow. Repeat.',
    copy: 'Dance. Sweat. Glow under the lights. Then do it again. That\'s the ritual.',
  },
] as const;

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="hof-experience">
      <div className="hof-experience__inner">
        <h2 className="hof-section-title hof-experience__title">You&apos;re one of us now.</h2>
        <p className="hof-section-subtitle">EXPERIENCE THE BROTHERHOOD</p>

        <div className="hof-experience__grid">
          {EXPERIENCE_CARDS.map((card) => (
            <motion.div
              key={card.title}
              className="hof-card"
              whileHover={{ scale: 1.02, filter: 'brightness(1.05)' }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h3 className="hof-card__title">{card.title}</h3>
              <p className="hof-card__text">{card.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
