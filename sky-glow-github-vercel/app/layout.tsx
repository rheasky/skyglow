import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SKY GLOW | Price List & Protocols",
  description: "Explore the SKY GLOW collection, product price list, and signature beauty protocols. Where transformation begins.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "SKY GLOW | Price List & Protocols",
    description: "Where transformation begins",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SKY GLOW — Where transformation begins" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
