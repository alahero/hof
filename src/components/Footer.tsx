import { motion } from 'framer-motion';

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      style={{
        padding: '2rem 1.5rem',
        background: 'var(--hof-neutral)',
        textAlign: 'center',
        borderTop: '1px solid var(--hof-surface-dark)',
      }}
    >
      <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--hof-surface)' }}>
        HOF · House of Fiesta · Cancún
      </p>
      <p style={{ margin: '0.25rem 0 0', fontSize: '0.8rem', color: 'var(--hof-surface-dark-2)' }}>
        Rush the night. Break the rules. Be HOF. © Mandala Group 2025
      </p>
    </motion.footer>
  );
}
