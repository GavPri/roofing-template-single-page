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
