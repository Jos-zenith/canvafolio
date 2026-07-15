import type { AnchorHTMLAttributes, ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import { motion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';

type ElevationTier = 'sm' | 'md' | 'lg';
type PaddingTier = 'none' | 'sm' | 'md' | 'lg';
type BorderStyle = 'solid' | 'dashed' | 'none';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  elevation?: ElevationTier;
  padding?: PaddingTier;
  borderStyle?: BorderStyle;
  interactive?: boolean;
  revealMode?: 'inView' | 'mount';
  delay?: number;
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  accentClassName?: string;
}

interface StatChipProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

interface GhostButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

interface TagPillProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href?: string;
}

const elevationClasses: Record<ElevationTier, string> = {
  sm: 'shadow-[0_12px_30px_rgba(34,18,58,0.06)]',
  md: 'shadow-[0_18px_44px_rgba(34,18,58,0.08)]',
  lg: 'shadow-[0_28px_70px_rgba(34,18,58,0.12)]',
};

const paddingClasses: Record<PaddingTier, string> = {
  none: 'p-0',
  sm: 'p-4',
  md: 'p-6 lg:p-7',
  lg: 'p-8 lg:p-10',
};

const borderClasses: Record<BorderStyle, string> = {
  solid: 'border border-white/70',
  dashed: 'border border-dashed border-violet-200/70',
  none: 'border border-transparent',
};

export function GlassCard({
  children,
  className = '',
  elevation = 'md',
  padding = 'md',
  borderStyle = 'solid',
  interactive = false,
  revealMode = 'inView',
  delay = 0,
  ...props
}: GlassCardProps) {
  const motionProps =
    revealMode === 'mount'
      ? {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
        }
      : {
          initial: { opacity: 0, y: 22 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
        };

  return (
    <motion.div
      {...motionProps}
      whileHover={interactive ? { scale: 1.03 } : undefined}
      whileTap={interactive ? { scale: 0.98 } : undefined}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className={`rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,252,247,0.96),rgba(247,240,231,0.90))] backdrop-blur-xl ${elevationClasses[elevation]} ${paddingClasses[padding]} ${borderClasses[borderStyle]} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({ eyebrow, title, subtitle, accentClassName = 'from-violet-500 via-fuchsia-500 to-rose-500' }: SectionHeaderProps) {
  return (
    <div className="space-y-4">
      {eyebrow ? (
        <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-violet-700 shadow-sm backdrop-blur-xl">
          {eyebrow}
        </div>
      ) : null}
      <div className="space-y-3">
        <h2 className="text-2xl lg:text-4xl tracking-tight text-slate-900">{title}</h2>
        {subtitle ? <p className="max-w-2xl text-sm lg:text-base leading-relaxed text-slate-600">{subtitle}</p> : null}
      </div>
      <div className={`h-1.5 w-20 rounded-full bg-gradient-to-r ${accentClassName}`} />
    </div>
  );
}

export function StatChip({ icon: Icon, value, label }: StatChipProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="rounded-[1.5rem] border border-white/70 bg-white/80 px-4 py-4 text-center shadow-[0_14px_32px_rgba(34,18,58,0.06)] backdrop-blur-xl"
    >
      <Icon className="mx-auto h-5 w-5 text-violet-600" />
      <div className="mt-2 text-2xl font-semibold text-slate-900">{value}</div>
      <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-500">{label}</div>
    </motion.div>
  );
}

const buttonMotion = {
  whileHover: { scale: 1.04 },
  whileTap: { scale: 0.98 },
};

export function GradientButton({ children, className = '', type = 'button', ...props }: GradientButtonProps) {
  return (
    <motion.button
      type={type}
      whileHover={buttonMotion.whileHover}
      whileTap={buttonMotion.whileTap}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 px-6 py-3 font-medium text-white shadow-[0_18px_50px_rgba(217,70,239,0.22)] transition-shadow hover:shadow-[0_24px_60px_rgba(217,70,239,0.28)] ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export function GhostButton({ children, className = '', type = 'button', ...props }: GhostButtonProps) {
  return (
    <motion.button
      type={type}
      whileHover={buttonMotion.whileHover}
      whileTap={buttonMotion.whileTap}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-white/70 bg-white/80 px-6 py-3 font-medium text-slate-700 shadow-[0_12px_30px_rgba(34,18,58,0.06)] backdrop-blur-xl transition-colors hover:border-violet-100 hover:bg-violet-50/70 hover:text-violet-700 ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export function TagPill({ children, href, className = '', ...props }: TagPillProps) {
  const baseClassName = `inline-flex items-center gap-1.5 rounded-full border border-sand-100 bg-white/85 px-3 py-1.5 text-xs text-slate-600 shadow-sm transition-all hover:scale-105 hover:border-violet-100 hover:bg-violet-50/70 hover:text-violet-700 ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className={baseClassName}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={baseClassName}
      {...props}
    >
      {children}
    </motion.span>
  );
}