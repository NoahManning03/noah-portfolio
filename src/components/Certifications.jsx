import { motion } from "framer-motion";
import Section from "./Section";
import { CERTIFICATIONS } from "../data/portfolio";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function CertIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Credentials"
      description="Industry certifications across cloud, security, and AI."
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {CERTIFICATIONS.map((cert) => (
          <motion.div
            key={cert.name}
            variants={item}
            className="card card-hover flex items-start gap-4 p-5"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-bg-border bg-bg-soft text-accent">
              <CertIcon />
            </span>
            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-white leading-snug">
                {cert.name}
              </h3>
              <p className="mt-1 text-xs text-zinc-400">{cert.issuer}</p>
              <a
                href="https://www.credly.com/users/noah-manning.2975d7d4"
                target="_blank"
                rel="noreferrer noopener"
                className="mt-2 inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-medium transition-colors hover:brightness-110"
                style={{
                  backgroundColor: "rgba(251, 146, 60, 0.15)",
                  color: "#fb923c",
                  border: "1px solid rgba(251, 146, 60, 0.3)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Credly
              </a>
              <p className="mt-2 text-xs text-zinc-500">{cert.date}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
