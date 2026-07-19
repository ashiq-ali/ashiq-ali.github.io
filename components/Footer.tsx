import { personal } from '@/lib/data';

export function Footer() {
  return (
    <footer className="border-t border-border py-6 text-center text-xs text-text-muted">
      <div className="mx-auto max-w-4xl">
        <p>
          © {new Date().getFullYear()} {personal.name} · built with Next.js + Tailwind CSS · terminal aesthetic inspired by jcode.sh
        </p>
        <p className="mt-1">London, UK · {personal.email}</p>
      </div>
    </footer>
  );
}
