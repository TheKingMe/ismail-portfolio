import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ismailmamad.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ismail Mamad | Full-Stack Software Engineer & Digital Solutions Builder",
  description:
    "Portfolio of Ismail Mamad. Building scalable enterprise web applications, data pipelines, Spring Boot microservices, and high-converting e-commerce ecosystems.",
  keywords: [
    "Ismail Mamad",
    "Full-Stack Engineer",
    "Enterprise Architect",
    "Spring Boot",
    "Next.js",
    "Angular",
    "PostgreSQL",
    "Apache Airflow",
    "Shopify",
    "Meta Ads",
    "E-Commerce Solutions",
    "Morocco Software Engineer",
  ],
  authors: [{ name: "Ismail Mamad" }],
  creator: "Ismail Mamad",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ismail Mamad | Full-Stack Software Engineer & Digital Solutions Builder",
    description:
      "Building scalable web applications, data pipelines, and high-converting e-commerce ecosystems.",
    url: "/",
    siteName: "Ismail Mamad Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ismail Mamad | Full-Stack Software Engineer & Digital Solutions Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ismail Mamad | Full-Stack Software Engineer & Digital Solutions Builder",
    description:
      "Building scalable web applications, data pipelines, and high-converting e-commerce ecosystems.",
    images: ["/og-image.jpg"],
    creator: "@ismailmamad",
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Ismail Mamad",
      jobTitle: "Full-Stack Software Engineer & Digital Solutions Builder",
      description:
        "Building scalable web applications, data pipelines, Spring Boot microservices, and high-converting e-commerce ecosystems.",
      url: siteUrl,
      email: "mailto:ismailxmamad@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressCountry: "MA",
      },
      sameAs: [
        "https://github.com/TheKingMe",
        "https://linkedin.com",
      ],
      knowsAbout: [
        "Software Engineering",
        "Spring Boot",
        "Next.js",
        "React",
        "Angular",
        "PostgreSQL",
        "Apache Airflow",
        "Docker",
        "Shopify",
        "Meta Ads & CAPI",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Ismail Mamad Portfolio",
      description:
        "Full-Stack Software Engineer & Digital Solutions Builder Portfolio",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased selection:bg-indigo-500/30 selection:text-white flex flex-col transition-colors duration-300">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdData),
          }}
        />
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
