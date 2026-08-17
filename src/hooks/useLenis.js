import { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const LenisContext = createContext(null);

export function useLenisScroll() {
  return useContext(LenisContext);
}

export function useLenis() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    const ticker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    const refresh = () => ScrollTrigger.refresh();
    const timeoutId = window.setTimeout(refresh, 300);
    window.addEventListener("load", refresh);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("load", refresh);
      lenisRef.current = null;
      lenis.destroy();
      gsap.ticker.remove(ticker);
    };
  }, []);

  return lenisRef;
}
