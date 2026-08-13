import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HERO } from "../data/portfolio";
import { useIsMobile, useIsTouch } from "../hooks/useMediaQuery";
import { useLenisScroll } from "../hooks/useLenis";
import headshotImg from "../assets/headshot.jpg";
import MagneticButton from "./MagneticButton";

const HeroCanvas = lazy(() => import("./canvas/HeroCanvas"));

function useTypewriter(text, speed = 38, startDelay = 700) {
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
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.35 + i * 0.12 },
  }),
};

export default function Hero() {
  const { output, done } = useTypewriter(HERO.typingPhrase);
  const isMobile = useIsMobile();
  const isTouch = useIsTouch();
  const lenisRef = useLenisScroll();

  const handleScrollTo = (event, id) => {
    event.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const lenis = lenisRef?.current;
    if (lenis) {
      lenis.scrollTo(el, { offset: -72 });
    } else {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-x-clip pt-20"
    >
      {!isMobile && (
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[54vw] lg:block">
          <div className="pointer-events-auto h-full w-full">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 animate-float rounded-full bg-accent/10 blur-3xl" />
            <Suspense fallback={null}>
              <HeroCanvas isTouch={isTouch} />
            </Suspense>
          </div>
        </div>
      )}

      <div className="container-page relative z-10 grid w-full items-center gap-12 lg:grid-cols-2">
        <div>
          <motion.div
            custom={0}
            variants={fade}
            initial="hidden"
            animate="visible"
            className="relative inline-flex max-w-full"
          >
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-blue-500/50 bg-200% animate-gradient-x" />
            <div className="relative flex items-center gap-4 rounded-2xl bg-[#111622]/75 px-4 py-3 backdrop-blur-xl">
              <img
                src={headshotImg}
                alt="Noah Manning"
                className="h-20 w-20 rounded-full object-cover object-top ring-2 ring-accent/50 sm:h-24 sm:w-24"
              />
              <p className="section-eyebrow !tracking-[0.16em]">Portfolio</p>
            </div>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fade}
            initial="hidden"
            animate="visible"
            className="mt-6 text-5xl font-bold tracking-tightish text-[#f8fafc] sm:text-6xl md:text-7xl"
          >
            {HERO.name.split("").map((letter, index) => (
              <motion.span
                key={`${letter}-${index}`}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.45 + index * 0.04, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            custom={2}
            variants={fade}
            initial="hidden"
            animate="visible"
            className="mt-6 min-h-[2.25rem] text-lg text-slate-300 sm:text-xl md:text-2xl"
          >
            <span>{output}</span>
            <span
              aria-hidden
              className={`ml-1 inline-block h-5 w-[2px] translate-y-[2px] bg-accent sm:h-6 ${
                done ? "" : "animate-blink-caret"
              }`}
              style={{ animation: "blink 1s step-end infinite" }}
            />
          </motion.div>

          <motion.p
            custom={3}
            variants={fade}
            initial="hidden"
            animate="visible"
            className="mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
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
            <MagneticButton
              href="#projects"
              onClick={(event) => handleScrollTo(event, "projects")}
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
            </MagneticButton>
            <MagneticButton
              href="#contact"
              onClick={(event) => handleScrollTo(event, "contact")}
              className="btn-secondary"
            >
              Contact Me
            </MagneticButton>
          </motion.div>
        </div>

        <div className="hidden lg:block" aria-hidden />
      </div>

      <a
        href="#about"
        onClick={(event) => handleScrollTo(event, "about")}
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 transition-colors hover:text-slate-300"
      >
        <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em]">
          Scroll
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          className="mx-auto animate-bounce"
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
