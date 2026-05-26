export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Ambient gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 75% 40%, rgba(121,40,202,0.28) 0%, rgba(255,0,128,0.16) 40%, transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-12 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[80vh]">

          {/* Left: text */}
          <div className="order-2 lg:order-1">
            <p className="text-[#666] text-base mb-2 tracking-wide">
              A front-end engineer and UX designer helping
            </p>

            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.1] mb-4">
              I&apos;m{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #fff 20%, rgba(255,255,255,0.75) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Abhinav
              </span>
            </h1>

            <p className="text-[#666] text-base leading-relaxed max-w-sm mb-8">
              A full-stack developer and UX enthusiast helping brands design and
              build delightful web products. I enjoy crafting pixel-perfect,
              accessible apps with clean code.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-colors"
              >
                Get in touch
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white text-sm font-medium rounded-full hover:border-white/40 hover:bg-white/[0.04] transition-all"
              >
                See my work
              </a>
            </div>
          </div>

          {/* Right: orb + avatar */}
          <div className="order-1 lg:order-2 relative flex items-center justify-center h-[340px] lg:h-[480px]">
            {/* Multi-color gradient orb */}
            <div
              className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
              style={{
                background: `radial-gradient(
                  ellipse at 45% 45%,
                  rgba(121, 40, 202, 0.65) 0%,
                  rgba(255,   0, 128, 0.50) 28%,
                  rgba(  0, 223, 216, 0.22) 55%,
                  rgba(  0, 112, 243, 0.10) 70%,
                  transparent 85%
                )`,
                filter: "blur(55px)",
                transform: "translate(5%, -5%)",
              }}
            />
            {/* Bright inner core */}
            <div
              className="absolute w-[180px] h-[180px] rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(255,0,128,0.55) 0%, rgba(121,40,202,0.3) 50%, transparent 80%)",
                filter: "blur(28px)",
                transform: "translate(12%, -12%)",
              }}
            />

            {/* Avatar */}
            <div className="relative z-10 flex flex-col items-center">
              <div
                className="w-52 h-52 rounded-full overflow-hidden border-2 border-white/10"
                style={{
                  background: "linear-gradient(145deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)",
                  boxShadow: "0 0 60px rgba(121,40,202,0.4), 0 0 120px rgba(255,0,128,0.2)",
                }}
              >
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
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
                  <ellipse cx="87" cy="104" rx="1.5" ry="1.5" fill="white" />
                  <ellipse cx="117" cy="104" rx="1.5" ry="1.5" fill="white" />
                  <path d="M78 96 Q86 91 93 95" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  <path d="M107 95 Q114 91 122 96" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  <path d="M98 112 Q100 118 102 112" stroke="#e8956d" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  <path d="M88 124 Q100 133 112 124" stroke="#e8956d" strokeWidth="2" strokeLinecap="round" fill="none" />
                  <ellipse cx="62" cy="108" rx="7" ry="9" fill="#fbbf8a" />
                  <ellipse cx="138" cy="108" rx="7" ry="9" fill="#fbbf8a" />
                </svg>
              </div>
              <div className="mt-3 px-3 py-1 rounded-full text-xs font-mono bg-white/[0.06] border border-white/[0.1] text-[#666]">
                Full-stack Developer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
