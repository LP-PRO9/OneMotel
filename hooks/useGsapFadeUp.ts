"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useGsapFadeUp(
  containerRef: React.RefObject<HTMLElement | null>,
  options?: {
    heroSelector?: string;
    excludeSelectors?: string[];
    staggerSelector?: string;
    staggerTrigger?: string;
  }
) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const heroSel = options?.heroSelector ?? ".hero .fade-up";
      gsap.to(heroSel, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.18,
        delay: 0.3,
      });

      container.querySelectorAll(".fade-up").forEach((el) => {
        if (el.closest(".hero")) return;
        if (options?.excludeSelectors?.some((s) => el.matches(s))) return;
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });

      if (options?.staggerSelector && options?.staggerTrigger) {
        gsap.to(options.staggerSelector, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: options.staggerTrigger,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }
    }, container);

    return () => ctx.revert();
  }, [containerRef, options]);
}
