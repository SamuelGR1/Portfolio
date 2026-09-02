"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, CircleAlert, Send } from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setStatus("sending");
    setStatusMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),

          // Campo anti-spam
          website: formData.get("website"),
        }),
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el mensaje");
      }

      setStatus("success");
      setStatusMessage(
        "Mensaje enviado correctamente. ¡Gracias por contactarme!"
      );

      form.reset();
    } catch {
      setStatus("error");
      setStatusMessage(
        "No se pudo enviar el mensaje. Inténtalo nuevamente."
      );
    }
  };

  return (
    <section
  id="contacto"
  className="scroll-mt-10 bg-[#FFFAF0] px-6 py-24"
>
  <div
    className="
      mx-auto grid max-w-6xl
      items-center gap-12
      lg:grid-cols-[0.8fr_1.2fr]
    "
  >

    
<div className="lg:pr-10">
  
  <h2
    className="
      mt-3
      text-6xl
      font-bold
      leading-none
      tracking-tight
      text-[#B22222]
      sm:text-7xl
    "
  >
    Contacto
  </h2>

  <div className="mt-6 h-px w-24 bg-[#008080]/50" />


  <p
    className="
      mt-4
      max-w-sm
      text-base
      leading-7
      text-[#75665A]
    "
  >
    Puedes enviarme un mensaje desde aquí y me llegará directamente
    al correo.
  </p>

  <div className="mt-10 flex items-center gap-3">
    <span className="h-px w-10 bg-[#B22222]/40" />
  </div>

  <p className="mt-10 font-mono text-xs uppercase tracking-[0.2em] text-[#75665A]/70">
    Disponible para oportunidades y colaboraciones
  </p>
</div>


    {/* FORMULARIO - DERECHA */}
    <div
      className="
         w-full
    max-w-xl
    justify-self-end
    rounded-2xl
    border border-[#008080]/20
    bg-white/35
    p-6
    backdrop-blur-md
    lg:p-7
      "
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        <div>
          <label
            htmlFor="name"
            className="mb-2 block font-mono text-sm text-[#3B3028]"
          >
            Nombre
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            className="
              w-full rounded-lg
              border border-[#008080]/30
              bg-white/40
              px-4 py-3
              text-black
              outline-none
              transition
              focus:border-[#B22222]
              focus:bg-white/60
            "
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block font-mono text-sm text-[#3B3028]"
          >
            Correo
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            className="
              w-full rounded-lg
              border border-[#008080]/30
              bg-white/40
              px-4 py-3
              text-black
              outline-none
              transition
              focus:border-[#B22222]
              focus:bg-white/60
            "
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="mb-2 block font-mono text-sm text-[#3B3028]"
          >
            Asunto
          </label>

          <input
            id="subject"
            name="subject"
            type="text"
            className="
              w-full rounded-lg
              border border-[#008080]/30
              bg-white/40
              px-4 py-3
              text-black
              outline-none
              transition
              focus:border-[#B22222]
              focus:bg-white/60
            "
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block font-mono text-sm text-[#3B3028]"
          >
            Mensaje
          </label>

          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="
              w-full resize-none rounded-lg
              border border-[#008080]/30
              bg-white/40
              px-4 py-3
              text-black
              outline-none
              transition
              focus:border-[#B22222]
              focus:bg-white/60
            "
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="
            border border-[#B22222]
            px-6 py-3
            font-mono
            text-[#B22222]
            transition
            hover:bg-[#B22222]
            hover:text-white
            disabled:opacity-50
          "
        >
          {status === "sending"
            ? "Enviando..."
            : "Enviar mensaje"}
        </button>

      </form>
    </div>

  </div>
</section>
  );
}