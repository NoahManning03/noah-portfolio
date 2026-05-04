import { motion } from "framer-motion";
import Section from "./Section";
import { ABOUT } from "../data/portfolio";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="lg:col-span-3"
        >
          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            {ABOUT.bio}
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="lg:col-span-2"
        >
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {ABOUT.stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={item}
                className="card card-hover p-5"
              >
                <div className="text-2xl sm:text-3xl font-semibold tracking-tightish text-white">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-zinc-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
