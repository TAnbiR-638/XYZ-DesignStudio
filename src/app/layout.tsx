import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "XYZ Design Studio — Interior & Architecture Studio in Dhaka",
    template: "%s · XYZ Design Studio",
  },
  description:
    "XYZ Design Studio designs and builds calm, characterful homes, offices and hospitality spaces across Bangladesh. Book a free consultation.",
  keywords: [
    "interior design Dhaka",
    "interior design Bangladesh",
    "office interior",
    "residential interior",
    "3D visualization",
    "XYZ Design Studio",
  ],
  openGraph: {
    title: "XYZ Design Studio",
    description: "Interiors with intention — residential, commercial and hospitality design in Dhaka.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f1ea",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${cormorant.variable} antialiased`}>
      <body id="top" className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
