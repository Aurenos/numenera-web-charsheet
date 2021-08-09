export function clamp(n: number, min: number, max: number): number {
  return Math.min(Math.max(n, min), max);
}

export function keygen(prefix: string) {
  return `${prefix}_${new Date().getTime()}`;
}
