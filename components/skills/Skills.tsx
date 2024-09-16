import Skill from "@/components/skills/skillsWrapper/Skill";
import reactjs from "@/public/skills/reactjs-svgrepo-com.svg";
import nextjs from "@/public/skills/nextjs-fill-svgrepo-com.svg";
import mongodb from "@/public/skills/mongo-svgrepo-com.svg";
import nodejs from "@/public/skills/nodejs-icon-svgrepo-com.svg";
import postgresql from "@/public/skills/postgresql-svgrepo-com.svg";
import expressjs from "@/public/skills/express-svgrepo-com(1).svg";
import nestjs from "@/public/skills/nestjs-svgrepo-com.svg";

export default function Skills() {
  return (
    <div className="w-full md:w-[80%] mx-auto px-4 mt-16 space-y-8" id="skills">
      <h1 className="font-semibold text-sky-900/80 text-3xl text-center">
        Skills
      </h1>
      <div className="flex w-full flex-wrap gap-6 sm:flex-nowrap  items-center justify-center ">
        <Skill name="Reactjs" icon={reactjs} />
        <Skill name="Nextjs" icon={nextjs} />
        <Skill name="Nestjs" icon={nestjs} />
        <Skill name="Expressjs" icon={expressjs} />
        <Skill name="Postgresql" icon={postgresql} />
        <Skill name="Mongodb" icon={mongodb} />
        <Skill name="Nodejs" icon={nodejs} />
      </div>
    </div>
  );
}
