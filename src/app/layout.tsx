import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppHeader from "@/components/App/AppHeader/AppHeader";
import AppFooter from "@/components/App/AppFooter/AppFooter";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NILearn",
  description: "NILearn - for education",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppHeader />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
