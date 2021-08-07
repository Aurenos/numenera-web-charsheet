import { useState, useEffect, Fragment } from 'react';
import BasicInfo from './components/BasicInfo';
import SkillRadioBtn from './components/SkillRadioBtn';
import StatPools from './components/StatPools';
import CharacterSheet from './lib/CharacterSheet';
import Skill, { SkillLevel } from './lib/Skill';

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

                  <button
                    className="p-2 border"
                    onClick={() => {
                      let skills = sheet.skills;
                      skills.splice(index, 1);
                      setSheet({ ...sheet, skills });
                    }}>
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
          <button
            className="w-1/4 p-2 mx-auto mb-2 border border-black"
            onClick={() => {
              let skills = sheet.skills;
              skills.push(new Skill());
              setSheet({ ...sheet, skills });
            }}>
            Add Skill
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
