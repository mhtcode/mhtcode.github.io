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

// Each entry owns its URL, dates, and details so it can be edited or reordered independently.
export const resumeSections: ResumeSection[] = [
  {
    slug: "education",
    name: "Education",
    items: [
      {
        slug: "computer-engineering",
        title: "Bachelor of Science in Computer Engineering",
        organization: "Isfahan University of Technology",
        description: "Computer Engineering graduate. GPA: 89/100.",
        start: "2021",
        end: "2025",
        image: "/images/iut.png",
        paragraphs: [
          "My studies at Isfahan University of Technology brought together software, networks, data systems, intelligent agents, and the organizational side of technology projects.",
        ],
        bullets: [
          "GPA: 89/100.",
          "Bachelor's final project: evaluating LLM-based and reinforcement learning agents for sustainable data center optimization.",
          "Systems coursework: Computer Networks, Network Laboratory, Operating Systems, Microprocessor, and Digital Systems Design Laboratory.",
          "Software and data coursework: Software Engineering, Database Systems, Database II, and Artificial Intelligence.",
          "Management coursework: IT Project Management, Strategic Management of Information Technology, Fundamentals of IT, and Entrepreneurship.",
        ],
      },
    ],
  },
  {
    slug: "experience",
    name: "Experience",
    items: [
      {
        slug: "cloud-devops-mlops-home-lab",
        title: "Cloud, DevOps & MLOps Home Lab",
        organization: "Independent projects · Toronto, Canada",
        description:
          "A hands-on environment for running personal applications, exploring cloud infrastructure, and serving AI models on local hardware.",
        start: "Sep 2026",
        end: "Present",
        bullets: [
          "Set up Kubernetes environments on my own server and AWS to run personal applications and infrastructure services.",
          "Configured Traefik and Nginx reverse proxies and investigated DNS, HTTPS, service routing, and container networking.",
          "Built GitHub Actions workflows for testing, Docker image builds, publishing, and deployment.",
          "Ran YOLOv12 with NVIDIA Triton and Qwen3:8B with vLLM in separate pods, exploring how to share GPU resources between workloads.",
          "Used Prometheus, Grafana, Loki, Tempo, and OpenTelemetry to inspect metrics, logs, and traces and investigate performance issues.",
        ],
        skills: [
          "Linux",
          "Docker",
          "Kubernetes",
          "AWS",
          "CI/CD",
          "GPU inference",
          "Observability",
        ],
      },
      {
        slug: "med-x-product-innovation",
        title: "Product Innovator · MED-X",
        organization: "MED-X Health & Innovation Program",
        description:
          "Co-developed a digital health concept addressing antibiotic resistance and supporting better prescription decisions with a multidisciplinary team.",
        start: "2025",
        paragraphs: [
          "This was an early-stage innovation concept developed for the MED-X event, with a focus on understanding the problem, the users, and the business case.",
        ],
        bullets: [
          "Researched market context and user needs and turned findings into structured insights and visual charts.",
          "Helped define requirements, the value proposition, and an early business model.",
          "Worked across disciplines to organize the team's ideas and prepare the final pitch deck.",
          "Presented the concept to judges and mentors, explaining the problem, proposed solution, target users, and business rationale.",
        ],
        skills: [
          "User needs analysis",
          "Product discovery",
          "Market research",
          "Business modeling",
          "Pitching",
        ],
      },
      {
        slug: "devops-intern",
        title: "Cloud / Backend Development Intern",
        organization: "Payam Pardaz · Sadra Cloud Team · Isfahan, Iran",
        description:
          "Go backend development and cloud R&D, with practical work on containers, secrets management, and communication between services.",
        start: "Jun 2024",
        end: "Oct 2024",
        bullets: [
          "Developed and tested Go backend services in a microservices environment using Docker and Linux.",
          "Implemented interchangeable HashiCorp Vault and in-memory secret storage for applications.",
          "Configured MOSN as a proxy between containerized services and tested request routing.",
          "Used Linux tools, Docker logs, and network checks to investigate connectivity and configuration issues during local deployment and integration testing.",
          "Contributed to R&D investigations involving service communication, SSH, and remote access approaches.",
        ],
        skills: [
          "Go",
          "Docker",
          "Linux",
          "HashiCorp Vault",
          "MOSN",
          "Troubleshooting",
        ],
      },
    ],
  },
  {
    slug: "projects",
    name: "Notable Projects",
    items: [
      {
        slug: "career",
        title: "Career",
        organization: "AI-powered career management",
        description:
          "A personal knowledge base and career workspace for tailoring application materials and tracking job and educational applications.",
        start: "Oct 2026",
        end: "Present",
        bullets: [
          "Organized career information in a reusable personal knowledge base.",
          "Used embeddings and Retrieval-Augmented Generation (RAG) to support resumes and cover letters tailored to different roles.",
          "Built workflows for managing application materials and tracking applications and progress.",
          "Explored how a shared knowledge base could keep portfolio and career resources up to date.",
        ],
        skills: [
          "RAG",
          "Embeddings",
          "Local AI",
          "LaTeX",
          "Workflow automation",
        ],
        private: true,
      },
      {
        slug: "manisa",
        title: "Manisa",
        organization: "Business management platform",
        description:
          "A bilingual platform for a self-employed service provider to manage customers, services, appointments, payments, working hours, and business reporting.",
        start: "Sep 2026",
        end: "Present",
        bullets: [
          "Worked on an application that brings day-to-day service business operations and database-derived reports into one place.",
          "Set up GitHub Actions to automate application delivery and keep deployment steps consistent.",
          "Moved the application from my Hetzner server to AWS EC2 and EKS.",
          "Used Prometheus and Grafana to monitor the application and investigate its performance.",
          "Automated S3 backups and used storage tiers to manage storage costs.",
        ],
        skills: [
          "Product development",
          "PostgreSQL",
          "Docker",
          "AWS",
          "EKS",
          "GitHub Actions",
          "Prometheus",
          "Grafana",
        ],
        link: "https://github.com/mhtcode/Manisa",
        linkLabel: "View public repository on GitHub",
      },
      {
        slug: "duocardsdict",
        title: "DuoCardsDict",
        organization: "Vocabulary learning platform",
        description:
          "A companion to DuoCards that collects vocabulary in one place and supports dictation practice and semantic exploration of words.",
        start: "May 2026",
        end: "Sep 2026",
        bullets: [
          "Built a vocabulary workspace around words collected from DuoCards.",
          "Used vector embeddings to represent words and explore their relationships.",
          "Added dictation exercises in different modes to support spelling and vocabulary practice.",
          "Worked on the application's cloud infrastructure and local AI integration.",
        ],
        skills: [
          "Vector embeddings",
          "Language learning",
          "Local AI",
          "Cloud infrastructure",
        ],
        link: "https://github.com/mhtcode/DouCardsDict",
        linkLabel: "View public repository on GitHub",
      },
      {
        slug: "local-ai-inference",
        title: "Local AI Inference & Computer Vision",
        organization: "Personal AI / MLOps projects",
        description:
          "Experiments serving language and vision models locally and connecting their inference endpoints to other applications.",
        bullets: [
          "Served Qwen3:8B through vLLM and connected the model endpoint to personal projects.",
          "Explored batched requests and local inference workflows.",
          "Used NVIDIA Triton to serve YOLOv12 for object-detection experiments, inspecting visual inputs and model outputs.",
          "Worked with Docker, Linux, Kubernetes pods, service configuration, and GPU resource troubleshooting.",
        ],
        skills: [
          "vLLM",
          "NVIDIA Triton",
          "YOLOv12",
          "LLM inference",
          "Computer vision",
          "Docker",
          "Kubernetes",
        ],
      },
      {
        slug: "flight-reservation-data-warehouse",
        title: "Flight Reservation Data Warehouse",
        organization: "Database II · Data engineering",
        description:
          "A SQL Server project separating airline reservation transactions from analytical reporting, with Python and SQL data pipelines and Power BI reports.",
        start: "Jun 2025",
        end: "Aug 2025",
        bullets: [
          "Designed transactional, staging, and dimensional warehouse layers for flight reservation data.",
          "Modeled relationships and organized facts and dimensions for analytical queries.",
          "Wrote SQL and Python scripts to generate test data, transform records, and load the warehouse.",
          "Automated the pipeline with Python and prepared reports for Power BI.",
        ],
        skills: [
          "SQL Server",
          "Python",
          "SQL",
          "ETL",
          "Dimensional modeling",
          "Power BI",
        ],
        link: "https://github.com/mhtcode/DataWarehouse",
        linkLabel: "View project repository on GitHub",
      },
      {
        slug: "dockerized-secrets-service",
        title: "Dockerized Secrets Service",
        organization: "Go · HashiCorp Vault",
        description:
          "A Go application with Vault and in-memory storage backends for writing and reading application secrets.",
        start: "Jun 2024",
        end: "Oct 2024",
        bullets: [
          "Kept secret-storage implementations separate from application logic so either backend could be used.",
          "Integrated HashiCorp Vault and an in-memory store.",
          "Used Docker Compose to run the application and Vault together for development and testing.",
        ],
        skills: [
          "Go",
          "HashiCorp Vault",
          "Docker Compose",
          "Backend development",
        ],
        link: "https://github.com/mhtcode/Dockerized-vault-app",
        linkLabel: "View public repository on GitHub",
      },
      {
        slug: "pulp-fiction",
        title: "Pulp-Fiction Social Media Application",
        organization: "University project · C++ / Qt",
        description:
          "A desktop social media application built in C++ with Qt, exploring object-oriented design and graphical user interfaces.",
        bullets: [
          "Developed a desktop application with the Qt framework.",
          "Practiced object-oriented design, event-driven programming, user interaction, and modular application structure.",
        ],
        skills: ["C++", "Qt", "Object-oriented programming", "GUI development"],
      },
      {
        slug: "opentelemetry-dice-service",
        title: "Observable Go Dice Service",
        organization: "Backend & observability practice",
        description:
          "A small Go HTTP service for dice rolls, instrumented with OpenTelemetry to explore tracing and service monitoring.",
        bullets: [
          "Implemented HTTP routes for handling dice-roll requests.",
          "Added OpenTelemetry instrumentation to observe request handling and service behavior.",
        ],
        skills: ["Go", "HTTP", "OpenTelemetry", "Tracing"],
        link: "https://github.com/mhtcode/simple-rolldiceApp-using-openTelemetry",
        linkLabel: "View public repository on GitHub",
      },
      {
        slug: "academic-programming-projects",
        title: "Academic & Programming Projects",
        organization: "Computer Engineering coursework",
        description:
          "An archive of university work and smaller programming projects, including C/C++ applications, networking, and embedded-system exercises.",
        bullets: [
          "Built a simple notepad using Qt and C++ and a C program for hiding GIF data.",
          "Worked with AVR ATmega32 and Proteus through microprocessor and digital-systems coursework and teaching.",
          "Maintained a public archive of my Computer Engineering studies at IUT.",
        ],
        skills: ["C", "C++", "Qt", "AVR ATmega32", "Proteus", "Git"],
        link: "https://github.com/mhtcode/IUT",
        linkLabel: "Browse my academic archive on GitHub",
      },
    ],
  },
  {
    slug: "research",
    name: "Research",
    items: [
      {
        slug: "sustainable-data-center-agents",
        title: "Intelligent Agents for Sustainable Data Center Optimization",
        organization:
          "Bachelor's research project · Isfahan University of Technology",
        description:
          "A simulation-based comparison of multi-agent reinforcement learning policies and LLM-based decision agents for sustainable data center operations.",
        start: "2025",
        paragraphs: [
          "I used SustainDC to study how different decision-making agents control infrastructure and how their choices affect resource use. This was an undergraduate research project and report.",
        ],
        bullets: [
          "Designed a comparative experimental workflow covering workload shifting, data-center cooling, and battery charge/discharge decisions.",
          "Compared pretrained multi-agent reinforcement learning policies with LLM-based control agents.",
          "Built a pipeline that translated numerical observations into structured prompts and validated JSON actions before applying them to the simulator.",
          "Evaluated energy consumption, carbon footprint, water usage, cumulative reward, and agent-level returns.",
          "Worked with multi-agent RL methods including HAA2C, HAPPO, HASAC, and MAPPO, with reproducible experiment and analysis workflows.",
        ],
        skills: [
          "Python",
          "SustainDC",
          "Multi-agent reinforcement learning",
          "LLM agents",
          "Experimental evaluation",
          "Sustainable computing",
        ],
      },
      {
        slug: "research-interests",
        title: "Research Interests",
        description:
          "Cloud and edge systems, intelligent resource allocation, sustainable computing, and the use of data and AI to support technology and project decisions.",
        bullets: [
          "Cloud, edge, and fog computing; distributed systems; networking; and workload scheduling.",
          "Energy-aware infrastructure, sustainable data centers, and reinforcement learning for system control.",
          "LLM-based agents, multi-agent systems, and reproducible simulation experiments.",
          "IT project management, information systems, digital transformation, and technology and innovation management.",
          "Data-driven process improvement, project planning, risk analysis, and decision support.",
        ],
      },
    ],
  },
  {
    slug: "certifications",
    name: "Certifications",
    items: [
      {
        slug: "aws-cloud-practitioner",
        title: "AWS Certified Cloud Practitioner",
        organization: "Amazon Web Services",
        description:
          "CLF-C02 · Earned Oct 2026. Verify the credential on Credly.",
        start: "Oct 2026",
        link: "https://www.credly.com/badges/4cbccdce-76b7-45ca-bf87-5aa414114d19/public_url",
        linkLabel: "Verify credential on Credly",
      },
      {
        slug: "aws-ai-practitioner",
        title: "AWS Certified AI Practitioner",
        organization: "Amazon Web Services",
        description:
          "AIF-C01 · Earned Sep 2026. Verify the credential on Credly.",
        start: "Sep 2026",
        link: "https://www.credly.com/badges/9974d104-07b9-4674-84ac-056d155222c0/public_url",
        linkLabel: "Verify credential on Credly",
      },
    ],
  },
  {
    slug: "skills",
    name: "Skills",
    items: [
      {
        slug: "programming-and-databases",
        title: "Programming & Software Development",
        description: "Python · Go · Bash · C/C++ · SQL · HTML · CSS · Qt · Git",
        bullets: [
          "Backend services, object-oriented and event-driven programming, HTTP services, desktop interfaces, and scripting.",
        ],
      },
      {
        slug: "cloud-and-delivery",
        title: "Cloud & Delivery",
        description:
          "AWS · Kubernetes · Docker · Terraform · GitHub Actions · Jenkins · Linux · Git",
        bullets: [
          "Hands-on infrastructure and delivery work through my internship, personal applications, and home lab.",
          "AWS familiarity includes EC2, S3, IAM, VPC, EKS, ECS, and CloudWatch.",
        ],
      },
      {
        slug: "mlops",
        title: "Applied AI & MLOps",
        description:
          "KServe · Kubeflow · NVIDIA Triton · vLLM · ONNX · TensorRT · YOLOv12 · RAG · Embeddings",
        bullets: [
          "Local model inference, GPU-backed serving, computer vision experiments, and AI integration in personal applications.",
        ],
      },
      {
        slug: "ai-research",
        title: "AI Research & Evaluation",
        description:
          "Reinforcement learning · Multi-agent systems · LLM agents · SustainDC · Experimental planning · Data analysis",
        bullets: [
          "Simulation experiments, structured prompts, action validation, literature review, reproducible workflows, result interpretation, and technical writing.",
        ],
      },
      {
        slug: "data-and-analytics",
        title: "Data Systems & Analytics",
        description:
          "PostgreSQL · Microsoft SQL Server · Data warehousing · ETL · Dimensional modeling · Power BI · Excel",
        bullets: [
          "Relational data modeling, OLTP/OLAP concepts, analytical reporting, and Python/SQL data workflows.",
        ],
      },
      {
        slug: "networking",
        title: "Networking & Systems",
        description:
          "TCP/IP · DNS · TLS · HTTP/HTTPS · Cisco · VLANs · Routing · Switching · Nginx · Traefik · VPNs",
        bullets: [
          "Container networking, load balancing, reverse proxies, network troubleshooting, Cloudflare and Zero Trust concepts, MOSN service-mesh concepts, and HashiCorp Vault.",
        ],
      },
      {
        slug: "observability",
        title: "Observability",
        description: "Prometheus · Grafana · OpenTelemetry · Loki · Tempo",
        bullets: [
          "Metrics, dashboards, logs, traces, connectivity checks, and practical service troubleshooting.",
        ],
      },
      {
        slug: "product-and-projects",
        title: "Product & Project Work",
        description:
          "User needs analysis · Requirements · Process documentation · Project coordination · Scheduling · Risk analysis · Stakeholder communication",
        bullets: [
          "Value propositions, early business models, pitch decks, and market research through MED-X.",
          "Course and event coordination, with familiarity in Agile/Scrum principles, roadmapping, and prioritization.",
        ],
      },
      {
        slug: "teaching-and-communication",
        title: "Teaching & Communication",
        description:
          "Student mentoring · Technical presentation · Public speaking · Team coordination · Event organization · Sponsorship outreach",
        bullets: [
          "Lab instruction, assignment and project review, technical documentation, and coordination across students, instructors, speakers, and sponsors.",
          "Tools include LaTeX, Word, PowerPoint, Excel, VS Code, Proteus, and AVR ATmega32.",
          "Languages: Persian and English.",
        ],
      },
    ],
  },
  {
    slug: "teaching-assistant",
    name: "Teaching Assistant",
    items: [
      {
        slug: "computer-engineering-ta",
        title: "Teaching Assistant · Computer Engineering",
        organization: "Isfahan University of Technology · Isfahan, Iran",
        description:
          "Teaching, mentoring, lab instruction, and course coordination across networking, IT management, technical communication, and embedded systems.",
        start: "Mar 2024",
        end: "Jan 2026",
        image: "/images/iut.png",
        bullets: [
          "IT Project Management: supported student projects, documentation, scheduling, risk analysis, technical reports, and evaluation.",
          "Fundamentals of Information Technology: helped students with IT concepts, assignments, and course materials.",
          "Head Teaching Assistant, Scientific and Technical Presentation: coordinated course workflows, reviewed technical documents, and evaluated presentations.",
          "Computer Networks and Network Laboratory: helped students configure Cisco routers and switches, VLANs, routing, and connectivity tests and diagnose network faults.",
          "Microprocessor: supported AVR ATmega32 programming, embedded-system concepts, and Proteus simulation.",
          "Digital Systems Design Laboratory: assisted with circuit-design concepts, lab exercises, and student project evaluation.",
          "Reviewed assignments and projects, answered technical questions, mentored students, and assisted with grading and course organization.",
        ],
      },
    ],
  },
  {
    slug: "community",
    name: "Community",
    items: [
      {
        slug: "iut-cessa",
        title: "Public Relations Coordinator",
        organization: "IUT Computer Engineering Scientific Association",
        description:
          "Coordinated communications, outreach, fundraising, and sponsorships for academic and technical events.",
        start: "Feb 2024",
        end: "May 2025",
        bullets: [
          "Worked with students, speakers, sponsors, academic members, and organizing teams to keep event information and activities coordinated.",
          "Helped turn an Open Source Day idea into a national event focused on IoT and open-source technologies with over 870 attendees.",
        ],
      },
      {
        slug: "sisoog-registration",
        title: "Registration Manager · Sisoog",
        organization: "Sisoog Embedded Systems & IoT Event",
        description:
          "Managed registration and check-in for more than 870 participants at a large in-person technical event.",
        start: "Nov 2024",
        bullets: [
          "Coordinated participant onboarding, queues, and on-site flow with the organizing team.",
        ],
      },
      {
        slug: "apachee-club",
        title: "Co-Head · APACHEE Club",
        organization: "Isfahan University of Technology",
        description:
          "Helped organize cybersecurity events, coordinate teams, and run the club's first CTF competition.",
        start: "Mar 2024",
        end: "Oct 2024",
        bullets: [
          "Supported event execution, public relations, sponsorship coordination, and scientific and technical content.",
          "Served as Deputy Executive Lead and Sponsorship Manager for the Escapachee CTF, contributing to planning and execution.",
          "Secured over 35 million Tomans in sponsorship funding for event logistics, prizes, and activities.",
        ],
      },
      {
        slug: "aicup",
        title: "Branding Manager",
        organization: "AICup National AI Competition",
        description:
          "Led branding and promotion with a team across LinkedIn, Telegram, and Instagram.",
        start: "Feb 2023",
        end: "Jan 2024",
        bullets: [
          "Coordinated promotional content and outreach for the competition.",
          "Built a Telegram bot to automate messages and support event communications.",
          "Helped attract more than 100 teams to participate in the competition.",
        ],
      },
      {
        slug: "iut-acm",
        title: "Executive & Branding Team Member",
        organization: "IUT ACM Student Chapter",
        description:
          "Worked with event staff and the branding team to promote the national IUT CPC programming competition, which attracted over 300 participants.",
        start: "Jan 2023",
        end: "Feb 2023",
      },
    ],
  },
];
