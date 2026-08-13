import { motion } from "framer-motion";
import Section from "./Section";
import SkillMarquee from "./SkillMarquee";
import { SKILLS } from "../data/portfolio";
import { useHighlight } from "../context/HighlightContext";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 24, rotateY: -16, rotateX: 14, z: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateY: 0,
    rotateX: 0,
    z: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

function categoryTokens(group) {
  const fromName = group.category
    .split(/[&/,]| and /i)
    .map((part) => part.trim())
    .filter((part) => part.length > 2);
  return [...fromName, ...group.items];
}

export default function Skills() {
  const { pulseKeywords, clearPulse } = useHighlight();

  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I work with"
      description="A snapshot of the languages, platforms, and frameworks I use across security, cloud, AI, and software engineering."
    >
      <SkillMarquee />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        style={{ perspective: 900 }}
      >
        {SKILLS.map((group) => (
          <motion.div
            key={group.category}
            variants={item}
            onMouseEnter={() => pulseKeywords(categoryTokens(group))}
            onMouseLeave={clearPulse}
            onFocus={() => pulseKeywords(categoryTokens(group))}
            onBlur={clearPulse}
            tabIndex={0}
            whileHover={{ y: -6 }}
            className="card card-hover group p-6 outline-none focus-visible:ring-2 focus-visible:ring-accent-ring"
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                {group.category}
              </h3>
              <span className="font-mono text-[10px] text-slate-500">
                {String(group.items.length).padStart(2, "0")}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
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
