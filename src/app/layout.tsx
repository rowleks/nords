import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Nord's Bakery | Louisville, KY",
  description:
    "Discover Nord's Bakery in Louisville, KY, 40217. Serving the community with fresh donuts, cakes, pastries, and more since 2002. Visit us for custom cakes and delicious treats.",
  keywords: [
    "Bakery",
    "Donuts",
    "Wedding Cakes",
    "Cookies",
    "Pastries",
    "Cakes",
    "Fresh Bread",
    "Cupcakes",
    "Birthday Cakes",
    "Custom Cakes",
    "Louisville",
    "KY",
    "40217",
    "Desserts",
    "Baked Goods",
    "Local Bakery",
  ],
  other: {
    "geo.region": "US-KY",
    "geo.placename": "Louisville, KY, USA",
    "geo.position": "38.2167829;-85.7454136",
    ICBM: "38.2167829, -85.7454136",
    "location.latitude": "38.2167829",
    "location.longitude": "-85.7454136",
    "location.altitude": "0",
    siteName: "https://www.nordsbakery.biz",
    author: "Nord's Bakery",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
      <Analytics />
    </html>
  );
}
