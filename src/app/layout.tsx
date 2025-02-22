import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { NextIntlClientProvider } from "next-intl";
import { cookies } from "next/headers";

import "./globals.css";
import Header from "./components/Header";
import ContentContainer from "./components/ContentContainer";
import Footer from "./components/Footer";
import { geistMono } from "./fonts/fonts";
import { geistSans } from "./fonts/fonts";
import { getMessages } from "next-intl/server";

import getServerSession  from "next-auth";


export const metadata: Metadata = {
  title: "Graphtitude",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Read the locale from cookies or default to "en"
  const locale = cookies().get("NEXT_LOCALE")?.value || "en";

  // Set the direction dynamically
  const dir = locale === "he" ? "rtl" : "ltr";

  // Load the correct messages
  const messages = await getMessages();


  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
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
