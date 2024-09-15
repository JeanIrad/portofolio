import Image from "next/image";

interface SkillProps {
  name: string;
  icon: string;
}
export default function Skill({ name, icon }: SkillProps) {
  return (
    <div className="flex flex-col border border-sky-900 px-2 py-3 rounded-md">
      {/* <Image src={icon} alt="skill" className="w-full" /> */}
      <p>{name}</p>
    </div>
  );
}
