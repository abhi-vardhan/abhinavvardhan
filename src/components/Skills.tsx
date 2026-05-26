const skillGroups = [
  {
    category: "Frontend",
    color: "#0070f3",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 93 },
      { name: "Framer Motion", level: 78 },
    ],
  },
  {
    category: "Backend",
    color: "#0cce6b",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 78 },
      { name: "GraphQL", level: 72 },
    ],
  },
  {
    category: "DevOps & Tools",
    color: "#a78bfa",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "Docker", level: 74 },
      { name: "Vercel / AWS", level: 80 },
      { name: "CI/CD", level: 70 },
      { name: "Linux", level: 76 },
    ],
  },
];

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS",
  "PostgreSQL", "MongoDB", "GraphQL", "Docker", "AWS",
  "Prisma", "Redis", "Figma", "Git", "Vercel",
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-[#0070f3] uppercase tracking-widest">02 / Skills</span>
          <span className="flex-1 max-w-[60px] h-px bg-[#0070f3]/30" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-14">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4 leading-snug">
              Technologies I work with
            </h2>
            <p className="text-[#666666] text-base leading-relaxed">
              A curated toolkit built through real projects. I believe in mastering fundamentals
              before adopting new tools — quality over quantity.
            </p>
          </div>

          {/* Tech pill cloud */}
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-sm font-mono text-[#888888] bg-[#111111] border border-white/[0.06] rounded-lg hover:border-[#0070f3]/40 hover:text-white hover:bg-[#0070f3]/[0.05] transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Skill bars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div key={group.category} className="geist-card p-6">
              {/* Category header */}
              <div className="flex items-center gap-2 mb-6">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: group.color }}
                />
                <span className="text-xs font-mono uppercase tracking-widest text-[#666666]">
                  {group.category}
                </span>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-[#cccccc]">{skill.name}</span>
                      <span className="text-xs font-mono text-[#444444]">{skill.level}%</span>
                    </div>
                    <div className="h-0.5 w-full bg-white/[0.05] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${group.color}88, ${group.color})`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
