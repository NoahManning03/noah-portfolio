import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useIsTouch } from "../hooks/useMediaQuery";

export default function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  type,
  target,
  rel,
}) {
  const isTouch = useIsTouch();
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 280, damping: 18 });
  const springY = useSpring(y, { stiffness: 280, damping: 18 });

  const onMove = (event) => {
    if (isTouch || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.35);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.35);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const shared = {
    ref,
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    style: { x: springX, y: springY },
    className,
    onClick,
  };

  if (href) {
    return (
      <motion.a href={href} target={target} rel={rel} {...shared}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type={type || "button"} {...shared}>
      {children}
    </motion.button>
  );
}
