'use client';

import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { personal } from '@/lib/data';
import { Section, Link } from './Terminal';

export function Contact() {
  const contacts = [
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/ashiq-ali-268a5599', href: personal.linkedin },
    { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: Github, label: 'GitHub', value: 'github.com/ashiq-ali', href: personal.github },
    { icon: ExternalLink, label: 'Demo', value: 'k8s-infra-agent.netlify.app', href: personal.demo },
  ];

  return (
    <Section id="contact" title="Contact" icon={<Mail className="h-4 w-4" />} delay={0.6}>
      <div className="grid gap-4 sm:grid-cols-2">
        {contacts.map((contact) => {
          const Icon = contact.icon;
          return (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.label === 'Email' ? undefined : '_blank'}
              rel={contact.label === 'Email' ? undefined : 'noopener noreferrer'}
              className="group flex items-center gap-4 rounded-xl border border-border bg-surface-2/30 p-4 transition hover:border-accent/50 hover:bg-surface-2/50"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-medium uppercase tracking-wide text-text-muted">{contact.label}</div>
                <div className="truncate text-sm text-text-primary group-hover:text-accent-light">
                  {contact.value}
                </div>
              </div>
            </a>
          );
        })}
      </div>

      <div className="mt-6 text-center text-sm text-text-muted">
        Open to senior platform and AI infrastructure roles. Based in {personal.location}.
      </div>
    </Section>
  );
}
