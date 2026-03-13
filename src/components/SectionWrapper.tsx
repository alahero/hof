import { motion } from 'framer-motion';
import {
  sectionEntranceContainerVariants,
  SECTION_ENTRANCE_VIEWPORT,
} from '../lib/hof-motion';

type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** Clase opcional del contenedor de entrada (p. ej. hof-playlist__inner). */
  innerClassName?: string;
  /** Si es true, no aplica animación de entrada (p. ej. Hero). La sección solo aporta semántica. */
  noEntrance?: boolean;
};

/**
 * Envuelve secciones con la entrada HOF del design system: viewport-triggered, stagger.
 * Los hijos directos deben ser motion.* con variants de hof-motion (sectionEntranceItemVariants, etc.).
 * Hero no usa SectionWrapper con entrada; el resto de secciones sí.
 */
export function SectionWrapper({
  children,
  className,
  id,
  innerClassName,
  noEntrance,
}: SectionWrapperProps) {
  if (noEntrance) {
    return (
      <motion.section id={id} className={className}>
        {children}
      </motion.section>
    );
  }
  return (
    <motion.section id={id} className={className}>
      <motion.div
        className={innerClassName}
        initial="hidden"
        whileInView="visible"
        viewport={SECTION_ENTRANCE_VIEWPORT}
        variants={sectionEntranceContainerVariants}
      >
        {children}
      </motion.div>
    </motion.section>
  );
}
