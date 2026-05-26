export default function Footer() {
  const year = new Date().getFullYear();
  const navCols = [
    {
      heading: "Work",
      links: [
        { label: "Buddi", href: "#" },
        { label: "Maact Docs", href: "#" },
        { label: "Storybook", href: "#" },
      ],
    },
    {
      heading: "Site",
      links: [
        { label: "Writing", href: "#" },
        { label: "Bookshelf", href: "#" },
        { label: "About", href: "#about" },
        { label: "Now", href: "#" },
      ],
    },
    {
      heading: "Social",
      links: [
        { label: "GitHub", href: "https://github.com/" },
        { label: "LinkedIn", href: "https://linkedin.com/" },
        { label: "Twitter", href: "https://twitter.com/" },
      ],
    },
  ];

  return (
    <footer className="border-t border-white/[0.05] py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-8 mb-10">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="inline-flex items-center justify-center w-8 h-8 border text-sm font-bold text-white select-none"
              style={{ borderColor: "rgba(255,255,255,0.2)", fontFamily: "var(--font-geist-mono)" }}
              aria-label="Home"
            >
              a
            </a>
            <p className="text-xs text-[#444] mt-3 max-w-[180px] leading-relaxed">
              Building thoughtful interfaces, one component at a time.
            </p>
          </div>

          {/* Nav columns */}
          <div className="flex gap-10 sm:gap-16 flex-wrap">
            {navCols.map((col) => (
              <div key={col.heading}>
                <p className="text-xs text-[#555] uppercase tracking-widest font-mono mb-3">{col.heading}</p>
                <ul className="space-y-2">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="text-sm text-[#555] hover:text-white transition-colors">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.05] pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#333]">© {year} Abhinav. All rights reserved.</p>
          <p className="text-xs text-[#333]">Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
