'use client';

import { FolderGit2, ExternalLink } from 'lucide-react';
import { projects } from '@/lib/data';
import { Section, Link, Badge } from './Terminal';

export function Projects() {
  return (
    <Section id="projects" title="Projects" icon={<FolderGit2 className="h-4 w-4" />} delay={0.5}>
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full min-w-[700px] text-left text-sm">
          <thead className="bg-surface-2/50 text-xs font-semibold uppercase tracking-wide text-text-muted">
            <tr>
              <th className="px-4 py-3">Repository</th>
              <th className="px-4 py-3">Stack</th>
              <th className="px-4 py-3">Link</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {projects.map((project) => (
              <tr key={project.repo} className="transition hover:bg-surface-2/30">
                <td className="px-4 py-3">
                  <div className="font-medium text-text-primary">{project.repo}</div>
                  <div className="text-xs text-text-muted">{project.description}</div>
                </td>
                <td className="px-4 py-3">
                  <span className="text-xs text-text-secondary">{project.stack}</span>
                </td>
                <td className="px-4 py-3">
                  <Link href={project.link}>
                    <span className="inline-flex items-center gap-1 text-xs">
                      github.com/ashiq-ali/{project.repo}
                      <ExternalLink className="h-3 w-3" />
                    </span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-sm text-text-muted">
        See all 57 repositories on{' '}
        <Link href="https://github.com/ashiq-ali">github.com/ashiq-ali</Link>
      </div>
    </Section>
  );
}
