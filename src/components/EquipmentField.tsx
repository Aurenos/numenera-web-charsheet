import { useState } from 'react';
import { makeBasicTooltip } from '../helpers';
import CharacterSheet from '../lib/CharacterSheet';
import Equipment, { EquipmentSize, EquipmentType } from '../lib/Equipment';
import EquipmentTypeRadioBtn from './EquipmentTypeRadioBtn';
import DetailsToggleButton from './utility/DetailsToggleButton';

interface IEquipmentFieldProps {
  sheet: CharacterSheet;
  updateSheet: (s: CharacterSheet) => void;
  equipment: Equipment;
  index: number;
}

const EquipmentField = (props: IEquipmentFieldProps) => {
  const [showDetails, setDetailsVisibility] = useState<boolean>(false);

  const { sheet, updateSheet, equipment, index } = props;

  const updateEquipment = (change: Object) => {
    let equipment = sheet.equipment;
    Object.assign(equipment[index], change);
    updateSheet({ ...sheet, equipment });
  };

  return (
    <div className="flex flex-col flex-grow">
      <div className="flex flex-row">
        <DetailsToggleButton
          showDetails={showDetails}
          toggleClick={setDetailsVisibility}
        />
        <input
          className="w-full h-10 shadow-open-l sheetInput"
          placeholder="Equipment Name"
          value={equipment.name}
          onChange={(e) => {
            updateEquipment({ name: e.currentTarget.value });
          }}
        />
        <div className="flex flex-row mx-4">
          <EquipmentTypeRadioBtn
            index={index}
            equipment={equipment}
            type={EquipmentType.Other}
            updateEquipment={updateEquipment}
          />
          <EquipmentTypeRadioBtn
            index={index}
            equipment={equipment}
            type={EquipmentType.Weapon}
            updateEquipment={updateEquipment}
          />
          <EquipmentTypeRadioBtn
            index={index}
            equipment={equipment}
            type={EquipmentType.Armor}
            updateEquipment={updateEquipment}
          />
        </div>
      </div>
      <div
        className={`${
          showDetails ? 'visible' : 'hidden'
        } z-0 text-gray-500 border-b border-l border-r p-2 mr-4 rounded border-gray-200 rounded-t-none shadow flex flex-row items-start`}>
        <textarea
          className={`w-full outline-none py-1 sheetInput focus:ring-inset`}
          rows={4}
          placeholder="Description"
          value={equipment.description}
          onChange={(e) => {
            updateEquipment({ description: e.currentTarget.value });
          }}
        />
        {equipment.type === EquipmentType.Armor ||
        equipment.type === EquipmentType.Weapon ? (
          <div>
            <select
              className="h-10 p-1 ml-2 text-center rounded shadow cursor-pointer"
              data-tip="Size Category"
              value={equipment.size}
              onChange={(e) =>
                updateEquipment({ size: e.currentTarget.value })
              }>
              {Object.keys(EquipmentSize).map((w) => {
                return (
                  <option
                    key={`equipment-weight-${index}-${w}`}
                    className="text-gray-500"
                    value={w}>
                    {w}
                  </option>
                );
              })}
            </select>
            {makeBasicTooltip()}
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default EquipmentField;
