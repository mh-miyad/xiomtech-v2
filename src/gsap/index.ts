import gsap from "gsap";

export const tl = gsap.timeline();

gsap.fromTo(
  '[data-hero-bar="left"]',
  {
    x: -100,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 1,
  }
);
gsap.fromTo(
  '[data-hero-bar="right"]',
  {
    x: 100,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 1,
  }
);
