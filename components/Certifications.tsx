'use client';

import { certifications } from '@/lib/data';
import { Section } from './Terminal';
import { Award } from 'lucide-react';

export function Certifications() {
  return (
    <Section id="certifications" command="ls certifications/" delay={0.3}>
      <div className="overflow-hidden rounded-md border border-border">
        <table className="w-full text-left text-sm">
          <thead className="bg-surface-2 text-xs text-text-muted">
            <tr>
              <th className="px-4 py-2 font-medium">status</th>
              <th className="px-4 py-2 font-medium">certification</th>
              <th className="px-4 py-2 font-medium">issuer</th>
              <th className="px-4 py-2 font-medium">year</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {certifications.map((cert) => (
              <tr key={cert.name} className="transition hover:bg-surface-2/50">
                <td className="px-4 py-3">
                  <Award className="h-4 w-4 text-green" />
                </td>
                <td className="px-4 py-3 text-text-primary">{cert.name}</td>
                <td className="px-4 py-3 text-text-muted">{cert.org}</td>
                <td className="px-4 py-3 text-cyan">{cert.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
