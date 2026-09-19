import { Project, SkillItem, Experience, Education, Certification } from '../types';

export const personalInfo = {
  name: "Nitheeswaran K",
  preferredName: "Nithish",
  title: "Full-Stack Developer & DevOps Enthusiast",
  headline: "Building intelligent web applications, modern cloud workflows, and responsive digital experiences.",
  email: "knitheeswaran3@gmail.com",
  phone: "+91 7339549422",
  location: "Coimbatore, Tamil Nadu, India",
  status: "Open for Full-Time & Internship Opportunities",
  bio: "Computer Science & Engineering student with a passion for modern software engineering, AI-driven applications, and automated cloud workflows. Experienced in DevOps CI/CD pipelines, React, TypeScript, Python, and scalable backend architectures.",
  careerObjective: "To grow as a modern tech professional by learning new-age technologies and contributing innovative solutions to the organization. To build a progressive career in a fast-evolving digital world by applying creativity, problem-solving skills, and continuous learning.",
  socials: {
    github: "https://github.com/NitNithish1",
    linkedin: "https://www.linkedin.com/in/nitheeswaran-k-63a49a36a/",
    leetcode: "https://leetcode.com/u/nithish_1245/",
  },
  languages: ["English", "Tamil"]
};

export const skillsData: SkillItem[] = [
  // Languages
  { name: "Java", category: "Languages", level: 85, iconName: "Coffee", highlight: true },
  { name: "Python", category: "Languages", level: 88, iconName: "Code", highlight: true },
  { name: "JavaScript (ES6+)", category: "Languages", level: 90, iconName: "FileCode", highlight: true },
  { name: "TypeScript", category: "Languages", level: 85, iconName: "Code2", highlight: true },
  { name: "SQL", category: "Languages", level: 82, iconName: "Database", highlight: true },
  { name: "HTML5 & CSS3", category: "Languages", level: 95, iconName: "Layout" },
  { name: "Dart", category: "Languages", level: 75, iconName: "Smartphone" },

  // Frontend & Mobile
  { name: "React.js", category: "Frontend & Mobile", level: 90, iconName: "Atom", highlight: true },
  { name: "Tailwind CSS", category: "Frontend & Mobile", level: 92, iconName: "Palette", highlight: true },
  { name: "Flutter", category: "Frontend & Mobile", level: 78, iconName: "Smartphone" },
  { name: "Responsive UI/UX", category: "Frontend & Mobile", level: 88, iconName: "MonitorSmartphone" },
  { name: "State Management", category: "Frontend & Mobile", level: 84, iconName: "Cpu" },

  // Backend & Cloud
  { name: "Node.js & Express", category: "Backend & Cloud", level: 85, iconName: "Server", highlight: true },
  { name: "FastAPI", category: "Backend & Cloud", level: 82, iconName: "Zap", highlight: true },
  { name: "Spring Boot", category: "Backend & Cloud", level: 76, iconName: "Layers" },
  { name: "MySQL", category: "Backend & Cloud", level: 84, iconName: "Database" },
  { name: "MongoDB", category: "Backend & Cloud", level: 80, iconName: "FolderTree" },
  { name: "Firebase", category: "Backend & Cloud", level: 82, iconName: "Flame" },
  { name: "RESTful APIs", category: "Backend & Cloud", level: 89, iconName: "Network" },

  // DevOps & Tools
  { name: "CI/CD Pipelines", category: "DevOps & Tools", level: 82, iconName: "GitBranch", highlight: true },
  { name: "Git & GitHub", category: "DevOps & Tools", level: 90, iconName: "Github", highlight: true },
  { name: "Postman", category: "DevOps & Tools", level: 86, iconName: "Send" },
  { name: "VS Code", category: "DevOps & Tools", level: 94, iconName: "Terminal" },
  { name: "Docker Basics", category: "DevOps & Tools", level: 78, iconName: "Box" },
  { name: "Gemini AI & CNN", category: "DevOps & Tools", level: 83, iconName: "Sparkles", highlight: true }
];

export const projectsData: Project[] = [
  {
    id: "plant-disease-detection",
    title: "AI Plant Disease Detection & Treatment",
    subtitle: "Computer Vision & Automated Agronomic Guidance",
    description: "An intelligent agricultural diagnostic web platform utilizing leaf imagery to accurately detect plant diseases, evaluate severity, and generate customized treatment guidance.",
    longDescription: "Engineered an AI-powered agro-diagnostic tool that bridges computer vision with practical agricultural recommendations. Farmers and agronomists can upload or capture leaf photos, receive instantaneous pathology classification using convolutional neural networks and Gemini Vision, and review actionable organic and chemical remediation steps.",
    tags: ["React.js", "TypeScript", "Python", "FastAPI", "Gemini Vision", "Firebase"],
    category: "AI & Full Stack",
    imagePlaceholder: "linear-gradient(135deg, #064e3b 0%, #065f46 50%, #022c22 100%)",
    githubUrl: "https://github.com/NitNithish1",
    liveUrl: "https://github.com/NitNithish1",
    features: [
      "Real-time leaf image scanning and pathology detection",
      "Convolutional Neural Network & Gemini Vision multi-stage classification",
      "Severity percentage estimation with visual heatmap breakdown",
      "Automated organic & chemical treatment protocol generation",
      "Firebase persistence for diagnosis history and regional crop trends"
    ],
    metrics: [
      { label: "Classification Accuracy", value: "94.8%" },
      { label: "Inference Speed", value: "< 1.2s" },
      { label: "Crop Varieties", value: "24+" }
    ]
  },
  {
    id: "smart-college-management",
    title: "Smart College Management System",
    subtitle: "Enterprise Academic ERP & Gemini Chatbot",
    description: "Cross-platform institutional management suite featuring attendance, marks, fees, timetable scheduling, and an integrated Gemini AI student performance mentor.",
    longDescription: "A unified full-stack academic platform supporting faculty, students, and administration. Features automated RFID/manual attendance recording, semester grade reporting, automated fee receipt generation, timetable scheduling, and a fine-tuned Gemini AI academic assistant delivering 24/7 student inquiry responses.",
    tags: ["Flutter", "Dart", "React", "Spring Boot", "Node.js", "MySQL", "Gemini AI"],
    category: "Mobile & ERP",
    imagePlaceholder: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #0f172a 100%)",
    githubUrl: "https://github.com/NitNithish1",
    liveUrl: "https://github.com/NitNithish1",
    features: [
      "Role-based access controls for Administrators, Faculty, and Students",
      "Comprehensive attendance tracking with percentage thresholds and automated alerts",
      "Interactive gradebook and fee status payment tracking",
      "Real-time push notifications and announcements",
      "Integrated Gemini AI chatbot for syllabus assistance and academic performance insights"
    ],
    metrics: [
      { label: "User Roles", value: "3 Tiers" },
      { label: "Core Modules", value: "8 Modules" },
      { label: "API Endpoints", value: "40+ REST" }
    ]
  },
  {
    id: "devops-cloud-pipeline",
    title: "Cloud CI/CD & Deployment Pipeline Hub",
    subtitle: "DevOps Observability & Workflow Automation",
    description: "Interactive continuous integration and deployment dashboard built during DevOps internship, visualizing build pipelines, container health, and deployment rollouts.",
    longDescription: "Developed as a key deliverable stemming from real-world DevOps experience at Vaizai Solutions. Provides development teams with visual telemetry over GitHub Actions workflows, Docker containerization stages, automated unit test suites, and zero-downtime deployment metrics.",
    tags: ["React", "TypeScript", "Node.js", "GitHub Actions", "Docker", "Tailwind CSS"],
    category: "DevOps & Cloud",
    imagePlaceholder: "linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e1b4b 100%)",
    githubUrl: "https://github.com/NitNithish1",
    liveUrl: "https://github.com/NitNithish1",
    features: [
      "Automated pipeline status tracking with multi-stage build logs",
      "Docker container lifecycle and artifact registry inspection",
      "Branch-level automated testing validation and code coverage metrics",
      "Instant rollback trigger simulation with environment variable guards",
      "Deployment telemetry and health status heartbeat checks"
    ],
    metrics: [
      { label: "Build Time Reduction", value: "35%" },
      { label: "Test Automation", value: "100%" },
      { label: "Deployment Health", value: "99.9%" }
    ]
  }
];

export const experienceData: Experience[] = [
  {
    role: "DevOps Intern",
    company: "Vaizai Solutions",
    location: "Coimbatore, India",
    period: "June 2026 - July 2026",
    type: "Internship",
    description: "Completed an intensive 1-month DevOps internship engaging in production-grade deployment workflows, CI/CD toolchains, and containerization best practices.",
    achievements: [
      "Gained hands-on experience in DevOps tooling, automated CI/CD pipelines, and cloud deployment workflows.",
      "Assisted in configuring automated build validation, code quality checks, and environment setup.",
      "Recognized by engineering mentors for high technical aptitude, sincerity, dedication, and professionalism."
    ],
    technologies: ["Git", "GitHub Actions", "CI/CD", "Linux", "Docker", "Deployment Workflows"]
  }
];

export const educationData: Education[] = [
  {
    degree: "B.E. in Computer Science and Engineering",
    institution: "V.S.B College of Engineering Technical Campus",
    location: "Coimbatore, India",
    period: "2023 - 2027",
    score: "CGPA: 7.5 / 10",
    description: "Focusing on core computer science foundations, algorithms & data structures, software architecture, database management, and emerging cloud technologies."
  },
  {
    degree: "H.S.C Higher Secondary Education",
    institution: "Little Flower Hr. Sec. School",
    location: "Tamil Nadu, India",
    period: "2021 - 2023",
    score: "Percentage: 67%",
    description: "Higher secondary education with a rigorous curriculum in Mathematics, Physics, Chemistry, and Computer Science."
  }
];

export const certificationsData: Certification[] = [
  {
    title: "IBM Certified: Python for Data Science & AI",
    issuer: "IBM",
    badgeColor: "from-blue-600 to-indigo-700"
  },
  {
    title: "NoviTech Certified: Data Analytics",
    issuer: "NoviTech R&D",
    badgeColor: "from-emerald-600 to-teal-700"
  },
  {
    title: "TCS iON Career Edge: Young Professional",
    issuer: "Tata Consultancy Services (TCS)",
    badgeColor: "from-purple-600 to-indigo-600"
  }
];
