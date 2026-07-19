'use client';

import { personal } from '@/lib/data';
import { Section, Link } from './Terminal';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export function Contact() {
  const contacts = [
    { icon: Linkedin, label: 'linkedin', value: 'linkedin.com/in/ashiq-ali-268a5599', href: personal.linkedin },
    { icon: Mail, label: 'email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: Github, label: 'github', value: 'github.com/ashiq-ali', href: personal.github },
    { icon: ExternalLink, label: 'demo', value: 'k8s-infra-agent.netlify.app', href: personal.demo },
  ];

  return (
    <Section id="contact" command="kubectl exec -it ashiq-ali -- connect" delay={0.6}>
      <div className="space-y-4">
        <div className="rounded-md border border-border bg-surface-2 p-4">
          <div className="mb-3 text-xs text-text-muted">Select connection [1-4]: _</div>
          <div className="grid gap-3 sm:grid-cols-2">
            {contacts.map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.label === 'email' ? undefined : '_blank'}
                  rel={contact.label === 'email' ? undefined : 'noopener noreferrer'}
                  className="group flex items-center gap-3 rounded-md border border-border bg-surface p-3 transition hover:border-green/50 hover:bg-surface-2"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-green/10 text-xs text-green">
                    {idx + 1}
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs text-text-muted">{contact.label}</div>
                    <div className="truncate text-sm text-green group-hover:text-green/80">
                      <span className="inline-flex items-center gap-1">
                        <Icon className="h-3 w-3" />
                        {contact.value}
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-text-muted">
          <span className="text-green">ashiq@portfolio:~$</span>
          <span>open to senior platform / AI infrastructure roles</span>
          <span className="inline-block h-3 w-2 bg-green cursor-blink" />
        </div>
      </div>
    </Section>
  );
}
