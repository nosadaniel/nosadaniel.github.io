export type ProjectCategory = "ai" | "cybersecurity" | "open-source" | "infra";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  company?: string;
  category: ProjectCategory;
  period: string;
  description: string;
  techStack: string[];
  role: string;
  links: ProjectLink[];
  featured?: boolean;
  note?: string;
  stats?: { label: string; value: string }[];
};

export const categoryLabels: Record<ProjectCategory, string> = {
  ai: "AI & Agentic Workflows",
  cybersecurity: "Cybersecurity Applications",
  "open-source": "Open Source Contributions",
  infra: "Infrastructure & DevOps",
};

export const projects: Project[] = [
  {
    slug: "intelligent-assessment-service",
    title: "Intelligent Assessment Service",
    company: "cyberGEIGER GmbH",
    category: "ai",
    period: "2025 - 2026",
    description:
      "Agentic AI and RAG workflow for automated cybersecurity threat and vulnerability assessment of SMEs' security posture. Includes an n8n data-ingestion pipeline that pulls cybersecurity news from Google Sheets, scrapes and validates content via an LLM agent, and indexes it into a RAG vector database.",
    techStack: ["Python", "Azure AI Foundry", "RAG", "Agentic Workflows", "n8n"],
    role: "Full development and implementation",
    links: [],
  },
  {
    slug: "cybercoach",
    title: "cyberCoach",
    company: "cyberGEIGER GmbH",
    category: "ai",
    period: "2025 - 2026",
    description:
      "Conversational AI security-awareness assistant for non-technical users. Responds instantly to security incidents with actionable advice via WhatsApp and Telegram.",
    techStack: ["Python", "Agentic AI", "Telegram Bot API", "WhatsApp Business API"],
    role: "Full development",
    links: [
      { label: "Telegram bot", href: "https://t.me/cyberCoachChatBot" },
      { label: "WhatsApp bot", href: "https://wa.me/491634706861?text=/start" },
      { label: "Showcase", href: "https://cybersuiteproject.eu/hackathon25/" },
    ],
  },
  {
    slug: "datapro-assistant",
    title: "DataPro Assistant",
    company: "cyberGEIGER GmbH (DataPro Erasmus+)",
    category: "ai",
    period: "2025 - 2026",
    description: "AI learning assistant chatbot for the DataPro Erasmus+ programme with Pädagogische Hochschule Freiburg.",
    techStack: ["Python", "OpenAI SDK", "FastAPI", "React", "TypeScript"],
    role: "Full development",
    links: [{ label: "Live site", href: "https://datapro.cyber-geiger.com" }],
  },
  {
    slug: "sysder-ai-assistant",
    title: "sysder AI Assistant",
    company: "cyberGEIGER GmbH",
    category: "ai",
    period: "2025 - 2026",
    description:
      "Agentic AI learning-assistant chatbot with an admin panel for teachers to configure learning paths and content for students.",
    techStack: ["Flutter", "Dart", "Azure AI Foundry"],
    role: "Full development",
    links: [
      { label: "Live site", href: "https://sysder.cyber-geiger.com" },
      {
        label: "Programme info",
        href: "https://www.ph-freiburg.de/ibw/institut/wirtschaftswissenschaft-und-ihre-didaktik-wirtschaftspaedagogik/sysder.html",
      },
    ],
  },
  {
    slug: "efficient-domain-adaptation-llms",
    title: "Efficient Domain Adaptation for LLMs",
    company: "cyberGEIGER GmbH",
    category: "ai",
    period: "2025 - 2026",
    description:
      "Domain-adapted a foundation model (Llama 3.1 8B) via supervised fine-tuning and LoRA adapters so it can reason about phishing threats, not just classify them. Built an instruction-style data synthesis pipeline and a separate evaluation pipeline.",
    techStack: ["Python", "PEFT/LoRA", "Unsloth", "Supervised Fine-Tuning", "LLM Evaluation"],
    role: "Full research and development",
    featured: true,
    stats: [
      { label: "Accuracy", value: "93.4%" },
      { label: "Precision", value: "97.4%" },
      { label: "Recall", value: "89.1%" },
      { label: "F1 Score", value: "93.1%" },
    ],
    note: "Base model: unsloth/llama-3.1-8b-bnb-4bit. Live demo Space sleeps after inactivity and may take a moment to wake up.",
    links: [
      { label: "Live demo", href: "https://huggingface.co/spaces/nosadaniel/fined-model" },
      { label: "LoRA adapter", href: "https://huggingface.co/nosadaniel/llama3-1-8b-tuned" },
      { label: "Instruction dataset", href: "https://huggingface.co/datasets/nosadaniel/phishing-email-training-dataset" },
      { label: "Training notebook", href: "https://colab.research.google.com/drive/1hjLVIx0QZ57dNkAaLahPSwoYZNQkpVXz" },
      { label: "Read the write-up", href: "/blog/efficient-domain-adaptation" },
    ],
  },
  {
    slug: "learn-ai-mcp",
    title: "learn_ai (MCP Research Assistant)",
    category: "ai",
    period: "2026",
    description:
      "A collection of hands-on Python projects exploring LLMs and the Model Context Protocol. The flagship project is a research-assistant chatbot combining a custom FastMCP server with Claude 3.7 Sonnet to search and analyze arXiv scientific papers in real time.",
    techStack: ["Python", "uv", "Model Context Protocol", "FastMCP", "Claude 3.7 Sonnet", "arXiv API"],
    role: "Full development",
    links: [{ label: "GitHub", href: "https://github.com/nosadaniel/learn_ai" }],
  },
  {
    slug: "geiger-toolbox",
    title: "GeigerToolbox (Geiger App)",
    company: "IIT (FHNW) & cyberGEIGER GmbH",
    category: "cybersecurity",
    period: "2021 - 2026",
    description:
      "SME-facing cybersecurity risk-assessment and monitoring app, published to Android and iOS as the Geiger App. Prototyped and researched at IIT (FHNW) as part of the EU Horizon 2020 GEIGER project, then owned and evolved into a production-ready application at cyberGEIGER GmbH. Includes a merge-triggered CI/CD orchestrator (GitHub Actions) that classifies conventional-commit history into release/patch/none and ships to environment-gated Play Store and Firebase targets with automatic semantic-version tagging.",
    techStack: ["Flutter", "Dart", "GitHub Actions"],
    role: "Prototyped at IIT, evolved to production at cyberGEIGER GmbH",
    links: [
      { label: "cyberGEIGER GmbH", href: "https://cyber-geiger.com" },
      { label: "Project site", href: "https://cyber-geiger.eu" },
      { label: "Android", href: "https://play.google.com/store/apps/details?id=com.cybergeiger.toolbox" },
      { label: "iOS", href: "https://apps.apple.com/app/geiger-app/id6752607888" },
    ],
  },
  {
    slug: "datapro-games-smart-home-challenge",
    title: "DataPro Games: Smart Home Challenge",
    company: "cyberGEIGER GmbH (DataPro Erasmus+)",
    category: "cybersecurity",
    period: "2025 - 2026",
    description: "Web game teaching IoT security skills, built for the DataPro Erasmus+ programme.",
    techStack: ["React", "TypeScript", "Vite"],
    role: "Co-developed",
    links: [{ label: "Play", href: "https://dataprogames.ph-freiburg.de/smarthome-challenge" }],
  },
  {
    slug: "datapro-games-nothing-to-hide",
    title: "DataPro Games: Nothing-to-Hide",
    company: "cyberGEIGER GmbH (DataPro Erasmus+)",
    category: "cybersecurity",
    period: "2025 - 2026",
    description: "Web game teaching GDPR and data-protection skills, built for the DataPro Erasmus+ programme.",
    techStack: ["React", "TypeScript", "Vite"],
    role: "Co-developed",
    links: [{ label: "Play", href: "https://dataprogames.ph-freiburg.de/nothing-to-hide" }],
  },
  {
    slug: "kcna-practice-exam-app",
    title: "KCNA Practice Exam App",
    category: "cybersecurity",
    period: "2025",
    description:
      "Static web app for practicing Kubernetes and Cloud Native Associate (KCNA) exam questions. Randomized question selection with configurable domain distribution, a 60-second-per-question timer, instant score breakdown by domain, and a review of missed questions with explanations.",
    techStack: ["HTML", "CSS", "JavaScript"],
    role: "Full development",
    links: [{ label: "GitHub", href: "https://github.com/nosadaniel/kcna_cert_demo_quiz" }],
  },
  {
    slug: "force-update-helper",
    title: "force_update_helper",
    category: "open-source",
    period: "2026",
    description: "Contributed to a package for showing a remotely-controlled app force-update prompt. 50+ stars, 22+ forks.",
    techStack: ["Flutter", "Dart"],
    role: "Contributor",
    links: [{ label: "GitHub", href: "https://github.com/bizz84/force_update_helper" }],
  },
  {
    slug: "password-checker",
    title: "PasswordChecker",
    category: "open-source",
    period: "2026",
    description: "Contributed to an iOS/macOS password-strength library wrapping Dropbox's zxcvbn. 6+ stars, 9+ forks.",
    techStack: ["Swift"],
    role: "Contributor",
    links: [{ label: "GitHub", href: "https://github.com/Loupehope/PasswordChecker" }],
  },
  {
    slug: "infrastructure-as-code",
    title: "Infrastructure as Code",
    company: "cyberGEIGER GmbH",
    category: "infra",
    period: "2025 - 2026",
    description: "Author Terraform modules provisioning Azure infrastructure for the platform's AI services.",
    techStack: ["Terraform", "Azure"],
    role: "Full development",
    links: [],
  },
];
