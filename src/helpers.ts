export function clamp(n: number, min: number, max: number): number {
  return Math.min(Math.max(n, min), max);
}

export function str2enum<E>(enu: any, str: string): E {
  return Object.keys(enu)[(Object.values(enu) as string[]).indexOf(str)] as any;
}
