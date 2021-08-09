import { useState, useEffect, Fragment } from 'react';
import BasicInfo from './components/BasicInfo';
import StatPools from './components/StatPools';
import CharacterSheet from './lib/CharacterSheet';
import Skills from './components/Skills';

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
      <div className="container grid grid-cols-4 gap-4 p-4 mx-auto mt-6 bg-gray-50 rounded-xl">
        <h1 className="col-span-4 mx-auto filter drop-shadow-lg title">
          Numenera
        </h1>
        <BasicInfo sheet={sheet} updateSheet={setSheet} colSpan={2} />
        <StatPools sheet={sheet} updateSheet={setSheet} colSpan={2} />
        <Skills sheet={sheet} updateSheet={setSheet} colSpan={2} />
      </div>
    </Fragment>
  );
};

export default App;
