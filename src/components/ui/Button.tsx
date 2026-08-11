import Link from 'next/link';
import { CN } from '@/utils/className';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'solid' | 'outline';

type BaseProps = {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
};

type LinkButtonProps = BaseProps & {
  as?: 'link';
  href: string;
  target?: string;
  rel?: string;
};

type NativeButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
    as: 'button';
  };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  solid:
    'bg-gradient-to-r from-[#b9852f] via-[#f7c463] to-[#b9852f] text-black hover:brightness-110',
  outline: 'border border-[#fbce6b] text-[#fbce6b] hover:bg-[#fbce6b]/10',
};

const BASE_CLASSES =
  'inline-flex items-center justify-center rounded-sm px-6 py-3.5 text-sm font-semibold uppercase tracking-wide transition';

export const Button = (props: ButtonProps) => {
  const classes = CN(BASE_CLASSES, VARIANT_CLASSES[props.variant ?? 'solid'], props.className);

  if (props.as === 'button') {
    const { as: _as, variant: _variant, className: _className, children, ...rest } = props;
    return (
      <button className={classes} {...rest}>
        {children}
      </button>
    );
  }

  const { href, target, rel, children } = props;
  return (
    <Link href={href} target={target} rel={rel} className={classes}>
      {children}
    </Link>
  );
};
