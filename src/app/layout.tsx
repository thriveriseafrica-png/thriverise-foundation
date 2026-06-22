import type { Metadata } from "next";
import { Poppins, Geist } from "next/font/google";

import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "ThriveRise Foundation | Empowering Youth Through Education",
    template: "%s | ThriveRise Foundation",
  },
  description:
    "ThriveRise Foundation for Educational Development is a youth-led nonprofit empowering out-of-school children, underserved youth, and students across Africa with free education, skills, and lifelong opportunities.",
  keywords: [
    "ThriveRise Foundation",
    "education nonprofit Africa",
    "youth empowerment Nigeria",
    "free education Africa",
    "out-of-school children",
    "SDG 4 quality education",
    "skills development Africa",
  ],
  metadataBase: new URL("https://thriverisefoundation.org"),
  openGraph: {
    type: "website",
    siteName: "ThriveRise Foundation",
    title: "ThriveRise Foundation | Empowering Youth Through Education",
    description:
      "A youth-led nonprofit empowering out-of-school children, underserved youth, and students across Africa with free education, skills, and lifelong opportunities.",
    url: "https://thriverisefoundation.org",
    images: [
      {
        url: "/website-ui/hero-image.png",
        width: 1200,
        height: 630,
        alt: "ThriveRise Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@thriverise_",
    title: "ThriveRise Foundation | Empowering Youth Through Education",
    description:
      "A youth-led nonprofit empowering out-of-school children, underserved youth, and students across Africa with free education, skills, and lifelong opportunities.",
    images: ["/website-ui/hero-image.png"],
  },
  verification: {
    google: "zjb_0mvFxdyqEmmiJKd_WgIa9mjbAutRNpk2QxpmbUs",
  },
  icons: {
    icon: "/website-ui/thriverise-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <body className={poppins.className} suppressHydrationWarning={true}>
        <NextTopLoader
          color="#c1c1c1"
          showSpinner={false}
          height={4}
          speed={3000}
        />

        <NextTopLoader
          color="#c1c1c1"
          showSpinner={false}
          height={4}
          speed={3000}
        />
        {children}
      </body>
    </html>
  );
}
