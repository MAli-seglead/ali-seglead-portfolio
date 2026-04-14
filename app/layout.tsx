import "./globals.css";
import type { Metadata } from "next";
import ThemeProvider from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Ali Seglead",
  description: "Premium multilingual portfolio built with Next.js"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}