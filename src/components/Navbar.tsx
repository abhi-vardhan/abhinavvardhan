"use client";

import { useState, useEffect, useRef } from "react";

const moreLinks = [
  { label: "Bookshelf", href: "#bookshelf" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "This UI Kit", href: "#ui-kit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  // Close More dropdown on outside click
  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const go = (href: string) => {
    setMoreOpen(false);
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-2xl border-b border-white/[0.06]"
          : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-[60px] flex items-center justify-between gap-6">
        {/* ── Logo ─────────────────────────────────────── */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex-shrink-0 flex items-center justify-center text-white text-sm font-bold select-none hover:opacity-80 transition-opacity"
          style={{
            fontFamily: "var(--font-geist-mono)",
            letterSpacing: "-0.03em",
          }}
          aria-label="Home"
        >
          {/* Bracket-cut logo */}
          <span className="text-white/50 text-base">[</span>
          <span className="text-white text-[15px] mx-[1px]">a</span>
          <span className="text-white/50 text-base">]</span>
        </button>

        {/* ── Desktop nav ─────────────────────────────── */}
        <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {(["About", "Work", "Notebook", "Contact"] as const).map((label) => (
            <button
              key={label}
              onClick={() => go(`#${label.toLowerCase()}`)}
              className="px-4 py-1.5 text-sm text-[#999] hover:text-white transition-colors rounded-md hover:bg-white/[0.04]"
            >
              {label}
            </button>
          ))}

          {/* More dropdown */}
          <div ref={moreRef} className="relative">
            <button
              onClick={() => setMoreOpen((v) => !v)}
              className="flex items-center gap-1 px-4 py-1.5 text-sm text-[#999] hover:text-white transition-colors rounded-md hover:bg-white/[0.04]"
            >
              More
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                className={`transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {moreOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-40 rounded-xl overflow-hidden border border-white/[0.08] py-1"
                style={{
                  background: "#141414",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
                }}
              >
                {moreLinks.map((l) => (
                  <button
                    key={l.label}
                    onClick={() => go(l.href)}
                    className="w-full text-left px-4 py-2.5 text-sm text-[#999] hover:text-white hover:bg-white/[0.05] transition-colors"
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* ── Right: social icons + divider + theme toggle ── */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#888] hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          {/* X / Twitter */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#888] hover:text-white transition-colors"
            aria-label="Twitter / X"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L2.015 2.25H8.1l4.258 5.626 5.886-5.626zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#888] hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          {/* Divider */}
          <div className="w-px h-4 bg-white/[0.12] mx-1" />

          {/* Theme toggle (decorative sun) */}
          <button
            className="text-[#888] hover:text-white transition-colors"
            aria-label="Toggle theme"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
          </button>
        </div>

        {/* ── Mobile hamburger ─────────────────────────── */}
        <button
          className="md:hidden text-[#888] hover:text-white transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {mobileOpen ? (
              <>
                <path d="M18 6 6 18" />
                <path d="M6 6l12 12" />
              </>
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t border-white/[0.06]"
          style={{ background: "#0a0a0a" }}
        >
          <div className="px-6 py-4 space-y-1">
            {[
              "About",
              "Work",
              "Notebook",
              "Contact",
              ...moreLinks.map((l) => l.label),
            ].map((label) => (
              <button
                key={label}
                onClick={() =>
                  go(`#${label.toLowerCase().replace(/\s+/g, "-")}`)
                }
                className="w-full text-left px-3 py-2.5 text-sm text-[#888] hover:text-white transition-colors rounded-lg hover:bg-white/[0.04]"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
