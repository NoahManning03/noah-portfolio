import { motion } from "framer-motion";
import Section from "./Section";
import { PROJECTS } from "../data/portfolio";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Things I've built">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid gap-6 md:grid-cols-2"
      >
        {PROJECTS.map((p) => (
          <motion.article
            key={p.name}
            variants={item}
            className="card card-hover group flex flex-col p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-accent">{p.tagline}</p>
              </div>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-bg-border text-zinc-400 transition-colors group-hover:border-accent/50 group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17L17 7M9 7h8v8"
                  />
                </svg>
              </span>
            </div>

            <p className="mt-3 text-xs uppercase tracking-[0.14em] text-zinc-500">
              {p.meta}
            </p>

            <ul className="mt-5 space-y-2.5">
              {p.bullets.map((b) => (
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

            <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-bg-border">
              {p.stack.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
