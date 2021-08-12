export enum EquipmentType {
  Armor = 'Armor',
  Weapon = 'Weapon',
  Other = 'Other',
}

export default class Equipment {
  name: string;
  description: string;
  type: EquipmentType;

  constructor(name = '', description = '', type = EquipmentType.Other) {
    this.name = name;
    this.description = description;
    this.type = type;
  }
}
