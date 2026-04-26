import * as React from 'react';

import { cn } from '@/lib/utils';

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-12 w-full rounded-lg border text-light-primary dark:text-dark-primary border-light-accent dark:border-dark-accent bg-light-inputBackground dark:bg-dark-inputBackground px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-light-text/60 dark:placeholder:text-dark-text/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-secondary/50 dark:focus-visible:ring-dark-secondary/60 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
