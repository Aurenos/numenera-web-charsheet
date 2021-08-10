import Ability from './Ability';
import Skill from './Skill';
import StatPool from './StatPool';

class CharacterSheet {
  name: string;
  type: string;
  descriptor: string;
  focus: string;
  tier: number;
  effort: number;
  xp: number;
  might: StatPool;
  speed: StatPool;
  intellect: StatPool;
  skills: Array<Skill>;
  abilities: Array<Ability>;
  shins: number; // TODO
  armor: number; // TODO
  equipment: Array<undefined>; // TODO
  cyphers: Array<undefined>; // TODO
  cypherLimit: number; // TODO

  // TODO: Damage Track
  // TODO: Recovery Rolls
  // TODO: Advancement

  constructor(
    name = '',
    type = '',
    descriptor = '',
    focus = '',
    tier = 1,
    effort = 1,
    xp = 0,
    might = new StatPool(),
    speed = new StatPool(),
    intellect = new StatPool(),
    skills = [],
    abilities = [],
    shins = 0,
    armor = 0,
    equipment = [],
    cyphers = [],
    cypherLimit = 1
  ) {
    this.name = name;
    this.type = type;
    this.descriptor = descriptor;
    this.focus = focus;
    this.tier = tier;
    this.effort = effort;
    this.xp = xp;
    this.might = might;
    this.speed = speed;
    this.intellect = intellect;
    this.skills = skills;
    this.abilities = abilities;
    this.shins = shins;
    this.armor = armor;
    this.equipment = equipment;
    this.cyphers = cyphers;
    this.cypherLimit = cypherLimit;
  }
}

export interface SheetSectionProps {
  sheet: CharacterSheet;
  colSpan?: number;
  updateSheet: (s: CharacterSheet) => void;
}

export default CharacterSheet;
