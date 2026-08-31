export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#F5F5DC] bg-[#FFFAF0]/75 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-8 py-5">
        <div className="flex gap-13 text-sm font-medium text-[#3B3028]">
        
          <a
            href="#inicio"
            className="transition-colors rounded-md px-5 py-1 hover:text-[#DC143C] 
            transition-all duration-200
            hover:bg-[#008080]/10"
          >
            Inicio
          </a>




          <a
            href="#sobre-mi"
            className="transition-colors rounded-md px-5 py-1 hover:text-[#DC143C]
            transition-all duration-200
            hover:bg-[#008080]/10"
            
          >
            Sobre mí
          </a>

          <a
            href="#proyectos"
            className="transition-colors hover:text-[#DC143C]
            rounded-md px-5 py-1 transition-all duration-200 hover:bg-[#008080]/10"
          >
            Proyectos
          </a>

        

          <a
            href="#contacto"
            className="transition-colors hover:text-[#DC143C]
            rounded-md px-5 py-1 transition-all duration-200 hover:bg-[#008080]/10"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}