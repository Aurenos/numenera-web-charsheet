import Ability from '../lib/Ability';
import { ISheetSectionProps } from '../lib/CharacterSheet';
import AbilityField from './AbilityField';
import ListAddButton from './utility/ListAddButton';
import TrashButton from './utility/TrashButton';

const AbilitiesSection = (props: ISheetSectionProps) => {
  const { sheet, updateSheet } = props;
  const sectionClasses = `col-span-${
    props.colSpan?.toString() || '1'
  } flex flex-col sheetSection`;

  const deleteAbility = (index: number) => {
    let abilities = sheet.abilities;
    abilities.splice(index, 1);
    updateSheet({ ...sheet, abilities });
  };

  const addAbility = () => {
    let abilities = sheet.abilities;
    abilities.push(new Ability());
    updateSheet({ ...sheet, abilities });
  };

  return (
    <div className={sectionClasses}>
      <h2>Abilities</h2>
      <div className="flex flex-col mb-2">
        {sheet.abilities.map((ability, index) => {
          return (
            <div
              key={`ability-${index}`}
              className="flex flex-row items-start mx-4 mb-2">
              <AbilityField
                sheet={sheet}
                updateSheet={updateSheet}
                index={index}
                ability={ability}
              />
              <TrashButton onClick={() => deleteAbility(index)} />
            </div>
          );
        })}
      </div>
      <ListAddButton label="Add Ability" onClick={() => addAbility()} />
    </div>
  );
};

export default AbilitiesSection;
