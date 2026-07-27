# 🚀 Interactive Portfolio — Dimas Pitera Ariyanto

Portfolio web modern, interaktif, dan performan tinggi untuk **Dimas Pitera Ariyanto** (Back-End & Full Stack Web Developer). Dibangun menggunakan **Next.js 16 (App Router)**, **TypeScript**, **Three.js (WebGL 3D)**, dan **Tailwind CSS v4** dengan estetika *Dark Orange/Amber Glamour & Glassmorphism*.

---

## 🛠️ Tech Stack & Tools

| Layer | Teknologi / Library | Deskripsi |
|-------|--------------------|-----------|
| **Framework** | **Next.js 16** (App Router) | React framework modern dengan Server Components & SSG |
| **Language** | **TypeScript** | Type-safety penuh untuk reliabilitas kode |
| **3D Graphics** | **Three.js** | WebGL engine untuk latar belakang 3D interaktif |
| **Styling** | **Tailwind CSS v4** | CSS engine utility-first tercepat |
| **UI Components** | **shadcn/ui** + **Base UI** | Komponen UI modular, accessible, dan customizable |
| **Animation** | **Framer Motion** | Animasi scroll reveal, glassmorphism, & modal transitions |
| **Icons** | **Lucide React** + Custom SVG | Icon set modern dan ringkas |
| **Deployment** | **Vercel** | Hosting platform otomatis dengan instant CI/CD |

---

## 🏗️ Design Pattern & Arsitektur

Aplikasi ini dirancang mengikuti praktik terbaik rekayasa perangkat lunak modern:

### 1. Component-Driven Architecture (CDA)
Setiap bagian halaman dipisah menjadi komponen independen yang terisolasi di folder `src/components/`:
- `background3d.tsx`: Latar belakang WebGL 3D interaktif (isolated layer).
- `lightbox.tsx`: Modal galeri project interaktif dengan keyboard navigation & thumbnail selector.
- `hero.tsx`, `about.tsx`, `skills.tsx`, `experience.tsx`, `projects.tsx`, `contact.tsx`: Section halaman yang modular.

### 2. Single Source of Truth Data Pattern
Semua data personal, histori pekerjaan, daftar proyek, keahlian, dan informasi kontak dipusatkan dalam satu file konfigurasi di `src/lib/data.ts`. Hal ini memudahkan pembaruan konten tanpa perlu menyentuh logika komponen UI.

### 3. Non-Blocking WebGL Rendering
Latar belakang 3D Three.js dijalankan pada layer `-z-10` dengan aturan `pointer-events-none` dan *requestAnimationFrame loop* yang dioptimalkan, sehingga tidak mengganggu interaksi klik maupun performa scrolling.

### 4. Glassmorphism & Micro-animations Pattern
Menggunakan kombinasi *backdrop blur*, CSS variables OKLCH, dan *keyframe animation* (`glass-shine` & `glass-shimmer`) untuk memberikan nuansa premium *dark orange-gold glamour*.

---

## ✨ Fitur Utama

- 🌐 **Interactive 3D Background**: 3D Wireframe Server Nodes & Floating Tech Keywords (`PHP`, `Laravel`, `SQL`, `API`, `</>`) yang merespons kursor mouse.
- 🖼️ **Animated Project Gallery Lightbox**: Preview screenshot proyek dengan kontrol navigasi keyboard (`←`, `→`, `Esc`), thumbnail preview bar, dan animasi transisi Framer Motion.
- 📍 **Scroll Spy Navbar**: Navigasi sticky yang secara otomatis menyoroti section yang sedang aktif saat di-scroll.
- 📱 **Fully Responsive**: Tampilan optimal di semua ukuran layar (Mobile, Tablet, Desktop).
- 🔍 **SEO & OpenGraph Optimized**: Metadata lengkap untuk preview media sosial dan pencarian Google.

---

## 📁 Struktur Direktori Project

```text
portfolio/
├── public/
│   └── avatar.png             # Foto profil avatar
├── src/
│   ├── app/
│   │   ├── globals.css        # Theme variables OKLCH & custom glass keyframes
│   │   ├── layout.tsx         # Root layout, fonts, & SEO metadata
│   │   └── page.tsx           # Main entry point (single page application)
│   ├── components/
│   │   ├── background3d.tsx   # Three.js 3D WebGL Background
│   │   ├── lightbox.tsx       # Animated Project Gallery Lightbox
│   │   ├── motion.tsx         # Framer Motion animation wrappers
│   │   ├── icons.tsx          # Custom SVG Brand Icons
│   │   ├── navbar.tsx         # Sticky navigation bar
│   │   ├── hero.tsx           # Hero section & CTA buttons
│   │   ├── about.tsx          # Profile summary & bio
│   │   ├── skills.tsx         # Categorized skills grid
│   │   ├── experience.tsx     # Timeline pengalaman kerja
│   │   ├── projects.tsx       # Highlight proyek & gallery trigger
│   │   ├── education.tsx      # Riwayat pendidikan
│   │   ├── contact.tsx        # Contact links & email CTA
│   │   └── footer.tsx         # Footer & social links
│   └── lib/
│       ├── data.ts            # ⭐ Data Terpusat (Bio, Projects, Skills, Exp)
│       └── utils.ts           # Helper utility functions (cn)
├── package.json
└── tsconfig.json
```

---

## ⚡ Cara Menjalankan Secara Lokal

### Prerequisites
- Node.js versi 18.0 atau yang lebih baru
- npm, pnpm, atau yarn

### Langkah Instalasi

1. **Clone repository ini**:
   ```bash
   git clone https://github.com/DimasPiteraAriyanto/portofolio.git
   cd portofolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Jalankan Development Server**:
   ```bash
   npm run dev
   ```

4. **Buka di Browser**:
   Akses `http://localhost:3000` pada browser kamu.

5. **Build untuk Production**:
   ```bash
   npm run build
   npm run start
   ```

---

## 🌐 Cara Deploy ke Vercel

1. Push kode terbaru ke GitHub repository ini.
2. Masuk ke [Vercel Dashboard](https://vercel.com).
3. Klik **"Add New..."** → **"Project"**.
4. Import repository **`portofolio`** dari akun GitHub kamu.
5. Klik **"Deploy"** (Vercel otomatis mendeteksi Next.js & App Router).

---

## 👤 Kontak & Profil

- **Nama**: Dimas Pitera Ariyanto
- **Posisi**: Back-End & Full Stack Developer
- **Lokasi**: Yogyakarta, Indonesia
- **Email**: dimas_pitera@yahoo.com
- **LinkedIn**: [linkedin.com/in/dimas-pitera-ariyanto](https://www.linkedin.com/in/dimas-pitera-ariyanto-6a4513220/)
- **GitHub**: [github.com/DimasPiteraAriyanto](https://github.com/DimasPiteraAriyanto)
