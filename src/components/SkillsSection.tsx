import SkillRadioBtn from './SkillRadioBtn';
import Skill, { SkillLevel } from '../lib/Skill';
import { SheetSectionProps } from '../lib/CharacterSheet';
import { TrashIcon, PlusIcon } from '@heroicons/react/solid';

const Skills = (props: SheetSectionProps) => {
  const { sheet, updateSheet } = props;
  const sectionClasses = `col-span-${
    props.colSpan?.toString() || '1'
  } flex flex-col sheetSection`;

  return (
    <div className={sectionClasses}>
      <h2 className="mx-auto my-3 text-xl font-semibold">Skills</h2>
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
                  label="T"
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
                  label="S"
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
                  label="I"
                  updateSkill={(sk) => {
                    let skills = sheet.skills;
                    skills[index] = sk;
                    updateSheet({ ...sheet, skills });
                  }}
                />
              </div>
              <button
                className="h-10 p-2 text-gray-500 focus:text-white focus:bg-gray-400 sheetButton"
                onClick={(e) => {
                  let skills = sheet.skills;
                  skills.splice(index, 1);
                  updateSheet({ ...sheet, skills });
                  e.currentTarget.blur();
                }}>
                <TrashIcon className="w-6 h-6" />
              </button>
            </div>
          );
        })}
      </div>
      <button
        className="inline-flex items-center px-10 py-2 mx-auto mb-2 align-middle focus:bg-blue-300 focus:outline-none focus:text-white sheetButton"
        onClick={(e) => {
          let skills = sheet.skills;
          skills.push(new Skill());
          updateSheet({ ...sheet, skills });
          e.currentTarget.blur();
        }}>
        <PlusIcon className="w-6 h-6 mr-2 text-green-500" />
        <span className="font-semibold ">Add Skill</span>
      </button>
    </div>
  );
};

export default Skills;
