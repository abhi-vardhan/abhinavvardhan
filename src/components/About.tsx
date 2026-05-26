/* "Get to know me" 2×2 bento grid */
export default function About() {
  return (
    <section id="about" className="py-20 border-t border-white/[0.05]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-white mb-10">Get to know me</h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

          {/* ── About me ───────────────────────────────────── */}
          <div className="card col-span-2 lg:col-span-2 p-6 flex flex-col justify-between min-h-[240px]">
            <div>
              <p className="text-xs text-[#555] uppercase tracking-widest font-mono mb-2">About me</p>
              <p className="text-sm text-[#666] leading-relaxed">
                I&apos;m a full-stack developer passionate about building beautiful, performant web products. I love the intersection of engineering and design.
              </p>
            </div>
            {/* Avatar in card */}
            <div className="mt-4 flex justify-center">
              <div
                className="w-24 h-24 rounded-full overflow-hidden border border-white/10"
                style={{
                  background: "linear-gradient(145deg, #1a1a2e, #16213e)",
                  boxShadow: "0 0 30px rgba(121,40,202,0.3)",
                }}
              >
                <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
                  <ellipse cx="100" cy="165" rx="45" ry="30" fill="#1e293b" />
                  <ellipse cx="100" cy="155" rx="38" ry="22" fill="#7928CA" />
                  <rect x="90" y="125" width="20" height="20" rx="4" fill="#fbbf8a" />
                  <ellipse cx="100" cy="105" rx="38" ry="42" fill="#fbbf8a" />
                  <ellipse cx="100" cy="72" rx="38" ry="22" fill="#1a1a1a" />
                  <ellipse cx="70" cy="82" rx="12" ry="18" fill="#1a1a1a" />
                  <ellipse cx="130" cy="82" rx="12" ry="18" fill="#1a1a1a" />
                  <ellipse cx="85" cy="105" rx="7" ry="8" fill="white" />
                  <ellipse cx="115" cy="105" rx="7" ry="8" fill="white" />
                  <ellipse cx="86" cy="106" rx="4" ry="5" fill="#1a1a1a" />
                  <ellipse cx="116" cy="106" rx="4" ry="5" fill="#1a1a1a" />
                  <path d="M88 124 Q100 133 112 124" stroke="#e8956d" strokeWidth="2" strokeLinecap="round" fill="none" />
                  <ellipse cx="62" cy="108" rx="7" ry="9" fill="#fbbf8a" />
                  <ellipse cx="138" cy="108" rx="7" ry="9" fill="#fbbf8a" />
                </svg>
              </div>
            </div>
          </div>

          {/* ── Notebook ───────────────────────────────────── */}
          <div className="card col-span-1 p-5 flex flex-col justify-between min-h-[240px]">
            <div>
              <p className="text-xs text-[#555] uppercase tracking-widest font-mono mb-2">Notebook</p>
              <p className="text-xs text-[#555] leading-relaxed">Thoughts, notes &amp; learnings from my dev journey.</p>
            </div>
            {/* Book visual */}
            <div className="mt-4 flex justify-center">
              <div
                className="w-20 h-28 rounded-lg flex flex-col items-center justify-center border border-white/10"
                style={{ background: "linear-gradient(145deg, #1a1a1a, #111)" }}
              >
                <div className="w-12 h-0.5 bg-white/20 mb-1.5" />
                <p className="text-[7px] font-mono text-white/50 tracking-widest text-center leading-tight">DESK<br />NOTES</p>
                <div className="mt-2 w-8 h-0.5 bg-white/10" />
                <div className="mt-1 w-6 h-0.5 bg-white/10" />
                <div
                  className="mt-3 text-[9px] font-mono px-2 py-0.5 rounded"
                  style={{ background: "#7928CA22", color: "#a78bfa", border: "1px solid #7928CA44" }}
                >
                  BUY IT NOW
                </div>
              </div>
            </div>
          </div>

          {/* ── Bookshelf ──────────────────────────────────── */}
          <div className="card col-span-1 p-5 flex flex-col justify-between min-h-[240px]">
            <div>
              <p className="text-xs text-[#555] uppercase tracking-widest font-mono mb-2">Bookshelf</p>
              <p className="text-xs text-[#555] leading-relaxed">Books that shaped the way I think about code and design.</p>
            </div>
            <div className="mt-4 flex justify-center gap-1">
              {[
                { bg: "#1c2a1e", spine: "#4ade80" },
                { bg: "#2a1c1e", spine: "#f472b6" },
                { bg: "#1c1c2a", spine: "#818cf8" },
                { bg: "#2a221c", spine: "#fb923c" },
              ].map((b, i) => (
                <div
                  key={i}
                  className="w-7 h-24 rounded-sm flex-shrink-0"
                  style={{
                    background: b.bg,
                    borderLeft: `3px solid ${b.spine}`,
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* ── Tech Stack ─────────────────────────────────── */}
          <div className="card col-span-2 lg:col-span-2 p-6 min-h-[200px]">
            <p className="text-xs text-[#555] uppercase tracking-widest font-mono mb-4">Tech Stack</p>
            <div className="grid grid-cols-4 gap-3">
              {[
                { name: "React",    color: "#61dafb", bg: "#0a1929", letter: "R" },
                { name: "Next.js",  color: "#ffffff", bg: "#111",    letter: "N" },
                { name: "TS",       color: "#3178c6", bg: "#0a1929", letter: "T" },
                { name: "Node",     color: "#68a063", bg: "#0a1e0a", letter: "N" },
                { name: "Tailwind", color: "#38bdf8", bg: "#0a1929", letter: "T" },
                { name: "Figma",   color: "#f24e1e", bg: "#1e0a0a", letter: "F" },
                { name: "Postgres", color: "#336791", bg: "#0a1020", letter: "P" },
                { name: "Docker",   color: "#2496ed", bg: "#0a1929", letter: "D" },
              ].map((t) => (
                <div key={t.name} className="flex flex-col items-center gap-1.5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold"
                    style={{ background: t.bg, color: t.color, border: `1px solid ${t.color}30` }}
                  >
                    {t.letter}
                  </div>
                  <span className="text-[9px] text-[#444] text-center leading-tight">{t.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
