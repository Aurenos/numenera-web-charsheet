import { ISheetSectionProps } from '../lib/CharacterSheet';
import Equipment from '../lib/Equipment';
import EquipmentField from './EquipmentField';
import ListAddButton from './utility/ListAddButton';
import TrashButton from './utility/TrashButton';

const EquipmentSection = (props: ISheetSectionProps) => {
  const { sheet, updateSheet } = props;
  const sectionClasses = `col-span-${
    props.colSpan?.toString() || '1'
  } flex flex-col sheetSection`;

  const deleteEquipment = (id: string) => {
    let equipment = sheet.equipment.filter((eq) => eq.id !== id);
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
        {sheet.equipment.map((equipment) => {
          return (
            <div
              key={equipment.id}
              className="flex flex-row items-start mx-4 mb-2">
              <EquipmentField
                sheet={sheet}
                equipment={equipment}
                updateSheet={updateSheet}
              />
              <TrashButton onClick={() => deleteEquipment(equipment.id)} />
            </div>
          );
        })}
      </div>
      <ListAddButton label="Add Equipment" onClick={() => addEquipment()} />
    </div>
  );
};

export default EquipmentSection;
