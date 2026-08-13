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
        const yaw = index % 2 === 0 ? 16 : -16;
        gsap.set(el, { transformPerspective: 1400, transformOrigin: "50% 18%" });
        gsap
          .timeline({
            scrollTrigger: {
              trigger: el,
              start: "top 92%",
              end: "bottom top",
              scrub: 0.75,
            },
          })
          .fromTo(
            el,
            {
              rotateX: 18,
              rotateY: yaw,
              z: -260,
              y: 70,
              opacity: 0.18,
            },
            {
              rotateX: 0,
              rotateY: 0,
              z: 0,
              y: 0,
              opacity: 1,
              ease: "none",
              duration: 0.38,
            }
          )
          .to(el, {
            rotateX: -12,
            rotateY: yaw * -0.35,
            z: -140,
            opacity: 0.55,
            ease: "none",
            duration: 0.32,
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
