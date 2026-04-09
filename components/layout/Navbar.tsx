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
                min-w-[260px]
                w-[260px]
                z-50
                flex flex-col
                py-2
                text-left
              "
            >
                <Link href="/bulk" className="block w-full px-4 py-2 hover:bg-surface transition font-semibold text-primary whitespace-nowrap">
                  Bulk Generator ⭐
                </Link>

                <div className="border-t border-borderDark my-1" />

                <Link href="/" className="block w-full px-4 py-2 hover:bg-surface transition whitespace-nowrap">
                  ALL QR
                </Link>

                <Link href="/url" className="block w-full px-4 py-2 hover:bg-surface transition whitespace-nowrap">
                  Website / URL QR
                </Link>

                <Link href="/wifi" className="block w-full px-4 py-2 hover:bg-surface transition whitespace-nowrap">
                  WiFi QR
                </Link>

                <Link href="/whatsapp" className="block w-full px-4 py-2 hover:bg-surface transition whitespace-nowrap">
                  WhatsApp QR
                </Link>

                <Link href="/email" className="block w-full px-4 py-2 hover:bg-surface transition whitespace-nowrap">
                  Email QR
                </Link>

                <Link href="/text" className="block w-full px-4 py-2 hover:bg-surface transition whitespace-nowrap">
                  Text QR
                </Link>

                <Link href="/upi-qr" className="block w-full px-4 py-2 hover:bg-surface transition whitespace-nowrap">
                  UPI QR
                </Link>

                <Link href="/vcard" className="block w-full px-4 py-2 hover:bg-surface transition whitespace-nowrap">
                  vCard QR
                </Link>

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
