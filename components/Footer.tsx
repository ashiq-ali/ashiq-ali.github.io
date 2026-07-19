import { personal } from '@/lib/data';

export function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center text-sm text-text-muted">
      <div className="mx-auto max-w-4xl">
        <p className="font-medium text-text-secondary">
          {personal.name} · {personal.title}
        </p>
        <p className="mt-1">{personal.location} · {personal.email}</p>
      </div>
    </footer>
  );
}
