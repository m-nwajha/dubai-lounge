import { InputHTMLAttributes, forwardRef } from 'react';
import { CN } from '@/utils/className';

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  containerClassName?: string;
};

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, className, containerClassName, id, ...rest }, ref) => {
    return (
      <div className={CN('flex flex-col gap-2', containerClassName)}>
        {label && (
          <label
            htmlFor={id}
            className="text-xs font-semibold uppercase tracking-wide text-white/70"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={CN(
            'rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#fbce6b]/60',
            className,
          )}
          {...rest}
        />
      </div>
    );
  },
);

TextField.displayName = 'TextField';
