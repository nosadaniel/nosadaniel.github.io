import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { Card } from "@/components/ui/Card";
import { getAllBlogPosts, type BlogPost } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog - NA",
  description: "Technical articles and tutorials on AI, MCP, and software development",
};

// Define custom order for MCP series
const MCP_SERIES_ORDER = [
  "understanding-mcp",
  "building-mcp-research-server",
  "deploying-mcp-research-assistant",
];

function getSortOrder(post: BlogPost): number {
  const seriesIndex = MCP_SERIES_ORDER.indexOf(post.slug);
  if (seriesIndex !== -1) {
    // MCP series posts come first, in defined order
    return seriesIndex;
  }
  // Other posts sorted by date (newest first)
  return 1000 - new Date(post.frontmatter.date).getTime();
}

export default async function BlogPage() {
  const posts = await getAllBlogPosts();
  
  // Sort: MCP series in order, then other posts by date
  const sortedPosts = [...posts].sort((a, b) => getSortOrder(a) - getSortOrder(b));

  return (
    <>
      <Nav />
      <main id="main" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="mb-12">
          <h1 className="font-display text-4xl font-bold text-text-primary">Blog</h1>
          <p className="mt-4 text-lg text-text-secondary">
            Technical articles, tutorials, and insights on AI, MCP, and software development.
          </p>
        </div>

        {sortedPosts.length === 0 ? (
          <p className="text-center text-text-secondary">No blog posts yet. Check back soon!</p>
        ) : (
          <div className="space-y-8">
            {sortedPosts.map((post, index) => (
              <Card key={post.slug} className="p-8">
                <div className="flex flex-col gap-3">
                  <p className="font-mono text-sm text-text-secondary">
                    {post.frontmatter.date}
                  </p>
                  <h2 className="font-display text-2xl font-semibold text-text-primary">
                    {post.frontmatter.title}
                  </h2>
                  <p className="text-text-secondary">{post.frontmatter.summary}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm text-accent hover:underline self-start"
                  >
                    Read more →
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
