import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import { ISheetSectionProps } from '../lib/CharacterSheet';
import Equipment, { EquipmentType } from '../lib/Equipment';
import EquipmentTypeRadioBtn from './EquipmentTypeRadioBtn';
import DetailsToggleButton from './utility/DetailsToggleButton';
import ListAddButton from './utility/ListAddButton';
import TrashButton from './utility/TrashButton';

const EquipmentSection = (props: ISheetSectionProps) => {
  const [showDetails, setDetailsVisibility] = useState<boolean>(false);
  const { sheet, updateSheet } = props;
  const sectionClasses = `col-span-${
    props.colSpan?.toString() || '1'
  } flex flex-col sheetSection`;

  const updateEquipment = (change: Object, index: number) => {
    let equipment = sheet.equipment;
    Object.assign(equipment[index], change);
    updateSheet({ ...sheet, equipment });
  };

  const deleteEquipment = (index: number) => {
    let equipment = sheet.equipment;
    equipment.splice(index, 1);
    updateSheet({ ...sheet, equipment });
  };

  const addEquipment = () => {
    let equipment = sheet.equipment;
    equipment.push(new Equipment());
    updateSheet({ ...sheet, equipment });
  };

  return (
    <div className={sectionClasses}>
      <h2>Equipment</h2>
      <div className="flex flex-col mb-2">
        {sheet.equipment.map((equipment, index) => {
          return (
            <div
              key={`equipment-${index}`}
              className="flex flex-row items-start mx-4 mb-2">
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
                      updateEquipment({ name: e.currentTarget.value }, index);
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
                  } z-0 text-gray-500 border-b border-l border-r p-2 mr-4 rounded border-gray-200 rounded-t-none shadow`}>
                  <textarea
                    className={`w-full outline-none py-1 sheetInput focus:ring-inset`}
                    rows={4}
                    placeholder="Description"
                    value={equipment.description}
                    onChange={(e) => {
                      updateEquipment(
                        { description: e.currentTarget.value },
                        index
                      );
                    }}
                  />
                </div>
              </div>
              <TrashButton onClick={() => deleteEquipment(index)} />
            </div>
          );
        })}
      </div>
      <ListAddButton label="Add Equipment" onClick={() => addEquipment()} />
    </div>
  );
};

export default EquipmentSection;
