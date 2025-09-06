import { SocialLink } from "../social-link";
import { SOCIALS } from "@/constants/socials";

export default function Socials() {
  return (
    <>
      <div className="fixed bottom-20 left-10 flex-col gap-2 hidden md:flex z-50">
        {SOCIALS.map((item) => (
          <SocialLink
            href={item.href}
            icon={<item.icon />}
            label={item.label}
          />
        ))}
      </div>
      <div className="fixed bottom-0 left-[3.8rem] h-[4.5rem] border-l-2 rounded-sm border-light-secondary dark:border-dark-primary mt-2 hidden md:block"></div>
    </>
  );
}
