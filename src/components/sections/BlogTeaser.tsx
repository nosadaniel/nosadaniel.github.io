import matter from "gray-matter";
import { Card } from "@/components/ui/Card";
import { getBlogSource, type BlogFrontmatter } from "@/lib/mdx";

const SLUG = "efficient-domain-adaptation";

export async function BlogTeaser() {
  const source = await getBlogSource(SLUG);
  const { data } = matter(source);
  const frontmatter = data as BlogFrontmatter;

  return (
    <section id="blog" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <h2 className="font-display text-3xl font-bold text-text-primary">Latest writing</h2>

      <Card className="mt-8">
        <h3 className="font-display text-xl font-semibold text-text-primary">{frontmatter.title}</h3>
        <p className="mt-3 max-w-prose text-sm leading-relaxed text-text-secondary">{frontmatter.summary}</p>
        <a href={`/blog/${SLUG}`} className="mt-4 inline-block text-sm text-accent hover:underline">
          Read the full post
        </a>
      </Card>
    </section>
  );
}
