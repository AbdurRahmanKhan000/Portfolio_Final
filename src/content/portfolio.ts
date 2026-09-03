/**
 * All editable site content lives here.
 * Update text, links and lists in this single file.
 */

export const profile = {
  name: "Abdur Rahman Khan",
  roles: ["DevOps & Cloud Engineer", "Ethical Hacker", "Programming Expert — 8+ Languages"],
  tagline:
    "A DevOps and Cloud Computing engineer, ethical hacker, and software engineer with hands-on professional experience across more than eight programming languages — designing, securing and automating systems end to end.",
  location: "Peshawar, Pakistan — open to global opportunities",
  email: "abdurrehman200khan@gmail.com",
  github: "https://github.com/AbdurRahmanKhan000",
  linkedin: "https://www.linkedin.com/in/abdur-rahman-khan-a51ba33ab/",
  linkedinLabel: "Abdur Rahman Khan | LinkedIn",
  summary:
    "Motivated Computer Science undergraduate with a strong academic record and over 2.5 years of hands-on engineering experience. I work across DevOps, cloud computing, ethical hacking and multi-language software development — designing data models, automating delivery pipelines, hardening systems and shipping full applications end to end.",
  bio: [
    "My core domains are DevOps, Cloud Computing, Ethical Hacking and Programming across many languages. I don't only study concepts — I ship complete systems: designing the data model, writing the backend, building the interface and making it run reliably in production.",
    "On the security side I work daily in Linux, use Shodan and other reconnaissance search engines, and apply structured methodology to enumeration, analysis and reporting. On the engineering side I build CI/CD pipelines, infrastructure as code, observability and cloud-native delivery.",
    "I also work extensively with AI systems — over 20 to 25 different AI agents and assistants are part of my everyday workflow for coding, research, automation, design and analysis.",
  ],
  stats: [
    { k: "8+", v: "Programming languages" },
    { k: "25+", v: "AI agents used" },
    { k: "9+", v: "Shipped projects" },
    { k: "2.5+", v: "Years hands-on experience" },
  ],
};

export const coreDomains = [
  {
    title: "DevOps Engineering",
    body: "CI/CD pipelines, pipeline automation, configuration management, infrastructure as code, observability and metrics, Git-based workflows.",
  },
  {
    title: "Cloud Computing",
    body: "AWS, Google Cloud and Azure DevOps fundamentals — cloud-native architecture, managed services, deployment and data engineering foundations.",
  },
  {
    title: "Ethical Hacking",
    body: "Linux-first workflow, reconnaissance with Shodan and OSINT search engines, vulnerability analysis, hardening and structured reporting.",
  },
  {
    title: "Programming & Software Engineering",
    body: "Java, C++, C, Python, JavaScript, SQL and more — OOP, MVC, SDLC, software architecture, database design, testing and QA.",
  },
];

export type Project = {
  name: string;
  summary: string;
  stack: string[];
  href?: string;
  demo?: string;
  category: "ark" | "selected";
};

export const projects: Project[] = [
  {
    name: "arkDownload",
    category: "ark",
    summary:
      "Multi-platform desktop media extractor and transcoder for 1,700+ platforms, with asynchronous PyQt6 workers, yt-dlp stream extraction, FFmpeg muxing and browser-level TLS impersonation via curl-cffi.",
    stack: ["Python", "PyQt6", "yt-dlp", "FFmpeg", "curl-cffi"],
  },
  {
    name: "arkPrivate",
    category: "ark",
    summary:
      "Encrypted desktop VPN system that captures Layer 3 traffic through Wintun or TUN adapters, applies WireGuard cryptography, manages routes and enforces a firewall kill-switch.",
    stack: ["Python", "WireGuard", "Wintun / TUN", "UDP", "nftables"],
  },
  {
    name: "arkSnap",
    category: "ark",
    summary:
      "High-performance screen capture and 60 FPS recording utility with a floating PyQt6 palette, precision snipping overlay, mss capture buffers and asynchronous FFmpeg hardware encoding.",
    stack: ["Python", "PyQt6", "mss", "FFmpeg", "QThread"],
  },
  {
    name: "arkBrowse",
    category: "ark",
    summary:
      "Privacy-first custom desktop browser built on QtWebEngine and Chromium, with HTTPS upgrades, tracking-parameter filtering, persistent themes and standalone PyInstaller packaging.",
    stack: ["Python", "PyQt6", "QtWebEngine", "PyInstaller", "QSettings"],
  },
  {
    name: "arkEngine",
    category: "ark",
    summary:
      "Asynchronous privacy metasearch backend for arkBrowse. FastAPI and httpx concurrently query public providers, strip tracking redirects and return clean, local-first results without paid API keys.",
    stack: ["Python", "FastAPI", "httpx", "HTML Parsing", "Async I/O"],
  },
  {
    name: "arkType",
    category: "ark",
    summary:
      "Focused typing performance platform with multiple test modes, live WPM and accuracy tracking, guided learning, theme personalization and downloadable achievement certificates.",
    stack: ["TypeScript", "React", "Responsive UI", "PDF Generation"],
    href: "https://github.com/AbdurRahmanKhan000/arkType",
    demo: "https://arktype.vercel.app/",
  },
  {
    name: "GitGuard",
    category: "selected",
    summary:
      "Zero-telemetry system-wide pre-commit shield that blocks credential leaks before they enter Git history, using diff-only scanning, pre-compiled regex, multithreaded auditing and fail-safe protection defaults.",
    stack: ["Python 3.11", "CustomTkinter", "Git Hooks", "Regex", "Threading"],
  },
  {
    name: "Automated Media Forensics & Threat Analysis",
    category: "selected",
    summary:
      "Multi-threaded forensic pipeline that inspects EXIF privacy leaks, exposes image manipulation with OpenCV ELA and detects steganographic payloads with YARA, backed by MongoDB and SQLite.",
    stack: ["Python", "CustomTkinter", "OpenCV", "YARA", "MongoDB"],
    href: "https://github.com/AbdurRahmanKhan000/Media-Forensics-Pipeline",
  },
  {
    name: "DocuBrain",
    category: "selected",
    summary:
      "Privacy-first desktop AI document intelligence platform running RAG fully offline with Ollama, LangChain4j, JavaFX and pooled MySQL persistence.",
    stack: ["JavaFX", "LangChain4j", "Ollama", "MySQL", "HikariCP"],
  },
  {
    name: "WarWind",
    category: "selected",
    summary:
      "AI-powered strategic intelligence and cyber defense platform for simulating and visualising geopolitical, cybersecurity and economic scenarios through REST APIs and lightweight ML.",
    stack: ["Java", "Spring Boot", "MongoDB", "Python", "JavaScript"],
    href: "https://github.com/AbdurRahmanKhan000/WarWind",
  },
  {
    name: "Auto Grading Project",
    category: "selected",
    summary:
      "Automated grading system that evaluates student submissions with consistent rule-driven scoring and structured result reporting.",
    stack: ["Python", "Automation", "Data Processing"],
    href: "https://github.com/AbdurRahmanKhan000/Auto-Grading-Project",
  },
  {
    name: "MediaCore Ultra Studio",
    category: "selected",
    summary:
      "Batch-friendly desktop media processing studio for converting, editing and exporting audio and video assets through one streamlined workflow.",
    stack: ["Python", "Media Processing", "Desktop UI"],
    href: "https://github.com/AbdurRahmanKhan000/MediaCore-Ultra-Studio",
  },
  {
    name: "ResearchPilot AI",
    category: "selected",
    summary:
      "AI research workspace for PDF analysis, citation-backed Q&A, paper comparison, literature review generation and multi-format exports.",
    stack: ["Python 3.11", "PySide6", "RAG", "MySQL", "MongoDB"],
  },
  {
    name: "Health Tracker System",
    category: "selected",
    summary:
      "Desktop wellness application pairing water intake monitoring with a food diary, calorie calculations, MVC structure and real-time JDBC updates.",
    stack: ["JavaFX", "MySQL", "JDBC", "Maven"],
    href: "https://github.com/AbdurRahmanKhan000/Health-Tracker-System",
  },
  {
    name: "Secure Offline Vault",
    category: "selected",
    summary:
      "Offline zero-trust web app for encrypted journaling, notes and file storage using PBKDF2 key derivation, AES-GCM encryption and portable JSON backups.",
    stack: ["HTML5", "CSS3", "JavaScript ES6+", "Web Crypto API"],
  },
  {
    name: "MediQuery",
    category: "selected",
    summary:
      "AI-augmented medicine information system that maps natural-language symptoms to structured pharmaceutical data and parameterized SQL over a normalized schema.",
    stack: ["Python", "Flask", "MySQL 8.0", "Gemini 1.5"],
  },
];

export const arkProjects = projects.filter((project) => project.category === "ark");
export const selectedProjects = projects.filter((project) => project.category === "selected");

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: [
      "Java",
      "Python",
      "C++",
      "C",
      "JavaScript (ES6+)",
      "SQL",
      "HTML5",
      "CSS3",
      "Embedded C/C++",
    ],
  },
  {
    title: "DevOps & Cloud",
    items: [
      "CI/CD Pipelines",
      "Pipeline Engineering & Automation",
      "Infrastructure as Code",
      "Configuration Management",
      "Observability & Metrics",
      "AWS",
      "Google Cloud",
      "Azure DevOps",
      "Vercel",
      "Git-Based Workflows",
    ],
  },
  {
    title: "Ethical Hacking & Security",
    items: [
      "Linux (Kali / Ubuntu)",
      "Reconnaissance & OSINT",
      "Shodan",
      "Vulnerability Assessment",
      "Network Enumeration",
      "System Hardening",
      "Security Reporting",
    ],
  },
  {
    title: "AI / ML & Data",
    items: [
      "Machine Learning Fundamentals",
      "MLOps",
      "Neural Networks & Deep Learning",
      "RAG & Embeddings",
      "Data Mining",
      "Data Science & Analytics",
    ],
  },
  {
    title: "Backend & Databases",
    items: [
      "Spring Boot",
      "Flask",
      "REST APIs",
      "MySQL Server",
      "SQLite",
      "MongoDB",
      "Database Design & DBMS",
      "Normalisation (3NF)",
    ],
  },
  {
    title: "Frontend & UI",
    items: [
      "Tailwind CSS",
      "Responsive Design",
      "JavaFX",
      "PySide6",
      "PyQt6",
      "QtWebEngine",
      "CustomTkinter",
      "Figma",
      "Canva",
    ],
  },
  {
    title: "Concepts & Methodologies",
    items: [
      "OOP & MVC",
      "SDLC",
      "Software Architecture",
      "Agile & Scrum",
      "Requirements Analysis",
      "QA & Testing",
      "API Integration",
      "System Analysis",
      "Project Management",
    ],
  },
  {
    title: "Professional Strengths",
    items: [
      "Analytical Problem Solving",
      "Fast Learning Ability",
      "Attention to Detail",
      "Effective Communication",
      "Adaptability",
    ],
  },
];

export type ToolGroup = { title: string; note: string; items: string[] };

export const toolGroups: ToolGroup[] = [
  {
    title: "Development Tools & Platforms",
    note: "Daily engineering environment",
    items: [
      "Visual Studio Code",
      "PyCharm",
      "IntelliJ IDEA",
      "GitHub",
      "GitHub Copilot",
      "Git",
      "Maven",
      "Vercel",
      "Docker",
      "Postman",
      "FFmpeg",
      "yt-dlp",
      "PyInstaller",
      "Ollama",
    ],
  },
  {
    title: "Linux & Systems",
    note: "Primary working environment",
    items: [
      "Linux (Kali)",
      "Linux (Ubuntu)",
      "Bash / Shell",
      "systemd",
      "SSH & Remote Ops",
      "Virtualisation (VMware / VirtualBox)",
      "WSL",
    ],
  },
  {
    title: "Ethical Hacking Toolkit",
    note: "Reconnaissance, analysis and hardening",
    items: [
      "Shodan",
      "Nmap",
      "Wireshark",
      "Burp Suite",
      "Metasploit",
      "Hydra",
      "John the Ripper",
      "Aircrack-ng",
      "Nikto",
      "SQLMap",
      "OWASP ZAP",
      "Gobuster",
    ],
  },
  {
    title: "Search Engines & OSINT",
    note: "Intelligence gathering across my career",
    items: [
      "Shodan",
      "Censys",
      "ZoomEye",
      "FOFA",
      "Google Dorking",
      "GreyNoise",
      "VirusTotal",
      "Hunter.io",
      "crt.sh",
      "Wayback Machine",
      "Have I Been Pwned",
      "DuckDuckGo",
      "Bing",
      "Yandex",
    ],
  },
  {
    title: "Cloud & DevOps Platforms",
    note: "Delivery and infrastructure",
    items: [
      "AWS",
      "Google Cloud",
      "Azure DevOps",
      "GitHub Actions",
      "Terraform (IaC)",
      "Ansible",
      "Grafana",
      "Prometheus",
    ],
  },
  {
    title: "Design & Productivity",
    note: "Interfaces and documentation",
    items: ["Figma", "Canva", "Notion", "Draw.io", "Excel / Sheets"],
  },
];

export type AgentGroup = { title: string; items: string[] };

export const aiAgents: AgentGroup[] = [
  {
    title: "Conversational & Reasoning",
    items: [
      "ChatGPT",
      "Claude",
      "Google Gemini",
      "DeepSeek",
      "Grok",
      "Perplexity AI",
      "Microsoft Copilot",
      "Mistral Le Chat",
      "Qwen Chat",
      "Meta AI (Llama)",
    ],
  },
  {
    title: "Coding Agents",
    items: [
      "GitHub Copilot",
      "OpenAI Codex",
      "Claude Code",
      "Cursor",
      "Windsurf",
      "Lovable",
      "Replit AI",
      "Bolt.new",
      "Gemini CLI",
      "v0 by Vercel",
      "Tabnine",
      "Blackbox AI",
    ],
  },
  {
    title: "Local & Self-Hosted",
    items: ["Ollama", "LM Studio", "Llama 3.2", "Nomic Embed Text", "LangChain4j Agents"],
  },
  {
    title: "Research, Media & Automation",
    items: [
      "NotebookLM",
      "Elicit",
      "Napkin AI",
      "Midjourney",
      "Leonardo AI",
      "ElevenLabs",
      "Runway",
      "n8n AI Agents",
      "Zapier AI",
    ],
  },
];

export type Certification = { title: string; issuer: string; detail?: string };

export const certifications: Certification[] = [
  { title: "DevOps Essentials", issuer: "IBM Developer Skills Network — Coursera" },
  { title: "Ethical Hacker", issuer: "Cisco Networking Academy" },
  { title: "Deep Learning", issuer: "Cisco Networking Academy" },
  {
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy with OpenEDG Python Institute",
  },
  { title: "Introduction to Neural Network", issuer: "Simplilearn SkillUP" },
  { title: "Introduction to Data Mining Course", issuer: "Simplilearn SkillUP" },
  { title: "Mathematics for Machine Learning", issuer: "Simplilearn SkillUP" },
  {
    title: "Microsoft DevOps Engineering Professional Certificate",
    issuer: "Microsoft — Coursera",
    detail:
      "Five-course specialization: DevOps Platforms and Source Control · Pipeline Engineering and Automation · Cloud Native and IaC Management · Observability and Metrics · Launch Your DevOps Engineering Career",
  },
  { title: "IBM Robotic Process Automation, Basic I", issuer: "IBM Training" },
  { title: "Introduction to Agile Development and Scrum", issuer: "IBM — Coursera" },
  { title: "Introduction to Cloud Computing", issuer: "IBM — Coursera" },
  { title: "AWS Cloud Practitioner Essentials", issuer: "AWS Training and Certification" },
  {
    title: "Introduction to Generative AI — Art of the Possible",
    issuer: "AWS Training and Certification",
    detail: "Completed February 2026",
  },
  {
    title: "Introduction to Machine Learning — Art of the Possible",
    issuer: "AWS Training and Certification",
  },
  { title: "Data Engineering on AWS — Foundations", issuer: "AWS Training and Certification" },
  { title: "Machine Learning Operations for Generative AI", issuer: "Google Cloud" },
  {
    title: "Use Machine Learning APIs on Google Cloud",
    issuer: "Google Cloud",
    detail: "Intermediate skill badge",
  },
  { title: "Configuration Management and the Cloud", issuer: "Google — Coursera" },
  { title: "Using Python to Interact with the Operating System", issuer: "Google — Coursera" },
  {
    title: "Frontend Web Development",
    issuer: "LearnkartS — Coursera",
    detail:
      "Three-course specialization: Learn HTML — Build Your First Website from Scratch · Master CSS — Responsive Websites with Flexbox, Grid and SCSS · Tailwind CSS Mastery — Modern UI Design and Responsive Layouts",
  },
  {
    title: "Search Engine Optimization with Squarespace",
    issuer: "Coursera",
    detail: "Project certificate",
  },
  { title: "Customer Experience for Business Success", issuer: "HP LIFE — HP Foundation" },
  {
    title: "Data Science and Analytics",
    issuer: "HP LIFE — HP Foundation",
    detail: "Completed June 2026",
  },
  {
    title: "AI for Business Professionals",
    issuer: "HP LIFE — HP Foundation",
    detail: "Completed June 2026",
  },
  { title: "Fundamentals of Java Programming", issuer: "Board Infinity — Coursera" },
];

export type EducationItem = {
  institution: string;
  location: string;
  qualification: string;
  period: string;
  detail?: string;
};

export const education: EducationItem[] = [
  {
    institution: "University of Engineering & Technology (UET)",
    location: "Peshawar, PK",
    qualification: "BS Computer Science",
    period: "Expected graduation 2029",
    detail: "Current CGPA 3.8 / 4.0.",
  },
  {
    institution: "Islamia College (BISE Peshawar)",
    location: "Peshawar, PK",
    qualification: "Intermediate (FSc — ICS)",
    period: "Completed 2025",
  },
  {
    institution: "BISE Peshawar",
    location: "Peshawar, PK",
    qualification: "Matriculation (Pre-Medical)",
    period: "Completed 2023",
  },
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Tools & AI", to: "/tools" },
  { label: "Certifications", to: "/certifications" },
  { label: "Contact", to: "/contact" },
];
