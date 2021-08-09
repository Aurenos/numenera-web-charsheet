export enum SkillLevel {
  Trained = 'Trained',
  Specialized = 'Specialized',
  Inability = 'Inability',
}

class Skill {
  name: string;
  level: SkillLevel;

  constructor(name = '', level = SkillLevel.Trained) {
    this.name = name;
    this.level = level;
  }
}

export default Skill;
