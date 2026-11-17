import type { Metadata } from "next";
import { Luckiest_Guy, Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
const luckiest = Luckiest_Guy({ subsets: ["latin"], weight: "400", variable: "--font-luckiest" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.davydonothing.com"),
  title: {
    default: "Davy Do Nothing | The Hero Linea Never Knew It Needed",
    template: "%s | Davy Do Nothing",
  },
  description:
    "Davy is the coolest polar bear on Linea and he loves to do nothing. Taterz, Brotatoes, raffles and the Potato Palace community.",
  openGraph: {
    siteName: "Davy Do Nothing",
    type: "website",
    images: [
      {
        url: "/media/images/og-davy-black.png",
        width: 1200,
        height: 630,
        alt: "Davy Do Nothing",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${nunito.variable} ${luckiest.variable}`}>
      <body className="bg-cream font-body text-ink antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
