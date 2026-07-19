# Portfolio Plan — Ashiq Ali

## Goal
Build a personal portfolio website that channels the dense, terminal-forward aesthetic of [jcode.sh](https://jcode.sh) while showcasing Ashiq Ali's platform/SRE/AI-engineering experience, skills, and GitHub projects.

## Design Direction

### Visual Language (jcode.sh inspired)
- **Dark-first terminal UI**: near-black background, subtle grid/scanline texture, terminal-green/cyan/amber accents.
- **Monospace typography**: JetBrains Mono or SF Mono for body/headings; clean sans-serif only for tiny labels if needed.
- **Command-line motifs**: prompt bars (`ashiq@portfolio:~$`), `cat`, `kubectl`, `curl`, and status badges.
- **Information density**: long-scrolling single page, section cards with data tables, metric callouts, and compact timelines.
- **Subtle motion**: blinking cursor, typing reveals, fade-in on scroll; nothing flashy.
- **Responsive**: collapses gracefully to mobile with a stacked terminal view.

### Color Palette
- Background: `#0a0a0a` / `#0d1117`
- Surface: `#161b22`
- Border: `#30363d`
- Primary accent: `#22c55e` (terminal green)
- Secondary accent: `#06b6d4` (cyan)
- Tertiary accent: `#f59e0b` (amber)
- Text: `#e6edf3` (primary), `#8b949e` (muted)

## Proposed Site Structure

### 1. Hero / Terminal Header
- Name: **Ashiq Ali**
- Title: `Senior Platform Engineer · London, UK`
- One-liner: “Platform engineer building AI-augmented infrastructure, self-healing Kubernetes, and cloud-native platforms.”
- CTA command line: `curl -fsSL ashiq.sh/contact | sh` (copies email or opens contact section)
- Quick links: GitHub · LinkedIn · Email · Resume
- Status line: `9+ yrs exp · 3 certs · 57 repos · London, UK`

### 2. `cat about.md`
- Resume summary paragraph.
- Key stats in a compact table:
  - Years of experience
  - Companies worked at
  - GitHub repos
  - Cloud certifications
  - Notable metric: “50% manual incident reduction via self-healing K8s copilot”

### 3. `cat skills.json`
Terminal-style skills matrix grouped by category:
- **Cloud**: AWS, GCP
- **AI/ML**: Vertex AI, LangGraph, RAG, LLM integration, MCP
- **Languages**: Python, Go, Shell
- **Containers & Orchestration**: Kubernetes, Helm
- **IaC & GitOps**: Terraform, ArgoCD, GitLab CI/CD, GitHub Actions
- **Observability**: Datadog, Prometheus, Grafana, Elasticsearch (ELK)

### 4. `ls certifications/`
- Google Cloud Professional Cloud Architect
- Google Cloud Professional DevOps Engineer
- HashiCorp Terraform Associate

### 5. `history | tail -n 5` — Experience Timeline
Reverse-chronological roles presented like shell history entries:

| Date | Command | Result |
|------|---------|--------|
| 2025–Present | `Senior Platform Engineer @ Virgin Media O2` | AI agents, LangGraph, RAG, Vertex AI/Kubeflow, 4,000-project IaC, K8s hardening, Datadog |
| 2022–2024 | `Senior DevOps Engineer @ Atos` | 100+ microservices, Apigee platform, GitOps K8s, ELK, PCI-DSS/SOC2 |
|2 | `Senior Reliability Engineer @ Amadeus` | SLO/SLI/SLA for 40+ services, incident response, cost optimization |
| 2020–2021 | `Site Reliability Engineer @ Lowe’s` | Multi-regional GKE, 99.9% SLO compliance |
| 2016–2020 | `Production Engineer – SRE @ Meta` | AWS Lambda/EKS/VPC, Python automation, 50% MTTR reduction |

### 6. `kubectl get repos --all -o wide` — Projects
Reproduce the GitHub README’s `kubectl` table style. Pinned repositories with stacks:

| NAMESPACE | REPO | STACK | LINK |
|-----------|------|-------|------|
| monitoring | infra-agent | Nemotron · GKE · Python | github.com/ashiq-ali/infra-agent |
| platform | argocd-gitops-platform | ArgoCD · Helm · ApplicationSet | github.com/ashiq-ali/argocd-gitops-platform |
| infra | terraform-aws-eks-platform | Terraform · EKS · IRSA · OIDC | github.com/ashiq-ali/terraform-aws-eks-platform |
| monitoring | k8s-slo-manager | Python · Prometheus · Grafana | github.com/ashiq-ali/k8s-slo-manager |
| logging | elk-stack-kubernetes | Elasticsearch · Logstash · ILM | github.com/ashiq-ali/elk-stack-kubernetes |
| security | k8s-security-hardening | Ansible · Falco · kube-bench | github.com/ashiq-ali/k8s-security-hardening |
| data | dagster-eks | Dagster · EKS · Prometheus | github.com/ashiq-ali/Dagster-eks |

Also include a live GitHub profile link and a note that stats are sourced from the profile.

### 7. `connect` — Contact / Footer
A terminal contact prompt:
```
ashiq@portfolio:~$ kubectl exec -it ashiq-ali -- connect
[1] linkedin → linkedin.com/in/ashiq-ali-268a5599
[2] email    → ashiq.ali2024@outlook.com
[3] github   → github.com/ashiq-ali
[4] demo     → k8s-infra-agent.netlify.app
```
Plus short footer: © 2026 Ashiq Ali · Built with Next.js + Tailwind.

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14+ with static export (`output: 'export'`) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Font | JetBrains Mono (Google Fonts) |
| Animation | Framer Motion (light typing/cursor effects) |
| Deployment | GitHub Pages (via GitHub Actions) or Netlify (you already have a Netlify demo) |

### Why this stack
- **Next.js static export** gives fast, SEO-friendly pages with no runtime server.
- **Tailwind** makes the dense, utility-driven terminal layout easy to maintain.
- **Framer Motion** enables the subtle terminal-cursor and typing reveals without bloat.
- **GitHub Pages / Netlify** are free and easy to keep in sync with the repo.

## Asset Plan
- No external images needed unless you want a headshot.
- All content is text/data-driven, hardcoded from the resume/GitHub profile to avoid API rate limits.
- Optional: add a GitHub contribution graph later via a lightweight API call.

## Deliverables
1. A fully built Next.js portfolio site in the workspace.
2. `README.md` with local dev instructions and deploy steps.
3. Build verified (`next build` succeeds with static export).
4. Optional: GitHub Actions workflow for auto-deploy to GitHub Pages.

## Open Questions
- Should the site live on a custom domain (e.g., `ashiq.sh`) or GitHub Pages / Netlify?
- Do you want to include a photo, or keep it purely terminal/text?
- Any colors you strongly prefer, or stick with the green/cyan/amber terminal palette?

Once you review and say **implement**, I’ll scaffold the project and build it out.
