"use client";

const reasons = [
  {
    number: "01",
    title: "End-to-End Execution",
    description:
      "From strategy and design to development and deployment, we handle every aspect of your digital project. One team, one vision, zero handoff friction.",
  },
  {
    number: "02",
    title: "Modern Tech Stack",
    description:
      "We build with cutting-edge technologies like React, Next.js, Node.js, and cloud-native architectures. Your product will be fast, scalable, and future-proof.",
  },
  {
    number: "03",
    title: "Results-Driven Approach",
    description:
      "Every pixel we design and every line of code we write is focused on driving measurable business outcomes. We track, measure, and optimize for growth.",
  },
  {
    number: "04",
    title: "Transparent Communication",
    description:
      "Weekly updates, clear timelines, and direct access to your dedicated team. You'll always know where your project stands with no surprises.",
  },
];

const stats = [
  { value: "98%", label: "Client Satisfaction" },
  { value: "2x", label: "Faster Delivery" },
  { value: "24/7", label: "Support Available" },
  { value: "0", label: "Hidden Costs" },
];

export default function WhyUs() {
  return (
    <section className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[#7c3aed]/5 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-6">
            <span className="text-xs font-medium text-[#a78bfa] uppercase tracking-wider">
              Why XiomTech
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-syne)] tracking-tight">
            Why Brands{" "}
            <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="mt-5 text-lg text-zinc-400 max-w-2xl mx-auto">
            We&apos;re not just another agency. We&apos;re your technology
            partner committed to delivering excellence.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="group relative flex gap-6 rounded-2xl border border-white/5 bg-[#111] p-8 transition-all duration-500 hover:border-[#7c3aed]/20"
            >
              <div className="text-4xl font-extrabold font-[family-name:var(--font-syne)] text-[#7c3aed]/20 group-hover:text-[#7c3aed]/40 transition-colors duration-300 shrink-0">
                {reason.number}
              </div>
              <div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-syne)] mb-2">
                  {reason.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="rounded-2xl border border-white/5 bg-[#111] p-8 sm:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl sm:text-5xl font-extrabold font-[family-name:var(--font-syne)] gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-zinc-500 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
