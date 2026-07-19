'use client';

import { Target } from 'lucide-react';
import { Section } from './Terminal';

export function Mission() {
  return (
    <Section id="mission" title="Mission" icon={<Target className="h-4 w-4" />} delay={0.15}>
      <div className="space-y-4">
        <p className="text-base leading-relaxed text-text-secondary">
          I believe the next generation of AI products will be won by the teams that can run them reliably, securely, and at scale. My focus is on the infrastructure layer that makes that possible: production LLM systems, agentic orchestration, self-healing platforms, and the observability that keeps them honest.
        </p>
        <p className="text-base leading-relaxed text-text-muted">
          For AI companies, that means shipping features faster without waking the on-call team. It means guardrails around LLM workloads, cost-aware scaling, and ML pipelines that actually make it to production. I build the platforms that let model engineers and product teams move fast without breaking things.
        </p>
        <div className="flex flex-wrap gap-3 pt-1">
          <span className="text-sm font-medium text-accent-light">#production-llms</span>
          <span className="text-sm font-medium text-accent-light">#agentic-infrastructure</span>
          <span className="text-sm font-medium text-accent-light">#platform-engineering</span>
          <span className="text-sm font-medium text-accent-light">#mlops</span>
        </div>
      </div>
    </Section>
  );
}
