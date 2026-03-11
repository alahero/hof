import { motion } from 'framer-motion';

export function Hero() {
  return (
    <motion.header
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem 1.5rem',
        background: 'linear-gradient(180deg, #0A0A0A 0%, #000 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        style={{ marginBottom: '0.5rem' }}
      >
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
            letterSpacing: '0.4em',
            color: 'var(--hof-secondary)',
            textTransform: 'uppercase',
          }}
        >
          House of Fiesta
        </span>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(3rem, 12vw, 6rem)',
          fontWeight: 700,
          color: '#fff',
          margin: 0,
          letterSpacing: '-0.02em',
          lineHeight: 1,
        }}
      >
        HOF
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.4 }}
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
          color: 'var(--hof-surface)',
          marginTop: '1rem',
          maxWidth: '22ch',
        }}
      >
        Rush the night. Break the rules. Be HOF.
      </motion.p>
    </motion.header>
  );
}
