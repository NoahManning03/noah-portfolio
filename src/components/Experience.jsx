import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "./Section";
import { EXPERIENCE } from "../data/portfolio";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const listRef = useRef(null);
  const beamRef = useRef(null);

  useEffect(() => {
    const list = listRef.current;
    const beam = beamRef.current;
    if (!list || !beam) return;

    const cards = list.querySelectorAll(".exp-card");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        beam,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: list,
            start: "top 65%",
            end: "bottom 35%",
            scrub: 0.45,
          },
        }
      );

      cards.forEach((card) => {
        gsap.from(card, {
          x: -24,
          duration: 0.6,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: card,
            start: "top 92%",
            once: true,
          },
        });

        ScrollTrigger.create({
          trigger: card,
          start: "top 58%",
          end: "bottom 42%",
          toggleClass: { targets: card, className: "is-active-exp" },
        });
      });
    }, list);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <ol ref={listRef} className="relative ml-3 border-l border-slate-800/80">
        <div
          ref={beamRef}
          aria-hidden
          className="absolute -left-px top-0 h-full w-[3px] origin-top rounded-full"
          style={{
            background: "linear-gradient(to bottom, #2f81f7, #a855f7)",
            boxShadow: "0 0 18px rgba(47, 129, 247, 0.65)",
            transform: "scaleY(0)",
          }}
        />

        {EXPERIENCE.map((job) => (
          <li
            key={`${job.company}-${job.role}`}
            className="relative pb-12 pl-8 last:pb-0"
          >
            <span
              aria-hidden
              className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border border-accent bg-bg shadow-[0_0_0_4px_rgba(47,129,247,0.12)]"
            />

            <div className="exp-card card card-hover p-6 sm:p-7">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-[#f8fafc]">
                    {job.role}
                  </h3>
                  <p className="mt-0.5 text-sm text-accent">{job.company}</p>
                </div>
                <div className="mt-1 font-mono text-xs text-slate-400 sm:mt-0 sm:text-right">
                  <div>{job.dates}</div>
                  <div className="mt-0.5">{job.location}</div>
                </div>
              </div>

              <ul className="mt-5 space-y-2.5">
                {job.bullets.map((b) => (
                  <li
                    key={b}
                    className="relative pl-5 text-sm leading-relaxed text-slate-100"
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
          </li>
        ))}
      </ol>
    </Section>
  );
}
