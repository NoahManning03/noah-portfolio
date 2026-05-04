import { motion } from "framer-motion";
import { CONTACT } from "../data/portfolio";

const fade = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

function MailIcon() {
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
        d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.6 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V22h-4.55v-6.34c0-1.51-.03-3.45-2.1-3.45-2.1 0-2.42 1.64-2.42 3.34V22H7.82V8z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.36-3.37-1.36-.46-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.13-4.55-5.04 0-1.11.39-2.02 1.03-2.74-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.04A9.4 9.4 0 0112 6.84c.85.004 1.71.12 2.51.34 1.91-1.31 2.75-1.04 2.75-1.04.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.74 0 3.92-2.34 4.78-4.57 5.03.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.6.69.49A10.04 10.04 0 0022 12.26C22 6.58 17.52 2 12 2z"
      />
    </svg>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="section scroll-mt-24 border-t border-bg-border"
    >
      <div className="container-page">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <motion.p
            custom={0}
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="section-eyebrow"
          >
            Contact
          </motion.p>

          <motion.h2
            custom={1}
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="section-title mt-3"
          >
            Get in touch
          </motion.h2>

          <motion.p
            custom={2}
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mt-4 text-zinc-400 text-base sm:text-lg"
          >
            {CONTACT.blurb}
          </motion.p>

          <motion.div
            custom={3}
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <a href={`mailto:${CONTACT.email}`} className="btn-primary">
              <MailIcon />
              {CONTACT.email}
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-secondary"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-secondary"
            >
              <GithubIcon />
              GitHub
            </a>
          </motion.div>
        </div>

        <div className="mt-24 border-t border-bg-border pt-8 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Noah Manning. Built with React,
          Tailwind, and Framer Motion.
        </div>
      </div>
    </section>
  );
}
