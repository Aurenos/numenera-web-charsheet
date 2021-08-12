// import { useState } from 'react';
// import Armor, { ArmorBonus } from '../lib/Armor';
// import { SheetSectionProps } from '../lib/CharacterSheet';

// const ArmorSection = (props: SheetSectionProps) => {
//   const { sheet, updateSheet } = props;
//   const [showBonuses, setBonusesDisplay] = useState<boolean>(false);
//   const sectionClasses = `col-span-${
//     props.colSpan?.toString() || '1'
//   } flex flex-col sheetSection`;

//   const calculateArmorTotal = () => {
//     let totalArmor = 0;
//     if (sheet.armor) {
//       totalArmor += sheet.armor.value;
//     }

//     totalArmor += sheet.armorBonuses.reduce(
//       (sum, bonus) => sum + bonus.value,
//       0
//     );
//     return totalArmor;
//   };

//   return (
//     <div className={sectionClasses}>
//       <h2 className="mx-auto my-3 text-xl font-semibold">Armor</h2>
//       <span className="px-6 py-4 mx-auto text-3xl bg-white border-2 border-black rounded-full">
//         {calculateArmorTotal()}
//       </span>
//       <div className="flex flex-row mt-3">
//         <input className="w-full sheetInput" placeholder="Armor Name" />
//         <select>
//           {Object.keys.}
//         </select>
//       </div>
//     </div>
//   );
// };

// export default ArmorSection;
export {};
