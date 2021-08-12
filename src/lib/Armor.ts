export enum ArmorType {
  Light = 'Light',
  Medium = 'Medium',
  Heavy = 'Heavy',
}

export class ArmorBonus {
  value: number;
  source: string;

  constructor(value = 0, source = '') {
    this.value = value;
    this.source = source;
  }
}

// export default class Armor {
//   name: string;
//   description: string;
//   type: ArmorType;

//   constructor(name = '', description = '', type = ArmorType.Light) {
//     this.name = name;
//     this.description = description;
//     this.type = type;
//   }

//   get value(): number {
//     switch (this.type) {
//       case ArmorType.Light:
//         return 1;
//       case ArmorType.Medium:
//         return 2;
//       case ArmorType.Heavy:
//         return 3;
//       default:
//         throw Error('wut?');
//     }
//   }
// }
