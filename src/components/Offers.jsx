import { motion } from "framer-motion";
import Section from "./Section";
import { OFFERS } from "../data/portfolio";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 1, y: 18, rotateY: 8, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    rotateY: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function VerifiedBadge() {
  return (
    <span
      title="Offer received"
      className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent-soft px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-accent"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6L9 17l-5-5" />
      </svg>
      Offer
    </span>
  );
}

function AcceptedBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-green-400">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6L9 17l-5-5" />
      </svg>
      Accepted
    </span>
  );
}

export default function Offers() {
  return (
    <Section id="offers" eyebrow="Recognition" title="Offers Received">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-4 sm:grid-cols-2"
        style={{ perspective: 1100 }}
      >
        {OFFERS.map((offer) => (
          <motion.div
            key={offer.company}
            variants={item}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
            className={`card card-hover flex items-start justify-between gap-4 p-6 ${
              offer.accepted ? "shadow-glow" : ""
            }`}
          >
            <div className="min-w-0">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
                {offer.logo}
              </p>
              <h3 className="mt-1 text-base font-semibold leading-snug text-[#f8fafc]">
                {offer.company}
              </h3>
              <p className="mt-1 text-sm text-slate-300">{offer.role}</p>
              <p className="mt-2 text-xs text-slate-500">{offer.location}</p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <VerifiedBadge />
              {offer.accepted && <AcceptedBadge />}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
