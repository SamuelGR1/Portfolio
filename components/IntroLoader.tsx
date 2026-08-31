"use client";

import { useEffect, useState } from "react";

export default function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
  // me sirve para que no aparesca en el scroll anterior al refrescar
  const previousScrollRestoration = window.history.scrollRestoration;
  window.history.scrollRestoration = "manual";

  // para comenzar siempre arriba sin scroll
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "auto",
  });

  // esto evita que se scrolee mientras da bienvenida
  document.body.style.overflow = "hidden";

  const closeTimer = setTimeout(() => {
    setClosing(true);
  }, 1300);

  const removeTimer = setTimeout(() => {
    // Nos aseguramos nuevamente de estar arriba
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    setVisible(false);
    document.body.style.overflow = "";
  }, 2300);

  return () => {
    clearTimeout(closeTimer);
    clearTimeout(removeTimer);

    document.body.style.overflow = "";
    window.history.scrollRestoration = previousScrollRestoration;
  };
}, []);
  if (!visible) return null;

  return (
    <div
      className={`
        fixed inset-0 z-[9999]
        flex items-center justify-center
        overflow-hidden
        bg-[#FFFAF0]
        transition-transform duration-700 ease-in-out
        ${closing ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      {/* Barras de fondo */}
      <div
        aria-hidden="true"
        className="
          intro-bars
          pointer-events-none
          absolute inset-0
        "
      />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center text-center">

        {/* Llaves */}
        <div className="intro-braces flex items-center gap-6 font-mono text-7xl text-[#008080] sm:text-8xl">
          <span>{"{"}</span>
          <span>{"}"}</span>
        </div>

        {/* Bienvenido */}
        <h1
          className="
            intro-welcome
            mt-5
            text-4xl font-bold
            tracking-[0.16em]
            text-[#B22222]
            sm:text-6xl
          "
        >
          BIENVENIDO
        </h1>

        {/* Terminal */}
        <div className="mt-5 font-mono text-sm text-[#008080] sm:text-base">
          <span className="typewriter">
            &lt;portfolio /&gt;
          </span>
        </div>

       
      </div>
    </div>
  );
}