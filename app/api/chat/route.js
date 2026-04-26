import Anthropic from "@anthropic-ai/sdk";

const FALLBACK = "I can help you request an appointment. Want to start?";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ text: FALLBACK });
  }

  const system = typeof body?.system === "string" ? body.system : "";
  const user = typeof body?.user === "string" ? body.user : "";

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return Response.json({ text: FALLBACK });
  }

  try {
    const client = new Anthropic({ apiKey });
    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 200,
      system,
      messages: [{ role: "user", content: user }],
    });
    const block = message.content?.[0];
    const text =
      block && block.type === "text" ? block.text.trim() : "";
    return Response.json({ text: text || FALLBACK });
  } catch {
    return Response.json({ text: FALLBACK });
  }
}
