import { blogs } from "@/lib/blogs";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link"

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
    <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
      
      {/* Main Content */}
      <div className="lg:col-span-2">
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold text-textPrimary leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-xl text-textSecondary italic">
            {post.description}
          </p>
        </header>

        <div className="space-y-6 text-textSecondary text-lg leading-relaxed">
          {post.content.split("\n").map((line: string, i: number) => {
            if (line.startsWith("## ")) {
              return <h2 key={i} className="text-2xl font-bold text-textPrimary mt-10">{line.replace("## ", "")}</h2>;
            }
            if (line.startsWith("### ")) {
              return <h3 key={i} className="text-xl font-bold text-textPrimary mt-8">{line.replace("### ", "")}</h3>;
            }
            return line.trim() ? <p key={i}>{line}</p> : null;
          })}
        </div>
      </div>

      {/* Sidebar (Adds Content Density) */}
      <aside className="lg:col-span-1 space-y-8">
        <div className="bg-surface border border-borderDark rounded-2xl p-6">
          <h3 className="text-lg font-bold text-textPrimary mb-4">Other Guides</h3>
          <div className="space-y-4">
            {blogs.filter(b => b.slug !== slug).map(other => (
              <Link key={other.slug} href={`/blog/${other.slug}`} className="block group">
                <p className="text-sm font-semibold group-hover:text-primary transition-colors">{other.title}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-textPrimary mb-2">Need a QR Code?</h3>
          <p className="text-sm text-textSecondary mb-4">Create your secure, privacy-friendly QR code in seconds.</p>
          <Link href="/" className="inline-block bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold">
            Start Generating →
          </Link>
        </div>
      </aside>

    </div>
  </article>
);
}
