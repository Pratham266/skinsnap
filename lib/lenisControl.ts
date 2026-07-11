import type Lenis from "lenis";

/**
 * Shared handle on the global Lenis instance so modals can freeze page
 * scrolling while they're open. Lenis hijacks wheel events at the window level,
 * so simply setting `overflow:hidden` isn't enough — we must call `lenis.stop()`
 * too, otherwise the background scrolls "through" an open modal.
 *
 * A lock counter keeps things correct if more than one overlay is open during a
 * transition (e.g. cart → checkout).
 */
let lenisRef: Lenis | null = null;
let locks = 0;

export function registerLenis(instance: Lenis | null) {
  lenisRef = instance;
}

export function lockScroll() {
  locks += 1;
  if (locks === 1) {
    lenisRef?.stop();
    if (typeof document !== "undefined") {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    }
  }
}

export function unlockScroll() {
  locks = Math.max(0, locks - 1);
  if (locks === 0) {
    lenisRef?.start();
    if (typeof document !== "undefined") {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
  }
}
