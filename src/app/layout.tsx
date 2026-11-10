import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { BrandProvider, Site, brandBootScript } from "@credigit/web-ui";
import { site } from "@/content/site";
import { SiteFooter } from "@/sections/site-footer";
import { SiteHeader } from "@/sections/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.productName} — Credit and enterprise risk management | Credigit`,
    template: `%s | ${site.productName}`,
  },
  description: site.description,
  applicationName: site.productName,
  authors: [{ name: site.company }],
  creator: site.company,
  publisher: site.company,
  keywords: [
    "credit risk management",
    "enterprise risk management",
    "loan origination",
    "360 Risk Assessment Radar",
    "IFRS 9",
    "banks",
    "microfinance institutions",
    "Nigeria",
    "Africa",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.productName,
    title: site.productName,
    description: site.description,
    url: "/",
    locale: site.locale,
    images: [{ url: "/favicon-512.png", width: 512, height: 512, alt: `${site.company} logo` }],
  },
  twitter: {
    card: "summary",
    title: site.productName,
    description: site.description,
    images: ["/favicon-512.png"],
  },
  icons: {
    icon: [
      { url: "/credigit-favicon-small.svg", type: "image/svg+xml" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/favicon-180.png", sizes: "180x180" }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: brandBootScript() }} />
      </head>
      <body className="bg-bg font-sans text-fg antialiased">
        <BrandProvider>
          <Site header={<SiteHeader />} footer={<SiteFooter />}>
            {children}
          </Site>
        </BrandProvider>
      </body>
    </html>
  );
}
