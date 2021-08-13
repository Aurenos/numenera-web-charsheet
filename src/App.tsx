import { Fragment, useEffect, useState } from 'react';
import AbilitiesSection from './components/AbilitiesSection';
import ArmorSection from './components/ArmorSection';
import BasicInfoSection from './components/BasicInfoSection';
import EquipmentSection from './components/EquipmentSection';
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
      <div className="container grid grid-cols-2 gap-4 p-4 mx-auto mt-6 bg-gray-100 lg:grid-cols-4 rounded-xl">
        <h1 className="col-span-2 mx-auto my-6 lg:col-span-4 filter drop-shadow-lg title">
          Numenera
        </h1>
        <BasicInfoSection sheet={sheet} updateSheet={setSheet} colSpan={2} />
        <StatPoolsSection sheet={sheet} updateSheet={setSheet} colSpan={2} />
        <SkillsSection sheet={sheet} updateSheet={setSheet} colSpan={2} />
        <ArmorSection sheet={sheet} updateSheet={setSheet} colSpan={2} />
        <AbilitiesSection sheet={sheet} updateSheet={setSheet} colSpan={2} />
        <EquipmentSection sheet={sheet} updateSheet={setSheet} colSpan={2} />
        <div className="relative bottom-0 right-0 w-full col-span-2 p-2 text-xs rounded-tl lg:col-span-4">
          Sword icon made by{' '}
          <a href="https://www.freepik.com" title="Freepik">
            Freepik
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
          <br />
          Shield icon made by{' '}
          <a
            href="https://www.flaticon.com/authors/good-ware"
            title="Good Ware">
            Good Ware
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
