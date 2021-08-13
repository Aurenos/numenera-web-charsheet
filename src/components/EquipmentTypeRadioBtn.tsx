import { makeBasicTooltip, str2enum } from '../helpers';
import Equipment, { EquipmentType } from '../lib/Equipment';
import { ReactComponent as SwordIcon } from '../img/sword.svg';
import { ReactComponent as ShieldIcon } from '../img/shield.svg';
import { StarIcon } from '@heroicons/react/solid';

interface IEquipmentTypeRadioBtnProps {
  equipment: Equipment;
  type: EquipmentType;
  updateEquipment: (a: Object) => void;
}

const EquipmentTypeRadioBtn = (props: IEquipmentTypeRadioBtnProps) => {
  const checked = props.equipment.type === props.type;
  let labelSpanClasses = 'p-1';
  if (checked) {
    labelSpanClasses += ' bg-yellow-500 fill-current text-white';
  }

  const getIcon = () => {
    switch (props.type) {
      case EquipmentType.Armor:
        return <ShieldIcon className="w-8 h-8" />;
      case EquipmentType.Other:
        return <StarIcon className="w-8 h-8" />;
      case EquipmentType.Weapon:
        return <SwordIcon className="w-8 h-8" />;
    }
  };

  return (
    <label
      className="flex items-center border border-gray-600 cursor-pointer hover:ring-inset hover:ring"
      data-tip={props.type}>
      <span className={labelSpanClasses}>{getIcon()}</span>
      {makeBasicTooltip(500)}
      <input
        className="hidden"
        type="radio"
        name={`equipment-${props.equipment.id}`}
        value={props.type}
        checked={checked}
        onChange={(e) =>
          props.updateEquipment({
            type: str2enum(EquipmentType, e.currentTarget.value),
          })
        }
      />
    </label>
  );
};

export default EquipmentTypeRadioBtn;
