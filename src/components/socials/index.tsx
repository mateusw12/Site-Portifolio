import { SocialLink } from "../social-link";
import { SOCIALS } from "@/constants/socials";

export default function Socials() {
  return (
    <>
      <div className="fixed bottom-20 left-8 flex-col gap-3 hidden md:flex z-40">
        {SOCIALS.map((item) => (
          <SocialLink
            key={item.label}
            href={item.href}
            icon={<item.icon />}
            label={item.label}
          />
        ))}
      </div>
      <div className="fixed bottom-0 left-[3.35rem] h-[5rem] border-l rounded-sm border-light-accent dark:border-dark-accent mt-2 hidden md:block" />
    </>
  );
}
