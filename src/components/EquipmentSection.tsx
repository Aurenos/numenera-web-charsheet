import { useState } from 'react';
import { makeBasicTooltip } from '../helpers';
import { ISheetSectionProps } from '../lib/CharacterSheet';
import Equipment, { EquipmentType, EquipmentSize } from '../lib/Equipment';
import EquipmentField from './EquipmentField';
import EquipmentTypeRadioBtn from './EquipmentTypeRadioBtn';
import DetailsToggleButton from './utility/DetailsToggleButton';
import ListAddButton from './utility/ListAddButton';
import TrashButton from './utility/TrashButton';

const EquipmentSection = (props: ISheetSectionProps) => {
  const { sheet, updateSheet } = props;
  const sectionClasses = `col-span-${
    props.colSpan?.toString() || '1'
  } flex flex-col sheetSection`;

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
              <EquipmentField
                sheet={sheet}
                equipment={equipment}
                updateSheet={updateSheet}
                index={index}
              />
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
