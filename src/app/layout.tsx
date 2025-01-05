import { Header } from "@/components/Header/Header";
import { geistMono, geistSans } from "@/styles/fonts";
import type { Metadata } from "next";

import Head from "next/head";
import "./globals.css";

export const metadata: Metadata = {
  title: "VC Holder Binding Playground",
  description: "VC Holder Binding Playground",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="/apple-touch-icon-180x180.png"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-gray-50 antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
