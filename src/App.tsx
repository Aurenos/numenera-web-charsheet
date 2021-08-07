import { useState, useEffect, Fragment } from 'react';
import BasicInfo from './components/BasicInfo';
import SkillRadioBtn from './components/SkillRadioBtn';
import StatPools from './components/StatPools';
import CharacterSheet from './lib/CharacterSheet';
import Skill, { SkillLevel } from './lib/Skill';
import { TrashIcon, PlusIcon } from '@heroicons/react/solid';

const App = () => {
  const [sheet, setSheet] = useState<CharacterSheet>((): CharacterSheet => {
    const existingSheet = window.localStorage.getItem('characterSheet');
    if (existingSheet) {
      return JSON.parse(existingSheet);
    } else {
      return new CharacterSheet();
    }
  });

  useEffect(() => {
    // window.localStorage.setItem('characterSheet', JSON.stringify(sheet));
  });

  return (
    <Fragment>
      <div className="container grid grid-cols-4 gap-4 p-4 mx-auto mt-6 rounded-xl bg-gray-50">
        <h1 className="col-span-4 mx-auto title">Numenera</h1>
        <BasicInfo sheet={sheet} updateSheet={setSheet} />
        <StatPools sheet={sheet} updateSheet={setSheet} />
        <div className="flex flex-col col-span-2 border border-gray-200 rounded">
          <h2 className="mx-auto my-3 text-xl font-semibold">Skills</h2>
          <div className="flex flex-col mb-2">
            {sheet.skills.map((skill, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row items-center mx-4 mb-2">
                  <input
                    className="flex-grow h-10 sheetInput"
                    type="text"
                    placeholder="Skill Name"
                    value={skill.name}
                    onChange={(e) => {
                      let skills = sheet.skills;
                      skills[index] = { ...skill, name: e.currentTarget.value };
                      setSheet({ ...sheet, skills });
                    }}
                  />
                  <div className="flex flex-row mx-4">
                    <SkillRadioBtn
                      index={index}
                      skill={skill}
                      level={SkillLevel.TRAINED}
                      label="T"
                      updateSkill={(sk) => {
                        let skills = sheet.skills;
                        skills[index] = sk;
                        setSheet({ ...sheet, skills });
                      }}
                    />
                    <SkillRadioBtn
                      index={index}
                      skill={skill}
                      level={SkillLevel.SPECIALIZED}
                      label="S"
                      updateSkill={(sk) => {
                        let skills = sheet.skills;
                        skills[index] = sk;
                        setSheet({ ...sheet, skills });
                      }}
                    />
                    <SkillRadioBtn
                      index={index}
                      skill={skill}
                      level={SkillLevel.INABILITY}
                      label="I"
                      updateSkill={(sk) => {
                        let skills = sheet.skills;
                        skills[index] = sk;
                        setSheet({ ...sheet, skills });
                      }}
                    />
                  </div>
                  <button
                    className="h-10 p-2 text-gray-500 bg-gray-100 border border-gray-400 rounded shadow outline-none hover:bg-gray-200 focus:text-white focus:bg-gray-400 "
                    onClick={(e) => {
                      let skills = sheet.skills;
                      skills.splice(index, 1);
                      setSheet({ ...sheet, skills });
                      e.currentTarget.blur();
                    }}>
                    <TrashIcon className="w-6 h-6" />
                  </button>
                </div>
              );
            })}
          </div>
          <button
            className="inline-flex items-center px-10 py-2 mx-auto mb-2 align-middle bg-gray-100 border border-gray-400 rounded shadow outline-none hover:bg-gray-200 focus:text-white focus:bg-blue-300 focus:outline-none"
            onClick={(e) => {
              let skills = sheet.skills;
              skills.push(new Skill());
              setSheet({ ...sheet, skills });
              e.currentTarget.blur();
            }}>
            <PlusIcon className="w-6 h-6 mr-2 text-green-500" />
            <span className="font-semibold ">Add Skill</span>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
