import { useEffect, useState } from "react";

/**
 * Tracks which section id is currently most-visible in the viewport.
 * Uses IntersectionObserver for accuracy and adds a small viewport bias
 * so the "active" section is the one near the top half of the screen.
 */
export function useActiveSection(ids, { rootMargin = "-40% 0px -55% 0px" } = {}) {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, rootMargin]);

  return activeId;
}
