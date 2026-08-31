import Image from "next/image";
import {  Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";


export default function Hero() {
  return (

<section
  id="inicio"
  className="
  scroll-mt-20
    relative overflow-hidden
    flex min-h-[calc(110vh-100px)] flex-col items-center justify-center
    bg-[radial-gradient(circle_at_25%_45%,rgba(0,128,128,0.12),transparent_50%)]
    px- text-center
  "
>
        <div
        aria-hidden="true"
        className="
            pointer-events-none absolute inset-x-0 top-0 h-44
            bg-[repeating-linear-gradient(90deg,rgba(0,128,128,0.20)_0px,rgba(0,128,128,0.20)_35px,transparent_30px,transparent_60px)]
            [mask-image:linear-gradient(to_bottom,black_0%,black_55%,transparent_100%)]
        "
        />

     <div className="flex flex-col items-center gap-6 sm:-translate-x-10 sm:flex-row sm:text-left">
       <div className="flex shrink-0 items-center gap-2">
            <span className="font-mono text-[110px] leading-none text-[#008080]">
                {"{"}
            </span>

            <Image
                src="/samus2.png"
                alt="Samuel Gerónimo"
                width={250}
                height={250}
                className="h-[250px] w-[250px] rounded-full object-cover"
            />

            <span className="font-mono text-[110px] leading-none text-[#008080]">
                {"}"}
        </span>
        </div>


      

<span className="absolute right-12 bottom-20 font-mono text-5xl text-[#B22222]/10">
  {"</>"}
</span>

        <div>
          <h1 className="text-5xl font-bold tracking-tight text-[#B22222] sm:text-6xl">
            Samuel Gerónimo
          </h1>
          
          <h2 className="mt-1 text-3xl font-semibold text-[#008080]">
                &lt;Desarrollador Back End&gt;
          </h2>
            
            <p className="shimmer-text mt-3 font-serif text-xl italic tracking-wide sm:text-2x3">
                “Del problema a la solución, línea por línea.”
            </p>
        </div>
      </div>

       

      <div className="mt-8 flex flex-wrap justify-center gap-4">
  <a
    href="#curriculum"
    className="rounded-lg border border-[#D8C9B8] px-3 py-2 font-medium text-[#3B3028] transition hover:border-[#B22222] hover:bg-[#F3EBDD]"
  >
    Descargar CV
  </a>

  
 <a
  href="#contacto"
  aria-label="Ir a contacto"
  className="flex items-center justify-center rounded-lg border border-[#D8C9B8] p-3 text-[#3B3028] transition hover:border-[#B22222] hover:bg-[#F3EBDD] hover:text-[#B22222]"
>
  <Mail size={24} />
</a>
<a
  href="https://github.com/SamuelGR1"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="GitHub"
  className="flex items-center justify-center rounded-lg border border-[#D8C9B8] p-3 text-[#3B3028] transition hover:border-[#008080] hover:bg-[#A9D9D3] hover:text-[#008080]"
>
  <FaGithub size={24} />
</a>

</div>

    </section>
  );
}