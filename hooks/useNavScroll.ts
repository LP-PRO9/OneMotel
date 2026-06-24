"use client";

import { useEffect } from "react";

export function useNavScroll(
  navRef: React.RefObject<HTMLElement | null>,
  options?: { withMarquee?: boolean; threshold?: number }
) {
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const onScroll = () => {
      if (options?.withMarquee) {
        const marqH =
          document.querySelector(".marquee-bar")?.getBoundingClientRect().height ??
          37;
        nav.classList.toggle("scrolled", window.scrollY >= marqH);
      } else {
        nav.classList.toggle("scrolled", window.scrollY > (options?.threshold ?? 40));
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [navRef, options?.withMarquee, options?.threshold]);
}
