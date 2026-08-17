import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HERO } from "../data/portfolio";
import { usePrefersReducedMotion } from "../hooks/useMediaQuery";

const GLYPHS = "01<>/\\|ΞΔΩ✦✧ intenseneural";

function scrambleToward(target, progress) {
  return target
    .split("")
    .map((char, index) => {
      if (char === " ") return " ";
      if (index / target.length < progress) return char;
      return GLYPHS[Math.floor((index * 17 + progress * 33) % GLYPHS.length)];
    })
    .join("");
}

export default function BootSequence({ onDone }) {
  const reduce = usePrefersReducedMotion();
  const [visible, setVisible] = useState(!reduce);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (reduce) {
      onDone?.();
      return undefined;
    }

    const started = performance.now();
    let frame;
    const tick = (now) => {
      const t = Math.min(1, (now - started) / 1600);
      setProgress(t);
      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        window.setTimeout(() => {
          setVisible(false);
          onDone?.();
        }, 280);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [onDone, reduce]);

  const label = scrambleToward(HERO.name.toUpperCase(), progress);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#05070c]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-8%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 scanlines opacity-40" />
          <div className="relative px-6 text-center">
            <p className="section-eyebrow mb-6">Initializing neural grid</p>
            <p className="font-mono text-2xl tracking-[0.18em] text-white sm:text-4xl">
              {label}
            </p>
            <div className="mx-auto mt-8 h-[2px] w-56 overflow-hidden rounded-full bg-slate-800">
              <motion.div
                className="h-full bg-gradient-to-r from-accent to-violet-cyber"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
