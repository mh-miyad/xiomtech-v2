"use client";
import { IconMenu } from "@tabler/icons-react";
import { useState } from "react";
import Logo from "./Logo";
const navlink = [
  { id: 1, link: "", name: "Service" },
  { id: 2, link: "", name: "Projects" },
  { id: 3, link: "", name: "About" },
];
const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  return (
    <header className=" backdrop-blur-sm sticky top-0 w-full h-20 z-50 px-10">
      <nav className="flex items-center justify-between h-full">
        <div className="bg-red-500">
          <ul className=" sr-only">
            {navlink.map((el) => {
              return <li>{el.name}</li>;
            })}
          </ul>
        </div>
        {/* Logo */}
        <div className="">
          <Logo />
        </div>
        <div>
          <button className="" aria-label="navbar menu ">
            <IconMenu size={46} strokeWidth={1} color={"black"} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
