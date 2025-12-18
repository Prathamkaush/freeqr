import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-borderDark bg-background">
      <div
        className="
          max-w-6xl mx-auto px-6
          h-16
          flex items-center justify-between
        "
      >
        {/* Brand */}
        <Link
          href="/"
          className="text-xl font-bold text-textPrimary"
        >
          FreeQR
        </Link>

        {/* Navigation */}
        <nav className="flex gap-6 text-sm text-textSecondary">
          <Link
            href="/"
            className="hover:text-primary transition"
          >
            Generate
          </Link>

          <Link
            href="/faq"
            className="hover:text-primary transition"
          >
            FAQ
          </Link>

          <Link
            href="/blog"
            className="hover:text-primary transition"
          >
            Blog
          </Link>

          <Link
            href="/about"
            className="hover:text-primary transition"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
