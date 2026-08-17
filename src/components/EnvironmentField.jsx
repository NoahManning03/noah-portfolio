import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../hooks/useMediaQuery";

export default function EnvironmentField() {
  const left = useRef(null);
  const right = useRef(null);
  const reduce = usePrefersReducedMotion();

  useEffect(() => {
    if (reduce) return undefined;

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      const shift = p * 420;
      if (left.current) {
        left.current.style.backgroundPosition = `0 ${-shift}px`;
        left.current.style.transform = `perspective(900px) rotateY(62deg) translateY(${p * -40}px)`;
      }
      if (right.current) {
        right.current.style.backgroundPosition = `0 ${-shift}px`;
        right.current.style.transform = `perspective(900px) rotateY(-62deg) translateY(${p * -40}px)`;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduce]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[2] overflow-hidden" aria-hidden>
      <div ref={left} className="env-wall env-wall-left" />
      <div ref={right} className="env-wall env-wall-right" />
      <div className="env-floor" />
    </div>
  );
}
