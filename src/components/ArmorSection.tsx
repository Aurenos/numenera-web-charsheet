import { useState, useEffect } from 'react';
import { ArmorBonus } from '../lib/Armor';
import { ISheetSectionProps } from '../lib/CharacterSheet';
import Equipment, { EquipmentType } from '../lib/Equipment';

const ArmorSection = (props: ISheetSectionProps) => {
  const { sheet, updateSheet } = props;
  const [showBonuses, setBonusesDisplay] = useState<boolean>(false);
  const [armorId, setArmorId] = useState<string | null>(null);
  const sectionClasses = `col-span-${
    props.colSpan?.toString() || '1'
  } flex flex-col sheetSection`;

  useEffect(() => {
    if (armorId) {
      let arm = sheet.equipment.filter((a) => a.id === armorId);
      if (arm.length < 1) {
        setArmorId(null);
      }
    }
  });

  const getEquippedArmor = () => {
    return armorId ? sheet.equipment.filter((a) => a.id === armorId)[0] : null;
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
            armorId === null ? 'text-gray-300' : 'text-gray-500'
          } w-full h-10 p-2 text-lg border rounded shadow`}
          onChange={(e) => {
            let arm = sheet.equipment.filter(
              (a) => a.id === e.currentTarget.value
            )[0];
            setArmorId(arm?.id || null);
          }}
          value={armorId || ''}>
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
