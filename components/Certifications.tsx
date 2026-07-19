'use client';

import { Award } from 'lucide-react';
import { certifications } from '@/lib/data';
import { Section } from './Terminal';

export function Certifications() {
  return (
    <Section id="certifications" title="Certifications" icon={<Award className="h-4 w-4" />} delay={0.3}>
      <div className="overflow-hidden rounded-xl border border-border">
        <table className="w-full text-left text-sm">
          <thead className="bg-surface-2/50 text-xs font-semibold uppercase tracking-wide text-text-muted">
            <tr>
              <th className="px-4 py-3">Certification</th>
              <th className="px-4 py-3">Issuer</th>
              <th className="px-4 py-3">Year</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {certifications.map((cert) => (
              <tr key={cert.name} className="transition hover:bg-surface-2/30">
                <td className="px-4 py-3 text-text-primary">{cert.name}</td>
                <td className="px-4 py-3 text-text-secondary">{cert.org}</td>
                <td className="px-4 py-3 text-accent-light">{cert.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
