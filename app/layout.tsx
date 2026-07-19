import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ashiq Ali — Senior Platform Engineer',
  description:
    'Senior Platform Engineer with 9+ years building AI-augmented infrastructure, self-healing Kubernetes, and cloud-native platforms.',
  keywords: [
    'Platform Engineer',
    'SRE',
    'DevOps',
    'Kubernetes',
    'AI Infrastructure',
    'LangGraph',
    'Vertex AI',
    'Terraform',
    'AWS',
    'GCP',
    'LLM',
    'RAG',
    'MCP',
    'Kubeflow',
    'ArgoCD',
  ],
  authors: [{ name: 'Ashiq Ali' }],
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Ashiq Ali — Senior Platform Engineer',
    description:
      'Senior Platform Engineer with 9+ years building AI-augmented infrastructure, self-healing Kubernetes, and cloud-native platforms.',
    type: 'website',
    url: 'https://ashiq-ali.github.io',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ashiq Ali',
  jobTitle: 'Senior Platform Engineer',
  url: 'https://ashiq-ali.github.io',
  sameAs: [
    'https://github.com/ashiq-ali',
    'https://linkedin.com/in/ashiq-ali-268a5599',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'London',
    addressCountry: 'UK',
  },
  description:
    'Senior Platform Engineer with 9+ years designing, implementing, and managing large-scale infrastructure, AI/ML platforms, Kubernetes, and cloud-native systems.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-bg text-text-primary antialiased scanlines">
        {children}
      </body>
    </html>
  );
}
