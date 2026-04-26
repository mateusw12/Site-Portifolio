import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Layout } from "../../components/layout";
import { IProject } from "@/constants/interface";

interface ProjectsProps {
  projects: IProject[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <Layout subtitle="<!-- projetos -->" id="projects">
      <div className="py-2 w-full max-w-screen-xl">
        <div className="mb-8 max-w-2xl">
          <h3 className="section-title mb-2">Projetos selecionados</h3>
          <p className="text-light-text dark:text-dark-text">
            Aplicacoes desenvolvidas com foco em qualidade de codigo, experiencia do usuario e impacto real de negocio.
          </p>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={14}
          pagination={{
            el: ".custom-swiper-pagination",
            clickable: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            900: { slidesPerView: 2, spaceBetween: 20 },
            1280: { slidesPerView: 3, spaceBetween: 24 },
          }}
          modules={[Pagination]}
          className="mySwiper h-full"
        >
          {projects.map((project, index) => (
            <SwiperSlide
              key={index}
              className="rounded-2xl border border-light-accent dark:border-dark-accent bg-light-surface/80 dark:bg-dark-surface/85 shadow-[0_14px_36px_-20px_rgba(12,27,51,0.5)]"
            >
              <div className="flex flex-col h-full">
                <div className="p-5 md:p-6 flex flex-col flex-1 gap-3 min-h-[17rem]">
                  <h3 className="text-light-primary dark:text-dark-primary text-xl font-bold leading-tight">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 text-sm text-light-secondary dark:text-dark-secondary font-semibold flex-wrap">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 hover:underline"
                    >
                      <FaGithub /> Repositório
                    </a>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 hover:underline"
                      >
                        <FaExternalLinkAlt /> Ver projeto
                      </a>
                    )}
                  </div>

                  <p className="flex-1 text-sm md:text-base text-light-text dark:text-dark-text leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex gap-2 flex-wrap mt-auto">
                    {project.stacks.map((stack, i) => (
                      <span
                        key={i}
                        className="py-1 px-2.5 font-semibold border text-xs rounded-full text-light-secondary border-light-accent dark:text-dark-secondary dark:border-dark-accent"
                      >
                        {stack}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-swiper-pagination flex justify-center mt-6"></div>
      </div>
    </Layout>
  );
}
