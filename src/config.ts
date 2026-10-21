export const siteConfig = {
  name: "Masih Tanoursaz",
  title: "DevOps & Cloud Engineer",
  description:
    "Masih Tanoursaz — Computer Engineering graduate in Toronto, focused on DevOps, AWS, Kubernetes, and MLOps. Explore my projects, experience, and resume.",
  url: "https://mhtcode.github.io/",
  accentColor: "#2563eb",
  location: "Toronto, Ontario",
  resume: "/Masih_Tanoursaz_Resume_DevOps.pdf",
  social: {
    email: "tanoursazmasih@gmail.com",
    linkedin: "https://www.linkedin.com/in/masih-tanoursaz",
    github: "https://github.com/mhtcode",
  },
  aboutMe:
    "I'm a Computer Engineering graduate who likes understanding how systems fit together, finding what breaks, and making things work better. After a DevOps internship working with Go, Docker, and Linux, I built a home lab to go deeper into Kubernetes, automated delivery, observability, and GPU model serving.",
  aboutMore:
    "I'm looking for a DevOps or Cloud Engineer role where I can contribute to real infrastructure, learn from experienced engineers, and keep building practical skills.",
  skills: [
    "AWS",
    "Kubernetes",
    "Docker",
    "Terraform",
    "Linux",
    "GitHub Actions",
  ],
  skillGroups: [
    {
      name: "Cloud & delivery",
      items:
        "AWS · Kubernetes · Docker · Terraform · GitHub Actions · Jenkins · Linux · Git",
    },
    {
      name: "Observability",
      items: "Prometheus · Grafana · OpenTelemetry · Loki · Tempo",
    },
    {
      name: "MLOps",
      items: "KServe · Kubeflow · NVIDIA Triton · vLLM · ONNX · TensorRT",
    },
    {
      name: "Networking",
      items:
        "DNS · TLS · Nginx · Traefik · VPNs · Load balancing · Container networking",
    },
    {
      name: "Code & data",
      items: "Python · Go · Bash · C/C++ · PostgreSQL · Microsoft SQL Server",
    },
  ],
  projects: [
    {
      name: "Manisa",
      category: "Cloud infrastructure & delivery",
      dateRange: "Sep 2026 — Present",
      description:
        "A business management platform, migrated from my Hetzner server to AWS EC2 and EKS. I manage its CI/CD pipeline, monitoring, and S3 backup strategy.",
      link: "https://github.com/mhtcode/Manisa",
      skills: ["AWS", "EKS", "GitHub Actions", "Prometheus"],
    },
    {
      name: "DuoCardsDict",
      category: "Vocabulary learning platform",
      dateRange: "May — Sep 2026",
      description:
        "A companion to DuoCards that brings vocabulary into one place, with vector embeddings and dictation practice. I also worked on the application's cloud infrastructure.",
      link: "https://github.com/mhtcode/DouCardsDict",
      skills: ["Vector embeddings", "Cloud infrastructure"],
    },
    {
      name: "Career",
      category: "AI-powered career management",
      dateRange: "Oct 2026 — Present",
      description:
        "A personal knowledge base and career workspace using embeddings and RAG to tailor resumes and cover letters, with tracking for job and educational applications.",
      link: "",
      skills: ["RAG", "Embeddings", "Automation"],
    },
    {
      name: "Flight Reservation Data Warehouse",
      category: "Data engineering",
      dateRange: "Jun — Aug 2025",
      description:
        "A SQL Server project separating transactional data from reporting, with a star-schema warehouse, Python and SQL data pipelines, and Power BI reports.",
      link: "https://github.com/mhtcode/DataWarehouse",
      skills: ["SQL Server", "Python", "ETL", "Power BI"],
    },
  ],
  experience: [
    {
      company: "Personal infrastructure · Toronto, Canada",
      title: "Cloud, DevOps & MLOps Home Lab",
      dateRange: "Sep 2026 — Present",
      bullets: [
        "Set up Kubernetes on my own server and ran workloads on AWS EKS, comparing Traefik and Nginx as reverse proxies.",
        "Built GitHub Actions pipelines for testing, Docker image builds, publishing, and deployment.",
        "Served YOLOv12 with NVIDIA Triton and Qwen3:8B with vLLM in separate pods, working on shared GPU resources.",
        "Added Prometheus, Grafana, Loki, Tempo, and OpenTelemetry to investigate issues and improve GPU utilization by 2%.",
      ],
    },
    {
      company: "Payam Pardaz · Sadra Cloud Team · Isfahan, Iran",
      title: "DevOps Intern",
      dateRange: "Jun — Oct 2024",
      bullets: [
        "Developed Go backend services in a microservices environment using Docker and Linux as part of the R&D team.",
        "Implemented HashiCorp Vault and in-memory secret storage for applications.",
        "Configured MOSN for service communication, tested request routing, and diagnosed connectivity issues with Linux tools and Docker logs.",
      ],
    },
    {
      company: "Isfahan University of Technology · Isfahan, Iran",
      title: "Teaching Assistant · Computer Engineering",
      dateRange: "Mar 2024 — Jan 2026",
      bullets: [
        "Supported Computer Networks, Network Laboratory, IT Project Management, and Fundamentals of IT, alongside other engineering courses.",
        "Helped students configure Cisco routers and switches, create VLANs, set up routing, and troubleshoot network connectivity.",
        "Reviewed assignments, supported lab exercises, and assisted with grading and course materials.",
      ],
    },
  ],
  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      code: "CLF-C02",
      date: "Oct 2026",
      link: "https://www.credly.com/badges/4cbccdce-76b7-45ca-bf87-5aa414114d19/public_url",
    },
    {
      name: "AWS Certified AI Practitioner",
      code: "AIF-C01",
      date: "Sep 2026",
      link: "https://www.credly.com/badges/9974d104-07b9-4674-84ac-056d155222c0/public_url",
    },
  ],
  education: [
    {
      school: "Isfahan University of Technology",
      degree: "B.Sc. in Computer Engineering",
      dateRange: "2021 — 2026",
      achievements: [
        "GPA: 89/100",
        "Coursework in Computer Networks, Operating Systems, Database Systems, Software Engineering, and IT Project Management.",
      ],
    },
  ],
  community: [
    {
      role: "Public Relations Coordinator",
      organization: "IUT Computer Engineering Scientific Association",
      date: "Feb 2024 — May 2025",
      detail:
        "Helped turn Open Source Day into a national IoT and open source event with over 870 attendees, coordinating outreach, fundraising, and sponsorships.",
    },
    {
      role: "Co-Head",
      organization: "APACHEE Club · Isfahan University of Technology",
      date: "Mar — Oct 2024",
      detail:
        "Helped organize cybersecurity events and the club's first CTF competition, and secured sponsorship for the in-person Escapache CTF.",
    },
    {
      role: "Branding Manager",
      organization: "AICup National AI Competition",
      date: "Feb 2023 — Jan 2024",
      detail:
        "Managed event promotion with a team across LinkedIn, Telegram, and Instagram. Built a Telegram bot to automate messages; the competition attracted more than 100 teams.",
    },
    {
      role: "Executive & Branding Team Member",
      organization: "IUT ACM Student Chapter",
      date: "Jan — Feb 2023",
      detail:
        "Worked with event staff to promote a competition that attracted over 300 participants.",
    },
  ],
};
