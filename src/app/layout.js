"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>{children}</SessionProvider>
        {/* <script src="https://apis.google.com/js/platform.js"></script> */}
        <Script src="https://apis.google.com/js/platform.js"></Script>
      </body>
    </html>
  );
}
