'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface TerminalProps {
  children: ReactNode;
  title?: string;
  className?: string;
  delay?: number;
}

export function Terminal({ children, title, className = '', delay = 0 }: TerminalProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className={`w-full overflow-hidden rounded-lg border border-border bg-surface shadow-lg ${className}`}
    >
      <div className="flex items-center justify-between border-b border-border bg-surface-2 px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red" />
          <span className="h-3 w-3 rounded-full bg-amber" />
          <span className="h-3 w-3 rounded-full bg-green" />
        </div>
        {title && (
          <span className="text-xs text-text-muted font-medium">{title}</span>
        )}
        <div className="w-16" />
      </div>
      <div className="p-4 md:p-6">{children}</div>
    </motion.div>
  );
}

export function Prompt({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`flex items-start gap-2 font-mono text-sm ${className}`}>
      <span className="shrink-0 text-green">ashiq@portfolio:~$</span>
      <span className="text-text-primary">{children}</span>
    </div>
  );
}

export function CommandLine({ command, path = '~' }: { command: string; path?: string }) {
  return (
    <div className="mb-4 flex items-start gap-2 font-mono text-sm">
      <span className="shrink-0 text-green">
        ashiq@portfolio:<span className="text-cyan">{path}</span>$
      </span>
      <span className="text-text-primary">{command}</span>
    </div>
  );
}

export function Section({
  id,
  title,
  command,
  children,
  delay = 0,
}: {
  id: string;
  title?: string;
  command: string;
  children: ReactNode;
  delay?: number;
}) {
  return (
    <section id={id} className="scroll-mt-8 py-10">
      <Terminal title={title} delay={delay}>
        <CommandLine command={command} />
        <div className="mt-2">{children}</div>
      </Terminal>
    </section>
  );
}

export function StatusBadge({ children, color = 'green' }: { children: ReactNode; color?: 'green' | 'cyan' | 'amber' }) {
  const colorClass = {
    green: 'bg-green/10 text-green border-green/20',
    cyan: 'bg-cyan/10 text-cyan border-cyan/20',
    amber: 'bg-amber/10 text-amber border-amber/20',
  }[color];

  return (
    <span
      className={`inline-flex items-center rounded border px-2 py-0.5 text-xs font-medium ${colorClass}`}
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
      className="link-hover text-green transition-colors hover:text-green/80"
    >
      {children}
    </a>
  );
}
