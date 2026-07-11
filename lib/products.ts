export type Product = {
  slug: string;
  img: string;
  title: string;
  desc: string;
  price: string;
  priceNum: number;
  badge: string;
  tone: string;
  /** short name of the clay/active shown inside the "INSIDE" cutaway svg */
  activeLabel: string;
  long: string;
  ingredients: { name: string; body: string; bg: string; color: string }[];
};

export const products: Product[] = [
  {
    slug: "multani-mitti",
    img: "/assets/pack-multani-mitti.png",
    title: "Multani Mitti",
    desc: "Oil control, deep clean & detox with mineral-rich clay.",
    price: "₹25",
    priceNum: 25,
    badge: "Best Seller",
    tone: "#8A6A4A",
    activeLabel: "MULTANI MITTI",
    long: "A freshly activated clay ritual. Press to release pure rose water into mineral-rich Multani Mitti — a smooth, cooling cream forms in seconds, no bowl required.",
    ingredients: [
      { name: "Pure Rose Water", body: "Steam-distilled from fresh petals. Tones, hydrates and activates the clay into a silky cream.", bg: "#F5E8E8", color: "#7A5C5A" },
      { name: "Multani Mitti Clay", body: "Mineral-rich fuller's earth that draws out impurities, absorbs excess oil and refines pores.", bg: "#F3ECDF", color: "#7A6249" },
    ],
  },
  {
    slug: "orange-peel",
    img: "/assets/pack-orange-peel.png",
    title: "Orange Peel",
    desc: "Tan removal & brightening for a natural, even glow.",
    price: "₹25",
    priceNum: 25,
    badge: "Brightening",
    tone: "#E08A2E",
    activeLabel: "ORANGE PEEL",
    long: "A freshly activated brightening ritual. Press to flood pure rose water into vitamin-C-rich orange peel and clay — a fresh, glow-boosting cream forms in seconds.",
    ingredients: [
      { name: "Pure Rose Water", body: "Steam-distilled from fresh petals. Tones, hydrates and activates the blend into a silky cream.", bg: "#F5E8E8", color: "#7A5C5A" },
      { name: "Orange Peel & Clay", body: "Vitamin-C-rich orange peel with mineral clay that lifts tan and brightens for an even, natural glow.", bg: "#F6ECD9", color: "#8A6A2E" },
    ],
  },
  {
    slug: "de-tan",
    img: "/assets/pack-de-tan.png",
    title: "De-Tan",
    desc: "Turmeric & clay that lift tan and even skin tone.",
    price: "₹25",
    priceNum: 25,
    badge: "Renewing",
    tone: "#C79A2E",
    activeLabel: "DE-TAN",
    long: "A freshly activated renewing ritual. Press to release pure rose water into turmeric and clay — a warm, tan-lifting cream forms in seconds, no bowl required.",
    ingredients: [
      { name: "Pure Rose Water", body: "Steam-distilled from fresh petals. Tones, hydrates and activates the blend into a silky cream.", bg: "#F5E8E8", color: "#7A5C5A" },
      { name: "Turmeric & Clay", body: "Antioxidant turmeric with mineral clay that gently lifts tan and evens out skin tone.", bg: "#F5EDD5", color: "#8A712E" },
    ],
  },
  {
    slug: "korean-glow",
    img: "/assets/pack-korean-glow.png",
    title: "Korean Glow",
    desc: "Rice, clay & oat for glass-skin softness.",
    price: "₹25",
    priceNum: 25,
    badge: "New",
    tone: "#7C93A6",
    activeLabel: "KOREAN GLOW",
    long: "A freshly activated glass-skin ritual. Press to blend pure rose water with rice, clay and oat — a soft, luminous cream forms in seconds for that dewy Korean glow.",
    ingredients: [
      { name: "Pure Rose Water", body: "Steam-distilled from fresh petals. Tones, hydrates and activates the blend into a silky cream.", bg: "#F5E8E8", color: "#7A5C5A" },
      { name: "Rice, Clay & Oat", body: "Brightening rice with soothing oat and fine clay for smooth, plump, glass-skin softness.", bg: "#EAEEF1", color: "#546272" },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
