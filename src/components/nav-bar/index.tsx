import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useEffect, useState } from "react";
import { IoMenu, IoMoon, IoSunny } from "react-icons/io5";
import { Button } from "../ui/button";

const links = [
  { title: "Sobre", anchorId: "#about" },
  { title: "Projetos", anchorId: "#projects" },
  { title: "Habilidades", anchorId: "#skills" },
  { title: "Contato", anchorId: "#contact" },
];

export function Navbar() {
  const getPreferredTheme = () => {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme") as "light" | "dark";
    }
    return "dark";
  };

  const [theme, setTheme] = useState<"light" | "dark">(getPreferredTheme());
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  //Gambiarra pq o shadcn está bugado!!
  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView();
      }
    }, 300);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 56);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-light-surface/90 dark:bg-dark-surface/90 border-b border-light-accent/50 dark:border-dark-accent shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        <h1 className="text-sm md:text-base font-bold text-light-primary dark:text-dark-primary">
          <a href="#home" className="tracking-tight">
            mateuswalz.dev
          </a>
        </h1>

        <div className="flex gap-3 md:gap-4 items-center">
          <div className="hidden md:flex gap-5 items-center">
            <ul className="flex gap-1 rounded-full bg-light-surface/90 dark:bg-dark-surface/90 border border-light-accent/60 dark:border-dark-accent px-2 py-1">
              {links.map((item, index) => (
                <li key={index}>
                  <Button aria-label={item.title} variant="link" size="sm">
                    <a href={item.anchorId}>{item.title}</a>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <button
            aria-label="Alterar Tema"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2.5 shadow-md rounded-full bg-light-surface/90 dark:bg-dark-surface/90 border border-light-accent dark:border-dark-accent text-light-secondary dark:text-dark-secondary hover:bg-light-secondary hover:text-white dark:hover:bg-dark-secondary dark:hover:text-dark-background transition-colors duration-300"
          >
            {theme === "light" ? (
              <IoMoon className="h-6 w-6" aria-label="Tema Dark" />
            ) : (
              <IoSunny className="h-6 w-6" aria-label="Tema Light" />
            )}
          </button>

          <Drawer open={menuOpen} onOpenChange={setMenuOpen}>
            <DrawerTrigger className="md:hidden p-2.5 shadow-md rounded-full bg-light-surface/90 dark:bg-dark-surface/90 border border-light-accent dark:border-dark-accent text-light-secondary dark:text-dark-secondary">
              <IoMenu className="h-6 w-6" />
            </DrawerTrigger>
            <DrawerContent>
              <ul className="flex flex-col gap-3 items-center py-5">
                {links.map((item, index) => (
                  <li key={index}>
                    <Button
                      aria-label={item.title}
                      variant="ghost"
                      size="default"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(item.anchorId);
                      }}
                    >
                      <a href={item.anchorId}>{item.title}</a>
                    </Button>
                  </li>
                ))}
              </ul>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
}
