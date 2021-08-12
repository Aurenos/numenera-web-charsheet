import { ISheetSectionProps } from '../lib/CharacterSheet';
import Equipment, { EquipmentType } from '../lib/Equipment';
import ListAddButton from './utility/ListAddButton';
import TrashButton from './utility/TrashButton';
import { ReactComponent as SwordIcon } from '../img/sword.svg';
import { ReactComponent as ShieldIcon } from '../img/shield.svg';
import { StarIcon } from '@heroicons/react/solid';
import EquipmentTypeRadioBtn from './EquipmentTypeRadioBtn';

const EquipmentSection = (props: ISheetSectionProps) => {
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
              className="flex flex-row items-center mx-4 mb-2">
              <input
                className="flex-grow sheetInput"
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
