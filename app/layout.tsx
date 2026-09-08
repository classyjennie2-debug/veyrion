import type { Metadata, Viewport } from "next"
import React from "react"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Note: Google Fonts imports removed to prevent build errors during network issues
// Fallback fonts defined in globals.css

export const metadata: Metadata = {
  title: "Veyrion Capital - Institutional Investment Management",
  description:
    "Secure. Transparent. Profitable. Access institutional-grade investment portfolios with advanced analytics and AI-powered strategies.",
  keywords: ["investment", "wealth management", "portfolio", "financial planning", "retirement", "stocks", "bonds", "crypto"],
  authors: [{ name: "Veyrion Capital" }],
  creator: "Veyrion Capital",
  publisher: "Veyrion Capital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://veyrioncapital.bond'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Veyrion Capital - Institutional Investment Management",
    description: "Secure. Transparent. Profitable. Access institutional-grade investment portfolios.",
    url: "https://veyrioncapital.bond",
    siteName: "Veyrion Capital",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veyrion Capital - Institutional Investment Management",
    description: "Secure. Transparent. Profitable. Access institutional-grade investment portfolios.",
    creator: "@veyrioncapital",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/veyrion-logo-email.svg",
        type: "image/svg+xml",
      },
      {
        url: "/placeholder-logo.png",
        type: "image/png",
      },
    ],
    apple: "/placeholder-logo.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#1a1a18",
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Modern Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
