import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-light-secondary text-white dark:text-dark-background dark:bg-dark-secondary hover:brightness-110 shadow-[0_12px_26px_-16px_rgba(29,78,216,0.8)]',
        destructive: 'bg-red-600 text-white shadow-sm hover:bg-red-600/90',
        outline:
          'bg-transparent border border-light-accent text-light-primary dark:border-dark-accent dark:text-dark-primary hover:bg-light-surface dark:hover:bg-dark-surface',
        ghost:
          'text-light-primary dark:text-dark-primary hover:bg-light-surface dark:hover:bg-dark-surface',
        link: 'font-semibold text-light-secondary dark:text-dark-secondary hover:text-light-primary dark:hover:text-dark-primary px-3',
      },
      size: {
        default: 'h-12 px-5 py-2 text-base min-w-40',
        md: 'h-9 px-4 py-2 text-sm',
        sm: 'h-8 px-3 text-sm',
        lg: 'h-10 px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<VariantProps<typeof buttonVariants>, 'disabled'> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, disabled, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        disabled={disabled}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
