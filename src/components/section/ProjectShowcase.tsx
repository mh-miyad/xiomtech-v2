"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

/* ── Image Data ── */
const desktopImages = [
  "/product/p-1.png",
  "/product/p-2.png",
  "/product/p-3.png",
  "/product/p-4.png",
  "/product/p-5.png",
  "/product/p-6.png",
];

/* Combine into slides – alternating desktop & mobile */
const slides = [
  { src: desktopImages[0], type: "desktop" as const },

  { src: desktopImages[1], type: "desktop" as const },
  { src: desktopImages[2], type: "desktop" as const },

  { src: desktopImages[3], type: "desktop" as const },

  { src: desktopImages[4], type: "desktop" as const },
  { src: desktopImages[5], type: "desktop" as const },
];

/* ── Marquee Tags ── */
const tags = [
  "XiomPos",
  "Pokobai",
  "XiomHRM",
  "He Is Back",
  "XiomEdu",
  "Mobile Apps",
  "XiomCare",
];

function MarqueeStrip({ reverse = false }: { reverse?: boolean }) {
  const items = [...tags, ...tags, ...tags, ...tags];
  return (
    <div className="overflow-hidden py-5">
      <div
        className={`flex items-center gap-6 whitespace-nowrap ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ width: "max-content" }}
      >
        {items.map((tag, i) => (
          <span key={`${tag}-${i}`} className="flex items-center gap-6">
            <span className="text-sm md:text-base font-medium text-gray-800 tracking-wide">
              {tag}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-800 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ProjectShowcase() {
  return (
    <section className="py-10 md:py-16 overflow-hidden">
      {/* Top Marquee */}
      <MarqueeStrip />

      {/* Swiper Gallery */}
      <div className="">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1.2}
          spaceBetween={50}
          loop
          className="py-20!"
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          grabCursor
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={`${slide.src}-${i}`}>
              <div className=" max-h-[420px]  overflow-hidden border-2 border-blue-400 rounded-3xl ">
                <Image
                  src={slide.src}
                  alt={`Project showcase ${i + 1}`}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover pointer-events-none select-none"
                  draggable={false}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bottom Marquee */}
      <MarqueeStrip reverse />
    </section>
  );
}
