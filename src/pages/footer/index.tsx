import { SocialLink } from "@/components/social-link";
import { SOCIALS } from "@/constants/socials";

export default function Footer() {
  return (
    <div className="bg-light-surface dark:bg-dark-surface shadow-md'">
      <div className="container mx-auto h-auto flex flex-col justify-center items-center gap-6 p-6">
        <div className="flex gap-4">
          {SOCIALS.map((item) => (
            <SocialLink
              href={item.href}
              icon={<item.icon />}
              label={item.label}
              variant="secondary"
            />
          ))}
        </div>
        <p className="text-mono text-sm text-light-text dark:text-dark-text">
          desenvolvido por
          <span className="font-bold"> @mateuswalz</span>
        </p>
      </div>
    </div>
  );
}
