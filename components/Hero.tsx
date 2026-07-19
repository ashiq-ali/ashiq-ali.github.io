'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, FileText, MapPin } from 'lucide-react';
import { personal, stats } from '@/lib/data';
import { Badge } from './Terminal';

export function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${personal.email}`;
    }
  };

  return (
    <section className="pt-12 pb-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full overflow-hidden rounded-2xl border border-border bg-surface/80 p-6 shadow-sm backdrop-blur-sm sm:p-8"
      >
        <div className="space-y-6">
          {/* Top badges */}
          <div className="flex flex-wrap items-center gap-2">
            <Badge color="success">Open to AI infrastructure roles</Badge>
            <Badge color="muted">
              <MapPin className="mr-1 h-3 w-3" />
              {personal.location}
            </Badge>
          </div>

          {/* Name and title */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl md:text-6xl">
              {personal.name}
            </h1>
            <p className="mt-2 text-lg font-medium text-accent-light sm:text-xl">
              {personal.title}
            </p>
          </div>

          {/* Tagline */}
          <p className="max-w-2xl text-base leading-relaxed text-text-secondary">
            {personal.tagline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              onClick={copyEmail}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-white transition hover:bg-accent-light"
            >
              <Mail className="h-4 w-4" />
              {copied ? 'Email copied!' : 'Copy email'}
            </button>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface-2 px-4 py-2.5 text-sm font-medium text-text-primary transition hover:bg-surface-3"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface-2 px-4 py-2.5 text-sm font-medium text-text-primary transition hover:bg-surface-3"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
            <a
              href={personal.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-accent-light"
            >
              <ExternalLink className="h-4 w-4" />
              Live demo
            </a>
            <a
              href="/resume.md"
              download
              className="inline-flex items-center gap-1.5 transition hover:text-accent-light"
            >
              <FileText className="h-4 w-4" />
              Download resume
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 border-t border-border pt-6 sm:grid-cols-5">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-2xl font-bold text-accent-light">{stat.value}</div>
                <div className="text-xs text-text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
