import { siteConfig } from "./config";

export interface ResumeItem {
  slug: string;
  title: string;
  organization?: string;
  description: string;
  start?: string;
  end?: string;
  image?: string;
  paragraphs?: string[];
  bullets?: string[];
  skills?: string[];
  link?: string;
  linkLabel?: string;
  private?: boolean;
}
export interface ResumeSection {
  slug: string;
  name: string;
  items: ResumeItem[];
}

const periods = [
  ["Sep 2026", "Present"],
  ["Jun 2024", "Oct 2024"],
  ["Mar 2024", "Jan 2026"],
];
const experienceDescriptions = [
  "Kubernetes, automated delivery, observability, and GPU model serving on my own server and AWS.",
  "Go backend services, cloud-native research, secrets management, and microservice communication.",
  "Supporting Computer Engineering courses, networking labs, and student projects.",
];
const experienceItems: ResumeItem[] = siteConfig.experience.map(
  (item, index) => ({
    slug: [
      "cloud-devops-mlops-home-lab",
      "devops-intern",
      "computer-engineering-ta",
    ][index],
    title: item.title,
    organization: item.company,
    description: experienceDescriptions[index],
    start: periods[index][0],
    end: periods[index][1],
    bullets: item.bullets,
    ...(index === 2 ? { image: "/images/iut.png" } : {}),
  }),
);
const projectPeriods = [
  ["Sep 2026", "Present"],
  ["May 2026", "Sep 2026"],
  ["Oct 2026", "Present"],
  ["Jun 2025", "Aug 2025"],
];
const projectNotes = [
  [
    "Automated delivery with GitHub Actions, including consistent deployment steps.",
    "Migrated infrastructure from Hetzner to AWS EC2 and EKS.",
    "Monitored application performance with Prometheus and Grafana.",
    "Automated S3 backups and used storage tiers to reduce storage costs.",
  ],
  [
    "Collected DuoCards vocabulary in one place.",
    "Used vector embeddings to support vocabulary representation and dictation practice in different modes.",
    "Worked on the application cloud infrastructure.",
  ],
  [
    "Built a personal knowledge base for updating portfolio and career resources.",
    "Used embeddings and Retrieval-Augmented Generation to tailor resumes and cover letters.",
    "Added tracking for job and educational program applications.",
  ],
  [
    "Separated transactional records from reporting tables.",
    "Designed a star-schema data warehouse with Microsoft SQL Server.",
    "Wrote Python and SQL scripts to generate, transform, and load test data.",
    "Generated reports for Power BI.",
  ],
];

export const resumeSections: ResumeSection[] = [
  {
    slug: "education",
    name: "Education",
    items: siteConfig.education.map((item) => ({
      slug: "computer-engineering",
      title: "Bachelor of Science in Computer Engineering",
      organization: item.school,
      description: "Computer Engineering graduate. GPA: 89/100.",
      start: "2021",
      end: "2026",
      image: "/images/iut.png",
      paragraphs: [
        "B.Sc. in Computer Engineering at Isfahan University of Technology, Isfahan, Iran.",
      ],
      bullets: item.achievements,
    })),
  },
  {
    slug: "experience",
    name: "Experience",
    items: experienceItems.slice(0, 2),
  },
  {
    slug: "projects",
    name: "Notable Projects",
    items: siteConfig.projects.map((item, index) => ({
      slug: [
        "manisa",
        "duocardsdict",
        "career",
        "flight-reservation-data-warehouse",
      ][index],
      title: item.name,
      organization: item.category,
      description: item.description,
      start: projectPeriods[index][0],
      end: projectPeriods[index][1],
      skills: item.skills,
      bullets: projectNotes[index],
      link: item.link || undefined,
      linkLabel: "View repository on GitHub",
      private: !item.link,
    })),
  },
  {
    slug: "certifications",
    name: "Certifications",
    items: siteConfig.certifications.map((item, index) => ({
      slug: ["aws-cloud-practitioner", "aws-ai-practitioner"][index],
      title: item.name,
      organization: "Amazon Web Services",
      description: `${item.code} · Earned ${item.date}. Verify the credential on Credly.`,
      start: item.date,
      paragraphs: [`${item.name} (${item.code}), earned in ${item.date}.`],
      link: item.link,
      linkLabel: "Verify credential on Credly",
    })),
  },
  {
    slug: "skills",
    name: "Skills",
    items: siteConfig.skillGroups.map((item, index) => ({
      slug: [
        "cloud-and-delivery",
        "observability",
        "mlops",
        "networking",
        "programming-and-databases",
      ][index],
      title: item.name,
      description: item.items,
      skills: item.items.split(" · "),
      paragraphs: [
        "Technologies and topics from my coursework, internship, personal projects, and home lab.",
      ],
    })),
  },
  {
    slug: "teaching-assistant",
    name: "Teaching Assistant",
    items: [experienceItems[2]],
  },
  {
    slug: "community",
    name: "Community",
    items: siteConfig.community.map((item, index) => ({
      slug: ["iut-cessa", "apachee-club", "aicup", "iut-acm"][index],
      title: item.role,
      organization: item.organization,
      description: item.detail,
      start: ["Feb 2024", "Mar 2024", "Feb 2023", "Jan 2023"][index],
      end: ["May 2025", "Oct 2024", "Jan 2024", "Feb 2023"][index],
      paragraphs: [item.detail],
    })),
  },
];
