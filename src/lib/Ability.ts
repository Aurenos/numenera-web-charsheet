import { StatPoolType } from './StatPool';

export enum AbilityType {
  Action = 'Action',
  Enabler = 'Enabler',
}

class Ability {
  name: string;
  description: string;
  type: AbilityType;
  cost: string | null;
  pool: StatPoolType | null;

  constructor(
    name = '',
    description = '',
    type = AbilityType.Action,
    cost = null,
    pool = null
  ) {
    this.name = name;
    this.description = description;
    this.cost = cost;
    this.pool = pool;
    this.type = type;
  }
}

export default Ability;
