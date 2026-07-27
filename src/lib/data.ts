import {
  Code2,
  Server,
  Wrench,
  Briefcase,
  GraduationCap,
} from "lucide-react";

// ============================================================
// 📝 DATA DIRI: DIMAS PITERA ARIYANTO (DARI GOOGLE DOCS)
// ============================================================

export const personalData = {
  name: "Dimas Pitera Ariyanto",
  tagline: "Back-End & Full Stack Developer",
  subtitle: "Specializing in PHP (Laravel & CodeIgniter), RESTful APIs, & Scalable Web Systems",
  location: "Yogyakarta, Indonesia",
  email: "dimas_pitera@yahoo.com",
  phone: "+62 967-536-5809",
  github: "https://github.com/DimasPiteraAriyanto",
  linkedin: "https://www.linkedin.com/in/dimas-pitera-ariyanto-6a4513220/",
  avatarUrl: "/avatar.png",
  cvUrl: "/cv.pdf",
  bio: `Results-driven Back-end and Full Stack Web Developer with nearly 5 years of experience building, optimizing, and maintaining scalable web applications. Strong expertise in PHP (Laravel & CodeIgniter), robust Object-Oriented Programming (OOP) principles, relational & NoSQL databases, and modern web technologies. Focused on performance, system reliability, clean code practices, and automated deployment pipelines.`,
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const skillCategories = [
  {
    title: "Backend & Core",
    icon: Server,
    skills: [
      "PHP",
      "Laravel Framework",
      "CodeIgniter",
      "OOP",
      "RESTful API Development",
      "Node.js",
    ],
  },
  {
    title: "Frontend & UI",
    icon: Code2,
    skills: [
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "Bootstrap",
      "HTML5 / CSS3",
      "Wireframing",
    ],
  },
  {
    title: "DevOps, DB & Tools",
    icon: Wrench,
    skills: [
      "MySQL / PostgreSQL",
      "MongoDB (NoSQL)",
      "Git (Version Control)",
      "CI/CD Pipelines",
      "Jira (Agile/Scrum)",
      "AI Coding Tools",
    ],
  },
];

export const experiences = [
  {
    company: "Software & IT Training Center",
    position: "Full Stack Programmer | IT Training Instructor",
    duration: "March 2024 – Present",
    descriptions: [
      "Architected and optimized secure backend services using PHP (Laravel & CodeIgniter), adhering to clean code architecture and OOP principles.",
      "Designed, developed, and deployed robust REST APIs and automated CI/CD pipelines within agile teams using Jira and Git.",
      "Managed and integrated structured relational databases (MySQL, PostgreSQL) alongside MongoDB (NoSQL) for high-throughput client data storage.",
      "Leveraged AI-assisted coding tools (GitHub Copilot, ChatGPT) to accelerate delivery timelines, conduct debugging, and optimize performance.",
      "Delivered bilingual technical IT training sessions (English / Indonesian) for 20+ participants per batch, mentoring trainees in modern backend engineering.",
    ],
  },
  {
    company: "Tech Application Services",
    position: "Project Manager | Fullstack Web Developer",
    duration: "February 2022 – February 2024",
    descriptions: [
      "Led the end-to-end web application development lifecycle (SDLC) from requirements gathering, system workflow design, to testing and final deployment.",
      "Architected and optimized secure backend services using PHP (Laravel), adhering to clean code architecture and OOP principles.",
      "Developed and maintained client-facing business applications utilizing CodeIgniter, JavaScript, and relational databases to improve operational performance.",
      "Conducted intensive stakeholder consultations using Jira and Git for transparent collaboration, transforming requirements into engineering blueprints.",
    ],
  },
];

export interface ProjectItem {
  name: string;
  description: string;
  tech: string[];
  demoUrl: string;
  githubUrl: string;
  images: {
    url: string;
    title: string;
    caption: string;
  }[];
}

export const projects: ProjectItem[] = [
  {
    name: "Enterprise Laravel REST API & Microservices",
    description:
      "Secure and scalable RESTful API service built with Laravel, featuring JWT authentication, automated CI/CD pipelines, and high-performance SQL query optimization.",
    tech: ["PHP", "Laravel", "PostgreSQL", "REST API", "CI/CD", "Git"],
    demoUrl: "https://github.com/DimasPiteraAriyanto",
    githubUrl: "https://github.com/DimasPiteraAriyanto",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
        title: "REST API Endpoint & Routing Architecture",
        caption: "Clean MVC architecture & high-throughput request handling with Laravel & PostgreSQL.",
      },
      {
        url: "https://images.unsplash.com/photo-1618401471353-b98aedd04e11?auto=format&fit=crop&w=1200&q=80",
        title: "Automated CI/CD & Deployment Pipeline",
        caption: "Git workflow, automated testing, and zero-downtime deployment pipelines.",
      },
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        title: "Swagger API Documentation & Analytics",
        caption: "Interactive OpenAPI documentation and real-time response time monitoring.",
      },
    ],
  },
  {
    name: "High-Throughput NoSQL & Relational DB Architecture",
    description:
      "Multi-database web architecture integrating MySQL and MongoDB for high-throughput client data storage, analytics, and rapid reporting.",
    tech: ["Laravel", "PHP", "MongoDB", "MySQL", "CodeIgniter"],
    demoUrl: "https://github.com/DimasPiteraAriyanto",
    githubUrl: "https://github.com/DimasPiteraAriyanto",
    images: [
      {
        url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
        title: "Hybrid Relational & NoSQL Database Schema",
        caption: "MySQL relational integrity combined with MongoDB document speed.",
      },
      {
        url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80",
        title: "Real-time Data Analytics & Dashboard",
        caption: "Interactive reporting dashboard for high-volume transactions and system health.",
      },
      {
        url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
        title: "Query Optimization & Load Testing",
        caption: "Database query profiling achieving up to 40% performance gain under high loads.",
      },
    ],
  },
  {
    name: "Interactive IT Training & Learning System",
    description:
      "Full-stack web application designed for interactive technical training delivery, participant progress tracking, and bilingual evaluation.",
    tech: ["React.js", "Laravel", "Tailwind CSS", "JavaScript", "REST API"],
    demoUrl: "https://github.com/DimasPiteraAriyanto",
    githubUrl: "https://github.com/DimasPiteraAriyanto",
    images: [
      {
        url: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
        title: "Interactive Trainee Portal Dashboard",
        caption: "Modern glassmorphism UI for course materials, video lectures, and live code exercises.",
      },
      {
        url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
        title: "Live Code Evaluation & Submission",
        caption: "Real-time code reviewer tool for 20+ trainees per batch with instant feedback.",
      },
      {
        url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
        title: "Bilingual Mentoring & Analytics Module",
        caption: "Comprehensive progress tracking for both English and Indonesian training tracks.",
      },
    ],
  },
  {
    name: "Business Operations & Management Portal",
    description:
      "Client-facing enterprise web application built using CodeIgniter and JavaScript to streamline workflow management and business analytics.",
    tech: ["CodeIgniter", "PHP", "JavaScript", "Bootstrap", "MySQL"],
    demoUrl: "https://github.com/DimasPiteraAriyanto",
    githubUrl: "https://github.com/DimasPiteraAriyanto",
    images: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        title: "Executive Business Overview Portal",
        caption: "Centralized dashboard for tracking project status, client requests, and SLAs.",
      },
      {
        url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
        title: "Automated Workflow Engine & Approvals",
        caption: "Streamlined operational workflow replacing manual spreadsheets with automated steps.",
      },
      {
        url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
        title: "Reporting & Stakeholder Integration",
        caption: "Exportable PDF/Excel reports with Jira and Git workflow integration.",
      },
    ],
  },
];

export const education = [
  {
    institution: "STMIK AKAKOM (Universitas Teknologi Digital Indonesia - UTDI)",
    degree: "S1 Sistem Informasi (Bachelor of Information Systems)",
    year: "Graduated: 2017 – 2021",
    description:
      "IPK 3.66 / 4.00 — Focus on Software Engineering, Database Systems, & System Architecture",
  },
];

export const sectionIcons = {
  experience: Briefcase,
  education: GraduationCap,
};
