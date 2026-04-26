import { ReactNode } from 'react';

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
  variant?: 'primary' | 'secondary';
}

export function SocialLink({
  href,
  icon,
  label,
  variant = 'primary',
}: SocialLinkProps) {
  const baseStyles =
    'rounded-full text-2xl p-2.5 border shadow-md transition-all duration-300';

  const variantStyles = {
    primary:
      'text-light-secondary border-light-accent bg-light-surface/80 hover:text-white hover:bg-light-secondary hover:border-light-secondary dark:bg-dark-surface dark:text-dark-secondary dark:border-dark-accent dark:hover:text-dark-background dark:hover:bg-dark-secondary dark:hover:border-dark-secondary',
    secondary:
      'bg-light-inputBackground dark:bg-dark-inputBackground border-light-accent dark:border-dark-accent text-light-secondary dark:text-dark-secondary hover:bg-light-secondary dark:hover:bg-dark-secondary hover:text-white dark:hover:text-dark-background',
  };

  return (
    <a
      className={`${baseStyles} ${variantStyles[variant]}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
