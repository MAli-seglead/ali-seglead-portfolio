import "./globals.css";
import type { Metadata } from "next";
import { panchang } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Ali SegLead",
  description: "Portfolio"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={panchang.className}>
      <body>{children}</body>
    </html>
  );
}