import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppHeader, AppFooter } from "@/components/App";

import "react-dropdown/style.css";
import "@/assets/styles/globals.scss";

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
    <html lang="ru">
      <body className={inter.className}>
        <AppHeader />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
