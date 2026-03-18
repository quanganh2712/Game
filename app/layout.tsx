import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Celestial Odyssey Wiki",
  description: "Community wiki for the Roblox tower defense game Celestial Odyssey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-zinc-900 text-zinc-100">
          <Header />
          <main className="mx-auto w-full max-w-[1200px] px-4 pt-64 pb-10 sm:px-6 lg:px-8 sm:pt-72">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
