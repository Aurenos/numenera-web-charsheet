import { makeBasicTooltip, str2enum } from '../helpers';
import Skill, { SkillLevel } from '../lib/Skill';

interface ISkillRadioBtnProps {
  index: number;
  skill: Skill;
  updateSkill: (s: Skill) => void;
  level: SkillLevel;
  label: string;
}

const SkillRadioBtn = (props: ISkillRadioBtnProps) => {
  let checked = props.skill.level === props.level;
  let labelSpanClasses = 'w-full h-full text-center';
  if (checked) {
    labelSpanClasses += ' bg-yellow-500 text-white';
  }

  return (
    <label
      className="flex items-center w-10 h-10 font-serif text-3xl text-center border border-gray-600 cursor-pointer hover:ring-inset hover:ring"
      data-tip={props.level}>
      <span className={labelSpanClasses}>{props.label}</span>
      {makeBasicTooltip(500)}
      <input
        className="hidden"
        type="radio"
        name={`skill-${props.index}`}
        value={props.level}
        checked={checked}
        onChange={(e) =>
          props.updateSkill({
            ...props.skill,
            level: str2enum(SkillLevel, e.currentTarget.value),
          })
        }
      />
    </label>
  );
};

export default SkillRadioBtn;
