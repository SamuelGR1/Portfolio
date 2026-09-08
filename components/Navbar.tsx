export default function Navbar() {
  return (
    <nav
      className="
        sticky top-0 z-50
        flex items-center justify-center
        border-b border-[#F5F5DC]
        bg-[#FFFAF0]/75
        backdrop-blur-sm
      "
    >
      <div
        className="
          mx-auto flex w-full max-w-6xl
          items-center justify-center
          px-2 py-3
          sm:px-4 sm:py-4
          lg:px-8 lg:py-5
        "
      >
        <div
          className="
            flex items-center justify-center
            gap-1
            text-xs font-medium
            text-[#3B3028]
            sm:gap-3 sm:text-sm
            md:gap-6
            lg:gap-13
          "
        >
          <a
            href="#inicio"
            className="
              whitespace-nowrap
              rounded-md
              px-2 py-1
              transition-all duration-200
              hover:bg-[#008080]/10
              hover:text-[#DC143C]
              sm:px-3
              lg:px-5
            "
          >
            Inicio
          </a>

          <a
            href="#sobre-mi"
            className="
              whitespace-nowrap
              rounded-md
              px-2 py-1
              transition-all duration-200
              hover:bg-[#008080]/10
              hover:text-[#DC143C]
              sm:px-3
              lg:px-5
            "
          >
            Sobre mí
          </a>

          <a
            href="#proyectos"
            className="
              whitespace-nowrap
              rounded-md
              px-2 py-1
              transition-all duration-200
              hover:bg-[#008080]/10
              hover:text-[#DC143C]
              sm:px-3
              lg:px-5
            "
          >
            Proyectos
          </a>

          <a
            href="#contacto"
            className="
              whitespace-nowrap
              rounded-md
              px-2 py-1
              transition-all duration-200
              hover:bg-[#008080]/10
              hover:text-[#DC143C]
              sm:px-3
              lg:px-5
            "
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}