import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type BlogFaq = { q: string; a: string };

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  /** co-founder first name shown in the byline */
  author: string;
  publishedAt: string;
  updatedAt: string;
  keywords: string[];
  /** product slugs from lib/products.ts rendered as CTA cards */
  relatedProducts: string[];
  faq: BlogFaq[];
};

export type BlogPost = BlogPostMeta & { content: string };

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function parseFile(filename: string): BlogPost {
  const slug = filename.replace(/\.mdx$/, "");
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title,
    description: data.description,
    author: data.author ?? "SkinSnap Team",
    publishedAt: data.publishedAt,
    updatedAt: data.updatedAt ?? data.publishedAt,
    keywords: data.keywords ?? [],
    relatedProducts: data.relatedProducts ?? [],
    faq: data.faq ?? [],
    content,
  };
}

/** All posts, newest first. */
export function getAllPosts(): BlogPost[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map(parseFile)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getPost(slug: string): BlogPost | undefined {
  const file = `${slug}.mdx`;
  if (!fs.existsSync(path.join(BLOG_DIR, file))) return undefined;
  return parseFile(file);
}
