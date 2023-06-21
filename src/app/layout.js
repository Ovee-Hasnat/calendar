import "./globals.css";

import { Providers } from "@/Redux/provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-slate-300 scrollbar-thin scrollbar-thumb-slate-800">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
