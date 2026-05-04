import { motion } from "framer-motion";
import Section from "./Section";
import { EXPERIENCE } from "../data/portfolio";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <motion.ol
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative ml-3 border-l border-bg-border"
      >
        {EXPERIENCE.map((job) => (
          <motion.li
            key={`${job.company}-${job.role}`}
            variants={item}
            className="relative pl-8 pb-12 last:pb-0"
          >
            <span
              aria-hidden
              className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border border-accent bg-bg shadow-[0_0_0_4px_rgba(99,102,241,0.10)]"
            />

            <div className="card card-hover p-6 sm:p-7">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {job.role}
                  </h3>
                  <p className="mt-0.5 text-sm text-accent">
                    {job.company}
                  </p>
                </div>
                <div className="mt-1 text-xs text-zinc-400 sm:mt-0 sm:text-right">
                  <div>{job.dates}</div>
                  <div className="mt-0.5">{job.location}</div>
                </div>
              </div>

              <ul className="mt-5 space-y-2.5">
                {job.bullets.map((b) => (
                  <li
                    key={b}
                    className="relative pl-5 text-sm leading-relaxed text-zinc-300"
                  >
                    <span
                      aria-hidden
                      className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-accent/70"
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  );
}
