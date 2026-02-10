"use client";

const projects = [
  {
    tag: "SaaS Platform",
    title: "Smart Analytics Dashboard",
    description:
      "A real-time analytics platform for e-commerce businesses. Tracks conversions, user behavior, and revenue metrics with intuitive visualizations.",
    stats: [
      { label: "Screens Designed", value: "60+" },
      { label: "User Growth", value: "45%" },
    ],
    color: "from-violet-500/20 to-purple-600/20",
    borderColor: "hover:border-violet-500/30",
    placeholder: "analytics-dashboard",
  },
  {
    tag: "E-Commerce",
    title: "Modern Shopping Experience",
    description:
      "A next-generation e-commerce platform with AI-powered recommendations, seamless checkout, and mobile-first responsive design.",
    stats: [
      { label: "Conversion Rate", value: "+38%" },
      { label: "Load Time", value: "<1.5s" },
    ],
    color: "from-amber-500/20 to-orange-600/20",
    borderColor: "hover:border-amber-500/30",
    placeholder: "ecommerce-platform",
  },
  {
    tag: "FinTech",
    title: "Digital Banking App",
    description:
      "A secure digital banking application with real-time transactions, budget tracking, and investment portfolio management for modern users.",
    stats: [
      { label: "App Downloads", value: "100K+" },
      { label: "User Retention", value: "72%" },
    ],
    color: "from-emerald-500/20 to-teal-600/20",
    borderColor: "hover:border-emerald-500/30",
    placeholder: "banking-app",
  },
  {
    tag: "Healthcare",
    title: "Telemedicine Platform",
    description:
      "A HIPAA-compliant telemedicine solution connecting patients with healthcare providers through video consultations and health record management.",
    stats: [
      { label: "Platform Type", value: "Web + Mobile" },
      { label: "Duration", value: "4 Months" },
    ],
    color: "from-sky-500/20 to-blue-600/20",
    borderColor: "hover:border-sky-500/30",
    placeholder: "telemedicine",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#7c3aed]/5 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-6">
            <span className="text-xs font-medium text-[#a78bfa] uppercase tracking-wider">
              Our Work
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-syne)] tracking-tight">
            Projects That{" "}
            <span className="gradient-text">Speak Results</span>
          </h2>
          <p className="mt-5 text-lg text-zinc-400 max-w-2xl mx-auto">
            Every project is a success story. Here are some of the digital
            experiences we&apos;ve crafted for our clients.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group relative rounded-2xl border border-white/5 bg-[#111] overflow-hidden transition-all duration-500 ${project.borderColor}`}
            >
              {/* Project Image Placeholder */}
              <div
                className={`relative h-56 sm:h-64 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}
              >
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
                {/* Placeholder mockup */}
                <div className="relative z-10 w-4/5 max-w-sm">
                  <div className="bg-white/10 backdrop-blur rounded-xl border border-white/10 p-4 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                      <div className="flex-1 h-4 rounded bg-white/5 ml-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 w-3/4 rounded bg-white/10" />
                      <div className="h-3 w-1/2 rounded bg-white/8" />
                      <div className="grid grid-cols-3 gap-2 mt-3">
                        <div className="h-12 rounded bg-white/5" />
                        <div className="h-12 rounded bg-white/8" />
                        <div className="h-12 rounded bg-white/5" />
                      </div>
                      <div className="h-3 w-2/3 rounded bg-white/5 mt-2" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 sm:p-8">
                <span className="inline-block text-xs font-medium text-[#a78bfa] bg-[#7c3aed]/10 px-3 py-1 rounded-full mb-4">
                  {project.tag}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-syne)] mb-3">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-6 mb-6">
                  {project.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-xl font-bold font-[family-name:var(--font-syne)]">
                        {stat.value}
                      </div>
                      <div className="text-xs text-zinc-500">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* View Button */}
                <div className="flex items-center gap-2 text-sm text-[#a78bfa] font-medium group-hover:gap-3 transition-all duration-300">
                  <span>View Case Study</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See All */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="group inline-flex items-center gap-3 rounded-full border border-white/10 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/5 hover:border-[#7c3aed]/30"
          >
            <span>See All Projects</span>
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
