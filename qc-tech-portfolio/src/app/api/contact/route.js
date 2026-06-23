export const dynamic = "force-dynamic";

const EMAILJS_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";

function getEmailConfig() {
  return {
    serviceId:
      process.env.EMAILJS_SERVICE_ID ||
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
      process.env.VITE_EMAILJS_SERVICE_ID,
    templateId:
      process.env.EMAILJS_TEMPLATE_ID ||
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
      process.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey:
      process.env.EMAILJS_PUBLIC_KEY ||
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ||
      process.env.VITE_EMAILJS_PUBLIC_KEY,
    privateKey:
      process.env.EMAILJS_PRIVATE_KEY ||
      process.env.EMAILJS_ACCESS_TOKEN ||
      process.env.VITE_EMAILJS_PRIVATE_KEY,
  };
}

function validatePayload(payload) {
  if (payload.website?.trim()) {
    return "Message ignoré.";
  }

  if (!payload.name || payload.name.trim().length < 2) {
    return "Merci d’indiquer votre nom.";
  }

  if (!payload.email || !payload.email.includes("@")) {
    return "Merci d’indiquer une adresse email valide.";
  }

  if (!payload.message || payload.message.trim().length < 10) {
    return "Merci de décrire votre besoin en quelques mots.";
  }

  return "";
}

export async function POST(request) {
  const payload = await request.json();
  const validationError = validatePayload(payload);

  if (validationError) {
    if (payload.website?.trim()) {
      return Response.json({ success: true });
    }

    return Response.json({ message: validationError }, { status: 400 });
  }

  const { serviceId, templateId, publicKey, privateKey } = getEmailConfig();

  if (!serviceId || !templateId || !publicKey) {
    return Response.json(
      { message: "La configuration EmailJS serveur est manquante." },
      { status: 500 }
    );
  }

  const emailResponse = await fetch(EMAILJS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      accessToken: privateKey || undefined,
      template_params: {
        from_name: payload.name.trim(),
        from_email: payload.email.trim(),
        reply_to: payload.email.trim(),
        project_type: payload.projectType,
        message: payload.message.trim(),
      },
    }),
  });

  if (!emailResponse.ok) {
    const errorText = await emailResponse.text();
    console.error("EmailJS server error:", errorText);

    return Response.json(
      { message: "L’envoi du message a échoué." },
      { status: 502 }
    );
  }

  return Response.json({ success: true });
}
