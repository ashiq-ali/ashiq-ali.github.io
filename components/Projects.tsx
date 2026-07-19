'use client';

import { projects } from '@/lib/data';
import { Section, Link } from './Terminal';
import { ExternalLink } from 'lucide-react';

export function Projects() {
  return (
    <Section id="projects" command="kubectl get repos --all-namespaces -o wide" delay={0.5}>
      <div className="overflow-x-auto rounded-md border border-border">
        <table className="w-full min-w-[700px] text-left text-xs md:text-sm">
          <thead className="bg-surface-2 text-xs text-text-muted">
            <tr>
              <th className="px-3 py-2 font-medium md:px-4">NAMESPACE</th>
              <th className="px-3 py-2 font-medium md:px-4">REPO</th>
              <th className="px-3 py-2 font-medium md:px-4">STACK</th>
              <th className="px-3 py-2 font-medium md:px-4">LINK</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {projects.map((project) => (
              <tr key={project.repo} className="transition hover:bg-surface-2/50">
                <td className="px-3 py-3 text-cyan md:px-4">{project.namespace}</td>
                <td className="px-3 py-3 text-text-primary md:px-4">{project.repo}</td>
                <td className="px-3 py-3 text-text-muted md:px-4">{project.stack}</td>
                <td className="px-3 py-3 md:px-4">
                  <Link href={project.link}>
                    <span className="inline-flex items-center gap-1">
                      → github.com/ashiq-ali/{project.repo}
                      <ExternalLink className="h-3 w-3" />
                    </span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-xs text-text-muted">
        <span className="text-green">$</span> see all 57 repositories at{' '}
        <Link href="https://github.com/ashiq-ali">github.com/ashiq-ali</Link>
      </div>
    </Section>
  );
}
