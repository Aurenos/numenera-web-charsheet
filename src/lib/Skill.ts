class Skill {
  name: string;
  level: SkillLevel;

  constructor(name = '', level = SkillLevel.TRAINED) {
    this.name = name;
    this.level = level;
  }
}

export enum SkillLevel {
  TRAINED,
  SPECIALIZED,
}

export default Skill;
