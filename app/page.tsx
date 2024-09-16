// import Image from "next/image";
import About from "@/components/about/About";
import DesktopNavBar from "@/components/header/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Project";
import Skills from "@/components/skills/Skills";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className={cn("w-full min-h-[100dvh]")}>
      <DesktopNavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
