import type { Metadata } from "next";
import { Merriweather, Nunito } from "next/font/google";
import "../styles/globals.css";

const siteUrl = "https://orvexaimportsandexports.com";

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
  metadataBase: new URL(siteUrl),
  title: {
    default: "Orvexa Imports and Exports | Indian Quality, Global Reach",
    template: "%s | Orvexa Imports and Exports",
  },
  description:
    "Orvexa Imports and Exports connects Indian suppliers with global buyers through export support for rice, turmeric, spices, coffee, and specialty Indian herbs.",
  keywords: [
    "Orvexa Imports and Exports",
    "Orvexa",
    "Orvexa import and export company",
    "Indian exports",
    "rice exporters India",
    "turmeric export",
    "spices export",
    "coffee export India",
    "Indian herbs export",
    "Hyderabad export company",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Orvexa Imports and Exports",
    description:
      "Indian export company for rice, turmeric, spices, coffee, and specialty herbs with reliable sourcing and shipment coordination.",
    url: siteUrl,
    siteName: "Orvexa Imports and Exports",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orvexa Imports and Exports",
    description:
      "Indian export company for rice, turmeric, spices, coffee, and specialty herbs.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
