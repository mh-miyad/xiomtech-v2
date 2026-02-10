"use client";
import gsap from "gsap";
import { IconMenu } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import FullPageMenu from "./FullPageMenu";

const navlink = [
  { id: 1, link: "", name: "Service" },
  { id: 2, link: "", name: "Projects" },
  { id: 3, link: "", name: "About" },
];
const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Logo appears first
      tl.fromTo(
        "[data-nav-logo]",
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
      )
        // Then menu icon slides in
        .fromTo(
          "[data-nav-menu]",
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.3",
        );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <header ref={headerRef} className=" backdrop-blur-sm sticky top-0 w-full h-20 z-50 px-6 md:px-10">
        <nav className="flex items-center justify-between h-full">
          <div className="bg-red-500">
            <ul className=" sr-only">
              {navlink.map((el) => {
                return <li key={el.id}>{el.name}</li>;
              })}
            </ul>
          </div>
          {/* Logo */}
          <div data-nav-logo className="opacity-0">
            <Logo />
          </div>
          <div data-nav-menu className="opacity-0">
            <button
              className=""
              aria-label="Open menu"
              onClick={() => setIsopen(true)}
            >
              <IconMenu size={46} strokeWidth={1} color={"black"} />
            </button>
          </div>
        </nav>
      </header>

      <FullPageMenu isOpen={isOpen} onClose={() => setIsopen(false)} />
    </>
  );
};

export default Navbar;
