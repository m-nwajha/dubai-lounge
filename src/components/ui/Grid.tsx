'use client';
import { CN } from '@/utils/className';
import { FC, ReactNode } from 'react';

export type AlignSide = 'center' | 'start' | 'end';
export type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type GridProps = {
    children: ReactNode;
    sm?: Cols;
    md?: Cols;
    lg?: Cols;
    gap?: Cols;
    textAlign?: AlignSide;
    alignItem?: AlignSide;
    className?: string;
};

export const SM_SIZE = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
    7: 'grid-cols-7',
    8: 'grid-cols-8',
    9: 'grid-cols-9',
    10: 'grid-cols-10',
    11: 'grid-cols-11',
    12: 'grid-cols-12',
};

export const MD_SIZE = {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
    5: 'md:grid-cols-5',
    6: 'md:grid-cols-6',
    7: 'md:grid-cols-7',
    8: 'md:grid-cols-8',
    9: 'md:grid-cols-9',
    10: 'md:grid-cols-10',
    11: 'md:grid-cols-11',
    12: 'md:grid-cols-12',
};

export const LG_SIZE = {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
    5: 'lg:grid-cols-5',
    6: 'lg:grid-cols-6',
    7: 'lg:grid-cols-7',
    8: 'lg:grid-cols-8',
    9: 'lg:grid-cols-9',
    10: 'lg:grid-cols-10',
    11: 'lg:grid-cols-11',
    12: 'lg:grid-cols-12',
};


export const GAP = {
    1: 'gap-1',
    2: 'gap-2',
    3: 'gap-3',
    4: 'gap-4',
    5: 'gap-5',
    6: 'gap-6',
    7: 'gap-7',
    8: 'gap-8',
    9: 'gap-9',
    10: 'gap-10',
    11: 'gap-11',
    12: 'gap-12',
};


export const TEXT_ALIGN = {
    start: 'text-start',
    end: 'text-end',
    center: 'text-center'
};

export const ALIGN_ITEM = {
    start: 'items-start',
    end: 'items-end',
    center: 'items-center'
};
export const Grid: FC<GridProps> = ({
  children,
  sm = 1,
  md = 1,
  lg = 1,
  gap = 1,
  textAlign = 'start',
  alignItem = 'start',
  className,
}) => {
  return (
    <div
      className={CN(
        'grid',
        SM_SIZE[sm],
        MD_SIZE[md],
        LG_SIZE[lg],
        GAP[gap],
        TEXT_ALIGN[textAlign],
        ALIGN_ITEM[alignItem],
        className
      )}>
      {children}
    </div>
  );
};
