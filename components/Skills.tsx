'use client';

import { Cpu } from 'lucide-react';
import { skills } from '@/lib/data';
import { Section, Badge } from './Terminal';

export function Skills() {
  return (
    <Section id="skills" title="Skills" icon={<Cpu className="h-4 w-4" />} delay={0.2}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="rounded-xl border border-border bg-surface-2/50 p-4"
          >
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-text-muted">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <Badge key={item} color="muted">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
