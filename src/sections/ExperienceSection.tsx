import { motion } from 'framer-motion';
import { SectionWrapper } from '../components/SectionWrapper';
import {
  HOF_EASE,
  sectionEntranceItemVariants,
  sectionEntranceItemFromBelowVariants,
  sectionEntranceNestedContainerVariants,
} from '../lib/hof-motion';

/**
 * Experience section module — tres pilares de la experiencia HOF.
 * Tarjetas informativas (no clicables). Entrada según design system: título/subtítulo fade-in, luego tarjetas desde abajo con stagger.
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
    <SectionWrapper id="experience" className="hof-experience" innerClassName="hof-experience__inner">
      <motion.h2
        className="hof-section-title hof-experience__title"
        variants={sectionEntranceItemVariants}
      >
        You&apos;re one of us now.
      </motion.h2>
      <motion.p
        className="hof-section-subtitle"
        variants={sectionEntranceItemVariants}
      >
        EXPERIENCE THE BROTHERHOOD
      </motion.p>

      <motion.div
        className="hof-experience__grid"
        variants={sectionEntranceNestedContainerVariants}
      >
        {EXPERIENCE_CARDS.map((card) => (
          <motion.div
            key={card.title}
            className="hof-card"
            variants={sectionEntranceItemFromBelowVariants}
            whileHover={{ scale: 1.02, filter: 'brightness(1.05)' }}
            transition={{ duration: 0.25, ease: HOF_EASE }}
          >
            <h3 className="hof-card__title">{card.title}</h3>
            <p className="hof-card__text">{card.copy}</p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
