import Image from "next/image";
import { Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="
        scroll-mt-20
        relative overflow-hidden
        flex min-h-[calc(100svh-70px)]
        flex-col items-center justify-center
        bg-[radial-gradient(circle_at_25%_45%,rgba(0,128,128,0.12),transparent_50%)]
        px-4 pb-16 pt-32
        text-center
        sm:px-6 sm:pt-36
        lg:min-h-[calc(110vh-100px)]
        lg:py-20
      "
    >
     
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-x-0 top-0
          h-28
          bg-[repeating-linear-gradient(90deg,rgba(0,128,128,0.20)_0px,rgba(0,128,128,0.20)_38px,transparent_35px,transparent_70px)]
          [mask-image:linear-gradient(to_bottom,black_0%,black_55%,transparent_100%)]
          sm:h-36
          lg:h-44
        "
      />

  
      <div
        className="
          relative z-10
          flex flex-col
          items-center
          gap-8
          md:flex-row
          md:gap-10
          md:text-left
          lg:-translate-x-10
        "
      >
        
        <div className="flex shrink-0 items-center justify-center gap-1 sm:gap-2">
          <span
            className="
              font-mono
              text-[65px]
              leading-none
              text-[#008080]
              sm:text-[85px]
              lg:text-[110px]
            "
          >
            {"{"}
          </span>

          <Image
            src="/samus2.png"
            alt="Samuel Gerónimo"
            width={250}
            height={250}
            priority
            className="
              h-[165px] w-[165px]
              rounded-full
              object-cover
              sm:h-[200px] sm:w-[200px]
              lg:h-[250px] lg:w-[250px]
            "
          />

          <span
            className="
              font-mono
              text-[65px]
              leading-none
              text-[#008080]
              sm:text-[85px]
              lg:text-[110px]
            "
          >
            {"}"}
          </span>
        </div>

       
        <div className="max-w-xl">
          <p
            className="
              font-mono
              text-xs
              uppercase
              tracking-[0.25em]
              text-[#008080]
              sm:text-sm
              sm:tracking-[0.3em]
            "
          >
            Hola, soy
          </p>

          <h1
            className="
              mt-1
              text-4xl
              font-bold
              tracking-tight
              text-[#B22222]
              sm:text-5xl
              lg:text-6xl
            "
          >
            Samuel Gerónimo
          </h1>

          <h2
            className="
              mt-2
              text-xl
              font-semibold
              text-[#008080]
              sm:text-2xl
              lg:text-3xl
            "
          >
            &lt;Desarrollador Back End&gt;
          </h2>

          <p
            className="
              shimmer-text
              mx-auto mt-3
              max-w-md
              font-[serif]
              text-lg
              italic
              tracking-wide
              sm:text-xl
              md:mx-0
              lg:text-2xl
            "
          >
            “Del problema a la solución, línea por línea.”
          </p>
        </div>
      </div>

      {/* Botones */}
      <div
        className="
          relative z-10
          mt-8
          flex flex-wrap
          items-center
          justify-center
          gap-3
          sm:gap-4
        "
      >
        <a
          href="/CV _SAMUEL_G_2026_IngSistemas.pdf"
          download="CV_SAMUEL_G_2026_IngSistemas.pdf"
          className="
            rounded-lg
            border border-[#D8C9B8]
            px-3 py-2
            text-sm
            font-medium
            text-[#3B3028]
            transition
            hover:border-[#B22222]
            hover:bg-[#F3EBDD]
            sm:text-base
          "
        >
          Descargar CV
        </a>

        <a
          href="#contacto"
          aria-label="Ir a contacto"
          className="
            flex items-center justify-center
            rounded-lg
            border border-[#D8C9B8]
            p-2.5
            text-[#3B3028]
            transition
            hover:border-[#B22222]
            hover:bg-[#F3EBDD]
            hover:text-[#B22222]
            sm:p-3
          "
        >
          <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
        </a>

        <a
          href="https://github.com/SamuelGR1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="
            flex items-center justify-center
            rounded-lg
            border border-[#D8C9B8]
            p-2.5
            text-[#3B3028]
            transition
            hover:border-[#008080]
            hover:bg-[#A9D9D3]
            hover:text-[#008080]
            sm:p-3
          "
        >
          <FaGithub className="h-5 w-5 sm:h-6 sm:w-6" />
        </a>
      </div>
    </section>
  );
}