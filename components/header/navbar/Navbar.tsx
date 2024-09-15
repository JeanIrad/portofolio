"use client";
import { useState, useContext } from "react";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import NavLink from "../navLink/NavLink";
import { NavbarContext } from "@/contexts";

export default function DesktopNavBar() {
  const menuContext = useContext(NavbarContext);
  const [isOpen, setIsOpen] = useState(menuContext);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full flex items-center py-4 fixed top-0 z-50  bg-white">
      <nav className="hidden md:flex gap-x-10 md:max-w-[800px] mx-auto items-center justify-center ">
        <NavLink name="Home" />
        <NavLink name="About" />
        <NavLink name="Skills" />
        <NavLink name="Projects" />
        <NavLink name="Contact" />
      </nav>
      <nav
        className={`w-full ${
          isOpen ? "flex" : "hidden"
        } flex-col gap-y-4 md:hidden gap-x-10 md:max-w-[800px] mx-auto items-center justify-center   `}
      >
        <NavLink name="Home" />
        <NavLink name="About" />
        <NavLink name="Skills" />
        <NavLink name="Projects" />
        <NavLink name="Contact" />
      </nav>
      <span
        onClick={handleToggle}
        className="md:hidden w-[50px] absolute top-1 right-0 h-6  text-sky-900/80"
      >
        {isOpen ? (
          <AiOutlineClose className="w-[50px] h-[30px]  text-sky-900/80" />
        ) : (
          <FaBars className="w-[50px] h-[30px]  text-sky-900/80" />
        )}
      </span>
    </div>
  );
}
