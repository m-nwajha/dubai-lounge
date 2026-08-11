'use client';

import { ALIGN_ITEM, GAP, TEXT_ALIGN } from './Grid';
import { CN } from '@/utils/className';
import { forwardRef, CSSProperties, ReactNode } from 'react';


import { AlignSide, Cols } from './Grid';

export type BoxProps = {
    children?: ReactNode;
    display?: 'flex' | 'block';
    direction?: 'row' | 'col' | 'rowReverse' | 'colReverse';
    justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'baseline';
    alignItems?: AlignSide;
    textAlign?: AlignSide;
    gap?: Cols;
    className?: string;
    style?: CSSProperties;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClick?: void | ((e: any) => void);
};


export const DISPLAY = {
    flex: 'flex',
    block: 'block'
};

export const DIRECTION = {
    row: 'flex-row',
    col: 'flex-col',
    rowReverse: 'flex-row-reverse',
    colReverse: 'flex-col-reverse'
};

export const JUSTIFY_CONTENT = {
    start: 'justify-start',
    end: 'justify-end',
    center: 'justify-center',
    between: 'justify-between',
    around: 'justify-around',
    baseline: 'justify-baseline'
};
export const Box = forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      children,
      display = 'block',
      direction = 'row',
      textAlign = 'start',
      justifyContent = 'start',
      alignItems = 'start',
      gap = 1,
      className,
      style,
      onClick = () => {},
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        onClick={onClick}
        style={style}
        className={CN(
          DISPLAY[display],
          display === 'flex' ? DIRECTION[direction] : '',
          display === 'block' ? TEXT_ALIGN[textAlign] : '',
          display === 'flex' ? JUSTIFY_CONTENT[justifyContent] : '',
          display === 'flex' ? ALIGN_ITEM[alignItems] : '',
          display === 'flex' ? GAP[gap] : '',
          className,
        )}
      >
        {children}
      </div>
    );
  },
);

Box.displayName = 'Box';
