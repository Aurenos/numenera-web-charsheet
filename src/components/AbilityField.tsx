import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/outline';
import { ReplyIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import Ability, { AbilityType } from '../lib/Ability';
import CharacterSheet from '../lib/CharacterSheet';
import ReactTooltip from 'react-tooltip';
import { StatPoolType } from '../lib/StatPool';

interface IAbilityFieldProps {
  sheet: CharacterSheet;
  updateSheet: (s: CharacterSheet) => void;
  ability: Ability;
  index: number;
}

function getIcon(show: boolean) {
  return show ? (
    <ChevronDownIcon className="w-6 h-6" />
  ) : (
    <ChevronRightIcon className="w-6 h-6" />
  );
}

const AbilityField = (props: IAbilityFieldProps) => {
  const [showDesc, setDescVisible] = useState<boolean>(false);

  const { sheet, updateSheet, ability, index } = props;

  const updateAbility = (change: Object) => {
    let abilities = sheet.abilities;
    Object.assign(abilities[index], change);
    updateSheet({ ...sheet, abilities });
  };

  const getSummary = () => {
    let items: Array<string> = [];
    if (ability.cost && ability.pool) {
      items.push(`${ability.cost} ${ability.pool}`);
    }
    items.push(ability.type);
    return `(${items.join(', ')})`;
  };

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
        <div className="relative w-full">
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
          <p className="absolute text-gray-300 right-2 top-2">{getSummary()}</p>
        </div>
      </div>
      <div
        className={`${
          showDesc ? 'visible' : 'hidden'
        } z-0 flex flex-row text-gray-500 border-b border-l border-r p-2 rounded border-gray-200 rounded-t-none shadow`}>
        <textarea
          className={`flex-grow outline-none py-1 sheetInput focus:ring-inset`}
          rows={4}
          placeholder="Description"
          value={ability.description}
          onChange={(e) => {
            updateAbility({ description: e.currentTarget.value });
          }}
        />
        <div className="flex flex-col flex-shrink w-1/5 px-1 ml-2">
          <input
            className="h-10 my-2 text-center sheetInput"
            type="text"
            placeholder="Cost"
            maxLength={3}
            value={ability.cost || ''}
            onChange={(e) => {
              updateAbility({ cost: e.currentTarget.value });
            }}
          />
          <div className="flex flex-row items-center mb-2">
            <select
              className={`${
                ability.pool === null ? 'text-gray-300' : 'text-gray-500'
              } h-10 shadow rounded text-center p-1`}
              value={(ability.pool as string) || ''}
              onChange={(e) => {
                updateAbility({
                  pool: e.currentTarget.value || null,
                });
              }}>
              <option className="hidden" value="">
                Pool
              </option>
              {Object.keys(StatPoolType).map((pool) => (
                <option
                  className="text-gray-500"
                  key={`ability-${index}-${pool}`}
                  value={pool}>
                  {pool}
                </option>
              ))}
            </select>
            <button
              className="w-6 h-6 p-1 ml-1 border-none shadow-none sheetButton"
              onClick={(e) => {
                updateAbility({ pool: null });
              }}
              data-tip="Reset">
              <ReplyIcon className="w-4 h-4" />
              <ReactTooltip
                effect="solid"
                delayShow={500}
                className="h-10 px-2 py-2 font-sans text-base"
              />
            </button>
          </div>
          <select
            className="h-10 p-1 text-center rounded shadow"
            data-tip="Action Type"
            onChange={(e) => updateAbility({ type: e.currentTarget.value })}>
            {Object.keys(AbilityType).map((ab) => (
              <option
                className="text-gray-500"
                key={`ability-type-${index}-${ab}`}
                value={ab}>
                {ab}
              </option>
            ))}
            <ReactTooltip
              effect="solid"
              delayShow={1000}
              className="h-10 px-2 py-2 font-sans text-base"
            />
          </select>
        </div>
      </div>
    </div>
  );
};

export default AbilityField;
