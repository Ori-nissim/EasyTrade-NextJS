import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes'

import "./globals.css";
import Header from "./components/Header";
import ContentContainer from "./components/ContentContainer";
import { SessionProvider } from "next-auth/react";
import Footer from "./components/Footer";
import { geistMono } from "./fonts/fonts";
import { geistSans } from "./fonts/fonts";

export const metadata: Metadata = {
  title: "EasyTrade - Trade Responsibly",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <SessionProvider>
            <Header />
            <ContentContainer>
              {children}
            </ContentContainer>
            <Footer />
          </SessionProvider>
        </ThemeProvider>

      </body>

    </html>

  );
}
