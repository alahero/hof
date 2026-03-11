import { motion } from 'framer-motion';
import { SectionWrapper } from '../components/SectionWrapper';
import { CTAButton } from '../components/CTAButton';

/**
 * Experience section module — VIP, ritual, what HOF offers.
 * Edit copy and cards here without touching other sections.
 */
export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="hof-experience">
      <div className="hof-experience__inner">
        <h2 className="hof-section-title">Experience</h2>
        <p className="hof-section-subtitle">You&apos;re one of us now.</p>

        <div className="hof-experience__grid">
          <motion.div
            className="hof-card hof-card--vip"
            whileHover={{ scale: 1.02, filter: 'brightness(1.05)' }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="hof-card__badge hof-card__badge--gold">VIP</span>
            <h3 className="hof-card__title">The Ultimate Rush</h3>
            <p className="hof-card__text">
              Skip the line. Premium bottle service. Own the night.
            </p>
            <CTAButton>Upgrade experience</CTAButton>
          </motion.div>

          <motion.div
            className="hof-card"
            whileHover={{ scale: 1.02, filter: 'brightness(1.05)' }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h3 className="hof-card__title">Ritual. Brotherhood. Chaos.</h3>
            <p className="hof-card__text">
              One night. One tribe. Sweat. Glow. Repeat.
            </p>
            <CTAButton primary>Get in</CTAButton>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
