// POST /api/lead
//
// Accepts a captured lead from the chat widget and either:
//   1. forwards it to LEAD_WEBHOOK_URL if that env var is set, or
//   2. logs it to the server console (visible during `npm run dev`)
//
// The webhook URL is provider-agnostic. It works with GoHighLevel, APCC,
// Make.com, Zapier, n8n, or any endpoint that accepts a POST with JSON.
// User-facing response is always 200 — webhook failures are logged but never
// surfaced to the visitor, so a misconfigured webhook never breaks the chat.

export async function POST(request) {
  let lead;
  try {
    lead = await request.json();
  } catch {
    return Response.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  console.log("[lead]", JSON.stringify(lead));

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    try {
      const r = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
      if (!r.ok) {
        console.error("[lead] webhook returned", r.status);
      }
    } catch (err) {
      console.error("[lead] webhook error", err);
    }
  }

  return Response.json({ ok: true });
}
