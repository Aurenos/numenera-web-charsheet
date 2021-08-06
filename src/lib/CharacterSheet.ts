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

  constructor(
    name = '',
    type = '',
    descriptor = '',
    focus = '',
    tier = 0,
    effort = 0,
    xp = 0,
    might = new StatPool(),
    speed = new StatPool(),
    intellect = new StatPool()
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
  }
}

export default CharacterSheet;
