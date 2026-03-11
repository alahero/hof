import { motion } from 'framer-motion';

type CardProps = {
  children: React.ReactNode;
  badge?: string;
  badgeColor?: 'red' | 'gold';
};

export function Card({ children, badge, badgeColor = 'gold' }: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, filter: 'brightness(1.05)' }}
      transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        background: 'var(--hof-surface-dark-2)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: '8px',
        padding: '1.5rem',
        textAlign: 'center',
        position: 'relative',
        boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
      }}
    >
      {badge && (
        <span
          style={{
            position: 'absolute',
            top: '-0.5rem',
            right: '1rem',
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            fontWeight: 600,
            padding: '0.25rem 0.5rem',
            borderRadius: '4px',
            background: badgeColor === 'red' ? 'var(--hof-primary)' : 'var(--hof-secondary)',
            color: '#000',
          }}
        >
          {badge}
        </span>
      )}
      <p style={{ margin: 0, color: 'var(--hof-surface)', lineHeight: 1.5 }}>{children}</p>
    </motion.div>
  );
}
