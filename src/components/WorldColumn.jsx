import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "../hooks/useMediaQuery";

gsap.registerPlugin(ScrollTrigger);

export default function WorldColumn({ children }) {
  const root = useRef(null);
  const reduce = usePrefersReducedMotion();

  useEffect(() => {
    if (reduce || !root.current) return undefined;

    const sections = root.current.querySelectorAll("[data-depth-section]");
    const ctx = gsap.context(() => {
      sections.forEach((el, index) => {
        const yaw = index % 2 === 0 ? 7 : -7;
        gsap.set(el, {
          transformPerspective: 1400,
          transformOrigin: "50% 12%",
          opacity: 1,
        });
        gsap.from(el, {
          y: 36,
          rotateX: 6,
          rotateY: yaw,
          duration: 0.7,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            once: true,
          },
        });
      });
    }, root);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <div ref={root} className="world-stage">
      {children}
    </div>
  );
}
