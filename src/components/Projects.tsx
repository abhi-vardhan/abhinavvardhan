const projects = [
  {
    id: 1,
    icon: { bg: "#1a5c38", char: "B", color: "#4ade80" },
    title: "Buddi — The free subscriptions manager",
    desc: "A beautifully crafted iOS widget bridge that helps you keep track and gain insights on your subscriptions, and avoid overspending without even opening the app.",
    tags: ["React Native", "iOS"],
    link: "#",
    mockup: "phone",
    mockupAccent: "#4ade80",
  },
  {
    id: 2,
    icon: { bg: "#1e3a5f", char: "M", color: "#60a5fa" },
    title: "Maact Documentation",
    desc: "This is a documentation project and UI component library built with React, TypeScript and Storybook. Features live examples, code snippets, and interactive playground.",
    tags: ["React", "TypeScript"],
    link: "#",
    mockup: "desktop",
    mockupAccent: "#60a5fa",
  },
  {
    id: 3,
    icon: { bg: "#3b1f2b", char: "S", color: "#f472b6" },
    title: "Storybook Documentation",
    desc: "A comprehensive design system documentation site built on top of Storybook. Includes component specs, usage guidelines, and accessibility notes for a mid-size SaaS product.",
    tags: ["Storybook", "Design Systems"],
    link: "#",
    mockup: "docs",
    mockupAccent: "#f472b6",
  },
];

function PhoneMockup({ accent }: { accent: string }) {
  return (
    <div className="relative w-full h-full flex items-center justify-end pr-4">
      {/* Phone frame */}
      <div
        className="relative w-[140px] h-[260px] rounded-[28px] border border-white/20 overflow-hidden flex-shrink-0"
        style={{ background: "#0a0a0a", boxShadow: `0 0 40px ${accent}30` }}
      >
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-2 rounded-full bg-black z-10" />
        {/* Screen */}
        <div className="absolute inset-1 rounded-[22px] overflow-hidden" style={{ background: "#111" }}>
          {/* App header */}
          <div className="px-3 pt-5 pb-2">
            <div className="text-[8px] text-white/40 mb-0.5">Subscriptions</div>
            <div className="text-xl font-bold text-white" style={{ color: accent }}>$10.84</div>
            <div className="text-[7px] text-white/30">this month</div>
          </div>
          {/* Mini cards */}
          {[
            { name: "Netflix", price: "$4.99", color: "#ef4444" },
            { name: "Spotify", price: "$2.99", color: accent },
            { name: "iCloud",  price: "$0.99", color: "#3b82f6" },
          ].map((s) => (
            <div key={s.name} className="mx-2 mb-1 px-2 py-1.5 rounded-lg flex items-center justify-between" style={{ background: "#1a1a1a" }}>
              <div className="w-4 h-4 rounded-md flex-shrink-0" style={{ background: s.color }} />
              <span className="text-[7px] text-white/70 flex-1 ml-1">{s.name}</span>
              <span className="text-[7px] font-mono" style={{ color: s.color }}>{s.price}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Floating price card */}
      <div
        className="absolute top-6 right-0 px-3 py-2 rounded-xl text-xs font-bold text-white"
        style={{ background: accent, boxShadow: `0 4px 20px ${accent}60` }}
      >
        $10.84
      </div>
    </div>
  );
}

function DesktopMockup({ accent }: { accent: string }) {
  return (
    <div className="relative w-full h-full flex items-center justify-end">
      <div
        className="w-full max-w-[320px] h-[200px] rounded-xl border border-white/10 overflow-hidden flex-shrink-0"
        style={{ background: "#0d1117", boxShadow: `0 0 40px ${accent}20` }}
      >
        {/* Window bar */}
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5">
          <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
          <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
          <div className="w-2 h-2 rounded-full bg-[#28c840]" />
          <div className="flex-1 ml-2 h-2 rounded bg-white/5" />
        </div>
        {/* Code-like content */}
        <div className="p-3 space-y-1.5">
          {[accent + "80", "#ffffff30", "#ffffff20", accent + "60", "#ffffff25", "#ffffff15"].map((c, i) => (
            <div key={i} className="h-1.5 rounded-full" style={{ background: c, width: `${[85,65,72,55,78,45][i]}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function DocsMockup({ accent }: { accent: string }) {
  return (
    <div className="relative w-full h-full flex items-center justify-end">
      <div
        className="w-full max-w-[320px] h-[200px] rounded-xl border border-white/10 overflow-hidden flex-shrink-0"
        style={{ background: "#111", boxShadow: `0 0 40px ${accent}20` }}
      >
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5">
          <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
          <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
          <div className="w-2 h-2 rounded-full bg-[#28c840]" />
          <div className="flex-1 ml-2 h-2 rounded bg-white/5" />
        </div>
        <div className="flex h-full">
          {/* Sidebar */}
          <div className="w-1/4 border-r border-white/5 p-2 space-y-2">
            {[70, 55, 60, 50, 65].map((w, i) => (
              <div key={i} className="h-1.5 rounded" style={{ width: `${w}%`, background: i === 0 ? accent + "80" : "#ffffff15" }} />
            ))}
          </div>
          {/* Content */}
          <div className="flex-1 p-3 space-y-2">
            <div className="h-2 rounded" style={{ width: "60%", background: accent + "90" }} />
            {[80, 65, 72, 58, 70].map((w, i) => (
              <div key={i} className="h-1.5 rounded bg-white/10" style={{ width: `${w}%` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="py-20 border-t border-white/[0.05]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-white mb-10">Selected Work</h2>

        <div className="space-y-4">
          {projects.map((p) => (
            <article
              key={p.id}
              className="card group overflow-hidden"
              style={{ minHeight: "220px" }}
            >
              <div className="grid sm:grid-cols-[1fr_300px] lg:grid-cols-[1fr_360px] items-center h-full">
                {/* ── Left: content ─────────────────────────── */}
                <div className="p-6 lg:p-8 flex flex-col justify-between h-full">
                  <div>
                    {/* Icon + title */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0"
                        style={{ background: p.icon.bg, color: p.icon.color }}
                      >
                        {p.icon.char}
                      </div>
                      <h3 className="text-base font-semibold text-white leading-snug">
                        {p.title}
                      </h3>
                    </div>

                    <p className="text-sm text-[#666] leading-relaxed mb-5 max-w-md">
                      {p.desc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between flex-wrap gap-3">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                    {/* Read more */}
                    <a
                      href={p.link}
                      className="inline-flex items-center gap-1 text-sm text-[#555] hover:text-white transition-colors group-hover:text-[#888]"
                    >
                      Read more
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* ── Right: mockup ─────────────────────────── */}
                <div
                  className="hidden sm:block relative h-[220px] overflow-hidden rounded-r-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${p.mockupAccent}08 0%, ${p.mockupAccent}04 100%)`,
                    borderLeft: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  {p.mockup === "phone"   && <PhoneMockup   accent={p.mockupAccent} />}
                  {p.mockup === "desktop" && <DesktopMockup accent={p.mockupAccent} />}
                  {p.mockup === "docs"    && <DocsMockup    accent={p.mockupAccent} />}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
