import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import "./globals.css";
import Header from "./components/Header";
import ContentContainer from "./components/ContentContainer";
import { SessionProvider } from "next-auth/react";
import Footer from "./components/Footer";
import { geistMono } from "./fonts/fonts";
import { geistSans } from "./fonts/fonts";

import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "Graphtitude",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <SessionProvider>
            <NextIntlClientProvider messages={messages}>
              <Header />
              <ContentContainer>{children}</ContentContainer>
              <Footer />
            </NextIntlClientProvider>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
