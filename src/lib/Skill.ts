export enum SkillLevel {
  Trained = 'Trained',
  Specialized = 'Specialized',
  Inability = 'Inability',
}

export default class Skill {
  name: string;
  level: SkillLevel;

  constructor(name = '', level = SkillLevel.Trained) {
    this.name = name;
    this.level = level;
  }
}
