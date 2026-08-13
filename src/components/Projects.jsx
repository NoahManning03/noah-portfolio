import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Section from "./Section";
import { PROJECTS } from "../data/portfolio";
import { useHighlight } from "../context/HighlightContext";
import { useIsTouch } from "../hooks/useMediaQuery";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 40, rotateY: 20, rotateX: 12, z: -120, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    rotateY: 0,
    rotateX: 0,
    z: 0,
    scale: 1,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

function TiltCard({ children, highlighted, disabled }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-120, 120], [14, -14]), {
    stiffness: 220,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(x, [-120, 120], [-14, 14]), {
    stiffness: 220,
    damping: 22,
  });
  const shine = useMotionTemplate`radial-gradient(360px circle at ${mouseX}px ${mouseY}px, rgba(47,129,247,0.22), rgba(168,85,247,0.08) 28%, transparent 48%)`;

  const onMove = (event) => {
    if (disabled) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const px = event.clientX - rect.left;
    const py = event.clientY - rect.top;
    mouseX.set(px);
    mouseY.set(py);
    x.set(px - rect.width / 2);
    y.set(py - rect.height / 2);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      variants={item}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        rotateX: disabled ? 0 : rotateX,
        rotateY: disabled ? 0 : rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`card card-hover relative flex flex-col overflow-hidden p-7 ${
        highlighted ? "project-pulse" : ""
      }`}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-xl"
        style={{ background: shine }}
      />
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </motion.article>
  );
}

export default function Projects() {
  const isTouch = useIsTouch();
  const { isProjectHighlighted } = useHighlight();

  return (
    <Section id="projects" eyebrow="Projects" title="Things I've built">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
        className="grid gap-6 md:grid-cols-2"
        style={{ perspective: 1200 }}
      >
        {PROJECTS.map((p) => (
          <TiltCard
            key={p.name}
            disabled={isTouch}
            highlighted={isProjectHighlighted(p)}
          >
            <div>
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold text-[#f8fafc]">{p.name}</h3>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-1 rounded-full border border-accent/40 bg-accent-soft px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-accent transition hover:border-accent/70 hover:shadow-glow"
                  >
                    Live
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M7 17L17 7M17 7H8M17 7v9" />
                    </svg>
                    <span className="sr-only">Open {p.name} in a new tab</span>
                  </a>
                )}
              </div>
              <p className="mt-1 text-sm text-accent">{p.tagline}</p>
            </div>

            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">
              {p.meta}
            </p>

            <ul className="mt-5 space-y-2.5">
              {p.bullets.map((b) => (
                <li
                  key={b}
                  className="relative pl-5 text-sm leading-relaxed text-slate-300"
                >
                  <span
                    aria-hidden
                    className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-accent/70"
                  />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-800/80 pt-4">
              {p.stack.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </TiltCard>
        ))}
      </motion.div>
    </Section>
  );
}
