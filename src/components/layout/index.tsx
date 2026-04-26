import { ReactNode } from 'react';

export function Layout({
  children,
  subtitle,
  id,
}: {
  children: ReactNode;
  subtitle: string;
  id: string;
}) {
  return (
    <section id={id} className="py-14 md:py-20">
      <div className="container mx-auto h-full flex flex-col justify-center items-center px-4">
        <h2 className="text-subtitle font-mono text-center text-light-secondary dark:text-dark-secondary tracking-tight mb-5">
          <code>{subtitle}</code>
        </h2>
        <div className="section-shell w-full p-6 md:p-10">{children}</div>
      </div>
    </section>
  );
}
