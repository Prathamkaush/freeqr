import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/footer";
import Script from "next/script";

export const metadata = {
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

        {/* OPTIONAL: meta tag (can keep it, but not required) */}
        {/* <meta name="google-adsense-account" content="ca-pub-4637001889924543" /> */}
      </head>

      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
