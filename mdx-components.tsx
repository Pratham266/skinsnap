import type { MDXComponents } from "mdx/types";
import Link from "next/link";

/**
 * Typography for blog articles — matches the site: Instrument Serif display
 * headings, Manrope body, warm ink palette from globals.css.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => (
      <h2
        style={{
          fontFamily: "var(--font-instrument-serif), serif",
          fontWeight: 400,
          fontSize: 32,
          lineHeight: 1.15,
          color: "#26221C",
          margin: "44px 0 14px",
        }}
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        style={{
          fontFamily: "var(--font-instrument-serif), serif",
          fontWeight: 400,
          fontSize: 24,
          lineHeight: 1.2,
          color: "#26221C",
          margin: "32px 0 10px",
        }}
        {...props}
      />
    ),
    p: (props) => (
      <p
        style={{
          fontSize: 16,
          lineHeight: 1.75,
          color: "#4A443B",
          margin: "0 0 18px",
        }}
        {...props}
      />
    ),
    ul: (props) => (
      <ul
        style={{
          fontSize: 16,
          lineHeight: 1.75,
          color: "#4A443B",
          margin: "0 0 18px",
          paddingLeft: 22,
        }}
        {...props}
      />
    ),
    ol: (props) => (
      <ol
        style={{
          fontSize: 16,
          lineHeight: 1.75,
          color: "#4A443B",
          margin: "0 0 18px",
          paddingLeft: 22,
        }}
        {...props}
      />
    ),
    li: (props) => <li style={{ marginBottom: 8 }} {...props} />,
    strong: (props) => (
      <strong style={{ color: "#26221C", fontWeight: 700 }} {...props} />
    ),
    blockquote: (props) => (
      <blockquote
        style={{
          borderLeft: "3px solid #E8CBB2",
          margin: "0 0 18px",
          padding: "6px 0 6px 18px",
          color: "#6B6357",
          fontStyle: "italic",
        }}
        {...props}
      />
    ),
    a: ({ href, children, ...rest }) => {
      const url = href ?? "#";
      const isInternal = url.startsWith("/");
      if (isInternal) {
        return (
          <Link
            href={url}
            style={{ color: "#A15E38", textDecorationColor: "#E8CBB2" }}
            {...rest}
          >
            {children}
          </Link>
        );
      }
      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#A15E38", textDecorationColor: "#E8CBB2" }}
          {...rest}
        >
          {children}
        </a>
      );
    },
    ...components,
  };
}
