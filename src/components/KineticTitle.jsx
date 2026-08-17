import { motion } from "framer-motion";

export default function KineticTitle({ text, className = "" }) {
  const letters = Array.from(text);

  return (
    <h2 className={`section-title mt-3 flex flex-wrap ${className}`}>
      {letters.map((letter, index) => (
        <motion.span
          key={`${letter}-${index}`}
          initial={{ y: 12, opacity: 1 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.4,
            delay: index * 0.018,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block origin-bottom"
          style={{ whiteSpace: letter === " " ? "pre" : undefined }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </h2>
  );
}
