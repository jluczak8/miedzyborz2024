import { Suspense } from "react";
import type { Metadata } from "next";
import { NextFont } from "next/dist/compiled/@next/font";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Header from "@/ui/header/header";
import Sidebar from "@/ui/sidebar/sidebar";
import Footer from "@/ui/footer/footer";
import Loading from "./loading";
import "./globals.css";

const inter: NextFont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Międzybórz 2024",
    default: "Międzybórz 2024"
  },
  description: "Strona internetowa Komitetu Wyborczego Wyborców Międzybórz 2024.",
  keywords: "kwwmiedzyborz2024, kww miedzyborz2024, kww miedzyborz 2024, kww międzybórz2024, kww międzybórz 2024, miedzyborz2024, międzybórz2024, miedzyborz, międzybórz, wybory, komitet, samorząd, 2024",
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
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
        <Footer />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
};