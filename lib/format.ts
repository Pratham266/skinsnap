/** Format a rupee amount, e.g. formatINR(50) -> "₹50". */
export function formatINR(n: number): string {
  return `₹${n.toLocaleString("en-IN")}`;
}
