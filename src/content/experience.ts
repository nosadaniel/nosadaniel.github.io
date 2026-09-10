export type ExperienceEntry = {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  tags: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Software Engineer",
    company: "cyberGEIGER GmbH",
    location: "Freiburg, Germany",
    period: "Aug. 2024 - Present",
    bullets: [
      "Developed agentic AI and retrieval-augmented generation (RAG) systems on Azure AI for cybersecurity use cases, including automated threat and vulnerability assessments via the Intelligent Assessment Service and security-awareness training with cyberCoach",
      "Spearheaded frontend engineering for SME- and learner-facing products, including GeigerToolbox and the sysder AI Assistant, while owning release engineering and CI/CD workflows",
      "Contributed to AI-powered learning experiences – DataPro Assistant and DataPro Games – for the DataPro Erasmus+ programme in collaboration with Pädagogische Hochschule Freiburg",
      "Provisioned and evolved Azure cloud infrastructure utilizing Terraform and infrastructure-as-code practices",
      "Conducted applied machine-learning research on adapting foundation models for security applications, with a focus on synthetic-data generation, evaluation pipelines, and open-source publication",
    ],
    tags: ["Azure AI", "RAG", "Agentic AI", "Terraform", "CI/CD", "Flutter", "React"],
  },
  {
    role: "IT Consultant",
    company: "IAESTE Services / ISACD",
    location: "Benin City, Nigeria",
    period: "Mar. 2023 - Aug. 2024",
    bullets: ["IT consulting and exchange administration for IAESTE's student exchange programme"],
    tags: ["IT Consulting"],
  },
  {
    role: "Research Assistant",
    company: "Institute for Interactive Technologies (IIT), FHNW",
    location: "Switzerland",
    period: "Mar. 2022 - Jan. 2023",
    bullets: [
      "Built GeigerToolbox, a cybersecurity risk-assessment tool for SMEs, as part of the EU Horizon 2020 GEIGER research project",
    ],
    tags: ["Flutter", "Dart", "Research"],
  },
  {
    role: "Mobile Application Developer (Intern)",
    company: "Institute for Interactive Technologies (IIT), FHNW",
    location: "Switzerland",
    period: "Apr. 2021 - Mar. 2022",
    bullets: [
      "Prototyped and designed the initial GeigerToolbox concept for the EU Horizon 2020 GEIGER research project",
    ],
    tags: ["Flutter", "Dart"],
  },
  {
    role: "Early Career",
    company: "Various (Tech Facilitator, FrontEnd Developer, Learning Facilitator)",
    location: "Nigeria",
    period: "2017 - 2021",
    bullets: [
      "Tech Facilitator, HarvardCom Computer Institute and Technologies",
      "FrontEnd Developer (Volunteer), ICT, Federal University of Petroleum Resources",
      "Learning Facilitator, Google Digital Skills for Africa",
      "Intern / FrontEnd Developer, Complete Computers and Technology",
    ],
    tags: ["Frontend", "Teaching"],
  },
];
