import { ISheetSectionProps } from '../lib/CharacterSheet';
import Skill, { SkillLevel } from '../lib/Skill';
import SkillRadioBtn from './SkillRadioBtn';
import ListAddButton from './utility/ListAddButton';
import TrashButton from './utility/TrashButton';

const Skills = (props: ISheetSectionProps) => {
  const { sheet, updateSheet } = props;
  const sectionClasses = `col-span-${
    props.colSpan?.toString() || '1'
  } flex flex-col sheetSection`;

  const updateSkills = (change: Object, index: number) => {
    let skills = sheet.skills;
    Object.assign(skills[index], change);
    updateSheet({ ...sheet, skills });
  };

  const deleteSkill = (index: number) => {
    let skills = sheet.skills;
    skills.splice(index, 1);
    updateSheet({ ...sheet, skills });
  };

  const addSkill = () => {
    let skills = sheet.skills;
    skills.push(new Skill());
    updateSheet({ ...sheet, skills });
  };

  return (
    <div className={sectionClasses}>
      <h2>Skills</h2>
      <div className="flex flex-col mb-2">
        {sheet.skills.map((skill, index) => {
          return (
            <div
              key={`skill-${index}`}
              className="flex flex-row items-center mx-4 mb-2">
              <input
                className="flex-grow h-10 sheetInput"
                type="text"
                placeholder="Skill Name"
                value={skill.name}
                onChange={(e) => {
                  updateSkills({ name: e.currentTarget.value }, index);
                }}
              />
              <div className="flex flex-row mx-4">
                <SkillRadioBtn
                  index={index}
                  skill={skill}
                  level={SkillLevel.Trained}
                  updateSkills={updateSkills}
                />
                <SkillRadioBtn
                  index={index}
                  skill={skill}
                  level={SkillLevel.Specialized}
                  updateSkills={updateSkills}
                />
                <SkillRadioBtn
                  index={index}
                  skill={skill}
                  level={SkillLevel.Inability}
                  updateSkills={updateSkills}
                />
              </div>
              <TrashButton onClick={() => deleteSkill(index)} />
            </div>
          );
        })}
      </div>
      <ListAddButton label="Add Skill" onClick={() => addSkill()} />
    </div>
  );
};

export default Skills;
