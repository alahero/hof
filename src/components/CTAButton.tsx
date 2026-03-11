import { motion } from 'framer-motion';

type CTAButtonProps = {
  primary?: boolean;
  children: React.ReactNode;
};

export function CTAButton({ primary, children }: CTAButtonProps) {
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.03, filter: 'brightness(1.1)' }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: '1rem',
        padding: '0.875rem 1.75rem',
        border: primary ? 'none' : '2px solid var(--hof-primary)',
        borderRadius: '4px',
        background: primary ? 'var(--hof-primary)' : 'transparent',
        color: '#fff',
        cursor: 'pointer',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
      }}
    >
      {children}
    </motion.button>
  );
}
