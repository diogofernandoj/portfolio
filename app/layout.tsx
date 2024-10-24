import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Diogo Jorge - Desenvolvedor Fullstack | Soluções Escaláveis e Modernas",
  description:
    "Conheça Diogo Jorge, desenvolvedor fullstack especialista em JavaScript, React, Node e Next.js. Criação de sistemas escaláveis e interfaces modernas para empresas locais e negócios online.",
};

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
