import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export type BlogFrontmatter = {
  title: string;
  date: string;
  summary: string;
};

export type BlogPost = {
  slug: string;
  frontmatter: BlogFrontmatter;
};

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

export async function getBlogSource(slug: string): Promise<string> {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  return fs.readFile(filePath, "utf8");
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const files = await fs.readdir(BLOG_DIR);
  const blogPosts: BlogPost[] = [];

  for (const file of files) {
    if (file.endsWith(".mdx")) {
      const slug = file.replace(".mdx", "");
      const filePath = path.join(BLOG_DIR, file);
      const content = await fs.readFile(filePath, "utf8");
      const { data } = matter(content);
      const frontmatter = data as BlogFrontmatter;

      blogPosts.push({
        slug,
        frontmatter,
      });
    }
  }

  return blogPosts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date);
    const dateB = new Date(b.frontmatter.date);
    return dateB.getTime() - dateA.getTime();
  });
}
