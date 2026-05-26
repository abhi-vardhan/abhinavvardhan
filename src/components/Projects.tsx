/* ─────────────────────────────────────────────────────────────
   Selected Work  —  two large cards matching the reference
───────────────────────────────────────────────────────────── */

function PhoneMockup() {
  return (
    /* Tilted phone, positioned to bleed off the right edge */
    <div
      className="absolute right-[-30px] top-1/2 -translate-y-1/2"
      style={{ transform: "translateY(-50%) rotate(6deg)" }}
    >
      {/* Phone shell */}
      <div
        className="relative"
        style={{
          width: 220,
          height: 440,
          borderRadius: 36,
          background: "#1c1c1e",
          boxShadow: "0 40px 80px rgba(0,0,0,0.7), 0 0 0 1.5px rgba(255,255,255,0.12)",
        }}
      >
        {/* Side button */}
        <div className="absolute right-[-4px] top-[88px] w-[4px] h-10 rounded-r bg-[#2c2c2e]" />
        {/* Volume buttons */}
        <div className="absolute left-[-4px] top-[72px] w-[4px] h-8 rounded-l bg-[#2c2c2e]" />
        <div className="absolute left-[-4px] top-[116px] w-[4px] h-8 rounded-l bg-[#2c2c2e]" />

        {/* Screen bezel */}
        <div
          className="absolute inset-[3px] overflow-hidden"
          style={{ borderRadius: 33, background: "#111" }}
        >
          {/* Dynamic island */}
          <div
            className="absolute top-3 left-1/2 -translate-x-1/2 z-10"
            style={{ width: 88, height: 24, borderRadius: 12, background: "#000" }}
          />

          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pt-4 pb-1 text-[9px] text-white font-semibold">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="white">
                <rect x="0" y="3" width="2" height="5" rx="0.5" />
                <rect x="3" y="2" width="2" height="6" rx="0.5" />
                <rect x="6" y="1" width="2" height="7" rx="0.5" />
                <rect x="9" y="0" width="2" height="8" rx="0.5" />
              </svg>
              <svg width="13" height="9" viewBox="0 0 13 9" fill="white">
                <path d="M6.5 1.5C8.5 1.5 10.3 2.3 11.6 3.6L13 2.2C11.3 0.8 9 0 6.5 0S1.7.8 0 2.2L1.4 3.6C2.7 2.3 4.5 1.5 6.5 1.5Z"/>
                <path d="M6.5 4C7.8 4 9 4.6 9.8 5.5L11.2 4.1C10 2.8 8.3 2 6.5 2S3 2.8 1.8 4.1L3.2 5.5C4 4.6 5.2 4 6.5 4Z"/>
                <circle cx="6.5" cy="7.5" r="1.5"/>
              </svg>
              <div className="flex items-center gap-0.5">
                <div className="w-4 h-2 rounded-[2px] border border-white/60 flex items-center px-px">
                  <div className="h-full w-3/4 rounded-[1px] bg-white" />
                </div>
              </div>
            </div>
          </div>

          {/* App content */}
          <div className="px-4 pt-2">
            {/* Top row */}
            <div className="flex items-center justify-between mb-3">
              <div className="w-7 h-7 rounded-full" style={{ background: "#f59e0b" }} />
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </div>

            {/* Header */}
            <p className="text-[9px] text-white/40 mb-0.5">This month&apos;s expenses</p>
            <div className="flex items-baseline gap-1 mb-3">
              <span className="text-[10px] text-white/50">$</span>
              <span className="text-2xl font-bold text-white">50.64</span>
            </div>

            {/* Week/Month/Year tabs */}
            <div className="flex rounded-lg overflow-hidden mb-4" style={{ background: "#2c2c2e" }}>
              {["Week", "Month", "Year"].map((t) => (
                <div
                  key={t}
                  className="flex-1 text-center py-1 text-[8px] font-semibold"
                  style={t === "Month" ? { background: "#4ade80", color: "#000" } : { color: "rgba(255,255,255,0.4)" }}
                >
                  {t}
                </div>
              ))}
            </div>

            {/* Due soon label */}
            <p className="text-[8px] text-white/40 mb-2">Due soon</p>

            {/* Subscription rows */}
            {[
              { name: "Xbox Game Pass", date: "03/06/2023", price: "$14.99 / month", color: "#22c55e", letter: "X" },
              { name: "Netflix",        date: "14/06/2023", price: "$13.99 / month", color: "#ef4444", letter: "N" },
              { name: "Amazon Prime",   date: "18/06/2023", price: "$139.99 / year", color: "#38bdf8", letter: "P" },
            ].map((s) => (
              <div key={s.name} className="flex items-center gap-2 mb-2 px-2 py-1.5 rounded-lg" style={{ background: "#2c2c2e" }}>
                <div className="w-5 h-5 rounded-md flex items-center justify-center text-[7px] font-bold text-white flex-shrink-0" style={{ background: s.color }}>
                  {s.letter}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[7px] text-white font-medium truncate">{s.name}</p>
                  <p className="text-[6px] text-white/30">{s.date}</p>
                </div>
                <p className="text-[6px] text-white/50 flex-shrink-0">{s.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TabletMockup() {
  return (
    <div
      className="absolute right-[-20px] top-1/2 -translate-y-1/2"
      style={{ transform: "translateY(-50%) rotate(3deg)" }}
    >
      <div
        className="relative"
        style={{
          width: 300,
          height: 390,
          borderRadius: 20,
          background: "#1c1c1e",
          boxShadow: "0 40px 80px rgba(0,0,0,0.7), 0 0 0 1.5px rgba(255,255,255,0.12)",
        }}
      >
        {/* Side button */}
        <div className="absolute right-[-3px] top-10 w-[3px] h-8 rounded-r bg-[#2c2c2e]" />

        {/* Screen */}
        <div className="absolute inset-[3px] rounded-[17px] overflow-hidden" style={{ background: "#0f0f0f" }}>
          {/* Browser chrome */}
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/[0.06]" style={{ background: "#1a1a1a" }}>
            <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
            <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
            <div className="w-2 h-2 rounded-full bg-[#28c840]" />
            <div className="flex-1 mx-2 h-3.5 rounded-full px-2 text-[6px] text-white/30 flex items-center" style={{ background: "#2a2a2a" }}>
              react.dev/learn
            </div>
          </div>

          {/* Docs layout */}
          <div className="flex h-full">
            {/* Sidebar */}
            <div className="w-20 border-r border-white/[0.05] p-2 flex-shrink-0" style={{ background: "#141414" }}>
              <div className="space-y-1.5">
                {["Learn", "Reference", "Community", "Blog"].map((item) => (
                  <div key={item} className="text-[6px] text-white/40 py-1 px-1.5 rounded" style={item === "Learn" ? { background: "#2a2a2a", color: "rgba(255,255,255,0.8)" } : {}}>
                    {item}
                  </div>
                ))}
                <div className="pt-2 space-y-1">
                  {["Get Started", "Installation", "Quick Start", "Tutorial"].map((item) => (
                    <div key={item} className="text-[5.5px] text-white/30 py-0.5 px-1.5">{item}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-3 overflow-hidden">
              {/* Arabic-style RTL text blocks (matching screenshot) */}
              <div className="text-right space-y-2">
                <div className="text-[9px] font-bold text-white text-right" dir="rtl">مرحبًا بك في React</div>
                <div className="space-y-1">
                  {[90, 75, 82, 68, 78, 85, 60, 72].map((w, i) => (
                    <div key={i} className="h-[5px] rounded ml-auto" style={{ width: `${w}%`, background: "rgba(255,255,255,0.12)" }} />
                  ))}
                </div>
                <div className="text-[7px] font-semibold text-white/60 text-right mt-2" dir="rtl">البدء السريع</div>
                <div className="space-y-1">
                  {[85, 70, 65, 80, 55].map((w, i) => (
                    <div key={i} className="h-[5px] rounded ml-auto" style={{ width: `${w}%`, background: "rgba(255,255,255,0.08)" }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    id: 1,
    icon: (
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 flex-shrink-0"
        style={{ background: "linear-gradient(135deg, #1a3a1f 0%, #0f2e13 100%)", border: "1px solid rgba(74,222,128,0.2)" }}>
        {/* Lightning bolt */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M13 2L4.5 13.5H11L10 22L20.5 10H14L13 2Z" fill="#4ade80" />
        </svg>
      </div>
    ),
    title: "Subbi — The free subscriptions manager",
    desc: "Subbi is a side project that I've built to help me keep track of how much I spend on subscriptions and also to prevent the \"accidental\" bill after a 14-day trail ends. It helps you keep track of bills like Netflix, Spotify, Xbox Game Pass, Bus Card, Bank Cards, and many more.",
    linkLabel: "Download App",
    mockup: <PhoneMockup />,
  },
  {
    id: 2,
    icon: (
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 flex-shrink-0"
        style={{ background: "transparent" }}>
        {/* React atom logo */}
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="2" ry="2" fill="#61dafb" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61dafb" strokeWidth="1.2" fill="none" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61dafb" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61dafb" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)" />
        </svg>
      </div>
    ),
    title: "React Documentation",
    desc: "With the release of the new React website on March 16, there was a need for localization to make the documentation accessible to Arabic-speaking developers. I contributed to translating several documentation, worked with great developers, improved my ability to write better PR requests, and as a side effect, I now know more about the Arabic grammar.",
    linkLabel: "Visit Site",
    mockup: <TabletMockup />,
  },
];

export default function Projects() {
  return (
    <section id="work" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8">Selected Work</h2>

        <div className="space-y-5">
          {projects.map((p) => (
            <div
              key={p.id}
              className="relative overflow-hidden rounded-2xl"
              style={{
                background: "#191919",
                border: "1px solid rgba(255,255,255,0.06)",
                minHeight: 460,
              }}
            >
              {/* Left content */}
              <div className="relative z-10 flex flex-col justify-between h-full p-9 pr-[300px] min-h-[460px]">
                <div>
                  {p.icon}
                  <h3 className="text-[22px] font-bold text-white leading-tight mb-4" style={{ maxWidth: 400 }}>
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#777] leading-relaxed" style={{ maxWidth: 420 }}>
                    {p.desc}
                  </p>
                </div>

                {/* Bottom link */}
                <div className="mt-8">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm text-white hover:text-white/70 transition-colors font-medium"
                  >
                    {p.linkLabel}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right: mockup (absolutely positioned, bleeds off right edge) */}
              <div className="absolute right-0 top-0 bottom-0 w-[360px] pointer-events-none">
                {p.mockup}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
