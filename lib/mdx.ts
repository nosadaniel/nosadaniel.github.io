import fs from "node:fs/promises";
import path from "node:path";

export type BlogFrontmatter = {
  title: string;
  date: string;
  summary: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export async function getBlogSource(slug: string): Promise<string> {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  return fs.readFile(filePath, "utf8");
}
