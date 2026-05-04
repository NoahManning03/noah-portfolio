import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}) {
  return (
    <section id={id} className={`section scroll-mt-24 ${className}`}>
      <div className="container-page">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {(eyebrow || title) && (
            <div className="mb-12 max-w-2xl">
              {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
              {title && (
                <h2 className="section-title mt-3">{title}</h2>
              )}
              {description && (
                <p className="mt-4 text-zinc-400 leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
