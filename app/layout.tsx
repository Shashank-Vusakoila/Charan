import type { Metadata } from "next";
import { Merriweather, Nunito } from "next/font/google";
import "../styles/globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Orvexa - Indian Quality, Global Reach",
  description:
    "Orvexa connects Indian suppliers with international buyers through reliable export support focused on quality and long-term relationships.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${merriweather.variable}`}>{children}</body>
    </html>
  );
}
