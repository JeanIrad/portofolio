import Skill from "./skillsWrapper/Skill";
import reactSkill from "../../public/skills/reactjs-svgrepo-com.svg";
import nextjsSkill from "../../public/skills/nextjs-fill-svgrepo-com.svg";

export default function Skills() {
  return (
    <div className="w-full md:w-[80%] mx-auto px-4 mt-16 space-y-8" id="skills">
      <h1 className="font-semibold text-sky-900/80 text-3xl text-center">
        Skills
      </h1>
      <div className="flex w-full flex-wrap sm:gap-6 sm:flex-nowrap gap-4 items-center justify-center ">
        <Skill name="Reactjs" icon={reactSkill} />
        <Skill name="Nextjs" icon={nextjsSkill} />
        <Skill name="Reactjs" icon={reactSkill} />
        <Skill name="Reactjs" icon={reactSkill} />
        <Skill name="Reactjs" icon={reactSkill} />
      </div>
    </div>
  );
}
