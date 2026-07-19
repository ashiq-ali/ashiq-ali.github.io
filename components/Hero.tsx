'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, FileText } from 'lucide-react';
import { personal, stats } from '@/lib/data';
import { Terminal, StatusBadge } from './Terminal';

export function Hero() {
  const [copied, setCopied] = useState(false);
  const commandText = `curl -fsSL ashiq.sh/contact | sh`;

  const copyCommand = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${personal.email}`;
    }
  };

  return (
    <section className="pt-8 pb-10">
      <Terminal title="ashiq.sh — portfolio" delay={0}>
        <div className="space-y-6">
          {/* Top status bar */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <StatusBadge color="green">● available for hire</StatusBadge>
            <StatusBadge color="cyan">{personal.location}</StatusBadge>
            <StatusBadge color="amber">9+ yrs exp</StatusBadge>
          </div>

          {/* Name and title */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight text-text-primary md:text-5xl"
            >
              {personal.name}
              <span className="cursor-blink ml-1 inline-block h-8 w-2 bg-green align-middle md:h-10 md:w-2.5" />
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-2 text-lg text-cyan"
            >
              {personal.title}
            </motion.p>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl text-sm leading-relaxed text-text-muted"
          >
            {personal.tagline}
          </motion.p>

          {/* Command CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <div className="flex items-center gap-2 rounded-md bg-surface-2 px-3 py-2 text-sm ring-1 ring-border">
              <span className="text-green">ashiq@portfolio:~$</span>
              <span className="text-text-primary">{commandText}</span>
            </div>
            <button
              onClick={copyCommand}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-green/10 px-3 py-2 text-sm font-medium text-green ring-1 ring-green/20 transition hover:bg-green/20"
            >
              {copied ? 'email copied!' : 'copy email'}
            </button>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 text-sm"
          >
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-text-muted transition hover:text-green"
            >
              <Github className="h-4 w-4" />
              github
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-text-muted transition hover:text-green"
            >
              <Linkedin className="h-4 w-4" />
              linkedin
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-1.5 text-text-muted transition hover:text-green"
            >
              <Mail className="h-4 w-4" />
              email
            </a>
            <a
              href={personal.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-text-muted transition hover:text-green"
            >
              <ExternalLink className="h-4 w-4" />
              demo
            </a>
            <a
              href="/resume.md"
              download
              className="inline-flex items-center gap-1.5 text-text-muted transition hover:text-green"
            >
              <FileText className="h-4 w-4" />
              resume
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 gap-3 border-t border-border pt-4 sm:grid-cols-5"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-xl font-bold text-green">{stat.value}</div>
                <div className="text-xs text-text-muted">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </Terminal>
    </section>
  );
}
