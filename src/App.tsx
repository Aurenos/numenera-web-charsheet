import { Fragment, useEffect, useState } from 'react';
import AbilitiesSection from './components/AbilitiesSection';
import BasicInfoSection from './components/BasicInfoSecion';
import SkillsSection from './components/SkillsSection';
import StatPoolsSection from './components/StatPoolsSection';
import CharacterSheet from './lib/CharacterSheet';

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
        <AbilitiesSection sheet={sheet} updateSheet={setSheet} colSpan={2} />
      </div>
    </Fragment>
  );
};

export default App;
