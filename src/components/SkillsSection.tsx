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
                  let skills = sheet.skills;
                  skills[index] = { ...skill, name: e.currentTarget.value };
                  updateSheet({ ...sheet, skills });
                }}
              />
              <div className="flex flex-row mx-4">
                <SkillRadioBtn
                  index={index}
                  skill={skill}
                  level={SkillLevel.Trained}
                  updateSkill={(sk) => {
                    let skills = sheet.skills;
                    skills[index] = sk;
                    updateSheet({ ...sheet, skills });
                  }}
                />
                <SkillRadioBtn
                  index={index}
                  skill={skill}
                  level={SkillLevel.Specialized}
                  updateSkill={(sk) => {
                    let skills = sheet.skills;
                    skills[index] = sk;
                    updateSheet({ ...sheet, skills });
                  }}
                />
                <SkillRadioBtn
                  index={index}
                  skill={skill}
                  level={SkillLevel.Inability}
                  updateSkill={(sk) => {
                    let skills = sheet.skills;
                    skills[index] = sk;
                    updateSheet({ ...sheet, skills });
                  }}
                />
              </div>
              <TrashButton
                onClick={() => {
                  let skills = sheet.skills;
                  skills.splice(index, 1);
                  updateSheet({ ...sheet, skills });
                }}
              />
            </div>
          );
        })}
      </div>
      <ListAddButton
        label="Add Skill"
        onClick={() => {
          let skills = sheet.skills;
          skills.push(new Skill());
          updateSheet({ ...sheet, skills });
        }}
      />
    </div>
  );
};

export default Skills;
