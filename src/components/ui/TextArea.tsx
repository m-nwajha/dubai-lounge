import { TextareaHTMLAttributes, forwardRef } from 'react';
import { CN } from '@/utils/className';

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  containerClassName?: string;
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, className, containerClassName, id, rows = 5, ...rest }, ref) => {
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
        <textarea
          ref={ref}
          id={id}
          rows={rows}
          className={CN(
            'resize-none rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#fbce6b]/60',
            className,
          )}
          {...rest}
        />
      </div>
    );
  },
);

TextArea.displayName = 'TextArea';
