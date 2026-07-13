import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import ProductCta from "@/components/ProductCta";
import { getAllPosts, getPost } from "@/lib/blog";
import { blogPostingJsonLd, faqJsonLd, jsonLdString } from "@/lib/seo";
import { useMDXComponents } from "@/mdx-components";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url: `/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

const dateFmt = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPost(params.slug);
  if (!post) notFound();
  const components = useMDXComponents({ ProductCta });

  return (
    <div className="wrap">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static self-authored JSON-LD, < escaped in jsonLdString
        dangerouslySetInnerHTML={{
          __html: jsonLdString(blogPostingJsonLd(post)),
        }}
      />
      {post.faq.length > 0 && (
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static self-authored JSON-LD, < escaped in jsonLdString
          dangerouslySetInnerHTML={{
            __html: jsonLdString(faqJsonLd(post.faq)),
          }}
        />
      )}
      <Nav active="blog" />

      {/* ARTICLE HEADER */}
      <section
        className="section-pad"
        style={{
          padding: "170px 48px 50px",
          background:
            "radial-gradient(120% 100% at 50% 0%, #FBF6EF 0%, #EFE4D4 100%)",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ fontSize: 13, color: "#9B8F7C", marginBottom: 20 }}>
            <Link
              href="/blog"
              style={{ textDecoration: "none", color: "#9B8F7C" }}
            >
              Blog
            </Link>
            &nbsp;/&nbsp;
            <span style={{ color: "#6B6357" }}>{post.title}</span>
          </div>
          <h1
            className="section-title h-lg"
            style={{ fontSize: 44, lineHeight: 1.12, margin: 0 }}
          >
            {post.title}
          </h1>
          <div style={{ fontSize: 14, color: "#6B6357", marginTop: 18 }}>
            By {post.author}, Co-founder of SkinSnap · Published{" "}
            {dateFmt.format(new Date(post.publishedAt))}
            {post.updatedAt !== post.publishedAt && (
              <> · Updated {dateFmt.format(new Date(post.updatedAt))}</>
            )}
          </div>
        </div>
      </section>

      {/* BODY */}
      <section
        className="section-pad"
        style={{ padding: "50px 48px 60px", background: "#F6F1E9" }}
      >
        <article style={{ maxWidth: 720, margin: "0 auto" }}>
          <MDXRemote source={post.content} components={components} />

          {/* FAQ */}
          {post.faq.length > 0 && (
            <div style={{ marginTop: 52 }}>
              <h2
                className="section-title"
                style={{ fontSize: 32, margin: "0 0 20px" }}
              >
                Frequently asked questions
              </h2>
              {post.faq.map((item) => (
                <div
                  key={item.q}
                  style={{
                    background: "#FCFAF5",
                    border: "1px solid #EAE0D0",
                    borderRadius: 16,
                    padding: "20px 24px",
                    marginBottom: 14,
                  }}
                >
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: 16,
                      color: "#26221C",
                    }}
                  >
                    {item.q}
                  </div>
                  <p
                    style={{
                      fontSize: 15,
                      color: "#4A443B",
                      lineHeight: 1.7,
                      margin: "10px 0 0",
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* RELATED PRODUCTS */}
          {post.relatedProducts.length > 0 && (
            <div style={{ marginTop: 52 }}>
              <h2
                className="section-title"
                style={{ fontSize: 32, margin: "0 0 8px" }}
              >
                Try it the fresh way
              </h2>
              {post.relatedProducts.map((slug) => (
                <ProductCta key={slug} slug={slug} />
              ))}
            </div>
          )}

          <p
            style={{
              fontSize: 13,
              color: "#9B8F7C",
              lineHeight: 1.6,
              marginTop: 44,
              borderTop: "1px solid #EAE0D0",
              paddingTop: 18,
            }}
          >
            This article is for general skincare information, not medical
            advice. Always patch-test a new product on your inner arm and wait
            24 hours before applying it to your face.
          </p>
        </article>
      </section>

      <Footer />
    </div>
  );
}
