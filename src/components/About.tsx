/* ── Get to know me — 2×2 bento matching the reference ──────── */

/* Developer Memoji SVG */
function DevMemoji() {
  return (
    <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Shadow under head */}
      <ellipse cx="100" cy="210" rx="42" ry="8" fill="rgba(0,0,0,0.35)" />

      {/* Neck */}
      <rect x="86" y="152" width="28" height="28" rx="6" fill="#c68642" />

      {/* Shoulders / shirt */}
      <path d="M30 230 C30 185 62 168 100 165 C138 168 170 185 170 230 Z" fill="#2a2a3a" />
      {/* Collar detail */}
      <path d="M88 168 L100 182 L112 168" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" />

      {/* Head base */}
      <ellipse cx="100" cy="107" rx="52" ry="56" fill="#c68642" />

      {/* Hair — top */}
      <path d="M48 95 C48 52 152 52 152 95 C152 72 148 52 100 48 C52 52 48 72 48 95 Z" fill="#3d2b1f" />
      {/* Hair sides */}
      <ellipse cx="50" cy="95" rx="10" ry="22" fill="#3d2b1f" />
      <ellipse cx="150" cy="95" rx="10" ry="22" fill="#3d2b1f" />
      {/* Hair fringe */}
      <path d="M60 74 C70 60 85 56 100 55 C115 56 130 60 140 74" stroke="#2c1f15" strokeWidth="8" strokeLinecap="round" fill="none" />

      {/* Ears */}
      <ellipse cx="48" cy="112" rx="8" ry="10" fill="#b87833" />
      <ellipse cx="48" cy="112" rx="4" ry="6" fill="#c68642" />
      <ellipse cx="152" cy="112" rx="8" ry="10" fill="#b87833" />
      <ellipse cx="152" cy="112" rx="4" ry="6" fill="#c68642" />

      {/* Eyes — whites */}
      <ellipse cx="80" cy="108" rx="12" ry="10" fill="white" />
      <ellipse cx="120" cy="108" rx="12" ry="10" fill="white" />
      {/* Irises */}
      <ellipse cx="80" cy="109" rx="7" ry="7.5" fill="#5c3d1e" />
      <ellipse cx="120" cy="109" rx="7" ry="7.5" fill="#5c3d1e" />
      {/* Pupils */}
      <ellipse cx="81" cy="109" rx="4" ry="4.5" fill="#1a0e06" />
      <ellipse cx="121" cy="109" rx="4" ry="4.5" fill="#1a0e06" />
      {/* Eye shine */}
      <ellipse cx="83" cy="106" rx="2" ry="2" fill="white" />
      <ellipse cx="123" cy="106" rx="2" ry="2" fill="white" />
      {/* Lower eyelid highlight */}
      <path d="M70 115 Q80 120 90 115" stroke="rgba(198,134,66,0.6)" strokeWidth="1.5" fill="none" />
      <path d="M110 115 Q120 120 130 115" stroke="rgba(198,134,66,0.6)" strokeWidth="1.5" fill="none" />

      {/* Eyebrows */}
      <path d="M68 96 Q80 90 92 94" stroke="#2c1f15" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M108 94 Q120 90 132 96" stroke="#2c1f15" strokeWidth="3.5" strokeLinecap="round" fill="none" />

      {/* Nose */}
      <ellipse cx="100" cy="124" rx="5" ry="4" fill="rgba(0,0,0,0.12)" />
      <path d="M94 122 Q100 128 106 122" stroke="rgba(0,0,0,0.18)" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Mouth / smile */}
      <path d="M86 138 Q100 149 114 138" stroke="#7a3820" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M88 138 Q100 147 112 138" fill="#c0614a" />
      {/* Teeth */}
      <path d="M90 140 Q100 147 110 140 Q100 142 90 140 Z" fill="white" />

      {/* Beard */}
      <path d="M62 125 Q60 148 75 158 Q100 168 125 158 Q140 148 138 125 Q120 132 100 132 Q80 132 62 125 Z" fill="#2c1f15" opacity="0.85" />
      {/* Beard highlight */}
      <path d="M78 130 Q100 137 122 130 Q100 135 78 130 Z" fill="rgba(255,255,255,0.06)" />

      {/* Cheek blush */}
      <ellipse cx="66" cy="122" rx="10" ry="7" fill="rgba(220,120,80,0.18)" />
      <ellipse cx="134" cy="122" rx="10" ry="7" fill="rgba(220,120,80,0.18)" />
    </svg>
  );
}

/* DESK NOTES notebook visual */
function DeskNotes() {
  return (
    <div className="relative flex justify-center items-end mt-2" style={{ height: 160 }}>
      {/* Back notepad (beige/tan) */}
      <div
        className="absolute bottom-0 left-1/2"
        style={{
          width: 120, height: 80,
          transform: "translateX(-45%) rotate(-4deg)",
          background: "linear-gradient(160deg, #d4a843 0%, #c49030 100%)",
          borderRadius: 4,
          boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
          zIndex: 1,
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center" style={{ borderRadius: 4, overflow: "hidden" }}>
          <div className="text-[7px] font-bold text-black/70 tracking-widest text-center leading-tight">SET OF TWO PITCH-BLACK</div>
          <div className="text-[10px] font-black text-black tracking-widest mt-0.5">DEV &amp; DESIGN</div>
          <div className="text-[6px] text-black/60 mt-0.5">96-PAGE NOTE BOOKS</div>
          <div className="w-8 h-px bg-black/20 mt-1" />
          <div className="text-[5px] text-black/40 mt-0.5">Google material</div>
          {/* Spiral binding holes */}
          <div className="absolute right-2 top-0 bottom-0 flex flex-col justify-around">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-2 h-1.5 rounded-full bg-black/30" />
            ))}
          </div>
        </div>
      </div>

      {/* Main notebook (dark blue) */}
      <div
        className="absolute bottom-0 left-1/2"
        style={{
          width: 110, height: 140,
          transform: "translateX(-50%) rotate(2deg)",
          background: "linear-gradient(160deg, #1e2d4a 0%, #141e30 100%)",
          borderRadius: 6,
          boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
          zIndex: 2,
        }}
      >
        {/* Green sticky tab on top */}
        <div className="absolute -top-3 left-3 flex gap-1">
          <div style={{ width: 20, height: 14, background: "#84cc16", borderRadius: "3px 3px 0 0", transform: "rotate(-2deg)" }} />
          <div style={{ width: 20, height: 18, background: "#f59e0b", borderRadius: "3px 3px 0 0", transform: "rotate(1deg)" }} />
        </div>
        {/* Notebook content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center px-3">
          <div className="text-[8px] text-white/30 tracking-[0.25em] uppercase mb-1">PITCH BLACK</div>
          <div className="text-[18px] font-black text-white tracking-widest text-center leading-none">DESK</div>
          <div className="text-[18px] font-black text-white tracking-widest text-center leading-none">NOTES</div>
          <div className="w-full h-px bg-white/10 my-2" />
          <div className="text-[6px] text-white/25 tracking-widest">DOTTED • RULED</div>
        </div>
      </div>
    </div>
  );
}

/* Book covers for bookshelf */
function BookCovers() {
  const books = [
    {
      title: "THE\nALMANAC\nOF\nNAVAL\nRAVIKANT",
      author: "",
      bg: "linear-gradient(180deg, #f5f0e8 0%, #ede5d8 100%)",
      textColor: "#1a1a1a",
      accent: "#c0392b",
      width: 88, height: 155,
      rotate: -5,
      translateX: "-110%",
    },
    {
      title: "MEDITA-\nTIONS",
      author: "MARCUS\nAURELIUS",
      bg: "linear-gradient(160deg, #1a1a1a 0%, #2a2218 100%)",
      textColor: "#d4a853",
      accent: "#8b6914",
      width: 96, height: 155,
      rotate: -1,
      translateX: "-55%",
      hasFace: true,
    },
    {
      title: "Sapiens",
      subtitle: "A Brief\nHistory of\nHuma...",
      author: "Yuval Noah Harari",
      bg: "linear-gradient(160deg, #c0392b 0%, #922b21 100%)",
      textColor: "#ffffff",
      accent: "#e74c3c",
      width: 90, height: 155,
      rotate: 3,
      translateX: "0%",
    },
  ];

  return (
    <div className="relative mt-4" style={{ height: 165 }}>
      {books.map((b, i) => (
        <div
          key={i}
          className="absolute bottom-0 left-1/2"
          style={{
            width: b.width, height: b.height,
            borderRadius: 4,
            background: b.bg,
            transform: `translateX(${b.translateX}) rotate(${b.rotate}deg)`,
            boxShadow: "0 6px 24px rgba(0,0,0,0.55)",
            zIndex: i + 1,
            overflow: "hidden",
          }}
        >
          {/* Book spine highlight */}
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-black/20" />

          {/* Face image (Marcus Aurelius card) */}
          {b.hasFace && (
            <div className="absolute inset-0 flex items-center justify-center opacity-40">
              <div style={{ width: 70, height: 90, background: "radial-gradient(circle at 50% 40%, #8a7250 0%, #3a2e20 100%)", borderRadius: "40% 40% 40% 40%" }} />
            </div>
          )}

          {/* Penguin logo (Meditations) */}
          {b.hasFace && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
              <div style={{ width: 18, height: 22, background: "transparent", border: "1.5px solid #d4a853", borderRadius: "50% 50% 40% 40%" }} />
            </div>
          )}

          <div className="absolute inset-x-0 top-3 px-2 text-center">
            {b.title && (
              <div className="text-[9px] font-black leading-tight whitespace-pre-line" style={{ color: b.textColor }}>
                {b.title}
              </div>
            )}
            {b.subtitle && (
              <div className="text-[8px] italic mt-1 whitespace-pre-line" style={{ color: "rgba(255,255,255,0.85)" }}>
                {b.subtitle}
              </div>
            )}
            {b.author && (
              <div className="text-[7px] mt-1 opacity-70 whitespace-pre-line" style={{ color: b.textColor }}>
                {b.author}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

/* Floating app icon grid for Tech Stack */
function TechIcons() {
  const icons = [
    /* Figma */
    {
      bg: "white", rotate: -12, x: 30, y: 10, size: 52, shadow: "rgba(0,0,0,0.5)",
      render: () => (
        <svg viewBox="0 0 38 38" fill="none">
          <rect x="5" y="5" width="10" height="14" rx="5" fill="#f24e1e" />
          <rect x="5" y="19" width="10" height="14" rx="5" fill="#ff7262" />
          <rect x="15" y="5" width="10" height="14" rx="5" fill="#a259ff" />
          <circle cx="20" cy="26" r="7" fill="#1abcfe" />
          <rect x="15" y="5" width="10" height="14" rx="5" fill="#a259ff" />
          <circle cx="20" cy="12" r="5" fill="#0acf83" />
        </svg>
      ),
    },
    /* TypeScript */
    {
      bg: "#3178c6", rotate: 8, x: 88, y: 0, size: 56, shadow: "rgba(49,120,198,0.5)",
      render: () => (
        <svg viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="6" fill="#3178c6" />
          <text x="4" y="30" fontSize="22" fontWeight="900" fill="white" fontFamily="monospace">TS</text>
        </svg>
      ),
    },
    /* GitHub */
    {
      bg: "#1a1a1a", rotate: -6, x: 148, y: 12, size: 50, shadow: "rgba(0,0,0,0.7)",
      render: () => (
        <svg viewBox="0 0 24 24" fill="white">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
    },
    /* "1" app (like Reeder / Things) */
    {
      bg: "#1c1c1e", rotate: 14, x: 14, y: 78, size: 54, shadow: "rgba(0,0,0,0.6)",
      render: () => (
        <svg viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="9" fill="#1c1c1e" />
          <text x="12" y="30" fontSize="24" fontWeight="900" fill="white" fontFamily="sans-serif">1</text>
        </svg>
      ),
    },
    /* Sourcetree / Git circular */
    {
      bg: "#0052cc", rotate: -5, x: 76, y: 88, size: 52, shadow: "rgba(0,82,204,0.5)",
      render: () => (
        <svg viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="20" fill="#0052cc" />
          <circle cx="20" cy="14" r="5" fill="white" />
          <circle cx="12" cy="28" r="4" fill="white" />
          <circle cx="28" cy="28" r="4" fill="white" />
          <line x1="20" y1="19" x2="12" y2="24" stroke="white" strokeWidth="2" />
          <line x1="20" y1="19" x2="28" y2="24" stroke="white" strokeWidth="2" />
        </svg>
      ),
    },
    /* Tailwind */
    {
      bg: "#0ea5e9", rotate: 10, x: 138, y: 80, size: 50, shadow: "rgba(14,165,233,0.4)",
      render: () => (
        <svg viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="9" fill="#0ea5e9" />
          <path d="M10 18 C10 14 12 12 16 12 C20 12 22 14 24 16 C26 18 28 20 32 20 C28 20 26 22 24 24 C22 26 20 28 16 28 C12 28 10 26 10 22 C10 20 12 18 16 18 Z" fill="white" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative mt-2" style={{ height: 150 }}>
      {icons.map((icon, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: icon.x,
            top: icon.y,
            width: icon.size,
            height: icon.size,
            borderRadius: icon.size * 0.22,
            background: icon.bg,
            transform: `rotate(${icon.rotate}deg)`,
            boxShadow: `0 8px 24px ${icon.shadow}`,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon.render()}
        </div>
      ))}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8">Get to know me</h2>

        <div className="grid grid-cols-2 gap-4">

          {/* ── About me ──────────────────────────────────── */}
          <div
            className="rounded-2xl overflow-hidden flex flex-col p-6"
            style={{ background: "#191919", border: "1px solid rgba(255,255,255,0.06)", minHeight: 340 }}
          >
            <p className="text-lg font-bold text-white text-center">About me</p>
            <p className="text-sm text-[#666] text-center mt-1">Who I am and what I do</p>
            <div className="flex-1 flex items-end justify-center pt-4">
              <div style={{ width: 180, height: 200 }}>
                <DevMemoji />
              </div>
            </div>
          </div>

          {/* ── Notebook ──────────────────────────────────── */}
          <div
            className="rounded-2xl overflow-hidden flex flex-col p-6"
            style={{ background: "#191919", border: "1px solid rgba(255,255,255,0.06)", minHeight: 340 }}
          >
            <p className="text-lg font-bold text-white text-center">Notebook</p>
            <p className="text-sm text-[#666] text-center mt-1">My thoughts, insights, and reflections</p>
            <div className="flex-1 flex items-end justify-center">
              <DeskNotes />
            </div>
          </div>

          {/* ── Bookshelf ─────────────────────────────────── */}
          <div
            className="rounded-2xl overflow-hidden flex flex-col p-6"
            style={{ background: "#191919", border: "1px solid rgba(255,255,255,0.06)", minHeight: 340 }}
          >
            <p className="text-lg font-bold text-white text-center">Bookshelf</p>
            <p className="text-sm text-[#666] text-center mt-1">Books and pieces of wisdom I&apos;ve enjoyed reading.</p>
            <div className="flex-1">
              <BookCovers />
            </div>
          </div>

          {/* ── Tech Stack ────────────────────────────────── */}
          <div
            className="rounded-2xl overflow-hidden flex flex-col p-6"
            style={{ background: "#191919", border: "1px solid rgba(255,255,255,0.06)", minHeight: 340 }}
          >
            <p className="text-lg font-bold text-white text-center">Tech Stack</p>
            <p className="text-sm text-[#666] text-center mt-1">The dev tools, apps, devices, and games I use and play.</p>
            <div className="flex-1">
              <TechIcons />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
