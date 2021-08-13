import { useEffect } from 'react';
import { ArmorBonus } from '../lib/Armor';
import { ISheetSectionProps } from '../lib/CharacterSheet';
import { EquipmentType } from '../lib/Equipment';

const ArmorSection = (props: ISheetSectionProps) => {
  const { sheet, updateSheet } = props;
  const sectionClasses = `col-span-${
    props.colSpan?.toString() || '1'
  } flex flex-col sheetSection`;

  useEffect(() => {
    if (!getEquippedArmor()) {
      updateSheet({ ...sheet, equippedArmorId: null });
    }
  }, [sheet.equipment]);

  const getEquippedArmor = () => {
    let armorId = sheet.equippedArmorId;
    return armorId
      ? sheet.equipment.filter(
          (a) => a.id === armorId && a.type === EquipmentType.Armor
        )[0]
      : null;
  };

  const calculateArmorTotal = () => {
    let totalArmor = 0;
    let equippedArmor = getEquippedArmor();
    totalArmor += equippedArmor ? equippedArmor.armorValue : 0;

    totalArmor += sheet.armorBonuses.reduce(
      (sum, bonus) => sum + bonus.value,
      0
    );
    return totalArmor;
  };

  const getArmors = () => {
    return sheet.equipment.filter((eq) => eq.type === EquipmentType.Armor);
  };

  return (
    <div className={sectionClasses}>
      <h2 className="mx-auto my-3 text-xl font-semibold">Armor</h2>
      <span className="px-6 py-4 mx-auto text-3xl bg-white border-2 border-black rounded-full">
        {calculateArmorTotal()}
      </span>
      <div className="flex flex-row mt-3">
        <select
          className={`${
            sheet.equippedArmorId ? 'text-gray-500' : 'text-gray-300'
          } w-full h-10 p-2 text-lg border rounded shadow`}
          onChange={(e) => {
            let arm = sheet.equipment.filter(
              (a) => a.id === e.currentTarget.value
            )[0];
            updateSheet({ ...sheet, equippedArmorId: arm?.id || null });
          }}
          value={sheet.equippedArmorId || ''}>
          <option className="hidden" value="">
            Armor
          </option>
          {getArmors().map((a) => (
            <option
              key={`armor-${a.id}`}
              className="text-gray-500"
              value={a.id}>
              {a.name ? a.name : '(Unnamed Armor)'}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ArmorSection;
