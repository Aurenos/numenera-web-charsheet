import ReactTooltip from 'react-tooltip';
import Skill, { SkillLevel } from '../lib/Skill';

interface ISkillRadioBtnProps {
  index: number;
  skill: Skill;
  updateSkill: (s: Skill) => void;
  level: SkillLevel;
  label: string;
}

function getTooltip(level: SkillLevel) {
  switch (level) {
    case SkillLevel.TRAINED:
      return 'Trained';
    case SkillLevel.SPECIALIZED:
      return 'Specialized';
    case SkillLevel.INABILITY:
      return 'Inability';
  }
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
      data-tip={getTooltip(props.level)}>
      <span className={labelSpanClasses}>{props.label}</span>
      <ReactTooltip
        effect="solid"
        delayShow={500}
        className="h-10 px-2 py-2 font-sans text-base"
      />
      <input
        className="hidden"
        type="radio"
        name={`skill-${props.index}`}
        value={props.level}
        checked={checked}
        onChange={(e) =>
          props.updateSkill({
            ...props.skill,
            level: parseInt(e.currentTarget.value),
          })
        }
      />
    </label>
  );
};

export default SkillRadioBtn;
