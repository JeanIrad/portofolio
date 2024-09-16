import Image from "next/image";

interface SkillProps {
  name: string;
  icon: string;
}
export default function Skill({ name, icon }: SkillProps) {
  return (
    <div className="flex flex-col border border-sky-900 max-w-[120px] h-auto rounded-md">
      <Image src={icon} alt={name} />
      <p className="text-center text-sm pt-1">{name}</p>
    </div>
  );
}
