class StatPool {
  current: number;
  max: number;
  edge: number;

  constructor(current = 0, max = 1, edge = 0) {
    this.current = current;
    this.max = max;
    this.edge = edge;
  }
}

export enum StatPoolType {
  Might = 'Might',
  Speed = 'Speed',
  Intellect = 'Intellect',
}

export default StatPool;
