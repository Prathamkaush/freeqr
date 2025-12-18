export default function Footer() {
  return (
    <footer className="border-t border-borderDark bg-background">
      <div
        className="
          max-w-6xl mx-auto px-6 py-6
          flex flex-col sm:flex-row
          items-center justify-between
          gap-4
          text-xs
          text-textSecondary
        "
      >
        <span>
          © {new Date().getFullYear()} FreeQR
        </span>

        <div className="flex gap-6">
          <a
            href="/privacy"
            className="hover:text-primary transition"
          >
            Privacy
          </a>
          <a
            href="/terms"
            className="hover:text-primary transition"
          >
            Terms
          </a>
          <a
            href="/contact"
            className="hover:text-primary transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
