import { useEffect, useRef } from "react";
import { useIsTouch, usePrefersReducedMotion } from "../hooks/useMediaQuery";

export default function Atmosphere() {
  const spotlight = useRef(null);
  const isTouch = useIsTouch();
  const reduce = usePrefersReducedMotion();

  useEffect(() => {
    if (isTouch || reduce || !spotlight.current) return undefined;
    const el = spotlight.current;
    const onMove = (event) => {
      el.style.background = `radial-gradient(520px circle at ${event.clientX}px ${event.clientY}px, rgba(47,129,247,0.10), transparent 46%)`;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [isTouch, reduce]);

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[1] bg-gradient-to-b from-[#0b0f17]/45 via-transparent to-[#0b0f17]/80"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed -left-1/4 top-[-10%] z-[1] h-[50vh] w-[70vw] animate-aurora rounded-full bg-accent/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed -right-1/4 top-[30%] z-[1] h-[40vh] w-[50vw] animate-aurora rounded-full bg-violet-cyber/10 blur-3xl"
        style={{ animationDelay: "2.5s" }}
      />
      <div
        ref={spotlight}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[2] mix-blend-screen"
      />
      <div aria-hidden className="pointer-events-none fixed inset-0 z-[3] scanlines opacity-30" />
      <div aria-hidden className="noise pointer-events-none fixed inset-0 z-[3] opacity-[0.07]" />
    </>
  );
}
