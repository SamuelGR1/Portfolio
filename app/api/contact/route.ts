import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const subject = String(body.subject || "").trim();
    const message = String(body.message || "").trim();

    // Honeypot
    const website = String(body.website || "").trim();

    /*
      Si un bot llena este campo escondido,
      fingimos que todo salió bien,
      pero no enviamos ningún correo.
    */
    if (website) {
      return Response.json({
        success: true,
      });
    }

    // Campos obligatorios
    if (!name || !email || !message) {
      return Response.json(
        {
          error: "Faltan campos obligatorios.",
        },
        {
          status: 400,
        }
      );
    }

    // Límites
    if (
      name.length > 80 ||
      email.length > 120 ||
      subject.length > 120 ||
      message.length > 2000
    ) {
      return Response.json(
        {
          error: "Alguno de los campos excede el límite permitido.",
        },
        {
          status: 400,
        }
      );
    }

    // Validación básica del correo
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return Response.json(
        {
          error: "Correo electrónico inválido.",
        },
        {
          status: 400,
        }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",

      to: [process.env.CONTACT_EMAIL!],

      subject:
        subject ||
        `Nuevo mensaje de ${name}`,

      replyTo: email,

      html: `
        <h2>Nuevo mensaje desde tu portafolio</h2>

        <p>
          <strong>Nombre:</strong>
          ${safeName}
        </p>

        <p>
          <strong>Correo:</strong>
          ${safeEmail}
        </p>

        <p>
          <strong>Asunto:</strong>
          ${safeSubject || "Sin asunto"}
        </p>

        <hr />

        <p>
          ${safeMessage.replaceAll("\n", "<br>")}
        </p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        {
          error: "No se pudo enviar el correo.",
        },
        {
          status: 500,
        }
      );
    }

    return Response.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Contact error:", error);

    return Response.json(
      {
        error: "Error interno del servidor.",
      },
      {
        status: 500,
      }
    );
  }
}