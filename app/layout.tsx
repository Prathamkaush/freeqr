import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/footer";

export const metadata = {
  title: "FreeQR – Free QR Code Generator",
  description:
    "Generate QR codes for URLs, WiFi, text, and more. Free forever.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4637001889924543"
     crossorigin="anonymous"
     strategy="afterInteractive"
     ></script>
      </head>
      <body>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
