"use client";
import Link from "next/link";
interface NavLinkProps {
  name: string;
}

export default function NavLink({ name }: NavLinkProps) {
  if (name.trim() === "") return null;
  const handleScroll = () => {
    const element = document.querySelector(name!);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Link
      href={`#${name.toLowerCase()}`}
      className="text-lg sm:text-xl  text-sky-900/80 font-semibold duration-300 hover:-translate-y-1"
      onClick={() => handleScroll()}
    >
      {name}
    </Link>
  );
}
