export enum SkillLevel {
  TRAINED,
  SPECIALIZED,
  INABILITY,
}

class Skill {
  name: string;
  level: SkillLevel;

  constructor(name = '', level = SkillLevel.TRAINED) {
    this.name = name;
    this.level = level;
  }
}

export default Skill;
