import { SkillCard } from './skillCard';

export function Skills() {
  return (
    <div className="flex flex-col items-center justify-center text-center w-2/3 mx-auto pb-36">
      <h2 className="font-title text-3xl font-extrabold border-b solid w-full my-6">COMPÉTENCES</h2>
      <SkillCard></SkillCard>
    </div>
  );
}
