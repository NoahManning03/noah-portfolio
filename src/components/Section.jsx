import { motion } from "framer-motion";
import KineticTitle from "./KineticTitle";

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}) {
  return (
    <section
      id={id}
      data-depth-section
      className={`section depth-section scroll-mt-24 ${className}`}
    >
      <div className="container-page">
        {(eyebrow || title) && (
          <div className="mb-12 max-w-3xl">
            {eyebrow && (
              <motion.p
                initial={{ opacity: 1, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                className="section-eyebrow"
              >
                {eyebrow}
              </motion.p>
            )}
            {title && <KineticTitle text={title} />}
            {description && (
              <motion.p
                initial={{ opacity: 1, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.15 }}
                className="mt-4 leading-relaxed text-muted"
              >
                {description}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
