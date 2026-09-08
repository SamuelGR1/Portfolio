import SkillsTape from "./SkillsTape";

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="
        scroll-mt-20
        border-t border-[#D8C9B8]
        bg-[#FFFAF0]
        px-5 py-16
        sm:px-6 sm:py-20
        lg:py-24
      "
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-left">

          {/* Línea decorativa */}
          <div
            className="
              h-px w-24
              bg-[#DC143C]
              sm:w-36
              lg:w-44
            "
          />

          <h2
            className="
              mt-4
              font-serif
              text-4xl
              font-bold
              uppercase
              tracking-wide
              text-[#3B3028]
              sm:text-5xl
              lg:text-6xl
            "
          >
            Sobre mí
          </h2>

          <p
            className="
              mt-6
              max-w-3xl
              text-base
              leading-7
              text-[#75665A]
              sm:mt-8
              sm:text-lg
              sm:leading-8
            "
          >
            Ingeniero en Sistemas en formación (Pensum Cerrado), con interés en
            crear soluciones útiles mediante la tecnología. Me caracteriza la
            curiosidad, el aprendizaje continuo y la búsqueda de soluciones a
            problemas reales. Disfruto investigar, experimentar con nuevas
            tecnologías y convertir ideas en proyectos funcionales.
          </p>
        </div>
      </div>

      <SkillsTape />
    </section>
  );
}