import { motion } from "framer-motion";
import Section from "./Section";
import { SKILLS } from "../data/portfolio";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I work with"
      description="A snapshot of the languages, platforms, and frameworks I use across security, cloud, AI, and software engineering."
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {SKILLS.map((group) => (
          <motion.div
            key={group.category}
            variants={item}
            className="card card-hover p-6"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
              {group.category}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
