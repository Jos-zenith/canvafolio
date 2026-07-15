import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface PageShellProps {
  children: ReactNode;
  className?: string;
}

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  intro: string;
  stats?: Array<{
    value: string;
    label: string;
  }>;
  actions?: ReactNode;
}

interface RevealSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  revealMode?: 'inView' | 'mount';
}

export function PageShell({ children, className = '' }: PageShellProps) {
  return (
    <div className={`max-w-7xl mx-auto px-4 lg:px-8 py-6 lg:py-8 ${className}`}>
      <div className="space-y-12 lg:space-y-16">{children}</div>
    </div>
  );
}

export function PageHeader({ eyebrow, title, intro, stats, actions }: PageHeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-end"
    >
      <div className="space-y-4">
        <div className="surface-subtle inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-violet-700 shadow-sm backdrop-blur-xl">
          {eyebrow}
        </div>
        <div className="space-y-3">
          <h1 className="text-3xl lg:text-5xl tracking-tight text-slate-900">{title}</h1>
          <p className="max-w-2xl text-sm lg:text-lg leading-relaxed text-slate-600">{intro}</p>
        </div>
        {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
      </div>

      {stats && stats.length > 0 ? (
        <div className="grid grid-cols-3 gap-3">
          {stats.map((item) => (
            <div key={item.label} className="surface-card rounded-[1.5rem] p-4 text-center">
              <div className="text-2xl lg:text-3xl font-semibold text-violet-700">{item.value}</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-500">{item.label}</div>
            </div>
          ))}
        </div>
      ) : null}
    </motion.header>
  );
}

export function RevealSection({ children, className = '', delay = 0, revealMode = 'inView' }: RevealSectionProps) {
  const motionProps =
    revealMode === 'mount'
      ? {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
        }
      : {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
        };

  return (
    <motion.section
      {...motionProps}
      transition={{ duration: 0.65, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
