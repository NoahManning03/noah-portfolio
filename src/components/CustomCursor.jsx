import { useEffect, useRef } from "react";
import { useIsTouch, usePrefersReducedMotion } from "../hooks/useMediaQuery";

export default function CustomCursor() {
  const isTouch = useIsTouch();
  const reduce = usePrefersReducedMotion();
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    if (isTouch || reduce) return undefined;
    document.body.classList.add("has-custom-cursor");

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ringPos = { x: pos.x, y: pos.y };
    let hover = false;

    const onMove = (event) => {
      pos.x = event.clientX;
      pos.y = event.clientY;
      const target = event.target;
      hover = Boolean(
        target?.closest?.("a, button, input, textarea, [data-cursor='hover']")
      );
    };

    let frame;
    const loop = () => {
      ringPos.x += (pos.x - ringPos.x) * 0.18;
      ringPos.y += (pos.y - ringPos.y) * 0.18;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${pos.x - 3}px, ${pos.y - 3}px, 0)`;
      }
      if (ring.current) {
        const scale = hover ? 1.85 : 1;
        ring.current.style.transform = `translate3d(${ringPos.x - 16}px, ${ringPos.y - 16}px, 0) scale(${scale})`;
        ring.current.style.borderColor = hover
          ? "rgba(168, 85, 247, 0.85)"
          : "rgba(47, 129, 247, 0.7)";
      }
      frame = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    frame = requestAnimationFrame(loop);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [isTouch, reduce]);

  if (isTouch || reduce) return null;

  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[70] h-1.5 w-1.5 rounded-full bg-white mix-blend-difference"
      />
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[70] h-8 w-8 rounded-full border border-accent/70"
      />
    </>
  );
}
