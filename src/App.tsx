import { useState, useEffect, Fragment } from 'react';
import BasicInfoSection from './components/BasicInfoSecion';
import StatPoolsSection from './components/StatPoolsSection';
import CharacterSheet from './lib/CharacterSheet';
import SkillsSection from './components/SkillsSection';
import { keygen } from './helpers';

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
        <div className="flex flex-col col-span-1 sheetSection">
          <h2 className="mx-auto my-3 text-xl font-semibold">Abilities</h2>
          <div className="flex flex-col mb-2">
            {sheet.abilities.map((ability, index) => {
              return <div key={keygen(`ability-${index}`)}></div>;
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
