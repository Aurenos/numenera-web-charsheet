import StatPoolField from './StatPoolField';
import { SheetSectionProps } from '../lib/CharacterSheet';
import { StatPoolType } from '../lib/StatPool';

const StatPools = (props: SheetSectionProps) => {
  const { sheet, updateSheet } = props;
  const sectionClasses = `col-span-${
    props.colSpan?.toString() || '1'
  } grid grid-cols-3 grid-rows-1 gap-4 text-center sheetSection`;

  return (
    <div className={sectionClasses}>
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
