export const personal = {
  name: 'Ashiq Ali',
  title: 'Senior Platform Engineer',
  location: 'London, UK',
  email: 'ashiq.ali2024@outlook.com',
  phone: '07776621820',
  github: 'https://github.com/ashiq-ali',
  linkedin: 'https://linkedin.com/in/ashiq-ali-268a5599',
  demo: 'https://k8s-infra-agent.netlify.app',
  summary:
    'Senior Platform Engineer with 9+ years designing, implementing, and managing large-scale infrastructure. I build AI-augmented platforms, self-healing Kubernetes, multi-cloud automation, and production LLM systems for companies that operate at scale.',
  tagline:
    'Platform engineer building AI-augmented infrastructure, self-healing Kubernetes, and cloud-native platforms.',
};

export const stats = [
  { label: 'Years Experience', value: '9+' },
  { label: 'Cloud Certs', value: '3' },
  { label: 'GitHub Repos', value: '57' },
  { label: 'Companies', value: '5' },
  { label: 'Incident Reduction', value: '50%' },
];

export const skills = {
  Cloud: ['AWS', 'GCP'],
  'AI / ML': ['Vertex AI', 'LangGraph', 'RAG', 'LLM integration', 'MCP'],
  Languages: ['Python', 'Go', 'Shell'],
  'Containers & Orchestration': ['Kubernetes', 'Helm'],
  'IaC & GitOps': ['Terraform', 'ArgoCD', 'GitLab CI/CD', 'GitHub Actions'],
  Observability: ['Datadog', 'Prometheus', 'Grafana', 'Elasticsearch (ELK)'],
};

export const certifications = [
  { name: 'Google Cloud Professional Cloud Architect', org: 'Google', year: '2024' },
  { name: 'Google Cloud Professional DevOps Engineer', org: 'Google', year: '2024' },
  { name: 'HashiCorp Terraform Associate', org: 'HashiCorp', year: '2023' },
];

export const experience = [
  {
    company: 'Virgin Media O2',
    title: 'Senior Platform Engineer',
    dates: 'Jan 2025 – Present',
    highlights: [
      'Designed production AI agents with LangGraph multi-agent orchestration, including a self-healing Kubernetes copilot that reduced manual incident remediation by 50%.',
      'Implemented production LLM architectures using RAG, tool calling, and guardrails for secure AI workloads.',
      'Managed hybrid cloud infrastructure across 4,000 projects using IaC, automated drift detection, and self-remediation.',
      'Managed multi-tenant Kubernetes clusters with upgrades, autoscaling, node lifecycle, and security hardening.',
      'Embedded DevSecOps into CI/CD using automated security scanning, policy-as-code, and compliance validation.',
      'Built Vertex AI / Kubeflow ML pipelines with experiment tracking and lineage for 10 model teams.',
      'Implemented Datadog observability to improve monitoring, alerting, and reliability across the AI/ML platform.',
    ],
  },
  {
    company: 'Atos',
    title: 'Senior DevOps Engineer',
    dates: 'May 2022 – Dec 2024',
    highlights: [
      'Architected IaC-driven infrastructure supporting 100+ microservices across 20+ engineering teams.',
      'Migrated a legacy payment-industry infrastructure platform to microservices and API-driven architecture.',
      'Built a self-service Apigee onboarding platform with reusable templates and built-in governance.',
      'Built GitOps-based Kubernetes deployment pipelines with automated testing, rollback, and auto-remediation.',
      'Implemented monitoring and alerting with the ELK Stack for microservices observability.',
      'Implemented PCI-DSS and SOC2 controls including RBAC, encryption, audit logging, and data isolation.',
    ],
  },
  {
    company: 'Amadeus',
    title: 'Senior Reliability Engineer',
    dates: 'Jun 2021 – May 2022',
    highlights: [
      'Resolved production outages through incident response, RCA, and blameless postmortems.',
      'Defined SLOs, SLIs, and SLAs for 40+ production services using Datadog, Prometheus, Grafana, and Splunk.',
      'Managed multi-cloud networking, IAM, and cloud cost optimization across production environments.',
      'Authored and maintained runbooks and operational documentation used by the on-call team.',
    ],
  },
  {
    company: "Lowe's",
    title: 'Site Reliability Engineer',
    dates: 'Jan 2020 – Jun 2021',
    highlights: [
      'Managed multi-regional GKE clusters for a high-availability e-commerce platform.',
      'Implemented cloud networking with VPCs, firewalls, load balancers, and network policies.',
      'Built dashboards and alerting for critical-path services, achieving 99.9% SLO compliance.',
    ],
  },
  {
    company: 'Meta',
    title: 'Production Engineer – SRE',
    dates: 'Dec 2016 – Jan 2020',
    highlights: [
      'Designed AWS infrastructure using Lambda, EC2, EKS, VPC, IAM, S3, and RDS for scalable production workloads.',
      'Automated deployment and validation workflows in Python against AWS APIs across multiple environments.',
      'Reduced mean time to resolution for critical incidents by 50% through CloudWatch-based monitoring.',
      'Contributed to platform RFCs and design reviews, leading infrastructure code reviews across application teams.',
    ],
  },
];

export const education = {
  degree: 'Bachelor of Technology — Computer Science and Engineering',
  gpa: '3.4',
};

export const projects = [
  {
    namespace: 'monitoring',
    repo: 'infra-agent',
    stack: 'Nemotron · GKE · Python',
    description: 'Self-healing Kubernetes copilot — edge AI anomaly detection + cloud reasoning + auto-remediation.',
    link: 'https://github.com/ashiq-ali/infra-agent',
  },
  {
    namespace: 'platform',
    repo: 'argocd-gitops-platform',
    stack: 'ArgoCD · Helm · ApplicationSet',
    description: 'Production-ready GitOps bootstrap using ArgoCD App of Apps pattern.',
    link: 'https://github.com/ashiq-ali/argocd-gitops-platform',
  },
  {
    namespace: 'infra',
    repo: 'terraform-aws-eks-platform',
    stack: 'Terraform · EKS · IRSA · OIDC',
    description: 'Modular AWS EKS platform with Terraform, IAM roles for service accounts, and OIDC.',
    link: 'https://github.com/ashiq-ali/terraform-aws-eks-platform',
  },
  {
    namespace: 'monitoring',
    repo: 'k8s-slo-manager',
    stack: 'Python · Prometheus · Grafana',
    description: 'SLO tracking, error budget calculation, and burn-rate alerting for Kubernetes.',
    link: 'https://github.com/ashiq-ali/k8s-slo-manager',
  },
  {
    namespace: 'logging',
    repo: 'elk-stack-kubernetes',
    stack: 'Elasticsearch · Logstash · ILM',
    description: 'Production ELK stack on Kubernetes with multi-pipeline Logstash and ILM hot/warm/cold.',
    link: 'https://github.com/ashiq-ali/elk-stack-kubernetes',
  },
  {
    namespace: 'security',
    repo: 'k8s-security-hardening',
    stack: 'Ansible · Falco · kube-bench',
    description: 'Kubernetes security hardening with CIS benchmarks, Falco eBPF rules, and RBAC audit.',
    link: 'https://github.com/ashiq-ali/k8s-security-hardening',
  },
  {
    namespace: 'data',
    repo: 'dagster-eks',
    stack: 'Dagster · EKS · Prometheus',
    description: 'Data orchestration platform on EKS with observability and scheduling.',
    link: 'https://github.com/ashiq-ali/Dagster-eks',
  },
];

export const navLinks = [
  { label: 'GitHub', href: personal.github },
  { label: 'LinkedIn', href: personal.linkedin },
  { label: 'Email', href: `mailto:${personal.email}` },
  { label: 'Demo', href: personal.demo },
];
