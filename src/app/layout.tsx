import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { ApolloWrapper } from "@/lib/client";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Accha Wala College",
  description: "Find College that suits you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-primary-text font-poppins bg-gray-100">
        <ApolloWrapper>
          <Header />
          {children}
          <Footer />
        </ApolloWrapper>
      </body>
    </html>
  );
}
