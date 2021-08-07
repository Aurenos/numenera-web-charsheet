import StatPoolField from './StatPoolField';
import CharacterSheet from '../lib/CharacterSheet';
import { StatPoolType } from '../lib/StatPool';

interface IStatPoolProps {
  sheet: CharacterSheet;
  updateSheet: (s: CharacterSheet) => void;
}

const StatPools = (props: IStatPoolProps) => {
  const { sheet, updateSheet } = props;

  return (
    <div className="grid grid-cols-3 col-span-2 grid-rows-1 gap-4 p-4 text-center border border-gray-200 rounded">
      <StatPoolField
        fieldName="Might"
        field={sheet.might}
        handleChange={(p) => updateSheet({ ...sheet, might: p })}
        poolType={StatPoolType.MIGHT}
      />
      <StatPoolField
        fieldName="Speed"
        field={sheet.speed}
        handleChange={(p) => updateSheet({ ...sheet, speed: p })}
        poolType={StatPoolType.SPEED}
      />
      <StatPoolField
        fieldName="Intellect"
        field={sheet.intellect}
        handleChange={(p) => updateSheet({ ...sheet, intellect: p })}
        poolType={StatPoolType.INTELLECT}
      />
    </div>
  );
};

export default StatPools;
