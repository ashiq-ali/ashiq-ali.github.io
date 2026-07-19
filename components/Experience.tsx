'use client';

import { Briefcase } from 'lucide-react';
import { experience } from '@/lib/data';
import { Section, Badge } from './Terminal';

export function Experience() {
  return (
    <Section id="experience" title="Experience" icon={<Briefcase className="h-4 w-4" />} delay={0.4}>
      <div className="space-y-6">
        {experience.map((job, idx) => (
          <div
            key={`${job.company}-${idx}`}
            className="rounded-xl border border-border bg-surface-2/30 p-5 transition hover:bg-surface-2/50"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="text-base font-semibold text-text-primary">
                  {job.title}
                </div>
                <div className="text-sm text-accent-light">{job.company}</div>
                <div className="text-xs text-text-muted">{job.dates}</div>
              </div>
              <Badge color={idx === 0 ? 'success' : 'muted'}>
                {idx === 0 ? 'Current' : 'Past'}
              </Badge>
            </div>
            <ul className="mt-4 space-y-2">
              {job.highlights.map((highlight, hIdx) => (
                <li key={hIdx} className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
