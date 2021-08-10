import { PlusIcon, TrashIcon } from '@heroicons/react/solid';
import Ability from '../lib/Ability';
import { SheetSectionProps } from '../lib/CharacterSheet';
import AbilityField from './AbilityField';

const AbilitiesSection = (props: SheetSectionProps) => {
  const { sheet, updateSheet } = props;
  const sectionClasses = `col-span-${
    props.colSpan?.toString() || '1'
  } flex flex-col sheetSection`;

  return (
    <div className={sectionClasses}>
      <h2 className="mx-auto my-3 text-xl font-semibold">Abilities</h2>
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
              <button
                className="h-10 p-2 text-gray-500 focus:text-white focus:bg-gray-400 sheetButton "
                onClick={(e) => {
                  let abilities = sheet.abilities;
                  abilities.splice(index, 1);
                  updateSheet({ ...sheet, abilities });
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
          updateSheet({ ...sheet, abilities });
          e.currentTarget.blur();
        }}>
        <PlusIcon className="w-6 h-6 mr-2 text-green-500" />
        <span className="font-semibold ">Add Ability</span>
      </button>
    </div>
  );
};

export default AbilitiesSection;
