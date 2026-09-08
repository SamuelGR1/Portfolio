import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import ProjectImageSlider from "./ProjectImageSlider";

interface Project {
  number: string;
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  github: string;
  demo?: string;
}


 const projects : Project[] = [
  {
    number: "01",
    title: "ToolsFinder ",

    images: [
      "/toolsfinder1.jpg",
      "/toolsfinder2.jpg",
    ],

    description:
      "Aplicación móvil que utiliza inteligencia artificial para el reconocimiento de herramientas, combinando consumo de APIs, servicios externos y tecnologías móviles para agilizar la identificación y consulta de información relevante.",

    technologies: [
      "React Native",
      "TypeScript",
      "Firebase",
      "APIs",
    ],

    github: "https://github.com/SamuelGR1/ToolsFinder_Proyecto1.git",
   
    
  },

  {
    number: "02",
    title: "TimeServe",

    images: [
      "/Pantalla1.jpeg",
      "/Pantalla2.jpeg",
    ],

    description:
      "Sistema de gestión y control de tiempo desarrollado para estaciones de trabajo en entornos compartidos, como café internet. Permite administrar y monitorear individualmente el tiempo de uso de cada estación mediante una interfaz gráfica.",

    technologies: [
      "CodeIgniter",
      "PHP",
      "MySQL",
      
    ],

    github: "https://github.com/Robyn-Orellana/PDW.git",
    
  },
];

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="scroll-mt-[20px] bg-[#FFFAF0] px-3.5 py-10
      bg-[radial-gradient(circle_at_80%_45%,rgba(0,128,128,0.12),transparent_50%)]"
      
    >
      <div className="mx-auto max-w-5xl">

        {/* Encabezado */}
        <div className="mb-14">

          
         <h2 className="mt-3 text-5xl font-bold text-[#B22222] sm:text-5xl mb-4"> 
          Proyectos 
          </h2>       
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-[#008080]">
           Lo que he construido
          </p>
          <div className="mt-5 h-px w-full bg-[#D8C9B8]" />
        </div>


        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
  key={project.title}
  className="
    group
    overflow-hidden
    border border-[#D8C9B8]
    bg-[#FFFDF8]
    transition duration-300
    hover:-translate-y-1
    hover:border-[#008080]
  "
>
  {/* Encabezado */}
  <div className="p-7 pb-5">
    <div className="flex items-center justify-between">
      <span className="font-mono text-sm text-[#008080]">
        {project.number}
      </span>

      <span className="font-mono text-xl text-[#B22222]/30">
        {"{ }"}
      </span>
    </div>

    <h3 className="mt-4 text-3xl font-bold text-[#3B3028] transition-colors group-hover:text-[#B22222]">
      {project.title}
    </h3>
  </div>

  {/* Imagen */}
  <div className="relative mx-7 rounded-lg aspect-video overflow-hidden">
 <ProjectImageSlider
  images={project.images}
  title={project.title}
/>

   
    <div
      className="
        absolute inset-0
        hidden flex-col justify-end
        p-6
        text-white
        opacity-0
        transition duration-300
        group-hover:opacity-100
        md:flex
      "
    >
      <p className="translate-y-4 leading-6 transition duration-300 group-hover:translate-y-0">
        {project.description}
      </p>

      <div className="mt-5 flex gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`GitHub de ${project.title}`}
          className="
            flex h-10 w-10 items-center justify-center
            border border-white/40
            transition
            hover:bg-white/15
          "
        >
          <FaGithub size={19} />
        </a>

          {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-2
            border border-white/40
            px-4 py-2
            font-mono text-sm
            transition
            hover:bg-white/15
          "
        >
          Ver proyecto
          <ExternalLink size={15} />
        </a>
        )}
      </div>
    </div>
  </div>


  <p className="mx-7 mt-5 leading-7 text-[#75665A] md:hidden">
    {project.description}
  </p>

  {/* Tecnologías */}
  <div className="flex flex-wrap gap-2 p-7">
    {project.technologies.map((technology) => (
      <span
        key={technology}
        className="
          border border-[#008080]/30
          px-3 py-1
          font-mono text-xs
          text-[#008080]
        "
      >
        {technology}
      </span>
    ))}
  </div>
</article>
          ))}
        </div>
      </div>
    </section>
  );
}