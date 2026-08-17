import { LenisContext, useLenis } from "../hooks/useLenis";

export default function SmoothScroll({ children }) {
  const lenisRef = useLenis();

  return (
    <LenisContext.Provider value={lenisRef}>
      <div className="smooth-scroll-wrapper">{children}</div>
    </LenisContext.Provider>
  );
}
