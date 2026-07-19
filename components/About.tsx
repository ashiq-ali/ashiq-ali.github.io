'use client';

import { User } from 'lucide-react';
import { personal, education } from '@/lib/data';
import { Section, Badge } from './Terminal';

export function About() {
  return (
    <Section id="about" title="About" icon={<User className="h-4 w-4" />} delay={0.1}>
      <div className="space-y-5">
        <p className="max-w-3xl text-base leading-relaxed text-text-secondary">
          {personal.summary}
        </p>

        <div className="grid gap-4 rounded-xl border border-border bg-surface-2/50 p-4 sm:grid-cols-2">
          <div>
            <div className="mb-1 text-xs font-medium uppercase tracking-wide text-text-muted">Location</div>
            <div className="text-sm text-text-primary">{personal.location}</div>
          </div>
          <div>
            <div className="mb-1 text-xs font-medium uppercase tracking-wide text-text-muted">Email</div>
            <div className="text-sm text-text-primary">{personal.email}</div>
          </div>
          <div>
            <div className="mb-1 text-xs font-medium uppercase tracking-wide text-text-muted">Education</div>
            <div className="text-sm text-text-primary">{education.degree}</div>
          </div>
          <div>
            <div className="mb-1 text-xs font-medium uppercase tracking-wide text-text-muted">GPA</div>
            <div className="text-sm text-text-primary">{education.gpa}</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          <Badge color="accent">AI/ML Platform</Badge>
          <Badge color="success">Kubernetes</Badge>
          <Badge color="warning">SRE</Badge>
          <Badge color="muted">IaC</Badge>
          <Badge color="accent">Cloud</Badge>
        </div>
      </div>
    </Section>
  );
}
