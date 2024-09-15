import Image from "next/image";
import profilePic from "@/public/jean.jpg";
import Social from "@/components/hero/social/Social";
import Introduction from "@/components/hero/introduction/Introduction";

export default function Hero() {
  return (
    <div className="mt-16 w-full  md:w-[80%] md:mx-auto flex flex-col sm:flex-row gap-10 px-4 overflow-hidden">
      <Social />
      <Introduction />
      <Image
        src={profilePic}
        alt="hello"
        className="md:w-[350px] h-auto sm:order-3 rounded-md duration-300  ease-in-out hover:drop-shadow-md hover:scale-105"
      />
    </div>
  );
}
