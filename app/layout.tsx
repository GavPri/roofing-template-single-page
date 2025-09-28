import type { Metadata } from "next";
import { DM_Sans, Lora, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Top Tier Roofing - Austin's Premier Roofing Contractor",
  description: "Top Tier Roofing provides expert roofing services in Austin, TX. Licensed & insured with 9+ years experience. Free estimates on residential & commercial roofing, storm damage repair, and emergency services.",
  keywords: [
    "roofing contractor Austin",
    "roof repair Austin TX",
    "residential roofing Austin",
    "commercial roofing Austin",
    "storm damage repair Austin",
    "emergency roofing Austin",
    "roof replacement Austin",
    "roofing company Austin",
    "Austin roofer",
    "roof installation Austin",
    "hail damage repair Austin",
    "roof inspection Austin",
    "gutter services Austin",
    "Round Rock roofing",
    "Cedar Park roofing",
    "Georgetown roofing",
    "Pflugerville roofing",
    "Leander roofing",
    "Greater Austin roofing",
    "licensed roofer Austin",
    "insured roofing contractor",
    "free roofing estimate",
    "24/7 emergency roofing",
    "TPO roofing Austin",
    "EPDM roofing Austin",
    "shingle roofing Austin"
  ],
  authors: [{ name: "Top Tier Roofing" }],
  creator: "Top Tier Roofing",
  publisher: "Top Tier Roofing",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://toptierroofing.com",
    title: "Top Tier Roofing - Austin's Premier Roofing Contractor",
    description: "Top Tier Roofing provides expert roofing services in Austin, TX. Licensed & insured with 9+ years experience. Free estimates on residential & commercial roofing, storm damage repair, and emergency services.",
    siteName: "Top Tier Roofing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Tier Roofing - Austin's Premier Roofing Contractor",
    description: "Top Tier Roofing provides expert roofing services in Austin, TX. Licensed & insured with 9+ years experience.",
    creator: "@toptierroofing",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${lora.variable} ${ibmPlexMono.variable} font-sans antialiased max-w-[80vw] mx-auto bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
