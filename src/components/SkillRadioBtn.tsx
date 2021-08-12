import { makeBasicTooltip, str2enum } from '../helpers';
import Skill, { SkillLevel } from '../lib/Skill';

interface ISkillRadioBtnProps {
  index: number;
  skill: Skill;
  updateSkill: (s: Skill) => void;
  level: SkillLevel;
}

const SkillRadioBtn = (props: ISkillRadioBtnProps) => {
  const checked = props.skill.level === props.level;
  let labelSpanClasses = 'w-full h-full text-center';
  if (checked) {
    labelSpanClasses += ' bg-yellow-500 text-white';
  }
  const getLabel = () => {
    switch (props.level) {
      case SkillLevel.Inability:
        return 'I';
      case SkillLevel.Trained:
        return 'T';
      case SkillLevel.Specialized:
        return 'S';
      default:
        throw Error('wut?');
    }
  };

  return (
    <label
      className="flex items-center w-10 h-10 font-serif text-3xl text-center border border-gray-600 cursor-pointer hover:ring-inset hover:ring"
      data-tip={props.level}>
      <span className={labelSpanClasses}>{getLabel()}</span>
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
