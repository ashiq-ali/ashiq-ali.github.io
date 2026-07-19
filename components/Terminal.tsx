'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Card({ children, className = '', delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className={`w-full overflow-hidden rounded-xl border border-border bg-surface/80 backdrop-blur-sm shadow-sm ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function Section({
  id,
  title,
  children,
  delay = 0,
  icon,
}: {
  id: string;
  title: string;
  children: ReactNode;
  delay?: number;
  icon?: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-8 py-12">
      <Card delay={delay}>
        <div className="border-b border-border bg-surface-2/50 px-5 py-3 sm:px-6">
          <h2 className="flex items-center gap-2 text-sm font-semibold tracking-wide text-text-secondary uppercase">
            {icon && <span className="text-accent">{icon}</span>}
            {title}
          </h2>
        </div>
        <div className="p-5 sm:p-6">{children}</div>
      </Card>
    </section>
  );
}

export function Badge({ children, color = 'accent' }: { children: ReactNode; color?: 'accent' | 'success' | 'warning' | 'muted' }) {
  const colorClass = {
    accent: 'bg-accent/10 text-accent-light border-accent/20',
    success: 'bg-success/10 text-success border-success/20',
    warning: 'bg-warning/10 text-warning border-warning/20',
    muted: 'bg-surface-3 text-text-secondary border-border',
  }[color];

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${colorClass}`}
    >
      {children}
    </span>
  );
}

export function Link({ href, children, external = true }: { href: string; children: ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="link-hover text-accent-light transition-colors hover:text-accent"
    >
      {children}
    </a>
  );
}
