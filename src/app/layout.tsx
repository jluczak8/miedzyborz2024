import type { Metadata } from "next";
import { NextFont } from "next/dist/compiled/@next/font";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Header from "@/ui/header/header";
import Sidebar from "@/ui/sidebar/sidebar";
import Footer from "@/ui/footer/footer";
import "./globals.css";

const inter: NextFont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Międzybórz 2024",
    default: "Międzybórz 2024"
  },
  description: "Strona internetowa Komitetu Wyborczego Wyborców Międzybórz 2024.",
  keywords: "międzybórz2024, międzybórz, wybory, samorząd, 2024, komitet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="pl-PL">
      <body className={inter.className}>
        <Header />
        <Sidebar />
        {children}
        <Footer />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
};