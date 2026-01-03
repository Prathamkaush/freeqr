import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-borderDark bg-background">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Brand */}
        <Link href="/" className="text-xl font-bold text-textPrimary">
          FreeQR
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm text-textSecondary">

          {/* Generate Dropdown */}
          <div className="relative group">

            {/* Trigger */}
            <span className="cursor-pointer hover:text-primary transition">
              Generate ▾
            </span>

            {/* Hover bridge (IMPORTANT) */}
            <div className="absolute left-0 top-full h-2 w-full" />

            {/* Dropdown */}
            <div
              className="
                absolute left-0 top-full
                opacity-0 invisible
                group-hover:opacity-100 group-hover:visible
                group-focus-within:opacity-100 group-focus-within:visible
                transition-opacity
                bg-background
                border border-borderDark
                rounded-xl
                shadow-lg
                min-w-[220px]
                z-50
              "
            >
              <div className="flex flex-col py-2">

                <Link href="/" className="px-4 py-2 hover:bg-surface transition">
                  ALL QR
                </Link>

                <Link href="/url" className="px-4 py-2 hover:bg-surface transition">
                  Website / URL QR
                </Link>

                <Link href="/wifi" className="px-4 py-2 hover:bg-surface transition">
                  WiFi QR
                </Link>

                <Link href="/whatsapp" className="px-4 py-2 hover:bg-surface transition">
                  WhatsApp QR
                </Link>

                <Link href="/email" className="px-4 py-2 hover:bg-surface transition">
                  Email QR
                </Link>

                <Link href="/text" className="px-4 py-2 hover:bg-surface transition">
                  Text QR
                </Link>

                <Link href="/upi-qr" className="px-4 py-2 hover:bg-surface transition">
                  UPI QR
                </Link>

                <Link href="/vcard" className="px-4 py-2 hover:bg-surface transition">
                  vCard QR
                </Link>

              </div>
            </div>
          </div>

          {/* Static Links */}
          <Link href="/faq" className="hover:text-primary transition">
            FAQ
          </Link>

          <Link href="/blog" className="hover:text-primary transition">
            Blog
          </Link>

          <Link href="/about" className="hover:text-primary transition">
            About
          </Link>

        </nav>
      </div>
    </header>
  );
}
