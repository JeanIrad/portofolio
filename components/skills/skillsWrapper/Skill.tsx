interface SkillProps {
  name: string;
  icon: string;
}
export default function Skill({ name }: SkillProps) {
  return (
    <div className="flex flex-col border border-sky-900 px-2 py-3 rounded-md">
      <p>{name}</p>
    </div>
  );
}
