import { useEffect, useState } from "react";
import { animate } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutOffset = document.getElementById("home")?.offsetTop || 0;
      setShow(window.scrollY > aboutOffset + 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    animate(window.scrollY, 0, {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: (value) => window.scrollTo(0, value),
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50 flex items-center justify-center
        w-14 h-14 rounded-full bg-blue-600 text-white
        shadow-xl hover:bg-blue-700 hover:scale-110
        transition-transform transition-opacity duration-500
        ease-in-out transform
        ${
          show
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 pointer-events-none"
        }
      `}
    >
      <FaArrowUp size={20} />{" "}
    </button>
  );
}

export default ScrollToTopButton;
