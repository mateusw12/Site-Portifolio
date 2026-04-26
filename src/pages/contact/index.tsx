import { FaRegWindowMinimize } from "react-icons/fa";
import { RiCheckboxMultipleBlankLine, RiCloseLargeFill } from "react-icons/ri";
import { ContactForm } from "./form";

export default function Contact() {
  return (
    <section id="contact" className="py-14 md:py-20">
      <div className="container mx-auto h-full flex flex-col justify-center items-center px-4">
        <div className="max-w-2xl w-full rounded-2xl flex flex-col border border-light-accent dark:border-dark-accent bg-light-surface/80 dark:bg-dark-surface/80 shadow-[0_20px_50px_-28px_rgba(12,27,51,0.5)] backdrop-blur-sm overflow-hidden">
          <div className="h-10 w-full px-4 flex justify-end items-center gap-2 text-xl text-light-secondary/60 dark:text-dark-secondary/40 bg-light-inputBackground dark:bg-dark-inputBackground border-b border-light-accent dark:border-dark-accent">
            <FaRegWindowMinimize />
            <RiCheckboxMultipleBlankLine />
            <RiCloseLargeFill />
          </div>
          <div className="w-full py-10 md:py-12 px-6 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-light-primary dark:text-dark-primary mb-3">
              Vamos conversar sobre sua proxima vaga?
            </h2>
            <p className="text-center text-light-text dark:text-dark-text mb-7">
              Envie uma mensagem e retorno em breve com disponibilidade, portfolio e detalhes tecnicos.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
