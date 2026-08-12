import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
export const metadata: Metadata = {
  title: "Ana Kids",
  description: "Moda Infantil Feminina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
