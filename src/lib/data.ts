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
  tagline: "Full Stack Developer",
  subtitle: "Specializing in PHP (Laravel & CodeIgniter), Node.js, RESTful APIs, & Scalable Web Systems",
  location: "DI Yogyakarta, Indonesia",
  email: "dimas_pitera@yahoo.com",
  phone: "+62 896-7536-5809",
  github: "https://github.com/DimasPiteraAriyanto",
  linkedin: "https://www.linkedin.com/in/dimas-pitera-ariyanto-6a4513220/",
  avatarUrl: "/avatar.png",
  cvUrl: "/cv.pdf",
  bio: `Saya seorang Full Stack Web Developer dengan pengalaman hampir 5 tahun dalam merancang, membangun, dan memelihara aplikasi web berskala tinggi. Mahir dalam pengembangan backend berbasis PHP (Laravel, CodeIgniter) dan Node.js (Express.js), serta frontend modern menggunakan React.js, Next.js, dan Tailwind CSS.

Selain kemampuan pemrograman, saya berpengalaman memimpin tim teknis (Project Management), mengelola sprint Agile, serta terbiasa dengan deployment ke VPS/hosting/server, otomatisasi CI/CD, dan pemahaman dasar jaringan komputer.`,
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
      "PHP (Laravel 13 & CodeIgniter)",
      "Node.js (Puppeteer Stealth, Express.js)",
      "Python 3.12 (Telegram Bot, Scrapers)",
      "RESTful API & JWT Authentication",
      "OOP & Clean Architecture",
      "OAuth 2.0 & Web Security",
    ],
  },
  {
    title: "Frontend & UI",
    icon: Code2,
    skills: [
      "JavaScript (ES6+)",
      "React.js & Next.js 16",
      "Tailwind CSS v4 & CSS3",
      "Blade Templating & Dynamic Icons",
      "Axios & State Management",
      "Responsive UI/UX Best Practices",
    ],
  },
  {
    title: "DevOps, DB & Tools",
    icon: Wrench,
    skills: [
      "MySQL, PostgreSQL & SQLite3",
      "MongoDB (NoSQL)",
      "Google Cloud APIs (Sheets/Drive)",
      "Railway & VPS Server Deployment",
      "Git, GitHub & CI/CD Pipelines",
      "Red Team Pentest & Security Audit",
    ],
  },
];

export const experiences = [
  {
    company: "Software & IT Training Center",
    position: "Full Stack Programmer | IT Training Instructor",
    duration: "March 2024 – Present",
    descriptions: [
      "Architected and optimized secure backend services using PHP (Laravel & CodeIgniter) and Python, adhering to clean code architecture and OOP principles.",
      "Designed, developed, and deployed robust REST APIs, Telegram Automation Bots, and automated CI/CD pipelines within agile teams using Jira and Git.",
      "Managed and integrated structured relational databases (MySQL, PostgreSQL, SQLite) alongside MongoDB (NoSQL) for high-throughput client data storage.",
      "Leveraged AI-assisted coding tools (GitHub Copilot, ChatGPT, Claude) to accelerate delivery timelines, conduct debugging, and optimize performance.",
      "Delivered bilingual technical IT training sessions (English / Indonesian) for 20+ participants per batch, mentoring trainees in modern full-stack backend engineering.",
    ],
  },
  {
    company: "Tech Application Services",
    position: "Project Manager | Fullstack Web Developer",
    duration: "February 2022 – February 2024",
    descriptions: [
      "Led the end-to-end web application development lifecycle (SDLC) from requirements gathering, system workflow design, to testing and final deployment.",
      "Architected and optimized secure backend services using PHP (Laravel) and Node.js, adhering to clean code architecture and OOP principles.",
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
    name: "Master System & Multi-App Admin Panel (Laravel 13)",
    description:
      "Platform Master Superadmin Dashboard & Single Sign-On (SSO) Hub berbasis Laravel 13 & Tailwind CSS v4 dengan 3-Step Permission Checkpoint System, navigasi menu dinamis hirarkis, serta laporan PDF resmi ber-QR Code.",
    tech: ["Laravel 13", "PHP 8.2", "Tailwind CSS v4", "MySQL", "Single Sign-On", "Blade"],
    demoUrl: "https://github.com/DimasPiteraAriyanto",
    githubUrl: "https://github.com/DimasPiteraAriyanto",
    images: [
      {
        url: "/projects/laravel_master_system.png",
        title: "Master Superadmin & SSO App Switcher Dashboard",
        caption: "Manajemen multi-aplikasi enterprise, 3-step permission matrix, dan navigasi menu hirarkis.",
      },
    ],
  },
  {
    name: "FinanceBot Telegram & Cashflow Tracker",
    description:
      "Bot Telegram manajemen keuangan pribadi & pelacakan cashflow otomatis terintegrasi Google Sheets & Drive API, grafik statistik (Matplotlib), pengingat otomatis (APScheduler), dan monitoring budget.",
    tech: ["Python 3.12", "Telegram Bot API", "Google Sheets API", "Google Drive API", "Matplotlib", "Pandas"],
    demoUrl: "https://github.com/DimasPiteraAriyanto",
    githubUrl: "https://github.com/DimasPiteraAriyanto",
    images: [
      {
        url: "/projects/financebot_telegram.png",
        title: "Bot Telegram Pencatatan Keuangan Otomatis",
        caption: "Pencatatan transaksi <5 detik, upload foto struk ke Google Drive, dan grafik statistik bulanan.",
      },
    ],
  },
  {
    name: "Multi-Source Institution & Contact Web Scraper",
    description:
      "Engine web scraper otomatis berbasis Node.js & Puppeteer Stealth dengan DoH DNS bypass untuk mengekstrak data instansi, universitas, pejabat pimpinan, serta kontak publik terstruktur ke SQLite & Excel.",
    tech: ["Node.js", "Puppeteer Stealth", "Cheerio", "SQLite3", "ExcelJS", "Winston Logger"],
    demoUrl: "https://github.com/DimasPiteraAriyanto",
    githubUrl: "https://github.com/DimasPiteraAriyanto",
    images: [
      {
        url: "/projects/node_scraper.png",
        title: "Web Scraper Architecture & Target Discovery",
        caption: "Scraper 2-tahap dengan proteksi anti-duplikasi SQLite master DB dan ekspor Excel otomatis.",
      },
    ],
  },
  {
    name: "Red Team Pengecekan Web",
    description:
      "Toolkit otomasi pengujian keamanan (*penetration testing*) berbasis Python untuk analisis kerentanan web, pemindaian celah keamanan (SQLi, File Manipulation, Defacement, Simulasi DDoS), dan laporan audit keamanan.",
    tech: ["Python", "Security Testing", "Pentest Automation", "SQLi/DDoS Scan"],
    demoUrl: "https://github.com/DimasPiteraAriyanto",
    githubUrl: "https://github.com/DimasPiteraAriyanto",
    images: [
      {
        url: "/projects/redteam.png",
        title: "Engine & Dashboard Pengecekan Keamanan Web",
        caption: "Pemindaian otomatis celah kerentanan web, simulasi beban, dan laporan audit keamanan.",
      },
    ],
  },
  {
    name: "SIMPOSYANDU (Sistem Informasi Management Posyandu)",
    description:
      "Aplikasi Sistem Informasi Management Posyandu untuk digitalisasi pencatatan data kesehatan ibu & anak, pemantauan tumbuh kembang balita, serta pelaporan rekapitulasi data Posyandu secara terstruktur.",
    tech: ["PHP", "CodeIgniter", "MySQL", "Bootstrap", "REST API"],
    demoUrl: "https://github.com/DimasPiteraAriyanto",
    githubUrl: "https://github.com/DimasPiteraAriyanto",
    images: [
      {
        url: "/projects/simposyandu.png",
        title: "Dashboard Management Posyandu",
        caption: "Digitalisasi rekam medis Posyandu dan grafik pemantauan statistik tumbuh kembang anak.",
      },
    ],
  },
  {
    name: "SIMFKS (Sistem Informasi Management Forum Kabupaten Sehat)",
    description:
      "Aplikasi Sistem Informasi Management Forum Kabupaten Sehat untuk pengolahan data indikator tatanan kabupaten sehat, pencatatan kegiatan kelembagaan FKS, serta penyusunan laporan kinerja terpadu.",
    tech: ["PHP", "CodeIgniter", "MySQL", "JavaScript", "Bootstrap"],
    demoUrl: "https://github.com/DimasPiteraAriyanto",
    githubUrl: "https://github.com/DimasPiteraAriyanto",
    images: [
      {
        url: "/projects/simfks.png",
        title: "Portal Indikator Forum Kabupaten Sehat",
        caption: "Pendataan tatanan indikator daerah sehat dan rekapitulasi kegiatan kelembagaan FKS.",
      },
    ],
  },
  {
    name: "Inventory Obat Apotek Rafael",
    description:
      "Sistem informasi inventaris dan stok obat Apotek Rafael berbasis Laravel dengan otentikasi JWT, pemantauan stok real-time, pelacakan tanggal kedaluwarsa (expiry tracking), dan transaksi penjualan.",
    tech: ["Laravel", "PHP", "MySQL", "JWT Authentication", "REST API"],
    demoUrl: "https://github.com/DimasPiteraAriyanto",
    githubUrl: "https://github.com/DimasPiteraAriyanto",
    images: [
      {
        url: "/projects/apotek_rafael.png",
        title: "Manajemen Inventaris & Stok Obat Apotek Rafael",
        caption: "Pencatatan stok obat apotek real-time dengan sistem otentikasi JWT & peringatan expired.",
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
