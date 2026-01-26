import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/footer";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  metadataBase: new URL("https://freeqr.live"),
  title: "FreeQR – Free QR Code Generator",
  description: "Generate QR codes for URLs, WiFi, text, and more. Free forever.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ AdSense verification script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4637001889924543"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>

      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        
        {/* ✅ Vercel Analytics tracking component */}
        <Analytics /> 
      </body>
    </html>
  );
}