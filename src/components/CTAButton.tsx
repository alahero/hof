import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';

type CTAButtonProps = {
  primary?: boolean;
  children: React.ReactNode;
  /** Si se define, se renderiza como enlace (p. ej. nueva pestaña a MandalaTickets). */
  href?: string;
};

const motionInteraction = {
  whileHover: { scale: 1.03, filter: 'brightness(1.1)' } as const,
  whileTap: { scale: 0.98 } as const,
  transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

function ctaStyle(primary?: boolean): CSSProperties {
  return {
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
  };
}

export function CTAButton({ primary, children, href }: CTAButtonProps) {
  const style = ctaStyle(primary);

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...motionInteraction}
        style={{
          ...style,
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxSizing: 'border-box',
        }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      {...motionInteraction}
      style={style}
    >
      {children}
    </motion.button>
  );
}
