'use client';

import { experience } from '@/lib/data';
import { Section, StatusBadge } from './Terminal';

export function Experience() {
  return (
    <Section id="experience" command="history | tail -n 5" delay={0.4}>
      <div className="space-y-6">
        {experience.map((job, idx) => (
          <div
            key={`${job.company}-${idx}`}
            className="rounded-md border border-border bg-surface-2 p-4"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold text-text-primary">
                  {job.title} <span className="text-text-muted">@</span>{' '}
                  <span className="text-cyan">{job.company}</span>
                </div>
                <div className="text-xs text-text-muted">{job.dates}</div>
              </div>
              <StatusBadge color={idx === 0 ? 'green' : 'amber'}>
                {idx === 0 ? 'current' : 'past'}
              </StatusBadge>
            </div>
            <ul className="mt-3 space-y-2">
              {job.highlights.map((highlight, hIdx) => (
                <li key={hIdx} className="flex items-start gap-2 text-sm text-text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green" />
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
