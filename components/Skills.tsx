'use client';

import { skills } from '@/lib/data';
import { Section, StatusBadge } from './Terminal';

export function Skills() {
  return (
    <Section id="skills" command="cat skills.json" delay={0.2}>
      <div className="rounded-md border border-border bg-surface-2 p-4 font-mono text-sm">
        <div className="mb-3 text-xs text-text-muted">// skills grouped by domain</div>
        <div className="space-y-4">
          {Object.entries(skills).map(([category, items], idx) => (
            <div key={category}>
              <div className="mb-1.5 text-xs text-cyan">"{category.toLowerCase().replace(/\s+/g, '_')}":</div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <StatusBadge key={item} color={idx % 2 === 0 ? 'green' : 'cyan'}>
                    {item}
                  </StatusBadge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
