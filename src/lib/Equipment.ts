export enum EquipmentType {
  Armor = 'Armor',
  Weapon = 'Weapon',
  Other = 'Other',
}

export enum EquipmentSize {
  Light = 'Light',
  Medium = 'Medium',
  Heavy = 'Heavy',
}

export default class Equipment {
  name: string;
  description: string;
  type: EquipmentType;
  size: EquipmentSize;

  constructor(
    name = '',
    description = '',
    type = EquipmentType.Other,
    size = EquipmentSize.Light
  ) {
    this.name = name;
    this.description = description;
    this.type = type;
    this.size = size;
  }

  get damageValue() {
    if (this.type === EquipmentType.Weapon && this.size) {
      switch (this.size) {
        case EquipmentSize.Light:
          return 2;
        case EquipmentSize.Medium:
          return 4;
        case EquipmentSize.Heavy:
          return 6;
        default:
          return -1;
      }
    } else {
      return -1;
    }
  }

  get armorValue() {
    if (this.type === EquipmentType.Armor && this.size) {
      switch (this.size) {
        case EquipmentSize.Light:
          return 1;
        case EquipmentSize.Medium:
          return 2;
        case EquipmentSize.Heavy:
          return 3;
        default:
          return -1;
      }
    } else {
      return -1;
    }
  }
}
