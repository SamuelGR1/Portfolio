import SkillsTape from "./SkillsTape";

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="scroll-mt-15 border-t border-[#D8C9B8] bg-[EDE3DF] px-6 py-15"
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-left">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#DC143C]">
            ----------------------------------------
          </p>

          <h2 className="mt-3 font-serif text-5xl font-bold uppercase tracking-wide text-[#3B3028] sm:text-6xl">
            Sobre mí
          </h2>

        

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#75665A]">
            Ingeniero en Sistemas en formación (Pensum Cerrado), con interés en crear
            soluciones útiles mediante la tecnología. Me caracteriza la
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