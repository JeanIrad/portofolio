"use client";
import Link from "next/link";
interface NavLinkProps {
  name: string;
}

export default function NavLink({ name }: NavLinkProps) {
  const handleScroll = () => {
    console.log("something", name);
    const element = document.querySelector(name!);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Link
      href={`#${name.toLowerCase()}`}
      className="text-2xl  text-sky-900/80 font-semibold duration-300 hover:-translate-y-1"
      onClick={() => handleScroll()}
    >
      {name}
    </Link>
  );
}
