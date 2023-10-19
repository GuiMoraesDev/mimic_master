import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mimic Master | %s",
  description:
    '"Mimic Master" is the ultimate word-guessing game that tests your creativity and communication skills. Choose from various categories, mimic the word without speaking, and challenge your friends and family to guess. It is fun, engaging, and perfect for bonding with loved ones!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-lg border-x-2 m-auto h-screen p-12">
          {children}
        </div>
      </body>
    </html>
  );
}
