import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { ReplyIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { makeBasicTooltip } from '../helpers';
import Ability, { AbilityType } from '../lib/Ability';
import CharacterSheet from '../lib/CharacterSheet';
import { StatPoolType } from '../lib/StatPool';
import DetailsToggleButton from './utility/DetailsToggleButton';

interface IAbilityFieldProps {
  sheet: CharacterSheet;
  updateSheet: (s: CharacterSheet) => void;
  ability: Ability;
  index: number;
}

const AbilityField = (props: IAbilityFieldProps) => {
  const [showDetails, setDetailsVisibility] = useState<boolean>(false);

  const { sheet, updateSheet, ability, index } = props;

  const updateAbility = (change: Object) => {
    let abilities = sheet.abilities;
    Object.assign(abilities[index], change);
    updateSheet({ ...sheet, abilities });
  };

  const getSummary = () => {
    let items: Array<string> = [];
    if (ability.cost && ability.pool) {
      //TODO: Determine if I can safely restrict this to Action type abilities as well
      items.push(`${ability.cost} ${ability.pool}`);
    }
    items.push(ability.type);
    return `(${items.join(', ')})`;
  };

  return (
    <div className="flex flex-col flex-grow mr-4">
      <div className="z-10 flex flex-row">
        <DetailsToggleButton
          showDetails={showDetails}
          toggleClick={setDetailsVisibility}
        />

        <div className="relative w-full">
          <input
            className="w-full h-10 rounded-tl-none rounded-bl-none sheetInput shadow-open-l"
            value={ability.name}
            maxLength={27}
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
          showDetails ? 'visible' : 'hidden'
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
          <select
            className="h-10 p-1 mb-2 text-center rounded shadow"
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
            {makeBasicTooltip()}
          </select>
          <input
            className="h-10 mb-2 text-center sheetInput"
            type="text"
            placeholder="Cost"
            maxLength={3}
            value={ability.cost || ''}
            onChange={(e) => {
              updateAbility({ cost: e.currentTarget.value });
            }}
          />
          <div className="flex flex-row items-center">
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
              {makeBasicTooltip()}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbilityField;
