import localFont from "next/font/local";
import "./globals.css";
import { ConfigProvider } from "antd";
import Script from "next/script"; // 1. Import komponen Script dari Next.js

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const siteUrl = "https://rohmatsidiq.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rohmat Sidiq Mustaqim - Fullstack Software Engineer",
    template: "%s | Rohmat Sidiq Mustaqim",
  },
  description:
    "Fullstack Software Engineer specializing in React, Next.js, Express.js, and Node.js. Experienced in building scalable web applications, e-commerce, and SaaS platforms.",
  keywords: [
    "Rohmat Sidiq Mustaqim",
    "Fullstack Developer",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Web Developer Indonesia",
  ],
  authors: [{ name: "Rohmat Sidiq Mustaqim", url: siteUrl }],
  creator: "Rohmat Sidiq Mustaqim",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Rohmat Sidiq Mustaqim - Fullstack Software Engineer",
    description:
      "Fullstack Software Engineer specializing in React, Next.js, Node.js, and MySQL. Building high-performance SaaS and web applications.",
    siteName: "Rohmat Sidiq Mustaqim Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rohmat Sidiq Mustaqim Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohmat Sidiq Mustaqim - Fullstack Software Engineer",
    description:
      "Fullstack Software Engineer specializing in React, Next.js, Node.js, and MySQL.",
    images: ["/og-image.jpg"],
  },
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* 2. Google Analytics Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JSYNLR5DRQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-JSYNLR5DRQ');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#eab308",
              borderRadius: 24,
            },
          }}
        >
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}
