"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* ── Warm amber/orange background glow (top-right) ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 70% 60% at 85% 20%, rgba(180, 80, 20, 0.55) 0%, rgba(120, 40, 10, 0.30) 40%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 75% 10%, rgba(220, 120, 40, 0.30) 0%, transparent 60%)
          `,
        }}
      />
      {/* Subtle purple tinge on left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 70% at -10% 60%, rgba(80,20,120,0.18) 0%, transparent 60%)",
        }}
      />

      <div className="relative w-full max-w-6xl mx-auto px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 items-center min-h-[calc(100vh-7rem)]">
          {/* ── Left: text ──────────────────────────────────── */}
          <div className="order-2 lg:order-1 max-w-2xl">
            {/* Heading */}
            <h1
              className="font-bold tracking-tight leading-none mb-6"
              style={{ fontSize: "clamp(3.5rem, 9vw, 7.5rem)" }}
            >
              <span
                className="italic font-light"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                I&apos;m{" "}
              </span>
              <span className="text-white font-bold">Abhinav</span>
              <br />
              <span className="text-white font-bold">Vardhan.</span>
            </h1>

            {/* Description */}
            <p
              className="text-base sm:text-lg leading-relaxed mb-10 max-w-lg"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              A front-end engineer and UI/UX designer helping startups turn
              their visions into a digital reality. I specialize in designing
              and building modern mobile and web-based apps.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-lg transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.14)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.18)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.12)")
                }
              >
                See my resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200"
                style={{
                  color: "rgba(255,255,255,0.6)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.color =
                    "rgba(255,255,255,0.9)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.color =
                    "rgba(255,255,255,0.6)";
                }}
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* ── Right: dark silhouette circle ─────────────── */}
          <div className="order-1 lg:order-2 relative flex items-center justify-center lg:justify-end h-[360px] lg:h-auto">
            {/* Large dark circle — the silhouette */}
            <div
              className="relative"
              style={{ width: "min(480px, 90vw)", aspectRatio: "1" }}
            >
              {/* Outer circle */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 50% 40%, #1a1a1a 0%, #0d0d0d 55%, #080808 100%)",
                  boxShadow: "inset 0 -20px 60px rgba(0,0,0,0.8)",
                }}
              />
              {/* Person silhouette SVG */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 480 480"
                fill="none"
              >
                {/* Head */}
                <ellipse cx="240" cy="155" rx="62" ry="72" fill="#111" />
                {/* Neck */}
                <rect
                  x="222"
                  y="218"
                  width="36"
                  height="28"
                  rx="6"
                  fill="#111"
                />
                {/* Shoulders / torso */}
                <path
                  d="M100 480 C100 350 160 300 240 290 C320 300 380 350 380 480 Z"
                  fill="#0f0f0f"
                />
                {/* Hair */}
                <ellipse cx="240" cy="102" rx="68" ry="42" fill="#0d0d0d" />
                <ellipse cx="182" cy="130" rx="22" ry="36" fill="#0d0d0d" />
                <ellipse cx="298" cy="130" rx="22" ry="36" fill="#0d0d0d" />
              </svg>
              {/* Subtle warm rim light on the circle edge */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 85% 15%, rgba(180,80,20,0.18) 0%, transparent 50%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
