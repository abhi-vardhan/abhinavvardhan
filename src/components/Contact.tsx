"use client";
export default function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-white/[0.05]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Container with gradient glow */}
        <div
          className="relative rounded-2xl overflow-hidden px-8 py-16 text-center"
          style={{ background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          {/* Background gradient blobs */}
          <div
            className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(121,40,202,0.35) 0%, transparent 70%)",
              filter: "blur(60px)",
              transform: "translate(-50%, 50%)",
            }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(255,0,128,0.25) 0%, transparent 70%)",
              filter: "blur(60px)",
              transform: "translate(50%, 50%)",
            }}
          />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
              Let&apos;s work together
            </h2>
            <p className="text-[#555] text-base leading-relaxed max-w-md mx-auto mb-8">
              I&apos;m open to full-time roles, freelance projects, and interesting
              collaborations. If you have an idea, let&apos;s talk.
            </p>
            <a
              href="mailto:abhinav@example.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-colors"
            >
              Get in touch
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
