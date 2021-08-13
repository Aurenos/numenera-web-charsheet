import { useState, useEffect } from 'react';
import { ArmorBonus } from '../lib/Armor';
import { ISheetSectionProps } from '../lib/CharacterSheet';
import Equipment, { EquipmentType } from '../lib/Equipment';

const ArmorSection = (props: ISheetSectionProps) => {
  const { sheet, updateSheet } = props;
  const [showBonuses, setBonusesDisplay] = useState<boolean>(false);
  const [armor, setArmor] = useState<Equipment | null>(null);
  const sectionClasses = `col-span-${
    props.colSpan?.toString() || '1'
  } flex flex-col sheetSection`;

  useEffect(() => {
    if (armor) {
      let arm = sheet.equipment.filter((a) => a.name === armor.name);
      if (arm.length < 1) {
        setArmor(null);
      }
    }
  });

  const calculateArmorTotal = () => {
    let totalArmor = 0;
    if (armor) {
      totalArmor += armor.armorValue;
    }

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
            armor === null ? 'text-gray-300' : 'text-gray-500'
          } w-full h-10 p-2 text-lg border rounded shadow`}
          onChange={(e) => {
            let arm = sheet.equipment.filter(
              (a) => a.name === e.currentTarget.value
            )[0];
            setArmor(arm);
          }}
          value={armor === null ? '' : armor.name}>
          <option className="hidden" value="">
            Armor
          </option>
          {getArmors().map((a, i) => (
            <option key={`armor-${i}`} className="text-gray-500" value={a.name}>
              {a.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ArmorSection;
