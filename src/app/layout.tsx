import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider } from "@/components/I18nProvider";

export const metadata: Metadata = {
  title: "NexusSite | Architecting the Synthetic Intellect",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col selection:bg-primary/30">
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}