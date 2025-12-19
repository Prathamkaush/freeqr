import Link from "next/link";
import { blogs } from "@/lib/blogs/index";

export const metadata = {
  title: "Blog – FreeQR",
  description:
    "Read guides, tutorials, and best practices about QR codes and how to use them effectively.",
};

export default function BlogPage() {
  return (
    <section className="bg-background py-24 border-t border-borderDark">
      <div className="max-w-6xl mx-auto px-6 space-y-16">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-textPrimary">
            FreeQR Blog
          </h1>
          <p className="mt-4 text-textSecondary">
            Guides, tutorials, and best practices for using QR codes effectively.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.slug}
              className="
                bg-surface
                border border-borderDark
                rounded-xl
                p-6
                flex flex-col
                justify-between
                transition
                hover:border-primary
              "
            >
              <div>
                <h2 className="text-xl font-semibold text-textPrimary">
                  {blog.title}
                </h2>

                <p className="mt-3 text-sm text-textSecondary">
                  {blog.description}
                </p>
              </div>

              <Link
                href={`/blog/${blog.slug}`}
                className="
                  inline-block
                  mt-6
                  text-sm
                  font-medium
                  text-primary
                  hover:underline
                "
              >
                Read article →
              </Link>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
