export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* "Let's work together" horizontal card */}
        <div
          className="rounded-2xl px-8 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          style={{ background: "#191919", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          {/* Left text */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Let&apos;s work together
            </h2>
            <p className="text-sm text-[#666] leading-relaxed max-w-sm">
              Want to discuss an opportunity to create something great?
              I&apos;m ready when you are.
            </p>
          </div>

          {/* Right button */}
          <a
            href="mailto:abhinav@example.com"
            className="flex-shrink-0 inline-flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold text-white transition-all"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            {/* Play triangle icon */}
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M3 2.5l10 5.5-10 5.5V2.5z" />
            </svg>
            Get in touch
          </a>
        </div>

      </div>
    </section>
  );
}
