const experiences = [
  {
    company: "Veritas Tech",
    role: "Senior Frontend Engineer",
    period: "2023 — Present",
    location: "Remote",
    type: "Full-time",
    typeColor: "#0070f3",
    description:
      "Leading frontend architecture for a B2B SaaS platform serving 50K+ users. Migrated legacy codebase to Next.js App Router, reducing TTI by 60%. Established component library and design system adopted across 4 teams.",
    highlights: [
      "Reduced bundle size by 40% through code splitting",
      "Built a design system with 60+ components",
      "Mentored 3 junior engineers",
    ],
    stack: ["Next.js", "TypeScript", "GraphQL", "AWS"],
  },
  {
    company: "Pixel Labs",
    role: "Full-Stack Developer",
    period: "2022 — 2023",
    location: "Hybrid",
    type: "Full-time",
    typeColor: "#0070f3",
    description:
      "Built and maintained multiple client web applications. Delivered an e-commerce platform that processed $2M+ in transactions. Developed internal tooling that saved 20hrs/week of manual work.",
    highlights: [
      "Shipped 8 production applications",
      "Improved API response time by 3x",
      "Integrated payment gateways (Stripe, Razorpay)",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Redis"],
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "2021 — 2022",
    location: "Remote",
    type: "Contract",
    typeColor: "#a78bfa",
    description:
      "Worked with 10+ clients across industries including fintech, healthcare, and e-commerce. Built responsive websites, REST APIs, and mobile-first web apps.",
    highlights: [
      "10+ client projects delivered on time",
      "100% client satisfaction rate",
      "Specialized in React & Node.js",
    ],
    stack: ["React", "Express", "MongoDB", "Tailwind"],
  },
];

const education = [
  {
    institution: "National Institute of Technology",
    degree: "B.Tech — Computer Science & Engineering",
    period: "2018 — 2022",
    gpa: "8.7 / 10",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-[#0070f3] uppercase tracking-widest">04 / Experience</span>
          <span className="flex-1 max-w-[60px] h-px bg-[#0070f3]/30" />
        </div>

        <div className="grid lg:grid-cols-[1fr_320px] gap-12">
          {/* Timeline */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-10 leading-snug">
              Work history
            </h2>

            <div className="relative space-y-0">
              {/* Vertical line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/[0.06]" />

              {experiences.map((exp, i) => (
                <div key={i} className="relative pl-8 pb-10 last:pb-0">
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#111] bg-[#222] ring-2 ring-white/[0.06]" />

                  {/* Card */}
                  <div className="geist-card p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-base font-semibold text-white">{exp.role}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm text-[#888888]">{exp.company}</span>
                          <span className="text-[#333333]">·</span>
                          <span className="text-xs text-[#555555]">{exp.location}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                        <span className="font-mono text-xs text-[#555555]">{exp.period}</span>
                        <span
                          className="geist-badge"
                          style={{ color: exp.typeColor, borderColor: `${exp.typeColor}33` }}
                        >
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-[#666666] leading-relaxed mb-4">{exp.description}</p>

                    {/* Highlights */}
                    <ul className="space-y-1.5 mb-4">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-[#555555]">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-[#0070f3] shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.04]">
                      {exp.stack.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 text-xs font-mono text-[#555555] bg-white/[0.03] border border-white/[0.05] rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Education + Extras */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-mono text-[#444444] uppercase tracking-widest mb-4">Education</h3>
              {education.map((edu) => (
                <div key={edu.institution} className="geist-card p-5">
                  <div className="text-sm font-semibold text-white mb-1">{edu.degree}</div>
                  <div className="text-sm text-[#666666] mb-3">{edu.institution}</div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#444444]">{edu.period}</span>
                    <span className="font-mono text-xs text-[#0070f3]">GPA {edu.gpa}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xs font-mono text-[#444444] uppercase tracking-widest mb-4">Certifications</h3>
              <div className="space-y-3">
                {[
                  { name: "AWS Solutions Architect", org: "Amazon Web Services", year: "2023" },
                  { name: "Meta Frontend Developer", org: "Meta", year: "2022" },
                  { name: "Google UX Design", org: "Google", year: "2022" },
                ].map((cert) => (
                  <div key={cert.name} className="geist-card p-4">
                    <div className="text-sm text-white mb-0.5">{cert.name}</div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-[#555555]">{cert.org}</span>
                      <span className="font-mono text-xs text-[#444444]">{cert.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Open source */}
            <div className="geist-card p-5 bg-gradient-to-br from-[#0070f3]/[0.06] to-transparent">
              <h3 className="text-xs font-mono text-[#444444] uppercase tracking-widest mb-3">Open Source</h3>
              <p className="text-sm text-[#555555] leading-relaxed mb-3">
                Active contributor to several open-source projects including React ecosystem libraries and developer tools.
              </p>
              <div className="flex gap-3 font-mono text-xs">
                <div>
                  <div className="text-white font-semibold">240+</div>
                  <div className="text-[#444444]">Contributions</div>
                </div>
                <div>
                  <div className="text-white font-semibold">18</div>
                  <div className="text-[#444444]">Repos</div>
                </div>
                <div>
                  <div className="text-white font-semibold">320+</div>
                  <div className="text-[#444444]">GitHub Stars</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
