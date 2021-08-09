import { StatPoolType } from './StatPool';

class Ability {
  name: string;
  description: string;
  cost: string | null;
  pool: StatPoolType | null;

  constructor(name = '', description = '', cost = null, pool = null) {
    this.name = name;
    this.description = description;
    this.cost = cost;
    this.pool = pool;
  }
}

export default Ability;
