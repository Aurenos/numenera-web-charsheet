import { useState, Fragment } from 'react';
import BasicInfo from './components/BasicInfo';
import CharacterSheet from './lib/CharacterSheet';
import StatPoolField from './components/StatPoolField';
import { StatPoolType } from './lib/StatPool';

const App = () => {
  const [sheet, setSheet] = useState<CharacterSheet>(new CharacterSheet());

  return (
    <Fragment>
      <div className="container grid grid-cols-4 gap-4 p-4 mx-auto bg-gray-50">
        <h1 className="col-span-4 mx-auto title">Numenera</h1>
        <BasicInfo sheet={sheet} updateSheet={setSheet} />
        <div className="grid grid-cols-3 col-span-2 grid-rows-1 gap-4 p-4 text-center border border-gray-200 rounded">
          <StatPoolField
            fieldName="Might"
            field={sheet.might}
            handleChange={(p) => setSheet({ ...sheet, might: p })}
            poolType={StatPoolType.MIGHT}
          />
          <StatPoolField
            fieldName="Speed"
            field={sheet.speed}
            handleChange={(p) => setSheet({ ...sheet, speed: p })}
            poolType={StatPoolType.SPEED}
          />
          <StatPoolField
            fieldName="Intellect"
            field={sheet.intellect}
            handleChange={(p) => setSheet({ ...sheet, intellect: p })}
            poolType={StatPoolType.INTELLECT}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default App;
