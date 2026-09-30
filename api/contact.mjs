const recipient = 'beatrizvidal.dev@gmail.com';
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  const origin = request.headers.get('origin');
  if (origin && origin !== new URL(request.url).origin) {
    return Response.json({ error: 'Origem inválida.' }, { status: 403 });
  }

  const bodySize = Number(request.headers.get('content-length') ?? 0);
  if (bodySize > 4096) return Response.json({ error: 'Dados inválidos.' }, { status: 413 });

  let data;
  try {
    const rawBody = await request.text();
    if (rawBody.length > 4096) throw new Error('Dados excedem o limite.');
    data = JSON.parse(rawBody);
  } catch {
    return Response.json({ error: 'Dados inválidos.' }, { status: 400 });
  }

  if (data?.website) return Response.json({ ok: true }, { headers: { 'Cache-Control': 'no-store' } });

  const email = typeof data?.email === 'string' ? data.email.trim() : '';
  if (!email || email.length > 254 || !emailPattern.test(email)) {
    return Response.json({ error: 'Informe um e-mail válido.' }, { status: 400 });
  }
  const message = typeof data?.message === 'string' ? data.message.trim() : '';
  if (!message || message.length > 1000) {
    return Response.json({ error: 'Informe uma mensagem válida.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !from) {
    return Response.json({ error: 'Envio direto indisponível.' }, { status: 503 });
  }

  try {
    const delivery = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: email,
        subject: 'Contato pelo portfólio de Beatriz Vidal',
        text: `${message}\n\nE-mail para resposta: ${email}`,
      }),
    });
    if (!delivery.ok) throw new Error('Falha no serviço de envio.');
    return Response.json({ ok: true }, { headers: { 'Cache-Control': 'no-store' } });
  } catch {
    return Response.json({ error: 'Não foi possível enviar agora.' }, { status: 502 });
  }
}
