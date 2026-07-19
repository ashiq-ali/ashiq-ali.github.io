'use client';

import { personal, education } from '@/lib/data';
import { Section, StatusBadge } from './Terminal';

export function About() {
  return (
    <Section id="about" command="cat about.md" delay={0.1}>
      <div className="space-y-4">
        <p className="max-w-3xl text-sm leading-relaxed text-text-primary">
          {personal.summary}
        </p>

        <div className="grid gap-4 rounded-md border border-border bg-surface-2 p-4 sm:grid-cols-2">
          <div>
            <div className="mb-1 text-xs text-text-muted">location</div>
            <div className="text-sm text-text-primary">{personal.location}</div>
          </div>
          <div>
            <div className="mb-1 text-xs text-text-muted">email</div>
            <div className="text-sm text-text-primary">{personal.email}</div>
          </div>
          <div>
            <div className="mb-1 text-xs text-text-muted">education</div>
            <div className="text-sm text-text-primary">{education.degree}</div>
          </div>
          <div>
            <div className="mb-1 text-xs text-text-muted">gpa</div>
            <div className="text-sm text-text-primary">{education.gpa}</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          <StatusBadge color="green">AI/ML Platform</StatusBadge>
          <StatusBadge color="cyan">Kubernetes</StatusBadge>
          <StatusBadge color="amber">SRE</StatusBadge>
          <StatusBadge color="green">IaC</StatusBadge>
          <StatusBadge color="cyan">Cloud</StatusBadge>
        </div>
      </div>
    </Section>
  );
}
