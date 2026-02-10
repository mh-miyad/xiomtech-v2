"use client";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechFlow",
    content:
      "XiomTech transformed our outdated platform into a modern SaaS product. The team's attention to detail and technical expertise exceeded our expectations. Our user engagement increased by 60% within the first quarter.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Founder, NovaPay",
    content:
      "Working with XiomTech was a game-changer for our fintech startup. They delivered a secure, scalable payment platform that our users love. The whole team was incredibly responsive and professional throughout.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Product, CloudSync",
    content:
      "The UI/UX redesign XiomTech did for our dashboard was phenomenal. Our customer satisfaction scores jumped from 3.2 to 4.8 stars. They truly understand how to create interfaces that users enjoy using.",
    rating: 5,
  },
  {
    name: "James Okonkwo",
    role: "CTO, DataPulse",
    content:
      "From MVP to production, XiomTech was with us every step of the way. Their full-stack expertise and clean code practices made our platform easy to maintain and scale. Highly recommend for any startup.",
    rating: 5,
  },
  {
    name: "Lisa Park",
    role: "Marketing Director, PixelCraft",
    content:
      "Our brand identity and website redesign completely revitalized our company image. XiomTech delivered a cohesive design system that works across all touchpoints. The results speak for themselves.",
    rating: 5,
  },
  {
    name: "Marcus Weber",
    role: "CEO, AppVault",
    content:
      "XiomTech built our mobile app from scratch and it's been downloaded over 50K times in just 3 months. The cross-platform approach saved us time and money without sacrificing quality at all.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#7c3aed]/5 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-6">
            <span className="text-xs font-medium text-[#a78bfa] uppercase tracking-wider">
              Client Stories
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-syne)] tracking-tight">
            Voices That{" "}
            <span className="gradient-text">Inspire Us</span>
          </h2>
          <p className="mt-5 text-lg text-zinc-400 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients
            have to say about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group relative rounded-2xl border border-white/5 bg-[#111] p-8 transition-all duration-500 hover:border-[#7c3aed]/20"
            >
              {/* Quote Icon */}
              <svg
                className="w-8 h-8 text-[#7c3aed]/30 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#a78bfa] flex items-center justify-center text-sm font-bold text-white">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-zinc-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
