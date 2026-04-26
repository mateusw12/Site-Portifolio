import * as React from 'react';

import { cn } from '@/lib/utils';

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<'textarea'>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'flex min-h-[60px] w-full rounded-lg border text-light-primary dark:text-dark-primary border-light-accent dark:border-dark-accent bg-light-inputBackground dark:bg-dark-inputBackground px-3 py-2 text-base shadow-sm placeholder:text-light-text/60 dark:placeholder:text-dark-text/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-secondary/50 dark:focus-visible:ring-dark-secondary/60 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = 'Textarea';

export { Textarea };
