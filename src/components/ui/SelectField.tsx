import { SelectHTMLAttributes, forwardRef } from 'react';
import { CN } from '@/utils/className';

export type SelectOption = { label: string; value: string };

export type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  options: SelectOption[];
  containerClassName?: string;
};

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ label, options, className, containerClassName, id, ...rest }, ref) => {
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
        <div className="relative">
          <select
            ref={ref}
            id={id}
            className={CN(
              'w-full appearance-none rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 pr-10 text-sm text-white outline-none transition focus:border-[#fbce6b]/60',
              className,
            )}
            {...rest}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value} className="bg-[#0a0905] text-white">
                {option.label}
              </option>
            ))}
          </select>
          <svg
            viewBox="0 0 24 24"
            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#fbce6b]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    );
  },
);

SelectField.displayName = 'SelectField';
