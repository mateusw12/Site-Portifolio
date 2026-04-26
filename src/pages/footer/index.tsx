import { SocialLink } from "@/components/social-link";
import { SOCIALS } from "@/constants/socials";

export default function Footer() {
  return (
    <footer className="py-8 md:py-10">
      <div className="container mx-auto h-auto flex flex-col justify-center items-center gap-6 px-4">
        <div className="section-shell w-full max-w-4xl p-6 md:p-8 flex flex-col items-center gap-6">
          <div className="flex gap-4">
          {SOCIALS.map((item) => (
            <SocialLink
              key={item.label}
              href={item.href}
              icon={<item.icon />}
              label={item.label}
              variant="secondary"
            />
          ))}
          </div>

          <p className="text-sm text-center text-light-text dark:text-dark-text">
            Portfolio profissional desenvolvido com foco em clareza tecnica,
            posicionamento de carreira e comunicacao com recrutadores.
          </p>

          <p className="text-sm font-medium text-light-secondary dark:text-dark-secondary">
            desenvolvido por <span className="font-bold">@mateuswalz</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
