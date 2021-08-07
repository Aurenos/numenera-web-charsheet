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
  return (
    <div className="mx-4">
      <label className="cursor-pointer" data-tip={getTooltip(props.level)}>
        <span className="mr-1 font-serif text-xl">{props.label}</span>
        <input
          type="radio"
          name={`skill-${props.index}`}
          value={props.level}
          checked={props.skill.level === props.level}
          onChange={(e) =>
            props.updateSkill({
              ...props.skill,
              level: parseInt(e.currentTarget.value),
            })
          }
        />
        <ReactTooltip />
      </label>
    </div>
  );
};

export default SkillRadioBtn;
