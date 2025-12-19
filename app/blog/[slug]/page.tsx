import { blogs } from "@/lib/blogs";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) return {};

  return {
    title: `${post.title} | FreeQR`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) notFound();

  return (
    <article className="bg-background py-24">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-textPrimary">
            {post.title}
          </h1>
          <p className="mt-4 text-textSecondary">
            {post.description}
          </p>
        </header>

        {/* Content */}
        <div className="space-y-6 text-textSecondary leading-relaxed">
          {post.content.split("\n").map((line: string, i: number) => {
            if (line.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="text-2xl font-semibold text-textPrimary mt-10"
                >
                  {line.replace("## ", "")}
                </h2>
              );
            }

            if (!line.trim()) return null;

            return (
              <p key={i}>
                {line}
              </p>
            );
          })}
        </div>

        {/* Footer */}
        <footer className="mt-16 border-t border-borderDark pt-6">
          <a
            href="/blog"
            className="text-sm text-primary hover:underline"
          >
            ← Back to Blog
          </a>
        </footer>

      </div>
    </article>
  );
}
