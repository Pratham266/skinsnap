import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "SkinSnap — Fresh Clay. Zero Mess.",
  description:
    "Freshly activated natural face packs with dual-chamber innovation. Press to mix rose water and clay — no bowl, no spoon, no mess.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SmoothScroll>
          <CartProvider>{children}</CartProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
