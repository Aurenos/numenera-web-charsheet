import { FolderIcon, FolderOpenIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import Ability from '../lib/Ability';
import CharacterSheet from '../lib/CharacterSheet';
import ReactTooltip from 'react-tooltip';

interface IAbilityFieldProps {
  sheet: CharacterSheet;
  updateSheet: (s: CharacterSheet) => void;
  ability: Ability;
  index: number;
}

function getIcon(show: boolean) {
  return show ? (
    <FolderOpenIcon className="w-6 h-6" />
  ) : (
    <FolderIcon className="w-6 h-6" />
  );
}

const AbilityField = (props: IAbilityFieldProps) => {
  const [showDesc, setDescVisible] = useState<boolean>(false);

  const { sheet, updateSheet, ability, index } = props;

  return (
    <div className="flex flex-col flex-grow mr-4">
      <div className="z-10 flex flex-row">
        <button
          className={`h-10 p-2 rounded-tr-none rounded-br-none border-r-0 sheetButton shadow-open-r ${
            showDesc
              ? 'text-white bg-gray-400 focus:text-gray-500 focus:bg-gray-100 hover:bg-gray-400'
              : 'text-gray-500 focus:text-white focus:bg-gray-400 hover:bg-gray-100'
          }`}
          onClick={(e) => {
            setDescVisible(!showDesc);
            e.currentTarget.blur();
          }}
          data-tip={showDesc ? 'Hide Details' : 'Show Details'}>
          {getIcon(showDesc)}
          <ReactTooltip
            effect="solid"
            delayShow={500}
            className="h-10 px-2 py-2 font-sans text-base"
          />
        </button>
        <input
          className="w-full h-10 rounded-tl-none rounded-bl-none sheetInput shadow-open-l"
          value={ability.name}
          placeholder="Ability Name"
          onChange={(e) => {
            let abilities = sheet.abilities;
            abilities[index] = {
              ...ability,
              name: e.currentTarget.value,
            };
            updateSheet({ ...sheet, abilities });
          }}
        />
      </div>
      <textarea
        className={`z-0 border-t text-gray-500 border-gray-200 rounded-t-none outline-none py-1 sheetInput focus:ring-inset ${
          showDesc ? 'visible' : 'hidden'
        }`}
        rows={4}
        placeholder="Description"
        value={ability.description}
        onChange={(e) => {
          let abilities = sheet.abilities;
          abilities[index] = {
            ...ability,
            description: e.currentTarget.value,
          };
          updateSheet({ ...sheet, abilities });
        }}
      />
    </div>
  );
};

export default AbilityField;
