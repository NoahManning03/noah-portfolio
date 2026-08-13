import { SKILLS } from "../data/portfolio";

export default function SkillMarquee() {
  const items = SKILLS.flatMap((group) => group.items);
  const row = [...items, ...items];

  return (
    <div className="relative mb-10 overflow-hidden border-y border-slate-800/70 py-3">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg to-transparent" />
      <div className="flex w-max animate-marquee gap-3 pr-3">
        {row.map((skill, index) => (
          <span
            key={`${skill}-${index}`}
            className="rounded-full border border-slate-800/80 bg-[#111622]/70 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-400"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
