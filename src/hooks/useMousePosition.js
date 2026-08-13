import { useEffect, useRef } from "react";

export function useMousePosition() {
  const mouse = useRef({ x: 0, y: 0, cx: 0, cy: 0 });

  useEffect(() => {
    const onMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -((event.clientY / window.innerHeight) * 2 - 1);
      mouse.current.cx = event.clientX;
      mouse.current.cy = event.clientY;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return mouse;
}
