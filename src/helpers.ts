import React from 'react';
import ReactTooltip from 'react-tooltip';

export function clamp(n: number, min: number, max: number): number {
  return Math.min(Math.max(n, min), max);
}

export function str2enum<E>(enu: any, str: string): E {
  return Object.keys(enu)[(Object.values(enu) as string[]).indexOf(str)] as any;
}

export function makeBasicTooltip(delayShow: number = 1000): any {
  return React.createElement(ReactTooltip, {
    className: 'h-10 px-2 py-2 font-sans text-base',
    delayShow: delayShow,
    effect: 'solid',
  });
}
