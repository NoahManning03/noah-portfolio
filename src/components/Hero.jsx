import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HERO } from "../data/portfolio";

function useTypewriter(text, speed = 45, startDelay = 350) {
  const [output, setOutput] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    let typeId;
    const startId = setTimeout(() => {
      typeId = setInterval(() => {
        i += 1;
        setOutput(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(typeId);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(startId);
      if (typeId) clearInterval(typeId);
    };
  }, [text, speed, startDelay]);

  return { output, done };
}

const fade = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

export default function Hero() {
  const { output, done } = useTypewriter(HERO.typingPhrase);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(800px 500px at 15% 10%, rgba(99, 102, 241, 0.10), transparent 60%), radial-gradient(700px 400px at 90% 30%, rgba(99, 102, 241, 0.06), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at 50% 30%, black 40%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 30%, black 40%, transparent 75%)",
        }}
      />

      <div className="container-page">
        <motion.p
          custom={0}
          variants={fade}
          initial="hidden"
          animate="visible"
          className="section-eyebrow"
        >
          Portfolio
        </motion.p>

        <motion.h1
          custom={1}
          variants={fade}
          initial="hidden"
          animate="visible"
          className="mt-6 text-5xl font-bold tracking-tightish text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {HERO.name}
        </motion.h1>

        <motion.div
          custom={2}
          variants={fade}
          initial="hidden"
          animate="visible"
          className="mt-6 min-h-[2.25rem] text-lg sm:text-xl md:text-2xl text-zinc-300"
        >
          <span>{output}</span>
          <span
            aria-hidden
            className={`ml-1 inline-block w-[2px] translate-y-[2px] bg-accent ${
              done ? "h-5 sm:h-6" : "h-5 sm:h-6 animate-blink-caret"
            }`}
            style={{ animation: "blink 1s step-end infinite" }}
          />
        </motion.div>

        <motion.p
          custom={3}
          variants={fade}
          initial="hidden"
          animate="visible"
          className="mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-400"
        >
          {HERO.paragraph}
        </motion.p>

        <motion.div
          custom={4}
          variants={fade}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            onClick={scrollTo("projects")}
            className="btn-primary"
          >
            View My Work
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 5l7 7-7 7"
              />
            </svg>
          </a>
          <a
            href="#contact"
            onClick={scrollTo("contact")}
            className="btn-secondary"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      <a
        href="#about"
        onClick={scrollTo("about")}
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 transition-colors hover:text-zinc-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          className="animate-bounce"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 14l-7 7-7-7M19 6l-7 7-7-7"
          />
        </svg>
      </a>
    </section>
  );
}
