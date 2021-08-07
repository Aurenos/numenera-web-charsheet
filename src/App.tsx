import { useState, useEffect, Fragment } from 'react';
import BasicInfo from './components/BasicInfo';
import StatPools from './components/StatPools';
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
    window.localStorage.setItem('characterSheet', JSON.stringify(sheet));
  });

  return (
    <Fragment>
      <div className="container grid grid-cols-4 gap-4 p-4 mx-auto mt-6 rounded-xl bg-gray-50">
        <h1 className="col-span-4 mx-auto title">Numenera</h1>
        <BasicInfo sheet={sheet} updateSheet={setSheet} />
        <StatPools sheet={sheet} updateSheet={setSheet} />
      </div>
    </Fragment>
  );
};

export default App;
