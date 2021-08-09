import { useState, useEffect, Fragment } from 'react';
import BasicInfoSection from './components/BasicInfoSecion';
import StatPoolsSection from './components/StatPoolsSection';
import CharacterSheet from './lib/CharacterSheet';
import SkillsSection from './components/SkillsSection';
import { PlusIcon, TrashIcon } from '@heroicons/react/solid';
import Ability from './lib/Ability';
import AbilityField from './components/AbilityField';

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
      <div className="container grid grid-cols-4 gap-4 p-4 mx-auto mt-6 bg-gray-100 rounded-xl">
        <h1 className="col-span-4 mx-auto filter drop-shadow-lg title">
          Numenera
        </h1>
        <BasicInfoSection sheet={sheet} updateSheet={setSheet} colSpan={2} />
        <StatPoolsSection sheet={sheet} updateSheet={setSheet} colSpan={2} />
        <SkillsSection sheet={sheet} updateSheet={setSheet} colSpan={2} />
        <div className="flex flex-col col-span-2 sheetSection">
          <h2 className="mx-auto my-3 text-xl font-semibold">Abilities</h2>
          <div className="flex flex-col mb-2">
            {sheet.abilities.map((ability, index) => {
              return (
                <div
                  key={`ability-${index}`}
                  className="flex flex-row items-start mx-4 mb-2">
                  <AbilityField
                    sheet={sheet}
                    updateSheet={setSheet}
                    index={index}
                    ability={ability}
                  />
                  <button
                    className="h-10 p-2 text-gray-500 focus:text-white focus:bg-gray-400 sheetButton "
                    onClick={(e) => {
                      let abilities = sheet.abilities;
                      abilities.splice(index, 1);
                      setSheet({ ...sheet, abilities });
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
              let abilities = sheet.abilities;
              abilities.push(new Ability());
              setSheet({ ...sheet, abilities });
              e.currentTarget.blur();
            }}>
            <PlusIcon className="w-6 h-6 mr-2 text-green-500" />
            <span className="font-semibold ">Add Ability</span>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
