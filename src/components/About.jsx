import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "./Section";
import { ABOUT } from "../data/portfolio";

gsap.registerPlugin(ScrollTrigger);

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 28, rotateY: 18, rotateX: 10, z: -80 },
  visible: {
    opacity: 1,
    y: 0,
    rotateY: 0,
    rotateX: 0,
    z: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function parseStat(value) {
  const match = String(value).match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { numeric: null, suffix: String(value), decimals: 0 };
  const decimals = match[1].includes(".") ? match[1].split(".")[1].length : 0;
  return { numeric: parseFloat(match[1]), suffix: match[2], decimals };
}

function StatCard({ stat }) {
  const valueRef = useRef(null);
  const { numeric, suffix, decimals } = parseStat(stat.value);

  useEffect(() => {
    if (!valueRef.current) return;
    if (numeric == null) {
      valueRef.current.textContent = suffix;
      return;
    }

    const obj = { val: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: numeric,
        duration: 1.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: valueRef.current,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          if (valueRef.current) {
            valueRef.current.textContent = `${obj.val.toFixed(decimals)}${suffix}`;
          }
        },
      });
    });

    return () => ctx.revert();
  }, [numeric, suffix, decimals]);

  return (
    <motion.div
      variants={item}
      whileHover={{ y: -6, scale: 1.03 }}
      className="card card-hover p-5"
    >
      <div
        ref={valueRef}
        className="text-2xl font-semibold tracking-tightish text-[#f8fafc] sm:text-3xl"
      >
        {numeric == null ? suffix : `${(0).toFixed(decimals)}${suffix}`}
      </div>
      <div className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</div>
    </motion.div>
  );
}

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="grid gap-10 lg:grid-cols-5 lg:gap-16" style={{ perspective: 1200 }}>
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="lg:col-span-3"
        >
          <div className="card p-6 sm:p-8">
            <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
              {ABOUT.bio}
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="lg:col-span-2"
        >
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {ABOUT.stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
