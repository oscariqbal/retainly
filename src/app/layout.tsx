import type { Metadata } from "next";
import "./globals.css";
import { Inter, Manrope } from "next/font/google";

import Header from '@/src/app/header';
import Footer from '@/src/app/footer';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-title",
});

export const metadata: Metadata = {
  title: "Retainly",
  description: "Empowering machine learning to identify at-risk business customers and drive timely retention actions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} antialiased text-xs md:text-sm lg:text-base leading-relaxed`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
