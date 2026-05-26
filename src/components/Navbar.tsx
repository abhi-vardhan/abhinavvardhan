"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Work",      href: "#work" },
  { label: "Writing",   href: "#writing" },
  { label: "Bookshelf", href: "#bookshelf" },
  { label: "About",     href: "#about" },
  { label: "Now",       href: "#now" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur-xl border-b border-white/[0.05]" : ""
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between gap-8">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-md border border-white/20 text-white font-mono text-sm font-semibold hover:border-white/40 transition-colors"
        >
          e
        </button>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => go(l.href)}
              className="px-4 py-2 text-sm text-[#888] hover:text-white transition-colors rounded-lg hover:bg-white/[0.04]"
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-md border border-white/[0.08] text-[#888] hover:text-white hover:border-white/20 transition-all"
            aria-label="GitHub"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          {/* Resume */}
          <a
            href="/resume.pdf"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-white/[0.1] text-[#888] hover:text-white hover:border-white/20 rounded-lg transition-all"
          >
            Resume
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
          </a>
          {/* Mobile hamburger */}
          <button
            className="md:hidden w-8 h-8 flex items-center justify-center text-[#888] hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/[0.05] px-6 py-4">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => go(l.href)}
              className="block w-full text-left py-3 text-sm text-[#888] hover:text-white transition-colors border-b border-white/[0.04] last:border-0"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
