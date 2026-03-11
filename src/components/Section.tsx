import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

type SectionProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  dark?: boolean;
};

export function Section({ title, subtitle, children, dark }: SectionProps) {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      style={{
        padding: '4rem 1.5rem',
        background: dark ? 'var(--hof-surface-dark)' : 'transparent',
      }}
    >
      <div style={{ maxWidth: '64rem', margin: '0 auto', textAlign: 'center' }}>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 600,
            color: '#fff',
            margin: 0,
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'var(--hof-secondary)',
              marginTop: '0.5rem',
              marginBottom: '2rem',
            }}
          >
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </motion.section>
  );
}
