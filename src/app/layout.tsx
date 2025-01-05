import { geistMono, geistSans } from "@/styles/fonts";
import type { Metadata } from "next";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-50`}
      >
        {children}
      </body>
    </html>
  );
}
