import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dimas Pitera Ariyanto — Back-End & Full Stack Developer",
  description:
    "Portfolio website of Dimas Pitera Ariyanto, a Back-End and Full Stack Developer with nearly 5 years of experience specializing in PHP, Laravel, CodeIgniter, RESTful APIs, & Modern Web Applications.",
  keywords: [
    "Dimas Pitera Ariyanto",
    "Back-End Developer",
    "Full Stack Developer",
    "PHP Developer",
    "Laravel Developer",
    "CodeIgniter",
    "RESTful API",
    "Yogyakarta",
  ],
  authors: [{ name: "Dimas Pitera Ariyanto" }],
  openGraph: {
    title: "Dimas Pitera Ariyanto — Back-End & Full Stack Developer",
    description:
      "Back-End and Full Stack Developer specializing in building scalable web applications, clean architecture, and RESTful APIs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
