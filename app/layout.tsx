import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mil Mármores e Granitos - Marmoraria em São Bento do Sul",
  description:
    "Marmoraria com mais de 28 anos de tradição em São Bento do Sul. Especialistas em mármores, granitos, quartzos e quartzitos. Bancadas, lavabos, escadas, fachadas e mais. Solicite seu orçamento!",
  keywords: [
    "marmoraria",
    "mármores",
    "granitos",
    "quartzos",
    "São Bento do Sul",
    "bancadas",
    "lavabos",
    "pedras naturais",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
