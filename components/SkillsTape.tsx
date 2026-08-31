"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { FaJava, FaLaravel, FaReact, FaGithub } from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiTypescript,
  SiNextdotjs,
  SiFirebase,
  SiJavascript,
  SiDotnet,
  
} from "react-icons/si";

import { PiFileCSharpBold } from "react-icons/pi";

const skills = [
  {
    name: "Java",
    icon: <FaJava />,
  },

  {
    name: "Spring Boot",
    icon: <SiSpringboot />,
  },
  
  {
    name: "C#",
    icon: <PiFileCSharpBold />,
  },

  {
    name: ".NET",
    icon: <SiDotnet />,
  },


  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },

  {
    name: "React",
    icon: <FaReact />,
  },

  {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },


  {
    name: "Laravel",
    icon: <FaLaravel />,
  },


  {
    name: "MySQL",
    icon: <SiMysql />,
  },
   
  {
    name: "Firebase",
    icon: <SiFirebase />,
  },

    {
    name: "GitHub",
    icon: <FaGithub />,
  },


];

const ITEMS_PER_PAGE = 4;

export default function SkillsTape() {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(skills.length / ITEMS_PER_PAGE);

  const nextPage = () => {
    setPage((current) => (current + 1) % totalPages);
  };

  const previousPage = () => {
    setPage((current) =>
      current === 0 ? totalPages - 1 : current - 1
    );
  };

  return (
    <div className="mx-auto w-[90%] max-w-5xl mt-20 border-y border-x border-[#008080]/30 bg-[#008080]/8 py-8 ">
      
      {/* Título */}
      <div className="mb-7 text-center">
        <p className="font-mono text-sm uppercase tracking-[0.4em] text-[#B22222]">
          Habilidades //  Stack Tecnológico
        </p>
      </div>

      <div className="mx-auto flex max-w-4xl items-center gap-4 px-6">

        {/* Flecha izquierda */}
        <button
          type="button"
          onClick={previousPage}
          aria-label="Tecnologías anteriores"
          className="
            flex h-11 w-11 shrink-0 items-center justify-center
            rounded-full
            border border-[#008080]/30
            text-[#008080]
            transition
            hover:border-[#B22222]
            hover:bg-[#B22222]/10
            hover:text-[#B22222]
          "
        >
          <ChevronLeft size={22} />
        </button>

        {/* Ventana del carrusel */}
        <div className="flex-1 overflow-hidden py-3">

          {/* Pista que se desliza */}
          <div
            className="
              flex
              transition-transform
              duration-700
              ease-in-out
            "
            style={{
              transform: `translateX(-${page * 100}%)`,
            }}
          >

            {Array.from({ length: totalPages }).map(
              (_, pageIndex) => {
                const pageSkills = skills.slice(
                  pageIndex * ITEMS_PER_PAGE,
                  pageIndex * ITEMS_PER_PAGE + ITEMS_PER_PAGE
                );

                return (
                  <div
                    key={pageIndex}
                    className="grid min-w-full grid-cols-4 gap-6"
                  >
                    {pageSkills.map((skill) => (
                      <div
                        key={skill.name}
                        className="
                          group
                          flex flex-col
                          items-center
                          justify-center
                          gap-2
                          text-center
                          font-mono
                          text-sm
                          text-[#3B3028]
                        "
                      >
                        <span
                          className="
                            text-3xl
                            text-[#008080]
                            transition
                            duration-300
                            group-hover:-translate-y-1
                            group-hover:scale-110
                            group-hover:text-[#B22222]
                          "
                        >
                          {skill.icon}
                        </span>

                        <span>
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                );
              }
            )}

          </div>
        </div>

        {/* Flecha derecha */}
        <button
          type="button"
          onClick={nextPage}
          aria-label="Siguientes tecnologías"
          className="
            flex h-11 w-11 shrink-0 items-center justify-center
            rounded-full
            border border-[#008080]/30
            text-[#008080]
            transition
            hover:border-[#B22222]
            hover:bg-[#B22222]/10
            hover:text-[#B22222]
          "
        >
          <ChevronRight size={22} />
        </button>

      </div>
    </div>
  );
}