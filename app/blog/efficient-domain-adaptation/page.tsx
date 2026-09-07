import type { Metadata } from "next";
import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { StatCallout } from "@/components/blog/StatCallout";
import { getBlogSource, type BlogFrontmatter } from "@/lib/mdx";

export async function generateMetadata(): Promise<Metadata> {
  const source = await getBlogSource("efficient-domain-adaptation");
  const { frontmatter } = await compileMDX<BlogFrontmatter>({
    source,
    options: { parseFrontmatter: true, blockJS: false },
  });

  return {
    title: frontmatter.title,
    description: frontmatter.summary,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.summary,
      type: "article",
    },
  };
}

export default async function BlogPost() {
  const source = await getBlogSource("efficient-domain-adaptation");
  const { content, frontmatter } = await compileMDX<BlogFrontmatter>({
    source,
    options: { parseFrontmatter: true, blockJS: false },
    components: { StatCallout },
  });

  return (
    <>
      <Nav />
      <main id="main" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
        <Link href="/#blog" className="text-sm text-accent hover:underline">
          Back to portfolio
        </Link>

        <h1 className="mt-4 font-display text-3xl font-bold text-text-primary md:text-4xl">
          {frontmatter.title}
        </h1>
        <p className="mt-2 font-mono text-sm text-text-secondary">{frontmatter.date}</p>

        <article className="prose-blog mt-8 leading-relaxed text-text-secondary">{content}</article>
      </main>
      <Footer />
    </>
  );
}
